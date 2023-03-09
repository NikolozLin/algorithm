/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let flag = false;

    const use = new Array(board.length).fill(0).map(() => new Array(board[0].length).fill(0));
    const bottom = board.length;
    const right = board[0].length;
    /**
     * @param {*} i 最后一个字符左边 i
     * @param {*} j 最后一个字符左边 i
     * @param {*} strIdx 下一个字符的 index
     * @param {*} use
     * @returns
     */
    function dfs(i, j, strIdx) {
        if (flag) return true;
        if (strIdx === word.length) {
            flag = true;
            return true;
        }

        // 上
        if (i > 0 && use[i - 1][j] === 0 && board[i - 1][j] === word.charAt(strIdx)) {
            use[i - 1][j] = 1;
            dfs(i - 1, j, strIdx + 1);
            use[i - 1][j] = 0;
        }
        // 下
        if (i < bottom - 1 && use[i + 1][j] === 0 && board[i + 1][j] === word.charAt(strIdx)) {
            use[i + 1][j] = 1;
            dfs(i + 1, j, strIdx + 1);
            use[i + 1][j] = 0;
        }

        // 左
        if (j > 0 && use[i][j - 1] === 0 && board[i][j - 1] === word.charAt(strIdx)) {
            use[i][j - 1] = 1;
            dfs(i, j - 1, strIdx + 1);
            use[i][j - 1] = 0;
        }
        // 右
        if (j < right - 1 && use[i][j + 1] === 0 && board[i][j + 1] === word.charAt(strIdx)) {
            use[i][j + 1] = 1;
            dfs(i, j + 1, strIdx + 1);
            use[i][j + 1] = 0;
        }

        return false;
    }
    for (let i = 0; i < bottom; i++) {
        if (flag) break;
        for (let j = 0; j < right; j++) {
            if (flag) break;
            if (board[i][j] === word.charAt(0)) {
                use[i][j] = 1;
                dfs(i, j, 1);
                use[i][j] = 0;
            }
        }
    }
    // console.log(flag);
    return flag;

};
// @lc code=end

