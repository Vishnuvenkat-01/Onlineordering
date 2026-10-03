import type { MenuItem } from '@/types';
import { useCartStore } from '@/store/cartStore';
import { getDishImage } from '@/data/dishImages';

interface ItemCardProps {
  item: MenuItem;
}

export default function ItemCard({ item }: ItemCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const cartItems = useCartStore((s) => s.items);
  const cartItem = cartItems.find((ci) => ci.menuItem.id === item.id);
  const { updateQty } = useCartStore();

  const imgSrc = item.imageUrl
    ? item.imageUrl.startsWith('http') || item.imageUrl.startsWith('/')
      ? item.imageUrl
      : `/uploads/${item.imageUrl}`
    : getDishImage(item.name, item.category?.slug);

  return (
    <article className="relative pt-14 sm:pt-16 flex flex-col items-center group">
      {/* Circular Dish Image — overlapping from top */}
      <div className="absolute top-0 z-20 w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-[#94A3B8] shadow-md bg-stone-100 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
        <img
          src={imgSrc}
          alt={item.name}
          className="w-full h-full object-cover rounded-full"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = getDishImage(item.name, item.category?.slug);
          }}
        />
        {/* Veg / Non-veg dot on image */}
        <div
          className={`absolute top-2 left-2 w-4 h-4 rounded-sm border-2 border-white flex items-center justify-center ${item.isVeg ? 'bg-green-600' : 'bg-brand-red'}`}
          title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
        >
          <div className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-green-400' : 'bg-red-300'}`} />
        </div>
      </div>

      {/* In-cart status badge on top right */}
      {cartItem && (
        <div className="absolute top-10 right-2 sm:right-4 z-30 flex items-center gap-1 bg-brand-red text-white text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-md animate-fade-in">
          <span>({cartItem.quantity})</span>
        </div>
      )}

      {/* Card Body */}
      <div className="w-full bg-brand-card-muted/80 hover:bg-brand-card-muted transition rounded-3xl pt-16 sm:pt-20 pb-4 sm:pb-5 px-3 sm:px-4 text-center border border-white/40 flex flex-col justify-between h-full"
           style={{ boxShadow: 'var(--shadow-card-soft)' }}>
        <div className="space-y-1">
          <h3 className="font-semibold text-neutral-900 text-xs sm:text-sm tracking-tight leading-snug">{item.name}</h3>
          {item.description && (
            <p className="text-[10px] sm:text-[11px] text-neutral-500 line-clamp-2">{item.description}</p>
          )}
          {!item.available && (
            <span className="inline-block text-[10px] bg-neutral-200 text-neutral-500 px-2 py-0.5 rounded-full">
              Unavailable
            </span>
          )}
        </div>

        {/* Pricing & Add to Cart Action */}
        <div className="mt-3 sm:mt-4 flex items-center justify-between gap-1 border-t border-black/5 pt-3">
          <div className="text-left min-w-0">
            {item.priceHalf && item.priceFull ? (
              <div>
                <p className="text-[9px] sm:text-[10px] text-neutral-500 font-medium">Half / Full</p>
                <p className="text-xs sm:text-sm font-extrabold text-neutral-900 truncate">
                  ₹{item.priceHalf}/{item.priceFull}
                </p>
              </div>
            ) : (
              <div>
                <p className="text-[9px] sm:text-[10px] text-neutral-500 font-medium">Price</p>
                <p className="text-xs sm:text-sm font-extrabold text-neutral-900">₹{item.price.toFixed(2)}</p>
              </div>
            )}
          </div>

          {/* Stepper or Add button */}
          {!cartItem ? (
            <button
              id={`add-btn-${item.id}`}
              onClick={() => item.available && addItem(item)}
              disabled={!item.available}
              className={`flex-shrink-0 px-2.5 sm:px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold transition-all duration-200 active:scale-95 shadow-sm flex items-center gap-0.5 cursor-pointer ${
                item.available
                  ? 'bg-neutral-900 hover:bg-brand-red text-white'
                  : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
              }`}
              title={item.available ? `Add ${item.name} to cart` : 'Currently unavailable'}
            >
              <span>ADD</span>
              <span className="text-sm leading-none font-bold">+</span>
            </button>
          ) : (
            <div className="flex-shrink-0 flex items-center gap-1 bg-neutral-900 text-white rounded-full px-2 py-1 shadow-sm">
              <button
                onClick={() => updateQty(item.id, cartItem.quantity - 1)}
                className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center font-bold text-xs sm:text-sm text-neutral-300 hover:text-brand-red transition cursor-pointer"
                aria-label="Decrease quantity"
              >−</button>
              <span className="text-[10px] sm:text-xs font-black w-3 sm:w-4 text-center">{cartItem.quantity}</span>
              <button
                onClick={() => addItem(item)}
                className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center font-bold text-xs sm:text-sm text-neutral-300 hover:text-emerald-400 transition cursor-pointer"
                aria-label="Increase quantity"
              >+</button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
