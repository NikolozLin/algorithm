/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const map = new Map();
    [...s1].forEach((item) => {
        if (!map.has(item)) {
            map.set(item, 1);
        } else {
            map.set(item, map.get(item) + 1);
        }
    });

    let need = s1.length;
    let l = 0;
    let r = -1;
    while (++r < s2.length) {
        const ch = s2.charAt(r);
        if (map.has(ch)) {
            if (map.get(ch) > 0) {
                need--;
            }
            map.set(ch, map.get(ch) - 1);
        }

        while (need === 0) {
            if (r - l + 1 === s1.length) return true;

            const ch2 = s2.charAt(l);
            if (map.has(ch2)) {
                if (map.get(ch2) >= 0) {
                    need++;
                }
                map.set(ch2, map.get(ch2) + 1);
            }
            l++;
        }
    }
    return false;
};
// @lc code=end

