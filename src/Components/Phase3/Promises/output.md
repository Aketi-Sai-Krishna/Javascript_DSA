# 📘 JavaScript Promises – Interview Questions & Answers (Part 1: Theory)

---

## 1. What is a Promise in JavaScript?

**Answer:**
A Promise is an object that represents the eventual completion (fulfillment) or failure (rejection) of an asynchronous operation.

---

## 2. Why were Promises introduced? What problems do they solve?

**Answer:**
Promises were introduced to solve **Callback Hell**, improve code readability, support chaining, and provide centralized error handling.

---

## 3. What are the three states of a Promise?

**Answer:**

* **Pending** – Initial state.
* **Fulfilled** – Operation completed successfully.
* **Rejected** – Operation failed.

---

## 4. What is the difference between `resolve()` and `reject()`?

**Answer:**

* `resolve()` → Marks the Promise as fulfilled.
* `reject()` → Marks the Promise as rejected.

---

## 5. Can a Promise change its state more than once?

**Answer:**
No. Once a Promise is fulfilled or rejected, its state becomes immutable and cannot change.

---

## 6. What is Promise Chaining?

**Answer:**
Promise chaining is executing multiple asynchronous operations sequentially using multiple `.then()` methods.

---

## 7. What happens if a `.then()` callback returns a normal value?

**Answer:**
The returned value is automatically wrapped in `Promise.resolve()` and passed to the next `.then()`.

---

## 8. What happens if a `.then()` callback returns another Promise?

**Answer:**
The next `.then()` waits until the returned Promise is settled before executing.

---

## 9. What is the purpose of `.catch()`?

**Answer:**
`.catch()` handles rejected Promises and errors thrown inside the Promise chain.

---

## 10. What is the purpose of `.finally()`?

**Answer:**
`.finally()` executes regardless of whether the Promise is fulfilled or rejected and is mainly used for cleanup tasks.

---

## 11. Explain the difference between Promise methods.

### Promise.all()

**Answer:**
Waits for all Promises to fulfill. Rejects immediately if any Promise rejects.

---

### Promise.race()

**Answer:**
Returns the first Promise that settles (fulfilled or rejected).

---

### Promise.any()

**Answer:**
Returns the first fulfilled Promise. Rejects only if all Promises reject.

---

### Promise.allSettled()

**Answer:**
Waits for all Promises and returns the status and result of each Promise.

---

## 12. What is the difference between `Promise.resolve()` and `new Promise()`?

**Answer:**

* `Promise.resolve()` creates an already fulfilled Promise.
* `new Promise()` creates a new Promise using an executor function.

---

## 13. Where are Promise callbacks executed?

**Answer:**
Promise callbacks (`.then()`, `.catch()`, `.finally()`) are executed from the **Microtask Queue**.

---

## 14. Why do Promise callbacks execute before `setTimeout()` callbacks?

**Answer:**
Because the Event Loop processes the **Microtask Queue** before the **Callback (Macrotask) Queue**.

---

## 15. What happens if no `.catch()` is attached to a rejected Promise?

**Answer:**
An **Unhandled Promise Rejection** occurs, which may log a warning or terminate the application depending on the environment.

---

# 📘 JavaScript Promises – Interview Questions & Answers (Part 2: Practical)

---

## Q1

```javascript
console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
```

### Answer

```
Start
End
Promise
```

---

## Q2

```javascript
console.log(1);

setTimeout(() => {
    console.log(2);
}, 0);

Promise.resolve().then(() => {
    console.log(3);
});

console.log(4);
```

### Answer

```
1
4
3
2
```

---

## Q3

```javascript
Promise.resolve(5)
.then((num) => {
    return num * 2;
})
.then(console.log);
```

### Answer

```
10
```

---

## Q4

```javascript
Promise.resolve(10)
.then((num) => {
    return Promise.resolve(num + 5);
})
.then(console.log);
```

### Answer

```
15
```

---

## Q5

```javascript
Promise.reject("Error")
.catch((err) => {
    console.log(err);
});
```

### Answer

```
Error
```

---

## Q6

```javascript
Promise.resolve("Hello")
.then((msg) => {
    console.log(msg);
    throw new Error("Oops");
})
.catch((err) => {
    console.log(err.message);
});
```

