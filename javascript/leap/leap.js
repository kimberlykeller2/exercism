//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function (input) {
	this.year = input;
};

Year.prototype.isLeap = function () {

	const modNum = (num) => this.year % num === 0;
	
	function and(func, ...args) {
	  return args.map(elem => func(elem)).reduce((previous, current) => {
	    return previous && current;
	  });
	}

	if( and(modNum, 4, 100, 400) ) {
		return true;

	} else if( and(modNum, 4, 100) ) {
		return false;

	} else if( and(modNum, 4) ) {
		return true;

	} else {
		return false;
	}
};

module.exports = Year;
