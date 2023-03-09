/*
 * @lc app=leetcode.cn id=377 lang=javascript
 *
 * [377] 组合总和 Ⅳ
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    //  不同排序也算一种组合
    const dp=new Array(target+1).fill(0);
    dp[0]=1;

    for(let j=1;j<=target;j++){ //先背包容量
        for(let i=0;i<nums.length;i++){// 后 物品数量
            if(j>=nums[i])dp[j]+=dp[j-nums[i]];
        }
    }
    return dp[target]
};
// @lc code=end

