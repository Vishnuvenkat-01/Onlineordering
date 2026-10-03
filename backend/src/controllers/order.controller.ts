import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

export type OrderStatus = 'PLACED' | 'PREPARING' | 'OUT_FOR_DELIVERY' | 'DELIVERED' | 'CANCELLED';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import { io } from '../server';

const prisma = new PrismaClient();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

const ITEM_INCLUDE = {
  items: {
    include: {
      menuItem: {
        select: { id: true, name: true, price: true, imageUrl: true, isVeg: true },
      },
    },
  },
  address: true,
};

interface AuthReq extends Request { user?: { id: string; role: string }; }

export async function createOrder(req: AuthReq, res: Response, next: NextFunction): Promise<void> {
  try {
    const { items, address, totalAmount } = req.body;
    const userId = req.user!.id;

    // Create address record
    const addr = await prisma.address.create({
      data: { userId, ...address },
    });

    // Create order + items in a transaction
    const order = await prisma.$transaction(async (tx) => {
      const newOrder = await tx.order.create({
        data: {
          userId,
          addressId: addr.id,
          totalAmount,
          items: {
            create: items.map((i: { menuItemId: string; quantity: number; price: number }) => ({
              menuItemId: i.menuItemId,
              quantity: i.quantity,
              price: i.price,
            })),
          },
        },
        include: ITEM_INCLUDE,
      });
      return newOrder;
    });

    // Create Razorpay order (amount in paise)
    const rzpOrder = await razorpay.orders.create({
      amount: Math.round(totalAmount * 100),
      currency: 'INR',
      receipt: order.id.slice(0, 40),
    });

    // Notify admin of new order via Socket.IO
    io.to('admin').emit('order:new', order);

    res.status(201).json({
      success: true,
      data: {
        order,
        payment: {
          razorpayOrderId: rzpOrder.id,
          amount: rzpOrder.amount,
          currency: rzpOrder.currency,
          orderId: order.id,
        },
      },
    });
  } catch (err) { next(err); }
}

export async function verifyPayment(req: AuthReq, res: Response, next: NextFunction): Promise<void> {
  try {
    const { orderId, razorpayOrderId, razorpayPaymentId, razorpaySignature } = req.body;

    // Verify HMAC signature
    const body = `${razorpayOrderId}|${razorpayPaymentId}`;
    const expected = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(body)
      .digest('hex');

    if (expected !== razorpaySignature) {
      res.status(400).json({ success: false, message: 'Payment verification failed' });
      return;
    }

    const order = await prisma.order.update({
      where: { id: orderId },
      data: { paymentId: razorpayPaymentId, status: 'PLACED' },
      include: ITEM_INCLUDE,
    });

    res.json({ success: true, data: order });
  } catch (err) { next(err); }
}

export async function getMyOrders(req: AuthReq, res: Response, next: NextFunction): Promise<void> {
  try {
    const orders = await prisma.order.findMany({
      where: { userId: req.user!.id },
      include: ITEM_INCLUDE,
      orderBy: { createdAt: 'desc' },
    });
    res.json({ success: true, data: orders });
  } catch (err) { next(err); }
}

export async function getOrderById(req: AuthReq, res: Response, next: NextFunction): Promise<void> {
  try {
    const order = await prisma.order.findUnique({
      where: { id: req.params.id },
      include: ITEM_INCLUDE,
    });
    if (!order) { res.status(404).json({ success: false, message: 'Order not found' }); return; }
    // Only owner or admin can view
    if (order.userId !== req.user!.id && req.user!.role !== 'ADMIN') {
      res.status(403).json({ success: false, message: 'Forbidden' }); return;
    }
    res.json({ success: true, data: order });
  } catch (err) { next(err); }
}

export async function getAllOrders(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { status, page = '1' } = req.query;
    const pageNum = parseInt(page as string, 10);
    const perPage = 20;

    const where: Record<string, unknown> = {};
    if (status) where.status = status;

    const [orders, total] = await Promise.all([
      prisma.order.findMany({
        where,
        include: ITEM_INCLUDE,
        orderBy: { createdAt: 'desc' },
        skip: (pageNum - 1) * perPage,
        take: perPage,
      }),
      prisma.order.count({ where }),
    ]);

    res.json({ success: true, data: orders, total });
  } catch (err) { next(err); }
}

export async function updateOrderStatus(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { id } = req.params;
    const { status } = req.body as { status: OrderStatus };

    const order = await prisma.order.update({
      where: { id },
      data: { status },
      include: ITEM_INCLUDE,
    });

    // Broadcast to customer's room
    io.to(`order:${id}`).emit('order:status_updated', { orderId: id, status });
    // Also broadcast to admin room
    io.to('admin').emit('order:status_updated', { orderId: id, status });

    res.json({ success: true, data: order });
  } catch (err) { next(err); }
}
