// 💡 **Question 8**

// Given a doubly linked list and a position. The task is to delete a node from given position in a doubly linked list.

// **Example 1:**

// Input:
// LinkedList = 1 <--> 3 <--> 4
// x = 3
// Output:1 3
// Explanation:After deleting the node at
// position 3 (position starts from 1),
// the linked list will be now as 1->3.

// **Example 2:**

// Input:
// LinkedList = 1 <--> 5 <--> 2 <--> 9
// x = 1
// Output:5 2 9

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

function deleteNodeFromPosition(head, position) {
  if (head === null) {
    return null;
  }

  let current = head;
  let count = 1;

  // Traverse to the position of the node to delete
  while (current && count < position) {
    current = current.next;
    count++;
  }

  // Check if node exists at the given position
  if (current === null) {
    return head;
  }

  // Update the prev and next pointers of adjacent nodes
  if (current.prev) {
    current.prev.next = current.next;
  } else {
    // If deleting the head node, update the head pointer
    head = current.next;
  }

  if (current.next) {
    current.next.prev = current.prev;
  }

  return head;
}

// Example usage:
const list = new Node(1);
list.next = new Node(5);
list.next.prev = list;
list.next.next = new Node(2);
list.next.next.prev = list.next;
list.next.next.next = new Node(9);
list.next.next.next.prev = list.next.next;

const position = 1;
const newList = deleteNodeFromPosition(list, position);

let current = newList;
while (current) {
  console.log(current.data);
  current = current.next;
}
