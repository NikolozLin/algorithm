/** candidates种选取任意可重复的数，组成一个和为target 的组合 。输出这些组合
 * @param {number[]} candidates 无重复数 数组
 * @param {number} target 目标整数
 * @return {number[][]}
 */
 const combinationSum = function(candidates, target) {

    const len=candidates.length;
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
            path.push(candidates[i]);
            backTracking(sum+candidates[i],i);
            path.pop();
        }

    }

};

const candidates = [2,3,6,7];
const target = 7;

console.log(combinationSum(candidates,target));