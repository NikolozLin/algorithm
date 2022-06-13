// 时间复杂度 N* 2^N ,使用dp 可以优化到 2^N .

/** 分割出所有的回文子串
 * @param {string} s
 * @return {string[][]} 返回切割方案
 */
 const partition = function (s) {

    const len= s.length;
    const result=[];
    if(!len)return result;

    const stack=[];
    const strArr=[...s];

    backTracking(0)

    return result;


    function backTracking(start){
            if(start==len){
                result.push([...stack])
                return;
            }
            for(let i=start;i<len;i++){


                // 要求每个子串都是回文，有个不是回文 改分支就不行了
                if(!isPalindrom(start,i))continue;

                stack.push(s.substring(start,i+1))
                backTracking(i+1)
                stack.pop()

            }

    }
 /**
  * 判断子串是否回文
  * @param {*} left 子串做边界
  * @param {*} right 子串右边界饿
  * @returns 
  */
    function isPalindrom(left,right) {
        while(left<right){
            if(strArr[left]!==strArr[right]){
                return false;
            }
            left++;
            right--;

        }

        return true
    }


 }
