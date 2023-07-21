// tests/controllers/authController.test.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../../src/app');
const authService = require('../../src/services/authService');
const User = require('../../src/models/User');
const passport = require('passport');  // Added missing import
const { expect } = chai;

chai.use(chaiHttp);

describe('Auth Controller', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('register', () => {
    it('should register a new user and redirect to login', async () => {
      const res = await chai
        .request(app)
        .post('/auth/register')
        .redirects(0)
        .send({ username: 'testRegister', password: 'password' });

      expect(res).to.redirectTo('/login');
      // Проверить, что пользователь действительно был создан
      const user = await User.findOne({ username: 'testRegister' });
      expect(user).to.exist;
    });
  });


  describe('login', () => {
    it('should log in an existing user and redirect to chat', async () => {
      // Создать пользователя вручную перед тестом
      const user = new User({ username: 'testLogin', password: 'password' });
      await user.save();

      const res = await chai
        .request(app)
        .post('/auth/login')
        .redirects(0)
        .send({ username: 'testLogin', password: 'password' });

      expect(res).to.redirectTo('/chat');
    });
  });



  describe('logout', () => {
    it('should log out an existing user and redirect to login', async () => {
      const res = await chai
        .request(app)
        .get('/auth/logout');

      expect(res).to.redirectTo('/login');
    });
  });
});
