# Async/Await Interview Questions & Answers (Part 1)

## Basics + Intermediate (Questions 1–20)

---

### 1. What is asynchronous programming in JavaScript?

**Answer:**
Allows JavaScript to execute time-consuming tasks without blocking the remaining code.

---

### 2. Why do we need asynchronous programming?

**Answer:**
To avoid blocking execution, improve performance, and handle tasks like API calls, timers, and file operations efficiently.

---

### 3. What are some examples of asynchronous operations in JavaScript?

**Answer:**

* `fetch()`
* `setTimeout()`
* `setInterval()`
* File Reading
* Database Requests
* Upload/Download Files

---

### 4. What is a Promise?

**Answer:**
An object that represents the eventual completion (fulfilled) or failure (rejected) of an asynchronous operation.

---

### 5. What are the three states of a Promise?

**Answer:**

* Pending
* Fulfilled (Resolved)
* Rejected

---

### 6. What is the `async` keyword?

**Answer:**
Declares an asynchronous function and always returns a Promise.

---

### 7. What is the `await` keyword?

**Answer:**
Pauses only the current async function until the Promise settles.

---

### 8. Can `await` be used without an `async` function?

**Answer:**
No. (Except Top-Level `await` in ES Modules.)

---

### 9. Does every async function return a Promise?

**Answer:**
Yes.

---

### 10. Why do we use `async/await` instead of `.then()`?

**Answer:**

* Better readability
* Cleaner syntax
* Easier error handling (`try...catch`)
* Avoids long Promise chains

---

### 11. What happens internally when an async function returns a normal value?

```js
async function test() {
    return 10;
}
```

**Answer:**
Automatically wrapped using `Promise.resolve(10)`.

---

### 12. What happens internally when an async function throws an error?

**Answer:**
Automatically converted into a rejected Promise using `Promise.reject(error)`.

---

### 13. What happens when JavaScript encounters an `await` statement?

**Answer:**

* Current async function pauses
* Promise executes
* Remaining code runs
* Continuation enters Microtask Queue
* Resumes after Promise settles

---

### 14. Does `await` block the entire JavaScript program?

**Answer:**
No. It pauses only the current async function.

---

### 15. Explain the execution flow.

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

**Answer:**

Output:

```text
Start
Inside
End
Done
```

Flow:

```
Call Stack
↓

await
↓

Microtask Queue

↓

Event Loop

↓

Continue Execution
```

---

### 16. Why does the code after `await` execute later even when the Promise is already resolved?

**Answer:**
Because execution after `await` is always scheduled as a **Microtask**.

---

### 17. What is the relationship between `await`, the Microtask Queue, and the Event Loop?

**Answer:**
`await` → Promise settles → Continuation enters **Microtask Queue** → Event Loop → Call Stack.

---

### 18. Explain the difference between synchronous code and asynchronous code.

**Answer:**

**Synchronous**

* Executes line by line
* Blocks execution
* Waits for each task

**Asynchronous**

* Non-blocking
* Continues executing other code
* Uses Promises/Event Loop

---

### 19. What is the difference between Promises and async/await?

**Promise**

* `.then()`
* `.catch()`
* Callback chaining

**async/await**

* Cleaner syntax
* Looks synchronous
* Uses `try...catch`
* Better readability

---

### 20. Can an async function exist without an `await` statement?

**Answer:**
Yes. It still returns a Promise.

---

# Async/Await Interview Questions & Answers (Part 2)

## Promise Combinators + Fetch API (Questions 21–34)

---

### 21. What is `Promise.all()`?

**Answer:**
Runs multiple Promises in parallel and resolves only if all succeed.

---

### 22. When should you use `Promise.all()`?

**Answer:**
When multiple asynchronous tasks are independent and can run simultaneously.

---

### 23. What happens if one Promise rejects inside `Promise.all()`?

**Answer:**
The entire `Promise.all()` rejects immediately.

---

### 24. What is `Promise.allSettled()`?

**Answer:**
Waits for all Promises to settle and returns both fulfilled and rejected results.

---

### 25. What is the difference between `Promise.all()` and `Promise.allSettled()`?

**Promise.all()**

* Fails fast
* Rejects if one Promise rejects

**Promise.allSettled()**

* Waits for all Promises
* Returns status of every Promise

---

### 26. What is `Promise.race()`?

**Answer:**
Returns the result of the first settled Promise (fulfilled or rejected).

---

### 27. What is `Promise.any()`?

**Answer:**
Returns the first fulfilled Promise and ignores rejected Promises unless all reject.

---

### 28. Explain the difference between:

### Promise.all()

**Answer:**
All must fulfill; one rejection rejects the whole Promise.

---

### Promise.allSettled()

**Answer:**
Waits for all Promises and returns every result.

---

### Promise.race()

**Answer:**
Returns the first settled Promise (fulfilled or rejected).

---

### Promise.any()

**Answer:**
Returns the first fulfilled Promise; rejects only if all Promises reject.

