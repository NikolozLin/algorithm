/**求 1～9范围的k个数 和为n ，返回这样的组合
 * @param {number} k k个数
 * @param {number} n 和 
 * @return {number[][]}
 */
 const combinationSum3 = function(k, n) {

    const result=[];
    const temp=[];
    backTracking(1,0)

    return result;

    function backTracking(start,count){
        
        if(count==k){
            if(n==temp.reduce((a,b)=>a+b)) result.push([...temp])
            return
        }
        for(let i=start;i<10;i++){
            temp.push(i)
            backTracking(i+1,count+1)
            temp.pop()
        }
    }
};




// ==============================优化========================


/**求 1～9范围的k个数 和为n ，返回这样的组合
 * @param {number} k k个数
 * @param {number} n 和 
 * @return {number[][]}
 */
 const combinationSum3New = function(k, n) {
    const result=[];
    const temp=[];
    backTracking(1,0,0)

    return result;

    function backTracking(start,count,sum){
        if(sum>n) return;
        if(count==k){
            if(n==sum) result.push([...temp])
            return
        }
        for(let i=start;i<10;i++){
            // sum+=i;
            temp.push(i)
            backTracking(i+1,count+1,sum+i)
            temp.pop()
            // sum-=i;
        }
    }
};

console.log(combinationSum3New(3,7))