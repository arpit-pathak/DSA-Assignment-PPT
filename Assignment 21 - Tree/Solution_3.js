// 💡 Question-3:

// Write a program to convert a binary tree to a doubly linked list.

// Input:

//         10

//        /   \

//      5     20

//            /   \

//         30     35

// Output:

// 5 10 30 20 35

// ========== solution ========== //

class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

class DoublyLinkedListNode {
  constructor(value) {
    this.val = value;
    this.prev = null;
    this.next = null;
  }
}

const convertToDoublyLinkedList = (root) => {
  if (root === null) {
    return null;
  }

  let head = null;
  let prev = null;

  const convert = (node) => {
    if (node === null) {
      return;
    }

    // Recursively convert left subtree
    convert(node.left);

    // Convert current node
    const curr = new DoublyLinkedListNode(node.val);

    if (prev === null) {
      // This is the first node, set it as the head
      head = curr;
    } else {
      // Update the pointers for doubly linked list
      prev.next = curr;
      curr.prev = prev;
    }

    prev = curr;

    // Recursively convert right subtree
    convert(node.right);
  };

  convert(root);

  return head;
};

// Create the binary tree
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(20);
root.right.left = new TreeNode(30);
root.right.right = new TreeNode(35);

// Convert binary tree to doubly linked list
const head = convertToDoublyLinkedList(root);

// Traverse the doubly linked list
let current = head;
const resultList = [];
while (current !== null) {
  resultList.push(current.val);
  current = current.next;
}

console.log(resultList.join(" ")); // Output: 5 10 30 20 35
