// 💡 **Question 4**

// You are given a stack **St**. You have to reverse the stack using recursion.

// **Example 1:**

// Input:St = {3,2,1,7,6}
// Output:{6,7,1,2,3}

// **Example 2:**

// Input:St = {4,3,9,6}
// Output:{6,9,3,4}

// =============== solution =============== //

class Stack {
  constructor() {
    this.stackArray = [];
  }

  // Method to add an element to the stack
  push(element) {
    this.stackArray.push(element);
  }

  // Method to remove and return the top element from the stack
  pop() {
    return this.stackArray.pop();
  }

  // Method to check if the stack is empty
  isEmpty() {
    return this.stackArray.length === 0;
  }

  // Method to reverse the stack using recursion
  reverseStack() {
    if (this.isEmpty() || this.stackArray.length === 1) {
      return; // Base case: stack is empty or has only one element
    }

    const temp = this.pop(); // Pop the top element

    this.reverseStack(); // Recursively reverse the remaining stack

    this.insertAtBottom(temp); // Insert the popped element at the bottom
  }

  // Recursive method to insert an element at the bottom of the stack
  insertAtBottom(element) {
    if (this.isEmpty()) {
      this.push(element); // Base case: stack is empty, push the element
      return;
    }

    const temp = this.pop(); // Pop the top element

    this.insertAtBottom(element); // Recursively insert the element at the bottom

    this.push(temp); // Push the popped element back to the stack
  }
}

// Example usage:
const myStack = new Stack();
myStack.push(3);
myStack.push(2);
myStack.push(1);
myStack.push(7);
myStack.push(6);

console.log("Original Stack:", myStack.stackArray);
myStack.reverseStack();
console.log("Reversed Stack:", myStack.stackArray);
