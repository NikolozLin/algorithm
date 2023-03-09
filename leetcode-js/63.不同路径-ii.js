/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function (obstacleGrid) {
    // if(obstacleGrid[0].length==1) return  1^obstacleGrid[0][0]
    // 到达当前位置的路径数
    const dp = new Array(obstacleGrid[0].length);
    dp[0] = 1^obstacleGrid[0][0]
    // 初始化
    for (let i = 1; i<obstacleGrid[0].length; i++) {
        dp[i] = dp[i - 1] ? 1 ^ obstacleGrid[0][i] : 0

    }
    for (let i = 1; i < obstacleGrid.length; i++) {
        if (obstacleGrid[i][0] || !dp[0]) dp[0] = 0;
        for (let j = 1; j < obstacleGrid[0].length; j++) {
            if (obstacleGrid[i][j]) {
                dp[j] = 0
            } else {
                dp[j] = dp[j] + dp[j - 1]
            }
        }
    }

    return dp[dp.length-1]

};
// @lc code=end

