// 💡 **Question 8**

// Given an array, find a product of all array elements.

// **Example 1:**

// Input  : arr[] = {1, 2, 3, 4, 5}
// Output : 120

// **Example 2:**

// Input  : arr[] = {1, 6, 3}
// Output : 18

// ========== solution ========== //

function productOfArray(arr, n) {
  if (n === 0) {
    return arr[n];
  }
  return arr[n] * productOfArray(arr, n - 1);
}

// Function to find the product of all array elements
function findProduct(arr) {
  return productOfArray(arr, arr.length - 1);
}

// Testing the function
console.log(findProduct([1, 2, 3, 4, 5])); // 120
console.log(findProduct([1, 6, 3])); // 18
