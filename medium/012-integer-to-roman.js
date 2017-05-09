/**
 * @description
 * Given an integer, convert it to a roman numeral.
 * Input is guaranteed to be within the range from 1 to 3999.
 * 
 * @param {number} num
 * @return {string}
 *
 * @example
 * intToRoman('3999'); // -> 'MMMCMXCIX'
 */
var intToRoman = function(num) {
    let strArrs = [
        ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
        ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
        ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
        ['', 'M', 'MM', 'MMM']
    ], cur = 0, str = '', i = 0;
    
    while (num >= 1) {
        cur = num % 10;
        str = strArrs[i][cur] + str;
        num = parseInt(num/10);
        i++;
    }
    
    return str;
};
