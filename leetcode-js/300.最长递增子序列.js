/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
// 贪心 如果我们要使上升子序列尽可能的长，则我们需要让序列上升得尽可能慢，
// 因此我们希望每次在上升子序列最后加上的那个数尽可能的小。
// 每次新加的数替换原有末尾大的数。
function lengthOfLIS(nums) {
    const dp = []; // 存储 dp[i] 长度为i的最长子序列，最后一位的值
    // eslint-disable-next-line no-restricted-syntax
    for (const item of nums) {
        let l = -1;
        let r = dp.length;
        while (l + 1 !== r) { // 找到新的数item  在dp数组中刚好比item小的右边界
            const mid = l + r >> 1;
            if (dp[mid] < item) {
                l = mid;
            } else {
                r = mid;
            }
        }
        if (r == dp.length) {
            dp.push(item);
        } else {
            dp[r] = item;
        }
    }
    return dp.length;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const dpLengthOfLIS = function (nums) {
    const dp = new Array(nums.length).fill(0);
    dp[0] = 1;
    let max = 1;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }

        max = Math.max(max, dp[i]);
    }

    return max;
};
// @lc code=end

