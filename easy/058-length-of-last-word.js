/**
 * @param {string} s
 * @return {number}
 *
 * @example
 * lengthOfLastWord('Hello World'); // -> 5
 * lengthOfLastWord('a '); // -> 0
 * 
 */
var lengthOfLastWord = function(s) {
    s = s.replace(/\s+$/, '');
    return s.length - 1 - s.lastIndexOf(' ');
};