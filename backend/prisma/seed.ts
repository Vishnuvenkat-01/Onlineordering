import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

interface RawMenuItem {
  name: string;
  type?: string;
  price?: number;
  price_half?: number;
  price_full?: number;
  note?: string;
  imageUrl?: string;
}

interface RawCategory {
  type: string;
  note?: string;
  items: RawMenuItem[];
}

interface MenuJson {
  restaurant_menu: Record<string, RawCategory>;
}

async function main() {
  console.log('🌱 Starting seed...');

  // ── Seed admin user ──────────────────────────────────────────────
  const adminEmail = 'admin@beemans.com';
  const existingAdmin = await prisma.user.findUnique({ where: { email: adminEmail } });
  if (!existingAdmin) {
    const hash = await bcrypt.hash('admin123456', 12);
    await prisma.user.create({
      data: {
        name: 'Beemans Admin',
        email: adminEmail,
        password: hash,
        role: 'ADMIN',
      },
    });
    console.log('✅ Admin user created: admin@beemans.com / admin123456');
  }

  // ── Load menu.json ───────────────────────────────────────────────
  const menuPath = path.resolve(__dirname, '../../menu.json');
  const menuJson: MenuJson = JSON.parse(fs.readFileSync(menuPath, 'utf-8'));
  const rawMenu = menuJson.restaurant_menu;

  let catOrder = 0;

  for (const [slug, rawCat] of Object.entries(rawMenu)) {
    const name = slug
      .split('_')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

    // Upsert category
    const category = await prisma.category.upsert({
      where: { slug },
      update: { displayOrder: catOrder },
      create: { name, slug, displayOrder: catOrder },
    });
    catOrder++;

    console.log(`  📁 Category: ${category.name}`);

    for (const rawItem of rawCat.items) {
      // Determine isVeg: item-level type overrides category level
      const itemType = rawItem.type ?? rawCat.type;
      const isVeg = itemType === 'veg';

      // Determine price
      const price = rawItem.price ?? rawItem.price_half ?? 0;
      const priceHalf = rawItem.price_half ?? null;
      const priceFull = rawItem.price_full ?? null;

      await prisma.menuItem.upsert({
        where: {
          // Use name+categoryId as logical unique key
          // Prisma doesn't support multi-field upsert without @unique, so we use findFirst
          id: (
            await prisma.menuItem.findFirst({
              where: { name: rawItem.name, categoryId: category.id },
              select: { id: true },
            })
          )?.id ?? 'new',
        },
        update: {
          price,
          priceHalf,
          priceFull,
          isVeg,
          description: rawItem.note ?? null,
          imageUrl: rawItem.imageUrl ?? null,
        },
        create: {
          name: rawItem.name,
          price,
          priceHalf,
          priceFull,
          isVeg,
          categoryId: category.id,
          description: rawItem.note ?? null,
          available: true,
          imageUrl: rawItem.imageUrl ?? null,
        },
      });
      console.log(`    ✓ ${rawItem.name} (₹${price}${priceHalf ? ` / ₹${priceFull}` : ''})`);
    }
  }

  console.log('\n✅ Seed complete!');
  console.log('🔑 Admin: admin@beemans.com / admin123456');
}

main()
  .catch((e) => { console.error('❌ Seed failed:', e); process.exit(1); })
  .finally(() => prisma.$disconnect());
