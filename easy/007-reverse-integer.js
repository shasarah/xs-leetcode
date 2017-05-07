/**
 * @description
 * Reverse digits of an integer.
 * Note:
 * The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.
 * 
 * @param {number} x
 * @return {number}
 *
 * @example
 * reverse(123); // -> 321
 * reverse(-123); // -> -321
 * reverse(1534236469); // -> 0 (overflow)
 */

/** 
 * v1: stupid
 * - convert to string
 * - reverse (use Array)
 * - convert to number
 */
var reverse = function(x) {
  let isPositive = x >= 0;
  let xStr = '';
  x = isPositive ? x : -x;

  try {
    xStr = x.toString().split('').reverse().join('');
    let xReverse = parseInt(xStr);
    if (xReverse <= Math.pow(2, 31)) {
      return isPositive ? xReverse : 0 - xReverse;
    } else {
      return 0;
    }
  } catch (e) {
    return 0;
  }
};

/** 
 * v2: still not fast
 * 取余*10 加
 */
var reverse = function(x) {
  let reverseX = 0;
  while (x !== 0) {
    reverseX = reverseX * 10 + x % 10;
    x = parseInt(x / 10);
  }
  return Math.abs(reverseX) < Math.pow(2, 31) ? reverseX : 0;
};


/**
 * NOT MINE
 * the most fast solution:
 * hahaha..
 */
var reverse = function(x) {
    let number = 0;
    while (x !== 0) {
        number = number * 10 + x % 10;
        x = parseInt(x / 10);
    }
    
    if (number > 2147483647 || number < -2147483647)
        return 0;
    else
        return number;
};