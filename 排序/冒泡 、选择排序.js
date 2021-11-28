//1.  冒泡排序
function bubblesort(arrs) {
    if (!Array.isArray(arrs)) return;
    const len = arrs.length;
    for (let i = len; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arrs[j] > arrs[j + 1]) {
                [arrs[j], arrs[j + 1]] = [arrs[j + 1], arrs[j]];
            }
        }
    }
    return arrs;
}

//2.插入排序
function InsertionSort(arrs) {
    const len = arrs.length;
    for (let i = 1; i < len; i++) {
        for (let j = i; j > 0; j--) {
            if (arrs[j] < arrs[j - 1]) {
                [arrs[j], arrs[j - 1]] = [arrs[j - 1], arrs[j]];
            } else {
                break;
            }
        }
    }
    return arrs;
}
// 3. 选择排序
let arr = [9, 7, 2, 6, 5, 1, 3, 4, 8];

console.log(InsertionSort(arr));
