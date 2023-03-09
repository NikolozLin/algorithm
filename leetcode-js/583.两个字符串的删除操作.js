/*
 * @lc app=leetcode.cn id=583 lang=javascript
 *
 * [583] 两个字符串的删除操作
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    if (word1 === word2) return 0;
    const w1 = ` ${word1}`;
    const w2 = ` ${word2}`;
    const dp = new Array(w1.length).fill(0).map((item, index) => new Array(w2.length).fill(index, 0, 1));
    dp[0] = new Array(w2.length).fill(0).map((i, index) => index);

    for (let i = 1; i < w1.length; i++) {
        for (let j = 1; j < w2.length; j++) {
            if (w1[i] === w2[j]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                // dp[i][j] = Math.min(dp[i][j - 1] + 1, dp[i - 1][j] + 1, dp[i - 1][j - 1] + 2);
                dp[i][j] = Math.min(dp[i][j - 1] , dp[i - 1][j] , dp[i - 1][j - 1] + 1)+1;
            }
        }
    }
    // console.table(dp);
    return dp[word1.length][word2.length];
};
// @lc code=end

