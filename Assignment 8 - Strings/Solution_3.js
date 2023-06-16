// 💡 **Question 3**

// Given two strings word1 and word2, return *the minimum number of **steps** required to make* word1 *and* word2 *the same*.
// In one **step**, you can delete exactly one character in either string.

// **Example 1:**

// **Input:** word1 = "sea", word2 = "eat"
// **Output:** 2
// **Explanation:** You need one step to make "sea" to "ea" and another step to make "eat" to "ea".

function minDistance(word1, word2) {
  const m = word1.length;
  const n = word2.length;

  // Create a 2D array to store the minimum steps
  const dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }

  // Initialize the first row and column
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  // Fill in the remaining cells of the DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        // Characters are the same, no deletion required
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // Characters are different, consider deletion from either word
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

// Test function
console.log(minDistance("sea", "eat")); // 2
console.log(minDistance("intention", "execution")); // 5
console.log(minDistance("hello", "hello")); // 0
