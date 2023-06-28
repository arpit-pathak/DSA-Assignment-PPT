// 💡 **Question 4**

// You are given a special linked list with **N** nodes where each node has a next pointer pointing to its next node. You are also given **M** random pointers, where you will be given **M** number of pairs denoting two nodes **a** and **b**  **i.e. a->arb = b** (arb is pointer to random node)**.**

// Construct a copy of the given list. The copy should consist of exactly **N** new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

// For example, if there are two nodes **X** and **Y** in the original list, where **X.arb** **-->** **Y**, then for the corresponding two nodes **x** and **y** in the copied list, **x.arb --> y.**

// Return the head of the copied linked list.

// !https://contribute.geeksforgeeks.org/wp-content/uploads/clone.jpg

// **Note** :- The diagram isn't part of any example, it just depicts an example of how the linked list may look like.

// **Example 1:**

// Input:
// N = 4, M = 2
// value = {1,2,3,4}
// pairs = {{1,2},{2,4}}
// Output:1
// Explanation:In this test case, there
// are 4 nodes in linked list.  Among these
// 4 nodes,  2 nodes have arbitrary pointer
// set, rest two nodes have arbitrary pointer
// as NULL. Second line tells us the value
// of four nodes. The third line gives the
// information about arbitrary pointers.
// The first node arbitrary pointer is set to
// node 2.  The second node arbitrary pointer
// is set to node 4.

// **Example 2:**

// Input:
// N = 4, M = 2
// value[] = {1,3,5,9}
// pairs[] = {{1,1},{3,4}}
// Output:1
// Explanation:In the given testcase ,
// applying the method as stated in the
// above example, the output will be 1.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.random = null;
  }
}

function cloneLinkedList(head) {
  if (head === null) return null;

  // Create a hash map to store the mapping between original nodes and new nodes
  const hashMap = new Map();

  let originalNode = head;
  let clonedNode = null;
  let clonedHead = null;

  // Create a new node for each original node and store the mapping in the hash map
  while (originalNode) {
    clonedNode = new Node(originalNode.data);
    hashMap.set(originalNode, clonedNode);

    originalNode = originalNode.next;
  }

  // Set the next and random pointers for each new node
  originalNode = head;
  while (originalNode) {
    clonedNode = hashMap.get(originalNode);
    clonedNode.next = hashMap.get(originalNode.next);
    clonedNode.random = hashMap.get(originalNode.random);

    originalNode = originalNode.next;
  }

  // Return the head of the cloned linked list
  return hashMap.get(head);
}

// Example usage:
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

head.random = head.next.next;
head.next.random = head.next.next.next;
head.next.next.random = head.next;

const clonedHead = cloneLinkedList(head);

// Print the cloned linked list
let current = clonedHead;
while (current) {
  console.log(`Node: ${current.data}`);
  console.log(`Next: ${current.next ? current.next.data : null}`);
  console.log(`Random: ${current.random ? current.random.data : null}`);
  console.log("---");

  current = current.next;
}
