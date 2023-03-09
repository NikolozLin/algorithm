/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function (nums) {

    const len = nums.length;
    let i = len - 2
    for (; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {// 求后一个数 比前一个数 大的
            let j = i + 1
            //交换 j到end 中刚刚大于i的 交换
            for (let k = len - 1; k >= j; k--) {
                if (nums[k] > nums[i]) {
                    [nums[i], nums[k]] = [nums[k], nums[i]];
                    break;
                }
            }
            break;
        }

    }

    let end=len-1
    let j =i+1
    while(j<end){
        [nums[j], nums[end]] = [nums[end], nums[j]];
        j++;
        end--;
    }

};
// @lc code=end

