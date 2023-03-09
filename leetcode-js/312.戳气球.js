/*
 * @lc app=leetcode.cn id=312 lang=javascript
 *
 * [312] 戳气球
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxCoins = function (nums) {
    //dp[i][j] 开区间 最大的coins 个数
    //最终求的事 dp[0][N+1]开区间的最大值，且i<j
    const coinsArrs = [1, ...nums, 1];
  
    const len = coinsArrs.length;
    const dp = new Array(len).fill(0).map(() => new Array(len).fill(0));
  
    //确认依赖方向迭代
    for (let i = len - 3; i >= 0; i--) {
      for (let j = i + 2; j < len; j++) {
        for (let k = i + 1; k < j; k++) {
          // 开区间
          dp[i][j] = Math.max(
            dp[i][j],
            dp[i][k] + dp[k][j] + coinsArrs[i] * coinsArrs[k] * coinsArrs[j],
          );
          // console.table(dp);
        }
      }
    }
  
    return dp[0][len - 1];
  };
// @lc code=end

