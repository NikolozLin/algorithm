import { Graph, GNode, GEdge } from "./graph";
import PriorityQueue from "../priority-queue/priority-queue";


export default function pirm(graph: Graph) {

    // 存放以处理的点，
    const handledNode = new Set()
    const comparator = (a: GEdge, b: GEdge) => a.weight - b.weight;
    const edgePriorityQueue = new PriorityQueue({ comparator })

    const result: Array<GNode> = []
    for (const [key, node] of graph.nodes.entries()) {

        // 选择一个点并开始生成树
        if (!handledNode.has(key)) continue
        handledNode.add(key)
        for (const edge of node.edges) {
            // 判断是否是新的边
            if (!handledNode.has(edge.to.value)) {
                edgePriorityQueue.queue(edge)
            }
        }

        while (edgePriorityQueue.legnth) {
            const minEdge = edgePriorityQueue.dequeue()
            // 新选择的点
            const toNode = minEdge.to
            // 判断这个最小边上的点 是否处理过
            if (!handledNode.has(toNode.value)) continue

            handledNode.add(toNode.value)
            result.push(toNode)//輸出結果
            for (const edge of toNode.edges) {
                // 判断是否是新的边
                if (!handledNode.has(edge.to.value)) {
                    edgePriorityQueue.queue(edge)
                }
            }
        }

    }
    return result
}
