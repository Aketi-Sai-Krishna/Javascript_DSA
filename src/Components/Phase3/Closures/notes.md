# JavaScript Closures (Beginner → Advanced → Interview Level)

Closures are one of the **most important concepts in JavaScript**. They are asked in almost every frontend interview because they are the foundation of:

* React Hooks (`useState`, `useEffect`)
* Event Handlers
* Callbacks
* Timers
* Module Pattern
* Data Privacy
* Memoization
* Debouncing & Throttling
* Currying

If you master closures, you'll understand how JavaScript actually works.

---

# What is a Closure?

### Definition (Interview)

> **A closure is created when a function remembers and continues to access the variables from its lexical scope even after the outer function has finished executing.**

Another simple definition:

> **A closure is a function along with its lexical environment.**

---

# Breaking Down the Definition

Suppose we have

```javascript
function outer() {
    let name = "Sai";

    function inner() {
        console.log(name);
    }

    return inner;
}
```

Question:

When `outer()` finishes,

Should `name` disappear?

Normally...

```
Execution Context Removed

name ❌
inner ❌
```

But because `inner()` still needs `name`

JavaScript keeps it alive.

That's Closure.

---

# Step-by-Step Example

```javascript
function outer() {

    let message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner;

}

const greet = outer();

greet();
```

Output

```
Hello
```

---

# What Actually Happens?

## Step 1

Call

```javascript
outer();
```

Execution Context

```
Global EC

↓

outer EC

message = "Hello"

inner()
```

---

## Step 2

Return inner

```javascript
return inner;
```

Now

```
Global

greet

↓

points to inner function
```

---

## Step 3

Normally

After outer finishes

```
message

should disappear
```

But...

JavaScript notices

```
inner()

still needs message
```

So it stores

```
message = "Hello"
```

inside Closure Memory.

---

Memory looks like

```
greet

↓

Function inner()

↓

Closure

message = "Hello"
```

---

## Step 4

Now

```javascript
greet();
```

JavaScript searches

```
message?
```

Inside inner?

```
No
```

Outside?

Closure Memory

```
Yes

Hello
```

Output

```
Hello
```

---

# Why Does Closure Work?

Because of **Lexical Scope**.

Remember:

A function always remembers

> **where it was created, not where it is called.**

Example

```javascript
function outer() {

    let x = 10;

    function inner() {
        console.log(x);
    }

    return inner;
}

const fn = outer();

fn();
```

Output

```
10
```

Even though

```
outer()

already finished.
```

---

# Closure Visualization

```
Global

↓

outer()

x = 10

↓

returns inner()

↓

outer removed

↓

inner still remembers

↓

Closure

x = 10

↓

inner()

↓

10
```

---

# Another Example

```javascript
function parent() {

    let city = "Hyderabad";

    return function () {
        console.log(city);
    };

}

const display = parent();

display();
```

Output

```
Hyderabad
```

---

# Closures with Parameters

```javascript
function greet(name) {

    return function () {

        console.log("Hello " + name);

    };

}

const helloSai = greet("Sai");

helloSai();
```

Output

```
Hello Sai
```

Closure stores

```
name = "Sai"
```

---

# Closures with Multiple Variables

```javascript
function outer() {

    let a = 10;

    let b = 20;

    return function () {

        console.log(a + b);

    };

}

const fn = outer();

fn();
```

Output

```
30
```

Closure stores

```
a

b
```

---

# Closures Can Update Variables

```javascript
function counter() {

    let count = 0;

    return function () {

        count++;

        console.log(count);

    };

}

const increment = counter();

increment();

increment();

increment();
```

Output

```
1

2

3
```

Notice

`count` never resets.

Why?

Closure.

---

Memory

```
Closure

count = 3
```

---

# Two Independent Closures

```javascript
function counter() {

    let count = 0;

    return function () {

        count++;

        console.log(count);

    };

}

const c1 = counter();

const c2 = counter();

c1();

c1();

c2();

c2();

c1();
```

Output

```
1

2

1

2

3
```

Each function has

its own closure.

