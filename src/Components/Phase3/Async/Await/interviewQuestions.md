# Async/Await Interview Questions (Basic → Pro → FAANG)

These questions are arranged in increasing difficulty, just like your previous JavaScript topics.

---

# Part 1 — Basic Level (1–10)

## 1. What is asynchronous programming in JavaScript?

---

## 2. Why do we need asynchronous programming?

---

## 3. What are some examples of asynchronous operations in JavaScript?

---

## 4. What is a Promise?

---

## 5. What are the three states of a Promise?

---

## 6. What is the `async` keyword?

---

## 7. What is the `await` keyword?

---

## 8. Can `await` be used without an `async` function?

---

## 9. Does every async function return a Promise?

---

## 10. Why do we use `async/await` instead of `.then()`?

---

# Part 2 — Intermediate Level (11–20)

## 11. What happens internally when an async function returns a normal value?

Example

```js
async function test() {
    return 10;
}
```

---

## 12. What happens internally when an async function throws an error?

---

## 13. What happens when JavaScript encounters an `await` statement?

---

## 14. Does `await` block the entire JavaScript program?

---

## 15. Explain the execution flow of the following code.

```js
console.log("Start");

async function test() {
    console.log("Inside");

    await Promise.resolve();

    console.log("Done");
}

test();

console.log("End");
```

---

## 16. Why does the code after `await` execute later even when the Promise is already resolved?

---

## 17. What is the relationship between `await`, the Microtask Queue, and the Event Loop?

---

## 18. Explain the difference between synchronous code and asynchronous code.

---

## 19. What is the difference between Promises and async/await?

---

## 20. Can an async function exist without an `await` statement?

---

# Part 3 — Promise Combinators (21–28)

## 21. What is `Promise.all()`?

---

## 22. When should you use `Promise.all()`?

---

## 23. What happens if one Promise rejects inside `Promise.all()`?

---

## 24. What is `Promise.allSettled()`?

---

## 25. What is the difference between `Promise.all()` and `Promise.allSettled()`?

---

## 26. What is `Promise.race()`?

---

## 27. What is `Promise.any()`?

---

## 28. Explain the difference between:

* Promise.all()
* Promise.allSettled()
* Promise.race()
* Promise.any()

---

# Part 4 — Fetch API (29–34)

## 29. What does `fetch()` return?

---

## 30. What is the difference between:

```js
const response = await fetch(API);
```

and

```js
const data = await response.json();
```

---

## 31. Why do we use two `await` statements while fetching data?

---

## 32. What happens if `fetch()` fails?

---

## 33. Why should `fetch()` usually be wrapped inside `try...catch`?

---

## 34. Explain the complete flow of an API request using async/await.

---

# Part 5 — React Interview Questions (35–42)

## 35. How do you fetch API data using async/await inside React?

---

## 36. Why is this wrong?

```jsx
useEffect(async () => {

}, []);
```

---

## 37. What is the correct way to use async/await inside `useEffect`?

---

## 38. How do you handle loading state while making API calls?

---

## 39. How do you handle API errors in React?

---

## 40. How do you clean up asynchronous operations in React?

---

## 41. Where else is async/await commonly used in React besides `useEffect`?

---

## 42. Explain the complete React API flow from button click to UI update.

---

# Part 6 — Output-Based Questions (43–52)

## 43. Predict the output.

```js
async function test() {
    return "Hello";
}

console.log(test());
```

---

## 44. Predict the output.

```js
console.log("A");

async function test() {
    console.log("B");

    await Promise.resolve();

    console.log("C");
}

test();

console.log("D");
```

---

## 45. Predict the output.

```js
console.log(1);

async function run() {
    console.log(2);

    await Promise.resolve();

    console.log(3);
}

run();

console.log(4);
```

---

## 46. Predict the output.

```js
async function test() {
    console.log("A");

    await Promise.resolve();

    console.log("B");
}

test();

console.log("C");
```

---

## 47. Predict the output.

```js
async function test() {
    return Promise.resolve("Done");
}

test().then(console.log);
```

---

## 48. Predict the output.

```js
async function test() {
    throw new Error("Failed");
}

test().catch(console.log);
```

---

## 49. Predict the output.

```js
async function test() {
    return 100;
}

test().then(console.log);
```

---

## 50. Predict the output.

```js
async function test() {
    await Promise.resolve();

    return 10;
}

test().then(console.log);
```

---

## 51. Explain why this output occurs.

```js
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
```

---

## 52. Explain the Call Stack, Microtask Queue, Callback Queue, and Event Loop for Question 51.

---

# Part 7 — Coding Questions (53–62)

## 53. Write a function that waits for 3 seconds and prints `"Hello"`.

---

## 54. Create a `delay(ms)` function using async/await.

---

## 55. Fetch user data from an API using async/await.

---

## 56. Fetch multiple users simultaneously using `Promise.all()`.

---

## 57. Execute three asynchronous tasks sequentially.

---

## 58. Execute three asynchronous tasks in parallel.

---

## 59. Retry a failed API request three times using async/await.

---

## 60. Build a loading spinner simulation using async/await.

---

## 61. Write a function that handles API errors using `try...catch`.

---

## 62. Build a complete login flow using async/await.

Flow:

```text
Login Button

↓

API Call

↓

Loading

↓

Success / Error

↓

Navigate
```

---

# Part 8 — Advanced / FAANG Level (63–75)

## 63. Explain how `await` works internally.

---

## 64. What happens inside the JavaScript engine when an `await` is encountered?

---

## 65. Does `await` remove the function from the Call Stack? Explain.

---

## 66. Why does the code after `await` execute as a Microtask?

---

## 67. Explain the execution flow of an async function using the Event Loop.

---

## 68. Why are Microtasks executed before Callback Queue tasks?

---

## 69. Explain sequential execution vs parallel execution with examples.

---

## 70. Why is `Promise.all()` faster than awaiting each Promise one by one?

---

## 71. Explain the drawbacks of sequential `await` calls.

---

## 72. Why doesn't `await` work as expected inside `Array.forEach()`?

---

## 73. What is the difference between:

* `for`
* `for...of`
* `forEach`
* `map`
* `Promise.all()`

when working with asynchronous code?

---

## 74. Explain the complete lifecycle of the following code.

```js
console.log("Start");

async function fetchData() {

    console.log("Fetching");

    await Promise.resolve();

    console.log("Completed");
}

fetchData();

console.log("End");
```

Include:

* Call Stack
* Promise
* Microtask Queue
* Event Loop
* Final Output

---

## 75. If you were designing JavaScript, how would you implement `await` internally?

*(This is a deep conceptual question sometimes asked in senior or FAANG-style interviews to test your understanding of how `await`, Promises, and the Event Loop work together.)*

---

