interface TreeNode {
    value: string;
    left: TreeNode | null;
    right: TreeNode | null;
}

function morris(head: TreeNode | null) {
    if (head == null) return;

    let cur = head
    let mostRight = null
    while (cur != null) {
        mostRight = cur.left
        //有左子树
        if (mostRight != null) {
            //取真正 左树最右节点
            while (mostRight.right != null && mostRight.right != cur) {
                mostRight = mostRight.right
            }
            //
            if (mostRight.right == null) {
                mostRight.right = cur
                cur = cur.left as TreeNode
                continue
            } else {
                mostRight.right = null
            }
        }

        // 没有左子树，cur 向右移动
        cur = cur.right as TreeNode

    }
}

// 先序遍历
function morrisPre(head: TreeNode | null) {
    if (head == null) return;

    let cur = head
    let mostRight = null
    while (cur != null) {
        mostRight = cur.left
        if (mostRight != null) {
            while (mostRight.right != null && mostRight.right != cur) {
                mostRight = mostRight.right
            }

            if (mostRight.right == null) {
                console.log(' 先序：有子树第一次来到 打印');
                console.log(cur.value)

                mostRight.right = cur
                cur = cur.left as TreeNode
                continue
            } else {
                //第二次来到相同节点 不答应继续
                mostRight.right = null
            }
        } else {
            console.log('没有左树直接打印');
            console.log(cur.value)
        }
        cur = cur.right as TreeNode
    }
}
// 中序遍历
function morrisMid(head: TreeNode | null) {
    if (head == null) return;

    let cur = head
    let mostRight = null
    while (cur != null) {
        mostRight = cur.left
        if (mostRight != null) {
            while (mostRight.right != null && mostRight.right != cur) {
                mostRight = mostRight.right
            }

            if (mostRight.right == null) {
                // console.log(' 先序：有子树第一次来到 打印');

                mostRight.right = cur
                cur = cur.left as TreeNode
                continue
            } else {
                //第二次来到相同节点 不答应继续
                mostRight.right = null
            }
        }
        console.log('中序：没有左树直接打印');
        console.log('中序：第二次来到同个节点，没有continue 直接打印');

        cur = cur.right as TreeNode
    }
}

// --------------------------------后序遍历------------------------
//1. 第二次来到同个节点，逆序打印左树右边界
//2。全部遍历完后 逆序打印整个树的 右边界
function morrisPost(head: TreeNode | null) {
    if (head == null) return;

    let cur = head
    let mostRight = null
    while (cur != null) {
        mostRight = cur.left
        if (mostRight != null) {
            while (mostRight.right != null && mostRight.right != cur) {
                mostRight = mostRight.right
            }

            if (mostRight.right == null) {
                mostRight.right = cur
                cur = cur.left as TreeNode
                continue
            } else {
                //第二次来到相同节点 逆序打印左子树右边界
                mostRight.right = null
                printEdge(cur.left)
                
            }
        }
        cur = cur.right as TreeNode
    }
    printEdge(head); //打印全树右边界
}

// 逆序打印左树右边界
function printEdge(head: TreeNode|null) {
    if(head==null)return
    const tail = reverseEdge(head)
    let cur = tail
    while (cur != null) {
        console.log('逆序打印');
        cur = cur.right
    }
    reverseEdge(tail)
}

//逆序
function reverseEdge(from: TreeNode | null) {
    let pre: TreeNode | null = null;
    let next: TreeNode | null = null;
    while (from != null) {
        next = from.right
        from.right = pre;
        pre = from;
        from = next;
    }
    return pre
}