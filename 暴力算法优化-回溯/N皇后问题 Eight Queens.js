function NQueens(n){
    if(n<1) return 0

    //存储第N行 什么位置已经放置了棋子
    const record=[] 
    return process(0,record,n)
}
/**
 * 
 * @param {*} index 处理行号
 * @param {*} record 已有记录
 * @param {*} n    问题规模
 */
function process(index,record,n){
    if(index==n) return 1

    let res = 0
    //遍历行
    for(let j=0; j<n; j++ ){
        
        if(isValid(record,index,j)){
            record[index]=j
          res+= process(index+1,record,n)
        }
    } 
    return res
}
/**
 *  当前位置是否满足 行、列、 两个斜对角线 条件。
 * @param {*} record  二维矩阵 记录那个位置已经使用
 * @param {*} index    当前行号
 * @param {*} j        当前列号
 */
function isValid(record,index,j){

    // const b1=j-index
    // const b2=j+index

    // for(let i=0 ;i<record.length;i++){
    //     if(record[i]==j)return false
    //     if(record[i]-i ==b1) return false
    //     if(record[i]+i ==b2) return false
    // }
    // return  true
        for(let i=0 ;i<record.length;i++){
            if(record[i]==j || Math.abs(record[i]-i) == Math.abs(index-j))return false
        }
        return true
    }

console.log(NQueens(4))