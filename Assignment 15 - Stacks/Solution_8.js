// 💡 **Question 8**

// Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.

// Example 1:

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9

// =============== solution =============== //

function trapRainwater(height) {
  let totalWater = 0;
  const stack = [];

  for (let i = 0; i < height.length; i++) {
    while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop();

      if (stack.length === 0) {
        break;
      }

      const distance = i - stack[stack.length - 1] - 1;
      const boundedHeight =
        Math.min(height[i], height[stack[stack.length - 1]]) - height[top];
      totalWater += distance * boundedHeight;
    }

    stack.push(i);
  }

  return totalWater;
}

// Example usage:
const elevationMap1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trapRainwater(elevationMap1)); // Output: 6

const elevationMap2 = [4, 2, 0, 3, 2, 5];
console.log(trapRainwater(elevationMap2)); // Output: 9
