// 💡 **Question 2**

// Given a number n, find the sum of the first natural numbers.

// **Example 1:**

// Input: n = 3
// Output: 6

// **Example 2:**

// Input  : 5
// Output : 15

// ========== solution ========== //

function sumOfFirstNNumbers(n) {
  if (n === 0) {
    return 0;
  }

  return n + sumOfFirstNNumbers(n - 1);
}

// Testing the function
console.log(sumOfFirstNNumbers(3)); // 6
console.log(sumOfFirstNNumbers(5)); // 15
