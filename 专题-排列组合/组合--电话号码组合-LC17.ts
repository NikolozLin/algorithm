const numberReflect: { [key: string]: string[]; } = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
}


/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits: string) {

    if (!digits) return [];
    const result: string[] = [];
    backTracking(digits, result, [], 0);
    return result;
};

function backTracking(digits: string, result: string[], temp: string[], index: number) {

    if (index == digits.length) {
        result.push(temp.join(''))
        return
    }
    const strArr: string[] = numberReflect[digits[index]]
    for (let j = 0; j < strArr.length; j++) {

        temp.push(strArr[j])
        backTracking(digits, result, temp, index + 1)
        temp.pop()
    }
}

console.log(letterCombinations('78'))



// =====================================优化后=========================

/**
 * @param {string} digits
 * @return {string[]}
 */
 const letterCombinations2 = function (digits) {
    const k = digits.length
    if (!k) return []
    const numberReflect = [
        '',
        '',
        'abc',
        'def',
        'ghi',
        'jkl',
        'mno',
        'pqrs',
        'tuv',
        'wxyz',
    ]

    const combiner = []
    const result = [];
    backTracking(0);
    return result;

    function backTracking(index) {
        if (index == k) {
            result.push(combiner.join(''))
            return
        }
        const strArr=numberReflect[digits[index]]
        for (let i=0;i<strArr.length;i++){
            combiner.push(strArr[i])
            backTracking(index+1)
            combiner.pop()
        }
    }
};