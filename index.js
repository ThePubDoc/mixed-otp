'use strict';
const otp = (digits) => {
	let otp = '';
	for (let i = 1; i <= digits; i++) {
		if (i % 2 === 0) {
			otp = otp + String(Math.floor(Math.random() * 11));
		} else {
			let num = Math.floor(Math.random() * (122 - 97)) + 97;
			otp = otp + String.fromCharCode(num);
		}
	}
	return otp;
};

module.exports = {
	otp,
};
