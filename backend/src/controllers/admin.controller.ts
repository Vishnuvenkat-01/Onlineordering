import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getDashboard(_req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [todayOrders, todayRevenue, totalOrders, topItemsRaw] = await Promise.all([
      prisma.order.count({ where: { createdAt: { gte: today } } }),
      prisma.order.aggregate({
        where: { createdAt: { gte: today }, status: { notIn: ['CANCELLED'] } },
        _sum: { totalAmount: true },
      }),
      prisma.order.count(),
      prisma.orderItem.groupBy({
        by: ['menuItemId'],
        _sum: { quantity: true },
        orderBy: { _sum: { quantity: 'desc' } },
        take: 5,
      }),
    ]);

    // Resolve top item names
    const topItems = await Promise.all(
      topItemsRaw.map(async (r) => {
        const item = await prisma.menuItem.findUnique({ where: { id: r.menuItemId }, select: { name: true } });
        return { name: item?.name ?? 'Unknown', count: r._sum.quantity ?? 0 };
      })
    );

    res.json({
      success: true,
      data: {
        todayOrders,
        todayRevenue: todayRevenue._sum.totalAmount ?? 0,
        totalOrders,
        topItems,
      },
    });
  } catch (err) { next(err); }
}
