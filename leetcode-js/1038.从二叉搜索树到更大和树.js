/*
 * @lc app=leetcode.cn id=1038 lang=javascript
 *
 * [1038] 从二叉搜索树到更大和树
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
var bstToGst = function(root) {

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

