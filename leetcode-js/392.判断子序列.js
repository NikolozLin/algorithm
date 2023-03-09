/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(!s.length) return true
    let p1=0;
    let p2=0;
    
    while(p1<s.length&&p2<t.length){

        if(s.charAt(p1)===t.charAt(p2)){
            p1++;
            p2++
        }else{
            p2++
        }
    }

    return p1===s.length

};
// 进阶挑战 ： 多个S 单个T
// 预处理T 维护一个 dp[i][j] 存储字符串T的i位置下 下一个j字母出现的位置。 
// 表格从 i的末尾向前生成
function isSubsequence2( s,  t) {

    // 预处理
    t = " " + t; // 开头加一个空字符作为匹配入口
    const n = t.length;
    // int[][] dp = new int[n][26]; // 记录每个位置的下一个ch的位置
    const dp = new Array(n).fill(0).map(()=>new Array(26).fill('#'))

    for (let ch = 0; ch < 26; ch++) {
        let p = -1;
        for (let i = n - 1; i >= 0; i--) { // 从后往前记录dp
            dp[i][ch] = p;
            if (t.charCodeAt(i) == ch + 'a'.charCodeAt()) p = i;
        //    console.table(dp) 
        }
    }
    // 匹配
    let i = 0;
    for (let ch of [...s]) { // 跳跃遍历
        i = dp[i][ch.charCodeAt() - 'a'.charCodeAt()];
        if (i == -1) return false;
    }
    return true;
}

// ==================== dp
function isSubsequence3(s, t) {
    if (s.length === 0) return true;
    s = ' ' + s;
    t = ' ' + t;
    const tLen = t.length;
    const sLen = s.length;
    //martix[sLen+1][tLen+1]
    const dp = new Array(sLen).fill(0).map(() => new Array(tLen).fill(0, 0, 1))
    dp[0] = new Array(tLen).fill(0);

    for (let i = 1; i < sLen; i++) {
        for (let j = 1; j < tLen; j++) {
            if (t.charAt(j) === s.charAt(i)) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = dp[i][j - 1]
            }
        }
    }
    // console.table(dp)

    // 最长公共子序列 然后判断 短的那个是否全匹配
    return dp[sLen - 1][tLen - 1] == s.length-1
}
// @lc code=end

