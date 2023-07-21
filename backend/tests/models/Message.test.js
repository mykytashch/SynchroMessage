// tests/models/Message.test.js

const chai = require('chai');
const sinon = require('sinon');
const Message = require('../../src/models/Message');
const { expect } = chai;

describe('Message Model', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should create a new message', async () => {
    const message = new Message({ user: '123', text: 'Test message' });
    const saveStub = sinon.stub(message, 'save').resolves();

    await message.save();

    expect(saveStub.calledOnce).to.be.true;
  });
});