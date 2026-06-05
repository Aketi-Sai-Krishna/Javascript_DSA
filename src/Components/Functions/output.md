# JavaScript Functions — Questions & Answers

## Part 1 (Questions 1–20)

---

## 1. What is a function in JavaScript?

A function is a reusable block of code designed to perform a specific task.

Example:

```js
function greet() {
  console.log("Hello");
}
```

---

## 2. Why do we use functions?

Functions help us:

* Reuse code
* Reduce duplication
* Improve readability
* Improve maintainability
* Organize large applications

---

## 3. Write a function that prints "Hello World".

```js
function greet() {
  console.log("Hello World");
}

greet();
```

---

## 4. How do you call a function?

A function is called by writing its name followed by parentheses.

Example:

```js
function greet() {
  console.log("Hello");
}

greet();
```

---

## 5. What is the difference between creating a function and calling a function?

### Creating (Defining)

```js
function greet() {
  console.log("Hello");
}
```

### Calling (Executing)

```js
greet();
```

Definition creates the function.
Calling executes the function.

---

## 6. Create a function named `greet`.

```js
function greet() {
  console.log("Welcome");
}
```

---

## 7. Create a function that prints your name.

```js
function printName() {
  console.log("Sai Krishna");
}

printName();
```

---

## 8. Create a function that prints your age.

```js
function printAge() {
  console.log(25);
}

printAge();
```

---

## 9. Create a function that prints your city.

```js
function printCity() {
  console.log("Hyderabad");
}

printCity();
```

---

## 10. Can a function run without being called?

No.

A function executes only when it is called.

Example:

```js
function greet() {
  console.log("Hello");
}
```

Nothing happens until:

```js
greet();
```

---

# Parameters & Arguments

---

## 11. What is a parameter?

A parameter is a variable declared in the function definition that receives data.

Example:

```js
function greet(name) {
  console.log(name);
}
```

`name` is a parameter.

---

## 12. What is an argument?

An argument is the actual value passed to a function.

Example:

```js
greet("Sai");
```

`"Sai"` is an argument.

---

## 13. Difference between parameter and argument?

| Parameter                       | Argument            |
| ------------------------------- | ------------------- |
| Variable in function definition | Actual value passed |
| Placeholder                     | Real data           |

Example:

```js
function greet(name) {
  console.log(name);
}

greet("Sai");
```

Parameter:

```text
name
```

Argument:

```text
"Sai"
```

---

## 14. Create a function that accepts a name and prints it.

```js
function printName(name) {
  console.log(name);
}

printName("Sai");
```

---

## 15. Create a function that accepts age and prints it.

```js
function printAge(age) {
  console.log(age);
}

printAge(25);
```

---

## 16. Create a function that accepts two numbers and prints their sum.

```js
function add(a, b) {
  console.log(a + b);
}

add(10, 20);
```

Output:

```text
30
```

---

## 17. Create a function that accepts two numbers and prints their product.

```js
function multiply(a, b) {
  console.log(a * b);
}

multiply(5, 4);
```

Output:

```text
20
```

---

## 18. Create a function that accepts three numbers and prints their average.

```js
function average(a, b, c) {
  console.log((a + b + c) / 3);
}

average(10, 20, 30);
```

Output:

```text
20
```

---

## 19. What happens if fewer arguments are passed than parameters?

Missing parameters receive:

```js
undefined
```

Example:

```js
function greet(name, age) {
  console.log(name);
  console.log(age);
}

greet("Sai");
```

Output:

```text
Sai
undefined
```

---

## 20. What happens if more arguments are passed than parameters?

Extra arguments are ignored unless explicitly accessed.

Example:

```js
function greet(name) {
  console.log(name);
}

greet("Sai", 25, "India");
```

Output:

```text
Sai
```

The additional arguments (`25`, `"India"`) are not used by the function.

---

Next: **Part 2 (Questions 21–40)** → Return Values, Calculator Functions, and Area Formula Functions.

---

# JavaScript Functions — Questions & Answers

## Part 2 (Questions 21–40)

---

# Return Values

---

## 21. What is the `return` keyword?

The `return` keyword sends a value back from a function.

Example:

```js
function add(a, b) {
  return a + b;
}
```

---

## 22. Why is `return` important?

`return` allows a function to:

* Send data back
* Store results in variables
* Reuse results
* Use results in other calculations

Example:

```js
function add(a, b) {
  return a + b;
}

let result = add(10, 20);
console.log(result);
```

---

## 23. Create a function that returns your name.

```js
function getName() {
  return "Sai Krishna";
}

console.log(getName());
```

Output:

```text
Sai Krishna
```

---

## 24. Create a function that returns the sum of two numbers.

