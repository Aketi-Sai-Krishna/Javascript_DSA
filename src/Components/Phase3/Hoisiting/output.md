Excellent. These answers are written in the style expected in **Frontend (React/JavaScript) product company interviews**. I've kept them concise enough to remember but detailed enough to demonstrate understanding.

---

# JavaScript Hoisting Interview Questions & Answers

# Part 1 (Questions 1–20)

---

## 1. What is hoisting in JavaScript?

### Answer

Hoisting is JavaScript's behavior during the **Creation Phase** of an **Execution Context**, where memory is allocated for declarations before the code executes.

It does **not** physically move code to the top. Instead, JavaScript scans the current scope and registers variables, functions, and classes in memory before the Execution Phase begins.

---

## 2. Is hoisting a real movement of code?

### Answer

No.

Hoisting is **not** the physical movement of code. It is the JavaScript engine allocating memory for declarations during the Creation Phase.

Example:

```javascript
console.log(a);
var a = 10;
```

The code is not rewritten internally as:

```javascript
var a;
console.log(a);
a = 10;
```

That's only a conceptual way to understand it.

---

## 3. When does hoisting happen?

### Answer

Hoisting happens during the **Creation Phase (Memory Creation Phase)** of an Execution Context, before the code starts executing.

---

## 4. What are the two phases of an Execution Context?

### Answer

Execution Context consists of two phases:

### 1. Creation Phase

* Creates the Lexical Environment
* Allocates memory
* Hoists declarations
* Initializes `var` with `undefined`
* Stores function declarations

### 2. Execution Phase

* Executes code line by line
* Assigns values to variables
* Executes function calls
* Evaluates expressions

---

## 5. In which phase does hoisting occur?

### Answer

Hoisting occurs during the **Creation Phase** of an Execution Context.

---

## 6. Why does JavaScript perform hoisting?

### Answer

JavaScript performs hoisting so that it knows about all declarations before execution begins.

During the Creation Phase, JavaScript scans the entire scope and allocates memory for variables and functions. This ensures identifiers exist before the Execution Phase starts.

One benefit is that function declarations can be called before they appear in the code.

---

## 7. What gets hoisted in JavaScript?

### Answer

The following declarations are hoisted:

* `var`
* `let`
* `const`
* Function declarations
* Class declarations

Function expressions and arrow functions are **not hoisted as functions**. Only the variables holding them are hoisted.

---

## 8. Are variables hoisted?

### Answer

Yes.

All variable declarations (`var`, `let`, and `const`) are hoisted.

However, they behave differently:

* `var` → initialized with `undefined`
* `let` → uninitialized (TDZ)
* `const` → uninitialized (TDZ)

---

## 9. Are functions hoisted?

### Answer

Yes, **function declarations** are fully hoisted.

The complete function object is stored during the Creation Phase, allowing the function to be called before its declaration.

Example:

```javascript
sayHello();

function sayHello() {
    console.log("Hello");
}
```

Output:

```
Hello
```

---

## 10. Is `let` hoisted?

### Answer

Yes.

`let` is hoisted, but it is **not initialized** during the Creation Phase.

Until its declaration executes, it remains in the **Temporal Dead Zone (TDZ)**. Accessing it before initialization results in a `ReferenceError`.

---

## 11. Is `const` hoisted?

### Answer

Yes.

Like `let`, `const` is hoisted but remains uninitialized until its declaration executes. Accessing it before initialization throws a `ReferenceError`.

---

## 12. Is `class` hoisted?

### Answer

Yes.

Class declarations are hoisted but remain in the **Temporal Dead Zone** until the class declaration executes.

Example:

```javascript
const p = new Person();

class Person {}
```

Output:

```
ReferenceError
```

---

## 13. What is the difference between hoisting and initialization?

### Answer

**Hoisting** is the process of allocating memory for declarations during the Creation Phase.

**Initialization** is assigning the first value to a variable during the Execution Phase.

Example:

```javascript
var a = 10;
```

Creation Phase:

```
a → undefined
```

Execution Phase:

```
a → 10
```

---

## 14. Why does `var` return `undefined` before initialization?

### Answer

During the Creation Phase, JavaScript allocates memory for `var` variables and automatically initializes them with `undefined`.

Therefore, if a `var` variable is accessed before its assignment, JavaScript returns `undefined` instead of throwing an error.

Example:

```javascript
console.log(a);

var a = 10;
```

Output:

```
undefined
```

---

## 15. Why do `let` and `const` throw a `ReferenceError`?

### Answer

`let` and `const` are hoisted but remain **uninitialized** during the Creation Phase.

