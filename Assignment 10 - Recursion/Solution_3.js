// 💡 **Question 3**

// ****Given a set represented as a string, write a recursive code to print all subsets of it. The subsets can be printed in any order.

// **Example 1:**
// Input :  set = “abc”
// Output : { “”, “a”, “b”, “c”, “ab”, “ac”, “bc”, “abc”}

// **Example 2:**
// Input : set = “abcd”
// Output : { “”, “a” ,”ab” ,”abc” ,”abcd”, “abd” ,”ac” ,”acd”, “ad” ,”b”, “bc” ,”bcd” ,”bd” ,”c” ,”cd” ,”d” }

// =============== Solution =============== //

function generateSubsets(set) {
  const subsets = [];
  backtrack(set, 0, "", subsets);
  return subsets;
}

function backtrack(set, index, currentSubset, subsets) {
  // Base case: If we have processed all elements of the set
  if (index === set.length) {
    subsets.push(currentSubset);
    return;
  }

  // Recursive case 1: Include the current element in the subset
  backtrack(set, index + 1, currentSubset + set[index], subsets);

  // Recursive case 2: Exclude the current element from the subset
  backtrack(set, index + 1, currentSubset, subsets);
}

// Example usage:
console.log(generateSubsets("abc")); // Output: ["", "c", "b", "bc", "a", "ac", "ab", "abc"]
console.log(generateSubsets("abcd")); // Output: ["", "d", "c", "cd", "b", "bd", "bc", "bcd", "a", "ad", "ac", "acd", "ab", "abd", "abc", "abcd"]