```js
function add(a, b) {
  return a + b;
}

console.log(add(10, 20));
```

Output:

```text
30
```

---

## 25. Create a function that returns the square of a number.

```js
function square(num) {
  return num * num;
}

console.log(square(5));
```

Output:

```text
25
```

---

## 26. Create a function that returns the cube of a number.

```js
function cube(num) {
  return num * num * num;
}

console.log(cube(3));
```

Output:

```text
27
```

---

## 27. Create a function that returns whether a number is even.

```js
function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(8));
```

Output:

```text
true
```

---

## 28. Create a function that returns whether a number is odd.

```js
function isOdd(num) {
  return num % 2 !== 0;
}

console.log(isOdd(7));
```

Output:

```text
true
```

---

## 29. What happens if a function has no return statement?

JavaScript automatically returns:

```js
undefined
```

Example:

```js
function greet() {}

console.log(greet());
```

Output:

```text
undefined
```

---

## 30. Predict output.

```js
function test() {}

console.log(test());
```

Output:

```text
undefined
```

---

# Calculator Functions

---

## 31. Create an addition function.

```js
function add(a, b) {
  return a + b;
}
```

---

## 32. Create a subtraction function.

```js
function subtract(a, b) {
  return a - b;
}
```

---

## 33. Create a multiplication function.

```js
function multiply(a, b) {
  return a * b;
}
```

---

## 34. Create a division function.

```js
function divide(a, b) {
  return a / b;
}
```

---

## 35. Create a modulus function.

```js
function modulus(a, b) {
  return a % b;
}
```

---

# Area Formula Functions

---

## 36. Create a function to calculate the area of a rectangle.

Formula:

```text
length × width
```

```js
function areaRectangle(length, width) {
  return length * width;
}
```

---

## 37. Create a function to calculate the area of a square.

Formula:

```text
side × side
```

```js
function areaSquare(side) {
  return side * side;
}
```

---

## 38. Create a function to calculate the area of a triangle.

Formula:

```text
0.5 × base × height
```

```js
function areaTriangle(base, height) {
  return 0.5 * base * height;
}
```

---

## 39. Create a function to calculate the area of a circle.

Formula:

```text
π × r²
```

```js
function areaCircle(radius) {
  return Math.PI * radius * radius;
}
```

---

## 40. Create a function that converts Celsius to Fahrenheit.

Formula:

```text
(C × 9/5) + 32
```

```js
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
```

Example:

```js
console.log(celsiusToFahrenheit(30));
```

Output:

```text
86
```

---

Next: **Part 3 (Questions 41–60)** → Function Execution, Scope, Local Scope, Global Scope, and Function Behavior.

---


# JavaScript Functions — Questions & Answers

## Part 3 (Questions 41–60)

---

# Function Execution & Scope

---

## 41. What happens internally when a function is called?

When a function is called:

1. JavaScript creates a new Function Execution Context.
2. Parameters receive argument values.
3. Function code executes.
4. A return value is generated (if present).
5. The Function Execution Context is removed after completion.

---

## 42. What happens internally when a function returns a value?

The function:

1. Calculates the return expression.
2. Sends the result back to the caller.
3. Immediately stops executing remaining code.
4. Removes the Function Execution Context.

Example:

```js id="3e7x1m"
function add(a, b) {
  return a + b;
}

let result = add(10, 20);
```

Result:

```text id="vykgvz"
30
```

---

## 43. Can a function call another function?

Yes.

Example:

```js id="s01g1x"
function second() {
  console.log("Second Function");
}

function first() {
  second();
}

first();
```

Output:

```text id="xyawsm"
Second Function
```

---

## 44. What is function reusability?

Function reusability means writing logic once and using it multiple times.

Example:

```js id="n0zpmr"
function add(a, b) {
  return a + b;
}

add(10, 20);
add(5, 15);
add(100, 200);
```

---

## 45. Why are functions important in large applications?

Functions:

* Reduce duplicate code
* Improve maintainability
* Improve readability
* Support modular development
* Simplify debugging

---

## 46. Can multiple functions have the same code?

Yes.

Example:

```js id="pqknxv"
function add1(a, b) {
  return a + b;
}

function add2(a, b) {
  return a + b;
}
```

However, this is usually not recommended because it creates duplication.

---

## 47. What problem do functions solve?

Functions solve:

```text id="ok7m1h"
Code Duplication
```

Instead of repeating logic multiple times, we place it inside a function.

---

## 48. What is modular programming?

Modular programming is the practice of dividing large applications into smaller reusable functions or modules.

Example:

```text id="s9y2pf"
Login Function
Search Function
Payment Function
Profile Function
```

---

