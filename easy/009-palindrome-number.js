/**
 * @description
 * Determine whether an integer is a palindrome. Do this without extra space.
 * 
 * @param {number} x
 * @return {boolean}
 *
 * @example
 * isPalindrome(123); // -> true
 */

// with extra space
var isPalindrome = function(x) {
    // negative
    if (x < 0) {
        return false;
    }
    
    // non-integer
    if (x%1 !== 0) {
        return false;
    }
    
    let xStr = x.toString();
    let xLen = xStr.length;
    
    for (var i = 0; i < xLen/2; i++) {
        if (xStr.charAt(i) !== xStr.charAt(xLen - i - 1)) {
            return false;
        }
    }

    return true;
};

// Do not know how to do this without extra space..