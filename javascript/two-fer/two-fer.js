var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {

	const param = (who ? who : 'you');

	const saying = `One for ${param}, one for me.`

  return saying;
};

module.exports = TwoFer;
