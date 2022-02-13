// 给定的节点进遍历， 注意：图可能存在环

import type { GNode } from "./graph";

export function BFS(node: GNode):void {

    const queue: Array<GNode> = [node]
    const nodeSet: Set<GNode> = new Set([node])

    while (queue.length) {
        const cur: GNode = queue.shift() as GNode;

        console.log('处理节点',cur.value);
        
        for (let i = 0; i < cur.nexts.length; i++) {
            const nextNode=cur.nexts[i]
            if(!nodeSet.has(nextNode)){
                queue.push(nextNode)
                nodeSet.add(nextNode)
            }
        }

    }
}

export function DFS(node:GNode){
    if(!node)return
    const  stack=[node]
    const visitSet=new Set([node])
    console.log('入栈时，处理节点',node);
    while(stack.length){
        const cur = stack.pop() as GNode
        for(const next of stack){
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