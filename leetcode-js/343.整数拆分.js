/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    // 当先下标拆封最大乘积
    const dp = new Array(n+1).fill(0);

    dp[2] = 1;
    for (let i = 3; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i],j*(i-j))
            // 因为一个数拆成两部分 j变大 i-j变小的过程中 ，两边会相同的值，只是换了左右位置而已，所以只用拆封其中一个值就好了。
            dp[i] = Math.max(dp[i],j*dp[i-j]) 
        }
    }
    return dp[n]

};
// @lc code=end
console.log(

    integerBreak(10)
    )