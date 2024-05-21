import request from 'supertest';
import app from '../../src/app';

describe('PRODUCT API', () => {
  describe('Route', () => {
    it('should accept valid route', async () => {
      const response = await request(app).get('/');

      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Service up and running..');
    });

    it('should handle invalid route by name', async () => {
      const response = await request(app).get('/fjjggkdkdk');

      expect(response.status).toBe(404);
    });
  });
  describe('Get Items', () => {
    it('should list of items', async () => {
      const response = await request(app).get('/items');

      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Products fetched successfully');
    });
  });
  describe('Create Item', () => {
    it('should add a valid items', async () => {
      const newItem = { name: 'apple', price: 35 };
      const response = await request(app).post('/items').send(newItem);

      expect(response.status).toBe(201);
      expect(response.body.message).toBe('Product added successfully.');
    });
    it('should handle invalid item', async () => {
      const newItem = { name: 'bad item', price: '35zz' };
      const response = await request(app).post('/items').send(newItem);

      expect(response.status).toBe(422);
    });
  });
});
