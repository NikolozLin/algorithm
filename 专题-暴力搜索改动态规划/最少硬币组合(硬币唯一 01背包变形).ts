// 01背包变形 
function coinCombining(arr:number[],aim:number){
    tryProcess(arr,0,aim)
}
// /**
//  * 
//  * @param arr 全部硬币的数组
//  * @param index  硬币数组index后的硬币，可以自由选择
//  * @param pre inex前，以选择硬币组合钱数
//  * @param aim 目标
//  * @return 返回组成上面条件的方法数
//  */
// function tryStep(arr:number[],index:number,pre:number,aim:number):number{
//     if(index==arr.length){
//         return pre==aim?1:0
//     }
//     return tryStep(arr,index+1,pre,aim) +tryStep(arr,index+1,pre+arr[index],aim)
// }

/**
 * 
 * @param arr 
 * @param index 
 * @param rest 剩余钱数
 * @returns 返回 arr[index～n]状态下，组成rest最少硬币组合。 
 */
function tryProcess(arr:number[],index:number,rest:number):number{

    if(rest<0){
        return -1
    }
    if(rest==0){
        return 0
    }
    if(index==arr.length){
        return -1
    }
    // rest>0 且有硬币

    const p1= tryProcess(arr,index+1,rest)
    const p2next= tryProcess(arr,index+1,rest-arr[index])
    if(p1==-1&&p2next==-1){
        return -1
    }else{
        if(p1==-1){
            return p2next+1
        }
        if(p2next==-1){
            return p1
        }
        return Math.min(p1,p2next)
    }
}  

function dpCoinsCombin(arr:number[],aim:number){
    const len=arr.length

    const dp=[] //[index][rest 目标钱数]
    // 根据base case 填充初始数据
    for(let i=0;i<=len;i++){
        dp[i]=[0]
    }
    for(let i=1;i<=aim;i++){
        dp[len][i]=-1
    }
    console.table(dp);
    //根据 base case，推算位置依赖
    for(let i = len-1;i>=0;i--){
        for(let j=1;j<=aim;j++){
            const p1=dp[i+1][j]
            let p2=-1
            if(j-arr[i]>=0){ 
                p2=dp[i+1][(j-arr[i])]
            }
            // const p1= tryProcess(arr,index+1,rest)
            // const p2next= tryProcess(arr,index+1,rest-arr[index])
            if(p1==-1&&p2==-1){
                dp[i][j]=-1
            }else{
                if(p1==-1){
                    dp[i][j]=p2+1  //p2使用了当前位置的硬币。
                }else if(p2==-1){
                    dp[i][j]= p1
                }else{
                    dp[i][j]=  Math.min(p1,p2)
                }
            }
            console.table(dp)
        }
    }

    return dp[0][aim]

}
dpCoinsCombin([2,3,5,7,2],10)