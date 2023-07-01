// 💡 Question-4:

// Write a program to connect nodes at the same level.

// Input:

//         1

//       /   \

//     2      3

//   /   \   /   \

// 4     5 6    7

// Output:

// 1 → -1

// 2 → 3

// 3 → -1

// 4 → 5

// 5 → 6

// 6 → 7

// 7 → -1

// ========== solution ========== //

class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
    this.next = null; // Pointer to the next node at the same level
  }
}

const connectNodesAtSameLevel = (root) => {
  if (root === null) {
    return null;
  }

  let levelStart = root; // Pointer to the start node of the current level

  while (levelStart !== null) {
    let current = levelStart; // Pointer to traverse the current level
    let dummyNode = new TreeNode(-1); // Dummy node for connecting the next nodes
    let prev = dummyNode; // Pointer to the previous node at the next level

    while (current !== null) {
      // Connect the left child
      if (current.left !== null) {
        prev.next = current.left;
        prev = current.left;
      }

      // Connect the right child
      if (current.right !== null) {
        prev.next = current.right;
        prev = current.right;
      }

      // Move to the next node in the current level
      current = current.next;
    }

    // Move to the next level
    levelStart = dummyNode.next;
  }

  return root;
};

// Create the binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Connect nodes at the same level
const connectedRoot = connectNodesAtSameLevel(root);

// Print the connected nodes
let current = connectedRoot;
while (current !== null) {
  let temp = current;
  let nodeList = [];

  while (temp !== null) {
    nodeList.push(temp.val);
    temp = temp.next;
  }

  console.log(nodeList.join(" → "));
  current = current.left;
}
