/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function(root) {
    // 搜索二叉树 中序号遍历是严格生序
    let flag=true;
    let prevalue=-Infinity;
    const stack=[];
    let node =root;

    while(  node !=null ||stack.length){
        if(node!=null){
            stack.push(node);
            node =node.left
        }else{
            node=stack.pop()
            if(prevalue>=node.val) {
                flag=false;
                break;
            }
            prevalue=node.val;
            node=node.right;

        }
    }
return flag


};
// @lc code=end

