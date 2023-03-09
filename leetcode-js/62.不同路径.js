/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start


/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */



var uniquePaths = function (m, n) {
    const dp = new Array(n).fill(1);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[j] = dp[j - 1] + dp[j]
        }
    }
    return dp[dp.length - 1]
};

var uniquePathDFS = function(m, n) {
    const cache = new Map()
    function dfs(m, n){
        const keys = [m+'-'+n,n+'-'+m]
        for(const key of keys){
            if(cache.has(key)){
                return cache.get(key)
            }
        }
        let sum = 0
        if(m === 0 && n === 0){
            return 1
        }
        if(m > 0){
            sum += dfs(m-1,n)
        }
        if(n > 0){
            sum += dfs(m,n-1)
        }
        for(const key of keys){
            cache.set(key, sum)
        }
        return sum
    }
    return dfs(m-1, n-1)
};

// @lc code=end

