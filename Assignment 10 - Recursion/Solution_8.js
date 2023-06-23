// 💡 **Question 8**

// Given a string, count total number of consonants in it. A consonant is an English alphabet character that is not vowel (a, e, i, o and u). Examples of constants are b, c, d, f, and g.

// **Examples :**

// Input : abc de
// Output : 3
// There are three consonants b, c and d.

// Input : geeksforgeeks portal
// Output : 12

// =============== Solution =============== //

function isConsonant(char) {
  const vowels = ["a", "e", "i", "o", "u"];
  return !vowels.includes(char.toLowerCase());
}

function countConsonants(str) {
  if (str.length === 0) {
    return 0;
  }

  const firstChar = str[0];
  const remainingChars = str.slice(1);
  const count = countConsonants(remainingChars);

  return isConsonant(firstChar) ? count + 1 : count;
}

// Example usage:
const str = "geeksforgeeks portal";
const consonantCount = countConsonants(str);
console.log(consonantCount);
