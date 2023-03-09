/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
const TrieNode = function (val) {
    this.val = val;
    this.count = 1;
    this.end = 0;
    this.next = new Map();
};
const Trie = function () {
    this.tree = new Map();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let cur = this.tree;
    for (let i = 0; i < word.length; i++) {
        const ch = word.charAt(i);
        if (cur.has(ch)) {
            cur.get(ch).count += 1;
        } else {
            cur.set(ch, new TrieNode(ch));
        }
        if (i === word.length - 1) cur.get(ch).end += 1;
        cur = cur.get(ch).next;
    }
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let cur = this.tree;
    for (let i = 0; i < word.length; i++) {
        const ch = word.charAt(i);
        if (cur.has(ch)) {
            if (i === word.length - 1 && cur.get(ch).end !== 0) return true;
            cur = cur.get(ch).next;
        } else {
            return false;
        }
    }
    return false;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let cur = this.tree;
    for (let i = 0; i < prefix.length; i++) {
        const ch = prefix.charAt(i);
        if (!cur.has(ch)) {
            return false;
        }
        cur = cur.get(ch).next;
    }
    return true;
};



/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

