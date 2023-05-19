const calculateNumber = require('./2-calcul_chai');
const expect = require('chai').expect;

describe('calculateNumber', () => {
  describe('SUM', () => {
    describe('Integer', () => {
      it('should return 3 for 1, 2', () => {
        expect(calculateNumber('SUM', 1, 2)).to.be.equal(3);
      });

      it('should return -3 for -1, -2', () => {
        expect(calculateNumber('SUM', -1, -2)).to.be.equal(-3);
      });

      it('should return 0 for 0, 0', () => {
        expect(calculateNumber('SUM', 0, 0)).to.be.equal(0);
      });
    });

    describe('Float', () => {
      it('should return 3 for 1.0, 2.0', () => {
        expect(calculateNumber('SUM', 1.0, 2.0)).to.be.equal(3);
      });

      it('should return 6 for 2.5, 2.5', () => {
        expect(calculateNumber('SUM', 2.5, 2.5)).to.be.equal(6);
      });

      it('should return 5 for 2.5, 2.3', () => {
        expect(calculateNumber('SUM', 2.5, 2.3)).to.be.equal(5);
      });

      it('should return -4 for -2.5, -2.3', () => {
        expect(calculateNumber('SUM', -2.5, -2.3)).to.be.equal(-4);
      });
    });

    describe('Integer and Float', () => {
      it('should return 5 for 1.7, 3', () => {
        expect(calculateNumber('SUM', 1.7, 3)).to.be.equal(5);
      });

      it('should return 1 for -1.7, 3', () => {
        expect(calculateNumber('SUM', -1.7, 3)).to.be.equal(1);
      });

      it('should return -5 for -1.7, -3', () => {
        expect(calculateNumber('SUM', -1.7, -3)).to.be.equal(-5);
      });
    });
  });
  describe('SUBTRACT', () => {
    describe('Integer', () => {
      it('should return 1 for 2, 1', () => {
        expect(calculateNumber('SUBTRACT', 2, 1)).to.be.equal(1);
      });

      it('should return 1 for -1, -2', () => {
        expect(calculateNumber('SUBTRACT', -1, -2)).to.be.equal(1);
      });

      it('should return 0 for 0, 0', () => {
        expect(calculateNumber('SUBTRACT', 0, 0)).to.be.equal(0);
      });
    });

    describe('Float', () => {
      it('should return -1 for 1.0, 2.0', () => {
        expect(calculateNumber('SUBTRACT', 1.0, 2.0)).to.be.equal(-1);
      });

      it('should return 0 for 2.5, 2.5', () => {
        expect(calculateNumber('SUBTRACT', 2.5, 2.5)).to.be.equal(0);
      });

      it('should return 1 for 2.5, 2.3', () => {
        expect(calculateNumber('SUBTRACT', 2.5, 2.3)).to.be.equal(1);
      });

      it('should return 0 for -2.5, -2.3', () => {
        expect(calculateNumber('SUBTRACT', -2.5, -2.3)).to.be.equal(0);
      });
    });

    describe('Integer and Float', () => {
      it('should return -1 for 1.7, 3', () => {
        expect(calculateNumber('SUBTRACT', 1.7, 3)).to.be.equal(-1);
      });

      it('should return -5 for -1.7, 3', () => {
        expect(calculateNumber('SUBTRACT', -1.7, 3)).to.be.equal(-5);
      });

      it('should return 1 for -1.7, -3', () => {
        expect(calculateNumber('SUBTRACT', -1.7, -3)).to.be.equal(1);
      });
    });
  });
  describe('DIVIDE', () => {
    describe('Integer', () => {
      it('should return 0.5 for 1, 2', () => {
        expect(calculateNumber('DIVIDE', 1, 2)).to.be.equal(0.5);
      });

      it('should return 0.5 for -1, -2', () => {
        expect(calculateNumber('DIVIDE', -1, -2)).to.be.equal(0.5);
      });

      it('should return Error for 0, 0', () => {
        expect(calculateNumber('DIVIDE', 0, 0))
          .to.be.equal('Error')
          .to.be.a('string');
      });
    });

    describe('Float', () => {
      it('should return 0.5 for 1.0, 2.0', () => {
        expect(calculateNumber('DIVIDE', 1.0, 2.0)).to.be.equal(0.5);
      });

      it('should return 1 for 2.5, 2.5', () => {
        expect(calculateNumber('DIVIDE', 2.5, 2.5)).to.be.equal(1);
      });

      it('should return 1.5 for 2.5, 2.3', () => {
        expect(calculateNumber('DIVIDE', 2.5, 2.3)).to.be.equal(1.5);
      });

      it('should return 1 for -2.5, -2.3', () => {
        expect(calculateNumber('DIVIDE', -2.5, -2.3)).to.be.equal(1);
      });
    });

    describe('Integer and Float', () => {
      it('should return 0.67 for 1.7, 3', () => {
        expect(
          parseFloat(calculateNumber('DIVIDE', 1.7, 3).toPrecision(2)),
        ).to.be.equal(0.67);
      });

      it('should return -0.6 for -1.7, 3', () => {
        expect(
          parseFloat(calculateNumber('DIVIDE', -1.7, 3).toPrecision(2)),
        ).to.be.equal(-0.67);
      });

      it('should return -0.67 for -1.7, -3', () => {
        expect(
          parseFloat(calculateNumber('DIVIDE', -1.7, -3).toPrecision(2)),
        ).to.be.closeTo(0.67, 0.1);
      });
    });
  });
});
