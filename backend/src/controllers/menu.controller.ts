import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

const INCLUDE_CATEGORY = { category: { select: { id: true, name: true, slug: true, displayOrder: true } } };

export async function getAllItems(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { category, veg, search } = req.query;
    const where: Record<string, unknown> = {};

    if (category && category !== 'all') {
      where.category = { slug: category };
    }
    if (veg === 'true') where.isVeg = true;
    if (veg === 'false') where.isVeg = false;
    if (search) {
      where.name = { contains: search as string, mode: 'insensitive' };
    }

    const items = await prisma.menuItem.findMany({
      where,
      include: INCLUDE_CATEGORY,
      orderBy: [{ category: { displayOrder: 'asc' } }, { name: 'asc' }],
    });

    res.json({ success: true, data: items });
  } catch (err) { next(err); }
}

export async function getCategories(_req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const cats = await prisma.category.findMany({ orderBy: { displayOrder: 'asc' } });
    res.json({ success: true, data: cats });
  } catch (err) { next(err); }
}

export async function getItemById(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const item = await prisma.menuItem.findUnique({
      where: { id: req.params.id },
      include: INCLUDE_CATEGORY,
    });
    if (!item) { res.status(404).json({ success: false, message: 'Item not found' }); return; }
    res.json({ success: true, data: item });
  } catch (err) { next(err); }
}

export async function createItem(req: Request & { file?: Express.Multer.File }, res: Response, next: NextFunction): Promise<void> {
  try {
    const { name, price, priceHalf, priceFull, isVeg, categoryId, description, available } = req.body;
    const imageUrl = req.file?.filename ?? null;

    const item = await prisma.menuItem.create({
      data: {
        name,
        price: parseFloat(price),
        priceHalf: priceHalf ? parseFloat(priceHalf) : null,
        priceFull: priceFull ? parseFloat(priceFull) : null,
        isVeg: isVeg === 'true' || isVeg === true,
        categoryId,
        description: description ?? null,
        available: available === 'true' || available === true,
        imageUrl,
      },
      include: INCLUDE_CATEGORY,
    });

    res.status(201).json({ success: true, data: item });
  } catch (err) { next(err); }
}

export async function updateItem(req: Request & { file?: Express.Multer.File }, res: Response, next: NextFunction): Promise<void> {
  try {
    const { id } = req.params;
    const existing = await prisma.menuItem.findUnique({ where: { id } });
    if (!existing) { res.status(404).json({ success: false, message: 'Item not found' }); return; }

    const { name, price, priceHalf, priceFull, isVeg, categoryId, description, available } = req.body;
    let imageUrl = existing.imageUrl;

    if (req.file) {
      // Delete old image
      if (existing.imageUrl) {
        const oldPath = path.join(__dirname, '../../uploads', existing.imageUrl);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      imageUrl = req.file.filename;
    }

    const item = await prisma.menuItem.update({
      where: { id },
      data: {
        name: name ?? existing.name,
        price: price ? parseFloat(price) : existing.price,
        priceHalf: priceHalf !== undefined ? (priceHalf ? parseFloat(priceHalf) : null) : existing.priceHalf,
        priceFull: priceFull !== undefined ? (priceFull ? parseFloat(priceFull) : null) : existing.priceFull,
        isVeg: isVeg !== undefined ? (isVeg === 'true' || isVeg === true) : existing.isVeg,
        categoryId: categoryId ?? existing.categoryId,
        description: description ?? existing.description,
        available: available !== undefined ? (available === 'true' || available === true) : existing.available,
        imageUrl,
      },
      include: INCLUDE_CATEGORY,
    });

    res.json({ success: true, data: item });
  } catch (err) { next(err); }
}

export async function deleteItem(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { id } = req.params;
    const item = await prisma.menuItem.findUnique({ where: { id } });
    if (!item) { res.status(404).json({ success: false, message: 'Item not found' }); return; }

    // Delete image file
    if (item.imageUrl) {
      const imgPath = path.join(__dirname, '../../uploads', item.imageUrl);
      if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
    }

    await prisma.menuItem.delete({ where: { id } });
    res.json({ success: true, message: 'Item deleted' });
  } catch (err) { next(err); }
}

export async function toggleAvailability(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { id } = req.params;
    const { available } = req.body;
    const item = await prisma.menuItem.update({
      where: { id },
      data: { available: Boolean(available) },
      include: INCLUDE_CATEGORY,
    });
    res.json({ success: true, data: item });
  } catch (err) { next(err); }
}
