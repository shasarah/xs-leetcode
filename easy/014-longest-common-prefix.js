/**
 * @description
 * Write a function to find the longest common prefix string amongst an array of strings.
 * 
 * @param {string[]} strs
 * @return {string}
 *
 * @example
 * longestCommonPrefix([]); // -> ''
 * longestCommonPrefix(['aaa', 'a', 'aa']); // -> 'a'
 * longestCommonPrefix(['asdf', 'asdg', 'asfd']);   // -> 'as'
 */

// Solution 01: 超慢
var longestCommonPrefix = function(strs) {
    let arrLen = strs.length;
    if (arrLen <= 0) {
        return '';
    } else if (arrLen === 1) {
        return strs[0];
    }
    
    let subStr = strs[0];
    
    for(let i = 1; i < arrLen; i++) {
        let minLen = subStr.length < strs[i].length ? subStr.length : strs[i].length;
        subStr = subStr.slice(0, minLen);
        for(let j = 0; j < minLen; j++) {
            if (subStr[j] !== strs[i][j]) {
                subStr = subStr.slice(0, j);
                break;
            }
        }
    }
    
    return subStr;
};
