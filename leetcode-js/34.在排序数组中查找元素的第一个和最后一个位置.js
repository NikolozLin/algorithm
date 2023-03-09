/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function binarySearch(nums, target, flag) {
    let l = -1;
    let r = nums.length;

    while (l + 1 < r) {
        const mid = l + r >> 1;
        if (nums[mid] <= target && (flag || nums[mid] < target)) {
            l = mid;
        } else {
            r = mid;
        }
    }
    return r;
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
    const left = binarySearch(nums, target, false);
    const right = binarySearch(nums, target, true) - 1;

    if (left <= right && nums[left] === nums[right]) return [left, right];
    return [-1, -1];
};
// @lc code=end

