
---

# 📘 JavaScript Promises — Part 1: Promise Fundamentals

# What is Asynchronous Programming?

## Definition (Interview)

> **Asynchronous programming** is a programming technique where long-running operations execute independently without blocking the execution of the remaining code.

JavaScript is **single-threaded**, meaning it can execute **only one task at a time**. However, operations like:

* API Calls
* Database Requests
* File Reading
* Timers
* Network Requests

take time to complete.

Instead of making JavaScript wait, these operations are handled asynchronously.

---

## Example

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Fetching Data...");
}, 2000);

console.log("End");
```

### Output

```
Start
End
Fetching Data...
```

JavaScript continues executing other code while waiting for the timer.

---

# Why Do We Need Asynchronous Programming?

Imagine an API request takes 5 seconds.

Without asynchronous programming:

```
Start

↓

Wait 5 Seconds

↓

Display Data

↓

Run Remaining Code
```

Everything waits.

With asynchronous programming:

```
Start

↓

API Starts

↓

Execute Remaining Code

↓

API Completes

↓

Process Result
```

Application remains responsive.

---

# Callbacks

Before Promises, asynchronous operations used **callbacks**.

## Definition

> A callback is a function passed as an argument to another function, which is executed after a task completes.

Example

```javascript
function fetchData(callback) {

    setTimeout(() => {
        callback("Data Loaded");
    }, 2000);

}

fetchData((data) => {
    console.log(data);
});
```

Output

```
Data Loaded
```

---

# Callback Hell

When multiple asynchronous operations depend on each other, callbacks become deeply nested.

Example

```javascript
login(() => {

    getUser(() => {

        getOrders(() => {

            getPayment(() => {

                console.log("Completed");

            });

        });

    });

});
```

Visualization

```
login

    ↓

getUser

        ↓

getOrders

            ↓

getPayment

                ↓

Completed
```

This pyramid structure is called **Callback Hell**.

---

## Problems with Callback Hell

* Difficult to read
* Difficult to debug
* Difficult to maintain
* Nested code
* Error handling becomes complex

Promises solve these problems.

---

# What is a Promise?

## Interview Definition

> A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

A Promise does **not** immediately return the final result.

Instead, it returns a placeholder that will eventually contain:

* Success value
* Error value

---

## Real-world Analogy

Ordering food online.

```
Order Food

↓

Restaurant Preparing

↓

Food Delivered

OR

Order Cancelled
```

While the restaurant prepares the food, you're free to do other things.

The Promise represents the waiting period.

---

# Promise Syntax

```javascript
const promise = new Promise((resolve, reject) => {

});
```

The constructor accepts one function called the **executor function**.

It receives two callback functions.

```
resolve()

reject()
```

---

# Promise States

Every Promise has one of three states.

```
            Promise
               │
      ┌────────┴─────────┐
    Pending          Settled
                     │
           ┌─────────┴─────────┐
      Fulfilled          Rejected
```

---

## 1. Pending

Initial state.

The operation has started.

No result is available.

Example

```javascript
const promise = new Promise(() => {

});
```

Still waiting.

---

## 2. Fulfilled

The operation completed successfully.

Example

```javascript
resolve("Success");
```

---

## 3. Rejected

Operation failed.

Example

```javascript
reject("Network Error");
```

---

## Important Property

A Promise can change state only once.

```
Pending

↓

Fulfilled
```

OR

```
Pending

↓

Rejected
```

Never

```
Fulfilled

↓

Rejected
```

Never

```
Rejected

↓

Fulfilled
```

This makes Promises **immutable** after settlement.

---

# resolve()

## Definition

Marks a Promise as successfully completed.

Syntax

```javascript
resolve(value);
```

Example

```javascript
const promise = new Promise((resolve) => {

    resolve("Login Successful");

});

promise.then(console.log);
```

Output

```
Login Successful
```

---

# reject()

## Definition

Marks a Promise as failed.

Syntax

```javascript
reject(error);
```

Example

```javascript
const promise = new Promise((resolve, reject) => {

    reject("Invalid Password");

});

