/*
 * @lc app=leetcode.cn id=1700 lang=javascript
 *
 * [1700] 无法吃午餐的学生数量
 */

// @lc code=start
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let flag=true
    while(students.length &&flag){
        if( students[0]===sandwiches[0]){
            students.shift();
            sandwiches.shift();
        }else{
            const noMatch=students.shift();
            flag= students.some((item)=>item!=noMatch)
            students.push(noMatch)
        } 
    }
    return students.length
};
// @lc code=end

