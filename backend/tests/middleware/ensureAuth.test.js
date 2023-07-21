// tests/middleware/ensureAuth.test.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../../src/app');
const ensureAuth = require('../../src/middleware/ensureAuth');  // Added missing import
const { expect } = chai;

chai.use(chaiHttp);

describe('ensureAuth Middleware', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('should call next if authenticated', async () => {
    const req = { isAuthenticated: () => true };
    const res = {};
    const next = sinon.spy();

    ensureAuth(req, res, next);

    expect(next.calledOnce).to.be.true;
  });

  it('should redirect if not authenticated', async () => {
    const req = { isAuthenticated: () => false };
    const res = { redirect: sinon.spy() };
    const next = sinon.spy();

    ensureAuth(req, res, next);

    expect(res.redirect.calledOnce).to.be.true;
    expect(next.called).to.be.false;
  });
});