// 💡 **Question 1**

// Given a singly linked list, delete **middle** of the linked list. For example, if given linked list is 1->2->**3**->4->5 then linked list should be modified to 1->2->4->5.If there are **even** nodes, then there would be **two middle** nodes, we need to delete the second middle element. For example, if given linked list is 1->2->3->4->5->6 then it should be modified to 1->2->3->5->6.If the input linked list is NULL or has 1 node, then it should return NULL

// **Example 1:**

// Input:
// LinkedList: 1->2->3->4->5
// Output:1 2 4 5

// **Example 2:**

// Input:
// LinkedList: 2->4->6->7->5->1
// Output:2 4 6 5 1

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

  deleteMiddle() {
    if (this.head === null || this.head.next === null) {
      return null;
    }

    let slow = this.head;
    let fast = this.head;
    let prev = null;

    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      prev = slow;
      slow = slow.next;
    }

    prev.next = slow.next;
    return this.head;
  }

  printList() {
    let current = this.head;
    while (current !== null) {
      process.stdout.write(current.data + " ");
      current = current.next;
    }
    process.stdout.write("\n");
  }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
linkedList.insert(4);
linkedList.insert(5);

console.log("Original Linked List:");
linkedList.printList();

linkedList.deleteMiddle();

console.log("Modified Linked List:");
linkedList.printList();
