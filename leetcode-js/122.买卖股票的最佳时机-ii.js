/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 贪最多波动
    let stack = [prices[0]];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        const peak = stack[stack.length - 1];
        if (peak > prices[i]) {
            if (stack.length === 2) {
                profit += stack[1] - stack[0];
            }
            stack = [prices[i]];
        } else if (stack.length > 1) {
            stack.pop();
            stack.push(prices[i]);
        } else {
            stack.push(prices[i]);
        }
    }
    if (stack.length === 2) {
        profit += stack[1] - stack[0];
    }
    return profit

};
// @lc code=end

