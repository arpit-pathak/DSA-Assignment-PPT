// 💡 Question-1

// You are given a binary tree. The binary tree is represented using the TreeNode class. Each TreeNode has an integer value and left and right children, represented using the TreeNode class itself. Convert this binary tree into a binary search tree.

// Input:

//         10

//        /   \

//      2      7

//    /   \

//  8      4

// Output:

//         8

//       /   \

//     4     10

//   /   \

// 2      7

// ========== solution ========== //

class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

const inorderTraversal = (root, result) => {
  if (root === null) {
    return;
  }

  inorderTraversal(root.left, result);
  result.push(root.val);
  inorderTraversal(root.right, result);
};

const constructBST = (root, inorder, index) => {
  if (root === null) {
    return;
  }

  constructBST(root.left, inorder, index);

  // Update the value of current node
  root.val = inorder[index[0]];
  index[0]++;

  constructBST(root.right, inorder, index);
};

const convertToBST = (root) => {
  // Perform inorder traversal to get sorted values
  const inorder = [];
  inorderTraversal(root, inorder);

  // Sort the inorder list
  inorder.sort((a, b) => a - b);

  // Construct the new BST
  const index = [0];
  constructBST(root, inorder, index);

  return root;
};

// Create the binary tree
const root = new TreeNode(10);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(8);
root.left.right = new TreeNode(4);

// Convert the binary tree to a binary search tree
const bstRoot = convertToBST(root);

// Example usage:
// Perform inorder traversal on the converted BST to verify the correctness
const inorderResult = [];
inorderTraversal(bstRoot, inorderResult);
console.log(inorderResult); // Output: [2, 4, 7, 8, 10]
