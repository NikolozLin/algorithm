//逆序一个栈，不能使用额外空间，只能使用递归函数。

//逆序栈
function reverse(stack:number[]){
    if(!stack.length)return;
    const i= loop(stack);
    reverse(stack)
    stack.push(i)
    
}

//给定栈返回栈地元素
function loop(stack:number[]):number{
    let result=stack.pop() as number
    if(stack.length===0){
        return result
    }else{
        let last =loop(stack)
        stack.push(result)
        return last
    }

}