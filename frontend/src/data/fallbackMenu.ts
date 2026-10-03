import type { Category, MenuItem } from '@/types';

export const FALLBACK_CATEGORIES: Category[] = [
  {
    "id": "cat-1",
    "name": "Biryani",
    "slug": "briyani",
    "icon": "🍚",
    "itemCount": 8
  },
  {
    "id": "cat-2",
    "name": "Roast & Dosa",
    "slug": "roast",
    "icon": "🥞",
    "itemCount": 9
  },
  {
    "id": "cat-3",
    "name": "Uthappam",
    "slug": "uthappam",
    "icon": "🍳",
    "itemCount": 6
  },
  {
    "id": "cat-4",
    "name": "Parotta",
    "slug": "parotta",
    "icon": "🫓",
    "itemCount": 7
  },
  {
    "id": "cat-5",
    "name": "Fried Rice & Meals",
    "slug": "rice",
    "icon": "🍚",
    "itemCount": 7
  },
  {
    "id": "cat-6",
    "name": "Noodles",
    "slug": "noodles",
    "icon": "🍜",
    "itemCount": 7
  },
  {
    "id": "cat-7",
    "name": "Idly",
    "slug": "idly",
    "icon": "🥟",
    "itemCount": 1
  },
  {
    "id": "cat-8",
    "name": "Chapathi",
    "slug": "chapathi",
    "icon": "🫓",
    "itemCount": 2
  },
  {
    "id": "cat-9",
    "name": "Roti & Naan",
    "slug": "rotti_and_naan",
    "icon": "🥖",
    "itemCount": 10
  },
  {
    "id": "cat-10",
    "name": "Chicken Gravy",
    "slug": "chicken_gravy",
    "icon": "🍲",
    "itemCount": 9
  },
  {
    "id": "cat-11",
    "name": "Chicken Fry (Dry)",
    "slug": "chicken_fry_dry",
    "icon": "🍗",
    "itemCount": 5
  },
  {
    "id": "cat-12",
    "name": "Mutton Fry",
    "slug": "mutton_fry",
    "icon": "🥩",
    "itemCount": 5
  },
  {
    "id": "cat-13",
    "name": "Grill Chicken",
    "slug": "grill_chicken",
    "icon": "🔥",
    "itemCount": 4
  },
  {
    "id": "cat-14",
    "name": "Tandoori Chicken",
    "slug": "tandoori_chicken",
    "icon": "🍢",
    "itemCount": 4
  },
  {
    "id": "cat-15",
    "name": "Rolls & Frankies",
    "slug": "roll",
    "icon": "🌯",
    "itemCount": 2
  },
  {
    "id": "cat-16",
    "name": "Veg Starters",
    "slug": "starter_veg",
    "icon": "🥗",
    "itemCount": 6
  },
  {
    "id": "cat-17",
    "name": "Non-Veg Starters",
    "slug": "starter_non_veg",
    "icon": "🍤",
    "itemCount": 4
  },
  {
    "id": "cat-18",
    "name": "Chinese Chicken",
    "slug": "chineese_chicken",
    "icon": "🥡",
    "itemCount": 7
  },
  {
    "id": "cat-19",
    "name": "Special Dishes",
    "slug": "special_items",
    "icon": "⭐",
    "itemCount": 6
  },
  {
    "id": "cat-20",
    "name": "Nattu Kozhi",
    "slug": "nattu_kozhi",
    "icon": "🐔",
    "itemCount": 2
  },
  {
    "id": "cat-21",
    "name": "Kaadai (Quail)",
    "slug": "kaadai",
    "icon": "🐦",
    "itemCount": 2
  },
  {
    "id": "cat-22",
    "name": "Veg Soups",
    "slug": "veg_soup",
    "icon": "🥣",
    "itemCount": 2
  },
  {
    "id": "cat-23",
    "name": "Non-Veg Soups",
    "slug": "non_veg_soup",
    "icon": "🍲",
    "itemCount": 3
  },
  {
    "id": "cat-24",
    "name": "Milkshakes & Beverages",
    "slug": "milk_shake",
    "icon": "🥤",
    "itemCount": 7
  },
  {
    "id": "cat-25",
    "name": "Veg Masala & Gravy",
    "slug": "veg_masala",
    "icon": "🥘",
    "itemCount": 7
  }
];

