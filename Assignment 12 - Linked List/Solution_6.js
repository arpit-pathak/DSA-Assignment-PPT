// 💡 **Question 6**

// Given a linked list and two integers M and N. Traverse the linked list such that you retain M nodes then delete next N nodes, continue the same till end of the linked list.

// Difficulty Level: Rookie

// **Examples**:

// Input:
// M = 2, N = 2
// Linked List: 1->2->3->4->5->6->7->8
// Output:
// Linked List: 1->2->5->6

// Input:
// M = 3, N = 2
// Linked List: 1->2->3->4->5->6->7->8->9->10
// Output:
// Linked List: 1->2->3->6->7->8

// Input:
// M = 1, N = 1
// Linked List: 1->2->3->4->5->6->7->8->9->10
// Output:
// Linked List: 1->3->5->7->9

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

  retainAndDeleteNodes(M, N) {
    if (M <= 0 || N <= 0) {
      return;
    }

    let current = this.head;
    let previous = null;

    while (current !== null) {
      // Retain M nodes
      for (let i = 1; i < M && current !== null; i++) {
        current = current.next;
      }

      if (current === null) {
        break;
      }

      // Delete N nodes
      for (let i = 0; i < N && current !== null; i++) {
        const nextNode = current.next;
        current.next = null;
        current = nextNode;
      }

      // Connect the previous node to the next node after deleting N nodes
      if (previous !== null) {
        previous.next = current;
      } else {
        this.head = current;
      }

      // Move the previous pointer to the node before the current pointer
      for (let i = 0; i < N && current !== null; i++) {
        previous = current;
        current = current.next;
      }
    }
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
const linkedList = new LinkedList();
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
linkedList.insert(4);
linkedList.insert(5);
linkedList.insert(6);
linkedList.insert(7);
linkedList.insert(8);

linkedList.retainAndDeleteNodes(2, 2);
console.log("Linked List after retaining M nodes and deleting N nodes:");
linkedList.printList();
