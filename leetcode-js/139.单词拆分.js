/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    
    const wordMap= new Map();
    wordDict.forEach(element => {
        const ch =element.charAt(0)
        if(!wordMap.has(ch )){
            wordMap.set(ch,[element])
        }else{

            wordMap.set(ch, [...wordMap.get(ch),element])
        }
    });
const sCache= new Map();// 缓存结果不然超时

    function loop(s){
        if(sCache.has(s))return sCache.get(s);
        if(!s.length)return true;
        const ch=s.charAt(0)
        if(wordMap.has(ch)){
            const pattenStr= wordMap.get(ch)
            for(const item of pattenStr){
                const substr=s.slice(0,item.length)    
                if(substr===item){
                    // 有成功的匹配的 就返回 没有继续执行
                    if(loop(s.slice(item.length))) {
                    
                        return true
                    } 
                    // 失败了缓存失败结果。   
                    sCache.set(s.slice(item.length),false)
                }
            }
        }
        return false
    }
   return loop(s)

};

var wordBreakDP = function(s, wordDict){
    let str=' '+s;
    const wordSet=new Set(wordDict)
    const dp= new Array(str.length).fill(false);
    dp[0]=true;
    for(let i=1;i<str.length;i++){
        for(let j=0;j<i;j++){
            if(dp[i-j-1]&&wordSet.has(str.slice(i-j,i+1))){//不超过字符长度
                    dp[i]=true
                    break;
            }
        }
    }
    return dp[dp.length-1];
}
// @lc code=end

