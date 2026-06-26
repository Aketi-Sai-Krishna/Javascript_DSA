
---

# 📘 JavaScript Execution Context – Interview Answers (1–10)

---

# 1. What is an Execution Context?

### Interview Answer

> Execution Context is the environment in which JavaScript code is evaluated and executed. It contains everything JavaScript needs to run the code, such as variables, function declarations, the lexical environment, the variable environment, and the `this` binding. Whenever JavaScript starts executing a program or invokes a function, it creates a new execution context.

---

# 2. Why does JavaScript need an Execution Context?

### Interview Answer

> JavaScript needs an Execution Context to manage the execution of code. It keeps track of variables, functions, the current value of `this`, scope information, and the execution state. Without an execution context, the JavaScript engine wouldn't know where variables are stored or how to execute the code correctly.

---

# 3. What are the different types of Execution Context?

### Interview Answer

> There are three types of Execution Context:
>
> 1. **Global Execution Context** – Created when the JavaScript program starts.
> 2. **Function Execution Context** – Created every time a function is invoked.
> 3. **Eval Execution Context** – Created when using `eval()`, though it is rarely used in modern JavaScript.

---

# 4. What is the Global Execution Context?

### Interview Answer

> The Global Execution Context is the first execution context created when a JavaScript program starts. It contains all global variables, global function declarations, the global lexical environment, and the global `this` binding. Only one Global Execution Context exists during the lifetime of a JavaScript program.

---

# 5. What is a Function Execution Context?

### Interview Answer

> A Function Execution Context is created every time a function is called. It contains the function's local variables, parameters, lexical environment, variable environment, and `this` binding. Each function call gets its own separate execution context, which is destroyed after the function returns unless a closure keeps part of it alive.

---

# 6. What are the two phases of an Execution Context?

### Interview Answer

> Every Execution Context has two phases:
>
> 1. **Creation Phase** – JavaScript allocates memory for variables and functions, determines the `this` binding, and creates the lexical environment.
> 2. **Execution Phase** – JavaScript executes the code line by line, assigns values to variables, evaluates expressions, and invokes functions.

---

# 7. What happens during the Creation Phase?

### Interview Answer

> During the Creation Phase, JavaScript scans the entire scope and allocates memory. It initializes `var` variables with `undefined`, hoists `let` and `const` without initializing them, stores function declarations in memory, determines the value of `this`, and creates the lexical environment. No code is executed during this phase.

---

# 8. What happens during the Execution Phase?

### Interview Answer

> During the Execution Phase, JavaScript executes the code line by line. Variable assignments take place, expressions are evaluated, functions are invoked, and new Function Execution Contexts are created whenever a function is called.

---

# 9. What information is stored inside an Execution Context?

### Interview Answer

> Every Execution Context contains three main components:
>
> * **Variable Environment**, which stores variables and function declarations.
> * **Lexical Environment**, which stores scope information and the reference to the outer lexical environment.
> * **`this` Binding**, which stores the current value of the `this` keyword.

---

# 10. What happens to an Execution Context after a function finishes?

### Interview Answer

> When a function completes execution, its Execution Context is removed from the Call Stack. Normally, its local variables become eligible for garbage collection. However, if a closure still references those variables, they remain in memory until they are no longer needed.

---

# ⭐ Interview Tip

**Don't memorize these word-for-word.** Instead, remember the flow:

```text
Execution Context
        ↓
Environment where JavaScript executes code
        ↓
Contains:
• Variable Environment
• Lexical Environment
• this Binding
        ↓
Two Phases:
• Creation Phase
• Execution Phase
        ↓
Function Ends
        ↓
Execution Context removed from Call Stack
```

If you explain it in this order during an interview, your answer will sound structured and demonstrate a solid understanding rather than memorization. This is exactly the style interviewers expect from frontend and product engineering candidates.

# 📘 JavaScript Execution Context – Interview Answers (11–20)

These are **intermediate to advanced** questions that interviewers ask after you've explained the basics.

---

# 11. What is the difference between Global Execution Context and Function Execution Context?

### Interview Answer

> The **Global Execution Context (GEC)** is created once when the JavaScript program starts and exists until the program finishes. It contains global variables, global functions, and the global `this` binding.
>
> A **Function Execution Context (FEC)** is created every time a function is invoked. Each function call gets its own execution context with its own local variables, parameters, lexical environment, and `this` binding. Once the function returns, its execution context is removed from the Call Stack unless a closure keeps it alive.

---

