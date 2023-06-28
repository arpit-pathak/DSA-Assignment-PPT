// 💡 **Question 2**

// A number **N** is represented in Linked List such that each digit corresponds to a node in linked list. You need to add 1 to it.

// **Example 1:**

// Input:
// LinkedList: 4->5->6
// Output:457

// **Example 2:**

// Input:
// LinkedList: 1->2->3
// Output:124

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function addOne(head) {
  // Reverse the linked list
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  head = prev;

  let carry = 1;
  current = head;
  prev = null;

  // Perform addition
  while (current !== null) {
    let sum = current.data + carry;
    carry = Math.floor(sum / 10);
    current.data = sum % 10;
    prev = current;
    current = current.next;
  }

  // If carry still remains, create a new node
  if (carry > 0) {
    let newNode = new Node(carry);
    prev.next = newNode;
  }

  // Reverse the linked list back to its original order
  prev = null;
  current = head;
  next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  head = prev;

  return head;
}

// Example usage:
const list = new Node(4);
list.next = new Node(5);
list.next.next = new Node(6);

const updatedList = addOne(list);

let current = updatedList;
while (current) {
  console.log(current.data);
  current = current.next;
}
