// 💡 **Question 1**

// Given a string `s`, *find the first non-repeating character in it and return its index*. If it does not exist, return `-1`.

// **Example 1:**

// Input: s = "leetcode"
// Output: 0

// **Example 2:**

// Input: s = "loveleetcode"
// Output: 2

// **Example 3:**

// Input: s = "aabb"
// Output: -1

function firstNonRepeatingChar(s) {
  const queue = [];
  const frequencyMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    queue.push(char);
  }

  while (queue.length > 0) {
    const char = queue.shift();
    if (frequencyMap.get(char) === 1) {
      return s.indexOf(char);
    }
  }

  return -1;
}

// Example usage:
const s = "loveleetcode";
const result = firstNonRepeatingChar(s);
console.log(result);