export const FALLBACK_ITEMS: MenuItem[] = [
  {
    "id": "item-1",
    "name": "Mutton Biryani",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 220,
    "isVeg": false,
    "categoryId": "cat-1",
    "category": {
      "id": "cat-1",
      "name": "Biryani",
      "slug": "briyani",
      "icon": "🍚",
      "itemCount": 8
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-2",
    "name": "Chicken Biryani",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 140,
    "isVeg": false,
    "categoryId": "cat-1",
    "category": {
      "id": "cat-1",
      "name": "Biryani",
      "slug": "briyani",
      "icon": "🍚",
      "itemCount": 8
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-3",
    "name": "Egg Biryani",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 120,
    "isVeg": false,
    "categoryId": "cat-1",
    "category": {
      "id": "cat-1",
      "name": "Biryani",
      "slug": "briyani",
      "icon": "🍚",
      "itemCount": 8
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-4",
    "name": "Empty Biryani",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 100,
    "isVeg": true,
    "categoryId": "cat-1",
    "category": {
      "id": "cat-1",
      "name": "Biryani",
      "slug": "briyani",
      "icon": "🍚",
      "itemCount": 8
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-5",
    "name": "Varutha Biryani",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 150,
    "isVeg": false,
    "categoryId": "cat-1",
    "category": {
      "id": "cat-1",
      "name": "Biryani",
      "slug": "briyani",
      "icon": "🍚",
      "itemCount": 8
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-6",
    "name": "Vadasati Rice",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 140,
    "isVeg": true,
    "categoryId": "cat-1",
    "category": {
      "id": "cat-1",
      "name": "Biryani",
      "slug": "briyani",
      "icon": "🍚",
      "itemCount": 8
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-7",
    "name": "Garlic Chicken Rice",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 140,
    "isVeg": false,
    "categoryId": "cat-1",
    "category": {
      "id": "cat-1",
      "name": "Biryani",
      "slug": "briyani",
      "icon": "🍚",
      "itemCount": 8
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-8",
    "name": "Chicken Pepper Rice",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 140,
    "isVeg": false,
    "categoryId": "cat-1",
    "category": {
      "id": "cat-1",
      "name": "Biryani",
      "slug": "briyani",
      "icon": "🍚",
      "itemCount": 8
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-9",
    "name": "Plain Roast",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 60,
    "isVeg": true,
    "categoryId": "cat-2",
    "category": {
      "id": "cat-2",
      "name": "Roast & Dosa",
      "slug": "roast",
      "icon": "🥞",
      "itemCount": 9
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-10",
    "name": "Ghee Roast",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 75,
    "isVeg": true,
    "categoryId": "cat-2",
    "category": {
      "id": "cat-2",
      "name": "Roast & Dosa",
      "slug": "roast",
      "icon": "🥞",
      "itemCount": 9
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-11",
    "name": "Onion Roast",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 75,
    "isVeg": true,
    "categoryId": "cat-2",
    "category": {
      "id": "cat-2",
      "name": "Roast & Dosa",
      "slug": "roast",
      "icon": "🥞",
      "itemCount": 9
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-12",
    "name": "Podi Roast",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 75,
    "isVeg": true,
    "categoryId": "cat-2",
    "category": {
      "id": "cat-2",
      "name": "Roast & Dosa",
      "slug": "roast",
      "icon": "🥞",
      "itemCount": 9
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-13",
    "name": "Mushroom Roast",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 130,
    "isVeg": true,
    "categoryId": "cat-2",
    "category": {
      "id": "cat-2",
      "name": "Roast & Dosa",
      "slug": "roast",
      "icon": "🥞",
      "itemCount": 9
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-14",
    "name": "Panner Roast",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 150,
    "isVeg": true,
    "categoryId": "cat-2",
    "category": {
      "id": "cat-2",
      "name": "Roast & Dosa",
      "slug": "roast",
      "icon": "🥞",
      "itemCount": 9
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1594998893017-36147cbcae05?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-15",
    "name": "Chicken Kaima Roast",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 150,
    "isVeg": false,
    "categoryId": "cat-2",
    "category": {
      "id": "cat-2",
      "name": "Roast & Dosa",
      "slug": "roast",
      "icon": "🥞",
      "itemCount": 9
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-16",
    "name": "Mutton Kaima Roast",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 200,
    "isVeg": false,
    "categoryId": "cat-2",
    "category": {
      "id": "cat-2",
      "name": "Roast & Dosa",
      "slug": "roast",
      "icon": "🥞",
      "itemCount": 9
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-17",
    "name": "Egg Kaima Roast",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 120,
    "isVeg": false,
    "categoryId": "cat-2",
    "category": {
      "id": "cat-2",
      "name": "Roast & Dosa",
      "slug": "roast",
      "icon": "🥞",
      "itemCount": 9
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1630383249896-424e482df921?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-18",
    "name": "Uthappam",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 60,
    "isVeg": true,
    "categoryId": "cat-3",
    "category": {
      "id": "cat-3",
      "name": "Uthappam",
      "slug": "uthappam",
      "icon": "🍳",
      "itemCount": 6
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-19",
    "name": "Onion Uthappam",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 75,
    "isVeg": true,
    "categoryId": "cat-3",
    "category": {
      "id": "cat-3",
      "name": "Uthappam",
      "slug": "uthappam",
      "icon": "🍳",
      "itemCount": 6
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-20",
    "name": "Chicken Kaima Uthappam",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 150,
    "isVeg": false,
    "categoryId": "cat-3",
    "category": {
      "id": "cat-3",
      "name": "Uthappam",
      "slug": "uthappam",
      "icon": "🍳",
      "itemCount": 6
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-21",
    "name": "Mutton Kaima Uthappam",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 170,
    "isVeg": false,
    "categoryId": "cat-3",
    "category": {
      "id": "cat-3",
      "name": "Uthappam",
      "slug": "uthappam",
      "icon": "🍳",
      "itemCount": 6
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-22",
    "name": "Egg Kaima Uthappam",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 120,
    "isVeg": false,
    "categoryId": "cat-3",
    "category": {
      "id": "cat-3",
      "name": "Uthappam",
      "slug": "uthappam",
      "icon": "🍳",
      "itemCount": 6
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1574484284002-952d92456975?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-23",
    "name": "Thosai",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 25,
    "isVeg": true,
    "categoryId": "cat-3",
    "category": {
      "id": "cat-3",
      "name": "Uthappam",
      "slug": "uthappam",
      "icon": "🍳",
      "itemCount": 6
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-24",
    "name": "Parotta",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 20,
    "isVeg": true,
    "categoryId": "cat-4",
    "category": {
      "id": "cat-4",
      "name": "Parotta",
      "slug": "parotta",
      "icon": "🫓",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-25",
    "name": "Egg Parotta",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 90,
    "isVeg": false,
    "categoryId": "cat-4",
    "category": {
      "id": "cat-4",
      "name": "Parotta",
      "slug": "parotta",
      "icon": "🫓",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-26",
    "name": "Chicken Kothu Parotta",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 140,
    "isVeg": false,
    "categoryId": "cat-4",
    "category": {
      "id": "cat-4",
      "name": "Parotta",
      "slug": "parotta",
      "icon": "🫓",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-27",
    "name": "Mutton Kothu Parotta",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 200,
    "isVeg": false,
    "categoryId": "cat-4",
    "category": {
      "id": "cat-4",
      "name": "Parotta",
      "slug": "parotta",
      "icon": "🫓",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-28",
    "name": "Veg Chilly Parotta",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 100,
    "isVeg": true,
    "categoryId": "cat-4",
    "category": {
      "id": "cat-4",
      "name": "Parotta",
      "slug": "parotta",
      "icon": "🫓",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-29",
    "name": "Cylon Parotta",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 30,
    "isVeg": true,
    "categoryId": "cat-4",
    "category": {
      "id": "cat-4",
      "name": "Parotta",
      "slug": "parotta",
      "icon": "🫓",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-30",
    "name": "Egg Cylon Parotta",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 40,
    "isVeg": false,
    "categoryId": "cat-4",
    "category": {
      "id": "cat-4",
      "name": "Parotta",
      "slug": "parotta",
      "icon": "🫓",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-31",
    "name": "Veg Rice",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 100,
    "isVeg": true,
    "categoryId": "cat-5",
    "category": {
      "id": "cat-5",
      "name": "Fried Rice & Meals",
      "slug": "rice",
      "icon": "🍚",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-32",
    "name": "Egg Rice",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 120,
    "isVeg": false,
    "categoryId": "cat-5",
    "category": {
      "id": "cat-5",
      "name": "Fried Rice & Meals",
      "slug": "rice",
      "icon": "🍚",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-33",
    "name": "Chicken Rice",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 140,
    "isVeg": false,
    "categoryId": "cat-5",
    "category": {
      "id": "cat-5",
      "name": "Fried Rice & Meals",
      "slug": "rice",
      "icon": "🍚",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-34",
    "name": "Schezwan Chicken Rice",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 150,
    "isVeg": false,
    "categoryId": "cat-5",
    "category": {
      "id": "cat-5",
      "name": "Fried Rice & Meals",
      "slug": "rice",
      "icon": "🍚",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-35",
    "name": "Mushroom Rice",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 140,
    "isVeg": true,
    "categoryId": "cat-5",
    "category": {
      "id": "cat-5",
      "name": "Fried Rice & Meals",
      "slug": "rice",
      "icon": "🍚",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-36",
    "name": "Panner Rice",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 150,
    "isVeg": true,
    "categoryId": "cat-5",
    "category": {
      "id": "cat-5",
      "name": "Fried Rice & Meals",
      "slug": "rice",
      "icon": "🍚",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-37",
    "name": "Gobi Rice",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 120,
    "isVeg": true,
    "categoryId": "cat-5",
    "category": {
      "id": "cat-5",
      "name": "Fried Rice & Meals",
      "slug": "rice",
      "icon": "🍚",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-38",
    "name": "Veg Noodles",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 100,
    "isVeg": true,
    "categoryId": "cat-6",
    "category": {
      "id": "cat-6",
      "name": "Noodles",
      "slug": "noodles",
      "icon": "🍜",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-39",
    "name": "Egg Noodles",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 120,
    "isVeg": false,
    "categoryId": "cat-6",
    "category": {
      "id": "cat-6",
      "name": "Noodles",
      "slug": "noodles",
      "icon": "🍜",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-40",
    "name": "Chicken Noodles",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 140,
    "isVeg": false,
    "categoryId": "cat-6",
    "category": {
      "id": "cat-6",
      "name": "Noodles",
      "slug": "noodles",
      "icon": "🍜",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-41",
    "name": "Schezwan Chicken Noodles",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 150,
    "isVeg": false,
    "categoryId": "cat-6",
    "category": {
      "id": "cat-6",
      "name": "Noodles",
      "slug": "noodles",
      "icon": "🍜",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-42",
    "name": "Mushroom Noodles",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 140,
    "isVeg": true,
    "categoryId": "cat-6",
    "category": {
      "id": "cat-6",
      "name": "Noodles",
      "slug": "noodles",
      "icon": "🍜",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-43",
    "name": "Panner Noodles",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 150,
    "isVeg": true,
    "categoryId": "cat-6",
    "category": {
      "id": "cat-6",
      "name": "Noodles",
      "slug": "noodles",
      "icon": "🍜",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1555126634-323283e090fa?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-44",
    "name": "Gobi Noodles",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 120,
    "isVeg": true,
    "categoryId": "cat-6",
    "category": {
      "id": "cat-6",
      "name": "Noodles",
      "slug": "noodles",
      "icon": "🍜",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-45",
    "name": "Idly",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 10,
    "isVeg": true,
    "categoryId": "cat-7",
    "category": {
      "id": "cat-7",
      "name": "Idly",
      "slug": "idly",
      "icon": "🥟",
      "itemCount": 1
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-46",
    "name": "Chapathi",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 20,
    "isVeg": true,
    "categoryId": "cat-8",
    "category": {
      "id": "cat-8",
      "name": "Chapathi",
      "slug": "chapathi",
      "icon": "🫓",
      "itemCount": 2
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-47",
    "name": "Egg Chapathi",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 35,
    "isVeg": false,
    "categoryId": "cat-8",
    "category": {
      "id": "cat-8",
      "name": "Chapathi",
      "slug": "chapathi",
      "icon": "🫓",
      "itemCount": 2
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-48",
    "name": "Wheat Rotti",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 30,
    "isVeg": true,
    "categoryId": "cat-9",
    "category": {
      "id": "cat-9",
      "name": "Roti & Naan",
      "slug": "rotti_and_naan",
      "icon": "🥖",
      "itemCount": 10
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-49",
    "name": "Butter Rotti",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 35,
    "isVeg": true,
    "categoryId": "cat-9",
    "category": {
      "id": "cat-9",
      "name": "Roti & Naan",
      "slug": "rotti_and_naan",
      "icon": "🥖",
      "itemCount": 10
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-50",
    "name": "Naan",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 35,
    "isVeg": true,
    "categoryId": "cat-9",
    "category": {
      "id": "cat-9",
      "name": "Roti & Naan",
      "slug": "rotti_and_naan",
      "icon": "🥖",
      "itemCount": 10
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-51",
    "name": "Butter Naan",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 40,
    "isVeg": true,
    "categoryId": "cat-9",
    "category": {
      "id": "cat-9",
      "name": "Roti & Naan",
      "slug": "rotti_and_naan",
      "icon": "🥖",
      "itemCount": 10
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-52",
    "name": "Plain Kulsa",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 40,
    "isVeg": true,
    "categoryId": "cat-9",
    "category": {
      "id": "cat-9",
      "name": "Roti & Naan",
      "slug": "rotti_and_naan",
      "icon": "🥖",
      "itemCount": 10
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-53",
    "name": "Butter Kulsa",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 45,
    "isVeg": true,
    "categoryId": "cat-9",
    "category": {
      "id": "cat-9",
      "name": "Roti & Naan",
      "slug": "rotti_and_naan",
      "icon": "🥖",
      "itemCount": 10
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-54",
    "name": "Alu Parotta",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 60,
    "isVeg": true,
    "categoryId": "cat-9",
    "category": {
      "id": "cat-9",
      "name": "Roti & Naan",
      "slug": "rotti_and_naan",
      "icon": "🥖",
      "itemCount": 10
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-55",
    "name": "Panner Parotta",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 100,
    "isVeg": true,
    "categoryId": "cat-9",
    "category": {
      "id": "cat-9",
      "name": "Roti & Naan",
      "slug": "rotti_and_naan",
      "icon": "🥖",
      "itemCount": 10
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1562967914-608f82629710?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-56",
    "name": "Tandoori Parota",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 50,
    "isVeg": true,
    "categoryId": "cat-9",
    "category": {
      "id": "cat-9",
      "name": "Roti & Naan",
      "slug": "rotti_and_naan",
      "icon": "🥖",
      "itemCount": 10
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-57",
    "name": "Romali Parotta",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 50,
    "isVeg": true,
    "categoryId": "cat-9",
    "category": {
      "id": "cat-9",
      "name": "Roti & Naan",
      "slug": "rotti_and_naan",
      "icon": "🥖",
      "itemCount": 10
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1628294895950-9805252327bc?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-58",
    "name": "Pepper Chicken",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 160,
    "isVeg": false,
    "categoryId": "cat-10",
    "category": {
      "id": "cat-10",
      "name": "Chicken Gravy",
      "slug": "chicken_gravy",
      "icon": "🍲",
      "itemCount": 9
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1604908554025-e477d54e85e0?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-59",
    "name": "Garlic Chicken",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 160,
    "isVeg": false,
    "categoryId": "cat-10",
    "category": {
      "id": "cat-10",
      "name": "Chicken Gravy",
      "slug": "chicken_gravy",
      "icon": "🍲",
      "itemCount": 9
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-60",
    "name": "Chittinadu Chicken",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 160,
    "isVeg": false,
    "categoryId": "cat-10",
    "category": {
      "id": "cat-10",
      "name": "Chicken Gravy",
      "slug": "chicken_gravy",
      "icon": "🍲",
      "itemCount": 9
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-61",
    "name": "Varutha Kari",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 160,
    "isVeg": false,
    "categoryId": "cat-10",
    "category": {
      "id": "cat-10",
      "name": "Chicken Gravy",
      "slug": "chicken_gravy",
      "icon": "🍲",
      "itemCount": 9
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1579684947550-22e945225d9a?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-62",
    "name": "Hyderabad Chicken",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 180,
    "isVeg": false,
    "categoryId": "cat-10",
    "category": {
      "id": "cat-10",
      "name": "Chicken Gravy",
      "slug": "chicken_gravy",
      "icon": "🍲",
      "itemCount": 9
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1615557960916-5f4791effe9d?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-63",
    "name": "Butter Chicken",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 180,
    "isVeg": false,
    "categoryId": "cat-10",
    "category": {
      "id": "cat-10",
      "name": "Chicken Gravy",
      "slug": "chicken_gravy",
      "icon": "🍲",
      "itemCount": 9
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-64",
    "name": "Kadai Chicken",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 160,
    "isVeg": false,
    "categoryId": "cat-10",
    "category": {
      "id": "cat-10",
      "name": "Chicken Gravy",
      "slug": "chicken_gravy",
      "icon": "🍲",
      "itemCount": 9
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-65",
    "name": "Chicken Do Pyaza",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 160,
    "isVeg": false,
    "categoryId": "cat-10",
    "category": {
      "id": "cat-10",
      "name": "Chicken Gravy",
      "slug": "chicken_gravy",
      "icon": "🍲",
      "itemCount": 9
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-66",
    "name": "Egg Kaima Masala",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 160,
    "isVeg": false,
    "categoryId": "cat-10",
    "category": {
      "id": "cat-10",
      "name": "Chicken Gravy",
      "slug": "chicken_gravy",
      "icon": "🍲",
      "itemCount": 9
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-67",
    "name": "Varutha Kari",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 160,
    "isVeg": false,
    "categoryId": "cat-11",
    "category": {
      "id": "cat-11",
      "name": "Chicken Fry (Dry)",
      "slug": "chicken_fry_dry",
      "icon": "🍗",
      "itemCount": 5
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-68",
    "name": "Chicken Chitinadu",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 160,
    "isVeg": false,
    "categoryId": "cat-11",
    "category": {
      "id": "cat-11",
      "name": "Chicken Fry (Dry)",
      "slug": "chicken_fry_dry",
      "icon": "🍗",
      "itemCount": 5
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1534938665420-4193effeacc4?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-69",
    "name": "Pepper Chicken",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 160,
    "isVeg": false,
    "categoryId": "cat-11",
    "category": {
      "id": "cat-11",
      "name": "Chicken Fry (Dry)",
      "slug": "chicken_fry_dry",
      "icon": "🍗",
      "itemCount": 5
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-70",
    "name": "Garlic Chicken",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 160,
    "isVeg": false,
    "categoryId": "cat-11",
    "category": {
      "id": "cat-11",
      "name": "Chicken Fry (Dry)",
      "slug": "chicken_fry_dry",
      "icon": "🍗",
      "itemCount": 5
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-71",
    "name": "Hyderabad Chicken",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 200,
    "isVeg": false,
    "categoryId": "cat-11",
    "category": {
      "id": "cat-11",
      "name": "Chicken Fry (Dry)",
      "slug": "chicken_fry_dry",
      "icon": "🍗",
      "itemCount": 5
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-72",
    "name": "Mutton Podimass",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 230,
    "isVeg": false,
    "categoryId": "cat-12",
    "category": {
      "id": "cat-12",
      "name": "Mutton Fry",
      "slug": "mutton_fry",
      "icon": "🥩",
      "itemCount": 5
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-73",
    "name": "Pepper Mutton",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 220,
    "isVeg": false,
    "categoryId": "cat-12",
    "category": {
      "id": "cat-12",
      "name": "Mutton Fry",
      "slug": "mutton_fry",
      "icon": "🥩",
      "itemCount": 5
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-74",
    "name": "Mutton Chettinadu",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 220,
    "isVeg": false,
    "categoryId": "cat-12",
    "category": {
      "id": "cat-12",
      "name": "Mutton Fry",
      "slug": "mutton_fry",
      "icon": "🥩",
      "itemCount": 5
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-75",
    "name": "Mutton Do Pyaza",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 220,
    "isVeg": false,
    "categoryId": "cat-12",
    "category": {
      "id": "cat-12",
      "name": "Mutton Fry",
      "slug": "mutton_fry",
      "icon": "🥩",
      "itemCount": 5
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-76",
    "name": "Mutton Rogan Josh",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 220,
    "isVeg": false,
    "categoryId": "cat-12",
    "category": {
      "id": "cat-12",
      "name": "Mutton Fry",
      "slug": "mutton_fry",
      "icon": "🥩",
      "itemCount": 5
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-77",
    "name": "Plain Grill",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 200,
    "priceHalf": 200,
    "priceFull": 380,
    "isVeg": false,
    "categoryId": "cat-13",
    "category": {
      "id": "cat-13",
      "name": "Grill Chicken",
      "slug": "grill_chicken",
      "icon": "🔥",
      "itemCount": 4
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-78",
    "name": "Masala Grill",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 220,
    "priceHalf": 220,
    "priceFull": 400,
    "isVeg": false,
    "categoryId": "cat-13",
    "category": {
      "id": "cat-13",
      "name": "Grill Chicken",
      "slug": "grill_chicken",
      "icon": "🔥",
      "itemCount": 4
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-79",
    "name": "Pepper Grill",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 220,
    "priceHalf": 220,
    "priceFull": 400,
    "isVeg": false,
    "categoryId": "cat-13",
    "category": {
      "id": "cat-13",
      "name": "Grill Chicken",
      "slug": "grill_chicken",
      "icon": "🔥",
      "itemCount": 4
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-80",
    "name": "Schezwan Grill",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 240,
    "priceHalf": 240,
    "priceFull": 440,
    "isVeg": false,
    "categoryId": "cat-13",
    "category": {
      "id": "cat-13",
      "name": "Grill Chicken",
      "slug": "grill_chicken",
      "icon": "🔥",
      "itemCount": 4
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-81",
    "name": "Chicken Tandoori",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 200,
    "priceHalf": 200,
    "priceFull": 380,
    "isVeg": false,
    "categoryId": "cat-14",
    "category": {
      "id": "cat-14",
      "name": "Tandoori Chicken",
      "slug": "tandoori_chicken",
      "icon": "🍢",
      "itemCount": 4
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-82",
    "name": "Chicken Tandoori Kabab",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 200,
    "isVeg": false,
    "categoryId": "cat-14",
    "category": {
      "id": "cat-14",
      "name": "Tandoori Chicken",
      "slug": "tandoori_chicken",
      "icon": "🍢",
      "itemCount": 4
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-83",
    "name": "Chicken Achari Kabab",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 200,
    "isVeg": false,
    "categoryId": "cat-14",
    "category": {
      "id": "cat-14",
      "name": "Tandoori Chicken",
      "slug": "tandoori_chicken",
      "icon": "🍢",
      "itemCount": 4
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-84",
    "name": "Chicken Hariyali Kabab",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 200,
    "isVeg": false,
    "categoryId": "cat-14",
    "category": {
      "id": "cat-14",
      "name": "Tandoori Chicken",
      "slug": "tandoori_chicken",
      "icon": "🍢",
      "itemCount": 4
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-85",
    "name": "Chicken Roll",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 100,
    "isVeg": false,
    "categoryId": "cat-15",
    "category": {
      "id": "cat-15",
      "name": "Rolls & Frankies",
      "slug": "roll",
      "icon": "🌯",
      "itemCount": 2
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-86",
    "name": "Spicy Chicken Roll",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 120,
    "isVeg": false,
    "categoryId": "cat-15",
    "category": {
      "id": "cat-15",
      "name": "Rolls & Frankies",
      "slug": "roll",
      "icon": "🌯",
      "itemCount": 2
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-87",
    "name": "Mushroom Chilly",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 100,
    "isVeg": false,
    "categoryId": "cat-16",
    "category": {
      "id": "cat-16",
      "name": "Veg Starters",
      "slug": "starter_veg",
      "icon": "🥗",
      "itemCount": 6
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-88",
    "name": "Gobi 65",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 100,
    "isVeg": false,
    "categoryId": "cat-16",
    "category": {
      "id": "cat-16",
      "name": "Veg Starters",
      "slug": "starter_veg",
      "icon": "🥗",
      "itemCount": 6
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-89",
    "name": "Panner 65",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 150,
    "isVeg": false,
    "categoryId": "cat-16",
    "category": {
      "id": "cat-16",
      "name": "Veg Starters",
      "slug": "starter_veg",
      "icon": "🥗",
      "itemCount": 6
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1556881286-fc6915169721?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-90",
    "name": "Panner Manjuriyan",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 180,
    "isVeg": false,
    "categoryId": "cat-16",
    "category": {
      "id": "cat-16",
      "name": "Veg Starters",
      "slug": "starter_veg",
      "icon": "🥗",
      "itemCount": 6
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-91",
    "name": "Gobi Manjuriyan",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 150,
    "isVeg": false,
    "categoryId": "cat-16",
    "category": {
      "id": "cat-16",
      "name": "Veg Starters",
      "slug": "starter_veg",
      "icon": "🥗",
      "itemCount": 6
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-92",
    "name": "Mushroom Manjuriyan",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 160,
    "isVeg": false,
    "categoryId": "cat-16",
    "category": {
      "id": "cat-16",
      "name": "Veg Starters",
      "slug": "starter_veg",
      "icon": "🥗",
      "itemCount": 6
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-93",
    "name": "Chilly Chicken",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 100,
    "isVeg": false,
    "categoryId": "cat-17",
    "category": {
      "id": "cat-17",
      "name": "Non-Veg Starters",
      "slug": "starter_non_veg",
      "icon": "🍤",
      "itemCount": 4
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-94",
    "name": "Chicken 65",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 150,
    "isVeg": false,
    "categoryId": "cat-17",
    "category": {
      "id": "cat-17",
      "name": "Non-Veg Starters",
      "slug": "starter_non_veg",
      "icon": "🍤",
      "itemCount": 4
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-95",
    "name": "Kadai Roast",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 120,
    "isVeg": false,
    "categoryId": "cat-17",
    "category": {
      "id": "cat-17",
      "name": "Non-Veg Starters",
      "slug": "starter_non_veg",
      "icon": "🍤",
      "itemCount": 4
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-96",
    "name": "Fish Fry",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 60,
    "isVeg": false,
    "categoryId": "cat-17",
    "category": {
      "id": "cat-17",
      "name": "Non-Veg Starters",
      "slug": "starter_non_veg",
      "icon": "🍤",
      "itemCount": 4
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-97",
    "name": "Chicken Manjurian",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 160,
    "isVeg": false,
    "categoryId": "cat-18",
    "category": {
      "id": "cat-18",
      "name": "Chinese Chicken",
      "slug": "chineese_chicken",
      "icon": "🥡",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-98",
    "name": "Salt & Pepper Chicken",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 160,
    "isVeg": false,
    "categoryId": "cat-18",
    "category": {
      "id": "cat-18",
      "name": "Chinese Chicken",
      "slug": "chineese_chicken",
      "icon": "🥡",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-99",
    "name": "Hot & Garlic Chicken",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 160,
    "isVeg": false,
    "categoryId": "cat-18",
    "category": {
      "id": "cat-18",
      "name": "Chinese Chicken",
      "slug": "chineese_chicken",
      "icon": "🥡",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-100",
    "name": "Schezwan Chicken",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 160,
    "isVeg": false,
    "categoryId": "cat-18",
    "category": {
      "id": "cat-18",
      "name": "Chinese Chicken",
      "slug": "chineese_chicken",
      "icon": "🥡",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-101",
    "name": "Chicken Maharaja",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 200,
    "isVeg": false,
    "categoryId": "cat-18",
    "category": {
      "id": "cat-18",
      "name": "Chinese Chicken",
      "slug": "chineese_chicken",
      "icon": "🥡",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1576402187878-974f70c890a5?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-102",
    "name": "Chicken Maharani",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 200,
    "isVeg": false,
    "categoryId": "cat-18",
    "category": {
      "id": "cat-18",
      "name": "Chinese Chicken",
      "slug": "chineese_chicken",
      "icon": "🥡",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-103",
    "name": "Dragon Chicken",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 200,
    "isVeg": false,
    "categoryId": "cat-18",
    "category": {
      "id": "cat-18",
      "name": "Chinese Chicken",
      "slug": "chineese_chicken",
      "icon": "🥡",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-104",
    "name": "Pepper Parotta",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 100,
    "isVeg": true,
    "categoryId": "cat-19",
    "category": {
      "id": "cat-19",
      "name": "Special Dishes",
      "slug": "special_items",
      "icon": "⭐",
      "itemCount": 6
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-105",
    "name": "Elai Parotta",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 180,
    "isVeg": true,
    "categoryId": "cat-19",
    "category": {
      "id": "cat-19",
      "name": "Special Dishes",
      "slug": "special_items",
      "icon": "⭐",
      "itemCount": 6
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-106",
    "name": "2X Spicy Schezwan Noodles",
    "description": "Fresh vegetarian preparation with traditional spices",
    "price": 200,
    "isVeg": true,
    "categoryId": "cat-19",
    "category": {
      "id": "cat-19",
      "name": "Special Dishes",
      "slug": "special_items",
      "icon": "⭐",
      "itemCount": 6
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-107",
    "name": "Lemon Chicken",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 200,
    "isVeg": false,
    "categoryId": "cat-19",
    "category": {
      "id": "cat-19",
      "name": "Special Dishes",
      "slug": "special_items",
      "icon": "⭐",
      "itemCount": 6
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1547496502-affa22d38842?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-108",
    "name": "Kuntur Spicy Chicken",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 200,
    "isVeg": false,
    "categoryId": "cat-19",
    "category": {
      "id": "cat-19",
      "name": "Special Dishes",
      "slug": "special_items",
      "icon": "⭐",
      "itemCount": 6
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-109",
    "name": "Coconut-Garlic Chicken",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 200,
    "isVeg": false,
    "categoryId": "cat-19",
    "category": {
      "id": "cat-19",
      "name": "Special Dishes",
      "slug": "special_items",
      "icon": "⭐",
      "itemCount": 6
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-110",
    "name": "Pichu Potta Nattukozhi",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 200,
    "isVeg": false,
    "categoryId": "cat-20",
    "category": {
      "id": "cat-20",
      "name": "Nattu Kozhi",
      "slug": "nattu_kozhi",
      "icon": "🐔",
      "itemCount": 2
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-111",
    "name": "Nattukozhi Chops",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 220,
    "isVeg": false,
    "categoryId": "cat-20",
    "category": {
      "id": "cat-20",
      "name": "Nattu Kozhi",
      "slug": "nattu_kozhi",
      "icon": "🐔",
      "itemCount": 2
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-112",
    "name": "Kaadai Roast",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 120,
    "isVeg": false,
    "categoryId": "cat-21",
    "category": {
      "id": "cat-21",
      "name": "Kaadai (Quail)",
      "slug": "kaadai",
      "icon": "🐦",
      "itemCount": 2
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-113",
    "name": "Kaadai Gravy",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 160,
    "isVeg": false,
    "categoryId": "cat-21",
    "category": {
      "id": "cat-21",
      "name": "Kaadai (Quail)",
      "slug": "kaadai",
      "icon": "🐦",
      "itemCount": 2
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-114",
    "name": "Veg Soup",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 60,
    "isVeg": false,
    "categoryId": "cat-22",
    "category": {
      "id": "cat-22",
      "name": "Veg Soups",
      "slug": "veg_soup",
      "icon": "🥣",
      "itemCount": 2
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-115",
    "name": "Mushroom Soup",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 60,
    "isVeg": false,
    "categoryId": "cat-22",
    "category": {
      "id": "cat-22",
      "name": "Veg Soups",
      "slug": "veg_soup",
      "icon": "🥣",
      "itemCount": 2
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-116",
    "name": "Chicken Soup",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 80,
    "isVeg": false,
    "categoryId": "cat-23",
    "category": {
      "id": "cat-23",
      "name": "Non-Veg Soups",
      "slug": "non_veg_soup",
      "icon": "🍲",
      "itemCount": 3
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-117",
    "name": "Hot & Sour Chicken Soup",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 80,
    "isVeg": false,
    "categoryId": "cat-23",
    "category": {
      "id": "cat-23",
      "name": "Non-Veg Soups",
      "slug": "non_veg_soup",
      "icon": "🍲",
      "itemCount": 3
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-118",
    "name": "Mutton Soup",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 100,
    "isVeg": false,
    "categoryId": "cat-23",
    "category": {
      "id": "cat-23",
      "name": "Non-Veg Soups",
      "slug": "non_veg_soup",
      "icon": "🍲",
      "itemCount": 3
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-119",
    "name": "Badam",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 60,
    "isVeg": false,
    "categoryId": "cat-24",
    "category": {
      "id": "cat-24",
      "name": "Milkshakes & Beverages",
      "slug": "milk_shake",
      "icon": "🥤",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-120",
    "name": "Rose Milk Shake",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 50,
    "isVeg": false,
    "categoryId": "cat-24",
    "category": {
      "id": "cat-24",
      "name": "Milkshakes & Beverages",
      "slug": "milk_shake",
      "icon": "🥤",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-121",
    "name": "Date Milk",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 60,
    "isVeg": false,
    "categoryId": "cat-24",
    "category": {
      "id": "cat-24",
      "name": "Milkshakes & Beverages",
      "slug": "milk_shake",
      "icon": "🥤",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-122",
    "name": "Gulkand Milk",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 60,
    "isVeg": false,
    "categoryId": "cat-24",
    "category": {
      "id": "cat-24",
      "name": "Milkshakes & Beverages",
      "slug": "milk_shake",
      "icon": "🥤",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-123",
    "name": "Lemon Mint",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 50,
    "isVeg": false,
    "categoryId": "cat-24",
    "category": {
      "id": "cat-24",
      "name": "Milkshakes & Beverages",
      "slug": "milk_shake",
      "icon": "🥤",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1544681280-d25a782adc9b?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-124",
    "name": "Lemon Juice",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 30,
    "isVeg": false,
    "categoryId": "cat-24",
    "category": {
      "id": "cat-24",
      "name": "Milkshakes & Beverages",
      "slug": "milk_shake",
      "icon": "🥤",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-125",
    "name": "Lemon Soda",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 40,
    "isVeg": false,
    "categoryId": "cat-24",
    "category": {
      "id": "cat-24",
      "name": "Milkshakes & Beverages",
      "slug": "milk_shake",
      "icon": "🥤",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-126",
    "name": "Veg Masala",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 180,
    "isVeg": false,
    "categoryId": "cat-25",
    "category": {
      "id": "cat-25",
      "name": "Veg Masala & Gravy",
      "slug": "veg_masala",
      "icon": "🥘",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-127",
    "name": "Mushroom Masala",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 180,
    "isVeg": false,
    "categoryId": "cat-25",
    "category": {
      "id": "cat-25",
      "name": "Veg Masala & Gravy",
      "slug": "veg_masala",
      "icon": "🥘",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-128",
    "name": "Panner Butter Masala",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 170,
    "isVeg": false,
    "categoryId": "cat-25",
    "category": {
      "id": "cat-25",
      "name": "Veg Masala & Gravy",
      "slug": "veg_masala",
      "icon": "🥘",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1543353071-873f17a7a088?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-129",
    "name": "Kadai Pannr",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 150,
    "isVeg": false,
    "categoryId": "cat-25",
    "category": {
      "id": "cat-25",
      "name": "Veg Masala & Gravy",
      "slug": "veg_masala",
      "icon": "🥘",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-130",
    "name": "Cauliflower Masala",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 150,
    "isVeg": false,
    "categoryId": "cat-25",
    "category": {
      "id": "cat-25",
      "name": "Veg Masala & Gravy",
      "slug": "veg_masala",
      "icon": "🥘",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1546554137-f86b9593a222?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-131",
    "name": "Dal Fry",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 120,
    "isVeg": false,
    "categoryId": "cat-25",
    "category": {
      "id": "cat-25",
      "name": "Veg Masala & Gravy",
      "slug": "veg_masala",
      "icon": "🥘",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  },
  {
    "id": "item-132",
    "name": "Alu Mutter Masala",
    "description": "Authentic non-veg delicacy with rich aromatic spices",
    "price": 150,
    "isVeg": false,
    "categoryId": "cat-25",
    "category": {
      "id": "cat-25",
      "name": "Veg Masala & Gravy",
      "slug": "veg_masala",
      "icon": "🥘",
      "itemCount": 7
    },
    "available": true,
    "imageUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=80",
    "createdAt": "2026-09-22T00:00:00.000Z"
  }
];
