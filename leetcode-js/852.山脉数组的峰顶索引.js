/*
 * @lc app=leetcode.cn id=852 lang=javascript
 *
 * [852] 山脉数组的峰顶索引
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    const len = arr.length;
    let l = 0
    let r = len - 1;

    while (l < r) {
        let mid = l + r >> 1
        if (arr[mid] < arr[mid + 1]) {
            l = mid + 1;
        } else {
            r = mid
        }
    }
    return l

};
// @lc code=end

