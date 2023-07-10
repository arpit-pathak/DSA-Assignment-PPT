// 💡 6. **Top K Frequent Words**

// Given an array of strings `words` and an integer `k`, return *the* `k` *most frequent strings*.

// Return the answer **sorted** by **the frequency** from highest to lowest. Sort the words with the same frequency by their **lexicographical order**.

// **Example 1:**

// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.

// **Example 2:**

// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

// **Constraints:**

// - `1 <= words.length <= 500`
// - `1 <= words[i].length <= 10`
// - `words[i]` consists of lowercase English letters.
// - `k` is in the range `[1, The number of **unique** words[i]]`

// ========== Solution ========== //

function topKFrequent(words, k) {
  const frequencyMap = new Map();

  // Count the frequency of each word
  for (let word of words) {
    frequencyMap.set(word, (frequencyMap.get(word) || 0) + 1);
  }

  // Sort the words based on their frequencies and lexicographical order
  const sortedWords = Array.from(frequencyMap.keys()).sort((a, b) => {
    const freqCompare = frequencyMap.get(b) - frequencyMap.get(a);
    if (freqCompare === 0) {
      return a.localeCompare(b);
    }
    return freqCompare;
  });

  // Return the k most frequent words
  return sortedWords.slice(0, k);
}

// Example 1
const words1 = ["i", "love", "leetcode", "i", "love", "coding"];
const k1 = 2;
const result1 = topKFrequent(words1, k1);
console.log(result1);

// Example 2
const words2 = [
  "the",
  "day",
  "is",
  "sunny",
  "the",
  "the",
  "the",
  "sunny",
  "is",
  "is",
];
const k2 = 4;
const result2 = topKFrequent(words2, k2);
console.log(result2);
