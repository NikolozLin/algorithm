/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
var rob = function(root) {
    function loop(node) {
        if (node === null) return [0, 0];
        const subL = loop(node.left);
        const subR = loop(node.right);

        const use = node.val + subL[0] + subR[0];
        const noUse = Math.max(subL[0], subL[1]) + Math.max(subR[0], subR[1]);
        return [noUse, use];
    }
    const result = loop(root);
    return Math.max(result[0], result[1]);

};
// @lc code=end

