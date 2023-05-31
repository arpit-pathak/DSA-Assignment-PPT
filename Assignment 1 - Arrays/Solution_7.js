// 💡 **Q7.** Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

// Note that you must do this in-place without making a copy of the array.

// **Example 1:**
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Solution -->

function moveZeroes(nums) {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[j], nums[i]] = [nums[i], nums[j]];
      j++;
    }
  }

  for (let i = j; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

// Example usage
const nums = [0, 1, 0, 3, 12];
const result = moveZeroes(nums);
console.log(result);
