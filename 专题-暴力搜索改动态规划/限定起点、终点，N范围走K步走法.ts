
// /**
//  * 
//  * @param N  范围
//  * @param e 终点
//  * @param s 起点
//  * @param k 步数
//  */
// function walkWays(N: number, e: number, s: number, k: number) {
//     walkStep(N, e, k, s)

// }
// /**
//  * 
//  * @param N 范围
//  * @param e 终点
//  * @param rest 剩余步数
//  * @param cur 当前位置
//  */
// function walkStep(N: number, e: number, rest: number, cur: number):number {
//     if (rest == 0) {
//         return e == cur ? 1 : 0
//     }
//     if (cur == 1) {
//         return walkStep(N, e, rest - 1, 2)
//     }
//     if (cur == N) {
//         return walkStep(N, e, rest - 1, N - 1)
//     }
//     return walkStep(N, e, rest - 1, cur + 1) + walkStep(N, e, rest - 1, cur + 1)
// }


/////////////////////////////////dp  
/**
 * 
 * @param N 范围
 * @param E 终点
 * @param S 起点
 * @param K 步数
 */
function dpWalkWays(N: number, E: number, S: number, K: number) {


    // 填充K=0的行
    const k0row: number[] = [];
    k0row.length = (N + 1);
    k0row.fill(0)
    k0row[E] = 1

    const dp: number[][] = [k0row]; //1～K行，0～N列的表格,表格内表示K步走到终点E的可能性

    for (let i = 1; i <= K; i++) {
        dp[i] = [0]
        for (let j = 1; j <= N; j++) {
            if (j == 1) {
                dp[i][j] = dp[i - 1][2]
            } else if (j == N) {
                dp[i][j] = dp[i - 1][N-1]
            } else {
                dp[i][j] = dp[i - 1][j-1] +dp[i - 1][j+1] 
            }
        }
    }
    console.table(dp)
    return dp[K][S]
}

dpWalkWays(5,4,2,4)