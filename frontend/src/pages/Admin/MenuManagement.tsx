import { useEffect, useState } from 'react';
import { menuApi } from '@/api/endpoints';
import type { MenuItem, Category } from '@/types';

interface FormState {
  name: string;
  price: string;
  priceHalf: string;
  priceFull: string;
  isVeg: boolean;
  categoryId: string;
  description: string;
  available: boolean;
  image: File | null;
}

const EMPTY: FormState = {
  name: '', price: '', priceHalf: '', priceFull: '',
  isVeg: true, categoryId: '', description: '',
  available: true, image: null,
};

export default function MenuManagement() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(EMPTY);
  const [saving, setSaving] = useState(false);
  const [filterCat, setFilterCat] = useState('all');

  const load = () => {
    Promise.all([menuApi.getAll(), menuApi.getCategories()])
      .then(([iRes, cRes]) => {
        setItems(iRes.data.data);
        setCategories(cRes.data.data);
      })
      .finally(() => setLoading(false));
  };

  useEffect(load, []);

  const openCreate = () => { setEditId(null); setForm(EMPTY); setShowForm(true); };
  const openEdit = (item: MenuItem) => {
    setEditId(item.id);
    setForm({
      name: item.name, price: item.price.toString(),
      priceHalf: item.priceHalf?.toString() ?? '',
      priceFull: item.priceFull?.toString() ?? '',
      isVeg: item.isVeg, categoryId: item.categoryId,
      description: item.description ?? '', available: item.available, image: null,
    });
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const fd = new FormData();
    fd.append('name', form.name);
    fd.append('price', form.price);
    fd.append('isVeg', String(form.isVeg));
    fd.append('categoryId', form.categoryId);
    fd.append('description', form.description);
    fd.append('available', String(form.available));
    if (form.priceHalf) fd.append('priceHalf', form.priceHalf);
    if (form.priceFull) fd.append('priceFull', form.priceFull);
    if (form.image) fd.append('image', form.image);
    try {
      if (editId) await menuApi.update(editId, fd);
      else await menuApi.create(fd);
      setShowForm(false);
      load();
    } catch (err) {
      alert('Failed to save item');
    } finally {
      setSaving(false);
    }
  };

  const toggleAvail = async (item: MenuItem) => {
    await menuApi.toggleAvailability(item.id, !item.available);
    setItems((prev) => prev.map((i) => i.id === item.id ? { ...i, available: !i.available } : i));
  };

  const deleteItem = async (id: string) => {
    if (!confirm('Delete this item?')) return;
    await menuApi.delete(id);
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const filtered = filterCat === 'all' ? items : items.filter((i) => i.categoryId === filterCat);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-black text-neutral-900">Menu Management</h1>
        <button
          id="add-item-btn"
          onClick={openCreate}
          className="bg-brand-red text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-brand-red-hover transition shadow-md"
        >
          + Add Item
        </button>
      </div>

      {/* Category filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
        <button onClick={() => setFilterCat('all')} className={`px-4 py-1.5 rounded-full text-sm font-medium flex-shrink-0 transition ${filterCat === 'all' ? 'bg-brand-red text-white' : 'bg-white text-neutral-700 border border-neutral-200'}`}>All</button>
        {categories.map((c) => (
          <button key={c.id} onClick={() => setFilterCat(c.id)} className={`px-4 py-1.5 rounded-full text-sm font-medium flex-shrink-0 transition ${filterCat === c.id ? 'bg-brand-red text-white' : 'bg-white text-neutral-700 border border-neutral-200'}`}>
            {c.name}
          </button>
        ))}
      </div>

      {/* Items Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden">
        <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[540px]">
          <thead className="bg-neutral-50 border-b border-neutral-100">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-neutral-600">Name</th>
              <th className="px-4 py-3 text-left font-semibold text-neutral-600">Category</th>
              <th className="px-4 py-3 text-left font-semibold text-neutral-600">Price</th>
              <th className="px-4 py-3 text-left font-semibold text-neutral-600">Type</th>
              <th className="px-4 py-3 text-left font-semibold text-neutral-600">Status</th>
              <th className="px-4 py-3 text-right font-semibold text-neutral-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-50">
            {filtered.map((item) => (
              <tr key={item.id} className="hover:bg-neutral-50 transition">
                <td className="px-4 py-3 font-medium text-neutral-900">{item.name}</td>
                <td className="px-4 py-3 text-neutral-500">{item.category?.name ?? '—'}</td>
                <td className="px-4 py-3 font-semibold">
                  {item.priceHalf ? `₹${item.priceHalf}/₹${item.priceFull}` : `₹${item.price}`}
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${item.isVeg ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                    {item.isVeg ? '🌱 Veg' : '🍗 Non-Veg'}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button onClick={() => toggleAvail(item)} className={`px-2 py-0.5 rounded-full text-xs font-semibold transition ${item.available ? 'bg-green-50 text-green-700 hover:bg-red-50 hover:text-red-700' : 'bg-neutral-100 text-neutral-500 hover:bg-green-50 hover:text-green-700'}`}>
                    {item.available ? 'Available' : 'Unavailable'}
                  </button>
                </td>
                <td className="px-4 py-3 text-right">
                  <button onClick={() => openEdit(item)} className="text-blue-600 hover:text-blue-800 font-medium mr-3 transition">Edit</button>
                  <button onClick={() => deleteItem(item.id)} className="text-red-500 hover:text-red-700 font-medium transition">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        {filtered.length === 0 && !loading && (
          <p className="text-center text-neutral-400 py-10">No items found</p>
        )}
      </div>

      {/* Create/Edit Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-5 sm:p-8 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-black text-neutral-900 mb-6">{editId ? 'Edit Item' : 'Add New Item'}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Name *</label>
                <input required type="text" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Price *</label>
                  <input required type="number" step="0.01" value={form.price} onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))} className="w-full border border-neutral-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30" placeholder="₹" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Half Price</label>
                  <input type="number" step="0.01" value={form.priceHalf} onChange={(e) => setForm((f) => ({ ...f, priceHalf: e.target.value }))} className="w-full border border-neutral-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30" placeholder="Optional" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Full Price</label>
                  <input type="number" step="0.01" value={form.priceFull} onChange={(e) => setForm((f) => ({ ...f, priceFull: e.target.value }))} className="w-full border border-neutral-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30" placeholder="Optional" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Category *</label>
                <select required value={form.categoryId} onChange={(e) => setForm((f) => ({ ...f, categoryId: e.target.value }))} className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 bg-white">
                  <option value="">Select category</option>
                  {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Description</label>
                <textarea value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} rows={2} className="w-full border border-neutral-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/30 resize-none" />
              </div>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={form.isVeg} onChange={(e) => setForm((f) => ({ ...f, isVeg: e.target.checked }))} className="rounded accent-green-600" />
                  <span className="text-sm font-medium text-neutral-700">Vegetarian</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={form.available} onChange={(e) => setForm((f) => ({ ...f, available: e.target.checked }))} className="rounded accent-brand-red" />
                  <span className="text-sm font-medium text-neutral-700">Available</span>
                </label>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Image</label>
                <input type="file" accept="image/*" onChange={(e) => setForm((f) => ({ ...f, image: e.target.files?.[0] ?? null }))} className="w-full text-sm text-neutral-600 file:mr-3 file:py-1.5 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-red file:text-white hover:file:bg-brand-red-hover" />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowForm(false)} className="flex-1 border border-neutral-200 text-neutral-700 font-semibold py-2.5 rounded-full hover:bg-neutral-50 transition">Cancel</button>
                <button type="submit" disabled={saving} className="flex-1 bg-brand-red text-white font-semibold py-2.5 rounded-full hover:bg-brand-red-hover transition disabled:opacity-60">
                  {saving ? 'Saving...' : (editId ? 'Update' : 'Create')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
