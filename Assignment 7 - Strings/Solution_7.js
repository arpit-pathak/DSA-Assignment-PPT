// 💡 **Question 7**

// Given two strings s and t, return true *if they are equal when both are typed into empty text editors*. '#' means a backspace character.
// Note that after backspacing an empty text, the text will continue empty.

// **Example 1:**

// **Input:** s = "ab#c", t = "ad#c"
// **Output:** true

// **Explanation:**
// Both s and t become "ac".

// =================== solution =================== //

function processString(str) {
  const result = [];

  for (let char of str) {
    if (char === "#") {
      result.pop(); // Remove the last character
    } else {
      result.push(char); // Add the character to the result
    }
  }

  return result.join(""); // Convert the result array back to a string
}

function backspaceCompare(s, t) {
  const processedS = processString(s);
  const processedT = processString(t);

  return processedS === processedT;
}

const s = "ab#c";
const t = "ad#c";
const result = backspaceCompare(s, t);
console.log(result);
