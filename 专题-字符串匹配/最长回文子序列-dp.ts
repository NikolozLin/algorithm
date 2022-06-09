/**
 * @param {string} s
 * @return {string}
 */
 const longestPalindromeSubseqDP = function (s:string) {

    // 初始化
    const strArr = [...s];
    const dp = new Array(s.length).fill(0)
    dp[s.length - 1] = 1

    for (let i = s.length - 1; i >= 0; i--) {

        let temp = dp[i]//前一层j-1 的位置
        dp[i]=1
        for (let j = i + 1; j < s.length; j++) {
            const newtemp=dp[j]
            if (strArr[i] == strArr[j]) {
               
                dp[j] = temp + 2
               
            } else {
                dp[j] = Math.max(dp[j], dp[j - 1])
            }
            temp=newtemp
        }
        console.log(dp);
    }
    console.log(dp);
    return dp[s.length - 1]
}