## # Async / Await (Interview Notes)

---

# 1. What is Asynchronous Programming?

Asynchronous programming allows JavaScript to execute **time-consuming tasks** without blocking the execution of the remaining code.

Instead of waiting for a task (API call, timer, file reading, etc.) to finish, JavaScript continues executing other code. Once the asynchronous task is complete, the Event Loop brings it back for execution.

### Examples of Asynchronous Tasks

* API Calls (`fetch()`)
* Database Requests
* `setTimeout()`
* `setInterval()`
* Reading Files
* Uploading/Downloading Files

---

# 2. Why Do We Need Asynchronous Programming?

Imagine ordering a pizza.

### Synchronous

```text
Order Pizza
↓

Wait 5 Minutes
↓

Get Pizza
↓

Do Homework
```

The program wastes time waiting.

### Asynchronous

```text
Order Pizza
↓

Do Homework
↓

Watch TV
↓

Pizza Ready
↓

Eat Pizza
```

JavaScript continues doing useful work while waiting.

---

# 3. What is a Promise?

A **Promise** is an object that represents the **eventual completion (fulfilled)** or **failure (rejected)** of an asynchronous operation.

A Promise has three states:

```text
Pending

↓

Fulfilled (Resolved)

OR

Rejected
```

---

# 4. Problems with Promise Chaining

Without `async/await`, asynchronous code is usually written using `.then()`.

```js
fetch("/users")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
```

Although functional, long chains of `.then()` reduce readability.

---

# 5. What is async?

`async` is a keyword used before a function to declare it as an asynchronous function.

An **async function always returns a Promise**, even if it returns a normal value.

### Syntax

```js
async function greet() {

}
```

or

```js
const greet = async () => {

};
```

---

# 6. async Automatically Returns a Promise

```js
async function greet() {
    return "Hello";
}

console.log(greet());
```

### Output

```text
Promise { "Hello" }
```

Internally,

```js
async function greet() {
    return Promise.resolve("Hello");
}
```

---

# 7. What is await?

`await` is a keyword that can only be used inside an `async` function.

It pauses **only the current async function** until the Promise is settled (fulfilled or rejected).

While waiting, JavaScript continues executing other code.

### Syntax

```js
const result = await promise;
```

---

# 8. async + await Example

```js
function foodReady() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Pizza Ready");
        }, 2000);
    });
}

async function eatPizza() {
    console.log("Ordering");

    const food = await foodReady();

    console.log(food);

    console.log("Eating");
}

eatPizza();
```

### Output

```text
Ordering

(wait 2 seconds)

Pizza Ready

Eating
```

---

# 9. Execution Flow

```text
eatPizza()

↓

Ordering

↓

foodReady()

↓

Promise Pending

↓

await pauses ONLY eatPizza()

↓

JavaScript continues executing remaining code

↓

Promise Resolved

↓

Continuation goes to Microtask Queue

↓

Event Loop pushes it back to Call Stack

↓

Pizza Ready

↓

Eating
```

---

# 10. async Does NOT Block JavaScript

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

### Output

```text
Start

Inside

End

Done
```

Only the async function pauses.

JavaScript continues executing other synchronous code.

---

# 11. await Rules

### Correct

```js
async function load() {
    const data = await fetch(API);
}
```

### Incorrect

```js
const data = await fetch(API);
```

`await` can only be used inside an async function (except top-level await in ES modules).

---

# 12. async Throws Rejected Promises

```js
async function login() {
    throw new Error("Login Failed");
}
```

Internally

```js
return Promise.reject(new Error("Login Failed"));
```

---

# 13. Error Handling

Always use `try...catch` when awaiting a Promise that may fail.

```js
async function getData() {
    try {
        const response = await fetch(API);
        const data = await response.json();

        console.log(data);
    }
    catch(error) {
        console.log(error);
    }
    finally {
        console.log("Finished");
    }
}
```

---

# 14. Sequential Execution

```js
await task1();

await task2();

await task3();
```

Execution

```text
Task1

↓

Task2

↓

Task3
```

Each task starts after the previous one finishes.

---

# 15. Parallel Execution

```js
await Promise.all([
    task1(),
    task2(),
    task3()
]);
```

Execution

```text
Task1 ─┐

Task2 ─┼── Running Together

Task3 ─┘

↓

All Completed
```

Use this when tasks are **independent**.

---

# 16. Promise Combinators

## Promise.all()

Returns a new Promise.

