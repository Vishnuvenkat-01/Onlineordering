import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function signAccess(id: string, role: string) {
  return jwt.sign({ id, role }, process.env.JWT_SECRET!, { expiresIn: '1h' });
}

function signRefresh(id: string) {
  return jwt.sign({ id }, process.env.JWT_REFRESH_SECRET!, { expiresIn: '7d' });
}

export async function register(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ success: false, errors: errors.mapped() });
      return;
    }
    const { name, email, password } = req.body;
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      res.status(409).json({ success: false, message: 'Email already registered' });
      return;
    }
    const hash = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: { name, email, password: hash },
      select: { id: true, name: true, email: true, role: true, createdAt: true },
    });
    const accessToken = signAccess(user.id, user.role);
    const refreshToken = signRefresh(user.id);
    res.status(201).json({ success: true, data: { user, accessToken, refreshToken } });
  } catch (err) { next(err); }
}

export async function login(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(401).json({ success: false, message: 'Invalid email or password' });
      return;
    }
    const accessToken = signAccess(user.id, user.role);
    const refreshToken = signRefresh(user.id);
    const { password: _pw, ...safeUser } = user;
    res.json({ success: true, data: { user: safeUser, accessToken, refreshToken } });
  } catch (err) { next(err); }
}

export async function me(req: Request & { user?: { id: string } }, res: Response, next: NextFunction): Promise<void> {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user!.id },
      select: { id: true, name: true, email: true, role: true, createdAt: true },
    });
    if (!user) { res.status(404).json({ success: false, message: 'User not found' }); return; }
    res.json({ success: true, data: user });
  } catch (err) { next(err); }
}

export async function refresh(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) { res.status(401).json({ success: false, message: 'Refresh token required' }); return; }
    const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET!) as { id: string };
    const user = await prisma.user.findUnique({ where: { id: payload.id } });
    if (!user) { res.status(401).json({ success: false, message: 'User not found' }); return; }
    const accessToken = signAccess(user.id, user.role);
    res.json({ success: true, data: { accessToken } });
  } catch (err) {
    res.status(401).json({ success: false, message: 'Invalid refresh token' });
  }
}
