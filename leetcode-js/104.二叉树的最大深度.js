/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
    if (!root) return 0 ;
    let level = 0;
    let queue = [root];
    let nextQueue = [];

    while (queue.length || nextQueue.length) {
        while (queue.length) {
            const node = queue.shift();
            if (node.left) nextQueue.push(node.left)
            if (node.right) nextQueue.push(node.right)
        }
        level++
        queue = nextQueue;
        nextQueue = [];
    }
    return level;

};
// @lc code=end

