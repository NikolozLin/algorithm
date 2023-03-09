/*
 * @lc app=leetcode.cn id=743 lang=javascript
 *
 * [743] 网络延迟时间
 */

// @lc code=start

//priorityQueue
class MyPriorityQueue {

    constructor(options) {
        this.comparator = options.comparator;
        this.data = options.initValues ?? []
        this._heapify()
    }

    _heapify() {
        if (this.data.length > 0) {
            for (let i = 0; i < this.data.length; i++) {
                this._bubbleUp(i)
            }
        }

    }

    _bubbleUp(pos) {
        while (pos > 0) {
            const parent = (pos - 1) >>> 1;
            if (this.comparator(this.data[parent], this.data[pos]) < 0) {
                [this.data[parent], this.data[pos]] = [this.data[pos], this.data[parent]]
                pos = parent
            } else {
                break;
            }
        }
    }
    _bubbleDown(pos) {
        const last = this.data.length;
        let left = (pos << 1) + 1;
        while (left < last) {
            const right = left + 1;
            let minIndex = pos;
            if (left < last && this.comparator(this.data[minIndex], this.data[left]) < 0) {

                minIndex = left
            }
            if (right < last && this.comparator(this.data[minIndex], this.data[right]) < 0) {

                minIndex = right
            }
            if (minIndex != pos) {
                [this.data[minIndex], this.data[pos]] = [this.data[pos], this.data[minIndex]]
                pos = minIndex;
                left = (pos << 1) + 1;

            } else {
                break;
            }
        }
    }
    //=============================================
    queue(value) {
        this.data.push(value);
        this._bubbleUp(this.data.length - 1);

    }

    dequeue() {
        const lastIdx = this.data.length - 1;
        [this.data[0], this.data[lastIdx]] = [this.data[lastIdx], this.data[0]];
        const value = this.data.pop();
        this._bubbleDown(0);
        return value;

    }

    isEmpty() {
        return !this.data.length
    }
    peek() {
        return this.data[0];
    }

    clear() {
        this.data = []
    }

}





/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {

    //使用链式前向星存储 数据
    const nodes = new Array(n + 1).fill(-1);
    const edges = new Array(); // Array<[to,weight，next]>
    let cnt = 0;
    function addEdge(u, v, w) {
        const edge = [v, w, nodes[u]];
        edges[cnt] = edge;
        nodes[u] = cnt++;
    }

    // 生产数据结构
    times.forEach(([u, v, w]) => {
        addEdge(u, v, w);
    })

    //
    const distance = new Array(n + 1).fill(Infinity);// Map<node,distance>
    const visited = new Set();
    distance[k] = 0;
    // 优先级队列

    function dijkstra() {

        const q = new MyPriorityQueue({
            comparator: (a, b) => b[1] - a[1],
            initValues: []
        })
        q.queue([k, 0]);
        while (!q.isEmpty()) {
            const minNode = q.dequeue();
            const [from, next] = minNode;
            if (visited.has(from)) continue;
            visited.add(from);
            // 当前节点到关联边
            for (let i = nodes[from]; i !== -1; i = edges[i][2]) {
                const [to, weight] = edges[i];
                if (distance[to] > distance[from] + weight) {
                    distance[to] = distance[from] + weight;
                    q.queue([to, distance[to]])
                    //存入小根堆中，如果存在相同 to 必定费用小的先取出并记录到 visited中
                    //相同的 to 第二次去除不回考虑它的路径
                }
            }
        }
    }
    dijkstra()
    let max = -1
    for (let i = 1; i < distance.length; i++) {

        if (distance[i] == Infinity ) return -1
        if(i!== k) {
            max = Math.max(max, distance[i]);
        }
    }
    return max
};
// networkDelayTime(
// [[2,1,1],[2,3,1],[3,4,1]],
// 4,
// 2)
// @lc code=end

