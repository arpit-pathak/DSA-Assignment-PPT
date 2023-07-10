// 💡 4. **Group Anagram**

// Given an array of strings `strs`, group **the anagrams** together. You can return the answer in **any order**.

// An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// **Example 1:**

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// **Example 2:**

// Input: strs = [""]
// Output: [[""]]

// **Example 3:**

// Input: strs = ["a"]
// Output: [["a"]]

// **Constraints:**

// - `1 <= strs.length <= 10000`
// - `0 <= strs[i].length <= 100`
// - `strs[i]` consists of lowercase English letters.

// ========== Solution ========== //

function groupAnagrams(strs) {
  const anagramGroups = {};

  for (let str of strs) {
    const sortedStr = str.split("").sort().join("");

    if (!anagramGroups[sortedStr]) {
      anagramGroups[sortedStr] = [str];
    } else {
      anagramGroups[sortedStr].push(str);
    }
  }

  return Object.values(anagramGroups);
}

// Example 1
const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result1 = groupAnagrams(strs1);
console.log(result1);

// Example 2
const strs2 = [""];
const result2 = groupAnagrams(strs2);
console.log(result2);

// Example 3
const strs3 = ["a"];
const result3 = groupAnagrams(strs3);
console.log(result3);
