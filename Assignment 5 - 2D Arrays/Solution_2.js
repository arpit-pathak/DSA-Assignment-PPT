// 💡 **Question 2**

// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase **may be** incomplete.

// Given the integer n, return *the number of **complete rows** of the staircase you will build*.

// **Example 1:**

// **Input:** n = 5
// **Output:** 2
// **Explanation:** Because the 3rd row is incomplete, we return 2.

function arrangeCoins(n) {
  let completeRows = 0;
  let coins = n;
  let currentRow = 1;

  while (coins >= currentRow) {
    coins -= currentRow;
    completeRows++;
    currentRow++;
  }

  return completeRows;
}

const n = 5;
const result = arrangeCoins(n);
console.log(result);
