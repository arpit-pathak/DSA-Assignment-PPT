// 💡 Question-1

// Given a binary tree, your task is to find subtree with maximum sum in tree.

// Examples:

// Input1 :

//        1

//      /   \

//    2      3

//   / \    / \

// 4   5  6   7

// Output1 : 28

// As all the tree elements are positive, the largest subtree sum is equal to sum of all tree elements.

// Input2 :

//        1

//      /    \

//   -2      3

//   / \    /  \

// 4   5  -6   2

// Output2 : 7

// Subtree with largest sum is :

//  -2

//  / \

// 4   5

// Also, entire tree sum is also 7.

// ========== solution ========== //

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const findMaxSubtreeSum = (root) => {
  let maxSum = -Infinity;
  let maxSubtreeRoot = null;

  const calculateSubtreeSum = (node) => {
    if (node === null) {
      return 0;
    }

    const leftSum = calculateSubtreeSum(node.left);
    const rightSum = calculateSubtreeSum(node.right);
    const subtreeSum = leftSum + rightSum + node.val;

    if (subtreeSum > maxSum) {
      maxSum = subtreeSum;
      maxSubtreeRoot = node;
    }

    return subtreeSum;
  };

  calculateSubtreeSum(root);

  return maxSubtreeRoot;
};

// Example usage:
const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(7);

const maxSubtreeRoot1 = findMaxSubtreeSum(root1);
console.log(maxSubtreeRoot1.val); // Output: 28

const root2 = new TreeNode(1);
root2.left = new TreeNode(-2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(5);
root2.right.left = new TreeNode(-6);
root2.right.right = new TreeNode(2);

const maxSubtreeRoot2 = findMaxSubtreeSum(root2);
console.log(maxSubtreeRoot2.val); // Output: 7
