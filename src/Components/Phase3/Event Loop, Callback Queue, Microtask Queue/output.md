# JavaScript Event Loop Interview Answers — Part 1 (Questions 1–15)

## Question 1. What is the Event Loop?

**Answer:**
The Event Loop continuously checks whether the Call Stack is empty. When it is empty, it executes all Microtasks first, then one Macrotask, and repeats the process.

---

## Question 2. Why does JavaScript need an Event Loop?

**Answer:**
JavaScript is single-threaded. The Event Loop enables asynchronous operations to execute without blocking the main thread.

---

## Question 3. Is JavaScript single-threaded or multi-threaded?

**Answer:**
JavaScript is a **single-threaded** language.

---

## Question 4. What is synchronous execution?

**Answer:**
Synchronous execution runs code line by line, with each statement waiting for the previous one to finish.

---

## Question 5. What is asynchronous execution?

**Answer:**
Asynchronous execution allows long-running operations to execute without blocking the main thread. Their callbacks execute later when they are ready.

---

## Question 6. What is the Call Stack?

**Answer:**
The Call Stack is a stack data structure that manages function execution. Functions are pushed onto the stack when called and popped off when they finish.

---

## Question 7. When does the Event Loop execute callbacks?

**Answer:**
The Event Loop executes callbacks only after the Call Stack is empty. It processes all Microtasks first, then one Macrotask.

---

## Question 8. What is the Callback Queue?

**Answer:**
The Callback Queue (Macrotask Queue) stores callbacks from asynchronous APIs such as `setTimeout()`, `setInterval()`, and DOM events.

---

## Question 9. What is another name for the Callback Queue?

**Answer:**

* Macrotask Queue
* Task Queue

---

## Question 10. What is the Microtask Queue?

**Answer:**
The Microtask Queue stores high-priority asynchronous callbacks such as Promise callbacks, `queueMicrotask()`, `MutationObserver`, and the continuation after `await`.

---

## Question 11. Which queue has higher priority?

**Answer:**
The **Microtask Queue** has higher priority than the Callback (Macrotask) Queue.

---

## Question 12. Name five APIs whose callbacks go into the Callback Queue.

**Answer:**

* `setTimeout()`
* `setInterval()`
* DOM Events
* `postMessage()`
* `MessageChannel`

---

## Question 13. Name four APIs whose callbacks go into the Microtask Queue.

**Answer:**

* `Promise.then()`
* `Promise.catch()`
* `Promise.finally()`
* `queueMicrotask()`

---

## Question 14. Does `setTimeout(fn, 0)` execute immediately?

**Answer:**
No. It executes only after the current synchronous code finishes, the Call Stack is empty, and all pending Microtasks have completed.

---

## Question 15. Who provides `setTimeout()`?

**Answer:**
The **Browser Web APIs** (or the runtime environment, such as Node.js).

---

# JavaScript Event Loop Interview Answers — Part 2 (Questions 16–25)

## Question 16. Explain the execution order.

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");
```

**Answer:**

Output:

```text
A
C
B
```

---

## Question 17. Predict the output.

```javascript
console.log(1);

Promise.resolve().then(() => {
    console.log(2);
});

console.log(3);
```

**Answer:**

Output:

```text
1
3
2
```

---

## Question 18. Predict the output.

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

**Answer:**

Output:

```text
1
4
3
2
```

---

## Question 19. Why do Promise callbacks execute before `setTimeout()` callbacks?

**Answer:**
Promise callbacks are placed in the **Microtask Queue**, which has higher priority than the Callback (Macrotask) Queue.

---

## Question 20. Can the Event Loop move a callback into the Call Stack while the stack is not empty?

**Answer:**
No. The Event Loop waits until the Call Stack becomes empty.

---

## Question 21. What happens if the Microtask Queue keeps receiving new tasks?

**Answer:**
The Event Loop continues executing Microtasks until the queue is empty. If new Microtasks are continuously added, Macrotasks and browser rendering may be blocked (Microtask Starvation).

---

## Question 22. Explain FIFO behavior in the Callback Queue.

**Answer:**
The Callback Queue follows **First In, First Out (FIFO)**. The callback added first is executed first.

---

## Question 23. Explain FIFO behavior in the Microtask Queue.

**Answer:**
The Microtask Queue also follows **First In, First Out (FIFO)**. The first Microtask added is executed first.

---

## Question 24. Does the browser render the UI before or after processing Microtasks?

**Answer:**
The browser typically renders the UI **after all Microtasks have been processed** and before the next Macrotask.

---

## Question 25. Difference between `setTimeout()` and `queueMicrotask()`.

| `setTimeout()`                | `queueMicrotask()`                                 |
| ----------------------------- | -------------------------------------------------- |
| Schedules a Macrotask         | Schedules a Microtask                              |
| Uses Callback Queue           | Uses Microtask Queue                               |
| Executes after all Microtasks | Executes before any Macrotask                      |
| Can specify a delay           | Executes immediately after the Call Stack is empty |

# JavaScript Event Loop Interview Answers — Part 3 (Questions 26–35)

## Question 26. Predict the output.

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

Promise.resolve().then(() => {
    console.log("D");
});

console.log("E");
```

