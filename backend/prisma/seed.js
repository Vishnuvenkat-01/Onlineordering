"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const bcrypt = __importStar(require("bcryptjs"));
const prisma = new client_1.PrismaClient();
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
    const menuJson = JSON.parse(fs.readFileSync(menuPath, 'utf-8'));
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
                    id: (await prisma.menuItem.findFirst({
                        where: { name: rawItem.name, categoryId: category.id },
                        select: { id: true },
                    }))?.id ?? 'new',
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
//# sourceMappingURL=seed.js.map