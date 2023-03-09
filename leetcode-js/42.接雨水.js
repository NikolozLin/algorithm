/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function (height) {
    const stack = [];
    let result = 0;
    for (let i = 0; i < height.length; i++) {
        while (stack.length && height[stack[stack.length - 1]] <= height[i]) {
            const top = stack.pop();
            if (!stack.length) {
                break;
            }
            const left = stack[stack.length - 1];
            const curWidth = i - left - 1;
            const curHeight = Math.min(height[i], height[left]) - height[top];
            result += curHeight * curWidth;
        }
        stack.push(i);
    }
    return result;
};

// i位置能接到雨水最大值为 i位置左右最近距离的最大值，他们组成一个凹槽，二者其中小的一个决定凹槽的液体高度。
const trapDP = function (height) {
    const leftmax = [height[0]];
    const rightmax = [];
    rightmax[height.length - 1] = height[height.length - 1];
    for (let i = 1; i < height.length; i++) {
        leftmax[i] = Math.max(leftmax[i - 1], height[i]);
    }
    for (let i = height.length - 2; i >= 0; i--) {
        rightmax[i] = Math.max(leftmax[i + 1], height[i]);
    }

    let result = 0;
    for (let i = 0; i < height.length - 1; i++) {
        result += Math.min(leftmax[i], rightmax[i]) - height[i];
    }
    return result;
};

// 问题就在这，假设两柱子分别为 i，j。那么就有 iLeftMax,iRightMax,jLeftMx,jRightMax 这个变量。
// 由于 j>i ，故 jLeftMax>=iLeftMax，iRigthMax>=jRightMax.
// 那么，如果 iLeftMax>jRightMax，则必有 jLeftMax >= jRightMax，所有我们能接 j 点的水。
// 如果 jRightMax>iLeftMax，则必有 iRightMax >= iLeftMax，所以我们能接 i 点的水。
// 而上面我们实际上只用到了 iLeftMax，jRightMax 两个变量，故我们维护这两个即可。（题解都没说清楚，就说个 LeftMax，RightMax，谁知道为什么就可以这么做了。)
const trap2point = function (height) {
    let result = 0;
    let leftMax = 0;
    let rightMax = 0;
    let i = 0;
    let j = height.length - 1;

    while (i + 1 < j) {
        rightMax = Math.max(rightMax, height[j]);
        leftMax = Math.max(leftMax, height[i]);

        if (leftMax > rightMax) {
            result += rightMax - height[j];
            j--;
        } else {
            result += leftMax - height[i];
            i++;
        }
    }
    return result;
};

// @lc code=end