**Answer:**

```text
A
E
C
D
B
```

---

## Question 27. Predict the output.

```javascript
console.log(1);

setTimeout(() => {
    console.log(2);

    Promise.resolve().then(() => {
        console.log(3);
    });

}, 0);

setTimeout(() => {
    console.log(4);
}, 0);
```

**Answer:**

```text
1
2
3
4
```

---

## Question 28. Predict the output.

```javascript
Promise.resolve().then(() => {

    console.log(1);

    Promise.resolve().then(() => {
        console.log(2);
    });

});

console.log(3);
```

**Answer:**

```text
3
1
2
```

---

## Question 29. Predict the output.

```javascript
setTimeout(() => {

    console.log(1);

    setTimeout(() => {
        console.log(2);
    }, 0);

    Promise.resolve().then(() => {
        console.log(3);
    });

}, 0);
```

**Answer:**

```text
1
3
2
```

---

## Question 30. Predict the output.

```javascript
console.log(1);

Promise.resolve().then(() => {

    console.log(2);

    setTimeout(() => {
        console.log(3);
    }, 0);

});

Promise.resolve().then(() => {
    console.log(4);
});

console.log(5);
```

**Answer:**

```text
1
5
2
4
3
```

---

## Question 31. What is Microtask Starvation?

**Answer:**

Microtask Starvation occurs when Microtasks continuously create new Microtasks, preventing Macrotasks and browser rendering from executing.

---

## Question 32. Can an infinite chain of Promises block the browser? Why?

**Answer:**

Yes. Continuous Promise chaining keeps the Microtask Queue busy, preventing the Event Loop from processing Macrotasks and rendering.

---

## Question 33. Why are Promises given higher priority than timers?

**Answer:**

Because Promise callbacks are placed in the **Microtask Queue**, which is processed before the Callback (Macrotask) Queue.

---

## Question 34. Explain the complete lifecycle of `setTimeout()`.

**Answer:**

`setTimeout()` → Browser Web API → Timer Starts → Timer Completes → Callback Queue → Event Loop → Call Stack → Execute Callback

---

## Question 35. Explain the complete lifecycle of `Promise.then()`.

**Answer:**

Promise Created → Promise Resolved → Microtask Queue → Event Loop → Call Stack → Execute `.then()` Callback

---

# JavaScript Event Loop Interview Answers — Part 4 (Questions 36–40)

## Question 36. Trace the execution.

```javascript
console.log("Start");

setTimeout(() => {

    console.log("Timeout 1");

    Promise.resolve().then(() => {
        console.log("Promise 1");
    });

}, 0);

Promise.resolve().then(() => {

    console.log("Promise 2");

    setTimeout(() => {
        console.log("Timeout 2");
    }, 0);

});

console.log("End");
```

**Answer:**

```text
Start
End
Promise 2
Timeout 1
Promise 1
Timeout 2
```

---

## Question 37. Predict the output.

```javascript
console.log(1);

queueMicrotask(() => {
    console.log(2);
});

Promise.resolve().then(() => {
    console.log(3);
});

setTimeout(() => {
    console.log(4);
}, 0);

console.log(5);
```

**Answer:**

```text
1
5
2
3
4
```

---

## Question 38. Predict the output.

```javascript
setTimeout(() => {

    console.log("A");

    Promise.resolve().then(() => {
        console.log("B");
    });

    queueMicrotask(() => {
        console.log("C");
    });

}, 0);
```

