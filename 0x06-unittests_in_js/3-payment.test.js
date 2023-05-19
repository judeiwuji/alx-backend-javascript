const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let utilSpy;

  before(() => {
    sinon.stub(console, 'log');
  });

  beforeEach(() => {
    utilSpy = sinon.spy(Utils, 'calculateNumber');
  });

  it('should call calculateNumber function in Utils module', () => {
    sendPaymentRequestToApi(100, 20);

    assert.equal(Utils.calculateNumber.calledOnce, true);
    assert.equal(Utils.calculateNumber.calledWith('SUM', 100, 20), true);
    utilSpy.restore();
  });

  it("should display 'The total is: 120'", () => {
    sendPaymentRequestToApi(100, 20);

    assert(console.log.calledWith('The total is: 120'), true);
    utilSpy.restore();
  });
});
