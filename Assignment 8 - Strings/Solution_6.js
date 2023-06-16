// 💡 **Question 6**

// Given two strings s and p, return *an array of all the start indices of* p*'s anagrams in* s. You may return the answer in **any order**.
// An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// **Example 1:**

// **Input:** s = "cbaebabacd", p = "abc"
// **Output:** [0,6]

// **Explanation:**
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

function findAnagrams(s, p) {
  const result = [];
  const pCount = new Array(26).fill(0); // Character count array for p
  const sCount = new Array(26).fill(0); // Character count array for current window

  // Calculate character counts for p
  for (let i = 0; i < p.length; i++) {
    pCount[p.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  let left = 0; // Left pointer of the sliding window
  let right = 0; // Right pointer of the sliding window
  let count = p.length; // Count of characters to match

  while (right < s.length) {
    // Expand the window by moving the right pointer
    const rightChar = s[right];
    if (pCount[rightChar.charCodeAt(0) - "a".charCodeAt(0)] > 0) {
      // Matched a character in p, decrement the count
      count--;
    }
    pCount[rightChar.charCodeAt(0) - "a".charCodeAt(0)]--;
    right++;

    if (count === 0) {
      // All characters matched, add left pointer to result
      result.push(left);
    }

    if (right - left === p.length) {
      // Window size matches the length of p, move the left pointer
      const leftChar = s[left];
      if (pCount[leftChar.charCodeAt(0) - "a".charCodeAt(0)] >= 0) {
        // Removed a character that was matched, increment the count
        count++;
      }
      pCount[leftChar.charCodeAt(0) - "a".charCodeAt(0)]++;
      left++;
    }
  }

  return result;
}

// Testing the function
const s = "cbaebabacd";
const p = "abc";
const result = findAnagrams(s, p);
console.log(result); // [0, 6]
