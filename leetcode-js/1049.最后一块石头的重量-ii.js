/*
 * @lc app=leetcode.cn id=1049 lang=javascript
 *
 * [1049] 最后一块石头的重量 II
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
    // 思路： 两个相消 取剩余数量，任意两者的差值会留下来继续相消除
    // 转换思路  如果要取剩余最小 ，那么需要将石头分成均等的两份 才会得到较小结果。
    const sum = stones.reduce((a, b) => a + b);
    const halfMax = sum - (sum >> 1);
    // 当前总重量一半的容器 能用石头组合出的最大重量
    const dp = new Array(halfMax + 1).fill(0);

    for (let i = 0; i < stones.length; i++) {
        for (let j = halfMax; j > 0; j--) {
            if (j >= stones[i]) {
                dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
            }
        }
    }
    
    return Math.abs(sum - 2 * dp[halfMax]);
};
// @lc code=end

