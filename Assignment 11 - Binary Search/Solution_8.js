// 💡 **Question 8**

// Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must appear as many times as it shows in both arrays and you may return the result in **any order**.

// **Example 1:**
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// **Example 2:**
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

function intersect(nums1, nums2) {
  const frequencyMap = new Map();
  const result = [];

  // Count the frequency of elements in nums1
  for (const num of nums1) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // Iterate through nums2 and find the intersection
  for (const num of nums2) {
    if (frequencyMap.has(num) && frequencyMap.get(num) > 0) {
      result.push(num);
      frequencyMap.set(num, frequencyMap.get(num) - 1);
    }
  }

  return result;
}

// Example usage:
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
const result = intersect(nums1, nums2);
console.log(result);
