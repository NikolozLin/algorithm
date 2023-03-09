/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/** 二分， 必定有部分有序，如果t 在有序部分就缩小范围，如果不在继续二分再重复判断。
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function (nums, target) {
    const len= nums.length;
    if(!len) return -1;
    if(len==1) return nums[0]===target?0:-1;
    
    let l=0;
    let  r=len-1;
    while(l<=r){
        let mid =(l+r)>>1;
        if(nums[mid]===target) return mid
        if(nums[0]<=nums[mid]){
            if(nums[0]<=target&&nums[mid]>target){
                r=mid-1
            }else{
                l=mid+1
            }
        }else{
            if(nums[mid]<target&&nums[len-1]>=target){
                l=mid+1
            }else{
                r=mid-1
            }

        }
    }
    return -1
};

// @lc code=end

