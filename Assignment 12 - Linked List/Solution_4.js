// 💡 **Question 4**

// Given a singly linked list of characters, write a function that returns true if the given list is a palindrome, else false.

// !https://media.geeksforgeeks.org/wp-content/uploads/20220816144425/LLdrawio.png

// **Examples:**

//  Input: R->A->D->A->R->NULL

//  **Output:** Yes

//  **Input:** C->O->D->E->NULL

//  **Output:** No

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  isPalindrome() {
    if (this.head === null) {
      return true; // Empty list is considered a palindrome
    }

    // Store characters in an array
    const chars = [];
    let current = this.head;
    while (current !== null) {
      chars.push(current.data);
      current = current.next;
    }

    // Compare characters from both ends of the array
    let start = 0;
    let end = chars.length - 1;
    while (start < end) {
      if (chars[start] !== chars[end]) {
        return false; // Characters are not equal, not a palindrome
      }
      start++;
      end--;
    }

    return true; // All characters are equal, palindrome
  }
}

// Example usage:
const linkedList1 = new LinkedList();
linkedList1.insert("R");
linkedList1.insert("A");
linkedList1.insert("D");
linkedList1.insert("A");
linkedList1.insert("R");

console.log("Is Palindrome:", linkedList1.isPalindrome());

const linkedList2 = new LinkedList();
linkedList2.insert("C");
linkedList2.insert("O");
linkedList2.insert("D");
linkedList2.insert("E");

console.log("Is Palindrome:", linkedList2.isPalindrome());
