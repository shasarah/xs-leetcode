/**
 * @description
 * See wiki
 * 
 * @param {number[]} nums
 * @return {number}
 *
 * @example
 * maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);	// -> 6
 */
var maxSubArray = function(nums) {
    let max_ending_here, max_so_far;
    max_ending_here = max_so_far = nums[0];
    
    for(let i=1; i<nums.length; i++) {
        max_ending_here = max(nums[i], max_ending_here + nums[i]);
        max_so_far = max(max_so_far, max_ending_here);
    }
    
    return max_so_far;
};

function max(a, b) {
    if (a>b) {
        return a;
    } else {
        return b;
    }
}
