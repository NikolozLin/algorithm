/**
 * @param {number} n
 * @return {string[][]}
 */
 const solveNQueens = function (n) {


    const record = []//存放第i行 那个位置存放了Q
    const result = []

    backTracking(0)
    return result;

    function backTracking(index) {
        if (index == n) {
                const res=record.map((j)=> {
                   const arr= new Array(n).fill('.')
                    arr[j]='Q'
                    return arr.join('')
                })
            return result.push(res)
        }
        for (let j = 0; j < n; j++) {
            if (!isvalid(index, j)) continue;
            record.push(j);
            backTracking(index + 1);
           record.pop();

        }

    }

    /**
     * 
     * @param {*} index  行 
     * @param {*} j 列
     */
    function isvalid(index, j) {

        for (let i = 0; i < index; i++) {

            if (i-record[i] == index - j) return false
            if (record[i]+i ==index +j) return false
            if (record[i] == j) return false
        }


        return true;
    }

};