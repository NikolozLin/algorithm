class DisjointSet{

    // 夫节点
    public parent: null |DisjointSet
    public value:string
    public rank :number //当前节点到根节点的 个数
    constructor(value:string){
        this.rank=0
        this.value=value
        this.parent=null
    }


    // 给定集合 添加到当前集合
    union(set:DisjointSet):boolean{
        return false
    }

    //查询给定的 原是 是否在当前集合中
    find(set:DisjointSet):boolean{
        
        
        
        return false

    }

}
