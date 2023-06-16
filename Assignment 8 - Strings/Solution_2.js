// 💡 **Question 2**

// Given a string s containing only three types of characters: '(', ')' and '*', return true *if* s *is **valid***.

// The following rules define a **valid** string:

// - Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// - Any right parenthesis ')' must have a corresponding left parenthesis '('.
// - Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// - '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

// **Example 1:**

// **Input:** s = "()"
// **Output:**
// true

function isValidString(s) {
  let openCount = 0; // Count of open parentheses '(' encountered
  let starCount = 0; // Count of '*' encountered

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      openCount++;
    } else if (s[i] === "*") {
      starCount++;
    } else {
      // If we encounter a closing parenthesis ')'
      if (openCount > 0) {
        openCount--; // Match with a corresponding opening parenthesis
      } else if (starCount > 0) {
        starCount--; // Match with a '*' as an opening parenthesis
      } else {
        return false; // No matching opening parenthesis or '*' found
      }
    }
  }

  // Check if all remaining opening parentheses '(' can be matched with '*'
  while (openCount > 0 && starCount > 0) {
    openCount--;
    starCount--;
  }

  return openCount === 0;
}

console.log(isValidString("()")); // true
// console.log(isValidString("(*)")); // true
// console.log(isValidString("(*))")); // true
// console.log(isValidString("(((*)")); // true
// console.log(isValidString(")")); // false
// console.log(isValidString("((*")); // false
// console.log(isValidString("((*)*")); // false
