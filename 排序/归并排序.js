function mergeSort(arrs, left, right) {
    if (left === right) return;
    let mid = left + ((right - left) >> 1);
    mergeSort(arrs, left, mid);
    mergeSort(arrs, mid + 1, right);
    merge(arrs, left, mid, right);
    return;
}
function merge(arrs, left, mid, right) {
    let p1 = left;
    let p2 = mid + 1;
    let tempArr = [];
    let i = 0;

    while (p1 <= mid && p2 <= right) {
        tempArr[i++] = arrs[p1] < arrs[p2] ? arrs[p1++] : arrs[p2++];
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
}

// let arr = [7, 9, 5, 2, 0, 1, 4, 6, 3, 8];
// let arr = [7];
let arr = [5, 6, 3, 1, 2];
let len = arr.length - 1;
mergeSort(arr, 0, len);
console.log(arr);
