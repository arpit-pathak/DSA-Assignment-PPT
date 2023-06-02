// Question 8
// You are given an integer array nums and an integer k.

// In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

// The score of nums is the difference between the maximum and minimum elements in nums.

// Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

// Example 1:
// Input: nums = [1], k = 0
// Output: 0

// Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.

// Algorithm:

// 1. Initialize the variables maxElement and minElement to the maximum and minimum values of nums, respectively.
// 2. Iterate through each element num in nums:
//      - Update maxElement to Math.min(maxElement, num + k).
//      - Update minElement to Math.max(minElement, num - k).
// 3. Calculate and return the difference between maxElement and minElement.

function minimumScore(nums, k) {
  let maxElement = Math.max(...nums);
  let minElement = Math.min(...nums);

  for (let num of nums) {
    maxElement = Math.min(maxElement, num + k);
    minElement = Math.max(minElement, num - k);
  }

  return maxElement - minElement;
}

// Example usage
const nums = [1];
const k = 0;
const result = minimumScore(nums, k);
console.log(result);
