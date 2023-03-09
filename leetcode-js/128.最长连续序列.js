/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {    // 使用哈希表，判断nums中存在某个值+1 +2 +3 的元素
    const numSet = new Set([...nums]);

    let max = 0;
    for (const item of numSet) {
        if (!numSet.has(item - 1)) {//由于判断前一个数是否存在，所以每个元素都只会访问一次，复杂度为 O(n)
            let curmax = 1;
            let cur = item;
            while (numSet.has(cur+1)) {
                cur += 1;
                curmax += 1;
            }
            max = Math.max(max, curmax);
        }
    }
    return max;

};

var longestConsecutive2 = function(nums){
     // 使用哈希表，判断nums中存在某个值+1 +2 +3 的元素
    // 使用哈希表，判断nums中存在某个值 能到达的右边界 的元素 （不用+1 一个个查询）
    const map = new Map(nums.map((i) => [i, i]));

    let max = 0;
    for (const [key, value] of map.entries()) {
        if (!map.has(key - 1)) {
            let right = value;
            while (map.has(right + 1)) {
                right = map.get(right + 1);
            }
            // 更新边界
            map.set(key, right);
            max = Math.max(max, right - key + 1);
        }
    }
    return max;
}
// 巧妙的动态规划
var longestConsecutive3= function(nums){
// 1.遍历nums数组中的所有数字num
// 2.当num是第一次出现时：
//     （1）分别获取到左相邻数字num-1的连续区间长度left和右相邻数字num+1的连续区间长度right；
//     （2）计算得到当前的区间长度为curLen=left+right+1curLen=left+right+1；
//     （3）更新最长区间长度ans以及左右边界的区间长度。
const map = new Map();
let long = 0;
for (const num of nums) {
    if (!map.has(num)) {
        const left = map.get(num - 1) ?? 0; // 左连续区间长度；
        const right = map.get(num + 1) ?? 0; // 右连续区间长度；
        const curLen = right + left + 1;
        long = Math.max(long, curLen);
        // 将num加入map中，表示已经遍历过该值。其对应的value可以为任意值。
        map.set(num, -1);
        // 更新当前连续区间左边界和右边界对应的区间长度
        map.set(num - left, curLen);
        map.set(num + right, curLen);
    }
}
return long;
}
// 首先，定义一个哈希表（用于判断某个数是否存在哈希表中）
// 然后遍历数组
// 如果当前数num存在哈希表，那么跳过
// 如果当前数num不存在哈希表中，那么查找num-1和num+1这两个数是不是在哈希表中
// 比如 num是5
// 1234 678都在哈希表中
// 遍历数组的时候，遇到1234678都会掠过
// 此时哈希表中，1的位置和4存的值都是4（证明1或者4所在的连续长度是4）
// 同理 6和8存的值都是3
// 那么此时5进来之后，看看4和6在不在哈希表内，如果在的话，一定是端点，一定能获取到值
// 所以5进来之后，发现左边有4个连续的，右边有3个连续的，加上自己一个，那么组成一个大连续的
// 4+1+3 = 8
// 所以要更新当前最长连续串的端点，也就是1的位置（5-4），8的位置（5+3），更新长度为8
// 只需要端点存值就行，因为端点中的值在遍历的时候如果在哈希表中就会略过
// 如果这个时候9又进来，那么它获取到8的位置有8，10的位置有0
// 更新连续子串长度（8+1+0）
// 所以更新左端点1（9-8）的值为9，右端点9（9+0）的值为9

// @lc code=end

