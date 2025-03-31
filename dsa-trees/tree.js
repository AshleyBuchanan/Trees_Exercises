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


module.exports = { Tree, TreeNode };
