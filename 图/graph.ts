
 export class GEdge{

    public weight:number //权值
    public from :GNode
    public to :GNode
   
    constructor(weight:number, from :GNode,to :GNode){
        this.weight = weight, //权值
        this.from = from,
        this.to = to
    }
}
export class GNode{
   
    public value:string // 图具体内容
    public in:number    //图节点的 入度
    public out:number  //图节点的 出度
    public nexts:Array<GNode>  //当前节点的发散出的 点 集合
    public edges:Array<GEdge>  //当前节点的发散出的  边 集合

    constructor( value:string ){
        this.value=value
        this.in =0
        this.out =0
        this.nexts = []
        this.edges =[]
    }

}
export class Graph{
    
    // 点集合 <点编号:sting|number,点实例>
    public nodes :Map<string,GNode>
    // 边集合
    public edges :Set<GEdge>

    constructor(){
        this.nodes = new Map()
        this.edges = new Set()

    }

}