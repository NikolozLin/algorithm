// tag:  正序数组 中位数 logN

/**
 * 思路 划分连个数组，分为小的一边 大的一边， 当左右大小相同时，中位数就出现在他们边界上。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1)
    }
    let m = nums1.length;
    let n = nums2.length;
    let left = 0;
    let right = m;
    let lMax =0, rMin = 0

    while (left <= right) {
        let i = Math.floor((left + right) / 2)
        let j = Math.floor((m + n + 1) / 2 )- i

        //考虑边界问题
        let il = i == 0 ? -Infinity : nums1[i - 1]
        let ir = i == m ? Infinity : nums1[i]
        let jl = j == 0 ? -Infinity : nums2[j - 1]
        let jr = j == n ? Infinity : nums2[j]
        if( il<=jr){
            lMax=Math.max(il,jl);
            rMin=Math.min(ir,jr);
            left=i+1;//
        }else{
            right=i-1;
        }
    }

    return (m + n) % 2 ? lMax:(lMax+rMin)/2

};
// findMedianSortedArrays([1,2],[3,4]);


// -------------------------------------------------------------- 方法2
/**
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays2 = function (nums1, nums2) {

 }