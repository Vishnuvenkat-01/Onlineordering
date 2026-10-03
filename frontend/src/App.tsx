import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import CartDrawer from '@/components/CartDrawer';
import LoadingScreen from '@/components/LoadingScreen';
import Home from '@/pages/Home';
import Menu from '@/pages/Menu';
import Checkout from '@/pages/Checkout';
import OrderTracking from '@/pages/OrderTracking';
import OrderHistory from '@/pages/OrderHistory';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Contact from '@/pages/Contact';
import AdminLayout from '@/pages/Admin/AdminLayout';
import AdminDashboard from '@/pages/Admin/Dashboard';
import MenuManagement from '@/pages/Admin/MenuManagement';
import OrderManagement from '@/pages/Admin/OrderManagement';
import { useAuthStore } from '@/store/authStore';
import { getGeneralWhatsAppUrl } from '@/utils/whatsapp';

import FloatingCartBar from '@/components/FloatingCartBar';
import { useCartStore } from '@/store/cartStore';

// Ambient floating leaf decorations (matching code.html)
function FloatingLeaves() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-10 select-none">
      <div className="absolute -top-3 right-28 w-12 h-14 bg-gradient-to-br from-emerald-600 to-green-800 rounded-full blur-[0.5px] opacity-85 transform rotate-45 animate-float-slow shadow-sm" />
      <div className="absolute top-[38%] left-8 w-16 h-20 bg-gradient-to-tr from-green-700 to-emerald-500 rounded-full blur-[1.5px] opacity-75 transform -rotate-12 animate-float-reverse shadow-md" />
      <div className="absolute top-[42%] right-[44%] w-8 h-10 bg-gradient-to-b from-green-600 to-emerald-800 rounded-full blur-[0.4px] opacity-90 transform -rotate-45" />
      <div className="absolute top-[56%] right-[42%] w-6 h-8 bg-green-700 rounded-full blur-[0.3px] opacity-80 transform rotate-12" />
      <div className="absolute bottom-16 left-2 w-16 h-20 bg-gradient-to-br from-emerald-700 to-green-900 rounded-full blur-[2px] opacity-70" />
    </div>
  );
}

// Public layout with Navbar and floating leaves
function PublicLayout({ children }: { children: React.ReactNode }) {
  const cartCount = useCartStore((s) => s.itemCount());

  return (
    <div className="min-h-screen bg-brand-bg relative pb-20">
      <FloatingLeaves />
      {/* Outer card container */}
      <div className="relative z-20 w-[calc(100%-16px)] sm:w-[calc(100%-32px)] md:w-full max-w-[1240px] mx-auto bg-brand-cream rounded-2xl sm:rounded-[2.5rem] shadow-2xl border border-white/60 my-2 sm:my-4 md:my-8">
        {/* Prevent inner content overflow without clipping fixed/absolute positioned children */}
        <div className="overflow-hidden rounded-2xl sm:rounded-[2.5rem]">
          <div className="p-4 sm:p-6 md:p-10">
            {/* macOS dots */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-[#f87171]" />
              <span className="w-3 h-3 rounded-full bg-[#fbbf24]" />
              <span className="w-3 h-3 rounded-full bg-[#34d399]" />
            </div>
            <Navbar />
            {children}
          </div>
        </div>
      </div>
      <CartDrawer />
      <FloatingCartBar />

      {/* Floating WhatsApp Quick Action Button */}
      <aside
        aria-label="WhatsApp quick chat"
        className={`fixed right-4 sm:right-6 z-40 transition-all duration-300 ${
          cartCount > 0 ? 'bottom-24 sm:bottom-6' : 'bottom-6'
        }`}
      >
        <a
          href={getGeneralWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3 sm:px-4 py-3 rounded-full shadow-2xl shadow-emerald-600/40 font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95 group"
          title="Chat with Beemans on WhatsApp (+91 99424 03033)"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span className="hidden sm:inline">WhatsApp Order</span>
        </a>
      </aside>
    </div>
  );
}

export default function App() {
  const { accessToken, fetchMe } = useAuthStore();

  // Rehydrate user on mount if token exists
  useEffect(() => {
    if (accessToken) fetchMe();
  }, []);

  return (
    <>
      <LoadingScreen durationMs={2000} />
      <BrowserRouter>
        <Routes>
          {/* Admin routes — separate layout, no navbar */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="menu" element={<MenuManagement />} />
            <Route path="orders" element={<OrderManagement />} />
          </Route>

          {/* Public routes */}
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/menu" element={<PublicLayout><Menu /></PublicLayout>} />
          <Route path="/checkout" element={<PublicLayout><Checkout /></PublicLayout>} />
          <Route path="/orders" element={<PublicLayout><OrderHistory /></PublicLayout>} />
          <Route path="/orders/:id" element={<PublicLayout><OrderTracking /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
          <Route path="/login" element={<PublicLayout><Login /></PublicLayout>} />
          <Route path="/register" element={<PublicLayout><Register /></PublicLayout>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
