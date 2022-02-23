import { type } from "os";

interface TreeNode{
    value:string;
    left:null|TreeNode;
    right:null|TreeNode;

}
type returnInfo={
    isbalanced:boolean,
    height:number
}
function isBalanced(head:TreeNode):returnInfo{

    return {
        isbalanced:false,
        height:0
    }

}

// 递归主体
function handle