/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum2 = function (root, targetSum) {
    // 两次递归 复杂度 n^2
    // 从每个节点为开始 向下寻找到路径和的数量
    let result = 0

    // 节点的开始找路径和
    function findSum(curNode, curSum) {
        if (!curNode) {
            // if(curSum===targetSum) result+=1;
            return;
        }
        let newSum = curSum + curNode.val;
        if (newSum === targetSum) result += 1;
        if (curNode.left) {
            findSum(curNode.left, newSum)
        }
        if (curNode.right) {
            findSum(curNode.right, newSum)
        }
    }

    // 递归全部节点
    function dfs(curNode) {
        if (!curNode) return;
        findSum(curNode, 0)
        if (curNode.left) {
            dfs(curNode.left)
        }
        if (curNode.right) {
            dfs(curNode.right)
        }

    }
    dfs(root)

    return result;

};


/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    //遍历树+前缀和
    //思路转换； 
    // 1.dfs遍历么每个子节点
    // 2. 每个子节点到根节点的路径是确定的，统计子节点到根节点的前缀和(包括当前节点值)，存放到 Map<前缀和，前缀和个数> 中
    // 3. 当前节点前缀和-路径上某个节点的前缀和= targetSum，说明路径上存目标路径 
    // 4. Map 存储前缀和个数 +1
    // 5. 递归子节点
    // 6. Map 存储前缀和个数 -1
    // 7. 返回 当前节点目标个数+ 左边符合要求个数 + 右边符合要求个数

    const prefixMap = new Map()
    prefixMap.set(0,1)
    function dfs(curNode, curr) {

        if (!curNode) return 0;

        let ret = 0;

        curr += curNode.val;
        ret += prefixMap.get(curr - targetSum) || 0;

        prefixMap.set(curr, (prefixMap.get(curr) || 0) + 1)
        ret += dfs(curNode.left, curr);
        ret += dfs(curNode.right, curr);
        prefixMap.set(curr, (prefixMap.get(curr) || 0) - 1);

        return ret
    }
    return dfs(root, 0)

}


// @lc code=end