### Answer

```
Hello
Oops
```

---

## Q7

```javascript
Promise.resolve(1)
.then((num) => {
    console.log(num);
    return num + 1;
})
.then((num) => {
    console.log(num);
});
```

### Answer

```
1
2
```

---

## Q8

```javascript
Promise.resolve()
.then(() => {
    return Promise.resolve("JavaScript");
})
.then(console.log);
```

### Answer

```
JavaScript
```

---

## Q9

```javascript
new Promise((resolve) => {
    resolve("Done");
})
.finally(() => {
    console.log("Finally");
})
.then(console.log);
```

### Answer

```
Finally
Done
```

---

## Q10

```javascript
Promise.resolve("A")
.then((data) => {
    console.log(data);
    return "B";
})
.then((data) => {
    console.log(data);
    return "C";
})
.then(console.log);
```

### Answer

```
A
B
C
```

---

## Q11

```javascript
Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
])
.then(console.log);
```

### Answer

```
[1, 2, 3]
```

---

## Q12

```javascript
Promise.all([
    Promise.resolve(1),
    Promise.reject("Failed"),
    Promise.resolve(3)
])
.then(console.log)
.catch(console.log);
```

### Answer

```
Failed
```

---

## Q13

```javascript
Promise.race([
    new Promise(resolve =>
        setTimeout(() => resolve("First"), 100)
    ),
    new Promise(resolve =>
        setTimeout(() => resolve("Second"), 50)
    )
])
.then(console.log);
```

### Answer

```
Second
```

---

## Q14

```javascript
Promise.allSettled([
    Promise.resolve("Success"),
    Promise.reject("Error")
])
.then(console.log);
```

### Answer

```javascript
[
  {
    status: "fulfilled",
    value: "Success"
  },
  {
    status: "rejected",
    reason: "Error"
  }
]
```

---

## Q15

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve()
.then(() => {
    console.log("C");
})
.then(() => {
    console.log("D");
});

console.log("E");
```

### Answer

```
A
E
C
D
B
```

---

# 📘 JavaScript Promises – Interview Questions & Answers (Part 3: Bonus FAANG / Advanced)

These questions are commonly asked in **Product-Based Companies, Senior Frontend, and FAANG interviews**.

---

# 1. What is Promise Flattening?

### Answer

Promise Flattening is the automatic unwrapping of a Promise returned from a `.then()` callback. The next `.then()` waits for that Promise to settle instead of receiving a nested Promise.

Example:

```javascript
Promise.resolve(10)
.then(num => {
    return Promise.resolve(num * 2);
})
.then(console.log);
```

Output

```text
20
```

---

# 2. What is the Promise Resolution Procedure?

### Answer

The Promise Resolution Procedure determines how the value returned from a `.then()` callback affects the next Promise.

Rules:

* If a normal value is returned → Next Promise is fulfilled with that value.
* If a Promise is returned → Wait for it to settle.
* If an error is thrown → Next Promise is rejected.
* If a Thenable is returned → JavaScript adopts its state.

---

# 3. What is a Thenable?

### Answer

A Thenable is any object that has a `.then()` method. JavaScript treats it like a Promise.

Example

```javascript
const obj = {
    then(resolve) {
        resolve("Hello");
    }
};

Promise.resolve(obj).then(console.log);
```

Output

```text
Hello
```

---

# 4. How does the Event Loop execute Promise callbacks?

### Answer

Execution Order:

```text
Call Stack
      ↓
Microtask Queue (Promises)
      ↓
