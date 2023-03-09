/*
 * @lc app=leetcode.cn id=687 lang=javascript
 *
 * [687] 最长同值路径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function (root) {

    let result = 1;

    function dfs(node) {
        if (!node) return [0, null]

        let Ldep = dfs(node.left);
        let Rdep = dfs(node.right);

        if (node.val === Ldep[1] && node.val === Rdep[1]) {
            result = Math.max(Ldep[0] + Rdep[0] + 1, result)
            return [Math.max(Ldep[0], Rdep[0]) + 1, node.val]
        }

        if (node.val === Ldep[1]) {
            result = Math.max(Ldep[0] + 1, result)
            return [Ldep[0] + 1, node.val]
        }

        if (node.val === Rdep[1]) {
            result = Math.max(Rdep[0] + 1, result)
            return [Rdep[0] + 1, node.val]
        }


        return [1, node.val]
    }
    dfs(root)

    return result - 1;
};
// @lc code=end

