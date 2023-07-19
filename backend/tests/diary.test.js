const request = require('supertest');
const app = require('../server');
const User = require('../models/User');
const Entry = require('../models/Entry');


describe('Записи дневника', () => {
  let token;
  let userId;

  beforeAll(async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({ username: 'testuser', password: 'testpassword' });
    token = response.body.token;
    userId = response.body.user._id;
  }, 10000); 

  afterAll(async () => {
    await User.deleteMany({});
    await Entry.deleteMany({});
  }, 10000); 

  it('Должна создать новую запись', async () => {
    const response = await request(app)
      .post('/api/diary')
      .set('Authorization', `Bearer ${token}`)
      .send({ title: 'Заголовок', content: 'Текст записи' });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('title', 'Заголовок');
    expect(response.body).toHaveProperty('content', 'Текст записи');
    expect(response.body).toHaveProperty('user', userId);
  }, 10000); 

  it('Должна получить список всех записей', async () => {
    const response = await request(app)
      .get('/api/diary')
      .set('Authorization', `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toHaveProperty('title', 'Заголовок');
    expect(response.body[0]).toHaveProperty('content', 'Текст записи');
    expect(response.body[0]).toHaveProperty('user', userId);
  }, 10000); 

  it('Должна получить информацию о конкретной записи', async () => {
    const entries = await Entry.find({ user: userId });
    const response = await request(app)
      .get(`/api/diary/${entries[0]._id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('title', 'Заголовок');
    expect(response.body).toHaveProperty('content', 'Текст записи');
    expect(response.body).toHaveProperty('user', userId);
  }, 10000); 

  it('Должна обновить информацию о записи', async () => {
    const entries = await Entry.find({ user: userId });
    const response = await request(app)
      .put(`/api/diary/${entries[0]._id}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ title: 'Новый заголовок', content: 'Новый текст записи' });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('title', 'Новый заголовок');
    expect(response.body).toHaveProperty('content', 'Новый текст записи');
    expect(response.body).toHaveProperty('user', userId);
  }, 10000); 

  it('Должна удалить запись', async () => {
    const entries = await Entry.find({ user: userId });
    const response = await request(app)
      .delete(`/api/diary/${entries[0]._id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message', 'Запись успешно удалена');
  }, 10000); 
});
