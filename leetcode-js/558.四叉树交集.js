/*
 * @lc app=leetcode.cn id=558 lang=javascript
 *
 * [558] 四叉树交集
 */

// @lc code=start
/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {Node} quadTree1
 * @param {Node} quadTree2
 * @return {Node}
 */
var intersect = function (quadTree1, quadTree2) {
    if (quadTree1.isLeaf && quadTree2.isLeaf) {
        const newVal = quadTree1.val | quadTree2.val;
        return new Node(newVal, true, false, false, false, false)
    }

    if (quadTree1.isLeaf) {
        quadTree1.topLeft = new Node(quadTree1.val, true, false, false, false, false)
        quadTree1.topRight = new Node(quadTree1.val, true, false, false, false, false)
        quadTree1.bottomLeft = new Node(quadTree1.val, true, false, false, false, false)
        quadTree1.bottomRight = new Node(quadTree1.val, true, false, false, false, false)
    }
    if (quadTree2.isLeaf) {
        quadTree2.topLeft = new Node(quadTree2.val, true, false, false, false, false)
        quadTree2.topRight = new Node(quadTree2.val, true, false, false, false, false)
        quadTree2.bottomLeft = new Node(quadTree2.val, true, false, false, false, false)
        quadTree2.bottomRight = new Node(quadTree2.val, true, false, false, false, false)
    }
    
    const tl = intersect(quadTree1.topLeft, quadTree2.topLeft);
    const tr = intersect(quadTree1.topRight, quadTree2.topRight);
    const bl = intersect(quadTree1.bottomLeft, quadTree2.bottomLeft);
    const br = intersect(quadTree1.bottomRight, quadTree2.bottomRight);

    if(tl===tr&& tr===bl&&bl===br){
        return new Node(tl,true,false,false,false,false)
    }
    return new Node(0,false,tl,tr,bl,br)
};
// @lc code=end

