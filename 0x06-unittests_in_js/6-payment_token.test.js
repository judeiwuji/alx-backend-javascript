const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');
describe('getPaymentTokenFromAPI', () => {
  it('should call with true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({
          data: 'Successful response from the API'
        });
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('should call with nothing', (done) => {
    getPaymentTokenFromAPI()
      .then((response) => {
        expect(response).to.be.undefined;
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
