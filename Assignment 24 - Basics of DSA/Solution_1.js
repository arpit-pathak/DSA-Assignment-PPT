// 💡 1. **Roman to Integer**

// Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

// SymbolValue
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, `2` is written as `II` in Roman numeral, just two ones added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

// - `I` can be placed before `V` (5) and `X` (10) to make 4 and 9.
// - `X` can be placed before `L` (50) and `C` (100) to make 40 and 90.
// - `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.

// **Example 1:**

// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// **Example 2:**

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// **Constraints:**

// - `1 <= s.length <= 15`
// - `s` contains only the characters `('I', 'V', 'X', 'L', 'C', 'D', 'M')`.
// - It is **guaranteed** that `s` is a valid roman numeral in the range `[1, 3999]`.
// ****

// ========== Solution ========== //

function romanToInt(s) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let prevValue = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const currentValue = romanValues[s[i]];

    if (currentValue >= prevValue) {
      result += currentValue;
    } else {
      result -= currentValue;
    }

    prevValue = currentValue;
  }

  return result;
}

// Example 1
const romanNumeral1 = "III";
const result1 = romanToInt(romanNumeral1);
console.log(`Roman Numeral: ${romanNumeral1}`);
console.log(`Integer Value: ${result1}`);
console.log();

// Example 2
const romanNumeral2 = "LVIII";
const result2 = romanToInt(romanNumeral2);
console.log(`Roman Numeral: ${romanNumeral2}`);
console.log(`Integer Value: ${result2}`);
console.log();

// Example 3
const romanNumeral3 = "MCMXCIV";
const result3 = romanToInt(romanNumeral3);
console.log(`Roman Numeral: ${romanNumeral3}`);
console.log(`Integer Value: ${result3}`);
console.log();
