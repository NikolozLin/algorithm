//规定 1和A对应、2和B对应、3和C对应、11和K对应 类推26和Z对应
// 那么 一个数字字符串如'111',可以转化为'AAA'、'KA'、'AK'
// 给定一个只有数字的字符串，返回可转化的转化结果



// 返回i位置后续的转化结果的可能性
function loop(arr: string[], index: number): number {
    if (index == arr.length) {
        return 1;
    }

    if (arr[index] == '0') {
        return 0
    }

    if (arr[index] == '1') {
        let res = loop(arr, index + 1)
        if (index + 1 < arr.length) {
            res += loop(arr, index + 2)
        }
        return res
    }
    if (arr[index] == '2') {
        let res = loop(arr, index + 1)
        if (index + 1 < arr.length && (arr[index + 1] > '0' && Number(arr[index + 1]) <= 6)) {
            res += loop(arr, index + 2)
        }
        return res
    }

    //3-9
    return loop(arr,index+1)
}

