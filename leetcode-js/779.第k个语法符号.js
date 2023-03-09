/*
 * @lc app=leetcode.cn id=779 lang=javascript
 *
 * [779] 第K个语法符号
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
    // 可以假设当前节点为 1 计算路径直接逆推 父亲节点。
    //如果推到根节点为0，则第k个节点为1 ， 反之 为 0；
    // 上述过程较少内存使用。


    // 转化为完全二叉树的序号
    let idx = 2 ** (n - 1) - 1 + k - 1;
    const path = []; // 计算路径
    while (--n) {
        if (idx / 2 == idx >> 1) {
            // 没有 余数 是father 的右
            path.push(1);
        } else {
            path.push(0);
        }
        idx = (idx - 1) >> 1;
    }

    let father = 0;
    while (path.length) {
        let option = path.pop();
        if (father) {
            // 10
            father = [1, 0][option];
        } else {
            // 01
            father = [0, 1][option];
        }
    }
    return father;

};

// ====================== 官方=============
function Kth(n,k){
    if(n==1) return 0
    if(k<=(1<<(n-2))){//在前半段
        return Kth(n-1,k)
    }
    return Kth(n-1, k-(1<<(n-2))) ^1;
}
// @lc code=end
