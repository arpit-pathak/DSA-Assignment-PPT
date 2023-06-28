// 💡 **Question 3**

// Given a linked list consisting of **L** nodes and given a number **N**. The task is to find the **N**th node from the end of the linked list.

// **Example 1:**

// Input:
// N = 2
// LinkedList: 1->2->3->4->5->6->7->8->9
// Output:8
// Explanation:In the first example, there are 9 nodes in linked list and we need to find 2nd node from end. 2nd node from end is 8.

// **Example 2:**

// Input:
// N = 5
// LinkedList: 10->5->100->5
// Output:-1
// Explanation:In the second example, there are 4 nodes in the linked list and we need to find 5th from the end. Since 'n' is more than the number of nodes in the linked list, the output is -1.

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

  findNthFromEnd(n) {
    if (n <= 0) {
      return -1;
    }

    let first = this.head;
    let second = this.head;

    // Move the first pointer N nodes ahead
    for (let i = 0; i < n; i++) {
      if (first === null) {
        return -1; // Less than N nodes in the list
      }
      first = first.next;
    }

    // Move both pointers until the first pointer reaches the end
    while (first !== null) {
      first = first.next;
      second = second.next;
    }

    // Return the data value of the Nth node from the end
    return second !== null ? second.data : -1;
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
linkedList.insert(9);

console.log("Nth node from the end:", linkedList.findNthFromEnd(2));
