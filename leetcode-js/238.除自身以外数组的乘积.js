/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // 分别计算 idx 左侧累乘 和右侧累乘
    const reuslt=[1];

    for(let i=1;i<nums.length;i++){
        reuslt[i]=reuslt[i-1]*nums[i-1]
    }


    let R=1; // 右边累乘
    for( let j=nums.length-1;j>=0;j--){
        reuslt[j]=reuslt[j]*R;
        R*=nums[j];
    }

    return reuslt;

};
// @lc code=end

