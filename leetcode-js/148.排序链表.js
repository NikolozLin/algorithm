/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * @return {ListNode}
 */
var sortList = function (head) {

    let h = head;
    let len = 0;
    let intv = 1;
    while (h) {
        h = h.next;
        len += 1;
    }

    const res = new ListNode(0, null);
    res.next = head;

    while (intv < len) {
        console.log(intv)
        let pre = res;
        let h = res.next;// 用一个额外节点记录当前间隔的循环 处理的位置
        while (h) {
            // 获取两个头节点
            let h1 = h;
            let i = intv;
            while (i && h) {
                h = h.next;
                i--;
            }
            // 第一部分长度，可能小于intv
            let c1 = intv - i;

            let h2 = h;
            i = intv;
            while (i && h) {
                h = h.next;
                i--;
            }
            // 第二部分长度，可能小于intv
            let c2 = intv - i;
            // console.log(`合并 ${h1.val} --${h2.val}`)
            // console.log(`合并len ${c1} --${c2}`)
            // 合并两部分
            while (c1 && c2) {
                if (h1.val < h2.val) {
                    pre.next = h1;
                    h1 = h1.next;
                    c1--;
                } else {
                    pre.next = h2;
                    h2 = h2.next;
                    c2--;
                }
                pre = pre.next;
            }
            // console.log(`2.合并len ${c1} --${c2}`)
            pre.next = c1 ? h1 : h2;
            // console.log(`合并 ${pre.next.val} `)

            while (c1 > 0 || c2 > 0) {
                pre = pre.next;
                c1 -= 1;
                c2 -= 1;
            }
            // console.log(`合并end ${c1} --${c2}`);
            // 合并完毕 暂时有序的列表末端 链接后续的节点 不然会形成环
            pre.next = h;
        }
        intv *= 2;

    }

    return res.next;

};
// @lc code=end

