function mergeSort(arrs, left, right) {
    if (left === right) return 0;
    let mid = left + ((right - left) >> 1);
    let leftcount = mergeSort(arrs, left, mid);
    let rightcount = mergeSort(arrs, mid + 1, right);
    let count = merge(arrs, left, mid, right);
    // console.log(leftcount + '--' + rightcount + '---' + count);
    return leftcount + rightcount + count;
}

function merge(arrs, left, mid, right) {
    let p1 = left;
    let p2 = mid + 1;
    let tempArr = [];
    let i = 0;
    let count = 0;

    while (p1 <= mid && p2 <= right) {
        if (arrs[p1] > arrs[p2]) {
            count += right - p2 + 1;
        }
        // 对merge的排序
        tempArr[i++] = arrs[p1] > arrs[p2] ? arrs[p1++] : arrs[p2++];
    }
    while (p1 > mid && p2 <= right) {
        tempArr[i++] = arrs[p2++];
    }
    while (p2 > right && p1 <= mid) {
        tempArr[i++] = arrs[p1++];
    }

    for (let i = 0; i < tempArr.length; i++) {
        arrs[left + i] = tempArr[i];
    }

    console.log(`left:${left}---right:${right}---count:${count}`);
    console.log(arrs);
    return count;
}
// let arr = [7, 9, 5, 2, 0, 1, 4, 6, 3, 8];
// let arr = [7];
// let arr = [5, 6, 3, 1, 2];
let arr = [7, 5, 6, 4];
let len = arr.length - 1;
let axx = mergeSort(arr, 0, len);
console.log(axx);
