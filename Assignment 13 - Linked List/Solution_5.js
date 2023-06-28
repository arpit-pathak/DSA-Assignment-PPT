// 💡 **Question 5**

// Given a linked list and a key to be deleted. Delete last occurrence of key from linked. The list may have duplicates.

// **Examples**:

// Input:   1->2->3->5->2->10, key = 2
// Output:  1->2->3->5->10

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function deleteLastOccurrence(head, key) {
  if (!head) {
    return null;
  }

  let prev = null;
  let current = head;
  let lastOccurrence = null;

  while (current) {
    if (current.data === key) {
      lastOccurrence = current;
    }

    current = current.next;
  }

  if (!lastOccurrence) {
    return head;
  }

  if (lastOccurrence === head) {
    return head.next;
  }

  current = head;

  while (current !== lastOccurrence) {
    prev = current;
    current = current.next;
  }

  prev.next = lastOccurrence.next;

  return head;
}

// Example usage:
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(5);
head.next.next.next.next = new Node(2);
head.next.next.next.next.next = new Node(10);

const key = 2;

const newHead = deleteLastOccurrence(head, key);

let current = newHead;
while (current) {
  console.log(current.data);
  current = current.next;
}
