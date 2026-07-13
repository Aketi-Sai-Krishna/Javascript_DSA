# JavaScript Interview Notes — Event Loop, Callback Queue & Microtask Queue

> **Level:** Beginner → Advanced → Interview Ready
> **Purpose:** Revision Notes + GitHub Documentation

---

# Table of Contents

1. Introduction
2. JavaScript Runtime
3. Call Stack
4. Synchronous Execution
5. Asynchronous Execution
6. Browser Web APIs
7. Callback Queue (Macrotask Queue)
8. Microtask Queue
9. Event Loop
10. Execution Flow
11. Priority Order
12. `setTimeout()`
13. Promises
14. `queueMicrotask()`
15. `async/await`
16. Browser Rendering
17. Microtask Starvation
18. Common Interview Questions
19. Interview Tips
20. Summary

---

# 1. Introduction

JavaScript is a **single-threaded, synchronous** programming language.

This means:

* It executes **one task at a time**.
* It has **one Call Stack**.
* It cannot execute two pieces of JavaScript simultaneously on the same thread.

Example:

```javascript
console.log("A");
console.log("B");
console.log("C");
```

Output

```text
A
B
C
```

Everything executes one after another.

---

## Problem

How does JavaScript execute asynchronous operations like:

* `setTimeout()`
* `fetch()`
* DOM Events
* Promises

without blocking the main thread?

The answer is:

> **Event Loop + Browser Web APIs**

---

# 2. JavaScript Runtime

The JavaScript engine alone contains:

* Call Stack
* Heap Memory

The browser runtime provides additional components.

```text
Browser Runtime

│
├── JavaScript Engine
│      ├── Call Stack
│      └── Heap
│
├── Web APIs
│
├── Microtask Queue
│
├── Callback Queue (Macrotask Queue)
│
└── Event Loop
```

---

# 3. Call Stack

The **Call Stack** is a stack data structure that manages function execution.

Whenever a function is called:

* It is **pushed** onto the stack.
* When execution completes:

  * It is **popped** from the stack.

Example

```javascript
function one() {
    two();
}

function two() {
    console.log("Hello");
}

one();
```

Stack Flow

```text
Global

↓

one()

↓

two()

↓

console.log()

↓

Pop

↓

Pop

↓

Pop
```

---

# 4. Synchronous Execution

Synchronous code executes **line by line**.

The next statement waits until the current statement finishes.

Example

```javascript
console.log(1);
console.log(2);
console.log(3);
```

Output

```text
1
2
3
```

---

# 5. Asynchronous Execution

Asynchronous execution allows JavaScript to start long-running operations **without blocking** the Call Stack.

Examples:

* Timers
* Network Requests
* User Events
* File Operations (Node.js)

Example

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Done");
}, 2000);

console.log("End");
```

Output

```text
Start
End
Done
```

JavaScript does **not** wait 2 seconds.

---

# 6. Browser Web APIs

JavaScript does not implement browser features itself.

The browser provides APIs such as:

* `setTimeout()`
* `setInterval()`
* DOM Events
* `fetch()`
* Geolocation
* WebSocket
* Storage APIs

Example

```javascript
setTimeout(() => {
    console.log("Hello");
}, 3000);
```

Flow

```text
Call Stack

↓

Browser Web API

↓

Timer Starts

↓

Callback Queue
```

---

# 7. Callback Queue (Macrotask Queue)

Also called:

* Task Queue
* Macrotask Queue

It stores callbacks from asynchronous browser APIs.

Examples:

* `setTimeout()`
* `setInterval()`
* DOM Events
* `postMessage()`
* `MessageChannel`

Example

```javascript
setTimeout(() => {
    console.log("Hello");
}, 1000);
```

After the timer finishes:

```text
Callback Queue

↓

() => console.log("Hello")
```

It waits until the Event Loop moves it to the Call Stack.

---

# 8. Microtask Queue

The **Microtask Queue** stores **high-priority asynchronous callbacks**.

Examples:

* `Promise.then()`
* `Promise.catch()`
* `Promise.finally()`
* `queueMicrotask()`
* `MutationObserver`
* Continuation after `await`

Example

```javascript
Promise.resolve().then(() => {
    console.log("Promise");
});
```

Flow

```text
Promise Resolved

↓

Microtask Queue

↓

Event Loop

↓

Call Stack
```

---

# 9. Event Loop

## Definition

The Event Loop continuously monitors the Call Stack.

When the Call Stack becomes empty:

1. Execute **all** Microtasks.
2. Execute **one** Callback (Macrotask).
3. Repeat.

---

## Workflow

```text
Call Stack Empty?

↓

No

↓

Wait

↓

Yes

↓

Execute ALL Microtasks

↓

Microtasks Remaining?

↓

Yes

↓

Continue Executing

↓

No

↓

Execute ONE Macrotask

↓

Repeat
```

---

# 10. Complete Execution Flow

```text
Script Starts

↓

Global Execution Context Created

↓

Execute Synchronous Code

↓

Encounter Async APIs

↓

Browser Web APIs

↓

Async Task Completes

↓

Promise → Microtask Queue

OR

Timer/Event → Callback Queue

↓

Call Stack Empty

↓

Event Loop

↓

Execute ALL Microtasks

↓

Browser May Render UI

↓

Execute ONE Callback Queue Task

↓

Repeat
```

---

# 11. Priority Order

Execution Priority

```text
1. Current Call Stack

↓

