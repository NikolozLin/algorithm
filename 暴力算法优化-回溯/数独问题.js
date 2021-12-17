class SudokuAllDone {

    constructor() {
        // 创建行 列 快的 记录
        // 为了使查询跟快 采用多维数组方式记录是否写入这个数
        this.row = [] //9x9
        this.col = [] //9x9
        this.block = [] // 3x3x9
    }


    /**
     * 
     * @param { Arary<Array<number>> } border 
     */
    addSudoku(border) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (border[i][j] !== '.') {
                    const v = border[i][j] - 1
                    this.row[i][v] = this.col[j][v] = this.block[Math.floor(i / 3)][Math.floor(j / 3)][v] = true
                }
            }

        }
        this.dfs(border, 0, 0)
    }

    //当前数据状况下，xy坐标
    dfs(border, x, y) {
        if (y == 9) return this.dfs(border, x + 1, 0); // 9jin
        if (x == 9) return true;
        if (border[x][y] !== '.') return this.dfs(border, x, y + 1);

        for (let i = 0; i < 9; i++) {
            // 同行、同列 、同快 合法校验 b不存在填入的数
            if (!this.row[x][i] && !this.col[y][i] && !this.block[Math.floor(x / 3)][Math.floor(y / 3)][i]) {

                border[x][y] = i + 1;
                this.row[x][i] = this.col[y][i] = this.block[Math.floor(x / 3)][Math.floor(y / 3)][i] = true

                if (this.dfs(border, x, y + 1)) {
                    break;
                } else {
                    //复原
                    border[x][y] = '.';
                    this.row[x][i] = this.col[y][i] = this.block[Math.floor(x / 3)][Math.floor(y / 3)][i] = false;
                }

            }
        }
        return border[x][y] != '.';
    }
}