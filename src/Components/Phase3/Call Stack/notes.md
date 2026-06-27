# JavaScript Call Stack (Complete Notes from Beginner to Advanced)

The **Call Stack** is one of the most important concepts in JavaScript. If you understand the call stack, you can easily understand:

* Execution Context
* Hoisting
* Scope
* Closures
* Event Loop
* Asynchronous JavaScript
* Memory leaks
* Stack Overflow

---

# What is the Call Stack?

The **Call Stack** is a **LIFO (Last In, First Out)** data structure that JavaScript uses to keep track of which function is currently being executed.

Think of it like a **stack of plates**.

```
        Top
      --------
      function3()
      --------
      function2()
      --------
      function1()
      --------
      Global()
      --------
```

The last function added is executed first.

---

# Why Do We Need Call Stack?

Imagine JavaScript without a call stack.

```
function greet() {
   console.log("Hello");
}

function start() {
   greet();
}

start();
```

Questions arise:

* Which function should execute first?
* After greet() finishes, where should JS return?
* How does JS know which line to continue from?

The Call Stack answers all of these.

---

# JavaScript is Single Threaded

JavaScript has only **one call stack**.

That means:

Only **one thing** can execute at a time.

```
Task A

↓

Task B

↓

Task C
```

Not

```
Task A   Task B   Task C
```

Everything waits for the current execution to finish.

---

# The Call Stack Works Like This

Whenever a function is called:

**Push**

Whenever a function finishes:

**Pop**

Example:

```javascript
function one() {
    console.log("One");
}

one();
```

Initially

```
Empty Stack
```

Global Execution Context starts

```
Global
```

Call one()

```
one()
Global
```

After one() finishes

```
Global
```

After global finishes

```
Empty
```

---

# Step-by-Step Example

```javascript
function first() {
    second();
}

function second() {
    third();
}

function third() {
    console.log("Hello");
}

first();
```

---

## Step 1

```
Stack

Global
```

---

## Step 2

first() called

```
first()
Global
```

---

## Step 3

second() called

```
second()
first()
Global
```

---

## Step 4

third() called

```
third()
second()
first()
Global
```

---

## Step 5

third finishes

```
second()
first()
Global
```

---

## Step 6

second finishes

```
first()
Global
```

---

## Step 7

first finishes

```
Global
```

---

## Step 8

Global finishes

```
Empty
```

---

# Visual Representation

```text
Push first()

        first()
        Global

↓

Push second()

        second()
        first()
        Global

↓

Push third()

        third()
        second()
        first()
        Global

↓

Pop third()

        second()
        first()
        Global

↓

Pop second()

        first()
        Global

↓

Pop first()

        Global

↓

Empty
```

---

# Every Function Creates an Execution Context

When a function is pushed onto the stack, JavaScript creates a new **Function Execution Context (FEC)** for it.

```
Call Stack

third()  ← Execution Context
second() ← Execution Context
first()  ← Execution Context
Global    ← Global Execution Context
```

Each execution context contains:

* Variable Environment
* Lexical Environment
* this value
* Outer Environment Reference

The Call Stack stores these execution contexts, not just function names.

---

# Another Example

```javascript
function add(a, b) {
    return a + b;
}

function calculate() {
    const result = add(10, 20);
    console.log(result);
}

calculate();
```

Execution

```
Global

↓

calculate

↓

add

↓

Return 30

↓

calculate

↓

Global
```

---

# Nested Function Calls

```javascript
function A() {
    B();
}

function B() {
    C();
}

function C() {
    console.log("Done");
}

A();
```

Stack

```
C()
B()
A()
Global
```

Then

```
B()
A()
Global
```

Then

```
A()
Global
```

Then

```
Global
```

---

# Recursive Functions

```javascript
function count(n) {
    if (n === 0) return;

    console.log(n);

    count(n - 1);
}

count(3);
```

Stack

```
count(3)
Global
```

↓

```
count(2)
count(3)
Global
```

↓

```
count(1)
count(2)
count(3)
Global
```

↓

```
count(0)
count(1)
count(2)
count(3)
Global
```

Now it returns

```
count(1)
count(2)
count(3)
Global
```

↓

```
count(2)
count(3)
Global
```

↓

```
count(3)
Global
```

↓

```
Global
```

---

# Stack Overflow

Every browser limits the call stack size.

Infinite recursion causes:

```javascript
function hello() {
    hello();
}

hello();
```

Output

```
RangeError:
Maximum call stack size exceeded
```

Because the stack keeps growing.

```
hello()
hello()
hello()
hello()
hello()
hello()
...
```

Eventually, there is no more memory available for new execution contexts.

---

# Example of Stack Overflow

```javascript
function recurse() {
    recurse();
}

recurse();
```

Result

```
Global

↓

recurse

↓

recurse

↓

recurse

↓

recurse

↓

...

↓

Maximum Call Stack Size Exceeded
```

---

# Synchronous Nature

```javascript
console.log(1);

console.log(2);

console.log(3);
```

Stack

```
console.log()

Global
```

↓

```
console.log()

Global
```

↓

```
console.log()

Global
```

Output

```
1
2
3
```

Everything waits for the previous task to finish.

---

# Long Running Task

```javascript
function heavyWork() {
    while (true) {}
}

console.log("Start");

heavyWork();

console.log("End");
```

Output

```
Start
```

Never reaches

```
End
```

Because:

```
heavyWork()
Global
```

never gets popped.

---

# Call Stack and Error Stack Trace

```javascript
function one() {
    two();
}

function two() {
    three();
}

function three() {
    throw new Error("Oops");
}

one();
```

Error

```
Error

at three()

at two()

at one()

at Global
```

The error trace reflects the current call stack at the moment the error occurred.

---

# Call Stack vs Execution Context

Many beginners think they are the same. They are related but different.

| Execution Context                       | Call Stack                                    |
| --------------------------------------- | --------------------------------------------- |
| Environment created for executing code  | Data structure that stores execution contexts |
| Holds variables, scope, `this`, etc.    | Holds the order of execution                  |
| Created for global and each function    | Pushes and pops execution contexts            |
| Represents a function's execution state | Represents the sequence of active executions  |

Think of it like this:

* **Execution Context** = a folder containing everything needed to execute a function.
* **Call Stack** = a stack of those folders, showing which function is currently running.

---

# Call Stack vs Memory Heap

| Call Stack                | Memory Heap                         |
| ------------------------- | ----------------------------------- |
| Stores execution contexts | Stores objects and reference values |
| LIFO                      | Unstructured memory                 |
| Fast                      | Larger and slower                   |
| Tracks function execution | Holds application data              |

---

# Important Rules

* JavaScript has **one call stack**.
* The call stack follows **LIFO**.
* Every function call creates a new execution context.
* Execution contexts are pushed onto the call stack.
* When a function returns, its execution context is popped.
* Infinite recursion causes a **stack overflow**.
* Synchronous JavaScript executes one call stack frame at a time.

---

# Interview Summary

**Definition:** The call stack is a LIFO data structure used by the JavaScript engine to manage the execution of functions by storing their execution contexts.

**How it works:**

1. The Global Execution Context is created and pushed.
2. Each function call creates a Function Execution Context and pushes it onto the stack.
3. The function at the top of the stack executes.
4. When it completes, its execution context is popped.
5. Control returns to the previous execution context.
6. When the Global Execution Context finishes, the stack becomes empty.

**Key points:**

* Single-threaded execution.
* One active execution context at a time.
* Enables nested function calls and recursion.
* Forms the foundation for understanding asynchronous JavaScript and the Event Loop.
