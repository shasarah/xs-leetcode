/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let stack = [], number = 0, sign = '+';
    s = s.replace(/\s/g, '');

    for (let i=0; i<s.length; i++) {
        let cur = s[i];

        if (!isNaN(cur)) {
            number = number*10+parseInt(cur);
        } 
        if (isNaN(cur) || i === s.length -1) {
            switch (sign) {
                case '+':
                    stack.push(number);
                    break;
                case '-':
                    stack.push(-1*number);
                    break;
                case '*':
                    stack.push(stack.pop()*number);
                    break;
                case '/':
                    let num = stack.pop()/number;
                    num = num > 0 ? Math.floor(num) : Math.ceil(num);
                    stack.push(num);
                    break;
            }
            sign = cur;
            number = 0;
        }
    }
    
    let result = 0;
    stack.forEach((val) => {
        result += val;
    });
    return result;
};
