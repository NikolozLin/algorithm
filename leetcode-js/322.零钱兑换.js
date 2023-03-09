/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
 // 初始化
 const dp = new Array(amount+1).fill(Infinity)
 dp[0]=0

 for (let i = coins.length - 1; i >= 0; i--) {
     for (let j = 1; j <= amount; j++) {
         if (coins[i] <= j) {
             dp[j] = Math.min((dp[j - coins[i]] + 1), dp[j])
         } 
     }
 }
 // console.log(dp.toString())
 return dp[amount]==Infinity?-1:dp[amount]
};
// @lc code=end

