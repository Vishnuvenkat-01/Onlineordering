import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCartStore } from '@/store/cartStore';
import logoImg from '@/assets/logo.png';
import { getGeneralWhatsAppUrl } from '@/utils/whatsapp';

export default function Navbar() {
  const { openCart } = useCartStore();
  const count = useCartStore((s) => s.itemCount());
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home', end: true },
    { to: '/menu', label: 'Menu', end: false },
    { to: '/contact', label: 'Contact', end: false },
  ];

  return (
    <header className="mb-6 md:mb-10">
      {/* Main bar */}
      <div className="flex items-center justify-between py-2">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl sm:text-2xl md:text-3xl font-sans font-black text-neutral-900 tracking-tight flex items-center gap-2 group flex-shrink-0"
        >
          <img
            src={logoImg}
            alt="Beemans"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-contain bg-white shadow-sm p-0.5 border border-neutral-200 transition-transform group-hover:scale-105"
          />
          <span>Beemans</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-[15px] font-medium text-neutral-600">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `hover:text-brand-red transition-colors duration-200 ${isActive ? 'text-brand-red font-semibold' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          {/* Cart Button */}
          <button
            id="cart-btn"
            aria-label={`Cart (${count} items)`}
            onClick={openCart}
            className={`relative flex items-center gap-1.5 px-3 py-2 rounded-full border transition-all duration-200 active:scale-95 shadow-sm cursor-pointer ${
              count > 0
                ? 'bg-neutral-900 text-white border-neutral-900 hover:bg-neutral-800 shadow-neutral-900/20'
                : 'bg-white/80 border-neutral-200/80 text-neutral-800 hover:text-neutral-900 hover:bg-white'
            }`}
            type="button"
          >
            <div className="relative">
              <svg className="w-5 h-5 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {count > 0 && (
                <span className="absolute -top-1.5 -right-2 w-4 h-4 bg-brand-red text-white text-[9px] font-black rounded-full flex items-center justify-center shadow-sm">
                  {count > 9 ? '9+' : count}
                </span>
              )}
            </div>
            <span className="text-xs font-bold hidden sm:inline">
              {count > 0 ? `Cart (${count})` : 'Cart'}
            </span>
          </button>

          {/* WhatsApp Order Button — desktop only */}
          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            id="whatsapp-header-btn"
            className="hidden sm:flex bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs md:text-sm font-semibold px-3 md:px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm shadow-emerald-500/20 active:scale-95 items-center gap-2"
          >
            <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span className="hidden md:inline">WhatsApp Order</span>
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-neutral-200 transition text-neutral-700"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            type="button"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm rounded-2xl border border-neutral-200 shadow-lg mt-2 overflow-hidden animate-fade-in">
          <nav className="flex flex-col py-2">
            {navLinks.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `px-5 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-brand-red bg-brand-red/5 font-semibold'
                      : 'text-neutral-700 hover:text-brand-red hover:bg-neutral-50'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <div className="px-5 py-3 border-t border-neutral-100 mt-1">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 w-full justify-center"
              >
                <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                WhatsApp Order
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
