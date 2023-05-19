const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
  describe('SUM', () => {
    describe('Integer', () => {
      it('should return 3 for 1, 2', () => {
        assert.equal(calculateNumber('SUM', 1, 2), 3);
      });

      it('should return -3 for -1, -2', () => {
        assert.equal(calculateNumber('SUM', -1, -2), -3);
      });

      it('should return 0 for 0, 0', () => {
        assert.equal(calculateNumber('SUM', 0, 0), 0);
      });
    });

    describe('Float', () => {
      it('should return 3 for 1.0, 2.0', () => {
        assert.equal(calculateNumber('SUM', 1.0, 2.0), 3);
      });

      it('should return 6 for 2.5, 2.5', () => {
        assert.equal(calculateNumber('SUM', 2.5, 2.5), 6);
      });

      it('should return 5 for 2.5, 2.3', () => {
        assert.equal(calculateNumber('SUM', 2.5, 2.3), 5);
      });

      it('should return -4 for -2.5, -2.3', () => {
        assert.equal(calculateNumber('SUM', -2.5, -2.3), -4);
      });
    });

    describe('Integer and Float', () => {
      it('should return 5 for 1.7, 3', () => {
        assert.equal(calculateNumber('SUM', 1.7, 3), 5);
      });

      it('should return 1 for -1.7, 3', () => {
        assert.equal(calculateNumber('SUM', -1.7, 3), 1);
      });

      it('should return -5 for -1.7, -3', () => {
        assert.equal(calculateNumber('SUM', -1.7, -3), -5);
      });
    });
  });
  describe('SUBTRACT', () => {
    describe('Integer', () => {
      it('should return 1 for 2, 1', () => {
        assert.equal(calculateNumber('SUBTRACT', 2, 1), 1);
      });

      it('should return 1 for -1, -2', () => {
        assert.equal(calculateNumber('SUBTRACT', -1, -2), 1);
      });

      it('should return 0 for 0, 0', () => {
        assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
      });
    });

    describe('Float', () => {
      it('should return -1 for 1.0, 2.0', () => {
        assert.equal(calculateNumber('SUBTRACT', 1.0, 2.0), -1);
      });

      it('should return 0 for 2.5, 2.5', () => {
        assert.equal(calculateNumber('SUBTRACT', 2.5, 2.5), 0);
      });

      it('should return 1 for 2.5, 2.3', () => {
        assert.equal(calculateNumber('SUBTRACT', 2.5, 2.3), 1);
      });

      it('should return 0 for -2.5, -2.3', () => {
        assert.equal(calculateNumber('SUBTRACT', -2.5, -2.3), 0);
      });
    });

    describe('Integer and Float', () => {
      it('should return -1 for 1.7, 3', () => {
        assert.equal(calculateNumber('SUBTRACT', 1.7, 3), -1);
      });

      it('should return -5 for -1.7, 3', () => {
        assert.equal(calculateNumber('SUBTRACT', -1.7, 3), -5);
      });

      it('should return 1 for -1.7, -3', () => {
        assert.equal(calculateNumber('SUBTRACT', -1.7, -3), 1);
      });
    });
  });
  describe('DIVIDE', () => {
    describe('Integer', () => {
      it('should return 0.5 for 1, 2', () => {
        assert.equal(calculateNumber('DIVIDE', 1, 2), 0.5);
      });

      it('should return 0.5 for -1, -2', () => {
        assert.equal(calculateNumber('DIVIDE', -1, -2), 0.5);
      });

      it('should return Error for 0, 0', () => {
        assert.equal(calculateNumber('DIVIDE', 0, 0), 'Error');
      });
    });

    describe('Float', () => {
      it('should return 0.5 for 1.0, 2.0', () => {
        assert.equal(calculateNumber('DIVIDE', 1.0, 2.0), 0.5);
      });

      it('should return 1 for 2.5, 2.5', () => {
        assert.equal(calculateNumber('DIVIDE', 2.5, 2.5), 1);
      });

      it('should return 1 for 2.5, 2.3', () => {
        assert.equal(calculateNumber('DIVIDE', 2.5, 2.3), 1.5);
      });

      it('should return 1 for -2.5, -2.3', () => {
        assert.equal(calculateNumber('DIVIDE', -2.5, -2.3), 1);
      });
    });

    describe('Integer and Float', () => {
      it('should return 0.67 for 1.7, 3', () => {
        assert.equal(
          parseFloat(calculateNumber('DIVIDE', 1.7, 3).toPrecision(2)),
          0.67,
        );
      });

      it('should return -0.6 for -1.7, 3', () => {
        assert.equal(
          parseFloat(calculateNumber('DIVIDE', -1.7, 3).toPrecision(2)),
          -0.67,
        );
      });

      it('should return -0.67 for -1.7, -3', () => {
        assert.equal(
          parseFloat(calculateNumber('DIVIDE', -1.7, -3).toPrecision(2)),
          0.67,
        );
      });
    });
  });
});
