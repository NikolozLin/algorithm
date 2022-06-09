/**
 * 
 * @param nums 元素集合（如果有重复元素，先去重再组合）
 * @param k 选择元素个数
 * @returns 
 */
 function combine(nums:number[],k:number){
    const result:Array<number[]>=[];

    const team:number[]=[];
    backTrackingCombine(nums,result,team,0,k)
    console.log(result);
    return result
}

function backTrackingCombine(nums:number[],result:number[][],team:number[],start:number,k:number){

        if(k==0){
            result.push([...team])
            return;
        }
        for(let i=start;i<nums.length-k+1;i++){

            //处理记录
            team.push(nums[i])
            // 递归
            backTrackingCombine(nums,result,team,start+1,k-1)
            //撤销处理
            team.pop();
            start++;
        }

} 

combine([1,2,3,4],2)