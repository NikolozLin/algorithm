/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    [s, t] = [t, s] // 个人习惯长的放后面
    s = ' ' + s;
    t = ' ' + t;
    const sLen = s.length;
    const tLen = t.length;
    const dp = new Array(sLen).fill(0).map(() => new Array(tLen).fill(0, 0, 1));
    dp[0] = new Array(tLen).fill(1);
    for (let i = 1; i < sLen; i++) {
        for (let j = 1; j < tLen; j++) {
            if (s.charAt(i) === t.charAt(j)) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1]
            } else {
                dp[i][j] = dp[i][j - 1]
            }
            // console.table(dp)
        }
    }
    return dp[sLen - 1][tLen - 1]

};
// @lc code=end