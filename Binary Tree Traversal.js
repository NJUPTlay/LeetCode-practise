//Binary Tree Traversal 二叉树遍历

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
 * @return {number[]}
 */

var preorderTraversal=function (root,res=[]){
    if(!root) return res;
    res.push(root.val);
    preorderTraversal(root.left,res);
    preorderTraversal(root.right,res);
    return res;
}


var inorderTraversal = function (root, res = []) {
    if (!root) return res;
    inorderTraversal(root.left, res);
    res.push(root.val);
    inorderTraversal(root.right, res);
    return res
};

var postorderTraversal = function (root, res = []) {
    if (!root) return res;
    postorderTraversal(root.left, res);
    postorderTraversal(root.right, res);
    res.push(root.val);
    return res;
};

var levelOrder = function (root) {
    const res = []
    function traversal(root, depth) {
        if (root) {
            if (!res[depth]) {
                res[depth] = []
            }
            traversal(root.left, depth + 1)
            res[depth].push(root.val)
            traversal(root.right, depth + 1)
        }
    }
    traversal(root, 0)
    return res;
};


{/*
    参考
    https://leetcode.cn/problems/binary-tree-level-order-traversal/solutions/215223/yi-tao-quan-fa-shua-diao-nge-bian-li-shu-de-wen-8
    */}