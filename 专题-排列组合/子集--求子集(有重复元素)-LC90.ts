/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 const subsetsWithDup = function(nums) {
    nums.sort((a,b)=>a-b)
    const len=nums.length;  
    const temp=[]
    const result=[[]];
    backTracking(0)
    return result


    function backTracking(start){

        if(start==len) return
        const isUse= new Set()
        for(let i =start;i<len;i++){
            if(isUse.has(nums[i]))continue
            isUse.add(nums[i])
            temp.push(nums[i])
            result.push([...temp])
            backTracking(i+1)
            temp.pop()
        }

    }

};

console.log(subsetsWithDup([1,4,4,4,4]))
console.log(subsetsWithDup([4,4,4,1,4]))