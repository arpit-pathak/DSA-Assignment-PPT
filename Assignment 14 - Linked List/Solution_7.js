// 💡 **Question 7**

// You are given the `head` of a linked list with `n` nodes.

// For each node in the list, find the value of the **next greater node**. That is, for each node, find the value of the first node that is next to it and has a **strictly larger** value than it.

// Return an integer array `answer` where `answer[i]` is the value of the next greater node of the `ith` node (**1-indexed**). If the `ith` node does not have a next greater node, set `answer[i] = 0`.

// **Example 1:**

// !https://assets.leetcode.com/uploads/2021/08/05/linkedlistnext1.jpg

// Input: head = [2,1,5]
// Output: [5,5,0]

// **Example 2:**

// Input: head = [2,7,4,3,5]
// Output: [7,0,5,5,0]

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const nextLargerNodes = (head) => {
  if (!head) {
    return [];
  }

  const stack = [];
  const result = [];
  let index = 0;

  while (head) {
    result[index] = 0;

    while (stack.length > 0 && head.val > stack[stack.length - 1].val) {
      const node = stack.pop();
      result[node.index] = head.val;
    }

    stack.push({ val: head.val, index });
    head = head.next;
    index++;
  }

  return result;
};

// Example usage:
const head = new ListNode(2);
head.next = new ListNode(7);
head.next.next = new ListNode(4);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(5);

const result = nextLargerNodes(head);

console.log(result);
