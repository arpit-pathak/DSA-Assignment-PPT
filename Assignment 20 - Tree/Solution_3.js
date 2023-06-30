// 💡 Question-3

// Given an array of size n. The problem is to check whether the given array can represent the level order traversal of a Binary Search Tree or not.

// Examples:

// Input1 : arr[] = {7, 4, 12, 3, 6, 8, 1, 5, 10}

// Output1 : Yes

// For the given arr[], the Binary Search Tree is:

//             7

//          /    \

//        4     12

//      /  \     /

//     3   6  8

//    /    /     \

//  1    5      10

// Input2 : arr[] = {11, 6, 13, 5, 12, 10}

// Output2 : No

// The given arr[] does not represent the level order traversal of a BST.

// ========== solution ========== //

const isLevelOrderBST = (arr) => {
  const n = arr.length;

  // Find the index of the last non-leaf node
  let i;
  for (i = 0; i <= Math.floor(n / 2) - 1; i++) {
    const leftChild = 2 * i + 1;
    const rightChild = 2 * i + 2;

    // Check left child
    if (leftChild < n && arr[leftChild] >= arr[i]) {
      return "No";
    }

    // Check right child
    if (rightChild < n && arr[rightChild] >= arr[i]) {
      return "No";
    }
  }

  // Check remaining elements
  for (; i < n; i++) {
    const leftChild = 2 * i + 1;
    const rightChild = 2 * i + 2;

    // Check left child
    if (leftChild < n && arr[leftChild] <= arr[i]) {
      return "No";
    }

    // Check right child
    if (rightChild < n && arr[rightChild] <= arr[i]) {
      return "No";
    }
  }

  return "Yes";
};

// Example usage:
const arr1 = [7, 4, 12, 3, 6, 8, 1, 5, 10];
console.log(isLevelOrderBST(arr1)); // Output: Yes

const arr2 = [11, 6, 13, 5, 12, 10];
console.log(isLevelOrderBST(arr2)); // Output: No
