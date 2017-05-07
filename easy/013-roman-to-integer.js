/**
 * @description
 * Given a roman numeral, convert it to an integer.
 * Input is guaranteed to be within the range from 1 to 3999.
 * 
 * @param {string} s
 * @return {number}
 *
 * @example
 * romanToInt('DCXXI'); // -> 621
 */
var romanToInt = function(s) {
	let map = {
		M: 1000,
		D: 500,
		C: 100,
		L: 50,
		X: 10,
		V: 5,
		I: 1
	};

	try {
		let sLen = s.length,
			n, pre, cur;
		n = pre = map[s.charAt(0)];

		for (let i = 1; i < sLen; i++) {
			cur = map[s.charAt(i)];
			n += cur;
			if (pre < cur) {
				n -= pre * 2;
			}
			pre = cur;
		}
		return n;
	} catch (e) {
		return false;
	}
};