// 💡 **Question 5**

// Given an array of integers **arr**, the task is to find maximum element of that array using recursion.

// **Example 1:**

// Input: arr = {1, 4, 3, -5, -4, 8, 6};
// Output: 8

// **Example 2:**

// Input: arr = {1, 4, 45, 6, 10, -8};
// Output: 45

// ========== solution ========== //

function findMax(arr, startIndex, endIndex) {
  if (startIndex === endIndex) {
    return arr[startIndex];
  }

  const midIndex = Math.floor((startIndex + endIndex) / 2);

  const leftMax = findMax(arr, startIndex, midIndex);
  const rightMax = findMax(arr, midIndex + 1, endIndex);

  return Math.max(leftMax, rightMax);
}

// Testing the function
const arr1 = [1, 4, 3, -5, -4, 8, 6];
console.log(findMax(arr1, 0, arr1.length - 1)); // 8

const arr2 = [1, 4, 45, 6, 10, -8];
console.log(findMax(arr2, 0, arr2.length - 1)); // 45
