// Question 5
// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:
// Input: nums = [1,2,3]
// Output: 6

// Solution -->

function maximumProduct(nums) {
  nums.sort((a, b) => a - b);

  const length = nums.length;
  const product1 = nums[length - 1] * nums[length - 2] * nums[length - 3];
  const product2 = nums[0] * nums[1] * nums[length - 1];

  return Math.max(product1, product2);
}

// Example usage
const nums = [1, 2, 3];
const result = maximumProduct(nums);
console.log(result);
