// leetcode 322 最少硬币数，
// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回-1 。你可以认为每种硬币的数量是无限的。
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 返回找零的最少硬币数
 const coinChange = function(coins:number[], amount:number) {
    return tryStep(coins,0,amount)
};
/**
 *  暴力
 * @param arr 硬币组合
 * @param index 可以使用index及以后的硬币数
 * @param rest 数据待处理钱数
 * @returns 返回当前条件下组合的最少硬币数
 */
function tryStep(arr:number[],index:number,rest:number){

    if(index==arr.length){
        return rest==0?0:-1
    }
    let minCoins=Infinity
    for(let c=0;c*arr[index]<=rest;c+=1){
        const num= tryStep(arr,index+1,rest-c*arr[index]);
        if(num==-1) continue;
        minCoins= num+c < minCoins
         ?num+c:minCoins
    }
 return minCoins!=Infinity?minCoins:-1
}


// -----------------------------      pd        -----------------
const dpcoinChange = function (coins: number[], amount: number): number {
    coins = coins.sort((a, b) => b - a)
    // dp[index][rest]  index * rest
    const dp = []
    //初始化
    for (let i = 0; i <= coins.length; i++) {
        dp[i] = [0]
    }
    for (let i = 1; i <= amount; i++) {
        dp[coins.length][i] = Infinity
    }
    // dp[coins.length].fill(Infinity,1,amount)
    console.table(dp)
    //3.寻找某位置依赖项
    for (let i = coins.length - 1; i >= 0; i--) {
        for (let j = 1; j <= amount; j++) {
            if (coins[i] <= j) {
                dp[i][j] = Math.min((dp[i][j - coins[i]] + 1), dp[i + 1][j])
            } else {
                dp[i][j] = dp[i + 1][j]
            }
        }
    }
    // console.table(dp)
    return dp[0][amount]
}



// -----------------------------      pd    进一步优化，减少 使用空间 和重复代码    -----------------
// 从原始dp看 自下而上，每层都依赖下一层，
// 当coins[i]> 剩余钱数j，那么当前位置的等于 dp[i+1][j]的使用硬币数。如果使用一个一位数组的话，j位置相同 那么久不用进行任何复值操作。
// 所以可以将二维的dp表，变成长度为amount+1 长度数组记录最少硬币数
function coinChangePerfect(coins: number[], amount: number): number {

    // 初始化
    const dp = new Array(amount+1).fill(Infinity)
    dp[0]=0

    for (let i = coins.length - 1; i >= 0; i--) {
        for (let j = 1; j <= amount; j++) {
            if (coins[i] <= j) {
                dp[j] = Math.min((dp[j - coins[i]] + 1), dp[j])
            } 
        }
    }
    // console.log(dp.toString())
    return dp[amount]==Infinity?-1:dp[amount]
}

// coinChange([1,2,5,6,10,11],12)
coinChange([397,417,24,44,235],3383)
dpcoinChange([397,417,24,44,235],3383)
coinChangePerfect([397,417,24,44,235],3383)