/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!preorder.length && !inorder.length) return null;
    if (preorder.length === inorder.length && preorder.length === 1) return (new TreeNode(preorder[0], null, null));
    const rootNum = preorder[0]; // 根节点
    const inRootIdx = inorder.findIndex((item) => item === rootNum);// 根节点在 inorder位置



    // 左子树
    let sub_left_pre = []
    let sub_left_in = []
    // 右子树
    let sub_right_pre = []
    let sub_right_in = []
    sub_left_pre = preorder.slice(1, inRootIdx + 1)
    sub_left_in = inorder.slice(0, inRootIdx)
    sub_right_pre = preorder.slice(inRootIdx + 1)
    sub_right_in = inorder.slice(inRootIdx + 1)


    const root = new TreeNode(rootNum, null, null);
    const subLeft = buildTree(sub_left_pre, sub_left_in)
    const subRight = buildTree(sub_right_pre, sub_right_in)
    root.left = subLeft;
    root.right = subRight;

    return root;


};
// @lc code=end
