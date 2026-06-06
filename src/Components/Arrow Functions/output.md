# JavaScript Day 7 — Answers (1–45)

---

## 1. What is a Function Expression?

A function stored inside a variable.

```js
const greet = function() {
  console.log("Hello");
};
```

---

## 2. How is a Function Expression different from a Function Declaration?

* Function Declaration: Defined directly using `function`.
* Function Expression: Stored in a variable.

---

## 3. Create a Function Expression that prints "Hello World".

```js
const greet = function() {
  console.log("Hello World");
};
```

---

## 4. Store a function inside a variable named `greet`.

```js
const greet = function() {
  console.log("Hello");
};
```

---

## 5. How do you call a Function Expression?

```js
greet();
```

---

## 6. Predict the output

```text
Hello
```

---

## 7. Can a Function Expression be stored in a variable?

Yes.

---

## 8. Why are Function Expressions useful?

They allow functions to be stored, passed, and reused.

---

## 9. Create a Function Expression that adds two numbers.

```js
const add = function(a, b) {
  return a + b;
};
```

---

## 10. Create a Function Expression that returns the square of a number.

```js
const square = function(num) {
  return num * num;
};
```

---

## 11. Which one is fully hoisted?

Function Declaration.

---

## 12. Predict the output

```text
Hello
```

---

## 13. Predict the output

```text
ReferenceError
```

---

## 14. Why does Question 13 throw an error?

Because the function expression is not initialized before use.

---

## 15. Explain hoisting in Function Declarations.

The entire function is moved to memory before execution.

---

## 16. Explain hoisting in Function Expressions.

Only the variable is hoisted; the function assignment is not.

---

## 17. Which is preferred in modern JavaScript projects?

Function Expressions and Arrow Functions.

---

## 18. Why do React developers often use Function Expressions?

Because they work well with components and callbacks.

---

## 19. What is stored in memory for a Function Expression?

The variable reference and the function object.

---

## 20. Explain the execution flow of a Function Expression.

Variable created → function assigned → function called.

---

## 21. What is an Arrow Function?

A shorter syntax for writing functions.

---

## 22. Why were Arrow Functions introduced?

To write cleaner and shorter code.

---

## 23. Convert this into an Arrow Function.

```js
const greet = () => {
  console.log("Hello");
};
```

---

## 24. Create an Arrow Function that prints your name.

```js
const name = () => {
  console.log("Sai Krishna");
};
```

---

## 25. Create an Arrow Function that adds two numbers.

```js
const add = (a, b) => a + b;
```

---

## 26. Create an Arrow Function that returns the square of a number.

```js
const square = num => num * num;
```

---

## 27. Create an Arrow Function that checks if a number is even.

```js
const isEven = num => num % 2 === 0;
```

---

## 28. Create an Arrow Function that checks if a number is odd.

```js
const isOdd = num => num % 2 !== 0;
```

---

## 29. Predict the output

```text
30
```

---

## 30. What is implicit return in Arrow Functions?

Returning a value without using the `return` keyword.

---

## 31. Write an Arrow Function with no parameters.

```js
const greet = () => {
  console.log("Hello");
};
```

---

## 32. Write an Arrow Function with one parameter.

```js
const square = num => num * num;
```

---

## 33. Write an Arrow Function with multiple parameters.

```js
const add = (a, b) => a + b;
```

---

## 34. Difference between the two arrow functions?

First uses implicit return.

Second uses explicit return.

---

## 35. Predict the output

```text
25
```

---

## 36. Predict the output

```text
undefined
```

---

## 37. Can Arrow Functions return objects?

Yes.

```js
const user = () => ({ name: "Sai" });
```

---

## 38. Why are Arrow Functions heavily used in React?

Short syntax and easier callback handling.

---

## 39. Function Declaration vs Function Expression vs Arrow Function

* Declaration → Fully hoisted
* Expression → Stored in variable
* Arrow → Short ES6 syntax

---

## 40. When should you use Arrow Functions?

For callbacks and short reusable functions.

---

## 41. What is a Callback Function?

A function passed as an argument to another function.

---

## 42. Why are callbacks important?

They make functions reusable and dynamic.

---

## 43. What does "function passed as an argument" mean?

Passing one function into another function.

---

## 44. Identify the callback

```js
execute(greet);
```

Callback:

```js
greet
```

---

## 45. Predict the output

```text
Hello
```

---

