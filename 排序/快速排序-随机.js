// 三路快排  时间复杂度N*logN  额外空间复杂度 logN 用于记录中间点
function quickSort(arrs, L, R) {
    debugger;
    if (L >= R) return;
    // console.log(L + '---' + R);
    let patiton = Math.round(Math.random() * (R - L) + L);

    [arrs[patiton], arrs[R]] = [arrs[R], arrs[patiton]];

    let P = partition(arrs, L, R); // 将返回 less区域结束下标、 more区域开始下标
    // console.log('=p' + P[0] + '~' + P[1]);
    quickSort(arrs, L, P[0]);
    quickSort(arrs, P[1], R);
}

function partition(arrs, L, R) {
    console.log('P  ' + L + '~' + R + ':    ' + arrs);
    let less = L - 1;
    let more = R;
    let index = L;
    while (index < more) {
        if (arrs[index] < arrs[R]) {
            // 默认以最右边的数为标准
            less++;
            [arrs[less], arrs[index]] = [arrs[index], arrs[less]];
            index++;
        } else if (arrs[index] > arrs[R]) {
            more--;
            [arrs[index], arrs[more]] = [arrs[more], arrs[index]];
        } else {
            index++;
        }
    }
    // 以最后一个数xxx为比较标准，最后需要移动到等于xxx的区域
    [arrs[R], arrs[more]] = [arrs[more], arrs[R]]; //一次快排后 把最后一个数 和more 区域的第一个数交换 more指针+1
    return [less, ++more];
}
// let arr1 = [4, 5, 1, 3, 7, 8, 2, 9, 6, 0];
let arr2 = [4, 5, 1, 3, 7, 8, 2, 9, 0, 6];
// quickSort(arr1, 0, 9);
// console.log('result' + arr1);
quickSort(arr2, 0, 9);
console.log('result' + arr2);

/**
 * n个元素 时间浮复杂度最好情况 （每次选取的点都在正中间，依稀排序后确定了一个点的位置，左右两边还没确定。递归进行此过程）
 * 那么： T（n）= 2T（n/2） +n   //n是第一排序 比较的次数
 * 第二次：T（n）= 2(2T（n/4）+n/2))+n =  4T(n/4) + 2n
 * 第三次：T（n）= 4(2T（n/8）+n/4))+2n =  8T(n/8) + 3n
 * 当只有一个元素 时间复杂度： T（1）=0
 *
 * 所以 第n次：T（n）=n T（1）+log(n)*n = n*log(n)
 *
 * // n 设定趋于无穷大，所以 常数倍的n 也等于n。 log(n) 是拆分的个数，每次都是对半拆 可理解为二叉树
 *
 *
 */
