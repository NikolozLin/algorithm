/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate= function (nums) {
    const n = nums.length; // 根据条件，最大值位nums长度-1
    let bitMax = 31;// 确定n 最高位是多少 较少计算量；
    while (!((n - 1) >> bitMax)) { // 高到低计算
        bitMax -= 1;
    }

    let result = 0;
    for (let bit = 0; bit <= bitMax; bit++) {
        let x = 0;
        let y = 0;
        for (let i = 0; i < n; i++) {
            if (nums[i] & (1 << bit)) {
                x += 1;
            }

            if (i > 0 && (i & (1 << bit))) {
                y += 1;
            }
        }

        if (x > y) { // 判断当前位 是否重复
            result |= (1 << bit);
        }
    }

    return result;

 }

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findDuplicate2= function (nums) {
//     // 二分  以小于mid 元素个数 作为判断依据
//     // 重复数target 为分界线 ， 小targe的数 x， 小于等于 x  个数必为x
//     // 大于target 的数  y ，大于等于y的个数比定大于y
//     const n = nums.length;
//     let l = 1;
//     let r = n - 1;
//     let ans = -1;
//     while (l <= r) {
//         const mid = (l + r) >> 1;
//         let cnt = 0;// 计算小雨 mid 的个数
//         for (let i = 0; i < n; i++) { // 减少计算量
//             cnt += nums[i] <= mid;
//         }
//         if (cnt <= mid) { // 个数小于等于mid 表明 在target 左侧
//             l = mid + 1;
//         } else {
//             r = mid - 1;
//             ans = mid;
//         }
//     }
//     return ans;

// };
// @lc code=end

