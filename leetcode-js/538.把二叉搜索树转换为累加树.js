/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
var convertBST = function (root) {

    let accVal = 0;
    function inOrderTraversal(curNode) {
        if (!curNode) return 0;
        if (curNode.right) {
            inOrderTraversal(curNode.right)
        }
        accVal += curNode.val;
        curNode.val = accVal;
        if (curNode.left) {
            inOrderTraversal(curNode.left)
        }
    }
    inOrderTraversal(root)
    return root
};
// @lc code=end

