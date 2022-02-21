//给定一个能装固定重量的东西
//给定一些固定重量和价值的发物品，求背包装下最大重量


function loop( weights:number[],values:number[],alreadyWeight:number,bag:number,index:number):number{

    if(alreadyWeight>bag){
        return 0
    }

    if(index==weights.length){
        return 0
    }

    return Math.max(
    loop(weights,values,alreadyWeight,bag,index+1),
    values[index]+loop(weights,values,(alreadyWeight+weights[index]),bag,index+1),)

}