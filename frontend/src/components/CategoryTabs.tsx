import type { Category } from '@/types';

interface CategoryTabsProps {
  categories: Category[];
  selected: string;
  onSelect: (slug: string) => void;
}

const CATEGORY_EMOJIS: Record<string, string> = {
  briyani: '🍚',
  roast: '🍗',
  uthappam: '🥞',
  parotta: '🫓',
  rice: '🍱',
  noodles: '🍜',
  idly: '🫔',
  chapathi: '🫓',
  rotti_and_naan: '🍞',
  chicken_gravy: '🍲',
  chicken_fry_dry: '🍗',
  mutton_fry: '🥩',
  grill_chicken: '🔥',
  tandoori_chicken: '🍢',
  roll: '🌯',
  starter_veg: '🥦',
  starter_non_veg: '🥚',
  chineese_chicken: '🥡',
  special_items: '⭐',
  nattu_kozhi: '🐓',
  kaadai: '🐦',
  veg_soup: '🥣',
  non_veg_soup: '🍵',
  milk_shake: '🥤',
  veg_masala: '🫕',
};

function formatCategoryName(slug: string): string {
  return slug
    .split('_')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export default function CategoryTabs({ categories, selected, onSelect }: CategoryTabsProps) {
  return (
    <div className="relative">
      <div
        id="category-tabs"
        className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* "All" tab */}
        <button
          id="tab-all"
          onClick={() => onSelect('all')}
          className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
            selected === 'all'
              ? 'bg-brand-red text-white shadow-md'
              : 'bg-white/70 text-neutral-700 hover:bg-white hover:text-neutral-900 border border-neutral-200'
          }`}
        >
          🍽️ All
        </button>

        {categories.map((cat) => {
          const emoji = CATEGORY_EMOJIS[cat.slug] ?? '🍴';
          const label = formatCategoryName(cat.name);
          return (
            <button
              id={`tab-${cat.slug}`}
              key={cat.id}
              onClick={() => onSelect(cat.slug)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                selected === cat.slug
                  ? 'bg-brand-red text-white shadow-md'
                  : 'bg-white/70 text-neutral-700 hover:bg-white hover:text-neutral-900 border border-neutral-200'
              }`}
            >
              {emoji} {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
