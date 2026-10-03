import { Link } from 'react-router-dom';
import { getGeneralWhatsAppUrl, SHOP_PHONE_DISPLAY } from '@/utils/whatsapp';

const HERO_IMG = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop';

export default function Home() {
  return (
    <div className="p-4 md:p-8 relative z-20">
      {/* ── Hero Section ─────────────────────────────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-10 md:mb-12 relative">
        {/* Left: Text + CTA */}
        <div className="lg:col-span-6 z-20 space-y-5 md:space-y-7">
          <div className="mb-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.15] mb-3 font-sans">
              Good Food,{' '}
              <span className="text-brand-red">நல்ல Mood.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-neutral-600 mb-4 md:mb-6">
              Traditional taste served with pure{' '}
              <span className="font-semibold text-neutral-800">அன்பு</span>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              to="/menu"
              id="view-menu-btn"
              className="bg-brand-red hover:bg-brand-red-hover text-white font-bold text-sm px-6 py-3 rounded-full shadow-md shadow-brand-red/25 transition duration-200 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Menu & Order</span>
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} />
              </svg>
            </Link>
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm px-5 py-3 rounded-full shadow-sm shadow-emerald-500/30 transition duration-200 active:scale-95 flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Social proof */}
          <div className="pt-2">
            <p className="text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2.5">Customer Reviews</p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2.5 overflow-hidden">
                {[
                  { initials: 'JD', bg: 'bg-amber-200', text: 'text-amber-900' },
                  { initials: 'AL', bg: 'bg-rose-200', text: 'text-rose-900' },
                  { initials: 'MK', bg: 'bg-sky-200', text: 'text-sky-900' },
                ].map((a) => (
                  <span key={a.initials} className={`inline-flex h-8 w-8 rounded-full ring-2 ring-brand-cream ${a.bg} items-center justify-center font-bold text-[10px] ${a.text}`}>
                    {a.initials}
                  </span>
                ))}
                <div className="flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-brand-cream bg-neutral-800 text-[10px] font-semibold text-white">
                  45+
                </div>
              </div>
              <div className="flex items-center text-amber-400 space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Hero dish plate */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-2 lg:mt-0">
          {/* Discount badge */}
          <div className="absolute -top-2 left-4 sm:left-8 lg:left-12 z-30 bg-white/95 backdrop-blur-md px-3 py-2 rounded-2xl shadow-badge border border-neutral-100 flex items-center space-x-2">
            <span className="w-7 h-7 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center text-xs font-black text-neutral-800 flex-shrink-0">%</span>
            <div className="leading-tight">
              <p className="text-xs font-bold text-neutral-900 whitespace-nowrap">Special Offer</p>
              <p className="text-[10px] text-neutral-500 font-medium whitespace-nowrap">5% off for 2+ orders</p>
            </div>
          </div>

          {/* Plate — fluid sizing with min/max constraints */}
          <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px] max-w-full">
            {/* Tomato accent */}
            <div className="absolute top-[35%] -right-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-red shadow-lg flex items-center justify-center transform rotate-12 z-10">
              <span className="w-3 h-3 bg-green-700 rounded-full -mt-3" />
            </div>
            {/* Plate circle */}
            <div className="w-full h-full rounded-full border-[10px] sm:border-[14px] border-[#8D9AA6] bg-[#8292A1] shadow-dish overflow-hidden p-2 sm:p-3 relative flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={HERO_IMG}
                  alt="Delicious Beemans restaurant food"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Highlights Section ───────────────────────────────────── */}
      <section className="py-8 md:py-10 my-4 border-t border-b border-neutral-200/80">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white/60 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-white/60 shadow-sm flex flex-col items-start gap-3">
            <span className="text-2xl md:text-3xl p-2.5 bg-amber-100/80 rounded-xl">🥘</span>
            <h3 className="font-bold text-neutral-900 text-base">Authentic Recipes</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Traditional South Indian recipes handed down with rich flavours and home-ground spices.
            </p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-white/60 shadow-sm flex flex-col items-start gap-3">
            <span className="text-2xl md:text-3xl p-2.5 bg-emerald-100/80 rounded-xl">🌿</span>
            <h3 className="font-bold text-neutral-900 text-base">Fresh & Natural</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              100% farm-fresh vegetables, premium meat cuts, and pure ghee with zero compromises.
            </p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-white/60 shadow-sm flex flex-col items-start gap-3">
            <span className="text-2xl md:text-3xl p-2.5 bg-rose-100/80 rounded-xl">⚡</span>
            <h3 className="font-bold text-neutral-900 text-base">Lightning Quick</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Hot and fresh packaging, prepared promptly for dine-in, takeaway, or direct WhatsApp ordering.
            </p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-white/60 shadow-sm flex flex-col items-start gap-3">
            <span className="text-2xl md:text-3xl p-2.5 bg-sky-100/80 rounded-xl">⭐</span>
            <h3 className="font-bold text-neutral-900 text-base">Loved by Foodies</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Over 130+ signature dishes crafted daily to satisfy every craving in the city.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact & Footer Section (Bottom Content) ─────────────── */}
      <section id="contact" className="mt-10 pt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <h3 className="text-xl md:text-2xl font-black font-sans text-neutral-900 mb-2">Beemans</h3>
            <p className="text-sm text-neutral-600 mb-4">Traditional South Indian cuisine crafted with love.</p>
            <Link
              to="/menu"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:underline"
            >
              <span>Browse Full Menu</span>
              <span>→</span>
            </Link>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-900 mb-3">Opening Hours</h4>
            <p className="text-sm text-neutral-600">Monday – Sunday</p>
            <p className="text-sm font-bold text-neutral-800 mt-1">7:00 AM – 11:00 PM</p>
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="font-semibold text-neutral-900 mb-3">Contact & Orders</h4>
            <div className="space-y-2 text-sm">
              <a
                href="tel:919942403033"
                className="flex items-center gap-2 text-neutral-800 hover:text-brand-red font-semibold transition"
              >
                <span>📞</span>
                <span>Phone: {SHOP_PHONE_DISPLAY}</span>
              </a>
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] hover:text-[#20bd5a] font-bold transition"
              >
                <span>💬</span>
                <span>WhatsApp: {SHOP_PHONE_DISPLAY}</span>
              </a>
              <p className="text-neutral-600 text-xs leading-relaxed pt-1">
                📍 bus stand, old, North Rangasamuthram, Sathyamangalam, Tamil Nadu 638402
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:underline"
                >
                  <span>Visit Full Contact Page</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-neutral-400 mt-10 md:mt-12">
          © {new Date().getFullYear()} Beemans Restaurant. All rights reserved.
        </p>
      </section>
    </div>
  );
}