* Runs multiple Promises in parallel.
* Resolves only if **all** Promises resolve.
* Rejects immediately if **any one** Promise rejects.

```js
await Promise.all([
    promise1,
    promise2,
    promise3
]);
```

---

## Promise.allSettled()

Returns a new Promise.

* Waits until **every Promise** is settled.
* Returns both fulfilled and rejected results.

```js
await Promise.allSettled([
    promise1,
    promise2
]);
```

---

## Promise.race()

Returns a new Promise.

Whichever Promise settles first determines the result.

* First fulfilled → resolves
* First rejected → rejects

---

## Promise.any()

Returns a new Promise.

Returns the **first fulfilled Promise**.

Rejected Promises are ignored unless **all Promises reject**.

---

# 17. Event Loop with async/await

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

### Output

```text
1

2

4

3
```

### Flow

```text
Call Stack

↓

console.log(1)

↓

run()

↓

console.log(2)

↓

await Promise.resolve()

↓

Promise resolves

↓

Continuation added to Microtask Queue

↓

console.log(4)

↓

Call Stack becomes empty

↓

Microtask Queue executes

↓

console.log(3)
```

---

# 18. Fetch API with async/await

```js
const response = await fetch(API);

const data = await response.json();
```

### response

The HTTP **Response object** returned by `fetch()`.

Contains metadata like:

* status
* ok
* headers
* url

### response.json()

Reads the response body and converts it into a JavaScript object.

---

# 19. Real React API Flow

```text
Button Click

↓

API Request

↓

Loading State

↓

Response Received

↓

Update State

↓

Render UI

↓

Handle Errors (if any)
```

---

# 20. Common Interview Mistakes

### Mistake 1

```js
await outside async function
```

❌ Invalid

---

### Mistake 2

```js
async function test() {
    return 10;
}
```

Output is

```text
Promise {10}
```

not

```text
10
```

---

### Mistake 3

Thinking `await` blocks JavaScript.

❌ Wrong

It pauses **only the current async function**.

---

### Mistake 4

Thinking `async` makes code synchronous.

❌ Wrong

It makes asynchronous code **look synchronous**, but it still executes asynchronously.

---

# 21. Real Example

```js
function orderPizza() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("🍕 Pizza Ready!");
        }, 3000);
    });
}

async function dinner() {
    console.log("Ordering Pizza");

    const pizza = await orderPizza();

    console.log(pizza);

    console.log("Let's Eat");
}

console.log("Start");

dinner();

console.log("Doing Homework...");
```

### Output

```text
Start

Ordering Pizza

Doing Homework...

(wait 3 seconds)

🍕 Pizza Ready!

Let's Eat
```

---

# 22. Interview Definitions

## What is Asynchronous Programming?

Asynchronous programming allows JavaScript to execute time-consuming tasks without blocking the execution of other code.

---

## What is a Promise?

A Promise is an object that represents the eventual completion (fulfilled) or failure (rejected) of an asynchronous operation.

---

## What is async?

`async` is a keyword used to declare an asynchronous function. An async function always returns a Promise.

---

## What is await?

`await` is a keyword used inside an async function to pause **only that function** until the Promise settles.

---

## Why do we use async/await?

* Improves readability
* Eliminates long `.then()` chains
* Simplifies error handling using `try...catch`
* Makes asynchronous code easier to understand and maintain

---

# 23. Quick Revision

```text
Async Programming
        │
        ▼
Time-consuming task
        │
        ▼
Promise Created
        │
        ▼
Pending
        │
 ┌──────┴────────┐
 ▼               ▼
Resolved      Rejected
        │
        ▼
await pauses ONLY current async function
        │
        ▼
JavaScript continues executing other code
        │
        ▼
Promise settles
        │
        ▼
Continuation enters Microtask Queue
        │
        ▼
Event Loop
        │
        ▼
Call Stack
        │
        ▼
Remaining async code executes
```

---

# 24. Key Points to Remember

* `async` always returns a Promise.
* `await` can only be used inside an `async` function (except top-level `await` in ES modules).
* `await` pauses **only the current async function**, not the entire JavaScript program.
* JavaScript continues executing other synchronous code while waiting.
* After a Promise settles, the remaining code after `await` is placed in the **Microtask Queue**.
* `try...catch` is the recommended way to handle errors with `async/await`.
* Use `Promise.all()` for independent tasks that can run in parallel.
* `async/await` does **not** make code synchronous; it makes asynchronous code **look synchronous** while preserving JavaScript's non-blocking behavior.
