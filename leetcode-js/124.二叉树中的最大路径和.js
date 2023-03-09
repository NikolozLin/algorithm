/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function (root) {
    let max = -Infinity;
    function findpathmax(root) {
        if (root === null) return 0;
        //如果是负的路径 就不要
        const subLeft =  Math.max(findpathmax(root.left),0);
        const subright = Math.max(findpathmax(root.right),0);

        max=Math.max(max,(subLeft+subright+root.val))

        // 返回路径最大贡献
        return Math.max(subLeft, subright) + root.val; // 通过根节点的半个路径的最大距离

    }
    findpathmax(root);
    return max

};

// @lc code=end

