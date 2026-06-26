
---

# 📘 JavaScript Execution Context (Beginner → Advanced)

---

# Table of Contents

1. What is Execution Context?
2. Why JavaScript Needs It
3. Types of Execution Context
4. Lifecycle of an Execution Context
5. Creation Phase
6. Execution Phase
7. Memory Allocation
8. Global Execution Context
9. Function Execution Context
10. Variable Environment
11. Lexical Environment
12. `this` Binding
13. Execution Context vs Scope
14. Execution Context vs Call Stack
15. Real Code Walkthrough
16. Common Interview Questions
17. Mistakes Beginners Make
18. Developer Tips
19. Cheat Sheet

---

# 1. What is Execution Context?

## Definition

**Execution Context is the environment where JavaScript code is evaluated and executed.**

Before JavaScript executes any code, it first creates an environment to store everything needed to run that code.

That environment is called the **Execution Context**.

---

Imagine you're writing an exam.

Before you start writing, you receive:

* Question paper
* Pen
* Answer sheet
* Roll number
* Instructions

Only after receiving these things do you begin writing.

JavaScript behaves the same way.

Before executing code, it prepares everything.

That preparation is called the **Execution Context**.

---

# Real Life Analogy

Think of a chef.

Before cooking, the chef prepares:

* Ingredients
* Knife
* Stove
* Bowls
* Recipe

Only then does cooking begin.

Execution Context is JavaScript's preparation stage.

---

# 2. Why JavaScript Needs Execution Context

Without an execution context, JavaScript wouldn't know:

* Where variables are stored
* Where functions are stored
* Which `this` to use
* Which scope to search
* Which code to execute next

Execution Context manages all of these.

---

# 3. Types of Execution Context

There are only three.

## 1. Global Execution Context (GEC)

Created when JavaScript starts.

There is only **one** Global Execution Context.

Example

```javascript
let name = "Sai";

function greet() {}

console.log(name);
```

Everything outside functions belongs to the Global Execution Context.

---

## 2. Function Execution Context (FEC)

Whenever a function is called,

JavaScript creates a brand new execution context.

Example

```javascript
function add(a, b) {
    return a + b;
}

add(2, 3);
```

Calling `add()` creates a new Function Execution Context.

---

## 3. Eval Execution Context

Created by

```javascript
eval("console.log('Hello')");
```

Almost never used.

Avoid it.

---

# 4. Lifecycle of an Execution Context

Every execution context has **two phases**.

```
Execution Context

↓

Creation Phase

↓

Execution Phase
```

This is one of the most important interview concepts.

---

# 5. Creation Phase (Memory Creation Phase)

Before executing even one line,

JavaScript scans the entire scope.

During this phase it:

* Allocates memory
* Creates variables
* Stores functions
* Determines `this`
* Creates the lexical environment

No code runs here.

Only preparation.

---

Example

```javascript
console.log(a);

var a = 10;

function greet() {}
```

Nothing has executed yet.

Memory becomes

```
a → undefined

greet → entire function
```

---

# How Variables Are Stored

Suppose we have

```javascript
var a = 10;

let b = 20;

const c = 30;

function hello() {}
```

During Creation Phase

Memory becomes

```
a → undefined

b → uninitialized

c → uninitialized

hello → entire function
```

Notice

Only `var` gets initialized with

```
undefined
```

`let` and `const` remain inside the

**Temporal Dead Zone (TDZ).**

---

# 6. Execution Phase

Now JavaScript executes code line by line.

Example

```javascript
var a = 10;
```

Memory changes

From

```
a → undefined
```

To

```
a → 10
```

Assignment happens only now.

---

# Example

```javascript
console.log(a);

var a = 10;
```

Creation

```
a → undefined
```

Execution

```
console.log(undefined)

↓

a = 10
```

Output

```
undefined
```

---

# 7. Memory Allocation

Think of memory like boxes.

Before execution

```
Memory

a □

b □

hello □
```

Creation fills them.

```
a → undefined

hello → function
```

Execution updates them.

```
a → 10
```

---

# 8. Global Execution Context

Created only once.

Contains

* Global variables
* Global functions
* Global `this`
* Global lexical environment

Example

```javascript
var x = 10;

function test() {}

console.log(x);
```

Everything belongs to Global Context.

---

# 9. Function Execution Context

Every function call creates a new execution context.

Example

```javascript
function multiply(a, b) {
    let result = a * b;
    return result;
}

multiply(2, 5);
```

New execution context

```
Arguments

a = 2

b = 5

result → uninitialized
```

Execution

```
result = 10
```

Return

```
10
```

Function context is destroyed after returning.

---

# 10. Components of an Execution Context

Every execution context contains three parts.