# 12. Why does every function call create a new Execution Context?

### Interview Answer

> Every function call creates a new Execution Context because each function needs its own independent memory, local variables, parameters, lexical environment, and `this` binding. This isolation prevents one function's local data from interfering with another function's execution.

---

# 13. How is Hoisting related to the Creation Phase of the Execution Context?

### Interview Answer

> Hoisting occurs during the **Creation Phase** of the Execution Context. Before any code executes, JavaScript scans the entire scope, allocates memory for variables and functions, initializes `var` variables with `undefined`, and stores function declarations with their complete definitions. `let` and `const` are also hoisted but remain uninitialized until execution reaches their declarations.

---

# 14. What is the relationship between Execution Context and the Call Stack?

### Interview Answer

> Every Execution Context is stored inside the Call Stack. When a function is called, JavaScript creates a new Function Execution Context and pushes it onto the Call Stack. When the function finishes, its execution context is popped from the stack. The Call Stack follows the **Last In, First Out (LIFO)** principle.

---

# 15. What is the difference between Execution Context and Scope?

### Interview Answer

> **Execution Context** is the runtime environment where JavaScript executes code. It manages variables, functions, the lexical environment, and the `this` binding.
>
> **Scope** defines the accessibility of variables in different parts of the code. In simple terms, Execution Context controls **how code runs**, while Scope controls **where variables can be accessed**.

---

# 16. What is the Variable Environment?

### Interview Answer

> The Variable Environment is a component of the Execution Context that stores variable declarations and function declarations for the current execution. During the Creation Phase, JavaScript allocates memory for these declarations inside the Variable Environment.

---

# 17. What is the Lexical Environment, and why is it important?

### Interview Answer

> The Lexical Environment is a component of the Execution Context that stores the current scope and a reference to its outer lexical environment. It is important because it enables variable lookup through the Scope Chain and makes closures possible.

---

# 18. How does JavaScript resolve variable lookup using the Lexical Environment?

### Interview Answer

> JavaScript first searches for a variable in the current Lexical Environment. If it doesn't find it, it follows the Outer Environment Reference to the parent lexical environment. This process continues until the variable is found or the global scope is reached. This mechanism is called the **Scope Chain**.

---

# 19. How do Closures depend on the Execution Context?

### Interview Answer

> Closures depend on the Lexical Environment stored inside the Execution Context. When an inner function is returned, it retains access to the outer function's lexical environment even after the outer function has finished executing. This allows the inner function to access variables that would normally be destroyed.

---

# 20. Explain the complete lifecycle of an Execution Context with an example.

### Interview Answer

> The lifecycle of an Execution Context consists of three stages:
>
> 1. **Creation Phase** – JavaScript allocates memory, hoists variables and functions, creates the lexical environment, and determines the `this` binding.
> 2. **Execution Phase** – JavaScript executes the code line by line, assigns values, evaluates expressions, and creates new execution contexts for function calls.
> 3. **Destruction Phase** – After the function returns, its Execution Context is removed from the Call Stack. Its memory becomes eligible for garbage collection unless a closure still references it.

**Example:**

```javascript
function greet(name) {
  return `Hello ${name}`;
}

greet("Sai");
```

> When `greet("Sai")` is called:
>
> * A Function Execution Context is created.
> * Memory is allocated for the parameter `name`.
> * The function executes and returns `"Hello Sai"`.
> * The Function Execution Context is removed from the Call Stack after execution.

---

Great! Now we'll move to the **most important part**. These are the **coding/output questions** that interviewers ask to check whether you actually understand **Execution Context** or you've just memorized the theory.

> **Interview Rule:** Don't just say the output. Explain it using:
>
> 1. Creation Phase
> 2. Execution Phase
> 3. Final Output

---

# 📘 JavaScript Execution Context – Coding Questions (1–10)

---

# Question 1

```javascript
console.log(a);

var a = 10;
```

## Interview Answer

### Step 1: Creation Phase

JavaScript creates the Global Execution Context.

Memory:

```text
a → undefined
```

Because `var` is hoisted and initialized with `undefined`.

---

### Step 2: Execution Phase

```javascript
console.log(a);
```

prints

```text
undefined
```

Then

```javascript
a = 10;
```

Memory becomes

```text
a → 10
```

---

### Final Output

```text
undefined
```

---

### Interview Tip

> "`var` declarations are hoisted and initialized with `undefined` during the Creation Phase. The assignment happens later during the Execution Phase."

---

# Question 2