## 49. Why do companies use functions heavily?

Functions make software:

* Easier to maintain
* Easier to test
* Easier to scale
* Easier for teams to collaborate on

---

## 50. Explain:

```text id="px2xgq"
Input → Process → Output
```

using a function example.

Example:

```js id="2mnn3t"
function square(num) {
  return num * num;
}
```

Flow:

```text id="tgjf79"
Input  → 5
Process → 5 × 5
Output → 25
```

---

# Function Scope

---

## 51. Can a function access global variables?

Yes.

Example:

```js id="vqkw2r"
let name = "Sai";

function greet() {
  console.log(name);
}

greet();
```

Output:

```text id="8vzwow"
Sai
```

---

## 52. Can global code access variables declared inside a function?

No.

Example:

```js id="0djnn0"
function test() {
  let age = 25;
}

console.log(age);
```

Output:

```text id="wbg39v"
ReferenceError
```

---

## 53. Predict output.

```js id="c57g1w"
let name = "Sai";

function greet() {
  console.log(name);
}

greet();
```

Output:

```text id="j7t4hh"
Sai
```

Because functions can access global variables.

---

## 54. Predict output.

```js id="8ysq3v"
function test() {
  let age = 25;
}

console.log(age);
```

Output:

```text id="z5jkg7"
ReferenceError
```

Because `age` is local to the function.

---

## 55. What is local scope?

Variables declared inside a function belong to local scope.

Example:

```js id="gh4j0s"
function test() {
  let city = "Hyderabad";
}
```

`city` exists only inside the function.

---

## 56. What is global scope?

Variables declared outside functions belong to global scope.

Example:

```js id="b5tbbv"
let country = "India";
```

They can be accessed from anywhere in the program.

---

## 57. Difference between local scope and global scope?

| Local Scope                     | Global Scope                |
| ------------------------------- | --------------------------- |
| Inside function                 | Outside function            |
| Accessible only within function | Accessible everywhere       |
| Temporary                       | Exists throughout execution |

---

## 58. Why are local variables safer?

Because:

* They avoid accidental modifications.
* They reduce naming conflicts.
* They improve code maintainability.
* They support encapsulation.

---

## 59. What happens to local variables after function execution ends?

They become inaccessible.

The Function Execution Context is removed from memory, and local variables are eligible for garbage collection.

Example:

```js id="jlwmg4"
function test() {
  let age = 25;
}

test();
```

After execution:

```text id="qwejlwm"
age no longer exists
```

---

## 60. Explain function scope.

Function scope means variables declared inside a function can only be accessed inside that function.

Example:

```js id="rrvvri"
function test() {
  let score = 100;
  console.log(score);
}

test();
```

Output:

```text id="w5sg7j"
100
```

But:

```js id="k0zy8z"
console.log(score);
```

Output:

```text id="i9hx6s"
ReferenceError
```

---

Next: **Part 4 and Part 5 (Questions 61–90)**

---

# JavaScript Functions — Questions & Answers

## Part 4 & Part 5 (Questions 61–90)

---

# FAANG-Level Function Concepts

---

## 61. What is an Execution Context?

An Execution Context is the environment in which JavaScript code executes.

It contains:

* Variables
* Function declarations
* Scope information
* `this` value

---

## 62. How many phases does an Execution Context have?

Two phases:

```text
1. Memory Creation Phase
2. Execution Phase
```

---

## 63. What happens during the Memory Creation Phase?

JavaScript allocates memory for:

* Variables
* Functions

Example:

```js
var a = 10;

function greet() {}
```

Memory:

```text
a → undefined
greet → function
```

---

## 64. What happens during the Execution Phase?

JavaScript executes code line by line and assigns actual values.

Example:

```js
var a = 10;
```

Changes:

```text
a → 10
```

---

## 65. What is a Function Execution Context?

Whenever a function is called, JavaScript creates a separate execution context for that function.

Example:

```js
function greet() {
  console.log("Hello");
}

greet();
```

A new execution context is created for `greet()`.

---

## 66. What is the Call Stack?

The Call Stack is a data structure used by JavaScript to track function execution.

It follows:

```text
LIFO
(Last In, First Out)
```

---

## 67. Explain LIFO in the Call Stack.

Example:

```js
function first() {
  second();
}

function second() {
  third();
}

function third() {
  console.log("Done");
}

first();
```

Stack:

```text
Global
↓
first()
↓
second()
↓
third()
```

Removal:

```text
third()
second()
first()
Global
```

---

## 68. What is stack overflow?

Stack Overflow occurs when too many function calls fill the Call Stack.

Usually caused by infinite recursion.

Example:

```js
function test() {
  test();
}

test();
```

Output:

