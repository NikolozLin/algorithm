/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function (n) {
    if (!n) return [];
    if (n == 1) return ['()'];
    const result = [];
    const path = ['('];//记录在那几个左括号插入右括号
    let leftCount = 1;
    let rightCount = 0;
    backTracking(1)
    return result

    function backTracking(index) {

        if (index == 2*n) {
            return result.push(path.join(''))
        }
        if (leftCount -rightCount> 0&&rightCount<n) {
            path.push(')')
            rightCount++;
            backTracking(index + 1)
            rightCount--;
            path.pop()
        }
        if(leftCount<n){
            path.push('(')
            leftCount++;
            backTracking(index + 1)
            leftCount--;
            path.pop()
        }
    }
};

console.log(generateParenthesis(3));