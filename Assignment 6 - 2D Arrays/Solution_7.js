// 💡 **Question 7**

// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

// **Example 1:**

// **Input:** n = 3

// **Output:** [[1,2,3],[8,9,4],[7,6,5]]

// ============== solution ============== //

function generateMatrix(n) {
  const matrix = new Array(n).fill().map(() => new Array(n).fill(0)); // Initialize empty matrix

  let num = 1; // Start with element 1
  let topRow = 0;
  let bottomRow = n - 1;
  let leftColumn = 0;
  let rightColumn = n - 1;

  while (topRow <= bottomRow && leftColumn <= rightColumn) {
    // Traverse top row
    for (let col = leftColumn; col <= rightColumn; col++) {
      matrix[topRow][col] = num++;
    }
    topRow++;

    // Traverse right column
    for (let row = topRow; row <= bottomRow; row++) {
      matrix[row][rightColumn] = num++;
    }
    rightColumn--;

    // Traverse bottom row
    for (let col = rightColumn; col >= leftColumn; col--) {
      matrix[bottomRow][col] = num++;
    }
    bottomRow--;

    // Traverse left column
    for (let row = bottomRow; row >= topRow; row--) {
      matrix[row][leftColumn] = num++;
    }
    leftColumn++;
  }

  return matrix;
}

const n = 3;
const matrix = generateMatrix(n);
console.log(matrix);
