/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
  // 思路 剩余target 总数为sum 。那么 nums 能组合成 （sum-target）/2 时，最后才能得到target
  const sum = nums.reduce((a, b) => a + b);
  if ((sum - Math.abs(target)) % 2 || Math.abs(target) > sum) return 0;
  const halfSum = (sum - Math.abs(target)) >> 1;
  const dp = new Array(halfSum + 1).fill(0); // 组成 当前容量的可能
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
      for (let j = halfSum; j >= 0; j--) { //考虑到 num可能为0 -0 +0 这里 j>=0
          if (j >= nums[i]) {
                dp[j] = dp[j] + dp[j - nums[i]];//当前选项 选或者不选 对应它是属于左部分还是右部分，这里就是确定他是 正 还是负
             }
      }
  }
  return dp[halfSum];
};
// @lc code=end

