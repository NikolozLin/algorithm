/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {

    let result=0;
    let xorStr=( x ^ y).toString('2');
    for(let i=0;i<xorStr.length;i++){
        if(xorStr.charAt(i)==='1') result++;
    }
    return result
};
// @lc code=end

