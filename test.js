/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
    const reg = new RegExp(/[+-]?\d+\/\d+/g)

    const numArr = expression.match(reg)
    let result = numArr.reduce((a, b) => {
        const [, aSymbol, aT, aB] = a.replace(/^([+])?(\d+)/g, '+$2').match(/([+-]?)(\d+)\/(\d+)/)
        const [, bSymbol, bT, bB] = b.replace(/^([+])?(\d+)/g, '+$2').match(/([+-]?)(\d+)\/(\d+)/)
        if (aSymbol == bSymbol) {
            return `${aSymbol}${aT * bB + bT * aB}/${aB * bB}`
        } else {
            const aTbB = aT * bB;
            const bTaB = bT * aB;
            if (aTbB > bTaB) {
                return `${aSymbol}${aT * bB - bT * aB}/${aB * bB}`
            } else if (aTbB < bTaB) {
                return `${bSymbol}${bT * aB - aT * bB}/${aB * bB}`
            } else {
                return '0/1'
            }
        }
    })
    console.log(result)

    const [, rSymbol, rT, rB] = result.replace(/^([+])?(\d+)/g, '+$2').match(/([+-]?)(\d+)\/(\d+)/)
    if (rT == 0) return '0/1'
    // GCD
    let a = rT
    let b = rB
    if (a-b < 0) {
     [a, b] = [b, a];
    }
    let r = a%b
    while (r != 0) {
            a = b;
            b = r
            r = a % b
    }
                    
    if (rSymbol == '+') return `${rT/b}/${rB/b}`;
    if (rSymbol == '-') return `${rSymbol}${rT/b}/${rB/b}`;
};

console.log(fractionAddition("5/3+1/3"))