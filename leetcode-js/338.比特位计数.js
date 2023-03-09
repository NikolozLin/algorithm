/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    // 时间复杂度 n 的解法
    // 分类讨论 odd ： 前一个偶数+1  even：当前数除2
    const dp = [0, 1, 1];

    if (n < 3) return dp.slice(0, n + 1);

    let cur = 3;
    while (cur <= n) {
        if (cur % 2) { // odd
            dp[cur] = dp[cur - 1] + 1;
        } else {
            dp[cur] = dp[(cur >> 1)];
        }
        cur++;
    }
    // console.log(dp);
    return dp;
};
// @lc code=end

