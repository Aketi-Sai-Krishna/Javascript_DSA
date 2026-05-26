````md
# JavaScript Variables Questions Roadmap

## Beginner → Industry → FAANG → DSA Thinking Level

These questions are organized progressively to strengthen:
- JavaScript fundamentals
- Problem-solving skills
- Interview preparation
- Internal JavaScript understanding
- DSA-oriented thinking
- GitHub learning progress tracking

---

# LEVEL 1 — Beginner Basics

### Focus Areas
- Understanding variables
- Syntax
- Reassignment
- Printing values

---

## 1. Create a variable called `name` and store your name.

---

## 2. Create variables for:

```js
- age
- city
- country
```

Print all values.

---

## 3. Store two numbers and print their sum.

---

## 4. Create:

```js
let score = 10;
````

Change it to `20` and print the final value.

---

## 5. Create:

```js
const country = "India";
```

Try changing the value.

What happens?

---

## 6. Store:

* `firstName`
* `lastName`

Combine them into:

```text
fullName
```

---

## 7. Create variables for:

* boolean
* string
* number

---

## 8. Use `typeof` on different variables.

---

## 9. Swap two variable values.

---

## 10. Store marks of 5 subjects and calculate total marks.

---

# LEVEL 2 — Understanding Variable Behavior

### Focus Areas

* Scope basics
* Naming conventions
* Memory understanding

---

## 11. Which variable names are valid?

```js
let firstName
let 1name
let user-name
let totalMarks
```

---

## 12. Convert the following into camelCase:

* total marks
* login status
* user score

---

## 13. Explain the difference between:

* declaration
* initialization
* assignment

---

## 14. Explain reassignment.

---

## 15. Predict the output:

```js
let a = 10;

a = 20;

console.log(a);
```

---

## 16. Explain:

```text
variable → value in memory
```

---

## 17. What happens internally when JavaScript executes:

```js
let age = 22;
```

---

## 18. Explain the difference between:

* `var`
* `let`
* `const`

---

## 19. When should you use:

* `let`
* `const`

---

## 20. Why is `var` avoided in modern JavaScript?

---

# LEVEL 3 — Scope Questions

### Focus Areas

* Block scope
* Function scope
* Global scope

---

## 21. Predict the output:

```js
{
  let a = 10;
}

console.log(a);
```

---

## 22. Predict the output:

```js
{
  var a = 10;
}

console.log(a);
```

---

## 23. Explain block scope.

---

## 24. Explain function scope.

---

## 25. Explain global scope.

---

## 26. Predict the output:

```js
let a = 100;

{
  let a = 200;
  console.log(a);
}

console.log(a);
```

---

## 27. Predict the output:

```js
var a = 100;

{
  var a = 200;
}

console.log(a);
```

---

## 28. Which variables are block scoped?

* `var`
* `let`
* `const`

---

## 29. Explain the difference between:

* block scope
* function scope

---

## 30. Why is scope important in large applications?

---

# LEVEL 4 — Hoisting & Temporal Dead Zone (TDZ)

### Focus Areas

* Hoisting
* Memory creation phase
* Execution phase
* TDZ

---

## 31. Predict the output:

```js
console.log(a);

var a = 10;
```

---

## 32. Predict the output:

```js
console.log(a);

let a = 10;
```

---

## 33. Predict the output:

```js
console.log(a);

const a = 10;
```

---

## 34. What is hoisting?

---

## 35. What is Temporal Dead Zone (TDZ)?

---

## 36. Why does `var` print `undefined`?

---

## 37. Explain memory creation phase.

---

## 38. Explain execution phase.

---

## 39. Explain the difference between:

```text
undefined
```

and

```text
not defined
```

---

## 40. Explain:

```text
let and const are hoisted but inaccessible before initialization
```

---

# LEVEL 5 — Interview-Level JavaScript Questions

### Focus Areas

* Internal JavaScript behavior
* Engine concepts
* Interview-oriented problem solving

---

## 41. Explain the difference between:

* redeclaration
* reassignment

---

## 42. Predict the output:

```js
var a = 10;
var a = 20;

console.log(a);
```

---

## 43. Predict the output:

```js
let a = 10;
let a = 20;
```

---

## 44. Why is this invalid?

```js
const a;
```

---

## 45. Predict the output:

```js
let a;

console.log(a);
```

---

## 46. Predict the output:

```js
console.log(a);
```

---

## 47. Explain:

* declaration
* initialization
* assignment

with examples.

---

## 48. Why do modern React developers prefer `const`?

---

## 49. Explain:

* primitive storage
* reference storage

---

## 50. How are variables stored internally in memory?

---

# LEVEL 6 — Industry-Level JavaScript Questions

### Focus Areas

* Closures
* Asynchronous JavaScript
* Debugging
* Real engineering thinking

---

## 51. Predict the output:

```js
for(var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

---

## 52. Fix the previous question using `let`.

---

## 53. Why does `let` solve closure problems in loops?

---

## 54. Explain lexical environment.

---

## 55. Explain execution context.

---

## 56. Explain the difference between:

* stack memory
* heap memory

---

## 57. Explain variable lookup mechanism.

---

## 58. What happens internally when a variable is accessed?

---

## 59. Why are block-scoped variables safer?

---

## 60. Explain variable shadowing.

---

# LEVEL 7 — FAANG-Level Conceptual Questions

### Focus Areas

* Advanced JavaScript internals
* Engine behavior
* Deep conceptual understanding

---

## 61. Explain hoisting internally step-by-step.

---

## 62. Explain how the JavaScript engine stores variables.

---

## 63. What happens during the compilation phase?

---

## 64. Explain the difference between:

* compilation phase
* execution phase

---

## 65. What is variable environment?

---

## 66. What is lexical scope chain?

---

## 67. Why was `let` introduced in ES6?

---

## 68. Explain Temporal Dead Zone deeply.

---

## 69. Can `const` objects mutate internally? Why?

---

## 70. Explain memory optimization related to variables.

---

# LEVEL 8 — DSA-Oriented Variable Thinking

### Focus Areas

* State tracking
* Counters
* Memory updates
* Algorithmic thinking

---

## 71. Use variables to count numbers from 1–10.

---

## 72. Find the sum of numbers from 1–100.

---

## 73. Use a variable as a counter inside a loop.

---

## 74. Track the maximum number using variables.

---

## 75. Track the minimum number using variables.

---

## 76. Swap two variables without using a third variable.

---

## 77. Reverse a number using variables.

---

## 78. Count digits in a number using variables.

---

## 79. Track frequency count manually using variables.

---

## 80. Generate Fibonacci sequence using variables.

---

# LEVEL 9 — Real DSA Foundation Thinking

### Focus Areas

* Algorithm optimization
* State management
* Efficient memory usage
* Problem-solving patterns

---

## 81. Use variables to track current maximum.

---

## 82. Use variables to track current minimum.

---

## 83. Use variables for running sum.

---

## 84. Use variables for basic two-pointer thinking.

---

## 85. Use temporary variables for swapping logic.

---

## 86. Track sliding window sum using variables.

---

## 87. Store intermediate results using variables.

---

## 88. Update state variables inside loops.

---

## 89. Optimize repeated calculations using variables.

---

## 90. Explain why variable tracking is important in algorithms.

```
```
