import api from './client';
import type { MenuItem, Category, Order, AuthTokens, User, RazorpayOrder, Address } from '@/types';

// ─── Auth ────────────────────────────────────────────────────────────────────

export const authApi = {
  register: (data: { name: string; email: string; password: string }) =>
    api.post<{ success: true; data: AuthTokens }>('/auth/register', data),

  login: (data: { email: string; password: string }) =>
    api.post<{ success: true; data: AuthTokens }>('/auth/login', data),

  me: () =>
    api.get<{ success: true; data: User }>('/auth/me'),

  refresh: (refreshToken: string) =>
    api.post<{ success: true; data: { accessToken: string } }>('/auth/refresh', { refreshToken }),
};

import { FALLBACK_CATEGORIES, FALLBACK_ITEMS } from '@/data/fallbackMenu';

// ─── Menu ────────────────────────────────────────────────────────────────────

export const menuApi = {
  getAll: async (params?: { category?: string; veg?: boolean; search?: string }) => {
    try {
      const res = await api.get<{ success: true; data: MenuItem[] }>('/menu', { params });
      if (res.data?.data && res.data.data.length > 0) {
        return res;
      }
    } catch {
      // Backend not running or failed; use local fallback
    }

    let items = FALLBACK_ITEMS;
    if (params?.category && params.category !== 'all') {
      items = items.filter((i) => i.category?.slug === params.category);
    }
    if (params?.veg !== undefined) {
      items = items.filter((i) => i.isVeg === params.veg);
    }
    if (params?.search && params.search.trim()) {
      const q = params.search.toLowerCase();
      items = items.filter((i) => i.name.toLowerCase().includes(q));
    }
    return { data: { success: true as const, data: items } };
  },

  getCategories: async () => {
    try {
      const res = await api.get<{ success: true; data: Category[] }>('/menu/categories');
      if (res.data?.data && res.data.data.length > 0) {
        return res;
      }
    } catch {
      // Backend not running or failed; use local fallback
    }
    return { data: { success: true as const, data: FALLBACK_CATEGORIES } };
  },

  getById: async (id: string) => {
    try {
      const res = await api.get<{ success: true; data: MenuItem }>(`/menu/${id}`);
      if (res.data?.data) return res;
    } catch {
      // fallback
    }
    const found = FALLBACK_ITEMS.find((i) => i.id === id);
    if (found) return { data: { success: true as const, data: found } };
    throw new Error('Item not found');
  },

  // Admin-only
  create: (formData: FormData) =>
    api.post<{ success: true; data: MenuItem }>('/menu', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),

  update: (id: string, formData: FormData) =>
    api.patch<{ success: true; data: MenuItem }>(`/menu/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),

  delete: (id: string) =>
    api.delete<{ success: true }>(`/menu/${id}`),

  toggleAvailability: (id: string, available: boolean) =>
    api.patch<{ success: true; data: MenuItem }>(`/menu/${id}/availability`, { available }),
};

// ─── Orders ──────────────────────────────────────────────────────────────────

export const orderApi = {
  create: (data: {
    items: { menuItemId: string; quantity: number; price: number }[];
    address: Omit<Address, 'id' | 'userId'>;
    totalAmount: number;
  }) =>
    api.post<{ success: true; data: { order: Order; payment: RazorpayOrder } }>('/orders', data),

  verifyPayment: (data: {
    orderId: string;
    razorpayOrderId: string;
    razorpayPaymentId: string;
    razorpaySignature: string;
  }) =>
    api.post<{ success: true; data: Order }>('/orders/verify-payment', data),

  getMyOrders: () =>
    api.get<{ success: true; data: Order[] }>('/orders/my'),

  getById: (id: string) =>
    api.get<{ success: true; data: Order }>(`/orders/${id}`),

  // Admin-only
  getAll: (params?: { status?: string; page?: number }) =>
    api.get<{ success: true; data: Order[]; total: number }>('/orders/admin', { params }),

  updateStatus: (id: string, status: string) =>
    api.patch<{ success: true; data: Order }>(`/orders/${id}/status`, { status }),
};

// ─── Admin Dashboard ─────────────────────────────────────────────────────────

export const adminApi = {
  getDashboard: () =>
    api.get<{
      success: true;
      data: {
        todayOrders: number;
        todayRevenue: number;
        totalOrders: number;
        topItems: { name: string; count: number }[];
      };
    }>('/admin/dashboard'),
};
