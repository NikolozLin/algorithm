/**
 * 
 * @param {[][]}} arr 二维数组 
 */
function Sudoku(border) {
    // 创建行 列 快的 记录
    const row = [] //9x9
    const column = [] //9x9
    const block = [] // 3x3x9

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if(border[i][j]!=='.'){
                const value= border[i][j]
                row[i]=value
            }
        }

    }


}