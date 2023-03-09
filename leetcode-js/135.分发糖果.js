/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    const len = ratings.length;
    const candyArr = new Array(len);
    candyArr[0] = 1
    for (let i = 1; i < len; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candyArr[i] = candyArr[i - 1] + 1;
        } else if (ratings[i] < ratings[i - 1] && candyArr[i - 1] === 1) {
            for (let j = i - 1; j >= 0; j--) {
                candyArr[j] += 1;
                //判断是否需要继续递增
                if (ratings[j - 1] > ratings[j] && candyArr[j - 1] <= candyArr[j]) {
                    continue
                }
                break;
                // // 分数相同
                // if(ratings[j]===ratings[j+1])  break;
                //   //左侧比当前小 不用递增
                // if(ratings[j]<ratings[j+1]) break;// 分数相同
                // if(candyArr[j]>candyArr[j+1]) break; // 当前糖果数比右侧的多 

            }
            candyArr[i] = 1;

        } else {
            candyArr[i] = 1;
        }
    }
    return candyArr.reduce((a, b) => a + b)

};
// @lc code=end
//答案
// 题意得，相邻位置分数高的那多的糖果，则需要分别和当前位置左边右边进行比较。
// 两次遍历， 
// 从左到右，计算当前位置应该比左边多的糖果数
// 从右到左。计算当前位置应该比右边多的糖果数
// 结合两次结果取最大值。
var candy1 = function (ratings) {
    const n = ratings.length;
    const left = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        if (i > 0 && ratings[i] > ratings[i - 1]) {
            left[i] = left[i - 1] + 1;
        } else {
            left[i] = 1;
        }
    }

    let right = 0, ret = 0;
    for (let i = n - 1; i > -1; i--) {
        if (i < n - 1 && ratings[i] > ratings[i + 1]) {
            right++;
        } else {
            right = 1;
        }
        ret += Math.max(left[i], right);
    }
    return ret;
}