---

### 29. What does `fetch()` return?

**Answer:**
A Promise that resolves to a **Response** object.

---

### 30. What is the difference between:

```js
const response = await fetch(API);
```

and

```js
const data = await response.json();
```

**Answer:**

**response**

* HTTP Response object
* Status
* Headers
* URL
* Metadata

**response.json()**

* Reads response body
* Converts JSON into JavaScript object

---

### 31. Why do we use two `await` statements while fetching data?

**Answer:**

* First `await` → Waits for HTTP response.
* Second `await` → Waits for JSON parsing.

---

### 32. What happens if `fetch()` fails?

**Answer:**
Promise rejects (network errors) or response indicates failure (e.g., `response.ok === false` for HTTP errors).

---

### 33. Why should `fetch()` usually be wrapped inside `try...catch`?

**Answer:**
To handle network errors, rejected Promises, and prevent application crashes.

---

### 34. Explain the complete flow of an API request using async/await.

**Answer:**

```
API Request
↓

fetch()

↓

Promise Pending

↓

Response Received

↓

response.json()

↓

Data Parsed

↓

Update UI

↓

Handle Errors (if any)
```

---

# Async/Await Interview Questions & Answers (Part 3)

## React + Output Questions (35–52)

---

### 35. How do you fetch API data using async/await inside React?

**Answer:**

* `useEffect()`
* Async function inside `useEffect`
* `fetch()`
* `await`
* `setState()`

---

### 36. Why is this wrong?

```jsx
useEffect(async () => {

}, []);
```

**Answer:**

* `useEffect()` expects a cleanup function or nothing.
* An async function returns a Promise.
* React does not expect a Promise as the return value.

---

### 37. What is the correct way to use async/await inside `useEffect`?

**Answer:**

```jsx
useEffect(() => {
    async function fetchData() {
        // await...
    }

    fetchData();
}, []);
```

---

### 38. How do you handle loading state while making API calls?

**Answer:**

* `setLoading(true)`
* API Call
* Update State
* `setLoading(false)`

---

### 39. How do you handle API errors in React?

**Answer:**

* `try...catch`
* `setError()`
* Display error message

---

### 40. How do you clean up asynchronous operations in React?

**Answer:**

* Cleanup function
* `AbortController`
* Cancel API request
* Prevent state updates after unmount

---

### 41. Where else is async/await commonly used in React besides `useEffect`?

**Answer:**

* Event handlers
* Form submission
* Login
* Registration
* Button click
* Search
* File upload

---

### 42. Explain the complete React API flow from button click to UI update.

**Answer:**

```text
Button Click
↓

setLoading(true)

↓

API Request

↓

Response

↓

Update State

↓

Re-render UI

↓

setLoading(false)

↓

Handle Errors (if any)
```

---

## Output Questions

---

### 43. Predict the output.

```js
async function test() {
    return "Hello";
}

console.log(test());
```

**Answer**

```text
Promise { "Hello" }
```

---

### 44. Predict the output.

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

**Answer**

```text
A
B
D
C
```

---

### 45. Predict the output.

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

**Answer**

```text
1
2
4
3
```

---

### 46. Predict the output.

```js
async function test() {
    console.log("A");

    await Promise.resolve();

    console.log("B");
}

test();

console.log("C");
```

**Answer**

```text
A
C
B
```

---

### 47. Predict the output.

```js
async function test() {
    return Promise.resolve("Done");
}

test().then(console.log);
```

**Answer**

```text
Done
```

---

### 48. Predict the output.

```js
async function test() {
    throw new Error("Failed");
}

test().catch(console.log);
```

**Answer**

```text
Error: Failed
```

---

### 49. Predict the output.

```js
async function test() {
    return 100;
}

test().then(console.log);
```

**Answer**

```text
100
```

---

### 50. Predict the output.

```js
async function test() {
    await Promise.resolve();

    return 10;
}

test().then(console.log);
```

**Answer**

```text
10
```

---

### 51. Explain why this output occurs.

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

**Answer**

Output

```text
Start
End
Promise
Timeout
```

Reason

* Synchronous code
* Microtask Queue
* Callback Queue

---

### 52. Explain the Call Stack, Microtask Queue, Callback Queue, and Event Loop.

**Answer**

```text
Call Stack

↓

console.log(Start)

↓

setTimeout()

↓

Promise.then()

↓

console.log(End)

↓

Microtask Queue

↓

Promise

↓

Callback Queue

↓

Timeout

↓

Event Loop
```

---

# Async/Await Interview Questions & Answers (Part 4)

## Coding Questions (53–62)

---

### 53. Write a function that waits for 3 seconds and prints `"Hello"`.

**Answer**

```js
const wait = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("Hello");
};
```

---

### 54. Create a `delay(ms)` function.

**Answer**

```js
const delay = ms =>
    new Promise(resolve => setTimeout(resolve, ms));
```

---

### 55. Fetch user data using async/await.

**Answer**

