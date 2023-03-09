/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    // 首尾相连 进行分类讨论。
    const result1 = robberyRange(nums.slice(0, nums.length - 1));
    const result2 = robberyRange(nums.slice(1));
    return Math.max(result1, result2);
    function robberyRange(arrs) {
        if (arrs.length === 1) return arrs[0];
        const dp = new Array(arrs.length).fill(0);
        dp[0] = arrs[0];
        dp[1] = Math.max(arrs[0], arrs[1]);

        for (let i = 2; i < arrs.length; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + arrs[i]);
        }
        return dp[dp.length - 1];
    }
};
// @lc code=end

