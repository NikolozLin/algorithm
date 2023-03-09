/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    if (numCourses === 1) return [0];

    // 下标对应的set中存储 当前下标 的前驱节点  ≈ 入度的节点
    const edges = new Array(numCourses).fill(0).map((i) => new Set());
    const visited = new Array(numCourses).fill(0); // 0 未访问 1；访问中 2；访问完成
    const result = [];
    let valid = true;// 判断是否有环

    // 初始化 每个节点的 前驱节点。 前驱节点的个数既为入度
    for (const [A, B] of prerequisites) {
        edges[B].add(A);
    }
    function dfs(i) {
        visited[i] = 1;
        for (const item of edges[i]) {
            if (visited[item] == 0) {
                dfs(item);
                if (!valid) return;
            } else if (visited[item] == 1) {
                valid = false;
                return;
            }
        }
        visited[i] = 2;
        result.push(i);
    }

    for (let i = 0; i < numCourses; i++) {
        if (visited[i] == 0) {
            dfs(i);
        }
    }

    if (!valid) {
        return [];
    }
    return result.reverse();

};
// @lc code=end

