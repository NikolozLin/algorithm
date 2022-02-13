import { Graph, GNode, GEdge } from "./graph";

//拓扑排序（有向图）
// 选入度为0的点 为头节点
// 输出点，并去除该点的影响（边），继续找下个入度为0 的点
function topologicalSort(graph: Graph) {

    const map: Map<string, number> = new Map()
    const zeroQueue: Array<GNode> = []
    for (let node of graph.nodes.values()) {
        map.set(node.value, node.in)
        if (node.in === 0) zeroQueue.push(node)
    }
    // 拓扑排序算法
    const resultQueue: Array<GNode> = []

    while (!zeroQueue.length) {
        const cur = zeroQueue.shift() as GNode
        resultQueue.push(cur)
        for (let next of cur.nexts) {
            const value: string = next.value
            map.set(value, map.get(value) as number - 1)
            if (map.get(value)==0) zeroQueue.push(next)
        }

    }
    return resultQueue

}