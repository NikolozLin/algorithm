/**
 * @param {string} s
 * @return {string}
 */
 const longestPalindrome = function(str:string) {
    const strArr = [...str]
    const dp = new Array(str.length).fill(-1)

    dp[str.length - 1] = 1
    // 初始化

    let maxlen = 0
    let strL = 0
    let strR = 0
    // 遍历
    for (let i = str.length - 1; i >= 0; i--) {
        
        for (let j = str.length - 1; j > i; j--) {
            if (dp[(j - 1)] >0 && strArr[i] === strArr[j]) {//
                dp[j] = j - i + 1
                if (dp[j] >= maxlen) {
                    maxlen = dp[j]
                    strL = i
                    strR = j
                }
            } else {
                dp[j] = -1
            }
        }
        dp[i] = 1
    }
    return strArr.slice(strL,strR+1).join('')
}

console.log(longestPalindrome("aacabdkacaa"))