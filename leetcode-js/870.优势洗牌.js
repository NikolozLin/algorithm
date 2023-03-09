/*
 * @lc app=leetcode.cn id=870 lang=javascript
 *
 * [870] 优势洗牌
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {

     // 遍历b A中找到刚好大于B的数 没有的话取A 最小值
     nums1.sort((a, b) => a - b);
     const result = [];
     for (let i = 0; i < nums2.length; i++) {
         let idx = 0;
         while (idx < nums1.length && nums1[idx] <= nums2[i]) {
             idx++;
         }
         if (idx === nums1.length) {
             result.push(nums1[0]);
             nums1.splice(0, 1);
         } else {
             result.push(nums1[idx]);
             nums1.splice(idx, 1);
         }
     }
 
     return result;
};
// @lc code=end