```javascript
console.log(a);

let a = 10;
```

## Interview Answer

### Step 1: Creation Phase

Memory

```text
a → <uninitialized>
```

`let` is hoisted but not initialized.

It stays inside the **Temporal Dead Zone (TDZ).**

---

### Step 2

The first line

```javascript
console.log(a);
```

tries to access `a`

before initialization.

---

### Output

```text
ReferenceError
```

---

### Interview Tip

Never say

> "let is not hoisted."

That answer is incorrect.

Correct answer:

> "`let` is hoisted but remains uninitialized inside the Temporal Dead Zone until its declaration is executed."

---

# Question 3

```javascript
console.log(a);

const a = 10;
```

## Interview Answer

Exactly the same as `let`.

Creation Phase

```text
a → uninitialized
```

Execution

```javascript
console.log(a);
```

tries to access

```text
a
```

inside TDZ.

---

### Output

```text
ReferenceError
```

---

# Question 4

```javascript
hello();

function hello() {
    console.log("Hello");
}
```

## Interview Answer

### Creation Phase

Memory

```text
hello → complete function
```

Function declarations are fully hoisted.

---

Execution

```javascript
hello();
```

works successfully.

---

### Output

```text
Hello
```

---

### Interview Tip

Function declarations are completely available during the Creation Phase.

---

# Question 5

```javascript
hello();

var hello = function () {
    console.log("Hello");
};
```

## Interview Answer

### Creation Phase

Memory

```text
hello → undefined
```

Only the variable is hoisted.

The function assignment has not happened yet.

---

Execution

```javascript
hello();
```

becomes

```javascript
undefined();
```

---

### Output

```text
TypeError: hello is not a function
```

---

### Interview Tip

A function expression behaves like a normal `var` variable during hoisting.

---

# Question 6

```javascript
hello();

const hello = () => {
    console.log("Hello");
};
```

## Interview Answer

Creation Phase

```text
hello → uninitialized
```

Execution

```javascript
hello();
```

tries to access

```text
hello
```

inside TDZ.

---

### Output

```text
ReferenceError
```

---

### Interview Tip

Arrow functions follow the hoisting rules of the variable (`let` or `const`) they are assigned to.

---

# Question 7

```javascript
var a = 10;

function test() {
    var a = 20;
    console.log(a);
}

test();

console.log(a);
```

## Interview Answer

### Global Creation Phase

Memory

```text
a → undefined

test → function
```

---

Execution

```javascript
a = 10;
```

---

Function Call

A new Function Execution Context is created.

Memory

```text
a → undefined
```

Execution

```javascript
a = 20;

console.log(a);
```

prints

```text
20
```

Function ends.

Global Execution Context continues.

```javascript
console.log(a);
```

prints

```text
10
```

---

### Output

```text
20

10
```

---

### Interview Tip

Each function has its own Execution Context and its own local memory.

---

# Question 8

```javascript
function test() {

    console.log(a);

    var a = 5;
}

test();
```

## Interview Answer

### Function Creation Phase

Memory

```text
a → undefined
```

---

Execution

```javascript
console.log(a);
```

prints

```text
undefined
```

Then

```javascript
a = 5;
```

---

### Output

```text
undefined
```

---

### Interview Tip

Inside a function, `var` is hoisted only within that function's execution context.

---

# Question 9

```javascript
function test(){

    console.log(a);

    let a = 5;
}

test();
```

## Interview Answer

### Creation Phase

Memory

```text
a → uninitialized
```

Execution

```javascript
console.log(a);
```

tries to access

```text
a
```

inside TDZ.

---

### Output

```text
ReferenceError
```

---

# Question 10

```javascript
var a = 10;

function one(){

    var a = 20;

    function two(){

        console.log(a);
    }

    two();
}

one();
```

## Interview Answer

### Global Creation Phase

Memory

```text
a → undefined

one → function
```

Execution

```javascript
a = 10;
```

---

Function

```javascript
one();
```

creates a new Execution Context.

Memory

```text
a → undefined

two → function
```

Execution

```javascript
a = 20;
```

---

Now

```javascript
two();
```

creates another Execution Context.

Inside `two()`, JavaScript looks for `a`.

It first checks its own scope.

No `a`.

Then it follows the **Lexical Environment** to `one()`.

There it finds

```text
a = 20
```

So it prints

```text
20
```

---

### Output

```text
20
```

---

### Interview Tip

This question tests whether you understand **Execution Context**, **Lexical Environment**, and the **Scope Chain** together.

