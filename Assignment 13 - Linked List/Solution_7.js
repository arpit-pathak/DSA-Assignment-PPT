// 💡 **Question 7**

// Given a **Doubly Linked List**, the task is to reverse the given Doubly Linked List.

// **Example:**

// Original Linked list 10 8 4 2
// Reversed Linked list 2 4 8 10

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

function reverseDoublyLinkedList(head) {
  let current = head;
  let temp = null;

  while (current) {
    // Swap prev and next pointers
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;

    // Move to the next node
    current = current.prev;

    // Update the head pointer
    if (current && current.prev) {
      head = current;
    }
  }

  return head;
}

// Example usage:
const list = new Node(10);
list.next = new Node(8);
list.next.prev = list;
list.next.next = new Node(4);
list.next.next.prev = list.next;
list.next.next.next = new Node(2);
list.next.next.next.prev = list.next.next;

const reversedList = reverseDoublyLinkedList(list);

let current = reversedList;
while (current) {
  console.log(current.data);
  current = current.next;
}
