/* eslint-disable no-param-reassign */
/* eslint-disable no-bitwise */
// 问题：

// 插入堆，和父比较（小根堆）
function heapinsert(arr, index) {
    while (index > 0 && arr[index] < arr[(index - 1) >> 1]) {
        // 复合规则 与夫交换
        [arr[index], arr[(index - 1) >> 1]] = [arr[(index - 1) >> 1], arr[index]];
        index = (index - 1) >> 1;
    }
}
// 修改某位置节点后，重新调整堆修改节点的堆
function heapify(arrs, index, heapSize) {
    let left = index * 2 + 1;
    while (left < heapSize) {
        // 左右比较
        let small = left + 1 < heapSize && arrs[left + 1] < arrs[left] ? left + 1 : left;
        // 与改变点比较
        small = arrs[small] < arrs[index] ? small : index;
        if (small === index) {
            break;
        }
        [arrs[index], arrs[small]] = [arrs[small], arrs[index]];
        index = small;
        left = index * 2 + 1;
    }
}
function heapsort(arr) {
    if (arr.length < 2) {
        return;
    }
    const arrLen = arr.length;
    for (let i = 0; i < arrLen; i++) {
        heapinsert(arr, i);
    }
    for (let i = arrLen - 1; i >= 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, 0, i);
    }
}

const arrs1 = [9, 2, 4, 5, 1, 7, 3, 6, 0, 8];
heapsort(arrs1);
console.log(arrs1);
