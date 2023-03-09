/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length ==0) return "";
    let lcf=strs[0];
    
    // 一个串 一串匹配
    for(let i =1 ;i<strs.length;i++){
        if(lcf.length==0) return "";
        let len=lcf.length<strs[i].length?lcf.length : strs[i].length;// 获取两者中短的长度
        
        for(let j=0;j<len;j++){
            if(lcf[j]!=strs[i][j]){
                lcf=lcf.substring(0,j);
                continue   
            }
            
        }
        lcf=lcf.substring(0,len);
        
    }
    return lcf

    
};
// @lc code=end

// longestCommonPrefix(["flower","flow","flight"])