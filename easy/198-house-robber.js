/**
 * @param {number[]} nums
 * @return {number}
 *
 * @example
 * rob([2,1,1,2]); // -> 4
 * rob([1,3,1]); // -> 3
 * rob([1,1,2,1]); // -> 3
 * rob([2,7,9,3,1]); // -> 12
 */
var rob = function(nums) {
    let len = nums.length;
    if(len <= 0) {
        return 0;
    }
    if(len === 1) {
        return nums[0];
    }
    if(len === 2) {
        return Math.max(nums[0], nums[1]);
    }
    let preev = nums[0], prev = Math.max(nums[0], nums[1]), result = 0;
    
    // 
    for(let i=2; i<len; i++) {
        result = Math.max(preev + nums[i], prev);
        preev = prev;
        prev = result;
    }
    return result;
};
