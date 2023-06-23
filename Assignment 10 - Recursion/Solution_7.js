// 💡 **Question 7**

// Given a string **str**, the task is to print all the permutations of **str**. A **permutation** is an arrangement of all or part of a set of objects, with regard to the order of the arrangement. For instance, the words ‘bat’ and ‘tab’ represents two distinct permutation (or arrangements) of a similar three letter word.

// **Examples:**

//  Input: str = “cd”
//  **Output:** cd dc
//  **Input:** str = “abb”
//  **Output:** abb abb bab bba bab bba

// =============== Solution =============== //

function swap(str, i, j) {
  const charArray = str.split("");
  const temp = charArray[i];
  charArray[i] = charArray[j];
  charArray[j] = temp;
  return charArray.join("");
}

function permute(str, left, right, result) {
  if (left === right) {
    result.push(str);
    return;
  }

  for (let i = left; i <= right; i++) {
    str = swap(str, left, i);
    permute(str, left + 1, right, result);
    str = swap(str, left, i); // backtrack
  }
}

function printPermutations(str) {
  const result = [];
  const n = str.length;
  permute(str, 0, n - 1, result);

  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
}

// Example usage:
const str = "abb";
printPermutations(str);
