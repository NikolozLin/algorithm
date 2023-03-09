/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    // 剩余钱数
    const dp= new Array(prices.length).fill(0).map(()=>new Array(3))

    // 持有
    dp[0][0]=-prices[0]
    //卖出 冷冻
    dp[0][1]=0
    //卖出 非冷冻
    dp[0][2]=0

    for(let i=1;i<prices.length;i++){
        dp[i][0]=Math.max(dp[i-1][0],dp[i-1][2]-prices[i]);
        dp[i][1]=dp[i-1][0]+prices[i];
        dp[i][2]=Math.max(dp[i-1][2],dp[i-1][1]);
        
    }
    return Math.max(dp[prices.length-1][1],dp[prices.length-1][2])
};
// @lc code=end

