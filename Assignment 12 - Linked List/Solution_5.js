// 💡 **Question 5**

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
// A loop is present. If you remove it successfully, the answer will be 1.

// **Example 2:**

// Input:
// N = 4
// value[] = {1,8,3,4}
// X = 0
// Output:1
// Explanation:The Linked list does not contains any loop.

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
// A loop is present. If you remove it successfully, the answer will be 1.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  detectAndRemoveLoop() {
    let slow = this.head;
    let fast = this.head;

    // Move slow and fast pointers to find the meeting point
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        // Loop detected
        break;
      }
    }

    // No loop found, return the list as it is
    if (fast === null || fast.next === null) {
      return;
    }

    // Move slow pointer back to the head
    slow = this.head;

    // Find the start of the loop
    while (slow !== fast) {
      slow = slow.next;
      fast = fast.next;
    }

    // Move fast pointer to the last node of the loop
    while (fast.next !== slow) {
      fast = fast.next;
    }

    // Remove the loop by setting the next node of the last node to null
    fast.next = null;
  }

  printList() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += current.data + " ";
      current = current.next;
    }
    console.log(result);
  }
}

// Example usage:
const linkedList1 = new LinkedList();
linkedList1.insert(1);
linkedList1.insert(3);
linkedList1.insert(4);
linkedList1.head.next.next.next = linkedList1.head.next;

linkedList1.detectAndRemoveLoop();
console.log("Linked List after removing the loop:");
linkedList1.printList();

const linkedList2 = new LinkedList();
linkedList2.insert(1);
linkedList2.insert(8);
linkedList2.insert(3);
linkedList2.insert(4);

linkedList2.detectAndRemoveLoop();
console.log("Linked List after removing the loop:");
linkedList2.printList();

const linkedList3 = new LinkedList();
linkedList3.insert(1);
linkedList3.insert(2);
linkedList3.insert(3);
linkedList3.insert(4);
linkedList3.head.next.next.next.next = linkedList3.head;

linkedList3.detectAndRemoveLoop();
console.log("Linked List after removing the loop:");
linkedList3.printList();
