/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    const path = [];
    const len = nums.length ;
    const hasUse= new Array(len).fill(0)
    loop(0);
    return result;
    function loop(start) {
        if (start === len) {
            result.push([...path]);
            return;
        }
        for(let i= 0;i<len;i++){
            const cur= nums[i]
            if(hasUse[i]){
                continue
            }
            path.push(cur);
            hasUse[i]=1
            loop(start+1)
            path.pop()
            hasUse[i]=0
        }
    }
};
// @lc code=end

