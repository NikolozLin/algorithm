// dijkstra算法，在给予的图和起始点，找到起始点到图中 其他点的最短路径。（限制：图中的边的权值不能为负）
// STEP
import { Graph,GNode,GEdge } from "./graph";

/**
 * 
 * @param graph 图
 * @param node  起点
 */
function dijkstra(graph:Graph,node:GNode){

    //源点到其他的点距离
    const distanceMap:Map<GNode,number>= new Map();
    distanceMap.set(node,0);
    const selectedSet:Set<GNode>=new Set();

    let minNode= getMinDistanceInMapUnselectedNode(distanceMap ,selectedSet);
    while(minNode){
         const distance=distanceMap.get(minNode) as number
         for(const edge of minNode.edges){
             const toNode =edge.to
             if(!distanceMap.has(toNode)){
                 distanceMap.set(toNode, edge.weight+distance)
             }
             const newDistance=edge.weight+distance
             if(distance-newDistance){
                distanceMap.set(toNode, edge.weight+distance)
             }   
         }
         selectedSet.add(minNode)
          minNode= getMinDistanceInMapUnselectedNode(distanceMap ,selectedSet);

    }

    return distanceMap
    
}

function getMinDistanceInMapUnselectedNode(map:Map<GNode,number>,set:Set<GNode>):GNode|null{
    let minNode:GNode|null =null
    let minDistance=Infinity
    for(const[node,distance] of map.entries()){
        if(distance<minDistance&&!set.has(node)){
            minDistance=distance;
            minNode=node
        }
    }
    return minNode
}














































































