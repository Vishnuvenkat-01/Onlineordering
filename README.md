# Beemans Food Ordering App

A full-stack online food ordering system for **Beemans** restaurant — React + Vite frontend with a Node.js + Express + PostgreSQL backend.

---

## Prerequisites

| Tool | Version |
|------|---------|
| Node.js | ≥ 18 |
| npm | ≥ 9 |
| PostgreSQL | ≥ 14 (local or Supabase/Neon) |

---

## Project Structure

```
food-ordering-app/
├── frontend/   ← Vite + React + TS + Tailwind + Zustand
├── backend/    ← Express + TS + Prisma + Socket.IO
└── menu.json   ← Menu seed data
```

---

## Setup Instructions

### 1. Clone & navigate

```bash
cd "c:\Users\vishn\OneDrive\Desktop\Light"
```

### 2. Backend setup

```bash
cd backend

# Copy env file and fill in your values
copy .env.example .env
```

**Edit `.env`** with your PostgreSQL URL and Razorpay test keys.

```bash
# Generate Prisma client
npm run db:generate

# Run database migrations (creates all tables)
npm run db:migrate

# Seed menu data from menu.json + create admin user
npm run db:seed
```

> **Default admin credentials:** `admin@beemans.com` / `admin123456`

```bash
# Start backend dev server (port 4000)
npm run dev
```

### 3. Frontend setup

```bash
cd ../frontend

# Copy env file
copy .env.example .env
# Add your Razorpay test key_id to VITE_RAZORPAY_KEY_ID
```

```bash
# Start frontend dev server (port 5173)
npm run dev
```

Open http://localhost:5173

---

## Razorpay Test Setup

1. Create a free account at [dashboard.razorpay.com](https://dashboard.razorpay.com)
2. Go to **Settings → API Keys → Generate Test Key**
3. Copy `key_id` → `frontend/.env` as `VITE_RAZORPAY_KEY_ID`
4. Copy `key_id` and `key_secret` → `backend/.env` as `RAZORPAY_KEY_ID` / `RAZORPAY_KEY_SECRET`
5. In test mode, use card `4111 1111 1111 1111`, any future expiry, any CVV

---

## Available Routes

### Frontend
| Path | Description |
|------|------------|
| `/` | Home page (hero + featured carousel) |
| `/menu` | Full menu with category tabs + veg filter |
| `/checkout` | Address form + Razorpay payment |
| `/orders` | Order history (login required) |
| `/orders/:id` | Live order tracking |
| `/login` | Login |
| `/register` | Register |
| `/admin` | Admin dashboard (ADMIN role only) |
| `/admin/menu` | Menu management |
| `/admin/orders` | Order management |

### Backend API
| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | `/api/auth/register` | — | Register |
| POST | `/api/auth/login` | — | Login |
| GET | `/api/auth/me` | JWT | Current user |
| POST | `/api/auth/refresh` | — | Refresh token |
| GET | `/api/menu` | — | All items (filter: `?category=&veg=true`) |
| GET | `/api/menu/categories` | — | All categories |
| GET | `/api/menu/:id` | — | Single item |
| POST | `/api/menu` | ADMIN | Create item |
| PATCH | `/api/menu/:id` | ADMIN | Update item |
| DELETE | `/api/menu/:id` | ADMIN | Delete item |
| POST | `/api/orders` | JWT | Create order |
| POST | `/api/orders/verify-payment` | JWT | Verify Razorpay payment |
| GET | `/api/orders/my` | JWT | My orders |
| GET | `/api/orders/:id` | JWT | Single order |
| GET | `/api/orders/admin` | ADMIN | All orders |
| PATCH | `/api/orders/:id/status` | ADMIN | Update status |
| GET | `/api/admin/dashboard` | ADMIN | Dashboard stats |

---

## Running Tests

```bash
cd backend
npm test
```

---

## Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy dist/ folder
```
Set env var `VITE_RAZORPAY_KEY_ID` in your hosting dashboard.

### Backend (Render/Railway)
```bash
cd backend
npm run build
# Deploy with start command: npm start
```
Set all env vars from `.env.example` in your hosting dashboard.
Set `DATABASE_URL` to your Supabase/Neon PostgreSQL connection string.
After deploy: `npm run db:migrate && npm run db:seed`

---

## Socket.IO Events

| Event | Direction | Data |
|-------|-----------|------|
| `join_order` | client → server | `orderId: string` |
| `join_admin` | client → server | — |
| `order:status_updated` | server → client | `{ orderId, status }` |
| `order:new` | server → admin | `Order` object |
