// 💡 **Question 7**

// Design a queue that supports `push` and `pop` operations in the front, middle, and back.

// Implement the `FrontMiddleBack` class:

// - `FrontMiddleBack()` Initializes the queue.
// - `void pushFront(int val)` Adds `val` to the **front** of the queue.
// - `void pushMiddle(int val)` Adds `val` to the **middle** of the queue.
// - `void pushBack(int val)` Adds `val` to the **back** of the queue.
// - `int popFront()` Removes the **front** element of the queue and returns it. If the queue is empty, return `1`.
// - `int popMiddle()` Removes the **middle** element of the queue and returns it. If the queue is empty, return `1`.
// - `int popBack()` Removes the **back** element of the queue and returns it. If the queue is empty, return `1`.

// **Notice** that when there are **two** middle position choices, the operation is performed on the **frontmost** middle position choice. For example:

// - Pushing `6` into the middle of `[1, 2, 3, 4, 5]` results in `[1, 2, 6, 3, 4, 5]`.
// - Popping the middle from `[1, 2, 3, 4, 5, 6]` returns `3` and results in `[1, 2, 4, 5, 6]`.

// **Example 1:**

// Input:
// ["FrontMiddleBackQueue", "pushFront", "pushBack", "pushMiddle", "pushMiddle", "popFront", "popMiddle", "popMiddle", "popBack", "popFront"]
// [[], [1], [2], [3], [4], [], [], [], [], []]
// Output:
// [null, null, null, null, null, 1, 3, 4, 2, -1]

// Explanation:
// FrontMiddleBackQueue q = new FrontMiddleBackQueue();
// q.pushFront(1);   // [1]
// q.pushBack(2);    // [1,2]
// q.pushMiddle(3);  // [1,3, 2]
// q.pushMiddle(4);  // [1,4, 3, 2]
// q.popFront();     // return 1 -> [4, 3, 2]
// q.popMiddle();    // return 3 -> [4, 2]
// q.popMiddle();    // return 4 -> [2]
// q.popBack();      // return 2 -> []
// q.popFront();     // return -1 -> [] (The queue is empty)

class FrontMiddleBackQueue {
  constructor() {
    this.frontHalf = [];
    this.backHalf = [];
    this.middle = null;
  }

  pushFront(val) {
    if (this.middle !== null) {
      this.frontHalf.push(this.middle);
      this.middle = null;
    }
    this.frontHalf.push(val);
  }

  pushMiddle(val) {
    if (this.middle !== null) {
      this.frontHalf.push(this.middle);
      this.middle = null;
    }
    if (this.frontHalf.length === this.backHalf.length) {
      this.frontHalf.push(val);
    } else {
      this.backHalf.unshift(val);
      this.middle = this.backHalf.shift();
    }
  }

  pushBack(val) {
    if (this.middle !== null) {
      this.backHalf.unshift(this.middle);
      this.middle = null;
    }
    this.backHalf.unshift(val);
  }

  popFront() {
    if (this.frontHalf.length > 0) {
      if (this.frontHalf.length === 1 && this.backHalf.length === 0) {
        this.middle = null;
      } else {
        this.middle = this.backHalf.shift();
      }
      return this.frontHalf.shift();
    }
    return -1;
  }

  popMiddle() {
    if (this.middle !== null) {
      if (this.frontHalf.length === this.backHalf.length) {
        this.middle = null;
        return this.frontHalf.pop();
      } else {
        this.middle = null;
        return this.backHalf.shift();
      }
    }
    return -1;
  }

  popBack() {
    if (this.backHalf.length > 0) {
      if (this.backHalf.length === 1 && this.frontHalf.length === 0) {
        this.middle = null;
      } else {
        this.middle = this.frontHalf.pop();
      }
      return this.backHalf.shift();
    }
    return -1;
  }
}

// Example usage:
const q = new FrontMiddleBackQueue();
q.pushFront(1);
q.pushBack(2);
q.pushMiddle(3);
q.pushMiddle(4);
console.log(q.popFront()); // Output: 1
console.log(q.popMiddle()); // Output: 3
console.log(q.popMiddle()); // Output: 4
console.log(q.popBack()); // Output: 2
console.log(q.popFront()); // Output: -1 (The queue is empty)
