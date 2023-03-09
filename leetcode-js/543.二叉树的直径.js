/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {

    let result = 0; // 遍历过程中最大直径
    //返回当前节点的最大深度 的节点个数
    function dfs(node) {
        if (!node) return 0;
        let Ldep = dfs(node.left);
        let Rdep = dfs(node.right);
        result = Math.max(Ldep + Rdep + 1, result)
        return Math.max(Ldep, Rdep) + 1
    }

    dfs(root)

    return result - 1;

};
// @lc code=end

