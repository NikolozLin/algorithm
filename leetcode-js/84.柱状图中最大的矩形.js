/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const arrs = [0, ...heights, 0];
    const stack = [0];// 存放index  d
    let i = 1;
    let max = 0;
    while (i < arrs.length) {
        while (arrs[i] < arrs[stack[stack.length - 1]]) {
            const height = arrs[stack.pop()];
            const rang = i - stack[stack.length - 1] - 1;
            max = Math.max(max, height * rang);
        }

        if (arrs[i] === arrs[stack[stack.length - 1]]) stack.pop();

        stack.push(i);

        i++;
    }
    // console.log(max);
    return max;

};
// @lc code=end

