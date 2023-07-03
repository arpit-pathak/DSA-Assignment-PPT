// 💡 **Question 3**

// Implement a Stack using two queues **q1** and **q2**.

// **Example 1:**

// Input:
// push(2)
// push(3)
// pop()
// push(4)
// pop()
// Output:3 4
// Explanation:
// push(2) the stack will be {2}
// push(3) the stack will be {2 3}
// pop()   poped element will be 3 the
//         stack will be {2}
// push(4) the stack will be {2 4}
// pop()   poped element will be 4

// **Example 2:**

// Input:
// push(2)
// pop()
// pop()
// push(3)
// Output:2 -1

// =============== solution =============== //

class Stack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  // Method to add an element to the stack
  push(element) {
    this.q1.push(element);
  }

  // Method to remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return -1; // Stack is empty
    }

    while (this.q1.length > 1) {
      this.q2.push(this.q1.shift());
    }

    const poppedElement = this.q1.shift();

    // Swap the names of q1 and q2
    const temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;

    return poppedElement;
  }

  // Method to check if the stack is empty
  isEmpty() {
    return this.q1.length === 0;
  }
}

// Example usage:
const myStack = new Stack();
myStack.push(2);
myStack.push(3);
console.log(myStack.pop()); // Output: 3
myStack.push(4);
console.log(myStack.pop()); // Output: 4
