import { DisjointSet } from "../disjoint-set/disjoint-set";
import PriorityQueue from "../priority-queue/priority-queue";
import { Graph,GNode,GEdge } from "./graph";



// 选取图中权最小的边
// 如果边两端点不在同个集合，就加入生成树
// 循环上面的过程
export default function kruskal(graph:Graph) {

    // 初始化并查集合
    const disjointSet = new DisjointSet([...graph.nodes.keys()])

    function comparator(a:GEdge,b:GEdge):number{

        return a.weight-b.weight;
    }

    const minEdgeHeap = new PriorityQueue({comparator, initialValues:[... graph.edges]})

    while(minEdgeHeap.legnth){

        const minEdge=minEdgeHeap.dequeue();
        const from =minEdge.from.value;
        const to =minEdge.to.value;
       
        if(!disjointSet.isSameSet(from,to)){
            disjointSet.union(from,to);
        // 打印最小生成树的节点
        console.log(`from${from} to ${to}`);
        }
    }


    

}
