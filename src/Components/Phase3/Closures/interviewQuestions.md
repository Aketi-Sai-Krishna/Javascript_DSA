These are **20 high-quality closure interview questions** arranged from **Beginner → Intermediate → Advanced → FAANG level**. They focus specifically on **closures** (not scope, execution context, or hoisting), though those concepts naturally support some answers.

---

# Level 1 – Beginner (1–5)

### 1. What is a closure in JavaScript?

---

### 2. Why are closures possible in JavaScript?

---

### 3. When is a closure created?

---

### 4. What is the relationship between lexical scope and closures?

---

### 5. What is the difference between a nested function and a closure?

---

# Level 2 – Intermediate (6–10)

### 6. Explain the output.

```javascript
function outer() {
    let x = 10;

    return function () {
        console.log(x);
    };
}

const fn = outer();
fn();
```

---

### 7. Explain why the following code works even after `outer()` has finished.

```javascript
function outer() {
    let name = "Sai";

    function inner() {
        console.log(name);
    }

    return inner;
}

const fn = outer();
fn();
```

---

### 8. Where is the variable `name` stored after the `outer()` execution context is removed?

---

### 9. Does JavaScript preserve the entire execution context or only the lexical environment? Explain.

---

### 10. What happens if the returned function doesn't use any outer variables?

Example:

```javascript
function outer() {

    let x = 100;

    return function () {
        console.log("Hello");
    };

}
```

Will a closure still be useful? Explain.

---

# Level 3 – Practical Coding (11–15)

### 11. Predict the output.

```javascript
function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const c = counter();

c();
c();
c();
```

---

### 12. Predict the output.

```javascript
function counter() {

    let count = 0;

    return {
        increment() {
            count++;
        },

        getCount() {
            return count;
        }
    };

}

const c = counter();

c.increment();
c.increment();

console.log(c.getCount());
```

---

### 13. Explain the output.

```javascript
function outer() {

    let x = 1;

    return function () {

        x++;

        console.log(x);

    };

}

const a = outer();
const b = outer();

a();
a();
b();
a();
```

---

### 14. Predict the output.

```javascript
for (var i = 1; i <= 3; i++) {

    setTimeout(function () {
        console.log(i);
    }, 1000);

}
```

* Why does it happen?
* How would you fix it?

---

### 15. Predict the output.

```javascript
for (let i = 1; i <= 3; i++) {

    setTimeout(function () {

        console.log(i);

    }, 1000);

}
```

Why is this different from using `var`?

---

# Level 4 – Advanced (16–18)

### 16. Explain how closures are used in:

* React Hooks
* Event listeners
* Callbacks
* Timers

---

### 17. Explain how closures provide data privacy.

Can you implement a private variable using closures?

---

### 18. What are the disadvantages of closures?

Discuss:

* Memory usage
* Garbage collection
* Memory leaks
* Performance considerations

---

# Level 5 – FAANG / Senior Engineer (19–20)

### 19. Explain the complete lifecycle of this code.

```javascript
function outer() {

    let count = 0;

    function increment() {

        count++;

        return count;

    }

    return increment;

}

const fn = outer();

fn();
fn();
```

Your explanation should include:

* Global Execution Context
* Outer Execution Context
* Creation Phase
* Execution Phase
* Call Stack
* Lexical Environment
* Scope Chain
* Closure
* Garbage Collection
* Variable Lookup
* Memory Diagram

---

### 20. Implement these using closures:

* Counter
* Once function (`once(fn)`)
* Memoization
* Currying
* Debounce
* Throttle
* Module Pattern (private variables)
* Custom `useState()` implementation (React-like)

Explain **why closures are required** in each implementation.

---

# ⭐ Must-Know Coding Problems (Frequently Asked)

If you're preparing for companies like Google, Meta, Amazon, Microsoft, or other top product companies, make sure you can solve and explain these without looking up the answers:

1. Counter using closures
2. Independent counters
3. Private variables
4. `var` vs `let` in loops with `setTimeout`
5. IIFE solution for `var`
6. Memoization
7. `once()` function
8. Debounce
9. Throttle
10. Currying
11. Module pattern
12. React-like `useState`
13. Event handler closures
14. Closure-based caching
15. Explain closure memory and garbage collection

If you can confidently answer these 20 questions and implement the coding problems above, you'll have a strong interview-ready understanding of JavaScript closures for frontend interviews, including those at large product-based companies.
