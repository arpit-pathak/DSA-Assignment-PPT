// 💡 3. **Majority Element**

// Given an array `nums` of size `n`, return *the majority element*.

// The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

// **Example 1:**

// Input: nums = [3,2,3]
// Output: 3

// **Example 2:**

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// **Constraints:**

// - `n == nums.length`
// - `1 <= n <= 5 * 10^4`
// - `-10^9 <= nums[i] <= 10^9`

// ========== Solution ========== //

function majorityElement(nums) {
  let count = 0;
  let majorityElement = null;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      majorityElement = nums[i];
      count = 1;
    } else if (nums[i] === majorityElement) {
      count++;
    } else {
      count--;
    }
  }

  return majorityElement;
}

// Example 1
const nums1 = [3, 2, 3];
const result1 = majorityElement(nums1);
console.log(`Majority Element: ${result1}`);

// Example 2
const nums2 = [2, 2, 1, 1, 1, 2, 2];
const result2 = majorityElement(nums2);
console.log(`Majority Element: ${result2}`);