Until their declaration executes, they stay inside the **Temporal Dead Zone (TDZ)**.

Accessing them before initialization throws a `ReferenceError`.

---

## 16. Explain hoisting using the Creation Phase and Execution Phase.

### Answer

During the **Creation Phase**, JavaScript scans the current scope, allocates memory for declarations, initializes `var` with `undefined`, stores function declarations, and creates bindings for `let`, `const`, and `class`.

During the **Execution Phase**, JavaScript executes the code line by line, assigns values to variables, and executes function calls.

Hoisting is the behavior observed during the Creation Phase.

---

## 17. What happens during the Memory Creation Phase?

### Answer

During the Memory Creation Phase, JavaScript:

* Creates the Lexical Environment
* Creates the Variable Environment
* Allocates memory for declarations
* Initializes `var` with `undefined`
* Stores function declarations as complete function objects
* Creates uninitialized bindings for `let`, `const`, and `class`
* Prepares the Execution Context for execution

---

## 18. What does JavaScript store in memory during hoisting?

### Answer

During hoisting, JavaScript stores:

* `var` → `undefined`
* Function declarations → complete function object
* `let` → uninitialized
* `const` → uninitialized
* `class` → uninitialized

---

## 19. Why are function declarations callable before their declaration?

### Answer

Function declarations are fully hoisted.

During the Creation Phase, JavaScript stores the complete function object in memory.

Therefore, when the function is called before its declaration, JavaScript already knows about it.

---

## 20. Why are function expressions not callable before assignment?

### Answer

Function expressions are assigned to variables.

During the Creation Phase, only the variable is hoisted—not the function assignment.

Example:

```javascript
sayHi();

var sayHi = function () {};
```

Creation Phase:

```
sayHi → undefined
```

Execution Phase:

```
sayHi();
```

Since `sayHi` is `undefined`, calling it results in:

```
TypeError: sayHi is not a function
```

---

# Part 2 (Questions 21–40)

---

## 21. What is the difference between declaration and initialization?

### Answer

A **declaration** introduces a variable, function, or class to the current scope.

An **initialization** assigns the first value to that variable.

Example:

```javascript
let age;       // Declaration

age = 25;      // Initialization
```

Or:

```javascript
let age = 25;
```

Here, declaration and initialization happen in the same statement.

---

## 22. Explain the memory representation of `var`, `let`, and `const`.

### Answer

During the Creation Phase:

```
var a

↓

a → undefined
```

```
let b

↓

b → uninitialized
```

```
const c

↓

c → uninitialized
```

During the Execution Phase:

```
a → assigned value

b → assigned value

c → assigned value
```

---

## 23. What is the Temporal Dead Zone (TDZ)?

### Answer

The Temporal Dead Zone (TDZ) is the period between the creation of a `let`, `const`, or `class` binding and the execution of its declaration.

During this period, the variable exists but cannot be accessed. Attempting to access it throws a `ReferenceError`.

---

## 24. When does the TDZ begin?

### Answer

The TDZ begins **at the start of the block scope** where the `let`, `const`, or `class` is declared.

Example:

```javascript
{
    // TDZ starts here

    console.log(a);

    let a = 10;
}
```

---

## 25. When does the TDZ end?

### Answer

The TDZ ends **when the declaration is executed and the variable is initialized**.

Example:

```javascript
let a = 10;
```

After this line executes, `a` can be accessed normally.

---

## 26. Does `let` exist before initialization?

### Answer

Yes.

`let` exists because memory has been allocated for it during the Creation Phase.

However, it remains **uninitialized** and cannot be accessed until its declaration executes.

---

## 27. Why does JavaScript create the TDZ?

### Answer

The TDZ is a safety feature.

It prevents developers from accidentally using variables before they have been initialized, reducing bugs and making code behavior more predictable.

---

## 28. Can `var` enter the TDZ?

### Answer

No.

`var` is initialized with `undefined` during the Creation Phase, so it never enters the Temporal Dead Zone.

---

## 29. Is hoisting different inside functions?

### Answer

No.

Every function call creates its own **Function Execution Context**, which has its own Creation Phase and Execution Phase.

Hoisting occurs inside every Execution Context, whether global or function.

---

## 30. Are function parameters hoisted?

### Answer

Function parameters are not "hoisted" in the same way as variables.

They are created and initialized when the Function Execution Context is created, making them immediately available inside the function.

Example:

```javascript
function greet(name) {
    console.log(name);
}

greet("Sai");
```

Output:

```
Sai
```

---

## 31. What is the output?

