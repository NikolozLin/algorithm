import { Graph ,GNode ,GEdge } from "./graph";

// [[from,to,weight]]
export default function convert2graph(martix:Array<[string,string,number]>):Graph{

    const graph = new Graph()
    for(let i=0 ; i<martix.length;i++){
        const from = martix[i][0]
        const to = martix[i][1]
        const weight = martix[i][2]
        if(!graph.nodes.has(from)){
            graph.nodes.set(from,new GNode(from))
        }
        if(!graph.nodes.has(to)){
            graph.nodes.set(to,new GNode(to))
        }
        const fromNode:GNode=graph.nodes.get(from)
        const toNode:GNode=graph.nodes.get(to)
        fromNode.nexts.push(toNode)
        fromNode.out+=1
        toNode.in+=1
        const newEdges =new GEdge(weight,fromNode,toNode)
        fromNode.edges.push(newEdges) //添加关联的边
        graph.edges.add(newEdges) // 边集合添加边
    }
    return graph
}