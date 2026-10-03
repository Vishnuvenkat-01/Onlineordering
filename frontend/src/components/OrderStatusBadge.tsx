import type { OrderStatus } from '@/types';

interface OrderStatusBadgeProps {
  status: OrderStatus;
  animated?: boolean;
}

const STATUS_CONFIG: Record<OrderStatus, { label: string; bg: string; text: string; dot: string }> = {
  PLACED: {
    label: 'Order Placed',
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    dot: 'bg-blue-500',
  },
  PREPARING: {
    label: 'Preparing',
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    dot: 'bg-amber-500',
  },
  OUT_FOR_DELIVERY: {
    label: 'Out for Delivery',
    bg: 'bg-purple-50',
    text: 'text-purple-700',
    dot: 'bg-purple-500',
  },
  DELIVERED: {
    label: 'Delivered',
    bg: 'bg-green-50',
    text: 'text-green-700',
    dot: 'bg-green-500',
  },
  CANCELLED: {
    label: 'Cancelled',
    bg: 'bg-red-50',
    text: 'text-red-700',
    dot: 'bg-red-500',
  },
};

export default function OrderStatusBadge({ status, animated = false }: OrderStatusBadgeProps) {
  const config = STATUS_CONFIG[status];
  const isActive = status !== 'DELIVERED' && status !== 'CANCELLED';

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${config.bg} ${config.text}`}
    >
      <span
        className={`w-2 h-2 rounded-full flex-shrink-0 ${config.dot} ${
          animated && isActive ? 'animate-status-pulse' : ''
        }`}
      />
      {config.label}
    </span>
  );
}
