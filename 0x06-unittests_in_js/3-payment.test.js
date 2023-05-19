const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  const sandbox = sinon.createSandbox();

  beforeEach(() => {
    sandbox.spy(Utils);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should call calculateNumber function in Utils module', () => {
    sendPaymentRequestToApi(100, 20);

    expect(Utils.calculateNumber.calledOnce).to.be.true;
    expect(Utils.calculateNumber.getCall(0).args[0]).to.equal('SUM');
    expect(Utils.calculateNumber.getCall(0).args[1]).to.equal(100);
    expect(Utils.calculateNumber.getCall(0).args[2]).to.equal(20);
  });
});
