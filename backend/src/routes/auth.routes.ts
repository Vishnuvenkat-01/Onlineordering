import { Router } from 'express';
import { body } from 'express-validator';
import { register, login, me, refresh } from '../controllers/auth.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

router.post(
  '/register',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email required'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 chars'),
  ],
  register
);

router.post(
  '/login',
  [
    body('email').isEmail(),
    body('password').notEmpty(),
  ],
  login
);

router.get('/me', authenticate, me);
router.post('/refresh', refresh);

export default router;
