// tests/services/chatService.test.js

const chai = require('chai');
const sinon = require('sinon');
const chatService = require('../../src/services/chatService');
const Message = require('../../src/models/Message');
const { expect } = chai;

describe('Chat Service', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('createMessage', () => {
    it('should create a new message', async () => {
      const messageData = { user: '123', text: 'Test message' };
      const saveStub = sinon.stub(Message.prototype, 'save').resolves();

      await chatService.createMessage(messageData);

      expect(saveStub.calledOnce).to.be.true;
    });
  });

  describe('updateMessage', () => {
    it('should update a message', async () => {
      const messageData = { text: 'Test message updated' };
      const findByIdAndUpdateStub = sinon.stub(Message, 'findByIdAndUpdate').resolves();

      await chatService.updateMessage('123', messageData);

      expect(findByIdAndUpdateStub.calledOnce).to.be.true;
    });
  });

  describe('getMessages', () => {
    it('should get messages', async () => {
      const messages = [{ _id: '123', text: 'Test message' }];
      const findStub = sinon.stub(Message, 'find').resolves(messages);

      const result = await chatService.getMessages('123');

      expect(result).to.eql(messages);
      expect(findStub.calledOnce).to.be.true;
    });
  });
});