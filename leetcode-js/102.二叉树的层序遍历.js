/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    const result = [];
    let queue = [root];
    let nextQueue = [];

    while (queue.length || nextQueue.length) {
        const nextValue = []
        while (queue.length) {
            const node = queue.shift();
            nextValue.push(node.val);
            if (node.left) nextQueue.push(node.left)
            if (node.right) nextQueue.push(node.right)
        }
        result.push(nextValue)
        queue = nextQueue;
        nextQueue = [];
    }
    return result;

};
// @lc code=end

