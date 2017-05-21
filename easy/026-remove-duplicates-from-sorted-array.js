/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let result_end = 0; // end pos
    
    if (nums.length === 1) {
        return nums;
    }
    
    for (let i=1; i<nums.length; i++) {
        if (nums[i-1] !== nums[i]) {
            result_end++;
            nums[result_end] = nums[i];
        }
    }
    
    let result = nums.slice(0, result_end+1);

    return result.length;
};
