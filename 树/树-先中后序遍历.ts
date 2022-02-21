class TreeNode {
    public value: string;
    public left: TreeNode | null;
    public right: TreeNode | null;

    constructor(value: string) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


function preOrderTraversal(head: TreeNode) {
    console.log(head.value)//do something
    if (head.left !== null) {
        preOrderTraversal(head.left as TreeNode)
    }
    if (head.right !== null) {
        preOrderTraversal(head.right as TreeNode)
    }

}


function inOrderTraversal(head: TreeNode) {
    if (head.left !== null) {
        inOrderTraversal(head.left as TreeNode)
    }
    console.log(head.value)//do something
    if (head.right !== null) {
        inOrderTraversal(head.right as TreeNode)
    }

}

function postOrderTraversal(head: TreeNode) {
    if (head.left !== null) {
        postOrderTraversal(head.left as TreeNode)
    }
    if (head.right !== null) {
        postOrderTraversal(head.right as TreeNode)
    }


    console.log(head.value)//do something
}

//=======非递归版本


function preOrder(head: TreeNode) {
    if (!head) return
    const stack: TreeNode[] = []
    stack.push(head)
    while (!stack.length) {
        const current = stack.pop() as TreeNode
        console.log('do something!');
        if (current.right != null) {
            stack.push(current.right as TreeNode)
        }
        if (current.left != null) {
            stack.push(current.left as TreeNode)
        }
    }
}
function inOrder(head: TreeNode) {
    if (!head) return
    const stack: TreeNode[] = []
    stack.push(head)
    while (!stack.length) {

    }

}
function postOrder(head: TreeNode) {
  if (!head) return
    const stack: TreeNode[] = []
    stack.push(head)
    while (!stack.length) {

    }
}