Callback Queue (setTimeout, setInterval)
```

Promise callbacks (`.then()`, `.catch()`, `.finally()`) are placed in the **Microtask Queue** and execute before callbacks in the **Callback Queue**.

---

# 5. Why are Promise callbacks called Microtasks?

### Answer

Because Promise callbacks are stored in the **Microtask Queue**, which has higher priority than the Callback (Macrotask) Queue. The Event Loop always processes all microtasks before moving to macrotasks.

---

# 6. What is the difference between `throw` and `Promise.reject()`?

### Answer

| `throw`                                              | `Promise.reject()`                           |
| ---------------------------------------------------- | -------------------------------------------- |
| Throws an exception                                  | Creates a rejected Promise                   |
| Used inside synchronous code or Promise callbacks    | Used to explicitly return a rejected Promise |
| Automatically converts to rejection inside `.then()` | Already returns a rejected Promise           |

Example:

```javascript
throw new Error("Error");
```

```javascript
return Promise.reject("Error");
```

Both are handled by `.catch()` in a Promise chain.

---

# 7. Can multiple `.then()` handlers be attached to the same Promise?

### Answer

Yes. Each `.then()` executes independently and receives the same resolved value.

Example

```javascript
const promise = Promise.resolve("JavaScript");

promise.then(console.log);
promise.then(console.log);
promise.then(console.log);
```

Output

```text
JavaScript
JavaScript
JavaScript
```

---

# 8. What happens when you return nothing from a `.then()` callback?

### Answer

If nothing is returned, JavaScript implicitly returns `undefined`, and the next `.then()` receives `undefined`.

Example

```javascript
Promise.resolve(10)
.then(() => {})
.then(console.log);
```

Output

```text
undefined
```

---

# 9. What happens when you return a rejected Promise from `.then()`?

### Answer

The Promise chain immediately becomes rejected, and control moves to the nearest `.catch()`.

Example

```javascript
Promise.resolve()
.then(() => {
    return Promise.reject("Failed");
})
.catch(console.log);
```

Output

```text
Failed
```

---

# 10. How would you implement a simple Promise class (Promise Polyfill)?

### Answer

A simplified Promise implementation should include:

* Store the Promise state (`pending`, `fulfilled`, `rejected`)
* Store the resolved value or rejection reason
* Implement `resolve()`
* Implement `reject()`
* Store `.then()` callbacks
* Store `.catch()` callbacks
* Execute callbacks after settlement

A very basic structure:

```javascript
class MyPromise {
    constructor(executor) {
        // state
        // value
        // resolve()
        // reject()
        // then()
        // catch()
    }
}
```

A complete Promise polyfill is a much larger implementation and is generally asked only in advanced JavaScript interviews.

---

# ⭐ Additional Advanced Interview Questions (Highly Asked)

## 11. What is the difference between Promise and async/await?

### Answer

* Promise uses `.then()`, `.catch()`, `.finally()`.
* `async/await` is syntactic sugar built on top of Promises.
* `async/await` makes asynchronous code look synchronous and improves readability.

---

## 12. Does creating a Promise start its execution immediately?

### Answer

Yes.

The executor function passed to `new Promise()` executes immediately when the Promise is created.

Example

```javascript
new Promise(() => {
    console.log("Executor");
});

console.log("End");
```

Output

```text
Executor
End
```

---

## 13. Can a Promise be resolved and rejected at the same time?

### Answer

No.

A Promise settles only once. After it is fulfilled or rejected, its state cannot change.

---

## 14. What is an Unhandled Promise Rejection?

### Answer

It occurs when a Promise is rejected and no `.catch()` handler is attached. Browsers and Node.js may log warnings or terminate the application depending on the environment.

---

## 15. Why is `Promise.all()` faster than sequential Promises?

### Answer

Because it executes all Promises in parallel instead of waiting for one Promise to complete before starting the next.

---

# 🎯 FAANG Quick Revision (One-Line Answers)

| Question                          | One-Line Answer                                               |
| --------------------------------- | ------------------------------------------------------------- |
| Promise Flattening                | Automatically unwraps returned Promises.                      |
| Thenable                          | Any object with a `.then()` method.                           |
| Promise Resolution Procedure      | Determines how returned values affect the next Promise.       |
| Microtask Queue                   | Queue where Promise callbacks execute.                        |
| Why Promises before `setTimeout`? | Microtasks have higher priority than macrotasks.              |
| `throw` vs `reject`               | `throw` throws an error; `reject` returns a rejected Promise. |
| Multiple `.then()`                | Yes, all receive the same resolved value.                     |
| Return nothing from `.then()`     | Next `.then()` receives `undefined`.                          |
| Return rejected Promise           | Control moves to the nearest `.catch()`.                      |
| Promise Polyfill                  | Custom implementation of Promise behavior.                    |

---
