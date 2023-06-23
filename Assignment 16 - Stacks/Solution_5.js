// 💡 **Question 5**

// Given a number , write a program to reverse this number using stack.

// **Examples:**

// Input : 365
// Output : 563

// Input : 6899
// Output : 9986

function reverseNumber(number) {
  const numberString = number.toString();
  const stack = [];
  let reversedString = "";

  for (let i = 0; i < numberString.length; i++) {
    stack.push(numberString[i]);
  }

  while (stack.length > 0) {
    reversedString += stack.pop();
  }

  const reversedNumber = parseInt(reversedString);

  return reversedNumber;
}

// Example usage:
const number1 = 365;
console.log(reverseNumber(number1)); // 563

const number2 = 6899;
console.log(reverseNumber(number2)); // 9986
