import { time } from "console"

 class Element{
    public value:any
    constructor(value:any){
        this.value=value
    }
 }
 // 使用当前并查集需要 一开始将全部元素添加哦到集合中
 export class DisjointSet{

    public contentMap:Map<unknown,Element>
    //记录节点的父节点
    public fatherMap:Map<Element,Element>

    //表示节点下子节点个数
    public sizeMap:Map<Element,number>

    constructor(arr:Array<unknown>){
        this.contentMap= new Map()
        this.fatherMap= new Map()
        this.sizeMap= new Map()

        arr.forEach((item:unknown)=>{
            const eleItem= new Element(time)
            this.contentMap.set(item,eleItem)
            this.contentMap.set(eleItem,eleItem)
            this.sizeMap.set(eleItem,0)
        })
    }


/**
 * 判断两个节点是否在
 * @param a 
 * @param b 
 */
    isSameSet(a:Element,b:Element){

    }

}
