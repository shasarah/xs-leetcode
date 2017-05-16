/**
 * @param {number} n
 * @return {number}
 */

// 44 => Time Limit Exceeded
var climbStairs = function(n) {
    switch(n) {
        case 0:
            return 0;
        case 1:
            return 1;
        case 2:
            return 2;
        default:
            return climbStairs(n-1) + climbStairs(n-2);
    }
};


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    let result = 0, llast = 1, last = 2;
    while((n-- - 2)) {
        result = llast + last;
        llast = last;
        last = result;
    }
    return result;
};
