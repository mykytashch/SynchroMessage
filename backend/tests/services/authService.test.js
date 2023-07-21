// tests/services/authService.test.js

const chai = require('chai');
const sinon = require('sinon');
const authService = require('../../src/services/authService');
const User = require('../../src/models/User');
const bcrypt = require('bcryptjs');
const { expect } = chai;

describe('Auth Service', () => {  // Здесь начинается блок describe. Открывающие скобки: { и (
  afterEach(() => {  // Здесь начинается afterEach. Открывающие скобки: { и (
    sinon.restore();  // Это тело функции afterEach
  });  // Закрывающие скобки afterEach: } и )

  describe('createUser', () => {  // Начинается блок describe для 'createUser'. Открывающие скобки: { и (
    it('should create a new user', async () => {  // Начинается блок it. Открывающие скобки: { и (
      const userData = { username: 'testCreateUser', password: 'password' };
      await authService.createUser(userData);
      const user = await User.findOne({ username: 'testCreateUser' });
      expect(user).to.exist;
    });  // Закрывающие скобки для it: } и )
  });  // Закрывающие скобки для describe 'createUser': } и )

  describe('authenticateUser', () => {  // Начинается блок describe для 'authenticateUser'. Открывающие скобки: { и (
    it('should authenticate a user', async () => {  // Начинается блок it. Открывающие скобки: { и (
      const userData = { username: 'testAuthenticateUser', password: 'password' };
      await authService.createUser(userData);
      const user = await User.findOne({ username: 'testAuthenticateUser' });
      console.log(user);
      const authenticated = await authService.authenticateUser('testAuthenticateUser', 'password');
      expect(authenticated).to.be.true;
    });  // Закрывающие скобки для it: } и )
  });  // Закрывающие скобки для describe 'authenticateUser': } и )
});  // Закрывающие скобки для describe 'Auth Service': } и )
