// 💡 **Question 8**

// Given an array of integers, the task is to find the maximum absolute difference between the nearest left and the right smaller element of every element in the array.

// **Note:** If there is no smaller element on right side or left side of any element then we take zero as the smaller element. For example for the leftmost element, the nearest smaller element on the left side is considered as 0. Similarly, for rightmost elements, the smaller element on the right side is considered as 0.

// **Examples:**

// Input : arr[] = {2, 1, 8}
// Output : 1
// Left smaller  LS[] {0, 0, 1}
// Right smaller RS[] {1, 0, 0}
// Maximum Diff of abs(LS[i] - RS[i]) = 1

// Input  : arr[] = {2, 4, 8, 7, 7, 9, 3}
// Output : 4
// Left smaller   LS[] = {0, 2, 4, 4, 4, 7, 2}
// Right smaller  RS[] = {0, 3, 7, 3, 3, 3, 0}
// Maximum Diff of abs(LS[i] - RS[i]) = 7 - 3 = 4

// Input : arr[] = {5, 1, 9, 2, 5, 1, 7}
// Output : 1

function findMaxAbsDifference(arr) {
  const n = arr.length;
  const LS = new Array(n); // Array to store the nearest left smaller elements
  const RS = new Array(n); // Array to store the nearest right smaller elements
  const stack = [];

  // Find the nearest left smaller element for each element
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }
    LS[i] = stack.length === 0 ? 0 : stack[stack.length - 1];
    stack.push(arr[i]);
  }

  // Clear the stack for finding the nearest right smaller element
  stack.length = 0;

  // Find the nearest right smaller element for each element
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }
    RS[i] = stack.length === 0 ? 0 : stack[stack.length - 1];
    stack.push(arr[i]);
  }

  let maxAbsDiff = 0;

  // Calculate the maximum absolute difference between LS[i] and RS[i]
  for (let i = 0; i < n; i++) {
    const absDiff = Math.abs(LS[i] - RS[i]);
    maxAbsDiff = Math.max(maxAbsDiff, absDiff);
  }

  return maxAbsDiff;
}

// Example usage:
const arr1 = [2, 1, 8];
console.log(findMaxAbsDifference(arr1)); // Output: 1

const arr2 = [2, 4, 8, 7, 7, 9, 3];
console.log(findMaxAbsDifference(arr2)); // Output: 4

const arr3 = [5, 1, 9, 2, 5, 1, 7];
console.log(findMaxAbsDifference(arr3)); // Output: 1
