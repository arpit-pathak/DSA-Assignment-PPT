// Question 7
// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
// monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

// Example 1:
// Input: nums = [1,2,2,3]
// Output: true

// Algorithm:

// 1. Initialize two flags, isIncreasing and isDecreasing, as true.
// 2. Iterate through the array from index 1 to the end:
//      - If the current element is less than the previous element, set isIncreasing to false.
//      - If the current element is greater than the previous element, set isDecreasing to false.
// 3. Return the logical OR (isIncreasing || isDecreasing) of the two flags.

function isMonotonic(nums) {
  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      isIncreasing = false;
    }

    if (nums[i] > nums[i - 1]) {
      isDecreasing = false;
    }
  }

  return isIncreasing || isDecreasing;
}

// Example usage
const nums = [1, 2, 2, 3];
const result = isMonotonic(nums);
console.log(result);
