import other2graph  from "./other2graph";
import { BFS,DFS } from "./1 BFS&DFS";
import { GNode } from "./graph";

const testData:Array<[string,string,number]>=[
    ['A','B',5],
    ['B','C',5],
    ['A','B',5],
]

const graph =other2graph(testData)

BFS(graph.nodes.get('A') as GNode)

