// 💡 **Question 4**

// Given a string calculate length of the string using recursion.

// **Examples:**

// Input : str = "abcd"
// Output :4

// Input : str = "GEEKSFORGEEKS"
// Output :13

// =============== Solution =============== //

function calculateLength(str) {
  // Base case: If the string is empty, its length is 0
  if (str === "") {
    return 0;
  }

  // Recursive case: Return 1 plus the length of the substring starting from index 1
  return 1 + calculateLength(str.substring(1));
}

// Example usage:
console.log(calculateLength("abcd")); // Output: 4
console.log(calculateLength("GEEKSFORGEEKS")); // Output: 13
