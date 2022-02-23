import { type } from "os";

interface TreeNode {
    value: string;
    left: null | TreeNode;
    right: null | TreeNode;

}
// 返回信息，不同问题返回数据不同
type returnInfo = {
    isbalanced: boolean,
    height: number
}
function isBalanced(head: TreeNode): boolean {

    return false;
}

// 递归主体
function loop(head: TreeNode | null): returnInfo {
    if (head == null) {
        return { isbalanced: true, height: 0 }
    }
    const leftReturn = loop(head.left)
    const rightReturn = loop(head.right)
    // 加工返回信息
    const height = Math.max(leftReturn.height, rightReturn.height)
    const isbalanced = leftReturn.isbalanced && rightReturn.isbalanced && (Math.abs(leftReturn.height - rightReturn.height) < 2)

    return { isbalanced, height }
}