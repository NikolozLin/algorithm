/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if(n===1||n===2) return n;
    let a = 1;
    let b = 2;
    let index = 2
    while (index++ < n) {

        [a, b] = [b, a + b]

    }
    return b

};
// @lc code=end

