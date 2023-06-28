// 💡 **Question 8**

// Given a singly linked list, find if the linked list is [circular](https://www.geeksforgeeks.org/circular-linked-list/amp/) or not.

//  A linked list is called circular if it is not NULL-terminated and all nodes are connected in the form of a cycle. Below is an example of a circular linked list.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function isCircular(head) {
  if (!head) {
    return false;
  }

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    if (slow === fast) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
}

// Example usage:
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = head;

const isListCircular = isCircular(head);
console.log(isListCircular); // Output: true
