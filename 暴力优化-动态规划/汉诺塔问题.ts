function hanoiTower(n:number){
    if(n>0){
        loop(n,'左','右','中')
    }

}

function loop(i:number,start:string,end:string,other:string){

    if(i==1){
        console.log(`Move ${i} :${start} => ${end}`)
    }else{
        //移动i以上的圆盘到 other上
        loop(i-1,start,other,end)
        // 移动i圆盘到end上
        console.log(`Move ${i} :${start} => ${end}`)
        //将剩下的圆盘移动到end上。
        loop(i-1,other,end,start)

    }
}

hanoiTower(3)