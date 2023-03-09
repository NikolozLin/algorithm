/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(root!=null&&root.left!==root.right){
    const result= new TreeNode(0,null,null)
    let node=result;
    //Morris 遍历二叉树

    let cur =root;
    let mostRight=null;

    while(cur!=null){
        //列表化
      
        mostRight=cur.left;
        if(mostRight!=null){
            // 指向左子树最右
            while(mostRight.right!=null&&mostRight.right!==cur){
                mostRight=mostRight.right;
            }
            //第一次来到左子树最右点 ，索引到cur
            if(mostRight.right==null){
                node.right = new TreeNode(cur.val,null,null);
                node=node.right;


                mostRight.right=cur;
                cur=cur.left;
            
            }else{
                mostRight.right=null
                cur= cur.right;

            }
            continue;
        }
        node.right = new TreeNode(cur.val,null,null);
        node=node.right;

        cur= cur.right;
    }

// console.log(root)
// console.log(result.right)
root.left=null
root.right=result.right.right
// root=result.right;
}
};
// @lc code=end

