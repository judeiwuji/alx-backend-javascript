const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
  describe('Integers', () => {
    it('should return 3 for 1, 2', () => {
      assert.equal(calculateNumber(1, 2), 3);
    });

    it('should return -3 for -1, -2', () => {
      assert.equal(calculateNumber(-1, -2), -3);
    });

    it('should return 0 for 0, 0', () => {
      assert.equal(calculateNumber(0, 0), 0);
    });
  });

  describe('Floats', () => {
    it('should return 3 for 1.0, 2.0', () => {
      assert.equal(calculateNumber(1.0, 2.0), 3);
    });

    it('should return 6 for 2.5, 2.5', () => {
      assert.equal(calculateNumber(2.5, 2.5), 6);
    });

    it('should return 5 for 2.5, 2.3', () => {
      assert.equal(calculateNumber(2.5, 2.3), 5);
    });

    it('should return -4 for -2.5, -2.3', () => {
      assert.equal(calculateNumber(-2.5, -2.3), -4);
    });
  });
});