```js
const response = await fetch(API);
const data = await response.json();
```

---

### 56. Fetch multiple users simultaneously.

**Answer**

```js
await Promise.all([
    fetch(API1),
    fetch(API2),
    fetch(API3)
]);
```

---

### 57. Execute three asynchronous tasks sequentially.

**Answer**

```js
await task1();
await task2();
await task3();
```

---

### 58. Execute three asynchronous tasks in parallel.

**Answer**

```js
await Promise.all([
    task1(),
    task2(),
    task3()
]);
```

---

### 59. Retry a failed API request three times.

**Answer**

* `for` loop
* `try...catch`
* Retry
* Delay
* Throw after final attempt

---

### 60. Build a loading spinner simulation.

**Answer**

```js
setLoading(true);

await fetch(API);

setLoading(false);
```

---

### 61. Handle API errors using `try...catch`.

**Answer**

```js
try {

}
catch(error){

}
finally{

}
```

---

### 62. Build a complete login flow.

**Answer**

```text
Button Click

↓

Loading

↓

Login API

↓

Success

↓

Navigate

↓

Catch Error

↓

Stop Loading
```

---

# Async/Await Interview Questions & Answers (Part 5)

## Advanced / FAANG Level (63–75)

---

### 63. Explain how `await` works internally.

**Answer**

* Pauses current async function
* Promise executes
* Continuation → Microtask Queue
* Event Loop resumes execution

---

### 64. What happens inside the JavaScript engine when `await` is encountered?

**Answer**

* Promise created/used
* Async function pauses
* Call Stack continues
* Promise settles
* Continuation enters Microtask Queue

---

### 65. Does `await` remove the function from the Call Stack?

**Answer**

Yes. The async function is suspended, allowing the Call Stack to continue with other work. When the awaited Promise settles, the function resumes from where it paused.

---

### 66. Why does the code after `await` execute as a Microtask?

**Answer**

Because Promise continuations are scheduled in the **Microtask Queue**.

---

### 67. Explain the execution flow of an async function using the Event Loop.

**Answer**

```text
Call Stack

↓

await

↓

Promise

↓

Microtask Queue

↓

Event Loop

↓

Call Stack

↓

Continue Execution
```

---

### 68. Why are Microtasks executed before Callback Queue tasks?

**Answer**

Microtasks have **higher priority** than Callback Queue (macrotask) tasks.

---

### 69. Explain sequential execution vs parallel execution.

**Sequential**

```js
await A();
await B();
```

* One after another
* Slower

**Parallel**

```js
await Promise.all([
    A(),
    B()
]);
```

* Simultaneous
* Faster

---

### 70. Why is `Promise.all()` faster than awaiting each Promise one by one?

**Answer**

All Promises start simultaneously instead of waiting for the previous one to complete.

---

### 71. Explain the drawbacks of sequential `await` calls.

**Answer**

* Slower execution
* Wasted waiting time
* Independent tasks don't run together

---

### 72. Why doesn't `await` work as expected inside `Array.forEach()`?

**Answer**

* `forEach()` doesn't wait for async callbacks.
* It doesn't return a Promise.
* Use `for...of` or `Promise.all()` instead.

---

### 73. Difference between `for`, `for...of`, `forEach`, `map`, and `Promise.all()` with async.

| Method          | Async Support                |
| --------------- | ---------------------------- |
| `for`           | ✅ Sequential                 |
| `for...of`      | ✅ Sequential                 |
| `forEach`       | ❌ Doesn't wait               |
| `map`           | ⚠️ Returns array of Promises |
| `Promise.all()` | ✅ Parallel                   |

---

### 74. Explain the complete lifecycle.

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

**Answer**

Output

```text
Start
Fetching
End
Completed
```

Flow

```text
Call Stack

↓

fetchData()

↓

await

↓

Promise

↓

Microtask Queue

↓

Event Loop

↓

Call Stack

↓

Completed
```

---

### 75. If you were designing JavaScript, how would you implement `await` internally?

**Answer**

* Pause current async function
* Store remaining execution as a continuation
* Wait for Promise settlement
* Queue continuation in the Microtask Queue
* Event Loop moves it back to the Call Stack
* Resume execution from the paused point

---

# ⭐ Final Revision (1-Line Keywords)

* Async → Always returns Promise.
* Await → Pauses current async function.
* Promise → Pending → Fulfilled/Rejected.
* `Promise.all()` → All succeed.
* `Promise.allSettled()` → All results.
* `Promise.race()` → First settled.
* `Promise.any()` → First fulfilled.
* `fetch()` → Returns Response object.
* `response.json()` → Parses JSON.
* `try...catch` → Async error handling.
* `await` → Microtask Queue.
* Event Loop → Moves Microtasks to Call Stack.
* `forEach()` → Doesn't wait.
* `for...of` → Sequential async.
* `Promise.all()` → Parallel async.
* React → Async inside `useEffect` via an inner async function, not `useEffect(async () => {})`.



