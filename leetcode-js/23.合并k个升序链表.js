/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 const merge2list = function (L1, L2) {
    if (!L1 || !L2) return L1 ? L2 : L1;

    let p1 = L1;
    let p2 = L2;
    console.log(L1, L2);
    const root = new ListNode(0);
    let node = root;

    while (p1?.val && p2?.val) {
        if (p1.val < p2.val) {
            node.next = p1;
            p1 = p1.next;
        } else {
            node.next = p2;
            p2 = p2.next;
        }
        node = node.next;
    }
    node.next = p1 ?? p2;
    return root.next;
};
const merge = function (list, idxl, idxR) {
    if (idxl === idxR) return list[idxl];
    if (idxl > idxR) return null;
    const mid = (idxl + idxR) >> 1;

    return merge2list(merge(list, idxl, mid), merge(list, mid + 1, idxR));
};

/**
 * 分治
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
    return merge(lists, 0, lists.length - 1);
};
// @lc code=end

