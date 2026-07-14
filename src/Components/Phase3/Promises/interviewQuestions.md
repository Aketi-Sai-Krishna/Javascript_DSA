# 📘 JavaScript Promises — Interview Questions

These questions cover the **most frequently asked Promise interview questions**, ranging from **beginner** to **FAANG-level frontend interviews**.

---

# Part 1: Theory Questions (15)

## Beginner Level

### 1. What is a Promise in JavaScript?

---

### 2. Why were Promises introduced? What problems do they solve?

---

### 3. What are the three states of a Promise? Explain each state.

---

### 4. What is the difference between `resolve()` and `reject()`?

---

### 5. Can a Promise change its state more than once? Why or why not?

---

## Intermediate Level

### 6. What is Promise Chaining? Why is it useful?

---

### 7. What happens if a `.then()` callback returns a normal value?

---

### 8. What happens if a `.then()` callback returns another Promise?

---

### 9. What is the purpose of `.catch()`? How does error propagation work?

---

### 10. What is the purpose of `.finally()`? When should you use it?

---

## Advanced Level

### 11. Explain the differences between:

* `Promise.all()`
* `Promise.race()`
* `Promise.any()`
* `Promise.allSettled()`

When would you use each one?

---

### 12. What is the difference between `Promise.resolve()` and `new Promise()`?

---

### 13. Where are Promise callbacks executed? Explain the role of the **Microtask Queue**.

---

### 14. Why do Promise callbacks execute before `setTimeout()` callbacks?

---

### 15. What happens if a rejected Promise has no `.catch()` handler?

---

# Part 2: Practical Questions (15)

## Q1. Predict the output.

```javascript
console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
```

---

## Q2. Predict the output.

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

## Q3. Predict the output.

```javascript
Promise.resolve(5)
.then((num) => {
    return num * 2;
})
.then(console.log);
```

---

## Q4. Predict the output.

```javascript
Promise.resolve(10)
.then((num) => {
    return Promise.resolve(num + 5);
})
.then(console.log);
```

---

## Q5. Predict the output.

```javascript
Promise.reject("Error")
.catch((err) => {
    console.log(err);
});
```

---

## Q6. Predict the output.

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

---

## Q7. Predict the output.

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

---

## Q8. Predict the output.

```javascript
Promise.resolve()
.then(() => {
    return Promise.resolve("JavaScript");
})
.then(console.log);
```

---

## Q9. Predict the output.

```javascript
new Promise((resolve) => {
    resolve("Done");
})
.finally(() => {
    console.log("Finally");
})
.then(console.log);
```

---

## Q10. Predict the output.

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

---

## Q11. Predict the output.

```javascript
Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
])
.then(console.log);
```

---

## Q12. Predict the output.

```javascript
Promise.all([
    Promise.resolve(1),
    Promise.reject("Failed"),
    Promise.resolve(3)
])
.then(console.log)
.catch(console.log);
```

---

## Q13. Predict the output.

```javascript
Promise.race([
    new Promise((resolve) =>
        setTimeout(() => resolve("First"), 100)
    ),
    new Promise((resolve) =>
        setTimeout(() => resolve("Second"), 50)
    )
])
.then(console.log);
```

---

## Q14. Predict the output.

```javascript
Promise.allSettled([
    Promise.resolve("Success"),
    Promise.reject("Error")
])
.then(console.log);
```

---

## Q15. Predict the output.

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

---

# ⭐ Bonus (FAANG/Product-Based Companies)

These questions are commonly asked in senior frontend interviews.

1. What is Promise flattening?
2. What is the Promise Resolution Procedure?
3. What is a Thenable?
4. How does the Event Loop execute Promise callbacks?
5. Why are Promise callbacks called **Microtasks**?
6. What is the difference between `throw` and `Promise.reject()`?
7. Can multiple `.then()` handlers be attached to the same Promise?
8. What happens when you return nothing from a `.then()` callback?
9. What happens when you return a rejected Promise from `.then()`?
10. How would you implement a simplified Promise class (Promise polyfill)?

These **30 core questions + 10 advanced questions** cover nearly all Promise-related interview scenarios for JavaScript, React, and frontend engineering roles.
