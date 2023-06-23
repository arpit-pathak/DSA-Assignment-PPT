// 💡 **Question 4**

// Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive.

// There is only **one repeated number** in `nums`, return *this repeated number*.

// You must solve the problem **without** modifying the array `nums` and uses only constant extra space.

// **Example 1:**
// Input: nums = [1,3,4,2,2]
// Output: 2

// **Example 2:**
// Input: nums = [3,1,3,4,2]
// Output: 3

function findDuplicate(nums) {
  let left = 1;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    let count = 0;

    // Count the number of elements less than or equal to mid
    for (let num of nums) {
      if (num <= mid) {
        count++;
      }
    }

    // If the count is greater than mid, the repeated number is in the left half
    if (count > mid) {
      right = mid;
    } else {
      // Otherwise, the repeated number is in the right half
      left = mid + 1;
    }
  }

  return left;
}

// Example usage:
const nums = [1, 3, 4, 2, 2];
const repeatedNum = findDuplicate(nums);
console.log(repeatedNum);
