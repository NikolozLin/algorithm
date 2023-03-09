/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let cur =head
    const hasSet= new Set()
    // hasSet.add(cur)

    while(cur&&!hasSet.has(cur)){
        hasSet.add(cur)
        cur =cur.next
    }
    if(cur) return true;
    
    return false;
    
};
// @lc code=end

