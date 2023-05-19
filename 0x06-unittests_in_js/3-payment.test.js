const sinon = require('sinon');
const expect = require('chai').expect;
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

    expect(Utils.calculateNumber.calledOnce).to.be.true;
    expect(Utils.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
  });

  it("should display 'The total is: 120'", () => {
    sendPaymentRequestToApi(100, 20);

    expect(console.log.calledWith('The total is: 120')).to.be.true;
  });
});
