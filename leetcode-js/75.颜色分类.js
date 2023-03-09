/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let p1 = 0; // 1的 左闭区域
    let p2 = nums.length - 1;// 1 右闭区域

    for (let i = 0; i <= p2; i++) {
        if (nums[i] === 0) {
            [nums[i], nums[p1]] = [nums[p1], nums[i]];
            p1++;
        } else if (nums[i] === 2) {
            [nums[i], nums[p2]] = [nums[p2], nums[i]];
            p2--;
            i--;
        }
    }

};
// @lc code=end

