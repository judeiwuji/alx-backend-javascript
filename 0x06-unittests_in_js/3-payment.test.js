const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  const sandbox = sinon.createSandbox();

  before(() => {
    sinon.stub(console, 'log');
  });

  beforeEach(() => {
    sandbox.spy(Utils);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should call calculateNumber function in Utils module', () => {
    sendPaymentRequestToApi(100, 20);

    assert.equal(Utils.calculateNumber.calledOnce, true);
    assert.equal(Utils.calculateNumber.calledWith('SUM', 100, 20), true);
  });

  it("should display 'The total is: 120'", () => {
    sendPaymentRequestToApi(100, 20);

    assert(console.log.calledWith('The total is: 120'), true);
  });
});
