// 💡 **Question 6**

// Given first term (a), common difference (d) and a integer N of the Arithmetic Progression series, the task is to find Nth term of the series.

// **Example 1:**

// Input : a = 2 d = 1 N = 5
// Output : 6
// The 5th term of the series is : 6

// **Example 2:**

// Input : a = 5 d = 2 N = 10
// Output : 23
// The 10th term of the series is : 23

// ========== solution ========== //

function nthTermAP(a, d, N) {
  if (N === 1) {
    return a;
  }

  return nthTermAP(a + d, d, N - 1);
}

// Testing the function
console.log(nthTermAP(2, 1, 5)); // 6
console.log(nthTermAP(5, 2, 10)); // 23
