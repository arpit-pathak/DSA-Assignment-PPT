// 💡 **Question 1**

// Given a linked list of **N** nodes such that it may contain a loop.

// A loop here means that the last node of the link list is connected to the node at position X(1-based index). If the link list does not have any loop, X=0.

// Remove the loop from the linked list, if it is present, i.e. unlink the last node which is forming the loop.

// **Example 1:**

// Input:
// N = 3
// value[] = {1,3,4}
// X = 2
// Output:1
// Explanation:The link list looks like
// 1 -> 3 -> 4
//      ^    |
//      |____|
// A loop is present. If you remove it
// successfully, the answer will be 1.

// **Example 2:**

// Input:
// N = 4
// value[] = {1,8,3,4}
// X = 0
// Output:1
// Explanation:The Linked list does not
// contains any loop.

// **Example 3:**

// Input:
// N = 4
// value[] = {1,2,3,4}
// X = 1
// Output:1
// Explanation:The link list looks like
// 1 -> 2 -> 3 -> 4
// ^              |
// |______________|
// A loop is present.
// If you remove it successfully,
// the answer will be 1.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function detectAndRemoveLoop(head) {
  if (head === null || head.next === null) {
    return null;
  }

  let slow = head;
  let fast = head;

  // Detect the loop in the linked list
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      break;
    }
  }

  // If no loop exists, return the head of the list
  if (slow !== fast) {
    return head;
  }

  // Find the starting point of the loop
  slow = head;
  while (slow.next !== fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // Remove the loop by setting the next pointer of the last node to null
  fast.next = null;

  return head;
}

// Example usage:
const list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
list.next.next.next = new Node(4);
list.next.next.next.next = list.next; // Create a loop

const newList = detectAndRemoveLoop(list);

let current = newList;
while (current) {
  console.log(current.data);
  current = current.next;
}
