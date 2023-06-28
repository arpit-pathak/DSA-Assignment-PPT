// 💡 **Question 7**

// Given two linked lists, insert nodes of second list into first list at alternate positions of first list.
// For example, if first list is 5->7->17->13->11 and second is 12->10->2->4->6, the first list should become 5->12->7->10->17->2->13->4->11->6 and second list should become empty. The nodes of second list should only be inserted when there are positions available. For example, if the first list is 1->2->3 and second list is 4->5->6->7->8, then first list should become 1->4->2->5->3->6 and second list to 7->8.

// Use of extra space is not allowed (Not allowed to create additional nodes), i.e., insertion must be done in-place. Expected time complexity is O(n) where n is number of nodes in first list.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function insertAlternate(firstList, secondList) {
  if (!secondList) {
    return firstList;
  }

  let firstPtr = firstList;
  let secondPtr = secondList;

  while (firstPtr && secondPtr) {
    let firstNext = firstPtr.next;
    let secondNext = secondPtr.next;

    firstPtr.next = secondPtr;
    secondPtr.next = firstNext;

    firstPtr = firstNext;
    secondPtr = secondNext;
  }

  secondList = null;

  return firstList;
}

function printList(head) {
  let current = head;
  let result = "";
  while (current !== null) {
    result += current.data + " ";
    current = current.next;
  }
  console.log(result);
}

// Example usage:
const firstList = new Node(5);
firstList.next = new Node(7);
firstList.next.next = new Node(17);
firstList.next.next.next = new Node(13);
firstList.next.next.next.next = new Node(11);

const secondList = new Node(12);
secondList.next = new Node(10);
secondList.next.next = new Node(2);
secondList.next.next.next = new Node(4);
secondList.next.next.next.next = new Node(6);

console.log("Before insertion:");
printList(firstList);
printList(secondList);

const mergedList = insertAlternate(firstList, secondList);

console.log("After insertion:");
printList(mergedList);
printList(secondList);
