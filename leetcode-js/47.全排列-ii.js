/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {

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
        const curLoopUse= new Set()
        for(let i= 0;i<len;i++){
            const cur= nums[i]
            if(hasUse[i] ||curLoopUse.has(nums[i])){
                continue
            }
            path.push(cur);
            hasUse[i]=1
            curLoopUse.add(nums[i])
            loop(start+1)
            path.pop()
            hasUse[i]=0
            // curLoopUse.delete(nums[i])

        }
    }
};
// @lc code=end

