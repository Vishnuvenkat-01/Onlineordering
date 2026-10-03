import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { orderApi } from '@/api/endpoints';
import { useAuthStore } from '@/store/authStore';
import type { Order } from '@/types';
import OrderStatusBadge from '@/components/OrderStatusBadge';

export default function OrderHistory() {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) { navigate('/login'); return; }
    orderApi.getMyOrders()
      .then(({ data }) => setOrders(data.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [user, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-brand-red border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <h1 className="text-3xl font-black text-neutral-900 mb-8">My Orders</h1>

      {orders.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-20 text-center">
          <span className="text-5xl">📦</span>
          <p className="font-semibold text-neutral-700">No orders yet</p>
          <Link to="/menu" className="bg-brand-red text-white px-6 py-2.5 rounded-full font-semibold hover:bg-brand-red-hover transition">
            Start Ordering
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <Link
              key={order.id}
              to={`/orders/${order.id}`}
              className="block bg-white rounded-2xl p-5 shadow-sm border border-neutral-100 hover:border-brand-red/30 hover:shadow-md transition group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-bold text-neutral-900 text-sm">
                    Order #{order.id.slice(0, 8).toUpperCase()}
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    {new Date(order.createdAt).toLocaleDateString('en-IN', {
                      day: 'numeric', month: 'short', year: 'numeric',
                      hour: '2-digit', minute: '2-digit',
                    })}
                  </p>
                  <p className="text-xs text-neutral-600 mt-2">
                    {order.items.length} item{order.items.length !== 1 ? 's' : ''}
                    {order.items.slice(0, 2).map((i) => ` · ${i.menuItem?.name ?? ''}`).join('')}
                    {order.items.length > 2 ? ` +${order.items.length - 2} more` : ''}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <OrderStatusBadge status={order.status} />
                  <p className="font-bold text-neutral-900">₹{order.totalAmount.toFixed(2)}</p>
                </div>
              </div>
              <p className="text-xs text-brand-red mt-3 font-semibold group-hover:underline">
                View Details →
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
