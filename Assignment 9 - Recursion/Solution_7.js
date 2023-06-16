// 💡 **Question 7**

// Given a string S, the task is to write a program to print all permutations of a given string.

// **Example 1:**

// ***Input:***
// *S = “ABC”*
// ***Output:***
// *“ABC”, “ACB”, “BAC”, “BCA”, “CBA”, “CAB”*

// **Example 2:**

// ***Input:***
// *S = “XY”*
// ***Output:***
// *“XY”, “YX”*

// ========== solution ========== //

function swap(str, i, j) {
  const temp = str[i];
  str[i] = str[j];
  str[j] = temp;
}

function permute(str, l, r, result) {
  if (l === r) {
    result.push(str.join(""));
  } else {
    for (let i = l; i <= r; i++) {
      swap(str, l, i);
      permute(str, l + 1, r, result);
      swap(str, l, i); // backtrack to restore the original order
    }
  }
}

// Function to generate all permutations of a string
function generatePermutations(S) {
  const result = [];
  const str = S.split("");
  permute(str, 0, str.length - 1, result);
  return result;
}

// Testing the function
console.log(generatePermutations("ABC")); // ["ABC", "ACB", "BAC", "BCA", "CBA", "CAB"]
console.log(generatePermutations("XY")); // ["XY", "YX"]
