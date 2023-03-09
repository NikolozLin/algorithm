/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {

    const hasSet= new Set();
    let curA=headA;
    let curB=headB;
    while(curA){
        hasSet.add(curA);
        curA=curA.next;
    }
    while(curB){
        if(hasSet.has(curB)) return curB;
        hasSet.add(curB);
        curB=curB.next;
    }
    return null
    
};
// @lc code=end

