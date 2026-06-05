# JavaScript Functions — Complete Notes

## Beginner → Intermediate → Industry → FAANG Foundation → DSA Foundation

---

# 1. What is a Function?

A function is a reusable block of code that performs a specific task.

Instead of writing the same code multiple times, we write it once inside a function and call it whenever needed.

### Without Function

```js
console.log("Hello");
console.log("Hello");
console.log("Hello");
```

### With Function

```js
function greet() {
  console.log("Hello");
}

greet();
greet();
greet();
```

---

# 2. Why Do We Need Functions?

Functions help us:

* Reuse code
* Avoid duplication
* Improve readability
* Improve maintainability
* Organize large applications
* Build reusable logic

---

# 3. Function Syntax

```js
function functionName() {
  // code
}
```

Example:

```js
function greet() {
  console.log("Hello World");
}
```

---

# 4. Function Declaration

A function declaration creates a function with the `function` keyword.

```js
function greet() {
  console.log("Hello");
}
```

---

# 5. Calling a Function

Creating a function does not execute it.

We must call it.

```js
function greet() {
  console.log("Hello");
}

greet();
```

Output:

```text
Hello
```

---

# 6. Function Naming Rules

Good:

```js
function calculateTotal() {}
function findMax() {}
function printTable() {}
```

Bad:

```js
function a() {}
function xyz() {}
```

Use meaningful names.

---

# 7. Function Structure

```js
function add(a, b) {
  return a + b;
}
```

```text
Function
│
├── Name → add
│
├── Parameters
│   ├── a
│   └── b
│
├── Function Body
│   └── return a + b
│
└── Return Value
    └── result
```

---

# 8. Parameters

Parameters are variables declared inside the function definition.

```js
function greet(name) {
  console.log(name);
}
```

Here:

```text
name
```

is a parameter.

---

# 9. Arguments

Arguments are actual values passed to the function.

```js
greet("Sai");
```

Here:

```text
"Sai"
```

is an argument.

---

# 10. Parameter vs Argument

```js
function greet(name) {
  console.log(name);
}

greet("Sai");
```

```text
Parameter → name

Argument → "Sai"
```

---

# 11. Multiple Parameters

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

# 12. Return Keyword

The `return` keyword sends a value back from the function.

```js
function add(a, b) {
  return a + b;
}
```

---

# 13. Why Return Is Important

Without return:

```js
function add(a, b) {
  console.log(a + b);
}
```

Only prints.

With return:

```js
function add(a, b) {
  return a + b;
}
```

Can:

* Store result
* Reuse result
* Pass result elsewhere

---

# 14. Return Ends Function Execution

```js
function test() {
  return "Hello";

  console.log("World");
}
```

Output:

```text
Hello
```

Code after return never executes.

---

# 15. Returning Different Data Types

### Number

```js
function square(num) {
  return num * num;
}
```

---

### String

```js
function getName() {
  return "Sai";
}
```

---

### Boolean

```js
function isEven(num) {
  return num % 2 === 0;
}
```

---

### Array

```js
function getNumbers() {
  return [1, 2, 3];
}
```

---

### Object

```js
function getUser() {
  return {
    name: "Sai",
    age: 25
  };
}
```

---

# 16. Function Execution Flow

```js
function add(a, b) {
  return a + b;
}

let result = add(10, 20);
```

Flow:

```text
Function Created
        ↓
Function Called
        ↓
Arguments Passed
        ↓
Parameters Receive Values
        ↓
Function Executes
        ↓
Return Value Generated
        ↓
Result Stored
```

---

# 17. What Happens Internally?

Example:

```js
function add(a, b) {
  return a + b;
}

add(10, 20);
```

### Step 1

Global Execution Context created.

---

### Step 2

Function stored in memory.

```text
add → function
```

---

### Step 3

Function called.

```js
add(10, 20);
```

---

### Step 4

New Function Execution Context created.

Memory:

```text
a → 10
b → 20
```

---

### Step 5

Execution phase:

```js
return a + b;
```

returns:

```text
30
```

---

### Step 6

Function Execution Context removed.

---

# 18. Function Scope

Variables declared inside a function are accessible only inside that function.

```js
function test() {
  let age = 25;
}

console.log(age);
```

Output:

```text
ReferenceError
```

---

# 19. Local Scope

```js
function test() {
  let city = "Hyderabad";
}
```

`city` is local to the function.

---

# 20. Global Scope

```js
let country = "India";

function test() {
  console.log(country);
}
```

Functions can access global variables.

---

# 21. Function Can Access Global Variables

```js
let name = "Sai";

function greet() {
  console.log(name);
}

greet();
```

Output:

```text
Sai
```

---

# 22. Global Cannot Access Local Variables

```js
function test() {
  let age = 25;
}

console.log(age);
```

Output:

```text
ReferenceError
```

---

# 23. Function Reusability

```js
function add(a, b) {
  return a + b;
}

add(10, 20);
add(5, 6);
add(100, 200);
```

Same logic, different inputs.

---

# 24. Functions and Modularity

Large applications are divided into small functions.

Example:

```text
Login Function
Signup Function
Search Function
Payment Function
```

Instead of one huge file.

---

# 25. Calculator Functions

### Addition

```js
function add(a, b) {
  return a + b;
}
```

### Subtraction

```js
function subtract(a, b) {
  return a - b;
}
```

### Multiplication

```js
function multiply(a, b) {
  return a * b;
}
```

### Division

```js
function divide(a, b) {
  return a / b;
}
```

---

# 26. Area Formula Functions

### Rectangle

```js
function areaRectangle(length, width) {
  return length * width;
}
```

---

### Square

```js
function areaSquare(side) {
  return side * side;
}
```

---

### Triangle

```js
function areaTriangle(base, height) {
  return 0.5 * base * height;
}
```

---

### Circle

```js
function areaCircle(radius) {
  return Math.PI * radius * radius;
}
```

---

# 27. Function Hoisting

Function declarations are hoisted.

```js
greet();

function greet() {
  console.log("Hello");
}
```

Output:

```text
Hello
```

Because the function is available before its declaration.

---

# 28. Execution Context & Functions

Every function call creates:

```text
New Execution Context
```

Example:

```js
function first() {
  console.log("First");
}

first();
```

A separate execution context is created for `first()`.

---

# 29. Call Stack

JavaScript keeps track of function calls using the Call Stack.

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

Call Stack:

```text
Global

Global
↓
first()

Global
↓
first()
↓
second()

Global
↓
first()
↓
second()
↓
third()
```

Then it pops back out.

---

# 30. Functions in DSA

Almost every DSA problem is solved using functions.

Example:

```js
function findMax(arr) {
  let max = arr[0];

  for(let i = 1; i < arr.length; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}
```

---

# FAANG-Level Concepts to Remember

```text
Function
├── Reusable block of code

Parameters
├── Placeholder variables

Arguments
├── Actual values passed

Return
├── Sends value back
├── Stops execution

Scope
├── Local Scope
├── Global Scope

Execution Context
├── Memory Phase
├── Execution Phase

Call Stack
├── Tracks function calls

Hoisting
├── Function declarations are hoisted

Modularity
├── Small reusable pieces

DSA
├── Every algorithm uses functions
```

# Summary

```text
Functions
│
├── Function Declaration
├── Function Call
├── Parameters
├── Arguments
├── Return Values
├── Function Scope
├── Global Scope
├── Local Scope
├── Function Hoisting
├── Execution Context
├── Call Stack
├── Calculator Functions
├── Area Formula Functions
└── DSA Applications
```
