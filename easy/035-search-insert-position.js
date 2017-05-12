/**
 * @description
 * Binary Search
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * @example
 * searchInsert([1,3,5,6], 5.5); // -> 3
 * searchInsert([1,3,5,6], 5); // -> 2
 * searchInsert([1,3,5,6], 2); // -> 1
 * searchInsert([1], 2); // -> 1
 */
var searchInsert = function(nums, target) {
    let min = 0, max = nums.length - 1, cur = 0;
    
    while(max>=min) {
        cur = Math.floor((max+min)/2);
        if (nums[cur] < target) {
            min = cur + 1;
        } else if (nums[cur] > target) {
            max = cur - 1;
        } else {
            return cur;
        }
        
    }
    
    return min;
};
