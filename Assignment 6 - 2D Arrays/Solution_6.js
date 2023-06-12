// 💡 **Question 6**

// An integer array original is transformed into a **doubled** array changed by appending **twice the value** of every element in original, and then randomly **shuffling** the resulting array.
// Given an array changed, return original *if* changed *is a **doubled** array. If* changed *is not a **doubled** array, return an empty array. The elements in* original *may be returned in **any** order*.

// **Example 1:**

// **Input:** changed = [1,3,4,2,6,8]
// **Output:** [1,3,4]
// **Explanation:** One possible original array could be [1,3,4]:

// - Twice the value of 1 is 1 * 2 = 2.
// - Twice the value of 3 is 3 * 2 = 6.
// - Twice the value of 4 is 4 * 2 = 8.

// Other original arrays could be [4,3,1] or [3,1,4].

// ============== solution ============== //

function findOriginalArray(changed) {
  if (changed.length % 2 !== 0) {
    return []; // If the length of the changed array is odd, it can't be a doubled array
  }

  const original = [];
  const values = new Set(changed); // Store unique values of changed array in a set

  for (const num of changed) {
    if (num % 2 === 0) {
      const half = num / 2;
      if (values.has(half)) {
        original.push(half);
        values.delete(half);
      } else {
        return []; // If the corresponding half value doesn't exist, it's not a doubled array
      }
    }
  }

  return original;
}

const changed = [1, 3, 4, 2, 6, 8];
const result = findOriginalArray(changed);
console.log(result);
