// 💡 **Question 4**

// Given a number N and a power P, the task is to find the exponent of this number raised to the given power, i.e. N^P.

// **Example 1 :**

// Input: N = 5, P = 2
// Output: 25

// **Example 2 :**

// Input: N = 2, P = 5
// Output: 32

// ========== solution ========== //

function power(N, P) {
  if (P === 0) {
    return 1;
  }

  if (P % 2 === 0) {
    const half = power(N, P / 2);
    return half * half;
  } else {
    return N * power(N, P - 1);
  }
}

// Testing the function
console.log(power(5, 2)); // 25
console.log(power(2, 5)); // 32
