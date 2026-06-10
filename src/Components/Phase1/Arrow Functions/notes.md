Excellent. **DAY 7** is a very important milestone because it connects directly to React, modern JavaScript, and many interview questions.

---

# DAY 7

## Learn

* Function Expressions
* Arrow Functions
* Callback Functions (Basics)

## Practice

* Array Callbacks
* Reusable Functions

---

# Learning Roadmap

```text
Functions
│
├── Function Declaration
│
├── Function Expression
│
├── Arrow Function
│
├── Callback Function
│
├── Array Callbacks
│
└── Reusable Functions
```

---

# 1. Function Expression

A function can be stored inside a variable.

Example:

```js
const greet = function () {
  console.log("Hello");
};

greet();
```

Output:

```text
Hello
```

---

## Structure

```text
Variable
│
└── Stores Function
```

```js
const add = function(a, b) {
  return a + b;
};
```

---

# Function Declaration vs Function Expression

## Function Declaration

```js
function greet() {
  console.log("Hello");
}
```

---

## Function Expression

```js
const greet = function() {
  console.log("Hello");
};
```

---

## Difference

| Function Declaration        | Function Expression               |
| --------------------------- | --------------------------------- |
| Hoisted completely          | Not fully hoisted                 |
| Can call before declaration | Cannot call before initialization |
| Traditional syntax          | Stored in variable                |

---

# Example

### Works

```js
greet();

function greet() {
  console.log("Hello");
}
```

---

### Error

```js
greet();

const greet = function() {
  console.log("Hello");
};
```

Output:

```text
ReferenceError
```

---

# 2. Arrow Functions

Introduced in ES6.

Shorter way to write functions.

---

## Traditional Function

```js
function add(a, b) {
  return a + b;
}
```

---

## Arrow Function

```js
const add = (a, b) => {
  return a + b;
};
```

---

# Arrow Function Syntax

## No Parameters

```js
const greet = () => {
  console.log("Hello");
};
```

---

## One Parameter

```js
const square = num => {
  return num * num;
};
```

---

## Multiple Parameters

```js
const add = (a, b) => {
  return a + b;
};
```

---

# Implicit Return

If only one statement exists:

```js
const add = (a, b) => a + b;
```

Equivalent to:

```js
const add = (a, b) => {
  return a + b;
};
```

---

# Examples

## Square

```js
const square = num => num * num;
```

---

## Cube

```js
const cube = num => num * num * num;
```

---

## Even Check

```js
const isEven = num => num % 2 === 0;
```

---

## Odd Check

```js
const isOdd = num => num % 2 !== 0;
```

---

# Traditional vs Arrow Function

## Traditional

```js
function multiply(a, b) {
  return a * b;
}
```

---

## Arrow

```js
const multiply = (a, b) => a * b;
```

---

# Why Arrow Functions Are Popular

* Less code
* Better readability
* Used heavily in React
* Used in array methods
* Common in interviews

---

# 3. Callback Functions

A callback is a function passed as an argument to another function.

---

## Example

```js
function greet() {
  console.log("Hello");
}

function execute(callback) {
  callback();
}

execute(greet);
```

Output:

```text
Hello
```

---

# Structure

```text
execute(greet)
        │
        ▼
   callback()
        │
        ▼
      greet()
```

---

# Why Callbacks?

They allow functions to:

* Execute later
* Be reused
* Make code dynamic

---

# Example

```js
function add(a, b) {
  console.log(a + b);
}

function calculate(x, y, operation) {
  operation(x, y);
}

calculate(10, 20, add);
```

Output:

```text
30
```

---

# Real-Life Example

## setTimeout

```js
setTimeout(() => {
  console.log("Hello");
}, 1000);
```

Arrow function is the callback.

---

# Array Callbacks

Arrays use callbacks everywhere.

---

## forEach

```js
const numbers = [1, 2, 3];

numbers.forEach(num => {
  console.log(num);
});
```

Output:

```text
1
2
3
```

---

## map

```js
const numbers = [1, 2, 3];

const result = numbers.map(num => num * 2);

console.log(result);
```

Output:

```text
[2, 4, 6]
```

---

## filter

```js
const numbers = [1,2,3,4,5,6];

const even = numbers.filter(num => num % 2 === 0);

console.log(even);
```

Output:

```text
[2,4,6]
```

---

# Reusable Functions

Bad:

```js
console.log(10 + 20);
console.log(30 + 40);
console.log(50 + 60);
```

---

Good:

```js
const add = (a, b) => a + b;

console.log(add(10,20));
console.log(add(30,40));
console.log(add(50,60));
```

---

# What Happens Internally?

Example:

```js
const add = (a, b) => a + b;

add(10, 20);
```

### Memory Phase

```text
add → function
```

---

### Execution Phase

```text
a = 10
b = 20
```

Returns:

```text
30
```

---

# Industry Examples

### React Button

```jsx
<button onClick={() => alert("Clicked")}>
  Click Me
</button>
```

Callback:

```js
() => alert("Clicked")
```

---

### API Request

```js
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));
```

Callbacks are used here.

---

# FAANG-Level Concepts

```text
Function Declaration
│
├── Hoisted
│
Function Expression
│
├── Stored in variable
├── Not fully hoisted
│
Arrow Function
│
├── Short syntax
├── ES6 feature
├── React favorite
│
Callback Function
│
├── Function passed to function
├── Executes later
│
Array Methods
│
├── forEach
├── map
├── filter
│
Reusable Functions
│
└── Avoid duplicate code
```

---

# DSA Connection

Callbacks are heavily used in:

```text
Array Processing
│
├── map()
├── filter()
├── reduce()
├── sort()
│
Functional Programming
│
├── Reusable Logic
├── Cleaner Algorithms
└── Better Problem Solving
```

---

