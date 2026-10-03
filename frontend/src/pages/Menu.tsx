import { useEffect, useState, useMemo } from 'react';
import { menuApi } from '@/api/endpoints';
import type { MenuItem, Category } from '@/types';
import ItemCard from '@/components/ItemCard';
import CategoryTabs from '@/components/CategoryTabs';
import VegToggle from '@/components/VegToggle';

export default function Menu() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [vegOnly, setVegOnly] = useState(false);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([menuApi.getAll(), menuApi.getCategories()])
      .then(([itemsRes, catsRes]) => {
        setItems(itemsRes.data.data);
        setCategories(catsRes.data.data);
      })
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    let list = items;
    if (selectedCategory !== 'all') {
      list = list.filter((i) => i.category?.slug === selectedCategory);
    }
    if (vegOnly) {
      list = list.filter((i) => i.isVeg);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((i) => i.name.toLowerCase().includes(q));
    }
    return list;
  }, [items, selectedCategory, vegOnly, search]);

  return (
    <div className="p-4 sm:p-6 md:p-10 min-h-screen">
      {/* Page Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-3xl md:text-4xl font-black font-sans text-neutral-900 tracking-tight mb-1">
          Our <span className="text-brand-red">Menu</span>
        </h1>
        <p className="text-neutral-500 text-sm">
          {items.length} dishes across {categories.length} categories
        </p>
      </div>

      {/* Filters Row */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-between mb-6">
        {/* Search */}
        <div className="relative w-full sm:max-w-xs">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          </svg>
          <input
            id="menu-search"
            type="text"
            placeholder="Search dishes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-full border border-neutral-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30"
          />
        </div>
        <VegToggle vegOnly={vegOnly} onChange={setVegOnly} />
      </div>

      {/* Category Tabs */}
      <div className="mb-6 md:mb-8">
        <CategoryTabs
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      {/* Items Grid */}
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="relative pt-16">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-neutral-200 animate-pulse" />
              <div className="w-full bg-neutral-100 rounded-3xl pt-20 pb-6 px-4 h-44 animate-pulse" />
            </div>
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <span className="text-5xl">🍽️</span>
          <p className="text-neutral-600 font-semibold">No items found</p>
          <p className="text-neutral-400 text-sm">Try adjusting your filters</p>
          <button
            onClick={() => { setSelectedCategory('all'); setVegOnly(false); setSearch(''); }}
            className="text-sm text-brand-red font-semibold hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {filtered.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
