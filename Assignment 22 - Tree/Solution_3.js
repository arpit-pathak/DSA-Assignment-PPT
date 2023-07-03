// 💡 Question-3:

// Given a binary tree, print all its root-to-leaf paths without using recursion. For example, consider the following Binary Tree.

// Input:

//         6
//      /    \
//     3      5
//   /   \     \
//  2     5     4
//      /   \
//     7     4

// Output:

// There are 4 leaves, hence 4 root to leaf paths -
//   6->3->2
//   6->3->5->7
//   6->3->5->4
//   6->5>4

class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

const printRootToLeafPaths = (root) => {
  if (root === null) {
    return;
  }

  // Stack to store the nodes during DFS traversal
  const nodeStack = [];
  // Stack to store the paths from the root to each node
  const pathStack = [];

  // Push the root node and its path onto the stacks
  nodeStack.push(root);
  pathStack.push(root.val.toString());

  while (nodeStack.length > 0) {
    const node = nodeStack.pop();
    const path = pathStack.pop();

    // Check if the node is a leaf node
    if (node.left === null && node.right === null) {
      console.log(path); // Print the root-to-leaf path
    }

    // Process the left child
    if (node.left !== null) {
      nodeStack.push(node.left);
      pathStack.push(path + "->" + node.left.val);
    }

    // Process the right child
    if (node.right !== null) {
      nodeStack.push(node.right);
      pathStack.push(path + "->" + node.right.val);
    }
  }
};

// Create the binary tree
const root = new TreeNode(6);
root.left = new TreeNode(3);
root.right = new TreeNode(5);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

// Print all root-to-leaf paths
printRootToLeafPaths(root);