**Answer:**

```text
A
B
C
```

---

## Question 39. Explain what happens internally when an `async` function encounters `await`.

**Answer:**

The `async` function pauses at `await`. The remaining code is scheduled as a **Microtask** and resumes after the awaited Promise resolves.

---

## Question 40. Describe the complete execution flow of JavaScript.

**Answer:**

Script Starts → Global Execution Context → Synchronous Code → Browser Web APIs → Async Task Completes → Microtask Queue / Callback Queue → Event Loop → All Microtasks → One Macrotask → Browser Rendering → Repeat

---

# JavaScript Event Loop Coding Problems — Part 5

## Problem 1

```javascript
console.log("Start");

setTimeout(() => console.log("A"), 0);

Promise.resolve().then(() => console.log("B"));

console.log("End");
```

**Answer:**

```text
Start
End
B
A
```

---

## Problem 2

```javascript
console.log(1);

setTimeout(() => console.log(2), 0);

Promise.resolve()
.then(() => {
    console.log(3);
})
.then(() => {
    console.log(4);
});

console.log(5);
```

**Answer:**

```text
1
5
3
4
2
```

---

## Problem 3

```javascript
setTimeout(() => {
    console.log("Timeout");

    Promise.resolve().then(() => {
        console.log("Promise");
    });

}, 0);

Promise.resolve().then(() => {
    console.log("Microtask");
});

console.log("Sync");
```

**Answer:**

```text
Sync
Microtask
Timeout
Promise
```

---

## Problem 4

```javascript
console.log("A");

queueMicrotask(() => {
    console.log("B");
});

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");
```

**Answer:**

```text
A
D
B
C
```

---

## Problem 5 (FAANG)

```javascript
console.log(1);

setTimeout(() => {

    console.log(2);

    Promise.resolve().then(() => {
        console.log(3);
    });

    setTimeout(() => {
        console.log(4);
    }, 0);

}, 0);

Promise.resolve().then(() => {

    console.log(5);

    queueMicrotask(() => {
        console.log(6);
    });

});

console.log(7);
```

**Answer:**

```text
1
7
5
6
2
3
4
```

---

# JavaScript Event Loop Bonus Problems — Part 6

## Problem 6

```javascript
console.log("Start");

Promise.resolve().then(() => {
    console.log("A");

    Promise.resolve().then(() => {
        console.log("B");
    });

    setTimeout(() => {
        console.log("C");
    }, 0);
});

setTimeout(() => {
    console.log("D");
}, 0);

console.log("End");
```

**Answer:**

```text
Start
End
A
B
D
C
```

---

## Problem 7

```javascript
setTimeout(() => console.log(1), 0);

Promise.resolve().then(() => {
    console.log(2);

    queueMicrotask(() => {
        console.log(3);
    });
});

Promise.resolve().then(() => {
    console.log(4);
});

console.log(5);
```

**Answer:**

```text
5
2
4
3
1
```

---

## Problem 8

```javascript
async function test() {
    console.log("A");

    await Promise.resolve();

    console.log("B");
}

console.log("C");

test();

console.log("D");
```

**Answer:**

```text
C
A
D
B
```

---

## Problem 9

```javascript
console.log(1);

Promise.resolve().then(() => {
    console.log(2);

    setTimeout(() => {
        console.log(3);
    }, 0);
});

setTimeout(() => {
    console.log(4);

    Promise.resolve().then(() => {
        console.log(5);
    });

}, 0);

console.log(6);
```

**Answer:**

```text
1
6
2
4
5
3
```

---

## Problem 10 (FAANG)

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timer 1");

    Promise.resolve().then(() => {
        console.log("Promise 1");
    });

}, 0);

Promise.resolve().then(() => {

    console.log("Promise 2");

    setTimeout(() => {

        console.log("Timer 2");

        Promise.resolve().then(() => {
            console.log("Promise 3");
        });

    }, 0);

});

console.log("End");
```

**Answer:**

```text
Start
End
Promise 2
Timer 1
Promise 1
Timer 2
Promise 3
```

---

## ⭐ Final Revision Rule

```text
1. Execute all Synchronous Code.
2. Execute ALL Microtasks (FIFO).
3. Execute ONE Macrotask (FIFO).
4. Execute newly added Microtasks.
5. Browser may Render.
6. Repeat.
```
