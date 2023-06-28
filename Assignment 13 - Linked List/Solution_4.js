// 💡 **Question 4**

// Given a linked list, write a function to reverse every alternate k nodes (where k is an input to the function) in an efficient way. Give the complexity of your algorithm.

// **Example:**
// Inputs:   1->2->3->4->5->6->7->8->9->NULL and k = 3
// Output:   3->2->1->4->5->6->9->8->7->NULL.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function reverseAlternateKNodes(head, k) {
  if (!head || !head.next || k <= 1) {
    return head;
  }

  let current = head;
  let previousTail = null;
  let newHead = null;
  let reverseFlag = true;

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

    if (reverseFlag) {
      const reversedGroup = reverseList(start);

      if (!newHead) {
        newHead = reversedGroup;
      }

      if (previousTail) {
        previousTail.next = reversedGroup;
      }

      previousTail = start;
    } else {
      if (!newHead) {
        newHead = start;
      }

      if (previousTail) {
        previousTail.next = start;
      }

      previousTail = end;
    }

    reverseFlag = !reverseFlag;
    current = nextGroup;
  }

  if (previousTail) {
    previousTail.next = current;
  }

  return newHead || head;
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

// Example usage:
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);
head.next.next.next.next.next.next.next.next = new Node(9);

const k = 3;
const newHead = reverseAlternateKNodes(head, k);

let current = newHead;
while (current) {
  console.log(current.data);
  current = current.next;
}
