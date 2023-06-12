// 💡 **Question 8**

// Given two [sparse matrices](https://en.wikipedia.org/wiki/Sparse_matrix) mat1 of size m x k and mat2 of size k x n, return the result of mat1 x mat2. You may assume that multiplication is always possible.

// **Example 1:**

// ![Screenshot 2023-05-29 005557.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/df57e793-12bf-4104-a17b-4e6a88dc7955/Screenshot_2023-05-29_005557.png)

// **Input:** mat1 = [[1,0,0],[-1,0,3]], mat2 = [[7,0,0],[0,0,0],[0,0,1]]
// **Output:**
// [[7,0,0],[-7,0,3]]

// ============== solution ============== //

function multiply(mat1, mat2) {
  const m = mat1.length;
  const k = mat1[0].length;
  const n = mat2[0].length;

  const result = new Array(m).fill().map(() => new Array(n).fill(0));

  // Create a transpose of mat2 for efficient column access
  const transposeMat2 = new Array(n).fill().map(() => new Array(k).fill(0));
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < n; j++) {
      transposeMat2[j][i] = mat2[i][j];
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let sum = 0;

      for (let l = 0; l < k; l++) {
        if (mat1[i][l] !== 0 && transposeMat2[j][l] !== 0) {
          sum += mat1[i][l] * transposeMat2[j][l];
        }
      }

      result[i][j] = sum;
    }
  }

  return result;
}

const mat1 = [
  [1, 0, 0],
  [-1, 0, 3],
];
const mat2 = [
  [7, 0, 0],
  [0, 0, 0],
  [0, 0, 1],
];

const result = multiply(mat1, mat2);
console.log(result);
