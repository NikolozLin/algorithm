/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

    const len =nums.length;
    let max=0;
    for(let i=0;i<len;i++){
        if(i>max)return false;// 当前位置超过最远能到达的距离
        max =Math.max(max,i+nums[i])
    }    
    return true

};
// @lc code=end

