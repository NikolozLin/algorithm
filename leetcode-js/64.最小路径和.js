/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let i = grid.length;
    let j = grid[0].length;
    const dp = new Array(j + 1).fill(Infinity) // 确保第一行从左取值
    dp[1]=0;// 保证第一列 从上取值
    // dp[1]=0

    for (let row = 1; row <= i; row++) {
        for (let col = 1; col <= j; col++) {
            dp[col]= Math.min( dp[col-1], dp[col]) +grid[row-1][col-1]
        }
        console.log(dp);
    }
   return dp[j]
};

var minPathSumDFS = function (grid) { // 超时了， 重复路径重复计算了
    const cache = new Map();
    let min = Infinity;
    let width = grid.length - 1;
    let height = grid[0].length - 1;
    function dfs(i, j, sum) {
        if (i == 0 && j == 0) {
            min = Math.min(min, sum)
            return
        }
        if (i > 0) {
            dfs(i - 1, j, sum + grid[(i - 1)][j])
        }
        if (j > 0) {
            dfs(i, j - 1, sum + grid[i][(j - 1)])
        }

    }
    dfs(width, height, 0)
    return min + grid[width][height]
};
const result = minPathSumDFS([[1, 3, 1], [1, 5, 1], [4, 2, 1]])
console.log(result);
// @lc code=end

