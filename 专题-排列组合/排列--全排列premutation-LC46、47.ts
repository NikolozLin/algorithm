
/**
 * 给定字符数组进行全排列 互换法
 * @param data  
 * @param start  进行排列起始位置
 * @returns 
 */
const premutation = (data: string[], start = 0): void => {

    const len = data.length;
    if (start == (len - 1)) {
        console.log(data.join(''))
        return
    }
    for (let i = start; i < len; i++) {
        //如果交换位置的字符相同，排除
        if (start!= i && data[start] == data[i]) continue
        // 选中的字符调换到0位置
        [data[start], data[i]] = [data[i], data[start]];
        //递归
        premutation(data, start + 1);
        // 复原数组
        [data[start], data[i]] = [data[i], data[start]];

    }
    return
}

premutation(['a', 'b', 'a'])



// =================================================回溯法=====================
function permuteUnique(nums:number[]){
    const result:Array<number[]>=[];

    const team:number[]=[];
    const hasUse= new Array(nums.length).fill(0)
    backTrackingP(nums,result,hasUse,team,0)
    console.log(result);
    
    return result
}

function backTrackingP(nums:number[],result:number[][],hasUse:number[],team:number[],index:number){

        if(index==nums.length){
            result.push([...team])
            return;
        }
        // 当前位置已经出现过的序号
        const curUse= new Set()
        for(let i=0;i<nums.length;i++){
            if(hasUse[i] ||curUse.has(nums[i]))continue
            //处理记过
            team.push(nums[i])
            hasUse[i]=1
            curUse.add(nums[i])
            // 递归
            backTrackingP(nums,result,hasUse,team,index+1)
            //撤销处理
            team.pop()
            hasUse[i]=0

        }

} 

permuteUnique([1,1,2])