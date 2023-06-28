// 💡 **Question 8**

// Given the `head` of a linked list, we repeatedly delete consecutive sequences of nodes that sum to `0` until there are no such sequences.

// After doing so, return the head of the final linked list.  You may return any such answer.

// (Note that in the examples below, all sequences are serializations of `ListNode` objects.)

// **Example 1:**

// Input: head = [1,2,-3,3,1]
// Output: [3,1]
// Note: The answer [1,2,1] would also be accepted.

// **Example 2:**

// Input: head = [1,2,3,-3,4]
// Output: [1,2,4]

// **Example 3:**

// Input: head = [1,2,3,-3,-2]
// Output: [1] */}

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const removeZeroSumSublists = (head) => {
  const dummy = new ListNode(0);
  dummy.next = head;

  let sum = 0;
  let curr = dummy;
  const sumMap = new Map();

  while (curr) {
    sum += curr.val;

    if (sumMap.has(sum)) {
      let prev = sumMap.get(sum).next;
      let removeSum = sum + prev.val;

      while (prev !== curr) {
        sum += prev.val;
        sumMap.delete(sum);
        prev = prev.next;
      }

      sumMap.get(removeSum).next = curr.next;
    } else {
      sumMap.set(sum, curr);
    }

    curr = curr.next;
  }

  return dummy.next;
};

// Example usage:
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(-3);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(1);

const result = removeZeroSumSublists(head);

// Print the result
let curr = result;
const values = [];

while (curr) {
  values.push(curr.val);
  curr = curr.next;
}

console.log(values);
