// 💡 **Question 1**
// Given three integer arrays arr1, arr2 and arr3 **sorted** in **strictly increasing** order, return a sorted array of **only** the integers that appeared in **all** three arrays.

// **Example 1:**

// Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]

// Output: [1,5]

// **Explanation:** Only 1 and 5 appeared in the three arrays.

// solution -->

function arraysIntersection(arr1, arr2, arr3) {
  let set1 = new Set(arr1);

  for (let arr of [arr2, arr3]) {
    set1 = new Set([...set1].filter((element) => arr.includes(element)));
  }

  return Array.from(set1).sort((a, b) => a - b);
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 5, 7, 9];
let arr3 = [1, 3, 4, 5, 8];

let result = arraysIntersection(arr1, arr2, arr3);
console.log(result); // Output: [1, 5]
