const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  before(() => {
    sinon.stub(console, 'log');
  });

  beforeEach(() => {
    calculateNumberStub = sinon
      .stub(Utils, 'calculateNumber')
      .callsFake(() => 10);
  });

  afterEach(() => {
    calculateNumberStub.restore();
  });

  it("should be called with 'SUM', 100, 20", () => {
    sendPaymentRequestToApi(100, 20);

    assert.equal(Utils.calculateNumber.calledWith('SUM', 100, 20), true);
  });

  it("should display 'The total is: 10'", () => {
    sendPaymentRequestToApi(100, 20);

    assert.equal(console.log.calledWith('The total is: 10'), true);
  });

  describe('Util.calculateNumber', () => {
    it('should return 10', () => {
      assert.equal(Utils.calculateNumber('SUM', 100, 20), 10);
    });
  });
});
