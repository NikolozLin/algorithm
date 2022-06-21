/**
 * @param {number[][]} mat mxn
 * @return {number[]}
 */
 const findDiagonalOrder = function(mat) {

    const m = mat.length;
    const n = mat[0].length;

    let arrow=true; // 箭头方向 true 向右上  false 向左下
    let i=0; // i 0~m
    let j=0; // j 0~n

    const result=[]

    while(i!=m-1||j!=n-1){
        result.push(mat[i][j])

        if(arrow){ //右上
           if(i==0&&j==n-1){
               i++;
               arrow =!arrow; 
           }else if(i==0){
               j++;
               arrow=!arrow;
           }else if(j==n-1){
               i++;
               arrow=!arrow;

           }else{
               i--;
               j++;
           }

        }else{ // 左下
            if(j==0&&i==m-1){
                j++;
                arrow =!arrow; 
            }else if(j==0){
                i++;
                arrow=!arrow;
            }else if(i==m-1){
                j++;
                arrow=!arrow;
            }else{
                i++;
                j--;
            }
        }

    }

    result.push(mat[m-1][n-1])   
    return result
};


console.log(findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]]))