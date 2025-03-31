/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    /** minDepth(): return the minimum depth of the tree -- that is,
     * the length of the shortest path from the root to a leaf. */

    minDepth(node = this.root) {
        if (node === null) return 0;                                                //check if empty
        if (node.left === null && node.right === null) return 1;                    //check if first has no children
        if (node.left === null) return 1 + this.minDepth(node.right);               //if left empty check right and return
        if (node.right === null) return 1 + this.minDepth(node.left);               //if right empty check left and return
        return 1 + Math.min(this.minDepth(node.left), this.minDepth(node.right));   //if both, check both and return
    }

    /** maxDepth(): return the maximum depth of the tree -- that is,
     * the length of the longest path from the root to a leaf. */

    maxDepth(node = this.root) {
        if (node === null) return 0;
        return 1 + Math.max(this.maxDepth(node.left), this.maxDepth(node.right));
    }

    /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
     * The path doesn't need to start at the root, but you can't visit a node more than once. */

    maxSum(node = this.root) {
        if (node === null) return 0;
        if (node.left === null && node.right === null) return node.val;
        if (node.left === null) return node.val + this.maxSum(node.right);
        if (node.right === null) return node.val + this.maxSum(node.left);
        return this.maxSum(node.left) + this.maxSum(node.right);
    }

    /** nextLarger(lowerBound): return the smallest value in the tree
     * which is larger than lowerBound. Return null if no such value exists. */

    nextLarger(lowerBound) {

    }

    /** Further study!
     * areCousins(node1, node2): determine whether two nodes are cousins
     * (i.e. are at the same level but have different parents. ) */

    areCousins(node1, node2) {

    }

    /** Further study!
     * serialize(tree): serialize the BinaryTree object tree into a string. */

    static serialize() {

    }

    /** Further study!
     * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

    static deserialize() {

    }

    /** Further study!
     * lowestCommonAncestor(node1, node2): find the lowest common ancestor
     * of two nodes in a binary tree. */

    lowestCommonAncestor(node1, node2) {

    }
}




module.exports = { BinaryTree, BinaryTreeNode };
