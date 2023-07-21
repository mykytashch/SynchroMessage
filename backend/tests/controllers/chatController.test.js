// tests/controllers/chatController.test.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../../src/app');
const chatService = require('../../src/services/chatService');
const { expect } = chai;

chai.use(chaiHttp);

describe('Chat Controller', () => {
  afterEach(() => {
    sinon.restore();
  });

  describe('sendMessage', () => {
    it('should create a message and return status 201', async () => {
      const message = { user: '123', text: 'Test message' };
      const createMessageStub = sinon.stub(chatService, 'createMessage').resolves(message);

      const res = await chai
        .request(app)
        .post('/chat/message')
        .send({ user: '123', text: 'Test message' });

      expect(res).to.have.status(201);
      expect(res.body).to.eql(message);  // Added assertion for response body
      expect(createMessageStub.calledOnce).to.be.true;
    });
  });

  describe('editMessage', () => {
    it('should update a message and return the updated message', async () => {
      const message = { _id: '123', text: 'Test message updated' };
      const updateMessageStub = sinon.stub(chatService, 'updateMessage').resolves(message);

      const res = await chai
        .request(app)
        .put('/chat/message/123')
        .send({ text: 'Test message updated' });

      expect(res.body).to.eql(message);
      expect(updateMessageStub.calledOnce).to.be.true;
    });
  });
});