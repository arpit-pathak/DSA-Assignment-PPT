// 💡 2. **Longest Substring Without Repeating Characters**

// Given a string `s`, find the length of the **longest substring** without repeating characters.

// **Example 1:**

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// **Example 2:**

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// **Example 3:**

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// **Constraints:**

// - `0 <= s.length <= 50000`
// - `s` consists of English letters, digits, symbols and spaces.

// ========== Solution ========== //

function lengthOfLongestSubstring(s) {
  const charSet = new Set();
  let maxLength = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    const currentChar = s.charAt(right);
    if (!charSet.has(currentChar)) {
      charSet.add(currentChar);
      maxLength = Math.max(maxLength, right - left + 1);
      right++;
    } else {
      charSet.delete(s.charAt(left));
      left++;
    }
  }

  return maxLength;
}

// Example 1
const input1 = "abcabcbb";
const result1 = lengthOfLongestSubstring(input1);
console.log(`Input: ${input1}`);
console.log(`Length of Longest Substring: ${result1}`);

// Example 2
const input2 = "bbbbb";
const result2 = lengthOfLongestSubstring(input2);
console.log(`Input: ${input2}`);
console.log(`Length of Longest Substring: ${result2}`);

// Example 3
const input3 = "pwwkew";
const result3 = lengthOfLongestSubstring(input3);
console.log(`Input: ${input3}`);
console.log(`Length of Longest Substring: ${result3}`);
