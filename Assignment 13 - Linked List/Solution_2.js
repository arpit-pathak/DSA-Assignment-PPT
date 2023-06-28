// 💡 **Question 2**

// Write a function that takes a list sorted in non-decreasing order and deletes any duplicate nodes from the list. The list should only be traversed once.

// For example if the linked list is 11->11->11->21->43->43->60 then removeDuplicates() should convert the list to 11->21->43->60.

// **Example 1:**

// Input:
// LinkedList:
// 11->11->11->21->43->43->60
// Output:
// 11->21->43->60

// **Example 2:**

// Input:
// LinkedList:
// 10->12->12->25->25->25->34
// Output:
// 10->12->25->34

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function removeDuplicates(head) {
  let current = head;

  while (current && current.next) {
    if (current.data === current.next.data) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}

// Example usage:
const head = new Node(11);
head.next = new Node(11);
head.next.next = new Node(11);
head.next.next.next = new Node(21);
head.next.next.next.next = new Node(43);
head.next.next.next.next.next = new Node(43);
head.next.next.next.next.next.next = new Node(60);

const newHead = removeDuplicates(head);
let current = newHead;
while (current) {
  console.log(current.data);
  current = current.next;
}