```javascript
console.log(a);

var a = 10;
```

### Answer

Output:

```
undefined
```

Reason:

`var` is hoisted and initialized with `undefined` during the Creation Phase.

---

## 32. What is the output?

```javascript
console.log(a);

let a = 10;
```

### Answer

Output:

```
ReferenceError
```

Reason:

`let` is hoisted but remains in the TDZ until initialization.

---

## 33. What is the output?

```javascript
console.log(a);

const a = 10;
```

### Answer

Output:

```
ReferenceError
```

Reason:

`const` is hoisted but remains in the TDZ until initialization.

---

## 34. What is the output?

```javascript
sayHi();

function sayHi() {
    console.log("Hello");
}
```

### Answer

Output:

```
Hello
```

Reason:

Function declarations are fully hoisted.

---

## 35. What is the output?

```javascript
sayHi();

var sayHi = function () {
    console.log("Hello");
};
```

### Answer

Output:

```
TypeError: sayHi is not a function
```

Reason:

Only the variable is hoisted (`undefined`), not the function assignment.

---

## 36. What is the output?

```javascript
sayHi();

let sayHi = function () {};
```

### Answer

Output:

```
ReferenceError
```

Reason:

The variable is in the TDZ.

---

## 37. What is the output?

```javascript
sayHi();

const sayHi = () => {};
```

### Answer

Output:

```
ReferenceError
```

Reason:

The variable is in the TDZ until initialization.

---

## 38. What is the output?

```javascript
var a = 10;

function a() {}

console.log(a);
```

### Answer

Output:

```
10
```

Reason:

During the Creation Phase, the function declaration takes precedence over the `var` declaration. During the Execution Phase, `a = 10` overwrites the function reference.

---

## 39. What is the output?

```javascript
console.log(a);

function a() {}

var a = 20;
```

### Answer

Output:

```
function a() {}
```

Reason:

The function declaration is fully hoisted and stored in memory before execution. The assignment `a = 20` has not executed yet when `console.log(a)` runs.

---

## 40. What is the output?

```javascript
function test() {
    console.log(a);

    var a = 5;
}

test();
```

### Answer

Output:

```
undefined
```

Reason:

A new Function Execution Context is created. During its Creation Phase, `var a` is initialized with `undefined`. Therefore, `console.log(a)` prints `undefined` before `a` is assigned `5`.

---
Excellent. Part 3 and Part 4 cover the **advanced questions** that distinguish an intermediate JavaScript developer from someone who truly understands how the language works. These are commonly asked in **product-based companies** (e.g., startups, Microsoft, Adobe, Walmart Global Tech, Atlassian, etc.).

---

# JavaScript Hoisting Interview Questions & Answers

# Part 3 (Questions 41–60)

---

## 41. What is the output?

```javascript
function test() {
    console.log(a);
    let a = 5;
}

test();
```

### Answer

**Output**

```text
ReferenceError
```

### Explanation

`let` is hoisted but remains **uninitialized** during the Creation Phase. When `console.log(a)` executes, `a` is still in the **Temporal Dead Zone (TDZ)**, so JavaScript throws a `ReferenceError`.

---

## 42. What is the output?

```javascript
{
    console.log(x);
    let x = 5;
}
```

### Answer

**Output**

```text
ReferenceError
```

### Explanation

The TDZ starts at the beginning of the block and ends when `let x = 5` executes.

---

## 43. What is the output?

```javascript
{
    var x = 5;
}

console.log(x);
```

### Answer

**Output**

```text
5
```

### Explanation

`var` is **function-scoped**, not block-scoped. Therefore, the block does not create a new scope for `x`.

---

## 44. What is the output?

```javascript
{
    let x = 5;
}

console.log(x);
```

### Answer

**Output**

```text
ReferenceError
```

### Explanation

`let` is block-scoped, so `x` exists only inside the block.

---

## 45. What is the output?

```javascript
console.log(typeof x);

let x = 5;
```

### Answer

**Output**

```text
ReferenceError
```

### Explanation

Although `typeof` usually returns `"undefined"` for undeclared variables, it **does not bypass the TDZ**. If a `let` or `const` binding exists but is still in the TDZ, `typeof` also throws a `ReferenceError`.

---

## 46. Why are function declarations fully hoisted while function expressions are not?

### Answer

Function declarations are stored as complete function objects during the Creation Phase.

Function expressions are assigned to variables. During the Creation Phase, only the variable is hoisted. The function object is assigned later during the Execution Phase.

---

## 47. Explain hoisting using Execution Context diagrams.

### Answer

