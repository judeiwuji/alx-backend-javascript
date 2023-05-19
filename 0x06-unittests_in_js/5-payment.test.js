const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let utilSpy;
  before(() => {
    sinon.stub(console, 'log');
  });

  beforeEach(() => {
    utilSpy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    utilSpy.restore();
  });

  it('should call with 100, and 20', () => {
    sendPaymentRequestToApi(100, 20);

    assert.equal(console.log.calledWith('The total is: 120'), true);
    assert.equal(Utils.calculateNumber.calledOnce, true);
  });

  it('should call with 10, and 10', () => {
    sendPaymentRequestToApi(10, 10);

    assert.equal(console.log.calledWith('The total is: 20'), true);
    assert.equal(Utils.calculateNumber.calledOnce, true);
  });
});
