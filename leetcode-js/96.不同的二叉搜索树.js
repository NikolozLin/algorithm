/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
const cache=[0,1,2]
/**
 * @param {number} n
 * @return {number}
 */
// 原始解答
// var numTrees = function(n) {
//     if(cache[n]!=undefined) return cache[n]
//     // if(n<=2) return n;
//     let count=0;
//     for(let i=1;i<=n;i++){
//         let left = numTrees(i-1)
//         let right = numTrees(n-i)
//         if(left&&right){
//             count+=left*right;
//         }else if(!left){
//             count+=right;
//         }else{
//             count +=left;
//         }
//     }
// return count
// };

// dp
var numTrees= function(n) {  
    const G = new Array(n + 1).fill(0);
    G[0] = 1;
    G[1] = 1;

    for (let i = 2; i <= n; ++i) {// i 根节点个数
        for (let j = 1; j <= i; ++j) { // 根节点位置
            G[i] += G[j - 1] * G[i - j];
        }
    }
    return G[n];
}

// @lc code=end

numTrees(3)