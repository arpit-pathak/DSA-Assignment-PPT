// 💡 **Question 4**

// Given a binary array nums, return *the maximum length of a contiguous subarray with an equal number of* 0 *and* 1.

// **Example 1:**

// **Input:** nums = [0,1]

// **Output:** 2

// **Explanation:**

// [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

// ============== solution ============== //

function findMaxLength(nums) {
  const map = new Map();
  map.set(0, -1); // Initialize the map with count 0 at index -1
  let maxLength = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    // Increment count for 1, decrement count for 0
    count += nums[i] === 1 ? 1 : -1;

    if (map.has(count)) {
      // If count already exists in the map, calculate the length of the subarray
      maxLength = Math.max(maxLength, i - map.get(count));
    } else {
      // If count does not exist in the map, store the index of the first occurrence
      map.set(count, i);
    }
  }

  return maxLength;
}

const nums = [0, 1];
const result = findMaxLength(nums);
console.log(result);
