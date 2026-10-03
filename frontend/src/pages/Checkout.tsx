import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '@/store/cartStore';
import { getCartWhatsAppUrl, SHOP_PHONE_DISPLAY } from '@/utils/whatsapp';

export default function Checkout() {
  const navigate = useNavigate();
  const { items } = useCartStore();
  const cartTotal = useCartStore((s) => s.total());
  const [error, setError] = useState('');
  const [showNotAssignedModal, setShowNotAssignedModal] = useState(false);

  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState({
    line1: '',
    city: '',
    pincode: '',
    phone: '',
  });

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 p-8">
        <span className="text-4xl">🛒</span>
        <p className="font-semibold text-neutral-700">Your cart is empty</p>
        <button onClick={() => navigate('/menu')} className="bg-brand-red text-white px-6 py-2.5 rounded-full font-semibold hover:bg-brand-red-hover transition">
          Browse Menu
        </button>
      </div>
    );
  }

  const handleWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.phone || !customerName) {
      setError('Please provide your name and phone number for WhatsApp order confirmation.');
      return;
    }
    const fullAddress = address.line1
      ? `${address.line1}, ${address.city || ''} ${address.pincode || ''}`
      : undefined;

    const url = getCartWhatsAppUrl(items, cartTotal, {
      name: customerName,
      phone: address.phone,
      address: fullAddress,
    });
    window.open(url, '_blank');
  };

  const handleOnlinePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (
      !customerName.trim() ||
      !address.phone.trim() ||
      !address.line1.trim() ||
      !address.city.trim() ||
      !address.pincode.trim()
    ) {
      setError('Please fill in all mandatory contact & address fields for online payment.');
      return;
    }

    setShowNotAssignedModal(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-neutral-900">Complete Your Order</h1>
        <p className="text-sm text-neutral-500 mt-1">
          Fast delivery or direct WhatsApp ordering with {SHOP_PHONE_DISPLAY}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
        {/* Customer & Address Form — show second on mobile (order-2), first on lg (order-1) */}
        <div className="lg:col-span-3 space-y-5 order-2 lg:order-1">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
            <h2 className="font-bold text-neutral-900 mb-5">Your Contact & Delivery Info</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="customer-name" className="block text-sm font-medium text-neutral-700 mb-1">Your Name *</label>
                <input
                  id="customer-name"
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30"
                  placeholder="e.g. Ramesh Kumar"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">Phone Number (WhatsApp) *</label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={address.phone}
                  onChange={(e) => setAddress((a) => ({ ...a, phone: e.target.value }))}
                  className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="line1" className="block text-sm font-medium text-neutral-700 mb-1">Delivery Address / Landmark *</label>
                <input
                  id="line1"
                  type="text"
                  required
                  value={address.line1}
                  onChange={(e) => setAddress((a) => ({ ...a, line1: e.target.value }))}
                  className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30"
                  placeholder="Street address, Flat/House No, Landmark"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-neutral-700 mb-1">City *</label>
                  <input
                    id="city"
                    type="text"
                    required
                    value={address.city}
                    onChange={(e) => setAddress((a) => ({ ...a, city: e.target.value }))}
                    className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30"
                    placeholder="Sathyamangalam"
                  />
                </div>
                <div>
                  <label htmlFor="pincode" className="block text-sm font-medium text-neutral-700 mb-1">PIN Code *</label>
                  <input
                    id="pincode"
                    type="text"
                    required
                    value={address.pincode}
                    onChange={(e) => setAddress((a) => ({ ...a, pincode: e.target.value }))}
                    className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30"
                    placeholder="638402"
                  />
                </div>
              </div>
            </div>
          </div>

          {error && (
            <div className="bg-amber-50 text-amber-800 border border-amber-200 rounded-xl px-4 py-3 text-sm">
              {error}
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            {/* WhatsApp Order Button */}
            <button
              id="whatsapp-submit-btn"
              type="button"
              onClick={handleWhatsAppOrder}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-full shadow-lg shadow-emerald-500/20 transition active:scale-[0.98] text-base flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Order via WhatsApp (+91 99424 03033)</span>
            </button>

            {/* Online Pay Button */}
            <button
              id="pay-btn"
              type="button"
              onClick={handleOnlinePayment}
              className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-medium py-3 rounded-full transition text-sm cursor-pointer"
            >
              Pay ₹{cartTotal.toFixed(2)} Online
            </button>
          </div>
          <p className="text-center text-xs text-neutral-400">📲 Direct contact with shop at {SHOP_PHONE_DISPLAY}</p>
        </div>

        {/* Order Summary — show first on mobile (order-1), second on lg (order-2) */}
        <div className="lg:col-span-2 order-1 lg:order-2">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 sticky top-6">
            <h2 className="font-bold text-neutral-900 mb-4">Order Summary</h2>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {items.map(({ menuItem, quantity }) => (
                <div key={menuItem.id} className="flex justify-between items-start gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-neutral-900 truncate">{menuItem.name}</p>
                    <p className="text-xs text-neutral-500">× {quantity}</p>
                  </div>
                  <p className="text-sm font-semibold text-neutral-900 flex-shrink-0">
                    ₹{(menuItem.price * quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-neutral-100 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-600">Subtotal</span>
                <span>₹{cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-600">Delivery</span>
                <span className="text-green-600 font-semibold">Free</span>
              </div>
              <div className="flex justify-between font-bold text-base pt-2 border-t border-neutral-100">
                <span>Total</span>
                <span>₹{cartTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NOT ASSIGNED Modal Popup */}
      {showNotAssignedModal && (
        <div
          id="not-assigned-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
        >
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center shadow-2xl border border-neutral-100">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-3xl font-bold">
              ⚠️
            </div>
            <span className="inline-block bg-red-100 text-red-700 text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-3">
              Payment Gateway
            </span>
            <h3 className="text-2xl font-black text-neutral-900 tracking-tight mb-2">
              NOT ASSIGNED
            </h3>
            <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
              Online payment gateway is not assigned yet. Please place your order via WhatsApp or contact the restaurant directly.
            </p>
            <button
              id="not-assigned-close-btn"
              type="button"
              onClick={() => setShowNotAssignedModal(false)}
              className="w-full bg-brand-red hover:bg-brand-red-hover text-white font-bold py-3.5 px-6 rounded-full transition active:scale-[0.98] shadow-md shadow-brand-red/25 cursor-pointer text-sm"
            >
              OK, Got It
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
