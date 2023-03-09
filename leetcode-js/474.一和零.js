/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
    //
    const dp = new Array(m + 1).fill(0).map((i) => new Array(n + 1).fill(0));
    for (let z = 0; z < strs.length; z++) {
        let x = m;
        const str1 = [...strs[z]].reduce((a, b) => (a - 0) + (b - 0));
        const str0 = strs[z].length - str1;
        while (x >= 0) {
            let y = n;
            while (y >= 0) {
                if (x >= str0 && y >= str1) {
                    dp[x][y] = Math.max(dp[x][y], dp[x - str0][y - str1] + 1);
                }
                y--;
            }
            x--;
        }
    }
    return dp[m][n];
};
// @lc code=end

