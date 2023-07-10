// 💡 7. **Sliding Window Maximum**

// You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position.

// Return *the max sliding window*.

// **Example 1:**

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation:
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6 7         3
//  1 [3  -1  -3] 5  3  6 7         3
//  1  3 [-1  -3  5] 3  6 7         5
//  1  3  -1 [-3  5  3] 6 7         5
//  1  3  -1  -3 [5  3  6]7         6
//  1  3  -1  -3  5 [3  6  7]       7

// **Example 2:**

// Input: nums = [1], k = 1
// Output: [1]

// **Constraints:**

// - `1 <= nums.length <= 100000`
// - -`10000 <= nums[i] <= 10000`
// - `1 <= k <= nums.length`

// ========== Solution ========== //

function maxSlidingWindow(nums, k) {
  const result = [];
  const deque = [];

  for (let i = 0; i < nums.length; i++) {
    // Remove indices outside the window
    while (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }

    // Remove indices of smaller elements
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    // Add maximum element to the result
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

// Example 1
const nums1 = [1, 3, -1, -3, 5, 3, 6, 7];
const k1 = 3;
const result1 = maxSlidingWindow(nums1, k1);
console.log(result1);

// Example 2
const nums2 = [1];
const k2 = 1;
const result2 = maxSlidingWindow(nums2, k2);
console.log(result2);
