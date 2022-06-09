//Manacher算法 O(N) 解决最大会问子串问题
function ManacherString(str: string) {
    // 预处理
    const strArr: string[] = ['#', ...([...str].reduce((a, b) => `${a}#${b}`)), '#']

    let C = -1; //最右回文边界时的中心点
    let R = -1; //最右回文边界，(方便计算 回文半径取有效半径右边一位)
    const pArr: number[] = [] //字符index对应最大回文半径
    let max = 1
    for (let i = 0; i < strArr.length; i++) {

        // 写入直接可判断的值(i位置 至少回文半径是多少) 
        pArr[i] = R > i ? Math.min(pArr[2 * C - i], R - i) : 1;
        // 向外扩张
        while (i + pArr[i] < strArr.length && i - pArr[i] > -1) {
            if (strArr[i + pArr[i]] == strArr[i - pArr[i]]) {
                pArr[i]++
            } else {
                break
            }
        }

        if (i + pArr[i] > R) {
            R = i + pArr[i]
            C = i
        }
        max = Math.max(max, pArr[i])

    }
    console.log(max);
    //这里解释一下为什么返回值是maxn-1，因为manacherstring的长度和原字符串不同，所以这里得到的最大回文半径其实是原字符串的最大回文子串长度加1，有兴趣的可以自己验证试试
    return max - 1
}
ManacherString('avcbbcva')