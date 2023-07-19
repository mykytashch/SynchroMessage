const request = require('supertest');
const app = require('../server');
const User = require('../models/User');

describe('Аутентификация', () => {
  it('Должна зарегистрировать нового пользователя', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({ username: 'testuser', password: 'testpassword' });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('token');
}, 10000); 

it('Должна входить существующего пользователя', async () => {
  await User.create({ username: 'testuser', password: 'testpassword' });

  const response = await request(app)
    .post('/api/auth/login')
    .send({ username: 'testuser', password: 'testpassword' });

  expect(response.statusCode).toBe(200);
  expect(response.body).toHaveProperty('token');
}, 10000); // Увеличенный таймаут 10000 миллисекунд (10 секунд)
});