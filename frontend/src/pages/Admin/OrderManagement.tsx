import { useEffect, useState } from 'react';
import { orderApi } from '@/api/endpoints';
import type { Order, OrderStatus } from '@/types';
import OrderStatusBadge from '@/components/OrderStatusBadge';
import { io } from 'socket.io-client';

const ALL_STATUSES: OrderStatus[] = ['PLACED', 'PREPARING', 'OUT_FOR_DELIVERY', 'DELIVERED', 'CANCELLED'];

export default function OrderManagement() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    orderApi.getAll().then(({ data }) => setOrders(data.data)).finally(() => setLoading(false));

    // Listen for real-time new orders
    const socket = io('/', { path: '/socket.io', transports: ['websocket'] });
    socket.on('order:new', (order: Order) => {
      setOrders((prev) => [order, ...prev]);
    });
    return () => { socket.disconnect(); };
  }, []);

  const updateStatus = async (orderId: string, status: string) => {
    setUpdatingId(orderId);
    try {
      const { data } = await orderApi.updateStatus(orderId, status);
      setOrders((prev) => prev.map((o) => o.id === orderId ? data.data : o));
    } catch {
      alert('Failed to update status');
    } finally {
      setUpdatingId(null);
    }
  };

  const filtered = filterStatus === 'all' ? orders : orders.filter((o) => o.status === filterStatus);

  return (
    <div>
      <h1 className="text-2xl font-black text-neutral-900 mb-6">Order Management</h1>

      {/* Status filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
        <button onClick={() => setFilterStatus('all')} className={`px-4 py-1.5 rounded-full text-sm font-medium flex-shrink-0 transition ${filterStatus === 'all' ? 'bg-brand-red text-white' : 'bg-white text-neutral-700 border border-neutral-200'}`}>All</button>
        {ALL_STATUSES.map((s) => (
          <button key={s} onClick={() => setFilterStatus(s)} className={`px-4 py-1.5 rounded-full text-sm font-medium flex-shrink-0 transition ${filterStatus === s ? 'bg-brand-red text-white' : 'bg-white text-neutral-700 border border-neutral-200'}`}>
            {s.replace(/_/g, ' ')}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-10 h-10 border-4 border-brand-red border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-neutral-400">No orders found</div>
          ) : (
            filtered.map((order) => (
              <div key={order.id} className="bg-white rounded-2xl p-5 shadow-sm border border-neutral-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-bold text-neutral-900 text-sm">#{order.id.slice(0, 8).toUpperCase()}</span>
                      <OrderStatusBadge status={order.status} animated={order.status !== 'DELIVERED' && order.status !== 'CANCELLED'} />
                    </div>
                    <p className="text-xs text-neutral-500">
                      {new Date(order.createdAt).toLocaleString('en-IN')} · {order.items.length} items
                    </p>
                    <p className="text-xs text-neutral-600 mt-1">
                      {order.items.slice(0, 3).map((i) => i.menuItem?.name).join(', ')}
                      {order.items.length > 3 ? ` +${order.items.length - 3} more` : ''}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-neutral-900">₹{order.totalAmount.toFixed(2)}</span>
                    <select
                      id={`status-select-${order.id}`}
                      value={order.status}
                      onChange={(e) => updateStatus(order.id, e.target.value)}
                      disabled={updatingId === order.id || order.status === 'DELIVERED' || order.status === 'CANCELLED'}
                      className="border border-neutral-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 bg-white disabled:opacity-60 cursor-pointer"
                    >
                      {ALL_STATUSES.map((s) => (
                        <option key={s} value={s}>{s.replace(/_/g, ' ')}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
