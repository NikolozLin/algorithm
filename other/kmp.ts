//kmp算法 加速字符串匹配过程
// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。
// 如果不存在，则返回  -1 。


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 const strStr = function(haystack:string, needle:string) {
    if(needle.length>haystack.length) return-1
    const nexts=genNextArrays(needle)
    let i=0;
    let j=0;
    while(i<haystack.length&&j<needle.length){
        if(haystack[i]===needle[j]){
            i++;
            j++;
        }else if(nexts[j]!==-1){
            j=nexts[j]
        }else{
           i++;
           j=0;
        }
    }
    return j==needle.length?i-j:-1;
};

function genNextArrays(ms:string){
       if(ms.length==1){
           return  [-1]
       }
       const  nexts=[-1,0];
       let i =2; //next数组位置 当前撇配位置
       let cn=0; // 当前next数组位置的值
       while(i<ms.length){
           if(ms[cn]==ms[i-1]){
               nexts[i++]=++cn
           }else if(cn>0){//
               cn=nexts[cn]
           }else{
               // 当下标到o位置，并且与i-1位置的字符不相等
               nexts[i++]=0
           }
       }
   return nexts;
}


console.log(strStr('aabcddc','bcd'))