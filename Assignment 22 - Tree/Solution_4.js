// 💡 Question-4:

// Given Preorder, Inorder and Postorder traversals of some tree. Write a program to check if they all are of the same tree.

// **Examples:**

// Input :

//         Inorder -> 4 2 5 1 3
//         Preorder -> 1 2 4 5 3
//         Postorder -> 4 5 2 3 1
// Output :

// Yes
// Explanation :

// All of the above three traversals are of
// the same tree

//                            1
//                          /   \
//                         2     3
//                       /   \
//                      4     5

// Input :

//         Inorder -> 4 2 5 1 3
//         Preorder -> 1 5 4 2 3
//         Postorder -> 4 1 2 3 5
// Output :

// No

const areTraversalsSame = (inorder, preorder, postorder) => {
  if (inorder.length === 0 || preorder.length === 0 || postorder.length === 0) {
    return false;
  }

  if (inorder.length === 1 && preorder.length === 1 && postorder.length === 1) {
    return (
      inorder[0] === preorder[0] &&
      preorder[0] === postorder[0] &&
      postorder[0] === inorder[0]
    );
  }

  if (
    inorder.length !== preorder.length ||
    preorder.length !== postorder.length
  ) {
    return false;
  }

  const rootValue = preorder[0];
  const rootIndex = inorder.indexOf(rootValue);

  const leftInorder = inorder.slice(0, rootIndex);
  const rightInorder = inorder.slice(rootIndex + 1);

  const leftPreorder = preorder.slice(1, rootIndex + 1);
  const rightPreorder = preorder.slice(rootIndex + 1);

  const leftPostorder = postorder.slice(0, rootIndex);
  const rightPostorder = postorder.slice(rootIndex, -1);

  const leftSubtreeSame = areTraversalsSame(
    leftInorder,
    leftPreorder,
    leftPostorder
  );

  const rightSubtreeSame = areTraversalsSame(
    rightInorder,
    rightPreorder,
    rightPostorder
  );

  return leftSubtreeSame && rightSubtreeSame;
};

// Example usage:
const inorder = [4, 2, 5, 1, 3];
const preorder = [1, 2, 4, 5, 3];
const postorder = [4, 5, 2, 3, 1];

console.log(areTraversalsSame(inorder, preorder, postorder)); // Output: true
