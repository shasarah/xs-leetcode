/**
 * @description
 * Recursion
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p === null && q === null) {
        return true;
    }
    return (p && q && p.val === q.val) ? isSameTree(p.left, q.left) && isSameTree(p.right, q.right) : false;
};

// faster
var isSameTree = function(p, q) {
    if (p === null) {
        return q === null;
    }
    if (q === null) {
        return p === null;
    }
    if (p.val !== q.val) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
