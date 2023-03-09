/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let fast=head.next;
    let slow =head;
    let pre =null

    while (fast){
        let isOdd=true
        if(!fast.next) isOdd= false; //如果下个节点是null 就是偶数个节点
        fast =fast?.next?.next;

        let next=slow.next;
        slow.next=pre;
        pre=slow;
        slow=next;

        if(!fast){//开始判断回文；
            if(isOdd){
                slow=slow.next;
            }
            while(pre&&slow){
                if(pre.val!==slow.val)return false;
                pre=pre.next;
                slow=slow.next;
            }
        }
    }

    return true

};
// @lc code=end

