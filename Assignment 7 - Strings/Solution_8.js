// 💡 **Question 8**

// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

// **Example 1:**

// ![Screenshot 2023-05-29 010117.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/012b0a97-4e4b-49b6-bc95-0531fc712978/Screenshot_2023-05-29_010117.png)
// **Input:** coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// **Output:** true

// =================== solution =================== //

function checkStraightLine(coordinates) {
  const n = coordinates.length;

  // Calculate the slope between the first two points
  const x1 = coordinates[0][0];
  const y1 = coordinates[0][1];
  const x2 = coordinates[1][0];
  const y2 = coordinates[1][1];
  const initialSlope = (y2 - y1) / (x2 - x1);

  // Check the slope between each consecutive pair of points
  for (let i = 2; i < n; i++) {
    const xi = coordinates[i][0];
    const yi = coordinates[i][1];
    const slope = (yi - y1) / (xi - x1);

    // If the slope is not equal to the initial slope, the points do not form a straight line
    if (slope !== initialSlope) {
      return false;
    }
  }

  return true;
}

const coordinates = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
];
const result = checkStraightLine(coordinates);
console.log(result);
