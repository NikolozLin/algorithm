/*
 * @lc app=leetcode.cn id=878 lang=javascript
 *
 * [878] 第 N 个神奇数字
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

const MOD = 1000000007

const lcm = (a, b) => {
    return Math.floor(a * b / gcd(a, b))
}
const gcd = (a, b) => {
    return b !== 0 ? gcd(b, a % b) : a;
}
//
var nthMagicalNumber = function (n, a, b) {
    let l = Math.min(a, b);
    let r = n * Math.min(a, b);
    const c = lcm(a, b)// 最大公倍数
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        const cnt = Math.floor(mid / a) + Math.floor(mid / b) - Math.floor(mid / c) //斥容原理 求得能被a 或着 b 整除的个数
        if (cnt >= n) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return (r + 1) % MOD;

};
// @lc code=end
