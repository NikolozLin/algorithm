/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
    // 类比限制两次交易的股票问题
    // 第 i 次买入 对应下标为  2*i+1
    const dp = new Array(prices.length).fill(0).map(() => new Array(2 * k + 1).fill(0))

    //初始化
    for (let i = 0; i < k; i++) {
        dp[0][2 * i + 1] = - prices[0];
    }

    //
    for (let i = 1; i < prices.length; i++) {
        for (let j = 0; j < k; j++) {
            //
            // 买入 第 j 次交易 以来上次j-1次交易的结果
            dp[i][2 * j + 1]=Math.max( dp[i-1][2 * j + 1],dp[i-1][2 * j ]-prices[i])
            // 卖出 第 j 次交易 以来上次j次买入的结果
            dp[i][2 * j + 2]=Math.max( dp[i-1][2 * j + 2],dp[i-1][2 * j +1]+prices[i])
        }
        
    }
    // console.table(dp)
    return dp[prices.length-1][2 * k ];
};
// @lc code=end
// maxProfit(

//     2,
//     [2,4,1]
//     )