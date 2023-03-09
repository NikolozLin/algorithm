/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) return s.length;
    let max = 0;
    const hasSet = new Set();
    let l = 0;
    let r = 0;

    while (r < s.length) {
        const ch1 = s.charAt(r); // 新加的值

        if (hasSet.has(ch1)) {
            max = Math.max(max, hasSet.size);
            while (l < r && s.charAt(l) !== ch1) { // 缩小窗口， 找到窗口左端ch 与新ch 相同
                const ch2 = s.charAt(l);
                hasSet.delete(ch2);
                l++;
            }
            l++;
            r++;
        } else {
            hasSet.add(ch1);
            r++;
        }
    }
    max = Math.max(max, hasSet.size); // s全部都不同
    return max;

};
// @lc code=end

