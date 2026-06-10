# JavaScript Day 7 — Function Expressions, Arrow Functions & Callbacks

## Interview Questions Roadmap

### Beginner → Industry → FAANG → DSA Thinking Level

---

# LEVEL 1 — Function Expressions Basics

### Focus

* Function Expressions
* Storing Functions in Variables
* Calling Function Expressions

---

## 1. What is a Function Expression?

---

## 2. How is a Function Expression different from a Function Declaration?

---

## 3. Create a Function Expression that prints "Hello World".

---

## 4. Store a function inside a variable named `greet`.

---

## 5. How do you call a Function Expression?

---

## 6. Predict the output:

```js id="d7q1"
const greet = function() {
  console.log("Hello");
};

greet();
```

---

## 7. Can a Function Expression be stored in a variable?

---

## 8. Why are Function Expressions useful?

---

## 9. Create a Function Expression that adds two numbers.

---

## 10. Create a Function Expression that returns the square of a number.

---

# LEVEL 2 — Function Declaration vs Function Expression

### Focus

* Hoisting
* Differences
* Interview Concepts

---

## 11. Which one is fully hoisted:

* Function Declaration
* Function Expression

---

## 12. Predict the output:

```js id="d7q2"
greet();

function greet() {
  console.log("Hello");
}
```

---

## 13. Predict the output:

```js id="d7q3"
greet();

const greet = function() {
  console.log("Hello");
};
```

---

## 14. Why does Question 13 throw an error?

---

## 15. Explain hoisting in Function Declarations.

---

## 16. Explain hoisting in Function Expressions.

---

## 17. Which is preferred in modern JavaScript projects?

---

## 18. Why do React developers often use Function Expressions?

---

## 19. What is stored in memory for a Function Expression?

---

## 20. Explain the execution flow of a Function Expression.

---

# LEVEL 3 — Arrow Functions Basics

### Focus

* ES6
* Syntax
* Shorter Functions

---

## 21. What is an Arrow Function?

---

## 22. Why were Arrow Functions introduced?

---

## 23. Convert this into an Arrow Function:

```js id="d7q4"
function greet() {
  console.log("Hello");
}
```

---

## 24. Create an Arrow Function that prints your name.

---

## 25. Create an Arrow Function that adds two numbers.

---

## 26. Create an Arrow Function that returns the square of a number.

---

## 27. Create an Arrow Function that checks if a number is even.

---

## 28. Create an Arrow Function that checks if a number is odd.

---

## 29. Predict the output:

```js id="d7q5"
const add = (a, b) => a + b;

console.log(add(10, 20));
```

---

## 30. What is implicit return in Arrow Functions?

---

# LEVEL 4 — Arrow Functions Deep Dive

### Focus

* Syntax Variations
* Interview Questions

---

## 31. Write an Arrow Function with no parameters.

---

## 32. Write an Arrow Function with one parameter.

---

## 33. Write an Arrow Function with multiple parameters.

---

## 34. Difference between:

```js id="d7q6"
(a, b) => a + b
```

and

```js id="d7q7"
(a, b) => {
  return a + b;
}
```

---

## 35. Predict the output:

```js id="d7q8"
const square = num => num * num;

console.log(square(5));
```

---

## 36. Predict the output:

```js id="d7q9"
const test = () => {};

console.log(test());
```

---

## 37. Can Arrow Functions return objects?

---

## 38. Why are Arrow Functions heavily used in React?

---

## 39. Function Declaration vs Function Expression vs Arrow Function.

---

## 40. When should you use Arrow Functions?

---

# LEVEL 5 — Callback Functions Basics

### Focus

* Functions as Values
* Passing Functions

---

## 41. What is a Callback Function?

---

## 42. Why are callbacks important?

---

## 43. What does "function passed as an argument" mean?

---

## 44. Identify the callback:

```js id="d7q10"
execute(greet);
```

---

## 45. Predict the output:

```js id="d7q11"
function greet() {
  console.log("Hello");
}

function execute(callback) {
  callback();
}

execute(greet);
```

---

## 46. Explain the flow of Question 45 step-by-step.

---

## 47. Why is `greet` called a callback?

---

## 48. What does `callback()` do?

---

## 49. What happens internally when `execute(greet)` runs?

---

## 50. Can multiple functions be used as callbacks?

---

# LEVEL 6 — Real Callback Thinking

### Focus

* Reusability
* Dynamic Logic

---

## 51. Create an `add` function.

---

## 52. Create a `multiply` function.

---

## 53. Create a `calculate` function that accepts a callback.

---

## 54. Use `calculate()` with the `add` callback.

---

## 55. Use `calculate()` with the `multiply` callback.

---

## 56. Why is callback-based design flexible?

---

## 57. Explain:

```text id="d7q12"
Same Function
Different Behavior
```

using callbacks.

---

## 58. What is the benefit of passing functions as arguments?

---

## 59. What problem do callbacks solve?

---

## 60. Why are callbacks considered reusable?

---

# LEVEL 7 — Array Callbacks

### Focus

* forEach
* map
* filter

---

## 61. What is an Array Callback?

---

## 62. What does `forEach()` do?

---

## 63. Print all elements using `forEach()`.

---

## 64. What does `map()` do?

---

## 65. Double all numbers using `map()`.

---

## 66. What does `filter()` do?

---

## 67. Filter all even numbers using `filter()`.

---

## 68. Difference between:

* `forEach()`
* `map()`

---

## 69. Difference between:

* `map()`
* `filter()`

---

## 70. Why are callbacks heavily used with arrays?

---

# LEVEL 8 — Industry-Level Questions

### Focus

* Modern JavaScript
* React Thinking

---

## 71. Why are Arrow Functions common in React?

---

## 72. What type of function is commonly used in event handlers?

---

## 73. Explain this code:

```js id="d7q13"
button.addEventListener("click", () => {
  console.log("Clicked");
});
```

---

## 74. Identify the callback in Question 73.

---

## 75. Explain how `setTimeout()` uses callbacks.

---

## 76. Predict the output:

```js id="d7q14"
setTimeout(() => {
  console.log("Hello");
}, 1000);

console.log("World");
```

---

## 77. Why does "World" print first?

---

## 78. What is asynchronous behavior?

---

## 79. How do callbacks help asynchronous programming?

---

## 80. Where are callbacks used in real-world applications?

---

# LEVEL 9 — FAANG + DSA Thinking

### Focus

* Functional Thinking
* Reusable Logic

---

## 81. Why are functions considered first-class citizens in JavaScript?

---

## 82. What is a Higher-Order Function?

---

## 83. Is `map()` a Higher-Order Function? Why?

---

## 84. Is `filter()` a Higher-Order Function? Why?

---

## 85. Why is callback knowledge important before learning closures?

---

## 86. Why is callback knowledge important before learning promises?

---

## 87. Why is callback knowledge important before learning async/await?

---

## 88. How do callbacks improve code reusability?

---

## 89. How do callbacks support DSA-style problem solving?

---

## 90. Explain the complete callback flow from memory creation to execution.

---
