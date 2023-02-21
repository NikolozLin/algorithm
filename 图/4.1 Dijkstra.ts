// dijkstra算法，在给予的图和起始点，找到起始点到图中 其他点的最短路径。（限制：图中的边的权值不能为负）
// STEP
import { Graph, GNode, GEdge } from "./graph";

/**
 * 
 * @param graph 图
 * @param node  起点
 */
function dijkstra(graph: Graph, node: GNode) {

    //起点到其他点的最短路径
    const distanceMap: Map<GNode, number> = new Map();
    // 设置起始点  <自己到自己，距离为0>
    distanceMap.set(node, 0);
    const selectedSet: Set<GNode> = new Set();

    let minNode = getMinDistanceInMapUnselectedNode(distanceMap, selectedSet);
    // 上个加入最短路径的节点出发，更新起点到各个节点的 distanceMap
    while (minNode) {
        const distance = distanceMap.get(minNode) as number
        for (const edge of minNode.edges) {
            const toNode = edge.to
            if (!distanceMap.has(toNode)) {
                distanceMap.set(toNode, edge.weight + distance)
            }
            const newDistance = edge.weight + distance
            if (distance - newDistance) {
                distanceMap.set(toNode, edge.weight + distance)
            }
        }
        selectedSet.add(minNode)
        minNode = getMinDistanceInMapUnselectedNode(distanceMap, selectedSet);

    }

    return distanceMap

}

// 
/**
 * 获得 给定起点，和当前状态 ，返回最短路径的节点
 * @param map 记录最短路径的map
 * @param set 已经处理的点集合
 * @returns 返回短路径的节点
 */
function getMinDistanceInMapUnselectedNode(map: Map<GNode, number>, set: Set<GNode>): GNode | null {
    let minNode: GNode | null = null
    let minDistance = Infinity
    for (const [node, distance] of map.entries()) {
        if (distance < minDistance && !set.has(node)) {
            minDistance = distance;
            minNode = node
        }
    }
    return minNode
}














































































