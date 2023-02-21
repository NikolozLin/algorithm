# Morris

别名线索二叉树

## 问题要求

要求：时间复杂度 O(n) 空间复杂度O(1) 遍历二叉树

## Morris遍历细节

假设来到当前节点 `cur` ,

1. 如果cur没有左孩子，cur向右移动（cur=cur.right）

2. 如果 `cur` 有左孩子， 在左子树上的最右的节点 `mostRight`：
    - 如果`mostRight`的右指针指向null,让其指向cur，然后cur向 左 移动（cur=cur.left）
    - 如果`mostRight`的右指针指向cur,让其指向null，然后cur向 右 移动（cur=cur.right）

3. cur为空时遍历结束

## 时间复杂度

从上时间耗时 主要看两部分：

1. 主循环 N
2. 每次循环 查找mostRight  时间复杂度总和毕竟2N

算法总的时间复杂度O(N)

## 通过morris遍历 生成 先、中 、后序遍历

看代码

### 后序遍历

1. 如果没有左子树，打印当前节点
2. 当第二次回到一个节点的时候， 逆序打印左子树的右边界。
3. 逆序打印全树右边界。
