/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let tmp_map = {};
    for (let i=0; i<nums.length; i++) {
        if (tmp_map[nums[i]] >= 0) {
            if (i-tmp_map[nums[i]] > k) {
                tmp_map[nums[i]] = i;
            } else {
                return true;
            }
        } else {
            tmp_map[nums[i]] = i;
        }
    }
    return false;
};

