/** TreeNode: node for a general tree. */


class TreeNode {
    constructor(val, children = []) {
        this.val = val;
        this.children = children;
    }
}

class Tree {
    constructor(root = null) {
        this.root = root;
    }

    /** sumValues(): add up all of the values in the tree. */

    sumValues() {
        if (this.root == null) { return 0 }
        let sum = 0;
        let currentStack = [this.root];
        while (currentStack.length) {
            const currentNode = currentStack.pop();
            sum += currentNode.val;
            for (let child of currentNode.children) {
                currentStack.push(child);
            }

        }
        return sum;
    }


    /** countEvens(): count all of the nodes in the tree with even values. */

    countEvens() {

    }

    /** numGreater(lowerBound): return a count of the number of nodes
     * whose value is greater than lowerBound. */

    numGreater(lowerBound) {

    }
}

// // build small tree
// let nSmall = new TreeNode(1);
// let nSmall2 = new TreeNode(2);
// nSmall.children.push(nSmall2);
// smallTree = new Tree(nSmall);

// // build large tree
// let n = new TreeNode(1);
// let n2 = new TreeNode(2);
// let n3 = new TreeNode(3);
// let n4 = new TreeNode(4);
// let n5 = new TreeNode(5);
// let n6 = new TreeNode(6);
// let n7 = new TreeNode(7);
// let n8 = new TreeNode(8);

// n.children = [n2, n3, n4];

// n4.children.push(n5, n6);
// n6.children.push(n7);
// n7.children.push(n8);

// largeTree = new Tree(n);

// emptyTree = new Tree();
// console.log(emptyTree.sumValues());
// console.log(largeTree.sumValues())

module.exports = { Tree, TreeNode };
