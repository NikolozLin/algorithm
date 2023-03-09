/*
 * @lc app=leetcode.cn id=1095 lang=javascript
 *
 * [1095] 山脉数组中查找目标值
 */

// @lc code=start
/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
 var findInMountainArray = function (target, mountainArr) {
    const len = mountainArr.length();
    let l = 0
    let r = len - 1;

    while (l < r) {
        let mid = l + r >> 1
        if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
            l = mid + 1;
        } else {
            r = mid
        }
    }
    let peak = l

    let resultLeft = binarySearch(mountainArr, target, 0, peak, true);
    if (resultLeft !== -1) return resultLeft;
    return binarySearch(mountainArr, target, peak+1, len - 1, false);
};

const binarySearch = function (mountainArr, t, left, right, flag) {
    const len = mountainArr.length();
    let l = left
    let r = right;

    while (l <= r) {
        let mid = l + r >> 1
        if (mountainArr.get(mid) === t) return mid;
        if (flag) {// 升序
            if (t < mountainArr.get(mid)) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        } else {
            if (t > mountainArr.get(mid)) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
    }
    return -1
}
// @lc code=end

