class Element {
    public value: unknown
    constructor(value: unknown) {
        this.value = value
    }
}
// 使用当前并查集需要 一开始将全部元素添加哦到集合中
export class DisjointSet {

    public elementMap: Map<unknown, Element>
    //记录节点的父节点
    public fatherMap: Map<Element, Element>

    //表示节点下子节点个数
    public sizeMap: Map<Element, number>

    constructor(arr: Array<unknown>) {
        this.elementMap = new Map()
        this.fatherMap = new Map()
        this.sizeMap = new Map()

        arr.forEach((item: unknown) => {
            const eleItem = new Element(item)
            this.elementMap.set(item, eleItem)
            this.fatherMap.set(eleItem, eleItem)
            this.sizeMap.set(eleItem, 0)
        })
    }

    //查询父节点 并压缩
    private findHead(node: Element): Element {

        let currentNode = node
        const pathNodeArrs: Array<Element> = []
        while (this.fatherMap.get(node) !== node) {
            pathNodeArrs.push(currentNode)
            currentNode = this.fatherMap.get(node) as Element
        }

        //压缩
        while (pathNodeArrs.length) {
            const pathNode = pathNodeArrs.shift() as Element
            this.fatherMap.set(pathNode, currentNode)
        }

        return currentNode

    }

    /**
     * 判断两个节点是否在
     * @param a 
     * @param b 
     */
    isSameSet(a: unknown, b: unknown): boolean {
        if (this.elementMap.has(a) && this.elementMap.has(b)) {
            const ahead = this.findHead(this.elementMap.get(a) as Element)
            const bhead = this.findHead(this.elementMap.get(b) as Element)

            return ahead === bhead ? true : false
        }
        return false
    }
    // 合并两个节点所在集合
    union(a: unknown, b: unknown) {
        if (this.elementMap.has(a) && this.elementMap.has(b)) {

            const ahead = this.findHead(this.elementMap.get(a) as Element)
            const bhead = this.findHead(this.elementMap.get(b) as Element)
            if (ahead === bhead) return
            const aSize = this.sizeMap.get(ahead) as number
            const bSize = this.sizeMap.get(bhead) as number

            const bigger = aSize > bSize ? ahead : bhead
            const smaller = ahead == bigger ? bhead : ahead

            // 合并
            this.fatherMap.set(smaller, bigger)
            const bigSize = this.sizeMap.get(bigger) as number
            const smallSize = this.sizeMap.get(smaller) as number
            this.sizeMap.set(bigger, bigSize + smallSize)
            this.sizeMap.delete(smaller)
        }
    }

}
