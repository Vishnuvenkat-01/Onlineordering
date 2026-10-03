import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '@/store/cartStore';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, clearCart } = useCartStore();
  const cartTotal = useCartStore((s) => s.total());
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') closeCart(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [closeCart]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        ref={drawerRef}
        id="cart-drawer"
        role="dialog"
        aria-label="Shopping cart"
        className="cart-drawer-enter fixed right-0 top-0 h-full w-full max-w-sm sm:max-w-md bg-brand-cream shadow-2xl z-50 flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-200">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
            <h2 className="text-lg font-bold text-neutral-900">Your Cart</h2>
            {items.length > 0 && (
              <span className="text-xs bg-brand-red text-white px-2 py-0.5 rounded-full font-semibold">
                {items.reduce((s, i) => s + i.quantity, 0)} items
              </span>
            )}
          </div>
          <button
            id="close-cart-btn"
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-neutral-200 transition"
            aria-label="Close cart"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8 text-center">
            <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
              </svg>
            </div>
            <div>
              <p className="text-neutral-700 font-semibold text-base">Your cart is empty</p>
              <p className="text-neutral-500 text-sm mt-1">Add something delicious!</p>
            </div>
            <button
              onClick={closeCart}
              className="mt-2 bg-brand-red text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-brand-red-hover transition"
            >
              Browse Menu
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map(({ menuItem, quantity }) => (
                <div key={menuItem.id} className="flex items-center gap-4 bg-white rounded-2xl p-3 shadow-sm">
                  {/* Veg indicator */}
                  <div className={`flex-shrink-0 w-5 h-5 rounded-sm border-2 flex items-center justify-center ${menuItem.isVeg ? 'border-green-600' : 'border-brand-red'}`}>
                    <div className={`w-2.5 h-2.5 rounded-full ${menuItem.isVeg ? 'bg-green-500' : 'bg-brand-red'}`} />
                  </div>

                  {/* Item info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-neutral-900 truncate">{menuItem.name}</p>
                    <p className="text-xs text-neutral-500">₹{menuItem.price.toFixed(2)} each</p>
                  </div>

                  {/* Qty controls */}
                  <div className="flex items-center gap-1 bg-neutral-100 rounded-lg px-2 py-1">
                    <button
                      onClick={() => updateQty(menuItem.id, quantity - 1)}
                      className="w-5 h-5 flex items-center justify-center text-neutral-600 hover:text-brand-red font-bold transition"
                      aria-label="Decrease quantity"
                    >−</button>
                    <span className="w-6 text-center text-sm font-semibold text-neutral-900">{quantity}</span>
                    <button
                      onClick={() => updateQty(menuItem.id, quantity + 1)}
                      className="w-5 h-5 flex items-center justify-center text-neutral-600 hover:text-green-600 font-bold transition"
                      aria-label="Increase quantity"
                    >+</button>
                  </div>

                  {/* Line total */}
                  <p className="text-sm font-bold text-neutral-900 w-16 text-right">
                    ₹{(menuItem.price * quantity).toFixed(2)}
                  </p>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(menuItem.id)}
                    className="p-1 rounded-full hover:bg-red-50 hover:text-brand-red transition text-neutral-400"
                    aria-label={`Remove ${menuItem.name}`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-neutral-200 px-6 py-5 space-y-4 bg-white">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">Subtotal</span>
                <span className="text-sm font-semibold">₹{cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">Delivery</span>
                <span className="text-sm font-semibold text-green-600">Free</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
                <span className="text-base font-bold text-neutral-900">Total</span>
                <span className="text-base font-black text-neutral-900">₹{cartTotal.toFixed(2)}</span>
              </div>
              <Link
                to="/checkout"
                id="checkout-btn"
                onClick={closeCart}
                className="flex items-center justify-center gap-2 w-full text-center bg-brand-red hover:bg-brand-red-hover text-white font-bold py-3.5 rounded-full transition shadow-md shadow-brand-red/25 active:scale-[0.98] text-base"
              >
                <span>Checkout & Online Pay</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <button
                onClick={clearCart}
                className="block w-full text-center text-xs text-neutral-400 hover:text-brand-red transition"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
