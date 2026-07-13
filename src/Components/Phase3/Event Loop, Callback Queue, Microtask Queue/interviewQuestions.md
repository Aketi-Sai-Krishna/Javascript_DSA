# JavaScript Event Loop, Callback Queue & Microtask Queue — Interview Questions

> **Level:** Beginner → Intermediate → Advanced → FAANG → Coding Problems

---

# Beginner Level

### Question 1

What is the Event Loop?

---

### Question 2

Why does JavaScript need an Event Loop?

---

### Question 3

Is JavaScript single-threaded or multi-threaded?

---

### Question 4

What is synchronous execution?

---

### Question 5

What is asynchronous execution?

---

### Question 6

What is the Call Stack?

---

### Question 7

When does the Event Loop execute callbacks?

---

### Question 8

What is the Callback Queue?

---

### Question 9

What is another name for the Callback Queue?

---

### Question 10

What is the Microtask Queue?

---

### Question 11

Which queue has higher priority?

* Callback Queue
* Microtask Queue

---

### Question 12

Name five APIs whose callbacks go into the Callback Queue.

---

### Question 13

Name four APIs whose callbacks go into the Microtask Queue.

---

### Question 14

Does `setTimeout(fn, 0)` execute immediately? Explain why or why not.

---

### Question 15

Who provides `setTimeout()`?

* JavaScript Engine
* Browser
* Event Loop

---

# Intermediate Level

### Question 16

Explain the execution order of the following code.

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");
```

---

### Question 17

Predict the output.

```javascript
console.log(1);

Promise.resolve().then(() => {
    console.log(2);
});

console.log(3);
```

---

### Question 18

Predict the output.

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

---

### Question 19

Explain why Promise callbacks execute before `setTimeout()` callbacks.

---

### Question 20

Can the Event Loop move a callback into the Call Stack while the stack is not empty?

---

### Question 21

What happens if the Microtask Queue keeps receiving new tasks?

---

### Question 22

Explain FIFO behavior in the Callback Queue.

---

### Question 23

Explain FIFO behavior in the Microtask Queue.

---

### Question 24

Does the browser render the UI before or after processing microtasks?

---

### Question 25

Difference between

```javascript
setTimeout()
```

and

```javascript
queueMicrotask()
```

---

# Advanced Level

### Question 26

Predict the output.

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

---

### Question 27

Predict the output.

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

---

### Question 28

Predict the output.

```javascript
Promise.resolve().then(() => {

    console.log(1);

    Promise.resolve().then(() => {
        console.log(2);
    });

});

console.log(3);
```

---

### Question 29

Predict the output.

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

---

### Question 30

Predict the output.

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

---

### Question 31

What is **Microtask Starvation**?

---

### Question 32

Can an infinite chain of Promises block the browser? Why?

---

### Question 33

Why are Promises given higher priority than timers?

---

### Question 34

Explain the complete lifecycle of `setTimeout()`.

---

### Question 35

Explain the complete lifecycle of `Promise.then()`.

---

# FAANG Level

### Question 36

Trace the execution.

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

---

### Question 37

Predict the output.

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

---

### Question 38

Predict the output.

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

---

### Question 39

Explain what happens internally when an `async` function encounters `await`.

---

### Question 40

Describe the complete execution flow of JavaScript from the moment a script starts until all synchronous code, microtasks, macrotasks, and rendering are processed.

---

# Coding Problems (Interview Style)

## Problem 1

Predict the output.

```javascript
console.log("Start");

setTimeout(() => console.log("A"), 0);

Promise.resolve().then(() => console.log("B"));

console.log("End");
```

---

## Problem 2

Predict the output.

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

---

## Problem 3

Predict the output.

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

---

## Problem 4

Predict the output.

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

---

## Problem 5 (FAANG Level)

Predict the output.

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

---

# ⭐ Bonus FAANG Problems (Highly Recommended)

## Problem 6

Predict the output.

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

---

## Problem 7

Predict the output.

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

---

## Problem 8

Predict the output.

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

---

## Problem 9

Predict the output.

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

---

## Problem 10 (FAANG)

Predict the output.

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

---
