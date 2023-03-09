/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    //初始化两个根节点队列，一次取两个点，进行层次遍历， 左右树塞入队列时，一左一右对称添加入队列
    let flag=true
    const queue=[root,root];

    while(flag&&queue.length){

        const node1=queue.shift();
        const node2=queue.shift();
        if(!node1&&!node2)continue;

        if((!node1||!node2)||node1.val!==node2.val) return false;
        queue.push(node1.left,node2.right);
        queue.push(node1.right,node2.left);
    }

    return true;
};
// @lc code=end

