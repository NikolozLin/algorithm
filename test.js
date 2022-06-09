/** candidates种选取任意可重复的数，组成一个和为target 的组合 。输出这些组合
 * @param {number[]} candidates 无重复数 数组
 * @param {number} target 目标整数
 * @return {number[][]}
 */
 const combinationSum2 = function(candidates, target) {

    const len=candidates.length;
    candidates.sort((a,b)=>a-b)
    const path=[];
    const result=[];
    
    backTracking(0,0);

    return result;

    function backTracking(sum,start){
        if(sum>target)return;
        if(sum==target){
            result.push([...path]);
            return;
        } 

        for(let i=start;i<len;i++){
            const num = candidates[i]
            if(i>start&&candidates[i]==candidates[i-1])continue
            path.push(num);
            backTracking(sum+num,i+1);
            path.pop();
        }

    }

};

const candidates = [10,1,2,7,6,1,5];
const target = 8;

console.log(combinationSum2(candidates,target));

