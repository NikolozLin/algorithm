/*
 * @lc app=leetcode.cn id=1287 lang=javascript
 *
 * [1287] 有序数组中出现次数超过25%的元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    // 滑动窗口 判断有序数组 某个数个数超过 1/4
    let len=arr.length;
    let maxLen=Math.floor(len/4)
    let  l=0;
    let r=0;
    while(r<len){
        if(arr[r]!==arr[l]){
            l=r
        }
        if((r-l+1)>maxLen) return arr[l]
        r++
    }

};
// @lc code=end