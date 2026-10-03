import { useEffect, useState } from 'react';
import { adminApi } from '@/api/endpoints';

interface DashboardData {
  todayOrders: number;
  todayRevenue: number;
  totalOrders: number;
  topItems: { name: string; count: number }[];
}

export default function AdminDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    adminApi.getDashboard()
      .then(({ data: res }) => setData(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-brand-red border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const stats = [
    { label: "Today's Orders", value: data?.todayOrders ?? 0, icon: '📦', color: 'bg-blue-50 text-blue-700' },
    { label: "Today's Revenue", value: `₹${(data?.todayRevenue ?? 0).toFixed(2)}`, icon: '💰', color: 'bg-green-50 text-green-700' },
    { label: 'Total Orders', value: data?.totalOrders ?? 0, icon: '📊', color: 'bg-purple-50 text-purple-700' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-black text-neutral-900 mb-6">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className={`rounded-2xl p-5 ${s.color} border border-white/60`}>
            <div className="text-2xl mb-1">{s.icon}</div>
            <p className="text-2xl font-black">{s.value}</p>
            <p className="text-sm font-medium opacity-80 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Top Items */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
        <h2 className="font-bold text-neutral-900 mb-4">🏆 Top Ordered Items</h2>
        {data?.topItems && data.topItems.length > 0 ? (
          <div className="space-y-3">
            {data.topItems.map((item, idx) => (
              <div key={item.name} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-red text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-neutral-900">{item.name}</span>
                    <span className="text-sm text-neutral-500">{item.count} orders</span>
                  </div>
                  <div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-red rounded-full"
                      style={{ width: `${(item.count / (data.topItems[0]?.count ?? 1)) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-neutral-400 text-sm">No order data yet.</p>
        )}
      </div>
    </div>
  );
}
