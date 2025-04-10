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
        if (node === null) return 0;                                                //check if empty
        return 1 + Math.max(this.maxDepth(node.left), this.maxDepth(node.right));   //return the max between and return
    }

    /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
     * The path doesn't need to start at the root, but you can't visit a node more than once. */

    maxSum() {
        let result = 0;

        function helper(node = this.root) {
            if (node === null) return 0;                                            //check if empty

            let leftSum = Math.max(0, helper(node.left));                           //lock above 0 left
            let rightSum = Math.max(0, helper(node.right));                         //lock above 0 right

            result = Math.max(result, node.val + leftSum + rightSum);               //result + result + val + left + right
            return node.val + Math.max(leftSum, rightSum)                           //return val + max between left and right
        }
        helper(this.root);                                                          //recursive helper
        return result;
    }

    /** nextLarger(lowerBound): return the smallest value in the tree
     * which is larger than lowerBound. Return null if no such value exists. */

    nextLarger(lowerBound, node = this.root) {
        if (node === null) return null;

        let candidate = (node.val > lowerBound) ? node.val : null;

        let leftCan = this.nextLarger(lowerBound, node.left);
        let rightCan = this.nextLarger(lowerBound, node.right);

        if (leftCan !== null && (candidate === null || leftCan < candidate)) {
            candidate = leftCan;
        }
        if (rightCan !== null && (candidate === null || rightCan < candidate)) {
            candidate = rightCan;
        }

        return candidate;
    }

    /** Further study!
     * areCousins(node1, node2): determine whether two nodes are cousins
     * (i.e. are at the same level but have different parents. ) */

    areCousins(node1, node2) {
        if (!this.root || node1 === this.root || node2 === this.root) return false;

        function findDepthAndParent(node, target, depth = 0, parent = null) {
            if (!node) return null;
            if (node === target) return { parent, depth };

            return (
                findDepthAndParent(node.left, target, depth + 1, node) ||
                findDepthAndParent(node.right, target, depth + 1, node)
            );
        }

        const node1Info = findDepthAndParent(this.root, node1);
        const node2Info = findDepthAndParent(this.root, node2);

        return (
            node1Info.depth === node2Info.depth &&
            node1Info.parent !== node2Info.parent
        );
    }

    /** Further study!
     * serialize(tree): serialize the BinaryTree object tree into a string. */

    static serialize(treeOrNode) {
        const node = treeOrNode instanceof BinaryTree ? treeOrNode.root : treeOrNode;

        function helper(n) {
            if (!n) return null;

            return {
                val: n.val,
                left: helper(n.left),
                right: helper(n.right)
            }
        }

        return JSON.stringify({ root: helper(node) });
    }

    /** Further study!
     * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

    static deserialize(stringTree) {
        const data = typeof stringTree === "string" ? JSON.parse(stringTree) : stringTree;

        function helper(obj) {
            if (!obj) return null;

            const node = new BinaryTreeNode(obj.val);
            node.left = helper(obj.left);
            node.right = helper(obj.right);

            return node;
        }

        return new BinaryTree(helper(data.root));
    }

    /** Further study!
     * lowestCommonAncestor(node1, node2): find the lowest common ancestor
     * of two nodes in a binary tree. */

    lowestCommonAncestor(node1, node2) {
        function helper(node) {
            if (!node) return null;
            if (node === node1 || node === node2) return node;

            const left = helper(node.left);
            const right = helper(node.right);

            if (left && right) return node;
            return left || right;
        }

        return helper(this.root);
    }
}

// // build large tree
// let node6 = new BinaryTreeNode(1);
// let node5 = new BinaryTreeNode(1);
// let node4 = new BinaryTreeNode(2);
// let node3 = new BinaryTreeNode(3, node4, node6);
// let node2 = new BinaryTreeNode(5, node3, node5);
// let node1 = new BinaryTreeNode(5);
// let root = new BinaryTreeNode(6, node1, node2);
// largeTree = new BinaryTree(root);

// const string_line = BinaryTree.serialize(largeTree.root)
// console.log(string_line);
// const treeline = BinaryTree.deserialize(string_line);
// console.log(treeline);
// const string_line2 = BinaryTree.serialize(treeline);
// console.log(string_line2);


module.exports = { BinaryTree, BinaryTreeNode };
