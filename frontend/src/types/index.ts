// ─── Auth & User ────────────────────────────────────────────────────────────

export type Role = 'CUSTOMER' | 'ADMIN';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  createdAt: string;
}

export interface Address {
  id: string;
  userId: string;
  line1: string;
  city: string;
  pincode: string;
  phone: string;
}

// ─── Menu ────────────────────────────────────────────────────────────────────

export interface Category {
  id: string;
  name: string;
  slug: string;
  displayOrder?: number;
  icon?: string;
  itemCount?: number;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  priceHalf?: number | null;
  priceFull?: number | null;
  isVeg: boolean;
  categoryId: string;
  category?: Category;
  imageUrl?: string | null;
  description?: string | null;
  available: boolean;
  createdAt?: string;
}

// ─── Cart ────────────────────────────────────────────────────────────────────

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

// ─── Orders ──────────────────────────────────────────────────────────────────

export type OrderStatus =
  | 'PLACED'
  | 'PREPARING'
  | 'OUT_FOR_DELIVERY'
  | 'DELIVERED'
  | 'CANCELLED';

export interface OrderItem {
  id: string;
  orderId: string;
  menuItemId: string;
  menuItem: MenuItem;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  status: OrderStatus;
  paymentId?: string | null;
  addressId?: string | null;
  createdAt: string;
  address?: Address | null;
}

// ─── API response wrappers ───────────────────────────────────────────────────

export interface ApiSuccess<T> {
  success: true;
  data: T;
}

export interface ApiError {
  success: false;
  message: string;
  errors?: Record<string, string[]>;
}

export type ApiResponse<T> = ApiSuccess<T> | ApiError;

// ─── Auth payloads ───────────────────────────────────────────────────────────

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  user: User;
}

// ─── Razorpay ────────────────────────────────────────────────────────────────

export interface RazorpayOrder {
  razorpayOrderId: string;
  amount: number;
  currency: string;
  orderId: string;
}