# JavaScript Day 7 — Answers (46–90)

---

## 46. Explain the flow of Question 45 step-by-step.

```text
execute(greet)
↓
callback = greet
↓
callback()
↓
greet()
↓
Hello
```

---

## 47. Why is `greet` called a callback?

Because it is passed into another function and executed later.

---

## 48. What does `callback()` do?

Executes the function stored in `callback`.

---

## 49. What happens internally when `execute(greet)` runs?

```text
callback receives greet
↓
callback points to greet
↓
callback() runs greet()
```

---

## 50. Can multiple functions be used as callbacks?

Yes.

---

## 51. Create an `add` function.

```js
function add(a, b) {
  return a + b;
}
```

---

## 52. Create a `multiply` function.

```js
function multiply(a, b) {
  return a * b;
}
```

---

## 53. Create a `calculate` function that accepts a callback.

```js
function calculate(a, b, operation) {
  return operation(a, b);
}
```

---

## 54. Use `calculate()` with the `add` callback.

```js
calculate(10, 20, add);
```

---

## 55. Use `calculate()` with the `multiply` callback.

```js
calculate(10, 20, multiply);
```

---

## 56. Why is callback-based design flexible?

Different functions can be passed for different behaviors.

---

## 57. Explain "Same Function, Different Behavior".

One function can perform different tasks depending on the callback provided.

---

## 58. What is the benefit of passing functions as arguments?

Code reusability and flexibility.

---

## 59. What problem do callbacks solve?

They prevent duplicate logic.

---

## 60. Why are callbacks considered reusable?

The same callback can be used in multiple places.

---

## 61. What is an Array Callback?

A callback function used inside array methods.

---

## 62. What does `forEach()` do?

Loops through each element.

---

## 63. Print all elements using `forEach()`.

```js
arr.forEach(item => console.log(item));
```

---

## 64. What does `map()` do?

Creates a new transformed array.

---

## 65. Double all numbers using `map()`.

```js
arr.map(num => num * 2);
```

---

## 66. What does `filter()` do?

Returns elements matching a condition.

---

## 67. Filter all even numbers using `filter()`.

```js
arr.filter(num => num % 2 === 0);
```

---

## 68. Difference between `forEach()` and `map()`?

* forEach → No new array.
* map → Returns a new array.

---

## 69. Difference between `map()` and `filter()`?

* map → Transform.
* filter → Select.

---

## 70. Why are callbacks heavily used with arrays?

They make data processing easier and reusable.

---

## 71. Why are Arrow Functions common in React?

Cleaner syntax and callback usage.

---

## 72. What type of function is commonly used in event handlers?

Arrow Functions.

---

## 73. Explain the code.

The callback runs when the button is clicked.

---

## 74. Identify the callback.

```js
() => {
  console.log("Clicked");
}
```

---

## 75. Explain how `setTimeout()` uses callbacks.

The callback runs after the specified delay.

---

## 76. Predict the output

```text
World
Hello
```

---

## 77. Why does "World" print first?

Because `setTimeout()` is asynchronous.

---

## 78. What is asynchronous behavior?

Code that executes later without blocking other code.

---

## 79. How do callbacks help asynchronous programming?

They run after an async task completes.

---

## 80. Where are callbacks used in real-world applications?

Events, APIs, timers, React, Node.js.

---

## 81. Why are functions considered first-class citizens in JavaScript?

They can be stored, passed, and returned like values.

---

## 82. What is a Higher-Order Function?

A function that accepts or returns another function.

---

## 83. Is `map()` a Higher-Order Function?

Yes.

---

## 84. Is `filter()` a Higher-Order Function?

Yes.

---

## 85. Why is callback knowledge important before learning closures?

Closures often return or use callback functions.

---

## 86. Why is callback knowledge important before learning promises?

Promises replace many callback patterns.

---

## 87. Why is callback knowledge important before learning async/await?

Async/await is built on promise concepts, which evolved from callbacks.

---

## 88. How do callbacks improve code reusability?

One function can work with many behaviors.

---

## 89. How do callbacks support DSA-style problem solving?

They separate processing logic from traversal logic.

---

## 90. Explain the complete callback flow from memory creation to execution.

```text
Memory Phase
↓
sayHello stored
execute stored

Execution Phase
↓
execute(sayHello)
↓
callback = sayHello
↓
callback()
↓
sayHello()
↓
console.log("Hello")
↓
Hello
```
---