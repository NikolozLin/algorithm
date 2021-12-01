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
}
//合并两个最小节点，成为一个新节点，并返回合并代价（两子节点的和）
function merge2node(arr){
    if(arr.length<=2) {
      const cost=  arr.reduce((pre,cur)=>pre+cur)
        arr.length=0  
      return  cost
    }
    //取出第一个数
    let len =arr.length;
    const A=arr[0];
    [arr[0],arr[len-1]]=[arr[len-1],arr[0]];
    heapify(arr,0,len-1);

    const B=arr[0];
    [arr[0],arr[len-2]]=[arr[len-2],arr[0]];
    heapify(arr,0,len-2);

    const newNode=A+B;
    arr[len-2]=newNode;
    arr.length=len-1;
    heapinsert(arr,len-2);

    return newNode;
}

const arrs1 = [30, 10, 80,  60, 50];
heapsort(arrs1);

let cost=0
while(arrs1.length){
    cost+=merge2node(arrs1)
}


console.log(cost);
