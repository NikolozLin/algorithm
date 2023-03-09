/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (!nums.length) return -1;
    let l = -1;
    let r = nums.length;

    while (l + 1 < r) {
        const mid = l + r >> 1;
        if (nums[mid] < target) {
            l = mid;
        } else {
            r = mid;
        }
    }
    if (r > -1 && r < nums.length && nums[r] === target) return r;
    return -1;
};
// @lc code=end

