// 字符串全排列
// 分支限界：遇到不可能的分支提前杀死节省常数时间。


//生成给定字符串的全排列
function genAllPermutation(str: string) {
    const startT= Date.now()
    const strArrs = [...str];
    const result: Set<string> = new Set()
    handleLoop(strArrs, 0, result);
    const endT=Date.now()
    console.log(`spendTime:${endT-startT}`);
    
    return result;
}
function handleLoop(str: Array<string>, i: number, result: Set<string>) {
    if (i === str.length) {
        result.add(str.join(''))
        console.log(str.join(''))
        return
    }
     const hasSelectSet:Set<string>=new Set()
    for (let j = i; j < str.length; j++) {

        if(hasSelectSet.has(str[j]))continue;
        hasSelectSet.add(str[j]);
        [str[i], str[j]] = [str[j], str[i]];
        handleLoop(str, i + 1, result);
        [str[j], str[i]] = [str[i], str[j]];
    }

}


genAllPermutation('abbc')