// 💡 **Question 7**
// You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

// Count and return *the number of maximum integers in the matrix after performing all the operations*

// **Example 1:**
// **Input:** m = 3, n = 3, ops = [[2,2],[3,3]]

// **Output:** 4

// **Explanation:** The maximum integer in M is 2, and there are four of it in M. So return 4.

function maxCount(m, n, ops) {
  let minRow = m;
  let minCol = n;

  for (let i = 0; i < ops.length; i++) {
    minRow = Math.min(minRow, ops[i][0]);
    minCol = Math.min(minCol, ops[i][1]);
  }

  return minRow * minCol;
}

const m = 3;
const n = 3;
const ops = [
  [2, 2],
  [3, 3],
];
const result = maxCount(m, n, ops);
console.log(result);
