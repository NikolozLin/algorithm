// 用字符串表示一个树，并且可以还原成一个树的原始结构。
// 用_表示 使用节点结束，用#表示空

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

function serialByPre(head:TreeNode|null){
    if(head==null)return '#_'

    let res =head.value+'_';
    res+=serialByPre(head.left);
    res+=serialByPre(head.right);
    return res;
}
//通过序列化后的字符串，反序列化为原始结构。

/**
 * 
 * @param treeQueue 字符串进行分割 _ 的数组 
 */
function recoverByPre(strArrs:Array<string>){
    const value =strArrs.shift()
    if(value==='#') return null //因为序列化的时候，遍历到叶节点完后 是以 # 结尾

    const node = new TreeNode(value as string)
    node.left=recoverByPre(strArrs)
    node.right=recoverByPre(strArrs)
    return node;
}