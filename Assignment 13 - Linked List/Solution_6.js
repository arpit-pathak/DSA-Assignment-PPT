// 💡 **Question 6**

// Given two sorted linked lists consisting of **N** and **M** nodes respectively. The task is to merge both of the lists (in place) and return the head of the merged list.

// **Examples:**

// Input: a: 5->10->15, b: 2->3->20
// Output: 2->3->5->10->15->20

// Input: a: 1->1, b: 2->4
// Output: 1->1->2->4

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function mergeSortedLists(head1, head2) {
  const dummyNode = new Node(0);
  let current = dummyNode;
  let ptr1 = head1;
  let ptr2 = head2;

  while (ptr1 && ptr2) {
    if (ptr1.data <= ptr2.data) {
      current.next = ptr1;
      ptr1 = ptr1.next;
    } else {
      current.next = ptr2;
      ptr2 = ptr2.next;
    }
    current = current.next;
  }

  if (ptr1) {
    current.next = ptr1;
  }

  if (ptr2) {
    current.next = ptr2;
  }

  return dummyNode.next;
}

// Example usage:
const list1 = new Node(5);
list1.next = new Node(10);
list1.next.next = new Node(15);

const list2 = new Node(2);
list2.next = new Node(3);
list2.next.next = new Node(20);

const mergedList = mergeSortedLists(list1, list2);

let current = mergedList;
while (current) {
  console.log(current.data);
  current = current.next;
}