2. Microtask Queue
   - Promise.then()
   - Promise.catch()
   - Promise.finally()
   - queueMicrotask()
   - await continuation
   - MutationObserver

↓

3. Callback (Macrotask) Queue
   - setTimeout()
   - setInterval()
   - DOM Events
   - postMessage()
   - MessageChannel

↓

4. Browser Rendering (when appropriate)

↓

Repeat
```

---

# 12. `setTimeout()`

Lifecycle

```text
setTimeout()

↓

Browser Starts Timer

↓

Timer Completes

↓

Callback Queue

↓

Event Loop

↓

Call Stack

↓

Execute Callback
```

Example

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");
```

Output

```text
A
C
B
```

---

# 13. Promise

Promise callbacks always enter the **Microtask Queue**.

Example

```javascript
console.log(1);

Promise.resolve().then(() => {
    console.log(2);
});

console.log(3);
```

Output

```text
1
3
2
```

---

# 14. `queueMicrotask()`

Adds a callback directly to the Microtask Queue.

Example

```javascript
console.log("Start");

queueMicrotask(() => {
    console.log("Microtask");
});

console.log("End");
```

Output

```text
Start
End
Microtask
```

---

# 15. `async/await`

`await` pauses the execution of the current `async` function.

The remaining code after `await` is scheduled as a **Microtask**.

Example

```javascript
async function test() {
    console.log("A");

    await Promise.resolve();

    console.log("B");
}

test();

console.log("C");
```

Output

```text
A
C
B
```

---

# 16. Browser Rendering

The browser typically updates the UI:

* After the Call Stack is empty.
* After all Microtasks are processed.
* Before the next Macrotask begins.

Simplified Flow

```text
Call Stack

↓

All Microtasks

↓

Browser Rendering

↓

Next Macrotask
```

---

# 17. Microtask Starvation

Microtask Starvation occurs when new Microtasks keep being added continuously.

Since the Event Loop must finish **all** Microtasks before processing Macrotasks, the Callback Queue and browser rendering can be delayed indefinitely.

Example

```javascript
function repeat() {
    Promise.resolve().then(repeat);
}

repeat();

setTimeout(() => {
    console.log("Timer");
}, 0);
```

The timer never executes because the Microtask Queue never becomes empty.

---

# 18. Common Interview Questions

### What is the Event Loop?

The Event Loop continuously checks whether the Call Stack is empty. If it is, it executes all Microtasks first, then one Macrotask, and repeats the process.

---

### Why is JavaScript single-threaded?

JavaScript uses one Call Stack and executes one task at a time to simplify execution and avoid complex synchronization issues.

---

### Why do Promise callbacks execute before `setTimeout()`?

Because Promise callbacks are placed in the **Microtask Queue**, which has higher priority than the Callback Queue.

---

### Does `setTimeout(fn, 0)` execute immediately?

No.

It executes only after:

* Current synchronous code finishes.
* The Call Stack is empty.
* All pending Microtasks have completed.

---

### Who provides `setTimeout()`?

The **Browser Web APIs** (or the runtime environment, such as Node.js in server-side JavaScript).

---

### What is the difference between `setTimeout()` and `queueMicrotask()`?

| `setTimeout()`                | `queueMicrotask()`                          |
| ----------------------------- | ------------------------------------------- |
| Schedules a Macrotask         | Schedules a Microtask                       |
| Uses Callback Queue           | Uses Microtask Queue                        |
| Executes after all Microtasks | Executes before any Macrotask               |
| Can specify a delay           | Executes as soon as the Call Stack is empty |

---

# 19. Common Mistakes

❌ **`setTimeout(fn, 0)` executes immediately.**

✅ No. It waits until:

* the Call Stack is empty, and
* all Microtasks have finished.

---

❌ **Promises execute before synchronous code.**

✅ No.

Execution order:

1. Synchronous Code
2. Microtasks
3. Macrotasks

---

❌ **The Event Loop moves callbacks while the Call Stack is busy.**

✅ Incorrect.

The Event Loop only moves tasks when the Call Stack is empty.

---

❌ **Microtasks and Macrotasks have the same priority.**

✅ Incorrect.

Microtasks always have higher priority.

---

# 20. Summary

```text
JavaScript is single-threaded.

↓

Call Stack executes synchronous code.

↓

Async operations are handled by Browser Web APIs.

↓

Completed Promise callbacks go to the Microtask Queue.

↓

Completed timer/event callbacks go to the Callback Queue.

↓

Event Loop waits for the Call Stack to become empty.

↓

Executes ALL Microtasks.

↓

Executes ONE Macrotask.

↓

Browser may render the UI.

↓

Repeats until all work is complete.
```

---

# ⭐ Interview Cheat Sheet (1-Minute Revision)

```text
✔ JavaScript is single-threaded.

✔ Call Stack executes synchronous code.

✔ Browser Web APIs handle asynchronous operations.

✔ Promise callbacks → Microtask Queue.

✔ setTimeout callbacks → Callback (Macrotask) Queue.

✔ Event Loop waits until the Call Stack is empty.

✔ Event Loop executes:
   1. All Microtasks
   2. One Macrotask
   3. Repeat

✔ Priority:
Call Stack > Microtask Queue > Callback Queue

✔ setTimeout(fn, 0) does NOT execute immediately.

✔ await resumes execution as a Microtask.

✔ Microtask Starvation occurs when microtasks continuously schedule new microtasks, preventing macrotasks and rendering.

✔ Golden Rule:
Synchronous Code → All Microtasks → One Macrotask → Repeat.
```

---

