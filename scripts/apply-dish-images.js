// scripts/apply-dish-images.js
const fs = require('fs');
const path = require('path');

const verifiedIds = require('../verified_all.json');
const menuPath = path.resolve(__dirname, '../menu.json');
const menuJson = JSON.parse(fs.readFileSync(menuPath, 'utf8'));

// Curated ordering of verified photo IDs to match dish types:
// Biryanis, Roasts, Uthappams, Parottas, Rice, Noodles, Breads, Chicken, Mutton, Starters, Drinks, Masalas
const orderedCategories = [
  'briyani', 'roast', 'uthappam', 'parotta', 'rice', 'noodles',
  'idly', 'chapathi', 'rotti_and_naan', 'chicken_gravy', 'chicken_fry_dry',
  'mutton_fry', 'grill_chicken', 'tandoori_chicken', 'roll', 'starter_veg',
  'starter_non_veg', 'chineese_chicken', 'special_items', 'nattu_kozhi',
  'kaadai', 'veg_soup', 'non_veg_soup', 'milk_shake', 'veg_masala'
];

let photoIndex = 0;
const usedIds = new Set();
const dishImageMap = {};

for (const catKey of orderedCategories) {
  const cat = menuJson.restaurant_menu[catKey];
  if (!cat) continue;

  for (const item of cat.items) {
    if (photoIndex >= verifiedIds.length) {
      throw new Error(`Not enough verified photo IDs! Needed more than ${verifiedIds.length}`);
    }
    const photoId = verifiedIds[photoIndex++];
    usedIds.add(photoId);

    const imageUrl = `https://images.unsplash.com/${photoId}?w=500&auto=format&fit=crop&q=80`;
    item.imageUrl = imageUrl;
    dishImageMap[`${catKey}_${item.name}`] = imageUrl;
    dishImageMap[item.name] = imageUrl; // fallback by name
  }
}

console.log(`Assigned unique images to ${photoIndex} items.`);
console.log(`Unique photo count used: ${usedIds.size}`);

if (usedIds.size !== photoIndex) {
  throw new Error(`Duplicate photos detected! Used: ${usedIds.size}, Total: ${photoIndex}`);
}

// 1. Write updated menu.json
fs.writeFileSync(menuPath, JSON.stringify(menuJson, null, 2), 'utf8');
console.log('✅ Updated menu.json with unique imageUrl for each dish.');

// 2. Export dishImages dictionary for frontend & backend
const dishImagesTsContent = `// Auto-generated unique dish image mapping
export const DISH_UNIQUE_IMAGES: Record<string, string> = ${JSON.stringify(dishImageMap, null, 2)};

export function getDishImage(dishName: string, categorySlug?: string): string {
  if (categorySlug && DISH_UNIQUE_IMAGES[\`\${categorySlug}_\${dishName}\`]) {
    return DISH_UNIQUE_IMAGES[\`\${categorySlug}_\${dishName}\`];
  }
  if (DISH_UNIQUE_IMAGES[dishName]) {
    return DISH_UNIQUE_IMAGES[dishName];
  }
  return 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80';
}
`;

fs.writeFileSync(
  path.resolve(__dirname, '../backend/src/data/dishImages.ts'),
  dishImagesTsContent,
  'utf8'
);
console.log('✅ Created backend/src/data/dishImages.ts');

fs.writeFileSync(
  path.resolve(__dirname, '../frontend/src/data/dishImages.ts'),
  dishImagesTsContent,
  'utf8'
);
console.log('✅ Created frontend/src/data/dishImages.ts');
