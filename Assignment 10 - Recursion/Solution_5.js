// 💡 **Question 5**

// We are given a string S, we need to find count of all contiguous substrings starting and ending with same character.

// **Examples :**

// Input  : S = "abcab"
// Output : 7
// There are 15 substrings of "abcab"
// a, ab, abc, abca, abcab, b, bc, bca
// bcab, c, ca, cab, a, ab, b
// Out of the above substrings, there
// are 7 substrings : a, abca, b, bcab,
// c, a and b.

// Input  : S = "aba"
// Output : 4
// The substrings are a, b, a and aba

// =============== Solution =============== //

function countSubstrings(s) {
  let count = 0;

  // Recursive helper function
  function countHelper(start, end) {
    // Base case: If start and end indices cross each other or go out of bounds, return
    if (start > end || start < 0 || end >= s.length) {
      return;
    }

    // If the start and end characters are the same, increment the count
    if (s[start] === s[end]) {
      count++;
    }

    // Recurse by expanding the window inward
    countHelper(start, end - 1);
    countHelper(start + 1, end);
  }

  // Call the helper function with initial indices
  countHelper(0, s.length - 1);

  return count;
}

// Example usage:
console.log(countSubstrings("abcab")); // Output: 7
console.log(countSubstrings("aba")); // Output: 4
