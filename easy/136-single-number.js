/**
 * @description
 * Given an array of integers, every element appears twice except for one. Find that single one.
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 * 
 * @param {number[]} nums
 * @return {number}
 *
 * @example
 * singleNumber([1,1,2,3,3]);	// -> 2
 * singleNumber([1]);		// -> 1
 * singleNumber([17,12,5,-6,12,4,17,-5,2,-3,2,4,5,16,-3,-4,15,15,-4,-5,-6]);	// -> 16
 */

// v1: Stupid
// T(n) = O(2n), S(n) = O(n)
var singleNumber = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }

    let map = {}, cur, i = 0;

    for (let i = 0; i < nums.length; i++) {
        cur = nums[i];
       if (map[cur] !== undefined) {
            nums[map[cur]] = nums[i] = false;
        } else {
            map[cur] = i;
        }
    }

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== false) {
            return nums[j];
        }
    }
};

// v2: ?
// T(n) = O(n), S(n) = O(1)
// Click 'show tags' and find 'Bit Manipulation', soka
var singleNumber = function(nums) {
    let num = 0;
    nums.forEach((val) => {
        num ^= val;
    });
    return num;
};
