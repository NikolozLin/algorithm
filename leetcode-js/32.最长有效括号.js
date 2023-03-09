/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let max = 0;
    const stack = [-1];
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (!stack.length) {
                stack.push(i);
            } else {
                max = Math.max(max, i - stack[stack.length - 1]);
            }
        }
    }
    return max

};

/**
 * @param {string} s
 * @return {number}
 */
 const longestValidParenthesesDP = function (s) {
    const len = s.length;
    let max = 0;
    const dp = new Array(len).fill(0);

    for (let i = 1; i < len; i++) {
        if (s.charAt(i) === ')') { // 只有 ）结束的位置才能算是有效的字符长度
            if (s.charAt(i - 1) === '(') { // 前一位为（
                dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
            } else if (i - dp[i - 1] > 0 && s.charAt(i - dp[i - 1] - 1) === '(') { // 前一位为） 且 对应匹配`i-dp[i-1]-1`位置为（
                dp[i] = dp[i - 1] + ((i - dp[i - 1]) >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
            }
            max = Math.max(max.dp[i]);
        }
    }

    return max;
};

// @lc code=end

