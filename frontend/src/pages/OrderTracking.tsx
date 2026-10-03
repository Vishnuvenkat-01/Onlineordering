import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { io, Socket } from 'socket.io-client';
import { orderApi } from '@/api/endpoints';
import type { Order, OrderStatus } from '@/types';
import OrderStatusBadge from '@/components/OrderStatusBadge';

const STEPS: { status: OrderStatus; label: string; icon: string }[] = [
  { status: 'PLACED', label: 'Order Placed', icon: '📋' },
  { status: 'PREPARING', label: 'Preparing', icon: '👨‍🍳' },
  { status: 'OUT_FOR_DELIVERY', label: 'Out for Delivery', icon: '🛵' },
  { status: 'DELIVERED', label: 'Delivered', icon: '✅' },
];

const STATUS_ORDER: OrderStatus[] = ['PLACED', 'PREPARING', 'OUT_FOR_DELIVERY', 'DELIVERED'];

export default function OrderTracking() {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [socketConnected, setSocketConnected] = useState(false);

  useEffect(() => {
    if (!id) return;

    orderApi.getById(id)
      .then(({ data }) => setOrder(data.data))
      .catch(() => {})
      .finally(() => setLoading(false));

    // Socket.IO real-time updates
    const socket: Socket = io('/', { path: '/socket.io', transports: ['websocket'] });

    socket.on('connect', () => {
      setSocketConnected(true);
      socket.emit('join_order', id);
    });

    socket.on('disconnect', () => setSocketConnected(false));

    socket.on('order:status_updated', (data: { orderId: string; status: OrderStatus }) => {
      if (data.orderId === id) {
        setOrder((prev) => prev ? { ...prev, status: data.status } : prev);
      }
    });

    return () => { socket.disconnect(); };
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-brand-red border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 p-8">
        <span className="text-4xl">❌</span>
        <p className="font-semibold text-neutral-700">Order not found</p>
        <Link to="/orders" className="text-brand-red font-semibold hover:underline">View My Orders</Link>
      </div>
    );
  }

  const currentIdx = order.status === 'CANCELLED'
    ? -1
    : STATUS_ORDER.indexOf(order.status);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-neutral-900 mb-1">Order Tracking</h1>
          <p className="text-sm text-neutral-500">#{order.id.slice(0, 8).toUpperCase()}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${socketConnected ? 'bg-green-500 animate-status-pulse' : 'bg-neutral-300'}`} />
          <span className="text-xs text-neutral-500">{socketConnected ? 'Live' : 'Offline'}</span>
        </div>
      </div>

      {/* Status Badge */}
      <div className="mb-8">
        <OrderStatusBadge status={order.status} animated={true} />
      </div>

      {/* Status Stepper */}
      {order.status !== 'CANCELLED' ? (
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-neutral-100 mb-8">
          <div className="relative">
            {/* Progress line */}
            <div className="absolute top-5 sm:top-6 left-5 sm:left-6 right-5 sm:right-6 h-0.5 bg-neutral-200">
              <div
                className="h-full bg-brand-red transition-all duration-700"
                style={{ width: `${(currentIdx / (STEPS.length - 1)) * 100}%` }}
              />
            </div>

            <div className="relative flex justify-between">
              {STEPS.map((step, idx) => {
                const isDone = idx <= currentIdx;
                const isCurrent = idx === currentIdx;
                return (
                  <div key={step.status} className="flex flex-col items-center gap-1.5 sm:gap-2 w-14 sm:w-20">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-base sm:text-lg transition-all duration-500 z-10 ${
                        isDone
                          ? 'bg-brand-red text-white shadow-md shadow-brand-red/30'
                          : 'bg-neutral-100 text-neutral-400 border-2 border-neutral-200'
                      } ${isCurrent ? 'scale-110 ring-4 ring-brand-red/20' : ''}`}
                    >
                      {step.icon}
                    </div>
                    <p className={`text-[10px] sm:text-xs font-medium text-center leading-tight ${isDone ? 'text-neutral-900' : 'text-neutral-400'}`}>
                      {step.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8 text-center">
          <p className="text-red-700 font-semibold">This order was cancelled.</p>
        </div>
      )}

      {/* Order Items */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 mb-6">
        <h2 className="font-bold text-neutral-900 mb-4">Items Ordered</h2>
        <div className="space-y-3">
          {order.items.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-neutral-900">{item.menuItem?.name ?? 'Item'}</span>
                <span className="text-xs text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded-full">× {item.quantity}</span>
              </div>
              <span className="text-sm font-semibold">₹{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-neutral-100 flex justify-between font-bold">
          <span>Total</span>
          <span>₹{order.totalAmount.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex gap-4">
        <Link to="/orders" className="flex-1 text-center border border-neutral-200 text-neutral-700 font-semibold py-3 rounded-full hover:bg-neutral-50 transition">
          My Orders
        </Link>
        <Link to="/menu" className="flex-1 text-center bg-brand-red text-white font-semibold py-3 rounded-full hover:bg-brand-red-hover transition shadow-md">
          Order Again
        </Link>
      </div>
    </div>
  );
}
