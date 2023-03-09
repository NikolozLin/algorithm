/*
 * @lc app=leetcode.cn id=301 lang=javascript
 *
 * [301] 删除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
// 当前版本 拼接字符串 数据贵更快
    let result = [];
    // const path = [];
    const strArr = [...s];


    function loop(idx, noMatchL, path) {
        if (idx === s.length) {
            if (!noMatchL) {
                if (path.length > (result?.[0]?.length ?? 0)) {
                    result = [path.join('')]
                } else if (path.length == (result?.[0]?.length ?? 0)) {
                    result.push(path.join(''))
                }
            }
            return;
        }

        const ch = strArr[idx];
        if (ch === '(') {
            path.push(ch);
            loop(idx + 1, noMatchL + 1, path)
            path.pop()
            loop(idx + 1, noMatchL, path);
        } else if (ch == ')') {
            if (noMatchL > 0) {
                path.push(ch);
                loop(idx + 1, noMatchL - 1, path);
                path.pop();
            }
            loop(idx + 1, noMatchL, path);
        } else {
            path.push(ch);
            loop(idx + 1, noMatchL, path);
            path.pop();
        }
    }
    loop(0, 0, [])

    const ans = result.length ? [... new Set(result)] : ['']
    return ans
};
// @lc code=end

removeInvalidParentheses(")(f")