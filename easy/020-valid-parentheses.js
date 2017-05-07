/**
 * @description
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 * 
 * @param {string} s
 * @return {boolean}
 *
 * @example
 * isValid('[');    // -> false
 * isValid('');     // -> true
 * isValid('()');   // -> true
 * isValid('())');  // -> false
 */

// slow & stupid
var isValid = function(s) {
    if (s === '') {
        return true;
    }
    
    let stack = [], sLen = s.length, pre = '', cur;
    
    for (let i = 0; i < sLen; i++) {
        cur = s.charAt(i);
        switch (cur) {
            case '(':
                stack.push(')');
                break;
            case '{':
              stack.push('}');
                break;
            case '[':
              stack.push(']');
                break;
            case ')':
            case '}':
            case ']':
                if (stack[stack.length - 1] === cur) {
                    stack.pop();
                    break;
                } else {
                    return false;
                };
            default:
                break;
        }
        pre = cur;
    }
    return stack.length <= 0;
};
