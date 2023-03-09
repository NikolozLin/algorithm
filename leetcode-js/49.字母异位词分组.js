/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

    const sortStrArr = strs.map(item => [... item].sort().join(''))

    const strMap = new Map();
    for (let i = 0; i < sortStrArr.length; i++){
        if (strMap.has(sortStrArr[i])) {
            strMap.get(sortStrArr[i]).push(strs[i])
        } else {
            strMap.set(sortStrArr[i], [strs[i]])
        }

    }


    return [...strMap.values()]

};
// @lc code=end
