/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(A, B) {
    const stack = [];
    const n = pushed.length;
    for (let i = 0, j = 0; i < n; i++) {
        stack.push(pushed[i]);
        while (stack.length && stack[stack.length - 1] === popped[j]) {
            stack.pop();
            j++;
        }
    }
    return !stack.length;

};
// @lc code=end

