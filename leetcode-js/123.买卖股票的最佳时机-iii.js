/*
* @lc app=leetcode.cn id=123 lang=javascript
*
* [123] 买卖股票的最佳时机 III
*/

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    // 设定 每天状态 5中  
    // 0-不操作 1-第一天买入 2-第二天卖出 3-第二天买入 4-第二的天卖出
    // 初始化 dp  记录第 i 天 利润 或剩下钱数
    const dp = new Array(prices.length).fill(0).map((i) => new Array(5).fill(0));

    // dp[0][0] = 0;
    dp[0][1] = -prices[0];
    // dp[0][2] = 0; // 如果股票天天下跌 最好情况 不操作 利润为0
    dp[0][3] = -prices[0];
    // dp[0][4] = 0;

    for (let i = 1; i < prices.length; i++) {
        // 不操作    
        // dp[i][0] = dp[i - 1][0];
        //第一次买入
        dp[i][1] = Math.max((dp[i - 1][0] - prices[i]), dp[i - 1][1]); // 这次买入花剩下的钱  上一次买入的剩下钱  
        // 第一次卖出
        dp[i][2] = Math.max((dp[i - 1][1] + prices[i]), dp[i - 1][2]); // 这次卖出赚的钱  上次卖出赚的钱  
        // 第二次买入
        dp[i][3] = Math.max((dp[i - 1][2] - prices[i]), dp[i - 1][3]);// 这次买入花剩下的钱  上一次买入的剩下钱  
        // 第二次卖出
        dp[i][4] = Math.max((dp[i - 1][3] + prices[i]), dp[i - 1][4]); // 这次卖出赚的钱  上次卖出赚的钱  
    }
    // console.table(dp)
    return dp[prices.length-1][4];
};
// @lc code=end


// maxProfit([3,3,5,0,0,3,1,4])

