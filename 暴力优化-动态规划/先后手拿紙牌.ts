//给定数组，a、b 两人先后取值，可以在数组左右分别取值。ab两人都非常聪明。
// 所以给定数组后 返回获胜者，并返回或获胜者最后的分数。 

import { verify } from "crypto"

function gameWin(arr: number[]){
    if(!arr?.length) return 0
    const fScore= initiativeGetMaxScore(arr,0,arr.length-1)
    const sScore= gotaGetMaxScore(arr,0,arr.length-1)
    return fScore>sScore?fScore:sScore
}

function initiativeGetMaxScore(arr: number[], L: number, R: number):number{ 
    if(L===R){
        return arr[L]
    }
    return Math.max((arr[L]+gotaGetMaxScore(arr,L+1,R)),(arr[R]+gotaGetMaxScore(arr,L,R-1)))
}


function gotaGetMaxScore(arr: number[], L: number, R: number):number {
    if(L===R){
        return 0
    }
    return Math.max((arr[L]+initiativeGetMaxScore(arr,L+1,R)),(arr[R]+initiativeGetMaxScore(arr,L,R-1)))

 }    