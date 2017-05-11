/**
 * @description
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 *
 * @example
 * in JavaScript
 * input is: 
 * {
 *   val: 2,
 *   next: { val: 4, next: { val: 3, next: null } }
 * },
 * {
 *   val: 5,
 *   next: { val: 6, next: { val: 4, next: null } }
 * }
 * output is:
 * [7, 0, 8]
 */
/** 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 *
 * @example
 * addTwoNumbers([2,4,3], [5,6,4]); // -> [7, 0, 8]
 * addTwoNumbers([5], [5]); // -> [0, 1]
 */

var addTwoNumbers = function(l1, l2) {
    let result = [], cur = 0, carry = 0, digit = 0, val1 = 0, val2 = 0;
    while(l1 !== null || l2 !== null || carry !== 0) {
        val1 = l1 ? l1.val : 0;
        val2 = l2 ? l2.val : 0;
        cur = val1 + val2 + carry;
        digit = cur % 10;
        carry = (cur-digit)/10;
        result.push(digit);
        l1 = l1 ? l1.next : l1;
        l2 = l2 ? l2.next : l2;
    }
    
    return result;
};