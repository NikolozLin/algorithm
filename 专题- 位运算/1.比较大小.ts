/**
 * 对0或1 进行取反
 * @param n  0|1
 * @returns 
 */
function flip(n: number) {
    return n ^ 1
}
/**
 * 返回符号位，
 * 正返回：1
 * 负返回：0
 * @param a  JS number 是个64位的IEEE754 浮点数
 */
function sign(a: number) {

    return flip(a >> 63 & 1)
}

// 没考虑范围 ，可能会溢出
function getMax(a: number, b: number) {
    const c = a - b;
    const scA = sign(c)  // a-b 结果非负  scA=1  ； 结果负数，scA=0 
    const scB = flip(scA) //与上相反
    return a * scA + b * scB

}

//考虑溢出
function getMax2(a: number, b: number) {
    const c = a - b;
    const sa = sign(a);  
    const sb = sign(b); 
    const sc = sign(c);
    const diffSab= sa ^ sb;//判断a、b 符号 是否一样，一样0 不一样1
    const sameSab= flip(diffSab)
    // 分析情况 当要返回A时，returnA 返回1;   符号不同且 a为正，，符号相同 且a-b为正
    const returnA= diffSab*sa + sameSab*sc
    const returnB= flip(returnA)

    return a*returnA + b* returnA



}