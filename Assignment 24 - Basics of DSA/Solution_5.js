// 💡 5. **Ugly Numbers**

// An **ugly number** is a positive integer whose prime factors are limited to `2`, `3`, and `5`.
// Given an integer `n`, return *the* `nth` ***ugly number***.

// **Example 1:**

// Input: n = 10
// Output: 12
// Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.

// **Example 2:**

// Input: n = 1
// Output: 1
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.

// **Constraints:**
// - `1 <= n <= 1690`

// ========== Solution ========== //

function nthUglyNumber(n) {
  const uglyNumbers = [1];
  let i2 = 0;
  let i3 = 0;
  let i5 = 0;

  for (let i = 1; i < n; i++) {
    const nextUglyNumber = Math.min(
      uglyNumbers[i2] * 2,
      uglyNumbers[i3] * 3,
      uglyNumbers[i5] * 5
    );
    uglyNumbers.push(nextUglyNumber);

    if (nextUglyNumber === uglyNumbers[i2] * 2) {
      i2++;
    }
    if (nextUglyNumber === uglyNumbers[i3] * 3) {
      i3++;
    }
    if (nextUglyNumber === uglyNumbers[i5] * 5) {
      i5++;
    }
  }

  return uglyNumbers[n - 1];
}

// Example 1
const n1 = 10;
const result1 = nthUglyNumber(n1);
console.log(`The ${n1}th Ugly Number: ${result1}`);

// Example 2
const n2 = 1;
const result2 = nthUglyNumber(n2);
console.log(`The ${n2}st Ugly Number: ${result2}`);
