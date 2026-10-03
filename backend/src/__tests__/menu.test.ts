import request from 'supertest';
import app from '../../server';

describe('Menu API', () => {
  it('GET /api/menu — should return all items', async () => {
    const res = await request(app).get('/api/menu');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it('GET /api/menu?veg=true — should return only veg items', async () => {
    const res = await request(app).get('/api/menu?veg=true');
    expect(res.status).toBe(200);
    expect(res.body.data.every((i: { isVeg: boolean }) => i.isVeg)).toBe(true);
  });

  it('GET /api/menu/categories — should return categories', async () => {
    const res = await request(app).get('/api/menu/categories');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  it('GET /api/menu/:id — should return 404 for unknown id', async () => {
    const res = await request(app).get('/api/menu/non-existent-uuid');
    expect(res.status).toBe(404);
  });

  it('POST /api/menu — should reject unauthenticated requests', async () => {
    const res = await request(app).post('/api/menu').send({ name: 'Test', price: 100 });
    expect(res.status).toBe(401);
  });
});
