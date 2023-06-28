// 💡 **Question 6**

// Given a singly linked list of size **N**. The task is to **left-shift** the linked list by **k** nodes, where **k** is a given positive integer smaller than or equal to length of the linked list.

// **Example 1:**

// Input:
// N = 5
// value[] = {2, 4, 7, 8, 9}
// k = 3
// Output:8 9 2 4 7
// Explanation:Rotate 1:4 -> 7 -> 8 -> 9 -> 2
// Rotate 2: 7 -> 8 -> 9 -> 2 -> 4
// Rotate 3: 8 -> 9 -> 2 -> 4 -> 7

// **Example 2:**

// Input:
// N = 8
// value[] = {1, 2, 3, 4, 5, 6, 7, 8}
// k = 4
// Output:5 6 7 8 1 2 3 4

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const leftShift = (head, k) => {
  if (!head || k === 0) {
    return head;
  }

  let current = head;
  let count = 1;

  // Find the kth node from the beginning
  while (count < k && current) {
    current = current.next;
    count++;
  }

  // If k is greater than the length of the list, no shift is needed
  if (!current || !current.next) {
    return head;
  }

  const newHead = current.next;
  current.next = null;

  // Traverse to the end of the original list and connect it to the head
  let temp = newHead;
  while (temp.next) {
    temp = temp.next;
  }
  temp.next = head;

  return newHead;
};

// Example usage:
const head = new ListNode(2);
head.next = new ListNode(4);
head.next.next = new ListNode(7);
head.next.next.next = new ListNode(8);
head.next.next.next.next = new ListNode(9);

const k = 3;

const shiftedHead = leftShift(head, k);

// Print the shifted list
let current = shiftedHead;
while (current) {
  console.log(current.val);
  current = current.next;
}
