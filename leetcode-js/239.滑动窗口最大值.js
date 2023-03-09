/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const result = []; // 大小 nums.length -k
    let idx = 0;
    // 双端队列 大到小 的下标,如果新的值改变单调性 需要弹出里面的值
    const queue = [];
    for (let i = 0; i < nums.length; i++) {
        // 窗口右移 保持队列是降序，如果队尾小于新加入的值 则抛弃
        while (queue.length && nums[queue[queue.length - 1]] <= nums[i]) {
            queue.pop();
        }
        queue.push(i);
        if (queue[0] < i - k + 1) { // 窗口移动后 最大值下标不在窗口内需要删除
            queue.shift();
        }
        if (i >= k - 1) {
            result[idx++] = nums[queue[0]];
        }
    }
    return result;
};
// @lc code=end

