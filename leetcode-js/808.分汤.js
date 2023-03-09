/*
 * @lc app=leetcode.cn id=808 lang=javascript
 *
 * [808] 分汤
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
 var soupServings = function (n) {
    if (n>4475) return 1 //  这里是计算出来的 
    const len =  Math.ceil(n / 25);
    // 25一个单位
    const operation = [
        { a: 4, b: 0 },
        { a: 3, b: 1 },
        { a: 2, b: 2 },
        { a: 1, b: 3 },
    ]

    // row:a  col:b
    const dp = new Array(len + 1).fill(0).map(() => new Array(len + 1).fill(0))
    dp[0] = new Array(len + 1);
    dp[0][0] = 0.5;

    for (let i = 1; i <= len; i++) {
        for (let j = 1; j <= len; j++) {

            const result = 0.25 * operation.reduce((a, opt) => {
                if (i - opt.a > 0 && j - opt.b > 0) return a + dp[i - opt.a][j - opt.b]
                if (i - opt.a <= 0 && j - opt.b <= 0) return a + 0.5
                if (i - opt.a <= 0) return a + 1
                return a
            }, 0)
            dp[i][j] = result
        }
    }


    return dp[len][len]

};
// @lc code=end