During the **Creation Phase**:

```text
Global Memory

a → undefined

sayHi → function object

b → uninitialized
```

During the **Execution Phase**:

```text
a = 10

sayHi()

b = 20
```

Hoisting is the memory allocation that happens before execution begins.

---

## 48. Why is `var` initialized with `undefined`?

### Answer

JavaScript initializes `var` with `undefined` during the Creation Phase so the variable exists before execution starts. This avoids a `ReferenceError` when a `var` variable is accessed before its assignment.

---

## 49. Why didn't JavaScript initialize `let` with `undefined`?

### Answer

If `let` behaved like `var`, developers could accidentally use variables before assigning meaningful values.

The TDZ was introduced to prevent this and make code safer by throwing a `ReferenceError` instead of silently returning `undefined`.

---

## 50. What would happen if JavaScript had no hoisting?

### Answer

Without hoisting:

* Function declarations could not be called before their declaration.
* Variables would not exist until their declaration line executed.
* JavaScript would throw errors much more frequently.
* The language would be less flexible and backward compatibility would break.

---

## 51. Why is hoisting considered a side effect of the Creation Phase?

### Answer

Hoisting is not a separate step in JavaScript.

It is the **observable behavior** that results from the Creation Phase allocating memory for declarations before execution begins.

---

## 52. Explain hoisting with memory allocation diagrams.

### Answer

Example:

```javascript
var a = 10;

let b = 20;

function test(){}
```

Creation Phase:

```text
Memory

a → undefined

b → uninitialized

test → function object
```

Execution Phase:

```text
a → 10

b → 20
```

---

## 53. Does hoisting happen every time a function is called?

### Answer

Yes.

Every function call creates a new **Function Execution Context**, and each Execution Context has its own Creation Phase where hoisting occurs.

---

## 54. Does every Execution Context perform hoisting?

### Answer

Yes.

Both the **Global Execution Context** and every **Function Execution Context** perform hoisting during their Creation Phase.

---

## 55. Explain hoisting inside nested functions.

### Answer

Each nested function creates its own Execution Context when invoked.

Each Execution Context has its own Creation Phase, so hoisting happens independently inside every function scope.

---

## 56. Does hoisting work inside block scope?

### Answer

Yes.

Block-scoped declarations (`let`, `const`, and `class`) are hoisted within their block, but they remain in the TDZ until initialized.

---

## 57. Can block scope create a new TDZ?

### Answer

Yes.

Every block containing `let`, `const`, or `class` creates its own Temporal Dead Zone.

---

## 58. Explain hoisting inside loops.

### Answer

If a loop declares variables using `let` or `const`, each iteration creates a new block scope, and those variables are hoisted within that block and remain subject to the TDZ.

If `var` is used, it is function-scoped and shared across iterations.

---

## 59. How is hoisting different for the Global Execution Context and Function Execution Context?

### Answer

The hoisting process is the same.

The difference is **scope**:

* Global Execution Context hoists global declarations.
* Function Execution Context hoists declarations inside that function only.

---

## 60. Explain the lifecycle of a variable from declaration to garbage collection.

### Answer

1. JavaScript scans the scope.
2. Memory is allocated during the Creation Phase.
3. Variable is initialized (depending on its type).
4. Value is assigned during the Execution Phase.
5. Variable is used while reachable.
6. When no longer reachable, it becomes eligible for garbage collection.

---

# Part 4 (Questions 61–80)

---

## 61. Is hoisting part of the JavaScript language or the JavaScript engine implementation?

### Answer

Hoisting is not explicitly defined as a feature called "hoisting" in the language specification. It is the common term used to describe the behavior that results from how JavaScript creates bindings during the Creation Phase of an Execution Context, as defined by the language specification.

---

## 62. How does the JavaScript engine know all declarations before execution starts?

### Answer

Before executing code, JavaScript creates an Execution Context.

During the Creation Phase, it scans the current scope, creates bindings for declarations, allocates memory, and stores the necessary information before the Execution Phase begins.

---

## 63. Does JavaScript hoist imported modules?

### Answer

`import` declarations are processed before the module's code executes, which is why imported bindings are available throughout the module. However, module loading and initialization follow module-specific rules and are not the same mechanism as `var` hoisting.

---

## 64. How are `import` and hoisting related?

### Answer

Both are processed before execution begins, but they are different concepts.

* Hoisting applies to declarations within an Execution Context.
* `import` declarations are resolved as part of the ES module loading and linking process before module execution.

---

## 65. Why is `ReferenceError` thrown before initialization but `TypeError` thrown when calling an undefined function expression?

