import { Router } from 'express';
import {
  getAllItems,
  getCategories,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
  toggleAvailability,
} from '../controllers/menu.controller';
import { authenticate, requireAdmin } from '../middleware/auth.middleware';
import { upload } from '../middleware/upload.middleware';

const router = Router();

// Public
router.get('/', getAllItems);
router.get('/categories', getCategories);
router.get('/:id', getItemById);

// Admin-only
router.post('/', authenticate, requireAdmin, upload.single('image'), createItem);
router.patch('/:id', authenticate, requireAdmin, upload.single('image'), updateItem);
router.delete('/:id', authenticate, requireAdmin, deleteItem);
router.patch('/:id/availability', authenticate, requireAdmin, toggleAvailability);

export default router;
