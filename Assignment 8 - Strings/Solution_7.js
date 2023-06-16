// 💡 **Question 7**

// Given an encoded string, return its decoded string.
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].
// The test cases are generated so that the length of the output will never exceed 105.

// **Example 1:**

// **Input:** s = "3[a]2[bc]"
// **Output:** "aaabcbc"

function decodeString(s) {
  const stack = [];
  let currentNumber = 0;
  let currentString = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "[") {
      stack.push(currentString);
      stack.push(currentNumber);
      currentString = "";
      currentNumber = 0;
    } else if (char === "]") {
      const number = stack.pop();
      const previousString = stack.pop();
      currentString = previousString + currentString.repeat(number);
    } else if (isDigit(char)) {
      currentNumber = currentNumber * 10 + parseInt(char);
    } else {
      currentString += char;
    }
  }

  return currentString;
}

function isDigit(char) {
  return /[0-9]/.test(char);
}

const s = "3[a]2[bc]";
const decodedString = decodeString(s);
console.log(decodedString); // "aaabcbc"
