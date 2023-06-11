// 💡 **Question 5**
// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase **may be** incomplete.

// Given the integer n, return *the number of **complete rows** of the staircase you will build*.

// **Example 1:**
// **Input:** n = 5

// **Output:** 2

// **Explanation:** Because the 3rd row is incomplete, we return 2.

function arrangeCoins(n) {
  let left = 0;
  let right = n;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let curr = (mid * (mid + 1)) / 2;

    if (curr === n) {
      return mid;
    } else if (curr < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}

let n = 5;
let result = arrangeCoins(n);
console.log(result);
