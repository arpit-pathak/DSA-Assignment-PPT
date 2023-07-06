// 💡 Question-4:

// Given a Binary Tree, The task is to print the **bottom view** from left to right. A node **x** is there in output if x is the bottommost node at its horizontal distance. The horizontal distance of the left child of a node x is equal to a horizontal distance of x minus 1, and that of a right child is the horizontal distance of x plus 1.

// **Examples:**

// **Input:**

//              20

//            /     \

//         8         22

//     /      \         \

// 5         3        25

//         /    \

//    10       14

// **Output:** 5, 10, 3, 14, 25.

// **Input:**

//              20

//            /     \

//         8         22

//     /      \      /   \

//  5         3    4     25

//          /    \

//      10       14

// **Output:**

// 5 10 4 14 25.

// **Explanation:**

// If there are multiple bottom-most nodes for a horizontal distance from the root, then print the later one in the level traversal.

// **3 and 4** are both the bottom-most nodes at a horizontal distance of 0, we need to print 4.
