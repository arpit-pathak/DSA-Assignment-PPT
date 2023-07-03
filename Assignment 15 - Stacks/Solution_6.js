// 💡 **Question 6**

// Given string **S** representing a postfix expression, the task is to evaluate the expression and find the final value. Operators will only include the basic arithmetic operators like ***, /, + and -**.

// **Example 1:**

// Input: S = "231*+9-"
// Output: -4
// Explanation:
// After solving the given expression,
// we have -4 as result.

// **Example 2:**

// Input: S = "123+*8-"
// Output: -3
// Explanation:
// After solving the given postfix
// expression, we have -3 as result.

// =============== solution =============== //

function evaluatePostfix(expression) {
  const stack = [];

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (!isNaN(char)) {
      // If the current element is a number, push it onto the stack
      stack.push(Number(char));
    } else {
      // If the current element is an operator, perform the operation
      const operand2 = stack.pop();
      const operand1 = stack.pop();

      let result;

      switch (char) {
        case "+":
          result = operand1 + operand2;
          break;
        case "-":
          result = operand1 - operand2;
          break;
        case "*":
          result = operand1 * operand2;
          break;
        case "/":
          result = operand1 / operand2;
          break;
      }

      // Push the result back onto the stack
      stack.push(result);
    }
  }

  // The final result is on the top of the stack
  return stack.pop();
}

// Example usage:
const expression1 = "231*+9-";
console.log(evaluatePostfix(expression1)); // Output: -4

const expression2 = "123+*8-";
console.log(evaluatePostfix(expression2)); // Output: -3