promise.catch(console.log);
```

Output

```
Invalid Password
```

---

# Consuming Promises

Promises are consumed using:

* `.then()`
* `.catch()`
* `.finally()`

---

# then()

## Definition

Executes when the Promise is fulfilled.

Syntax

```javascript
promise.then(successCallback);
```

Example

```javascript
Promise.resolve("Welcome")
.then((data) => {
    console.log(data);
});
```

Output

```
Welcome
```

---

# catch()

## Definition

Handles rejected Promises.

Syntax

```javascript
promise.catch(errorCallback);
```

Example

```javascript
Promise.reject("Error")
.catch(console.log);
```

Output

```
Error
```

---

# finally()

## Definition

Executes regardless of whether the Promise is fulfilled or rejected.

Example

```javascript
Promise.resolve("Done")
.finally(() => {

    console.log("Completed");

});
```

Output

```
Completed
```

`finally()` is commonly used for:

* hiding loaders
* stopping spinners
* closing database connections
* cleanup tasks

---

# Promise Lifecycle

```
new Promise()

↓

Pending

↓

resolve()
        ↓
      then()

OR

reject()
        ↓
      catch()

↓

finally()
```

---

# Complete Example

```javascript
const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {

        resolve("Payment Successful");

    } else {

        reject("Payment Failed");

    }

});

promise
.then((result) => {

    console.log(result);

})
.catch((error) => {

    console.log(error);

})
.finally(() => {

    console.log("Transaction Completed");

});
```

Output

```
Payment Successful
Transaction Completed
```

---

# Why Promises Are Better Than Callbacks

| Callbacks                | Promises                   |
| ------------------------ | -------------------------- |
| Nested                   | Flat                       |
| Callback Hell            | No Callback Hell           |
| Difficult Error Handling | Centralized Error Handling |
| Difficult to Read        | Easy to Read               |
| Difficult Chaining       | Easy Chaining              |
| Less Maintainable        | More Maintainable          |

---

# 📘 JavaScript Promises — Part 2: Promise Chaining & Error Handling

# Promise Chaining

## Definition

> Promise chaining is the process of executing multiple asynchronous operations sequentially by returning values or Promises from one `.then()` to the next.

Instead of nesting Promises:

```
Promise

↓

then

↓

then

↓

then
```

---

## Basic Example

```javascript
Promise.resolve(5)

.then((num) => {

    return num * 2;

})

.then((num) => {

    console.log(num);

});
```

Output

```
10
```

The returned value automatically becomes the input of the next `.then()`.

---

# Returning Normal Values

```javascript
Promise.resolve(10)

.then((num) => {

    return num + 5;

})

.then(console.log);
```

Output

```
15
```

Whenever a normal value is returned:

```
return 15

↓

Automatically wrapped as

Promise.resolve(15)
```

---

# Returning Another Promise

Instead of a normal value:

```javascript
Promise.resolve(10)

.then((num) => {

    return Promise.resolve(num * 5);

})

.then(console.log);
```

Output

```
50
```

The next `.then()` waits until the returned Promise completes.

---

# Promise Flattening

Without flattening

```javascript
Promise.resolve()

.then(() => {

    return Promise.resolve(100);

});
```

JavaScript automatically unwraps the inner Promise.

Equivalent result

```
100
```

This automatic unwrapping is called **Promise Flattening**.

---

# Multiple then()

A Promise can have multiple `.then()` handlers.

Example

```javascript
const promise = Promise.resolve("Hello");

promise.then(console.log);

promise.then(console.log);

promise.then(console.log);
```

Output

```
Hello
Hello
Hello
```

Each `.then()` receives the same resolved value independently.

---

# Error Propagation

Errors automatically travel through the Promise chain until they reach the nearest `.catch()`.

Example

```javascript
Promise.resolve()

.then(() => {

    throw new Error("Network Failed");

})

.catch((err) => {

    console.log(err.message);

});
```

Output

```
Network Failed
```

---

# throw vs reject

## throw

```javascript
Promise.resolve()

.then(() => {

    throw new Error("Something Wrong");

});
```

Throws an exception inside the Promise chain.

---

## reject

```javascript
return Promise.reject("Failed");
```

Explicitly creates a rejected Promise.

Both eventually reach `.catch()`.

---

# Chaining After catch()

Example

```javascript
Promise.reject("Error")

.catch((err) => {

    console.log(err);

    return "Recovered";

})

.then(console.log);
```

Output

```
Error
Recovered
```

The chain continues after `.catch()` if it returns a value.

---

# Multiple catch()

```javascript
Promise.reject("Error")

.catch((err) => {

    console.log("First");

    throw err;

})

.catch(() => {

    console.log("Second");

});
```

Output

```
First
Second
```

The first `.catch()` rethrows the error, allowing the next `.catch()` to handle it.

---

# finally() Behavior

`finally()` does not receive the resolved value or rejection reason.

```javascript
Promise.resolve("Done")

.finally(() => {

    console.log("Cleanup");

})

