/*
 * @lc app=leetcode.cn id=1277 lang=javascript
 *
 * [1277] 统计全为 1 的正方形子矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {

    // dp[i][j] 表示当前 i j 位置为右下角，全为1 的正方形边长
    const dp= new Array(matrix.length).fill(0).map(i=> new Array(matrix[0].length).fill(0));
    let ans=0; 
    for(let i =0;i <matrix.length;i++){
        for(let j =0; j<matrix[0].length;j++){
            if(matrix[i][j]==1){
                if(i==0||j==0){
                    dp[i][j]=1;
                }else{   
                    dp[i][j]=Math.min(dp[i-1][j-1],Math.min(dp[i-1][j],dp[i][j-1])) +1
                }
            }
             ans +=dp[i][j];  // 边长多少就能确定多少个正方形

        }
    }
    
    return ans

};
// @lc code=end

