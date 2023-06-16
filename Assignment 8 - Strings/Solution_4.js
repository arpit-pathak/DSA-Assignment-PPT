// 💡 **Question 4**

// You need to construct a binary tree from a string consisting of parenthesis and integers.

// The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.
// You always start to construct the **left** child node of the parent first if it exists.

// **Input:** s = "4(2(3)(1))(6(5))"

// **Output:** [4,2,6,3,1,5]

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function constructBinaryTree(s) {
  if (s.length === 0) {
    return null;
  }

  // Find the root value
  const firstParen = s.indexOf("(");
  let rootVal, leftSubtree, rightSubtree;

  if (firstParen === -1) {
    rootVal = parseInt(s);
  } else {
    rootVal = parseInt(s.substring(0, firstParen));
    let parenCount = 0;
    let splitIndex = -1;

    // Find the split index to separate left and right subtrees
    for (let i = firstParen; i < s.length; i++) {
      if (s[i] === "(") {
        parenCount++;
      } else if (s[i] === ")") {
        parenCount--;
      }

      if (parenCount === 0 && splitIndex === -1) {
        splitIndex = i + 1;
      }
    }

    leftSubtree = s.substring(firstParen + 1, splitIndex - 1);
    rightSubtree = s.substring(splitIndex + 1, s.length - 1);
  }

  // Create the root node
  const root = new TreeNode(rootVal);

  // Recursively construct the left and right subtrees
  root.left = constructBinaryTree(leftSubtree);
  root.right = constructBinaryTree(rightSubtree);

  return root;
}

// Helper function to convert the binary tree to an array (preorder traversal)
function treeToArray(root) {
  const result = [];

  function preorderTraversal(node) {
    if (node) {
      result.push(node.val);
      preorderTraversal(node.left);
      preorderTraversal(node.right);
    }
  }

  preorderTraversal(root);
  return result;
}

const s = "4(2(3)(1))(6(5))";
const root = constructBinaryTree(s);
const result = treeToArray(root);
console.log(result); // [4, 2, 3, 1, 6, 5]
