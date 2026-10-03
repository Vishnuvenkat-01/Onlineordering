import { useCartStore } from '@/store/cartStore';

export default function FloatingCartBar() {
  const { openCart, isOpen } = useCartStore();
  const count = useCartStore((s) => s.itemCount());
  const total = useCartStore((s) => s.total());

  if (count === 0 || isOpen) return null;

  return (
    <aside
      aria-label="Active Cart Summary"
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-32px)] sm:w-[calc(100%-48px)] max-w-sm sm:max-w-md animate-slide-up pointer-events-auto"
    >
      <button
        id="floating-view-cart-btn"
        onClick={openCart}
        className="w-full bg-neutral-900/95 hover:bg-neutral-900 text-white backdrop-blur-md rounded-full px-4 sm:px-5 py-3 sm:py-3.5 shadow-2xl shadow-black/40 border border-white/20 flex items-center justify-between gap-3 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
        type="button"
        title="View Cart & Proceed to Checkout"
      >
        {/* Left: Cart Icon with Badge and Item Count */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-brand-red transition-colors duration-200 flex-shrink-0">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-red text-white text-[11px] font-black rounded-full flex items-center justify-center border-2 border-neutral-900 shadow-sm animate-pulse">
              {count}
            </span>
          </div>

          <div className="text-left leading-tight">
            <p className="text-[11px] sm:text-xs text-neutral-400 font-medium">
              {count} {count === 1 ? 'dish' : 'dishes'} selected
            </p>
            <p className="text-sm sm:text-base font-extrabold text-white tracking-tight">
              ₹{total.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Right: View Cart Call to Action */}
        <div className="flex items-center gap-1.5 sm:gap-2 bg-brand-red group-hover:bg-brand-red-hover text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-2 rounded-full transition shadow-md shadow-brand-red/30 flex-shrink-0">
          <span>View Cart</span>
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} />
          </svg>
        </div>
      </button>
    </aside>
  );
}
