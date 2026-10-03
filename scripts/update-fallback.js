// scripts/update-fallback.js
const fs = require('fs');
const path = require('path');
const menu = require('../menu.json');

const map = {};
for (const [slug, cat] of Object.entries(menu.restaurant_menu)) {
  for (const item of cat.items) {
    map[`${slug}_${item.name}`] = item.imageUrl;
    map[item.name] = item.imageUrl;
  }
}

const fallbackPath = path.resolve(__dirname, '../frontend/src/data/fallbackMenu.ts');
let code = fs.readFileSync(fallbackPath, 'utf8');

const marker = 'export const FALLBACK_ITEMS: MenuItem[] = [';
const itemsStart = code.indexOf(marker);
if (itemsStart !== -1) {
  const prefix = code.slice(0, itemsStart + marker.length - 1);
  const itemsJsonStr = code.slice(itemsStart + marker.length - 1).trim();
  const cleanJson = itemsJsonStr.replace(/;\s*$/, '');
  const items = JSON.parse(cleanJson);
  for (const it of items) {
    const slug = it.category?.slug;
    if (slug && map[`${slug}_${it.name}`]) {
      it.imageUrl = map[`${slug}_${it.name}`];
    } else if (map[it.name]) {
      it.imageUrl = map[it.name];
    }
  }
  const newContent = prefix + JSON.stringify(items, null, 2) + ';\n';
  fs.writeFileSync(fallbackPath, newContent, 'utf8');
  console.log('✅ Updated fallbackMenu.ts with unique images for all items.');
} else {
  console.log('Marker not found in fallbackMenu.ts');
}
