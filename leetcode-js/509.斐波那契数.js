/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n === 0 || n === 1) return n
    let a = 0;
    let b = 1;
    let i = 1;
    while (++i <= n) {
        [a, b] = [b, a + b]
    }
    return b
};
// @lc code=end

