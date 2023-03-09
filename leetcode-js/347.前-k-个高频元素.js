/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start

class Heap {
    constructor(initArray, comparator) {
        this.data = initArray ?? [];
        this.comparator = comparator; // -1 A在B前  0 不变  1 B在A前
        this.heapify();
    }

    heapify() {
        if (this.data.length > 0) {
            for (let i = 0; i < this.data.length; i++) {
                this.bubbleUp(i);
            }
        }
    }

    bubbleUp(pos) {
        while (pos > 0) {
            const parent = (pos - 1) >> 1;
            if ((this.comparator(this.data[pos], this.data[parent])) < 0) {
                [this.data[pos], this.data[parent]] = [this.data[parent], this.data[pos]];
                pos = parent;
            } else {
                break;
            }
        }
    }

    bubbleDown(pos) {
        const last = this.data.length-1;
        let left = (pos << 1) + 1;
        while (left <= last) {
            const right = left + 1;
            let maxIdx = pos;
            if (left <= last && (this.comparator(this.data[left], this.data[maxIdx])) < 0) {
                maxIdx = left;
            }
            if (right <= last && (this.comparator(this.data[right], this.data[maxIdx])) < 0) {
                maxIdx = right;
            }
            if (maxIdx !== pos) {
                [this.data[pos], this.data[maxIdx]] = [this.data[maxIdx], this.data[pos]];
                pos = maxIdx;
                left = (pos << 1) + 1;
            } else {
                break;
            }
        }
    }
    size(){
        return this.data.length;
    }
    // 入堆
    queue(value) {
        this.data.push(value);
        this.bubbleUp(this.data.length - 1);
    }

    // 出堆
    dequeue() {
        [this.data[0], this.data[this.data.length - 1]] = [this.data[this.data.length - 1], this.data[0]];
        const value = this.data.pop();
        this.bubbleDown(0);
        return value;
    }

    peek() {
        return this.data[0];
    }

    clear() {
        this.data.length = 0;
    }
}


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {

    const frequentMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (frequentMap.has(nums[i])) {
            frequentMap.set(
                nums[i],
                frequentMap.get(nums[i]) + 1
            )
        } else {
            frequentMap.set(nums[i], 1)
        }
    }

    // 小根堆
    function comparator(a,b){
        return  a[1]-b[1]
    }
    const minHeap= new Heap([],comparator)
    for(let [key,fre] of frequentMap.entries()){
        if(minHeap.size()>=k){
            if(minHeap.peek()[1]<fre){

                minHeap.dequeue()
                minHeap.queue([key,fre])
            }else{
                continue;
            }
        }else{
            minHeap.queue([key,fre])
        }
      
    }
    return minHeap.data.map(i=>i[0])

};
// @lc code=end
// topKFrequent(
// [5,3,1,1,1,3,5,73,1]
// ,3)