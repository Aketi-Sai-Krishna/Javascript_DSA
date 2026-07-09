Since you're preparing for **Frontend/React interviews (10–24 LPA)**, here are the **top 20 interview questions** on the **`this` keyword**, arranged from **Beginner → Intermediate → Advanced → Expert**.

---

# JavaScript `this` Keyword - Top 20 Interview Questions

## 🟢 Beginner Level (1–5)

### 1. What is the `this` keyword in JavaScript?

---

### 2. How is the value of `this` determined?

---

### 3. Does `this` depend on where a function is defined or how it is called?

---

### 4. What is the value of `this` in the global scope?

* Browser
* Node.js

---

### 5. What is the difference between `this` inside a regular function and inside an object method?

---

# 🟡 Intermediate Level (6–10)

### 6. What is the value of `this` inside a regular function in:

* Non-strict mode
* Strict mode

---

### 7. What is the value of `this` inside an object method? Explain with an example.

---

### 8. What happens to `this` when a method is assigned to another variable?

Example:

```js
const obj = {
  name: "Sai",
  greet() {
    console.log(this.name);
  }
};

const fn = obj.greet;
fn();
```

---

### 9. What is the difference between implicit binding and explicit binding?

---

### 10. Explain the four binding rules of `this` in JavaScript.

---

# 🟠 Advanced Level (11–15)

### 11. Why do arrow functions not have their own `this`?

---

### 12. What is lexical `this`?

---

### 13. Explain the difference between `this` in regular functions and arrow functions with examples.

---

### 14. What are `call()`, `apply()`, and `bind()`? When would you use each one?

---

### 15. What is "losing `this`"? What are the common ways to preserve it?

---

# 🔴 Expert / Interview Level (16–20)

### 16. What happens to `this` inside callback functions such as `setTimeout()`, `setInterval()`, or event listeners?

---

### 17. Explain how `this` behaves inside constructors and ES6 classes.

---

### 18. What happens when you use `bind()` on a function? Can a bound function's `this` be changed again using `call()` or `apply()`?

---

### 19. How does `this` behave in React?

* Function Components
* Class Components

---

### 20. Explain the complete `this` binding algorithm in JavaScript. Which binding rule has the highest priority?

---

# ⭐ Bonus Output Prediction Questions (Frequently Asked in Interviews)

Try predicting the output before running the code.

### Question 1

```js
const person = {
  name: "Sai",
  greet() {
    console.log(this.name);
  }
};

person.greet();
```

---

### Question 2

```js
const person = {
  name: "Sai",
  greet() {
    console.log(this.name);
  }
};

const fn = person.greet;
fn();
```

---

### Question 3

```js
function show() {
  console.log(this);
}

show();
```

---

### Question 4

```js
const person = {
  name: "Sai",
  greet: () => {
    console.log(this.name);
  }
};

person.greet();
```

---

### Question 5

```js
const person = {
  name: "Sai",
  greet() {
    const inner = () => {
      console.log(this.name);
    };

    inner();
  }
};

person.greet();
```

---

## 🎯 Interview Readiness Goal

If you can confidently answer all 20 theory questions and correctly predict the output of the 5 coding questions (with explanations), you'll have a strong understanding of the `this` keyword for most JavaScript and React interviews. The next logical topic after mastering these questions is **`call()`, `apply()`, and `bind()`**, where you'll learn explicit binding in much greater depth.