```
Closure 1

count = 3

----------------

Closure 2

count = 2
```

---

# Closure with Nested Functions

```javascript
function one() {

    let a = 1;

    function two() {

        let b = 2;

        function three() {

            console.log(a);

            console.log(b);

        }

        return three;

    }

    return two();

}

const fn = one();

fn();
```

Output

```
1

2
```

Closure remembers

```
a

b
```

---

# Closures Inside Loops

One of the most common interview questions.

## Using `var`

```javascript
for (var i = 1; i <= 3; i++) {

    setTimeout(() => {

        console.log(i);

    }, 1000);

}
```

Output

```
4

4

4
```

Why?

Because

All callbacks share

the same `i`.

---

Memory

```
Closure

i = 4
```

---

## Using `let`

```javascript
for (let i = 1; i <= 3; i++) {

    setTimeout(() => {

        console.log(i);

    }, 1000);

}
```

Output

```
1

2

3
```

Each iteration creates

a new block-scoped `i`.

Each callback closes over its own value.

---

# Fixing `var` Using Closure

```javascript
for (var i = 1; i <= 3; i++) {

    (function (x) {

        setTimeout(function () {

            console.log(x);

        }, 1000);

    })(i);

}
```

Output

```
1

2

3
```

Each IIFE creates a new closure that stores its own copy of `x`.

---

# Data Privacy Using Closures

```javascript
function bankAccount(initialBalance) {

    let balance = initialBalance;

    return {

        deposit(amount) {
            balance += amount;
        },

        withdraw(amount) {
            balance -= amount;
        },

        getBalance() {
            return balance;
        }

    };

}

const account = bankAccount(1000);

account.deposit(500);

console.log(account.getBalance());
```

Output

```
1500
```

You cannot do:

```javascript
account.balance
```

Output

```
undefined
```

The `balance` variable is private because it exists only in the closure.

---

# Closures and the Call Stack

```javascript
function outer() {

    let x = 100;

    function inner() {

        console.log(x);

    }

    return inner;

}

const fn = outer();

fn();
```

### Stack Flow

```
Global EC

↓

outer EC pushed

↓

x created

↓

inner created

↓

return inner

↓

outer EC popped

↓

Closure stores x

↓

fn()

↓

inner EC pushed

↓

prints 100

↓

inner EC popped
```

The execution context is removed from the call stack, but the variables that the returned function still needs are retained in the closure.

---

# Memory Diagram

```
Global Memory

fn
↓

inner Function
│
│
└── Hidden Closure
      │
      ├── x = 100
      ├── y = 20
      └── message = "Hello"
```

---

# Common Interview Questions

### Q1. What is a closure?

A function that remembers variables from its lexical scope even after the outer function has finished executing.

---

### Q2. Why are closures possible?

Because JavaScript uses lexical scoping.

---

### Q3. When is a closure created?

Whenever a function is created that references variables from an outer scope.

---

### Q4. Does every nested function create a closure?

Not necessarily. Every nested function has access to outer scopes through lexical scoping, but a closure is especially relevant when that function continues to use those variables after the outer function has returned.

---

### Q5. Can closures cause memory leaks?

Yes. If a closure keeps references to large objects that are no longer needed, they cannot be garbage collected until the closure itself becomes unreachable.

---

### Q6. Name practical uses of closures.

* Data privacy
* Counters
* Module pattern
* Memoization
* Currying
* Debouncing
* Throttling
* Event handlers
* React Hooks
* Callbacks
* Timers

---

# Interview Summary

* **Closure = Function + its lexical environment.**
* A function remembers the variables from the scope where it was **defined**, not where it is **called**.
* The outer function's execution context is removed from the call stack, but variables needed by the inner function are kept alive in the closure.
* Each invocation of an outer function creates a **new, independent closure**.
* Closures enable state preservation, data encapsulation, and many advanced JavaScript patterns.

Since you've already covered **Execution Context**, **Call Stack**, **Hoisting**, **Scope**, and **Lexical Scope**, closures are the concept that ties all of them together. Understanding *why* the outer variables survive after the execution context is popped is the key insight that interviewers look for.
