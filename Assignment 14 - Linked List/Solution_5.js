// 💡 **Question 5**

// Given the `head` of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return *the reordered list*.

// The **first** node is considered **odd**, and the **second** node is **even**, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in `O(1)` extra space complexity and `O(n)` time complexity.

// **Example 1:**

// !https://assets.leetcode.com/uploads/2021/03/10/oddeven-linked-list.jpg

// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]

// **Example 2:**

// Input: head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4] */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function oddEvenList(head) {
  if (head === null || head.next === null) {
    return head;
  }

  // Separate odd-indexed and even-indexed nodes
  let oddHead = head;
  let evenHead = head.next;
  let oddTail = oddHead;
  let evenTail = evenHead;

  while (evenTail !== null && evenTail.next !== null) {
    oddTail.next = evenTail.next;
    oddTail = oddTail.next;
    evenTail.next = oddTail.next;
    evenTail = evenTail.next;
  }

  // Merge the two lists
  oddTail.next = evenHead;

  return oddHead;
}

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const reorderedList = oddEvenList(head);

// Print the reordered list
let current = reorderedList;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}
