// 💡 8. **Find K Closest Elements**

// Given a **sorted** integer array `arr`, two integers `k` and `x`, return the `k` closest integers to `x` in the array. The result should also be sorted in ascending order.

// An integer `a` is closer to `x` than an integer `b` if:

// - `|a - x| < |b - x|`, or
// - `|a - x| == |b - x|` and `a < b`

// **Example 1:**

// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]

// **Example 2:**

// Input: arr = [1,2,3,4,5], k = 4, x = -1
// Output: [1,2,3,4]

// **Constraints:**

// - `1 <= k <= arr.length`
// - `1 <= arr.length <= 10000`
// - `arr` is sorted in **ascending** order.
// - -`10000 <= arr[i], x <= 10000`

// ========== Solution ========== //

function findClosestElements(arr, k, x) {
  let left = 0;
  let right = arr.length - 1;

  while (right - left + 1 > k) {
    const diffLeft = Math.abs(arr[left] - x);
    const diffRight = Math.abs(arr[right] - x);

    if (diffLeft > diffRight) {
      left++;
    } else {
      right--;
    }
  }

  return arr.slice(left, right + 1);
}

// Example 1
const arr1 = [1, 2, 3, 4, 5];
const k1 = 4;
const x1 = 3;
const result1 = findClosestElements(arr1, k1, x1);
console.log(result1);

// Example 2
const arr2 = [1, 2, 3, 4, 5];
const k2 = 4;
const x2 = -1;
const result2 = findClosestElements(arr2, k2, x2);
console.log(result2);
