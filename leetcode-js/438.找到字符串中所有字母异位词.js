/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const reusltIdx = [];
    const map = new Map();
    [...p].forEach((item) => {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1);
        } else {
            map.set(item, 1);
        }
    });

    let need = p.length;
    let l = 0;
    let r = -1;

    while (++r < s.length) {
        const ch = s.charAt(r); // 新加的值

        if (map.has(ch)) {
            if (map.get(ch) > 0) {
                need--;
            }
            map.set(ch, map.get(ch) - 1);
        }

        while (need === 0) {
            if ((r - l + 1) === p.length ) {
                reusltIdx.push(l);
            }
            const ch = s.charAt(l); // 新加的值
            if (map.has(ch)) {
                if (map.get(ch) >= 0) { // 只有单窗口右移， get的值为负值 表示多的重复ch 。0 表示刚好满足p中 ch 的个数
                    need++;
                }
                map.set(ch, map.get(ch) + 1);
            }
            l++;
        }
    }
    return reusltIdx;

};
// @lc code=end

