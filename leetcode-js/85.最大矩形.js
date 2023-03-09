/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * lc84 柱状图最大面积
 * @param {number[]} heights
 * @return {number}
 */
 const largestRectangleArea = function (heights) {
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

/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalRectangle = function (matrix) {
    let max = 0;
    // 将矩阵一行行叠加 当成柱状图 求最大值
    matrix.reduce((a, b) => {
        const heights = b.map((item, index) => item==1?item -0+a[index]:0);

        const maxArea = largestRectangleArea(heights);
        max = Math.max(max, maxArea);
        return heights;
    }, new Array(matrix[0].length).fill(0));

    return max;
};
// @lc code=end

maximalRectangle(
    [["0","1"],["1","0"]]
    
    )