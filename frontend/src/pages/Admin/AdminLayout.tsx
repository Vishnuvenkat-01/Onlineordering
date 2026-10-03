import { useState } from 'react';
import { Outlet, NavLink, Navigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';

export default function AdminLayout() {
  const { user } = useAuthStore();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== 'ADMIN') return <Navigate to="/" replace />;

  const navItems = [
    { to: '/admin', label: '📊 Dashboard', end: true },
    { to: '/admin/menu', label: '🍽️ Menu', end: false },
    { to: '/admin/orders', label: '📦 Orders', end: false },
  ];

  const SidebarContent = () => (
    <>
      <div className="px-6 py-5 border-b border-white/10">
        <p className="text-xl font-black text-white">Beemans</p>
        <p className="text-xs text-white/50 mt-0.5">Admin Panel</p>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                isActive ? 'bg-brand-red text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="px-6 py-4 border-t border-white/10">
        <NavLink to="/" className="text-xs text-white/50 hover:text-white transition">← Back to site</NavLink>
      </div>
    </>
  );

  return (
    <div className="min-h-screen flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar — drawer on mobile, fixed on desktop */}
      <aside
        className={`fixed md:relative inset-y-0 left-0 z-40 w-56 bg-brand-dark text-white flex flex-col flex-shrink-0 transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <SidebarContent />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile top bar */}
        <div className="md:hidden flex items-center gap-3 px-4 py-3 bg-brand-dark text-white">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-1.5 rounded-lg hover:bg-white/10 transition"
            aria-label="Open admin sidebar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
            </svg>
          </button>
          <p className="text-sm font-black">Beemans Admin</p>
        </div>

        <main className="flex-1 bg-neutral-50 p-4 md:p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