---

# ⭐ Common Mistakes in Interviews

❌ Saying "`let` is not hoisted."

✅ Correct:

> "`let` is hoisted but remains in the Temporal Dead Zone until its declaration is executed."

---

❌ Saying "JavaScript moves the code."

✅ Correct:

> "JavaScript doesn't physically move the code. During the Creation Phase, it allocates memory for declarations."

---

❌ Guessing outputs.

✅ Correct approach:

1. Draw the **Execution Context**.
2. Perform the **Creation Phase**.
3. Execute line by line.
4. For functions, create a **new Execution Context**.
5. Use the **Scope Chain** to resolve variables.

---

These first 10 coding questions are the ones interviewers ask most often because they directly test your understanding of the **Execution Context lifecycle**, **hoisting**, **function execution**, and **lexical scope**. Once you're comfortable with these, the next set of questions introduces more complex scenarios involving **nested functions, variable shadowing, closures, and multiple execution contexts**.

---


Excellent! Now we're entering the **advanced interview level**. These questions are commonly asked in **Amazon, Microsoft, Adobe, Walmart, ServiceNow, Atlassian, Freshworks, Zoho**, and other product companies because they test **Execution Context + Scope + Hoisting + Lexical Environment + Call Stack** together.

---

# 📘 JavaScript Execution Context – Coding Questions (11–20)

---

# Question 11

```javascript
var a = 10;

function one() {

    function two() {
        console.log(a);
    }

    var a = 20;

    two();
}

one();
```

## Interview Answer

### Step 1: Global Creation Phase

```text
Memory

a → undefined

one → function
```

### Step 2: Global Execution

```javascript
a = 10;

one();
```

A new Function Execution Context is created for `one()`.

---

### Step 3: Function Creation Phase

```text
Memory

a → undefined

two → function
```

---

### Step 4: Function Execution

```javascript
a = 20;

two();
```

Now `two()` is called.

A new Execution Context is created.

Inside `two()`, JavaScript looks for `a`.

* Current scope → Not found
* Outer Lexical Environment (`one`) → `a = 20`

So it prints:

```text
20
```

---

### Output

```text
20
```

---

### Interview Tip

> Variable lookup depends on the **Lexical Environment**, not on where the function is called.

---

# Question 12

```javascript
var a = 10;

function one() {

    function two() {
        console.log(a);
    }

    two();

    var a = 20;
}

one();
```

---

## Interview Answer

### Creation Phase of `one()`

```text
Memory

a → undefined

two → function
```

---

Execution begins.

The first statement is:

```javascript
two();
```

Inside `two()`,

JavaScript searches for `a`.

* Current scope → No
* Outer scope (`one`) → `a = undefined`

The assignment

```javascript
a = 20;
```

hasn't executed yet.

---

### Output

```text
undefined
```

---

### Interview Tip

> Hoisting occurs before execution, but assignments happen during execution.

---

# Question 13

```javascript
var a = 10;

function test() {

    console.log(a);

    var a = 20;
}

test();
```

---

## Interview Answer

### Creation Phase

```text
Memory

a → undefined
```

---

Execution

```javascript
console.log(a);
```

prints

```text
undefined
```

because the local variable shadows the global variable.

Then

```javascript
a = 20;
```

---

### Output

```text
undefined
```

---

### Interview Tip

This is called **Variable Shadowing**.

The local variable hides the global variable.

---

# Question 14

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

---

## Interview Answer

Execution Contexts created:

```text
Global

↓

one()

↓

two()

↓

three()
```

Call Stack

```text
Global

↓

one

↓

two

↓

three
```

Then

```text
three removed

↓

two removed

↓

one removed

↓

Global
```

---

### Output

```text
Done
```

---

### Interview Tip

Interviewers usually ask you to draw the **Call Stack**.

---

# Question 15

```javascript
function count(n){

    if(n===0) return;

    console.log(n);

    count(n-1);
}

count(3);
```

---

## Interview Answer

Execution Contexts created:

```text
Global

↓

count(3)

↓

count(2)

↓

count(1)

↓

count(0)
```

Each recursive call creates a **new Function Execution Context**.

---

### Output

```text
3

2

1
```

---

### Interview Tip

Every recursive call gets its own:

* Local variables
* Parameters
* Lexical Environment
* `this`

---

# Question 16

```javascript
function outer(){

    let a = 10;

    function inner(){
        console.log(a);
    }

    return inner;
}

const fn = outer();

fn();
```

---

