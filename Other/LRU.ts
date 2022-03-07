class LinkNode{
    public prior:LinkNode;
    public next:LinkNode;
    public key:string;
    public value:unknown;
    constructor(key:string,value:unknown){
        this.key=key
        this.value=value
        this.prior=this;
        this.next=this;
    }
}

export class LRUCacheNormal{
    public Pointer:LinkNode
    public capacity:number;
    public size:number;
    public hasMap:Map<string,LinkNode>
    constructor(capacity:number){
        this.Pointer= new LinkNode('head',null); //头节点
        this.capacity=capacity;
        this.size=0;
        this.hasMap= new Map();
    }
   
    put(key:string,value:any){
      if(this.hasMap.has(key)){
        const node =this.hasMap.get(key) as LinkNode;
        node.value=value;
        if(node.next==this.Pointer)return


        node.prior.next= node.next;
        node.next.prior=node.prior;

        node.prior= this.Pointer.prior
        this.Pointer.prior.next =node
      
        node.next =this.Pointer
        this.Pointer.prior=node
      }else{  
        // 
        if(this.size>=this.capacity){
          const removeNode= this.Pointer.next;
          this.Pointer.next.next.prior=this.Pointer;
          this.Pointer.next=this.Pointer.next.next;
          this.hasMap.delete(removeNode.key)
        }
        const rearNode=this.Pointer?.prior;
        const newNode= new LinkNode(key,value);
        
        newNode.prior = rearNode;
        newNode.next = rearNode.next;
        rearNode.next=newNode;
        this.Pointer.prior=newNode;
        this.hasMap.set(key,newNode);
      }

    }

     //访问数据访问缓存，需要移动到最后，访问不到放回-1
    get(key:string){
      if(this.hasMap.has(key)){
        const node= this.hasMap.get(key) as LinkNode
        if(node.next==this.Pointer)return node

        node.prior.next= node.next;
        node.next.prior=node.prior;

        node.prior= this.Pointer.prior
        this.Pointer.prior.next =node
      
        node.next =this.Pointer
        this.Pointer.prior=node

      }
        return -1
    }
}


// 单用Map结构
//js 的map keys 返回的时候一个iterator 。这个iterator根据插入顺序逐个返回。可以灵活代替链表
export class LRUCache {
    capacity: number; // 容量
    cache: Map<number, number | null>; // 缓存
    constructor(capacity: number) {
      this.capacity = capacity;
      this.cache = new Map();
    }
    //访问数据 更新到链尾部
    get(key: number): number {
      if (this.cache.has(key)) {
        const temp = this.cache.get(key) as number;
        //访问到的 key 若在缓存中，将其提前
        this.cache.delete(key);
        this.cache.set(key, temp);
        return temp;
      }
      return -1;
    }
    put(key: number, value: number): void {
      if (this.cache.has(key)) {
        this.cache.delete(key);
        //存在则删除，if 结束再提前
      } else if (this.cache.size >= this.capacity) {
        // 超过缓存长度,淘汰最近没使用的
        this.cache.delete(this.cache.keys().next().value);
        console.log(`refresh: key:${key} , value:${value}`)
      }
      this.cache.set(key, value);
    }
    toString(){
      console.log('capacity',this.capacity)
      console.table(this.cache)
    }
  }
