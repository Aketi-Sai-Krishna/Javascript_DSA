Excellent. Since you've already attempted the first few questions, here are **interview-ready answers** for **all 20 Closure interview questions** from **Beginner → FAANG**.

---

# 1. What is a closure in JavaScript?

### Answer

> A **closure** is a function along with its **lexical environment**. It allows a function to remember and access variables from its outer lexical scope even after the outer function has finished executing.

---

# 2. Why are closures possible in JavaScript?

### Answer

> Closures are possible because JavaScript uses **lexical scoping**. A function remembers the scope where it was defined, allowing it to access variables from its outer lexical scope.

---

# 3. When is a closure created?

### Answer

> A closure is created when a function references variables from its outer lexical scope. JavaScript preserves the required lexical environment if the function continues to exist after the outer function finishes execution.

---

# 4. What is the relationship between lexical scope and closures?

### Answer

> Lexical scoping determines which variables a function can access based on where it is defined. Closures are a result of lexical scoping because JavaScript preserves the lexical environment for functions that reference outer variables.

---

# 5. What is the difference between a nested function and a closure?

### Answer

> A nested function is simply a function declared inside another function. A closure is a nested function that remembers and accesses variables from its outer lexical scope even after the outer function has finished execution. Every closure is a nested function, but not every nested function is a closure.

---

# 6. Explain the output

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

### Answer

Output

```text
10
```

The inner function forms a closure over `x`. Although `outer()` finishes execution, JavaScript preserves its lexical environment. When `fn()` is invoked, it finds `x` in the preserved outer lexical environment.

---

# 7. Why does this work after `outer()` finishes?

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

### Answer

The returned function still references `name`, so JavaScript preserves the outer lexical environment. Although the outer execution context is removed from the call stack, the lexical environment remains alive through the closure.

---

# 8. Where is `name` stored after the outer execution context is removed?

### Answer

> `name` is stored in the **preserved outer lexical environment (closure)**. The execution context is destroyed, but the lexical environment survives because the inner function still references it.

---

# 9. Does JavaScript preserve the execution context or only the lexical environment?

### Answer

> JavaScript **does not preserve the entire execution context**. Only the **lexical environment** required by the closure is preserved. The execution context is removed from the call stack after the function finishes execution.

---

# 10. What happens if the returned function doesn't use outer variables?

```javascript
function outer() {

    let x = 100;

    return function () {
        console.log("Hello");
    };

}
```

### Answer

The returned function does not reference `x`, so there is no need to preserve the outer lexical environment. The function can still be returned, but no closure over `x` is required.

---

# 11. Predict the output

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

### Answer

Output

```text
1
2
3
```

The closure preserves `count`, allowing its value to persist across multiple function calls.

---

# 12. Predict the output

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

### Answer

Output

```text
2
```

Both methods share the same closure, so they access and modify the same `count` variable.

---

# 13. Explain the output

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

### Answer

Output

```text
2
3
2
4
```

Explanation:

* `a` and `b` each have their own independent closure.
* `a` maintains its own `x`.
* `b` gets a fresh `x` initialized to `1`.

---

# 14. Predict the output

```javascript
for (var i = 1; i <= 3; i++) {

    setTimeout(function () {
        console.log(i);
    }, 1000);

}
```

### Answer

Output

```text
4
4
4
```

`var` is function-scoped, so all callbacks share the same `i`. By the time the callbacks execute, the loop has completed and `i` is `4`.

Fixes:

* Use `let`
* Use an IIFE to create a new closure for each iteration

---

# 15. Predict the output

```javascript
for (let i = 1; i <= 3; i++) {

    setTimeout(function () {

        console.log(i);

    }, 1000);

}
```

### Answer

Output

```text
1
2
3
```

`let` creates a new block-scoped binding for each loop iteration, so each callback captures a different value of `i`.

---

# 16. How are closures used in React Hooks, callbacks, timers, and event listeners?

### Answer

Closures allow these functions to remember variables from the surrounding scope.

Examples:

* `useState` preserves component state.
* Event handlers remember component variables.
* Callbacks remember outer variables.
* `setTimeout` callbacks remember values available when they were created.

---

# 17. How do closures provide data privacy?

### Answer

Variables declared inside an outer function cannot be accessed directly from outside. Only the returned methods can access them through closures.

Example:

```javascript
function bankAccount(balance) {
    return {
        getBalance() {
            return balance;
        }
    };
}
```

`balance` is private.

---

# 18. What are the disadvantages of closures?

### Answer

* Increased memory usage
* Can accidentally retain large objects
* May lead to memory leaks if references are kept unnecessarily
* Slight performance overhead due to retained lexical environments

---

# 19. Explain the lifecycle of this code

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

### Answer

1. Global Execution Context is created.
2. `outer()` creates a new execution context.
3. `count` is initialized to `0`.
4. `increment` is created.
5. `increment` is returned.
6. The outer execution context is removed from the call stack.
7. The lexical environment containing `count` is preserved.
8. Each call to `fn()` creates an inner execution context.
9. `count` is updated through the preserved closure.
10. Outputs:

```text
1
2
```

---

# 20. Why are closures required in these implementations?

### Counter

Closures preserve the counter value across function calls.

---

### Once Function

Closures remember whether the function has already executed.

---

### Memoization

Closures preserve the cache between function calls.

---

### Currying

Closures preserve arguments from previous function calls.

---

### Debouncing

Closures preserve the timer ID.

---

### Throttling

Closures preserve the last execution time or timer.

---

### Module Pattern

Closures provide private variables and controlled access through public methods.

---

### React-like `useState`

Closures preserve state values between function invocations, enabling persistent component state.

---

# ⭐ Interview Summary (Must Remember)

* **Closure = Function + Preserved Lexical Environment**
* **Closures exist because of lexical scoping.**
* **The execution context is destroyed after execution, but the lexical environment may survive if referenced by a closure.**
* **Variable lookup follows the lexical scope chain: Local → Outer → Global.**
* **Common uses:** Data privacy, callbacks, event handlers, timers, React Hooks, memoization, currying, debouncing, and throttling.

These answers are at the level expected in JavaScript interviews at product-based companies, including the kinds of conceptual questions commonly asked in senior frontend interview rounds.
