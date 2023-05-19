const request = require('request');
const expect = require('chai').expect;

describe('Index Page', () => {
  it('should get the index page without /', (done) => {
    request.get(`http://localhost:7865`, (err, data) => {
      if (err) {
        return done(err);
      }
      expect(data.statusCode).to.equal(200);
      expect(data.body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should get the index page with /', (done) => {
    request.get(`http://localhost:7865`, (err, data) => {
      if (err) {
        return done(err);
      }
      expect(data.statusCode).to.equal(200);
      expect(data.body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should get the index page with qith query string', (done) => {
    request.get(`http://localhost:7865?state=0`, (err, data) => {
      if (err) {
        return done(err);
      }
      expect(data.statusCode).to.equal(200);
      done();
    });
  });
});

describe('Cart Page', () => {
  it('should get cart with id=12', (done) => {
    request.get(`http://localhost:7865/cart/12`, (err, data) => {
      if (err) {
        return done(err);
      }
      expect(data.statusCode).to.equal(200);
      expect(data.body).to.equal(`Payment methods for cart ${12}`);
      done();
    });
  });

  it('should fail to get cart with id=nope', (done) => {
    request.get(`http://localhost:7865/cart/nope`, (err, data) => {
      if (err) {
        return done(err);
      }
      expect(data.statusCode).to.equal(404);
      done();
    });
  });
});
