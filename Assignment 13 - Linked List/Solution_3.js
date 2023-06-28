// 💡 **Question 3**

// Given a linked list of size **N**. The task is to reverse every **k** nodes (where k is an input to the function) in the linked list. If the number of nodes is not a multiple of *k* then left-out nodes, in the end, should be considered as a group and must be reversed (See Example 2 for clarification).

// **Example 1:**

// Input:
// LinkedList: 1->2->2->4->5->6->7->8
// K = 4
// Output:4 2 2 1 8 7 6 5
// Explanation:
// The first 4 elements 1,2,2,4 are reversed first
// and then the next 4 elements 5,6,7,8. Hence, the
// resultant linked list is 4->2->2->1->8->7->6->5.

// **Example 2:**

// Input:
// LinkedList: 1->2->3->4->5
// K = 3
// Output:3 2 1 5 4
// Explanation:
// The first 3 elements are 1,2,3 are reversed first and then elements 4,5 are reversed.Hence, the resultant linked list is 3->2->1->5->4.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function reverseList(head) {
  let prev = null;
  let current = head;

  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

function reverseKNodes(head, k) {
  if (!head || !head.next || k <= 1) {
    return head;
  }

  let current = head;
  let previousTail = null;
  let newHead = null;

  while (current) {
    let count = 1;
    let start = current;
    let end = current;

    while (end && count < k) {
      end = end.next;
      count++;
    }

    if (!end) {
      break;
    }

    const nextGroup = end.next;
    end.next = null;

    const reversedGroup = reverseList(start);

    if (!newHead) {
      newHead = reversedGroup;
    }

    if (previousTail) {
      previousTail.next = reversedGroup;
    }

    previousTail = start;
    current = nextGroup;
  }

  if (previousTail) {
    previousTail.next = current;
  }

  return newHead || head;
}

// Example usage:
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

const k = 4;
const newHead = reverseKNodes(head, k);

let current = newHead;
while (current) {
  console.log(current.data);
  current = current.next;
}