```text
RangeError: Maximum call stack size exceeded
```

---

## 69. What is recursion?

Recursion is a function calling itself.

Example:

```js
function countDown(num) {
  if (num === 0) return;

  console.log(num);

  countDown(num - 1);
}
```

---

## 70. Why is recursion important in DSA?

Many algorithms use recursion:

* Tree Traversal
* Graph Traversal
* Backtracking
* Divide and Conquer
* Dynamic Programming

---

# Function Internals

---

## 71. Are functions objects in JavaScript?

Yes.

Functions are special objects.

Example:

```js
function greet() {}

console.log(typeof greet);
```

Output:

```text
function
```

---

## 72. What does "First-Class Function" mean?

Functions can:

* Be stored in variables
* Be passed as arguments
* Be returned from other functions

---

## 73. Store a function inside a variable.

```js
const greet = function() {
  console.log("Hello");
};

greet();
```

---

## 74. Pass a function as an argument.

```js
function greet() {
  console.log("Hello");
}

function execute(fn) {
  fn();
}

execute(greet);
```

---

## 75. Return a function from another function.

```js
function outer() {
  return function inner() {
    console.log("Hello");
  };
}

const result = outer();

result();
```

---

## 76. Why are first-class functions important?

They make possible:

* Callbacks
* Closures
* Event Handlers
* Functional Programming
* React Patterns

---

## 77. What is a callback function?

A callback is a function passed into another function.

Example:

```js
function greet() {
  console.log("Hello");
}

function execute(callback) {
  callback();
}

execute(greet);
```

---

## 78. Where are callbacks commonly used?

Common uses:

* Event Listeners
* Timers
* API Calls
* Array Methods

Examples:

```js
setTimeout(() => {
  console.log("Hello");
}, 1000);
```

---

## 79. What is higher-order function?

A function that:

* Accepts another function
  or
* Returns another function

Example:

```js
function execute(fn) {
  fn();
}
```

---

## 80. Give examples of higher-order functions.

Examples:

```text
map()
filter()
reduce()
forEach()
sort()
```

---

# DSA-Oriented Function Thinking

---

## 81. Why are functions important in DSA?

Functions help:

* Break problems into smaller parts
* Reuse logic
* Improve readability

---

## 82. Create a function to find the maximum number.

```js
function findMax(a, b) {
  return a > b ? a : b;
}
```

---

## 83. Create a function to find the minimum number.

```js
function findMin(a, b) {
  return a < b ? a : b;
}
```

---

## 84. Create a function to check even numbers.

```js
function isEven(num) {
  return num % 2 === 0;
}
```

---

## 85. Create a function to check odd numbers.

```js
function isOdd(num) {
  return num % 2 !== 0;
}
```

---

## 86. Create a function to calculate factorial.

```js
function factorial(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}
```

---

## 87. Create a function to reverse a string.

```js
function reverseString(str) {
  return str.split("").reverse().join("");
}
```

---

## 88. Create a function to count digits.

```js
function countDigits(num) {
  return num.toString().length;
}
```

---

## 89. Create a function to calculate the sum of an array.

```js
function arraySum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}
```

---

## 90. Why is function thinking important for DSA?

Because every algorithm is built using functions.

Functions help:

```text
Input
↓
Process
↓
Output
```

They make algorithms:

* Modular
* Reusable
* Testable
* Efficient
* Easy to understand

---

# Final Functions Roadmap Summary

```text
Functions
│
├── Function Declaration
├── Function Call
├── Parameters
├── Arguments
├── Return Values
├── Function Scope
├── Local Scope
├── Global Scope
├── Execution Context
├── Call Stack
├── Recursion
├── First-Class Functions
├── Callback Functions
├── Higher-Order Functions
├── Calculator Functions
├── Formula Functions
├── DSA Functions
└── Function Internals
```

### What You've Learned from Functions

```text
Beginner Level
├── Function Basics
├── Parameters
├── Arguments
├── Return Values

Intermediate Level
├── Scope
├── Reusability
├── Modular Programming

Industry Level
├── Execution Context
├── Call Stack
├── Memory Behavior

FAANG Level
├── First-Class Functions
├── Callbacks
├── Higher-Order Functions
├── Recursion

DSA Foundation
├── Input → Process → Output
├── Utility Functions
├── Problem Decomposition
└── Algorithm Design
```

With Functions completed, the strongest next topic is:

```text
DAY 7

Learn
├── Function Expressions
├── Arrow Functions
├── Scope
├── Lexical Environment
├── Closures

Practice
├── Callback Functions
├── Counter Programs
├── Real Interview Questions
```

This is where JavaScript starts becoming "interview-level" and directly connects to React development.
