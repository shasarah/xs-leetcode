/**
 * @description
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * @example
 * twoSum([3, 3], 6); // -> [0,1]
 * twoSum([3, 2, 4], 6); // -> [1,2]
 */
var twoSum = function(nums, target) {
    numsMap = {};

    for (var i = 0; i < nums.length; i++) {
        if (numsMap[target - nums[i]] !== undefined && numsMap[target - nums[i]] !== i) {
            return [numsMap[target - nums[i]], i];
        }
        
        numsMap[nums[i]] = i;
    }
    
    return false;
};
