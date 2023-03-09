/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    // 不使用额外空间
    const result = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === i + 1) continue;

        let val = nums[i]
        while (nums[val - 1] !== val) {
            let tempVal = nums[val - 1];
            nums[val - 1] = val;
            val = tempVal;
            nums[i] = val;

        }
    }

    nums.forEach((val, index) => {
        if (val != index + 1) result.push(index + 1)
    })

    return result;
};
// @lc code=end
findDisappearedNumbers([2,1])
