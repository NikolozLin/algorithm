
function isMatch(s:string, p:string) {
    const m = s.length;
    const n = p.length;
    const dp:Array<any[]> = []
    for (let i = 0; i <= m; i++) {
        dp.push([])
    }
    dp[0][0]  = true;

    for (let i = 0; i <= m; ++i) {
        for (let j = 1; j <= n; ++j) {
            if (p.charAt(j - 1) == '*') {
                dp[i][j] = dp[i][(j - 2)];
                if (matches(s, p, i, j - 1)) {
                    dp[i][j] = dp[i][j] || dp[(i - 1)][j];
                }
            } else {
                if (matches(s, p, i, j)) {
                    dp[i][j] = dp[(i - 1)][(j - 1)];
                }
            }
        }
    }
    console.table(dp);
    return dp[m][n];
}

function matches(s:string, p:string, i:number, j:number) {
    if (i == 0) {
        return false;
    }
    if (p.charAt(j - 1) == '.') {
        return true;
    }
    return s.charAt(i - 1) == p.charAt(j - 1);
}
isMatch('aaabcaab', 'a*b.a*b')