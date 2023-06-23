// 💡 **Question 3**

// Given a stack with **push()**, **pop()**, and **empty()** operations, The task is to delete the **middle** element ****of it without using any additional data structure.

// Input  : Stack[] = [1, 2, 3, 4, 5]

// Output : Stack[] = [1, 2, 4, 5]

// Input  : Stack[] = [1, 2, 3, 4, 5, 6]

// Output : Stack[] = [1, 2, 4, 5, 6]

function deleteMiddle(stack) {
  if (stack.length === 0) {
    return;
  }

  const midIndex = Math.floor(stack.length / 2) + 1;
  deleteMiddleUtil(stack, midIndex);
}

function deleteMiddleUtil(stack, k) {
  if (k === 1) {
    stack.pop();
    return;
  }

  const temp = stack.pop();
  deleteMiddleUtil(stack, k - 1);
  stack.push(temp);
}

// Example usage:
const stack1 = [1, 2, 3, 4, 5];
deleteMiddle(stack1);
console.log(stack1); // [1, 2, 4, 5]

const stack2 = [1, 2, 3, 4, 5, 6];
deleteMiddle(stack2);
console.log(stack2); // [1, 2, 4, 5, 6]
