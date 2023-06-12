// 💡 **Question 3**

// Given an array of integers arr, return *true if and only if it is a valid mountain array*.
// Recall that arr is a mountain array if and only if:

// - arr.length >= 3
// - There exists some i with 0 < i < arr.length - 1 such that:
//     - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
//     - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

// **Example 1:**

// **Input:** arr = [2,1]
// **Output:**
// false

// ============== solution ============== //

function validMountainArray(arr) {
  const n = arr.length;
  let i = 0;

  // Check if array length is less than 3
  if (n < 3) {
    return false;
  }

  // Check for increasing sequence
  while (i < n - 1 && arr[i] < arr[i + 1]) {
    i++;
  }

  // Check if peak is at the start or end
  if (i === 0 || i === n - 1) {
    return false;
  }

  // Check for decreasing sequence
  while (i < n - 1 && arr[i] > arr[i + 1]) {
    i++;
  }

  // If all elements are checked, return true
  return i === n - 1;
}

const arr = [2, 1];
const result = validMountainArray(arr);
console.log(result);
