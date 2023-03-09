/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    // 对半分 左sum= 右sum = 总sum/2
    // 01背包 容量 sum/2
    const sum = nums.reduce((a, b) => a + b, 0);
    if (sum % 2) return false;
    const halfSum = sum / 2;
    const dp = new Array(halfSum + 1).fill(0);

    for (let i = 0; i < nums.length; i++) {
        for (let j = halfSum; j >=0; j--) {
            if(j>=nums[i]){
                dp[j]=Math.max(dp[j],dp[j-nums[i]]+nums[i])
            }
        }
    }

    return dp[halfSum]==halfSum;

};
// @lc code=end

canPartition([1,5,11,5])