/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    const dp=[nums[0]]
    let max =nums[0]
    for(let i=1;i<nums.length;i++){
        dp[i]=Math.max((dp[i-1]+nums[i]),nums[i])
        max=Math.max(max,dp[i])
    }
   return max

};

// ================================== 使用线段树进行求解=====================
function Status(l, r, m, i) {
    this.lSum = l; // 区间内 包含左端点的最大子段和
    this.rSum = r; // 区间内 包含右端点的最大子段和
    this.mSum = m; // 区间内最大子段和
    this.iSum = i;//区间总和

}

// 合并左右边节点
const pushUp = (l, r) => {
    const iSum = l.iSum + r.iSum;
    const lSum = Math.max(l.lSum, l.iSum + r.lSum);
    const rSum = Math.max(r.rSum, r.iSum + l.rSum);
    const mSum = Math.max(Math.max(l.mSum, r.mSum), l.rSum + r.lSum)

    return new Status(lSum, rSum, mSum, iSum)

}
const getInfo = (arr, l, r) => {
    if (l === r) return new Status(arr[l], arr[l], arr[l], arr[l]);
    const m = l + r >> 1;
    const LStatus = getInfo(arr, l, m);
    const RStatus = getInfo(arr, m + 1, r);
    return pushUp(LStatus, RStatus)
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

    return getInfo(nums, 0, nums.length - 1).mSum

};

// @lc code=end

