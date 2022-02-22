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
        const head = stack.pop() as TreeNode
        console.log('do something!');
        if (head.right != null) {
            stack.push(head.right as TreeNode)
        }
        if (head.left != null) {
            stack.push(head.left as TreeNode)
        }
    }
}
//1.遇到左树就入栈
// 2.没有左树就打印
// 3.有右树重复过程，
// 进栈时：头左过程，出栈时左头的顺序，所以整个树给完美非分隔
function inOrder(head: TreeNode|null) {
    if (!head) return
    const stack: TreeNode[] = []
    while (!stack.length) {
        if(head!=null){
            stack.push(head);
            head=head.left 
        }else{
            head=stack.pop()  as TreeNode;
            console.log('do something');
            head=head.right
        }
    
    }

}
function postOrder(head: TreeNode) {
    if (!head) return
    const stack: TreeNode[] = []
    stack.push(head)

    const result: TreeNode[] = []
    while (!stack.length) {
        const head = stack.pop() as TreeNode

        result.push(head)
        if (head.left != null) {
            stack.push(head.left as TreeNode)
        }
        if (head.right != null) {
            stack.push(head.right as TreeNode)
        }
    }

    result.reverse().forEach(node => console.log(node))
}
