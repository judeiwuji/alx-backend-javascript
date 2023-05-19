const calculateNumber = (type, a, b) => {
	switch (type) {
	  case 'SUM':
		return Math.round(a) + Math.round(b);
	  case 'SUBTRACT':
		return Math.round(a) - Math.round(b);
	  case 'DIVIDE':
		a = Math.round(a);
		b = Math.round(b);
		if (b === 0) return 'Error';
		return a / b;
	}
  };

  module.exports = calculateNumber;
