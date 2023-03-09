/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
    const queue=[root];
    const fatherMap= new Map();
    fatherMap.set(root.val,null)

    while(queue.length){
        const cur =queue.shift();
        if(cur.left) {
            queue.push(cur.left)
            fatherMap.set(cur.left,cur)
        }
        if(cur.right) {
            queue.push(cur.right)
            fatherMap.set(cur.right,cur)
        }
    }

    let presentSet= new Set();
    presentSet.add(p)
    let cur=p;
    while(cur){
        let father =fatherMap.get(cur);
        presentSet.add(father);
        cur=father;
    }

    if(presentSet.has(q))return q;

    cur=q
    while(cur){
        let father =fatherMap.get(cur);
        if(presentSet.has(father))return father;
        presentSet.add(father);
        cur=father;
    }

};
// @lc code=end