.then(console.log);
```

Output

```
Cleanup
Done
```

---

# What Happens if finally() Throws?

```javascript
Promise.resolve("Done")

.finally(() => {

    throw new Error("Cleanup Failed");

})

.catch((err) => {

    console.log(err.message);

});
```

Output

```
Cleanup Failed
```

A thrown error inside `finally()` replaces the original outcome.

---

# Promise Chain Flow

```
Promise

↓

then()

↓

then()

↓

throw Error

↓

catch()

↓

return Value

↓

then()

↓

finally()
```

---

# Real-world Example

```javascript
login()

.then(getUser)

.then(getOrders)

.then(processPayment)

.then(showDashboard)

.catch(showError)

.finally(hideLoader);
```

Execution Flow

```
Login

↓

Get User

↓

Get Orders

↓

Process Payment

↓

Dashboard

↓

Hide Loader
```

---

# Best Practices

### ✅ Always return Promises inside `.then()`

```javascript
return fetchData();
```

---

### ✅ Handle errors using `.catch()`

```javascript
promise.catch(handleError);
```

---

### ✅ Use `finally()` only for cleanup

Examples:

* Hide Loader
* Close Database
* Stop Spinner
* Remove Event Listener

---

### ❌ Avoid Nested Promises

Bad

```javascript
login().then(() => {

    getUser().then(() => {

        getPosts();

    });

});
```

Good

```javascript
login()

.then(getUser)

.then(getPosts);
```

---

### ❌ Don't Ignore Rejected Promises

Always attach `.catch()` or handle the rejection later to avoid unhandled promise rejections.

---

Excellent! These are the remaining notes that complete the **Promise** topic (excluding `async`/`await`).

---

# 📘 JavaScript Promises — Part 3: Promise Static Methods

---

# What are Promise Static Methods?

## Interview Definition

> **Promise static methods** are utility methods provided by the `Promise` object to create, combine, or manage multiple Promises.

Unlike `.then()` or `.catch()`, these methods are called directly on the **Promise** class.

```javascript
Promise.resolve()
Promise.reject()
Promise.all()
Promise.race()
Promise.any()
Promise.allSettled()
```

---

# Promise.resolve()

## Definition

> `Promise.resolve()` creates an already **fulfilled Promise**.

### Syntax

```javascript
Promise.resolve(value);
```

### Example

```javascript
Promise.resolve("JavaScript")
.then(console.log);
```

### Output

```
JavaScript
```

---

### Equivalent Code

```javascript
new Promise((resolve) => {
    resolve("JavaScript");
});
```

---

### Uses

* Returning successful results
* Testing
* Wrapping synchronous values inside Promises

---

# Promise.reject()

## Definition

> `Promise.reject()` creates an already **rejected Promise**.

### Syntax

```javascript
Promise.reject(reason);
```

### Example

```javascript
Promise.reject("Network Error")
.catch(console.log);
```

### Output

```
Network Error
```

---

### Equivalent

```javascript
new Promise((resolve, reject) => {
    reject("Network Error");
});
```

---

# Promise.all()

## Definition (Interview)

> `Promise.all()` waits until **all Promises are fulfilled**. If **any Promise rejects**, the entire Promise rejects immediately.

---

### Syntax

```javascript
Promise.all([promise1, promise2, promise3]);
```

---

### Example

```javascript
Promise.all([
    Promise.resolve(10),
    Promise.resolve(20),
    Promise.resolve(30)
])
.then(console.log);
```

### Output

```javascript
[10,20,30]
```

---

## If One Promise Rejects

```javascript
Promise.all([
    Promise.resolve(10),
    Promise.reject("Failed"),
    Promise.resolve(30)
])
.catch(console.log);
```

### Output

```
Failed
```

---

### Characteristics

* Executes Promises in parallel
* Returns array of values
* Order of results matches input order
* Rejects immediately on first failure

---

### Real-world Example

```javascript
Promise.all([
    fetchUsers(),
    fetchPosts(),
    fetchComments()
]);
```

All APIs execute simultaneously.

---

# Promise.race()

## Definition

> Returns the result of **the first Promise that settles**, whether fulfilled or rejected.

---

### Example

```javascript
Promise.race([
    new Promise(resolve =>
        setTimeout(() => resolve("Fast"),100)
    ),

    new Promise(resolve =>
        setTimeout(() => resolve("Slow"),500)
    )
])
.then(console.log);
```

### Output

```
Fast
```

---

### Characteristics

* Doesn't wait for all Promises
* Returns the first settled Promise
* Useful for timeouts

---

### Timeout Example

```javascript
Promise.race([
    fetchData(),
    timeout(5000)
]);
```

Whichever finishes first wins.

---

# Promise.any()

## Definition

> Returns the **first fulfilled Promise**.

Rejected Promises are ignored.

---

### Example

```javascript
Promise.any([
    Promise.reject("A"),
    Promise.reject("B"),
    Promise.resolve("Success")
])
.then(console.log);
```

### Output

```
Success
```

---

### If All Reject

```javascript
Promise.any([
    Promise.reject("A"),
    Promise.reject("B")
])
.catch(console.log);
```

Returns an **AggregateError**.

---

### Characteristics

* Ignores rejected Promises
* Waits until one fulfills
* Fails only if every Promise rejects

---

# Promise.allSettled()

## Definition

> Waits for every Promise to complete regardless of success or failure.

---

### Example

```javascript
Promise.allSettled([
    Promise.resolve("User"),
    Promise.reject("Error")
])
.then(console.log);
```

### Output

```javascript
[
  {
    status: "fulfilled",
    value: "User"
  },

  {
    status: "rejected",
    reason: "Error"
  }
]
```

---

### Characteristics

* Never rejects
* Always returns every result
* Useful for dashboards
* Useful for batch processing

---

# Comparison Table

| Method             | Waits for All | Rejects Early      | Return Value            |
| ------------------ | ------------- | ------------------ | ----------------------- |
| Promise.all        | ✅             | ✅                  | Array of values         |
| Promise.race       | ❌             | First settled      | First result            |
| Promise.any        | ❌             | Only if all reject | First fulfilled         |
| Promise.allSettled | ✅             | ❌                  | Array of result objects |

---

# Which Method Should You Use?

| Situation             | Method             |
| --------------------- | ------------------ |
| All APIs must succeed | Promise.all        |
| Fastest response wins | Promise.race       |
| Ignore failures       | Promise.any        |
| Need every result     | Promise.allSettled |

---

# Summary

```
Promise.resolve()

