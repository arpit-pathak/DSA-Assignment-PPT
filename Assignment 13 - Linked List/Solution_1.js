// 💡 **Question 1**

// Given two linked list of the same size, the task is to create a new linked list using those linked lists. The condition is that the greater node among both linked list will be added to the new linked list.

// **Examples:**

// Input: list1 = 5->2->3->8
// list2 = 1->7->4->5
// Output: New list = 5->7->4->8

// Input:list1 = 2->8->9->3
// list2 = 5->3->6->4
// Output: New list = 5->8->9->4

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function createNewList(list1, list2) {
  let ptr1 = list1;
  let ptr2 = list2;
  let newList = null;
  let tail = null;

  while (ptr1 && ptr2) {
    let newNode;
    if (ptr1.data >= ptr2.data) {
      newNode = new Node(ptr1.data);
      ptr1 = ptr1.next;
    } else {
      newNode = new Node(ptr2.data);
      ptr2 = ptr2.next;
    }

    if (!newList) {
      newList = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = tail.next;
    }
  }

  // Add remaining nodes from list1, if any
  while (ptr1) {
    tail.next = new Node(ptr1.data);
    tail = tail.next;
    ptr1 = ptr1.next;
  }

  // Add remaining nodes from list2, if any
  while (ptr2) {
    tail.next = new Node(ptr2.data);
    tail = tail.next;
    ptr2 = ptr2.next;
  }

  return newList;
}

// Example usage:
const list1 = new Node(5);
list1.next = new Node(2);
list1.next.next = new Node(3);
list1.next.next.next = new Node(8);

const list2 = new Node(1);
list2.next = new Node(7);
list2.next.next = new Node(4);
list2.next.next.next = new Node(5);

const newList = createNewList(list1, list2);
let current = newList;
while (current) {
  console.log(current.data);
  current = current.next;
}
