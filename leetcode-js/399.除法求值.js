/*
 * @lc app=leetcode.cn id=399 lang=javascript
 *
 * [399] 除法求值
 */
// @lc code=start


class Element {
    constructor(value) {
        this.value = value
        this.score = 1// 父节点/当前节点值
    }
}
// 使用当前并查集需要 一开始将全部元素添加哦到集合中
class DisjointSet {
    constructor(arr) {
        this.elementMap = new Map()
        this.fatherMap = new Map()
        this.sizeMap = new Map()

        arr.forEach((item) => {
            const eleItem = new Element(item)
            this.elementMap.set(item, eleItem)
            this.fatherMap.set(eleItem, eleItem)
            this.sizeMap.set(eleItem, 0)
        })
    }

    //查询父节点 并压缩
    findHead(a) {

        let currentNode = this.elementMap.get(a)
        const pathNodeArrs = []
        while (this.fatherMap.get(currentNode) !== currentNode) {
            pathNodeArrs.push(currentNode)
            currentNode = this.fatherMap.get(currentNode)
        }

        //压缩路径 并修改权重分数
        while (pathNodeArrs.length) {
            const pathNode = pathNodeArrs.pop()
            if (this.fatherMap.get(pathNode) == currentNode) continue;
            const oldFather = this.fatherMap.get(pathNode)
            const oldFatherScore = this.elementMap.get(oldFather.value).score
            this.elementMap.get(pathNode.value).score *= oldFatherScore
            // this.elementMap.get(pathNode).score=this.elementMap.get(pathNode).score*oldFatherScore
            this.fatherMap.set(pathNode, currentNode)
        }

        return currentNode

    }

    /**
     * 判断两个节点是否在
     * @param a 
     * @param b 
     */
    isSameSet(a, b) {
        if (this.elementMap.has(a) && this.elementMap.has(b)) {
            const ahead = this.findHead(a)
            const bhead = this.findHead(b)

            return ahead === bhead ? true : false
        }
        return false
    }
    // 合并两个节点所在集合 score是 a/b的值
    union(a, b, score) {
        if (this.elementMap.has(a) && this.elementMap.has(b)) {

            const ahead = this.findHead(a)
            const bhead = this.findHead(b)
            if (ahead === bhead) return
            const aSize = this.sizeMap.get(ahead)
            const bSize = this.sizeMap.get(bhead)

            const bigger = aSize >= bSize ? ahead : bhead
            const smaller = ahead == bigger ? bhead : ahead


            // ah/bh
            let ahDivideBhScore = this.elementMap.get(a).score / this.elementMap.get(b).score * score
            // 合并
            if (smaller == ahead) {
                this.elementMap.get(smaller.value).score = 1 / ahDivideBhScore;
            } else {
                this.elementMap.get(smaller.value).score = ahDivideBhScore;
            }
            this.fatherMap.set(smaller, bigger)
            const bigSize = this.sizeMap.get(bigger)
            const smallSize = this.sizeMap.get(smaller)
            this.sizeMap.set(bigger, bigSize + smallSize)
            this.sizeMap.delete(smaller)
        }
    }

    getElementScore(item) {
        return this.elementMap.get(item).score
    }
    hasElement(item) {
        return this.elementMap.has(item)
    }

}

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {

    // const result = []
    //  bian p
    const flatArr = (arr) => Array.isArray(arr) ? [...arr.reduce((a, b) => [...a, ...flatArr(b)], [])] : [arr];
    const allElement = [... new Set(flatArr(equations))];
    //全部元素建立disjointset
    const disJointSet = new DisjointSet(allElement); //分子为fu
    equations.forEach(([a, b], index) => {
        disJointSet.union(a, b, values[index])
    })

    const result = queries.map(([a, b]) => {
         if (!disJointSet.hasElement(a) || !disJointSet.hasElement(b)) return -1.0
        const ahead = disJointSet.findHead(a)
        const bhead = disJointSet.findHead(b)
        if (ahead === bhead) {
            return disJointSet.elementMap.get(b).score / disJointSet.elementMap.get(a).score
        }
        return -1.0
        // if (disJointSet.hasElement(a) && disJointSet.hasElement(b)) {
        //     if (a == b) return 1.0;

        //     return -1.0

        // } else {
        //     return -1.0;
        // }
    })

    return result;
};
// @lc code=end

// const equations = [["a","b"],["e","f"],["b","e"]]
// const values = [3.4,1.4,2.3]
// const queries = [["a","f"]]
// const equations = [["a", "b"], ["b", "c"]]
// const values = [2.0, 3.0]
// const queries = [["a", "c"]]

// calcEquation(equations, values, queries)