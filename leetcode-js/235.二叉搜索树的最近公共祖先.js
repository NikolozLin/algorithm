/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {

    let cur= root ;
    let pv=p.val;
    let qv=q.val;

    while(cur){
        let val=cur.val
        if(val>pv&&val>qv){
            cur=cur.left;
        }else if(val<pv&&val<qv){
            cur=cur.right;
        }else{
            return cur;
        }
    }
    
};
// @lc code=end