↓

Already Fulfilled Promise


Promise.reject()

↓

Already Rejected Promise


Promise.all()

↓

Wait All

↓

Fail Fast


Promise.race()

↓

First Finished Wins


Promise.any()

↓

First Success Wins


Promise.allSettled()

↓

Wait Everything

↓

Return Every Result
```

---

# 📘 JavaScript Promises — Part 4: Promises & Event Loop

---

# Promise and the Event Loop

Promises work closely with the **JavaScript Event Loop**.

To understand Promises completely, you must understand where Promise callbacks execute.

---

# Execution Flow

```
JavaScript Code

↓

Call Stack

↓

Web APIs

↓

Microtask Queue

↓

Callback Queue

↓

Event Loop

↓

Call Stack
```

---

# Call Stack

The Call Stack executes synchronous JavaScript.

Example

```javascript
console.log("A");

console.log("B");
```

Output

```
A

B
```

---

# Web APIs

Operations like

* setTimeout
* fetch
* DOM Events

are handled outside JavaScript by the browser.

---

# Callback Queue (Macrotask Queue)

Stores callbacks like

```
setTimeout

setInterval

DOM Events

MessageChannel
```

---

# Microtask Queue

Stores

```
Promise.then()

Promise.catch()

Promise.finally()

queueMicrotask()

MutationObserver
```

---

# Priority

```
Call Stack

↓

Microtask Queue

↓

Callback Queue
```

Microtasks always execute before callbacks.

---

# Example 1

```javascript
console.log(1);

Promise.resolve().then(() => {
    console.log(2);
});

console.log(3);
```

Output

```
1

3

2
```

---

### Execution

```
1 printed

↓

Promise callback

↓

Microtask Queue

↓

3 printed

↓

Call Stack Empty

↓

Execute Microtask

↓

2 printed
```

---

# Example 2

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timer");
},0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
```

Output

```
Start

End

Promise

Timer
```

---

### Why?

```
setTimeout

↓

Callback Queue


Promise

↓

Microtask Queue


Microtask executes first.
```

---

# Example 3

```javascript
console.log("A");

Promise.resolve()

.then(() => {

    console.log("B");

})

.then(() => {

    console.log("C");

});

setTimeout(() => {

    console.log("D");

},0);

console.log("E");
```

Output

```
A

E

B

C

D
```

---

# Why?

```
Call Stack

↓

Microtask Queue

↓

Callback Queue
```

---

# Multiple Promises

```javascript
Promise.resolve().then(() => console.log(1));

Promise.resolve().then(() => console.log(2));

Promise.resolve().then(() => console.log(3));
```