```
Execution Context

↓

Variable Environment

↓

Lexical Environment

↓

this Binding
```

---

## Variable Environment

Stores

* variables
* function declarations

Example

```javascript
var x = 10;

function hello() {}
```

---

## Lexical Environment

Stores

* current scope
* reference to outer scope

This is why closures work.

Example

```javascript
function outer() {

    let a = 10;

    function inner() {
        console.log(a);
    }

    inner();
}
```

`inner()` can access `a` because of the lexical environment.

---

## `this` Binding

Stores the value of `this`.

Example

```javascript
const user = {
    name: "Sai",

    greet() {
        console.log(this.name);
    }
};

user.greet();
```

Here

```
this → user
```

---

# 11. Execution Context vs Scope

Many beginners confuse these.

## Scope

Defines **where** a variable can be accessed.

Example

```javascript
function test() {
    let x = 10;
}
```

`x` only exists inside `test`.

---

## Execution Context

Defines **how** JavaScript executes code.

Every function has:

* its own variables
* its own memory
* its own scope
* its own execution context

---

# 12. Execution Context vs Call Stack

Execution Context is the environment.

Call Stack manages those environments.

Example

```javascript
function one() {
    two();
}

function two() {
    three();
}

function three() {
    console.log("Done");
}

one();
```

Call Stack

```
Global

↓

one()

↓

two()

↓

three()

↓

console.log()

↓

three removed

↓

two removed

↓

one removed

↓

Global removed
```

LIFO

Last In

First Out

---

# 13. Real Walkthrough

```javascript
var a = 5;

function square(num) {
    return num * num;
}

var result = square(a);
```

## Creation

```
a → undefined

square → function

result → undefined
```

Execution

```
a = 5

↓

square()

↓

new execution context

↓

num = 5

↓

return 25

↓

result = 25
```

Final Memory

```
a → 5

result → 25

square → function
```

---

# 14. Complete Flow

```
JavaScript Starts

↓

Create Global Execution Context

↓

Creation Phase

↓

Allocate Memory

↓

Store Functions

↓

Set this

↓

Execution Phase

↓

Execute Code

↓

Function Call

↓

Create Function Execution Context

↓

Creation Phase

↓

Execution Phase

↓

Return

↓

Destroy Function Context

↓

Continue Global Context

↓

Program Ends
```

---

# 15. Common Interview Questions

### Why does `var` print `undefined`?

Because it is initialized during the Creation Phase.

---

### Why does `let` throw `ReferenceError`?

Because it remains in the TDZ until its declaration executes.

---

### Why are function declarations callable before they're defined?

Because the entire function is stored during the Creation Phase.

---

### Why don't function expressions behave the same way?

Because only the variable is hoisted. The function value is assigned later during execution.

---

### Does every function create a new execution context?

Yes. Every function invocation gets its own execution context.

---

### What happens when a function finishes?

Its execution context is removed from the call stack, and its local variables become inaccessible unless they're preserved by a closure.

---

# 16. Common Beginner Mistakes

❌ Thinking JavaScript executes code immediately.

It doesn't. It first creates the execution context.

---

❌ Thinking hoisting means moving code.

Nothing is physically moved.

JavaScript allocates memory before execution.

---

❌ Thinking `undefined` means "not declared."

Wrong.

`undefined` means the variable exists but hasn't been assigned a value yet.

---

❌ Thinking nested functions store variable values.

They don't.

They remember the lexical environment (the variable itself), and the value is looked up when the function executes.

---

# 17. Developer Tips

When debugging code mentally, always follow this checklist:

### Step 1

Identify the current execution context.

```
Global?

Function?

Nested Function?
```

---

### Step 2

Draw the memory after the Creation Phase.

```
a → undefined

hello → function
```

---

### Step 3

Execute line by line.

```
Assignment?

Function call?

Return?
```

---

### Step 4

Whenever you see

```javascript
someFunction();
```

Draw a new execution context.

---

### Step 5

When the function returns,

remove that execution context from your mental call stack.

---

# 18. Cheat Sheet

| Concept               | Remember                                                       |
| --------------------- | -------------------------------------------------------------- |
| Execution Context     | Environment where code runs                                    |
| Global Context        | Created once when the program starts                           |
| Function Context      | Created for every function call                                |
| Phases                | Creation → Execution                                           |
| `var`                 | Hoisted and initialized to `undefined`                         |
| `let` / `const`       | Hoisted but remain in the TDZ until initialized                |
| Function Declarations | Fully hoisted with their implementation                        |
| Function Expressions  | Only the variable is hoisted                                   |
| Execution Context     | Contains Variable Environment, Lexical Environment, and `this` |
| Call Stack            | Stores execution contexts using LIFO                           |
| Function End          | Its execution context is removed from the call stack           |

---

