import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  SHOP_PHONE_DISPLAY,
  SHOP_WHATSAPP_NUMBER,
  getGeneralWhatsAppUrl,
} from '@/utils/whatsapp';

export const RESTAURANT_ADDRESS = {
  name: 'Beemans Restaurant',
  street: 'bus stand, old, North Rangasamuthram',
  city: 'Sathyamangalam',
  state: 'Tamil Nadu',
  pincode: '638402',
  country: 'India',
  full: 'bus stand, old, North Rangasamuthram, Sathyamangalam, Tamil Nadu 638402',
  mapsUrl: 'https://maps.google.com/?q=bus+stand+old+North+Rangasamuthram+Sathyamangalam+Tamil+Nadu+638402',
};

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [customerName, setCustomerName] = useState('');

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2500);
  };

  const handleSendCustomWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const greeting = customerName.trim() ? `Hi, I am ${customerName.trim()}. ` : 'Hi Beemans! ';
    const text = `${greeting}${message.trim() || 'I would like to inquire about your menu and order.'}`;
    window.open(getGeneralWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="p-4 sm:p-6 md:p-10 relative z-20">
      {/* ── Page Header ───────────────────────────────────────────── */}
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold mb-3 tracking-wide">
          <span>📍</span>
          <span>GET IN TOUCH WITH US</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black font-sans text-neutral-900 tracking-tight leading-tight">
          Contact <span className="text-brand-red">Beemans</span>
        </h1>
        <p className="text-neutral-600 text-sm md:text-base mt-2">
          We’re here to serve you the freshest traditional delicacies. Reach out by phone, visit our restaurant, or chat with us directly on WhatsApp!
        </p>
      </div>

      {/* ── Contact Info Cards Grid ───────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* 1. Phone Card */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-7 border border-white/80 shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-amber-100/80 text-amber-700 flex items-center justify-center text-2xl mb-5 shadow-sm group-hover:scale-105 transition-transform">
              📞
            </div>
            <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
              Direct Phone Support
            </p>
            <h2 className="text-2xl font-black text-neutral-900 mb-2">
              {SHOP_PHONE_DISPLAY}
            </h2>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Call us for table reservations, catering inquiries, or takeaway orders.
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center gap-2.5">
            <a
              href={`tel:${SHOP_WHATSAPP_NUMBER}`}
              className="flex-1 text-center bg-neutral-900 hover:bg-brand-red text-white text-xs font-bold py-3 rounded-full transition-all duration-200 active:scale-95 shadow-sm"
            >
              Call Now
            </a>
            <button
              type="button"
              onClick={() => copyToClipboard(SHOP_PHONE_DISPLAY, 'phone')}
              className="px-3.5 py-3 rounded-full border border-neutral-200 hover:bg-neutral-100 text-xs font-semibold text-neutral-700 transition"
              title="Copy phone number"
            >
              {copied === 'phone' ? '✓ Copied' : 'Copy'}
            </button>
          </div>
        </div>

        {/* 2. WhatsApp Card */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-7 border border-emerald-100 shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#25D366]/10 rounded-bl-full pointer-events-none" />

          <div>
            <div className="w-14 h-14 rounded-2xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center text-2xl mb-5 shadow-sm group-hover:scale-105 transition-transform">
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-[#25D366] uppercase tracking-wider">
                Instant Chat & Orders
              </span>
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
            </div>
            <h2 className="text-2xl font-black text-neutral-900 mb-2">
              WhatsApp Chat
            </h2>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Order directly, ask questions about specials, or customize your dishes in real-time.
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center gap-2.5">
            <a
              id="contact-whatsapp-chat-btn"
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold py-3 rounded-full transition-all duration-200 active:scale-95 shadow-md shadow-emerald-500/25 flex items-center justify-center gap-2"
            >
              <span>Chat on WhatsApp</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* 3. Address Card */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-7 border border-white/80 shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-rose-100/80 text-brand-red flex items-center justify-center text-2xl mb-5 shadow-sm group-hover:scale-105 transition-transform">
              🏢
            </div>
            <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
              Restaurant Location
            </p>
            <h2 className="text-xl font-black text-neutral-900 mb-2">
              {RESTAURANT_ADDRESS.name}
            </h2>
            <p className="text-xs text-neutral-600 leading-relaxed">
              {RESTAURANT_ADDRESS.street},<br />
              {RESTAURANT_ADDRESS.city}, {RESTAURANT_ADDRESS.state} – {RESTAURANT_ADDRESS.pincode}
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center gap-2.5">
            <a
              href={RESTAURANT_ADDRESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-neutral-900 hover:bg-brand-red text-white text-xs font-bold py-3 rounded-full transition-all duration-200 active:scale-95 shadow-sm"
            >
              Open in Maps
            </a>
            <button
              type="button"
              onClick={() => copyToClipboard(RESTAURANT_ADDRESS.full, 'address')}
              className="px-3.5 py-3 rounded-full border border-neutral-200 hover:bg-neutral-100 text-xs font-semibold text-neutral-700 transition"
              title="Copy address"
            >
              {copied === 'address' ? '✓ Copied' : 'Copy'}
            </button>
          </div>
        </div>
      </div>

      {/* ── Operational Hours & Fast Message Section ──────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12">
        {/* Left: Hours & Timings */}
        <div className="lg:col-span-5 bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-white/70 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl p-2.5 bg-neutral-100 rounded-xl">⏰</span>
              <div>
                <h3 className="text-lg font-bold text-neutral-900">Operating Hours</h3>
                <p className="text-xs text-neutral-500">Open 7 days a week for breakfast, lunch & dinner</p>
              </div>
            </div>

            <div className="space-y-3.5 text-sm">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200/60">
                <span className="font-semibold text-neutral-700">Monday – Sunday</span>
                <span className="font-extrabold text-neutral-900">7:00 AM – 11:00 PM</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200/60">
                <span className="font-semibold text-neutral-700">Breakfast Specials</span>
                <span className="text-xs font-bold text-neutral-600">7:00 AM – 11:30 AM</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200/60">
                <span className="font-semibold text-neutral-700">Biryani & Lunch Feast</span>
                <span className="text-xs font-bold text-neutral-600">11:30 AM – 4:00 PM</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-neutral-700">Evening Tiffin & Dinner</span>
                <span className="text-xs font-bold text-neutral-600">4:00 PM – 11:00 PM</span>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 rounded-2xl bg-amber-50/80 border border-amber-200/60 text-xs text-amber-900">
            <p className="font-bold flex items-center gap-1.5 mb-1">
              <span>💡</span>
              <span>Fast Home Delivery & Takeaway</span>
            </p>
            <p className="text-amber-800/90 leading-relaxed">
              Order via WhatsApp to get priority preparation, hot packaging, and live delivery updates.
            </p>
          </div>
        </div>

        {/* Right: Quick WhatsApp Inquiry Form */}
        <div className="lg:col-span-7 bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-white/80 shadow-md">
          <div className="mb-6">
            <h3 className="text-xl font-black text-neutral-900">Send an Inquiry or Custom Order</h3>
            <p className="text-xs text-neutral-500 mt-1">
              Type your message below and click send — it opens directly in WhatsApp with your details pre-filled.
            </p>
          </div>

          <form onSubmit={handleSendCustomWhatsApp} className="space-y-4">
            <div>
              <label htmlFor="customer-name" className="block text-xs font-bold text-neutral-700 mb-1.5">
                Your Name (Optional)
              </label>
              <input
                id="customer-name"
                type="text"
                placeholder="e.g. Ramesh Kumar"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border border-neutral-200 bg-neutral-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:bg-white transition"
              />
            </div>

            <div>
              <label htmlFor="inquiry-message" className="block text-xs font-bold text-neutral-700 mb-1.5">
                Your Message or Order Request
              </label>
              <textarea
                id="inquiry-message"
                rows={4}
                required
                placeholder="Ask about bulk party orders, specific food availability, spicy level, or catering..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl border border-neutral-200 bg-neutral-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:bg-white transition resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <button
                type="submit"
                id="send-whatsapp-message-btn"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-md shadow-emerald-500/25 transition duration-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Send to WhatsApp Chat</span>
              </button>

              <Link
                to="/menu"
                className="text-center text-xs font-bold text-neutral-600 hover:text-brand-red py-2 px-4 transition"
              >
                Or View Menu & Order Online →
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* ── Footer ────────────────────────────────────────────────── */}
      <footer className="pt-8 border-t border-neutral-200/80 text-center text-xs text-neutral-400">
        <p>© {new Date().getFullYear()} Beemans Restaurant. All rights reserved.</p>
      </footer>
    </div>
  );
}
