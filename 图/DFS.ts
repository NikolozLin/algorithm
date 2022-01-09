import { GEdge,Graph,GNode } from "./graph";


function DFS(node:GNode){
    if(!node)return
    const  stack=[node]
    const visitSet=new Set([node])
    console.log('入栈时，处理节点',node);
    while(stack.length){
        const cur = stack.pop() as GNode
        for( let next of stack){
            if(!visitSet.has(next)){
                stack.push(cur)
                stack.push(next)
                visitSet.add(next)
                console.log('处理节点',next);
                break                
            }
        }
    }
    

} 