// 💡 **Q2.** Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// - Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// - Return k.

// **Example :**
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_*,_*]

// **Explanation:** Your function should return k = 2, with the first two elements of nums being 2. It does not matter what you leave beyond the returned k (hence they are underscores)[

// Algorithm:

//1. Initialize a pointer k to 0, which will represent the index of the next non-val element.
//2. Iterate through the array using a for loop.
//3. For each element nums[i], check if it is not equal to val.
//       - If it is not equal to val, assign nums[i] to nums[k] and increment k by 1.
//4. After iterating through the entire array, the first k elements of nums will contain the elements not equal to val.
//5. Return the value of k.

function removeElement(nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

// Example usage
const nums = [3, 2, 2, 3];
const val = 3;
const result = removeElement(nums, val);
console.log(`k = ${result}`);
console.log(nums.slice(0, result));
