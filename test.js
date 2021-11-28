// 堆排序 (数组表示堆)
// - 建立堆
// 出堆

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

/**
 * 插入堆
 * @param {*} arr  堆的数组
 * @param {*} index  插入堆的数据
 */
function heapinsert(arr, index) {
    while (arr[index] > arr[(index - 1) >> 1]) {
        [arr[index], arr[(index - 1) >> 1]] = [arr[(index - 1) >> 1], arr[index]];
        index = (index - 1) >> 1;
    }
}
/**
 *修改某节点后， 子树重新调整为大根堆
 * @param {*} arr 堆的数组
 * @param {*} index 修改的数的需要
 * @param {*} heapSize 堆大小
 */
function heapify(arr, index, heapSize) {
    let left = index * 2 + 1;

    while (left < heapSize) {
        let larget = left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left;
        larget = arr[larget] > arr[index] ? larget : index;
        if (larget === index) {
            break;
        }
        [arr[index], arr[larget]] = [arr[larget], arr[index]];
        index = larget;
        left = index * 2 + 1;
    }
}

const arrs = [9, 2, 4, 5, 1, 7, 3, 6, 0, 8];
heapsort(arrs);
console.log(arrs);