### Answer

**ReferenceError**

Occurs when accessing a `let`, `const`, or `class` variable in the TDZ.

Example:

```javascript
console.log(a);

let a = 10;
```

---

**TypeError**

Occurs when trying to call something that exists but is not callable.

Example:

```javascript
var greet;

greet();
```

or

```javascript
greet();

var greet = function(){};
```

During the Creation Phase:

```text
greet → undefined
```

`undefined` exists but is not a function.

---

## 66. Can hoisting affect closures?

### Answer

Indirectly, yes.

Closures capture variable bindings from their lexical scope. Since those bindings are created during the Creation Phase, hoisting determines that the bindings exist before execution, but closures themselves are a separate concept.

---

## 67. Can hoisting create bugs?

### Answer

Yes.

Using `var` can lead to unexpected `undefined` values or scope-related bugs.

Example:

```javascript
console.log(count);

var count = 10;
```

Instead of throwing an error, it prints `undefined`, which can hide mistakes.

---

## 68. What are some real-world issues caused by hoisting?

### Answer

Common issues include:

* Accidentally using variables before initialization.
* Bugs caused by `var` being function-scoped instead of block-scoped.
* Confusion between function declarations and function expressions.
* Unexpected `undefined` values.

---

## 69. Why do many JavaScript style guides discourage the use of `var`?

### Answer

Because `var`:

* Is function-scoped instead of block-scoped.
* Is initialized with `undefined`, which can hide bugs.
* Can be redeclared in the same scope.
* Makes code harder to reason about.

Modern JavaScript prefers `let` and `const`.

---

## 70. Explain the difference between hoisting, scope, and the Temporal Dead Zone.

### Answer

* **Hoisting**: Memory allocation for declarations before execution.
* **Scope**: Determines where a variable can be accessed.
* **Temporal Dead Zone (TDZ)**: The period during which a `let`, `const`, or `class` binding exists but cannot yet be accessed.

---

## 71. Is this statement correct?

> "Hoisting means moving variables to the top."

### Answer

No.

Nothing is physically moved.

Hoisting is the result of JavaScript allocating memory for declarations during the Creation Phase.

---

## 72. Why does this work?

```javascript
hello();

function hello(){}
```

But this doesn't?

```javascript
hello();

const hello = () => {};
```

### Answer

Function declarations are fully hoisted.

Arrow functions are assigned to variables. With `const`, the variable remains in the TDZ until initialization.

---

## 73. Why is the error different here?

```javascript
console.log(a);

let a = 10;
```

vs

```javascript
var a = 10;

a();
```

### Answer

First example:

`ReferenceError`

Because `a` is in the TDZ.

Second example:

`TypeError`

Because `a` exists (its value is `10`), but numbers are not callable as functions.

---

## 74. Explain the difference between `ReferenceError` and `TypeError` in terms of hoisting.

### Answer

* **ReferenceError** occurs when trying to access a binding before it is initialized (TDZ) or when an identifier does not exist.
* **TypeError** occurs when the identifier exists, but its value is not compatible with the attempted operation (such as calling a non-function).

---

## 75. Why is the TDZ considered a language safety feature?

### Answer

The TDZ prevents variables from being used before initialization, catching mistakes early and making programs more predictable.

---

## 76. If `let` is hoisted, why can't we access it before initialization?

### Answer

Because memory is allocated during the Creation Phase, but the binding remains uninitialized until the declaration executes. Accessing it before then results in a `ReferenceError`.

---

## 77. Can a variable exist in memory but still be inaccessible?

### Answer

Yes.

`let`, `const`, and `class` bindings exist in memory after the Creation Phase but are inaccessible while in the TDZ.

---

## 78. Does hoisting happen inside `if` blocks?

### Answer

Yes.

`let`, `const`, and `class` declarations are hoisted within the block and are subject to the TDZ.

`var` declarations are hoisted to the nearest function or global scope.

---

## 79. Does hoisting happen inside `try...catch` blocks?

### Answer

Yes.

Each block in a `try...catch` statement has its own block scope. Hoisting occurs within those block scopes for `let`, `const`, and `class`.

---

## 80. Explain hoisting as if you were teaching a beginner.

### Answer

JavaScript doesn't immediately execute your code. Before execution starts, it first scans the current scope and allocates memory for variables, functions, and classes. This preparation happens during the Creation Phase of the Execution Context.

Because declarations are already registered in memory before execution, they appear to be available before their declaration in the code. This behavior is called **hoisting**. It's not that the code moves—it's that JavaScript prepares the execution environment before running the program.

---

