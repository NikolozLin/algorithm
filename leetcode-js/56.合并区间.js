/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const maged = [intervals.shift()]
    while (intervals.length > 0) {
        const peak = maged.pop();
        const newArr = intervals.shift()
        if (peak[1] >= newArr[1]) {
            maged.push(peak)
        } else if (peak[1] >= newArr[0]) {

            maged.push([peak[0], newArr[1]])
        } else {
            maged.push(peak, newArr)
        }
    }
    return maged
};

// console.log(merge([[1,3],[2,6],[8,10],[15,18]]    ))
// @lc code=end

