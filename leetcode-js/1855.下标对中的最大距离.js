/*
 * @lc app=leetcode.cn id=1855 lang=javascript
 *
 * [1855] 下标对中的最大距离
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function(nums1, nums2) {
    let max = 0;
    for (let i = 0; i < nums1.length; i++) {
        let l = i - 1;
        let r = nums2.length;
        while (l + 1 < r) {
            const mid = l + r >> 1;
            if (nums2[mid] >= nums1[i]) {
                l = mid;
            } else {
                r = mid;
            }
        }
        if (l >= i && l < nums2.length) {
            max = Math.max((l - i), max);
        }
    }
    return max;
};
// @lc code=end

