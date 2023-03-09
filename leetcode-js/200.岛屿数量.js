/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const width = grid[0].length;
    const height = grid.length;

    let result = 0;

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 上下左右

    // 将给定i j 有关联的
    function bfs(i, j) {
        if (i < 0 || j < 0 || i >= height || j >= width) return;
        // if (i >= height || j >= width) return;
        if (grid[i][j] == '0') return;

        grid[i][j] = '0';
        for (const [addX, addY] of directions) {
            bfs(i + addX, j + addY);
        }
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (grid[i][j] == '1') {
                result += 1;
                bfs(i, j);
            }
        }
    }
    return result;

};
// @lc code=end

