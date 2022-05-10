function add(a: number, b: number) {

    let sum = a
    while (b != 0) {
        sum = a ^ b
        b = (a & b) << 1
        a = sum
    }
    return sum
}
// 整数变负数（补码）
function negNum(n: number) {
    return add(~n, 1)
}

//减法
function minus(a: number, b: number) {
    return add(a, negNum(b))

}
//乘法,不考虑溢出 
function multi(a: number, b: number) {
    let res = 0
    while (b != 0) {
        if ((b & 1) != 0) {
            res = add(res, a)
        }
        a <<= 1
        b >>>= 1

    }
    return res
}

function isNeg(n: number) {
    return n < 0
}
//除法 左移可能有溢出，填充符号位的危险 ，改成右移动。
function divide(a: number, b: number) {
    let x = isNeg(a) ? negNum(a) : a;
    const y = isNeg(b) ? negNum(b) : b;
    let res = 0
    for (let i = 63; i > -1; i = minus(i, 1)) {
        if ((x >> i) >= y) {
            res |= (1 << i)
            x = minus(x, y << i)

        }
    }
    return (Number(isNeg(a)) ^ Number(isNeg(b))) ? negNum(res) : res


}

console.log(divide(6, -2))