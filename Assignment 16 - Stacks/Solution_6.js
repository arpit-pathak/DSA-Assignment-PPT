// 💡 **Question 6**

// Given an integer k and a **[queue](https://www.geeksforgeeks.org/queue-data-structure/)** of integers, The task is to reverse the order of the first **k** elements of the queue, leaving the other elements in the same relative order.

// Only following standard operations are allowed on queue.

// - **enqueue(x) :** Add an item x to rear of queue
// - **dequeue() :** Remove an item from front of queue
// - **size() :** Returns number of elements in queue.
// - **front() :** Finds front item.

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  size() {
    return this.items.length;
  }

  front() {
    if (this.isEmpty()) {
      return "No elements in the queue";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function reverseKElements(queue, k) {
  if (queue.isEmpty() || k <= 0 || k > queue.size()) {
    return "Invalid input";
  }

  const stack = [];

  // Push the first k elements into the stack
  for (let i = 0; i < k; i++) {
    stack.push(queue.dequeue());
  }

  // Enqueue the elements from the stack back into the queue
  while (stack.length > 0) {
    queue.enqueue(stack.pop());
  }

  // Move the remaining elements after the first k elements
  // to the end of the queue
  for (let i = 0; i < queue.size() - k; i++) {
    queue.enqueue(queue.dequeue());
  }

  return queue;
}

// Example usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log(reverseKElements(queue, 3));
// Output: Queue { items: [ 3, 2, 1, 4, 5 ] }
