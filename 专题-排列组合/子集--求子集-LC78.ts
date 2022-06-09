/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 const subsets = function(nums) {
    const len=nums.length;  
    const temp=[]
    const result=[[]];
    backTracking(0)
    return result


    function backTracking(start){

        if(start==len) return

        for(let i =start;i<len;i++){
            temp.push(nums[i])
            result.push([...temp])
            backTracking(i+1)
            temp.pop()
        }

    }

};

console.log(subsets([1,2,2]))