Output

```
1

2

3
```

Microtasks follow FIFO order.

---

# Nested Promise

```javascript
Promise.resolve()

.then(() => {

    console.log(1);

    Promise.resolve().then(() => {

        console.log(2);

    });

})

.then(() => {

    console.log(3);

});
```

Output

```
1

2

3
```

Reason:

* First `.then()` runs.
* It queues another microtask (`2`).
* The next `.then()` in the chain (`3`) is also queued as a microtask.
* Since the nested `Promise.resolve().then(...)` is queued first during execution of the first callback, the order becomes `1 → 2 → 3`.

---

# Promise Execution Lifecycle

```
Create Promise

↓

Executor Function Executes Immediately

↓

Pending

↓

resolve()

or

reject()

↓

Microtask Queue

↓

then()

↓

catch()

↓

finally()
```

---

# Important Interview Facts

### Executor function runs immediately

```javascript
new Promise(() => {

    console.log("Executor");

});

console.log("End");
```

Output

```
Executor

End
```

---

### `resolve()` does not immediately execute `.then()`

`.then()` callbacks are always queued as microtasks.

---

### A settled Promise never changes

```
Pending

↓

Fulfilled

×

Rejected
```

Only one transition is possible.

---

### Multiple `.then()` handlers

```javascript
const p = Promise.resolve("JS");

p.then(console.log);

p.then(console.log);
```

Output

```
JS

JS
```

Each handler executes independently.

---

# Common Mistakes

### ❌ Forgetting `return`

```javascript
Promise.resolve(10)

.then((num)=>{

    Promise.resolve(num*2);

})

.then(console.log);
```

Output

```
undefined
```

Because the inner Promise wasn't returned.

---

### ✅ Correct

```javascript
Promise.resolve(10)

.then((num)=>{

    return Promise.resolve(num*2);

})

.then(console.log);
```

Output

```
20
```

---

### ❌ Ignoring Errors

```javascript
Promise.reject("Error");
```

This can lead to an **Unhandled Promise Rejection** warning or error.

---

### ✅ Correct

```javascript
Promise.reject("Error")

.catch(console.log);
```

---

# Best Practices

* Always return Promises from `.then()` when chaining.
* Always handle rejections with `.catch()`.
* Use `.finally()` only for cleanup.
* Use `Promise.all()` for independent parallel operations.
* Use `Promise.allSettled()` when every result matters.
* Use `Promise.race()` for implementing timeouts.
* Use `Promise.any()` when you only need the first successful result.
* Prefer `async`/`await` for readable asynchronous code while understanding that it is built on top of Promises.

---

# Final Promise Flow

```
Asynchronous Task

↓

Create Promise

↓

Pending

↓

resolve() / reject()

↓

Microtask Queue

↓

then()

↓

catch()

↓

finally()

↓

Promise Completed
```

---

## ✅ Promise Topic Completion

After Parts **1–4**, you've covered:

* Asynchronous Programming
* Callbacks & Callback Hell
* Promise Fundamentals
* Promise Lifecycle & States
* `resolve()` / `reject()`
* `.then()`, `.catch()`, `.finally()`
* Promise Chaining
* Error Handling
* `throw` vs `reject`
* `Promise.resolve()` / `Promise.reject()`
* `Promise.all()`
* `Promise.race()`
* `Promise.any()`
* `Promise.allSettled()`
* Promises & Event Loop
* Microtask Queue
* Common Mistakes
* Best Practices

This is a **complete Promise reference** suitable for frontend interviews. The next logical topic is **`async` / `await`**, which builds directly on these concepts.


## Key Takeaways

* A Promise is an object representing the eventual result of an asynchronous operation.
* A Promise starts in the **Pending** state and settles as **Fulfilled** or **Rejected**.
* `resolve()` fulfills a Promise, while `reject()` rejects it.
* `.then()` handles fulfillment, `.catch()` handles rejection, and `.finally()` runs regardless of the outcome.
* Returning a value from `.then()` passes it to the next `.then()`.
* Returning a Promise from `.then()` causes the chain to wait for it to settle.
* Errors propagate automatically until a matching `.catch()` is found.
* `finally()` is intended for cleanup and normally does not modify the Promise's value unless it throws or returns a rejected Promise.

These two parts cover the **core Promise concepts** required before moving to **Promise static methods (`Promise.all`, `Promise.race`, `Promise.any`, `Promise.allSettled`)** and the **Event Loop interaction**, which we'll cover in Parts 3 and 4.
