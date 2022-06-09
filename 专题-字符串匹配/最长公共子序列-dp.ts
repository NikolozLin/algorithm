/**
 * @param {string} s
 * @return {string}
 */
 const longestComonSubseq = function (str1,str2) {

    const s1=[...str1]
    const s2=[...str2]
    const dp= []
    
    // 初始化
    dp.push((new Array(s2.length+1).fill(0)))
    for(let i=1;i<=s1.length;i++){
        dp.push((new Array(s2.length+1).fill(0,0,1)))
    }
    //计算
    for(let i=1;i<=s1.length;i++){
        for(let j=1;j<=s2.length;j++){
            if(s1[i-1]==s2[j-1]){
                dp[i][j]=dp[i-1][j-1]+1
            }else{
                dp[i][j]=Math.max(dp[i][j-1],dp[i-1][j])
            }
        }
    }
console.table(dp)
    return dp[s1.length][s2.length]
}



// 空间优化
const longestComonSubseq2 = function (str1,str2) {

    const s1=[...str1]
    const s2=[...str2]
    const dp= new Array(s2.length+1).fill(0)

    //计算
    for(let i=1;i<=s1.length;i++){
        let temp=0 // i-1 j-1 位置的值
        for(let j=1;j<=s2.length;j++){
            const newTemp=dp[j]
            if(s1[i-1]==s2[j-1]){
                dp[j]=temp+1
            }else{
                dp[j]=Math.max(dp[j-1],dp[j])
            }
            temp=newTemp

        }
        console.table(dp)
    }

    return dp[s2.length]
}
const result = longestComonSubseq2('ABCBDAB','BDCABA')
console.log(result);