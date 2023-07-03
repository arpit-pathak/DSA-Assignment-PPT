// 💡 **Question 5**

// You are given a string **S**, the task is to reverse the string using stack.

// **Example 1:**

// Input: S="GeeksforGeeks"
// Output: skeeGrofskeeG

// =============== solution =============== //

function reverseString(str) {
  const stack = [];

  // Push each character onto the stack
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  let reversedString = "";

  // Pop the characters and append them to the new string
  while (stack.length > 0) {
    reversedString += stack.pop();
  }

  return reversedString;
}

// Example usage:
const str = "GeeksforGeeks";
console.log(reverseString(str)); // Output: skeeGrofskeeG
