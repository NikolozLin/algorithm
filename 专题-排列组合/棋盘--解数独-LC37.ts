/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 const solveSudoku = function (board) {
    //  9x9
    const row = new Array(9).fill(0).map(_ => new Array(9).fill(0))
    // 9x9
    const col = new Array(9).fill(0).map(_ => new Array(9).fill(0))
    //  3x3x9
    const block = new Array(3).fill(0).map(_ => new Array(3).fill(0).map(_ => new Array(9).fill(0)))

    //init
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const value = board[i][j];
            if (value !== '.') {
                const v = value - 1;
                row[i][v] = col[j][v] = block[Math.floor(i / 3)][Math.floor(j / 3)][v] = 1
            }
        }
    }

    return dfs(0, 0);

    function dfs(i, j) {
        if (j == 9) return dfs(i + 1, 0);
        if (i == 9) {
                // console.table(board)
            return board;}

        if(board[i][j]!=='.') return dfs(i,j+1);


        for(let v=0;v<9;v++){

            if( !row[i][v] &&!col[j][v] &&!block[Math.floor(i / 3)][Math.floor(j / 3)][v] ){
                row[i][v] = col[j][v] = block[Math.floor(i / 3)][Math.floor(j / 3)][v] = 1
                board[i][j]=v+1;
                if(dfs(i,j+1)){
                    break;
                }
                board[i][j]='.';
                row[i][v] = col[j][v] = block[Math.floor(i / 3)][Math.floor(j / 3)][v] = 0
            }
        }
        // 找不到合适的值，说明上层循环有问题。
        return board[i][j]!=='.';
    }

};



const board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

console.log(solveSudoku(board))