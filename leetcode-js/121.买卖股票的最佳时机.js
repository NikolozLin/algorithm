/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let minP=0;
    let max=0;
    for (let i = 1; i < prices.length; i++) {
        if(prices[minP]<prices[i]){
            max=Math.max(max,prices[i]-prices[minP]);
        }else{
            minP=i;
        }
    }

    return  max


};
// @lc code=end
