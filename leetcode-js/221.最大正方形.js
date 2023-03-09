/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    // if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
    //     return maxSide;
    // }
    // dp[i][j] 表示当前 i j 位置为右下角，全为1 的正方形边长
    const dp= new Array(matrix.length).fill(0).map(i=> new Array(matrix[0].length).fill(0));
    let max=0; 
    for(let i =0;i <matrix.length;i++){
        for(let j =0; j<matrix[0].length;j++){
            if(matrix[i][j]==1){
                if(i==0||j==0){
                    dp[i][j]=1;
                }else{   
                    dp[i][j]=Math.min(dp[i-1][j-1],Math.min(dp[i-1][j],dp[i][j-1])) +1
                }
            }
            max=Math.max(max,dp[i][j])

        }
    }
    
    return max*max


};
// @lc code=end

