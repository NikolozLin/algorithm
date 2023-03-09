/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    const peoples = people.sort((a, b) => {
        return (a[0] !== b[0]) ? b[0] - a[0] : a[1] - b[1]
    });

    const len = peoples.length;
    const result = [];
    for (let i = 0; i < len; i++) {
        const item = peoples[i]
        if (result.length > item[1]) {
            result.splice(item[1], 0, item)
        } else[
            result.push(item)
        ]
    }
    return result;
};
// @lc code=end

