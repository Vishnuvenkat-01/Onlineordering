import { Router } from 'express';
import {
  createOrder,
  verifyPayment,
  getMyOrders,
  getOrderById,
  getAllOrders,
  updateOrderStatus,
} from '../controllers/order.controller';
import { authenticate, requireAdmin } from '../middleware/auth.middleware';

const router = Router();

// Customer routes
router.post('/', authenticate, createOrder);
router.post('/verify-payment', authenticate, verifyPayment);
router.get('/my', authenticate, getMyOrders);
router.get('/:id', authenticate, getOrderById);

// Admin routes
router.get('/admin', authenticate, requireAdmin, getAllOrders);
router.patch('/:id/status', authenticate, requireAdmin, updateOrderStatus);

export default router;