## Interview Answer

`outer()` creates an Execution Context.

Inside it,

```javascript
a = 10;
```

`inner` is returned.

Normally, `outer()` would be removed.

But the returned function still references `a`.

Therefore,

the Lexical Environment is preserved.

---

### Output

```text
10
```

---

### Interview Tip

This is the foundation of **Closures**.

---

# Question 17

```javascript
function outer(){

    let a = 10;

    function inner(){

        let b = 20;

        console.log(a,b);
    }

    inner();
}

outer();
```

---

## Interview Answer

Execution Contexts

```text
Global

↓

outer

↓

inner
```

Inside `inner()`:

`b` is found locally.

`a` is found through the Outer Lexical Environment.

---

### Output

```text
10 20
```

---

### Interview Tip

This demonstrates **Lexical Scope**.

---

# Question 18

```javascript
function test(){

    console.log(foo);

    function foo(){}

    var foo = 100;

    console.log(foo);
}

test();
```

---

## Interview Answer

Creation Phase

Function declarations are hoisted before `var`.

Memory

```text
foo → function
```

Execution

First

```javascript
console.log(foo);
```

prints the function.

Then

```javascript
foo = 100;
```

Second

```javascript
console.log(foo);
```

prints

```text
100
```

---

### Output

```text
[Function: foo]

100
```

---

### Interview Tip

Function declarations have higher priority than `var` during the Creation Phase.

---

# Question 19

```javascript
function a(){

    console.log("A");

    b();

    console.log("AA");
}

function b(){

    console.log("B");

    c();

    console.log("BB");
}

function c(){

    console.log("C");
}

a();
```

---

## Interview Answer

Call Stack

```text
Global

↓

a

↓

b

↓

c
```

Execution

```text
A

↓

B

↓

C

↓

BB

↓

AA
```

---

### Output

```text
A

B

C

BB

AA
```

---

### Interview Tip

Understand that the Call Stack follows the **Last In, First Out (LIFO)** principle.

---

# Question 20 ⭐⭐⭐⭐⭐ (Most Asked)

```javascript
var x = 10;

function outer(){

    console.log(x);

    function inner(){
        console.log(x);
    }

    var x = 20;

    inner();
}

outer();
```

---

## Interview Answer

### Step 1: Global Creation Phase

```text
x → undefined

outer → function
```

Execution

```javascript
x = 10;

outer();
```

---

### Step 2: Function Creation Phase

Memory

```text
x → undefined

inner → function
```

---

### Step 3: Function Execution

First line

```javascript
console.log(x);
```

prints

```text
undefined
```

because the local `var x` shadows the global `x`.

Then

```javascript
x = 20;
```

Now

```javascript
inner();
```

Inside `inner()`,

JavaScript looks for `x`.

* Current scope → Not found
* Outer Lexical Environment → `x = 20`

So it prints

```text
20
```

---

### Output

```text
undefined

20
```

---

### 🎯 Interview Explanation

> During the Creation Phase of `outer()`, the local variable `x` is hoisted and initialized with `undefined`. Therefore, the first `console.log(x)` accesses the local `x`, not the global one, resulting in `undefined`. After assigning `20` to the local `x`, the `inner()` function accesses the same local variable through lexical scoping, so it prints `20`.

---

# 🔥 Top 5 Coding Questions Asked Repeatedly

If you're preparing for interviews, these five appear very frequently:

1. **`var` Hoisting**

```javascript
console.log(a);
var a = 10;
```

---

2. **Function Declaration vs Function Expression**

```javascript
hello();

function hello(){}
```

vs

```javascript
hello();

var hello = function(){}
```

---

3. **Variable Shadowing**

```javascript
var a = 10;

function test(){

    console.log(a);

    var a = 20;
}
```

---

4. **Nested Function + Lexical Scope**

```javascript
function outer(){

    let a = 10;

    function inner(){

        console.log(a);
    }

    inner();
}
```

---

5. **Call Stack**

```javascript
one();

↓

two();

↓

three();
```

Be able to **draw the Call Stack** and explain how execution contexts are pushed and popped.

---

# 🎉 Congratulations!

You have now completed the **Execution Context** module from an interview perspective.

## 🚀 What should you study next?

The best next topic is:

### **Scope & Lexical Environment**

Why?

Because Execution Context creates the **Lexical Environment**, and understanding it deeply will make **Closures**, **Hoisting**, and **Variable Lookup** much easier. It's the natural next step in mastering JavaScript's execution model.

