// 💡 Question-2:

// Given a Binary Search Tree with all unique values and two keys. Find the distance between two nodes in BST. The given keys always exist in BST.

// Example:

// Consider the following BST:

// ![1.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f2455039-7e12-43fc-a7d3-b5be24931c1c/1.png)

// **Input-1:**

// n = 9

// values = [8, 3, 1, 6, 4, 7, 10, 14,13]

// node-1 = 6

// node-2 = 14

// **Output-1:**

// The distance between the two keys = 4

// **Input-2:**

// n = 9

// values = [8, 3, 1, 6, 4, 7, 10, 14,13]

// node-1 = 3

// node-2 = 4

// **Output-2:**

// The distance between the two keys = 2

// ========== solution ========== //

class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

const findDistance = (root, node1, node2) => {
  if (root === null) {
    return 0;
  }

  // If both nodes are smaller, search in the left subtree
  if (root.val > node1 && root.val > node2) {
    return findDistance(root.left, node1, node2);
  }

  // If both nodes are greater, search in the right subtree
  if (root.val < node1 && root.val < node2) {
    return findDistance(root.right, node1, node2);
  }

  // If the current node lies between node1 and node2
  if (
    (root.val >= node1 && root.val <= node2) ||
    (root.val <= node1 && root.val >= node2)
  ) {
    return distance(root, node1) + distance(root, node2);
  }

  return 0;
};

const distance = (root, node) => {
  if (root === null) {
    return 0;
  }

  if (root.val === node) {
    return 0;
  }

  if (root.val > node) {
    return 1 + distance(root.left, node);
  }

  return 1 + distance(root.right, node);
};

// Create the binary search tree
const root = new TreeNode(8);
root.left = new TreeNode(3);
root.right = new TreeNode(10);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(6);
root.left.right.left = new TreeNode(4);
root.left.right.right = new TreeNode(7);
root.right.right = new TreeNode(14);
root.right.right.left = new TreeNode(13);

// Example usage:
const node1 = 6;
const node2 = 14;
const result = findDistance(root, node1, node2);
console.log("The distance between the two keys =", result); // Output: The distance between the two keys = 4
