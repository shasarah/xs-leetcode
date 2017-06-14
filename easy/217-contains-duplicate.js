/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if (nums.length <= 0) {
        return false;
    }
    let tmp_map = {};
    for(let i=0; i<nums.length; i++) {
        if (tmp_map[nums[i]]) {
            return true;
        } else {
            tmp_map[nums[i]] = true;
        }
    }
    return false;
};

