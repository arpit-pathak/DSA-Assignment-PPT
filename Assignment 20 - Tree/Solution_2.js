// 💡 Question-2

// Construct the BST (Binary Search Tree) from its given level order traversal.

// Example:

// Input: arr[] = {7, 4, 12, 3, 6, 8, 1, 5, 10}

// Output: BST:

//             7

//          /    \

//        4     12

//      /  \     /

//     3   6  8

//    /    /     \

//  1    5      10

// ========== solution ========== //

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const constructBST = (arr) => {
  if (arr.length === 0) {
    return null;
  }

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (i < arr.length) {
    const node = queue.shift();
    const leftVal = arr[i];
    const rightVal = arr[i + 1];

    if (leftVal !== null) {
      node.left = new TreeNode(leftVal);
      queue.push(node.left);
    }

    if (rightVal !== null && rightVal !== undefined) {
      node.right = new TreeNode(rightVal);
      queue.push(node.right);
    }

    i += 2;
  }

  return root;
};

// Example usage:
const arr = [7, 4, 12, 3, 6, 8, 1, 5, 10];
const root = constructBST(arr);

// Function to print the BST (inorder traversal)
const printBST = (root) => {
  if (root === null) {
    return;
  }

  printBST(root.left);
  console.log(root.val);
  printBST(root.right);
};

printBST(root);
