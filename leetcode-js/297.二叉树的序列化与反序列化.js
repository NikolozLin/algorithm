/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (root===null) return '#*'; // 可能存在负数  表示结尾用其他符号不能用 减号
    let result = root.val + '*'
    const left = serialize(root.left);
    const right = serialize(root.right);

    result += left + right

    return result
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {

    const nodeArrs = data.split('*');

    function dfs(arr) {
        //   if(!arr.length)return 
        const cur = arr.shift()
        if (cur === "#") return null;

        const curNode = new TreeNode(cur);
        if(arr.length){

            curNode.left = dfs(arr)
        }
        if(arr.length){

            curNode.right = dfs(arr)
        }
        return curNode

    }
    return dfs(nodeArrs)

};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

