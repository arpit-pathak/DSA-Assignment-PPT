// 💡 **Question 3**

// ****Given a positive integer, N. Find the factorial of N.

// **Example 1:**

// Input: N = 5
// Output: 120

// **Example 2:**

// Input: N = 4
// Output: 24

// ========== solution ========== //

function factorial(N) {
  if (N === 0) {
    return 1;
  }

  return N * factorial(N - 1);
}

// Testing the function
console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
