// 💡 **Question 3**

// Given a Linked List of size N, where every node represents a sub-linked-list and contains two pointers:(i) a **next** pointer to the next node,(ii) a **bottom** pointer to a linked list where this node is head.Each of the sub-linked-list is in sorted order.Flatten the Link List such that all the nodes appear in a single level while maintaining the sorted order. **Note:** The flattened list will be printed using the bottom pointer instead of next pointer.

// **Example 1:**

// Input:
// 5 -> 10 -> 19 -> 28
// |     |     |     |
// 7     20    22   35
// |           |     |
// 8          50    40
// |                 |
// 30               45
// Output: 5-> 7-> 8- > 10 -> 19-> 20->
// 22-> 28-> 30-> 35-> 40-> 45-> 50.
// Explanation:
// The resultant linked lists has every
// node in a single level.(Note:| represents the bottom pointer.)

// **Example 2:**

// Input:
// 5 -> 10 -> 19 -> 28
// |          |
// 7          22
// |          |
// 8          50
// |
// 30
// Output: 5->7->8->10->19->22->28->30->50
// Explanation:
// The resultant linked lists has every
// node in a single level.

// (Note:| represents the bottom pointer.)

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.bottom = null;
  }
}

function mergeLists(list1, list2) {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  let result;

  if (list1.data < list2.data) {
    result = list1;
    result.bottom = mergeLists(list1.bottom, list2);
  } else {
    result = list2;
    result.bottom = mergeLists(list1, list2.bottom);
  }

  return result;
}

function flattenLinkedList(head) {
  if (head === null || head.next === null) return head;

  // Recursively flatten the remaining list
  head.next = flattenLinkedList(head.next);

  // Merge the current list with the flattened list
  head = mergeLists(head, head.next);

  return head;
}

// Example usage:
const head = new Node(5);
head.next = new Node(10);
head.next.next = new Node(19);
head.next.next.next = new Node(28);

head.bottom = new Node(7);
head.bottom.bottom = new Node(8);
head.bottom.bottom.bottom = new Node(30);

head.next.bottom = new Node(20);

head.next.next.bottom = new Node(22);

head.next.next.next.bottom = new Node(35);
head.next.next.next.bottom.bottom = new Node(40);
head.next.next.next.bottom.bottom.bottom = new Node(45);

const flattenedList = flattenLinkedList(head);

let current = flattenedList;
while (current) {
  console.log(current.data);
  current = current.bottom;
}
