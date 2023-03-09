/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
 const LRUCache = function (capacity) {
    this.map = new Map();
    this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.map.has(key)) {
        const temp = this.map.get(key);
        this.map.delete(key);
        this.map.set(key, temp);
        return temp;
    }
    return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    // console.log(`put:${key} size : ${this.map.size} capacity:${ this.capacity}`)
    if (this.map.has(key)) {
        this.map.delete(key);
    }else if (this.map.size >= this.capacity) {
        const deleteKey = this.map.keys().next().value;
        this.map.delete(deleteKey);
        
    }
    this.map.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

