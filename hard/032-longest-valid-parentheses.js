/**
 * @param {string} s
 * @return {number}
 *
 * @example
 * longestValidParentheses(")()())"); // -> 4
 * longestValidParentheses("(()"); // -> 2
 * longestValidParentheses("()(()"); // -> 2
 * longestValidParentheses("()()"); // -> 4
 */
var longestValidParentheses = function(s) {
    let stack = [], curChar = '';
    let match_len = 0, cur_len = 0;

    for(let i=0; i<s.length; i++) {
        curChar = s[i];

        if (stack.length <= 0) {
            stack.push(curChar);
        } else {
            if (curChar === ')' && stack[stack.length - 1] === '(') {
                stack.pop();
                cur_len += 2;
            } else {
                stack.push(curChar);
                cur_len = 0;
            }
        }
        match_len = Math.max(match_len, cur_len);
    }

    return match_len;
};

