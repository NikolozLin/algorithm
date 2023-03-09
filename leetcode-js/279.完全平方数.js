/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    // const maxQuare = Math.sqrt(n).toFixed(0);
    // const nums = new Array(Number(maxQuare)).fill(0).map((i, idx) => (idx + 1) ** 2);
    // const dp = new Array(n + 1).fill(Infinity); // 组成当前idx 需要最少个数
    // dp[0] = 0;

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = nums[i]; j <= n; j++) {
    //         dp[j] = Math.min(dp[j], dp[j - nums[i]] + 1);
    //     }
    // }

    // return dp[n];

    const dp = new Array(n + 1).fill(Infinity); // 组成当前idx 需要最少个数
    dp[0] = 0;

    for (let i = 1; i * i <= n; i++) {
        for (let j = i * i; j <= n; j++) {
            dp[j] = Math.min(dp[j], dp[j - (i * i)] + 1);
        }
    }
    return dp[n];

};
// @lc code=end

