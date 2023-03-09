/*
 * @lc app=leetcode.cn id=1475 lang=javascript
 *
 * [1475] 商品折扣后的最终价格
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const stack = [];
    const result = [];

    for (let i = 0; i < prices.length; i++) {
        while (stack.length && prices[stack[stack.length - 1]] >= prices[i]) {
            const idx = stack.pop();
            result[idx] = prices[idx] - prices[i];
        }
        stack.push(i);
    }
    while (stack.length) {
        const idx = stack.pop();
        result[idx] = prices[idx];
    }
    return result;
};
// @lc code=end

