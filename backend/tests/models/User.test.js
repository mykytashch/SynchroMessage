// tests/models/User.test.js

const chai = require('chai');
const sinon = require('sinon');
const User = require('../../src/models/User');
const { expect } = chai;

describe('User Model', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should create a new user', async () => {
    const user = new User({ username: 'test', password: 'password' });
    const saveStub = sinon.stub(user, 'save').resolves();

    await user.save();

    expect(saveStub.calledOnce).to.be.true;
  });
});

