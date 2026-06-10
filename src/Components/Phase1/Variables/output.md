# JavaScript Variables — Questions & Answers

## 1. Create a variable called `name` and store your name.

### Answer

```js id="qa01"
let name = "Sai";
console.log(name);
```

---

# 2. Create variables for age, city, and country. Print all values.

### Answer

```js id="qa02"
const age = 25;
let city = "Hyderabad";
const country = "India";

console.log(age);
console.log(city);
console.log(country);
```

---

# 3. Store two numbers and print their sum.

### Answer

```js id="qa03"
let a = 10;
let b = 20;

let sum = a + b;

console.log(sum);
```

---

# 4. Change the value of a variable declared using `let`.

### Answer

```js id="qa04"
let score = 10;

score = 20;

console.log(score);
```

Output:

```text id="qa05"
20
```

---

# 5. Try changing a `const` variable.

### Answer

```js id="qa06"
const country = "India";

country = "USA";
```

Output:

```text id="qa07"
TypeError: Assignment to constant variable
```

Explanation:
`const` variables cannot be reassigned.

---

# 6. Combine first name and last name into full name.

### Answer

```js id="qa08"
const firstName = "John";
const lastName = "Doe";

const fullName = firstName + " " + lastName;

console.log(fullName);
```

---

# 7. Create variables for boolean, string, and number data types.

### Answer

```js id="qa09"
let isLoggedIn = true;
let userName = "Sai";
let age = 25;
```

---

# 8. Use `typeof` on different variables.

### Answer

```js id="qa10"
let isLoggedIn = true;
let userName = "Sai";
let age = 25;

console.log(typeof isLoggedIn);
console.log(typeof userName);
console.log(typeof age);
```

Output:

```text id="qa11"
boolean
string
number
```

---

# 9. Swap two variable values using a temporary variable.

### Answer

```js id="qa12"
let x = 10;
let y = 20;

let temp = x;

x = y;
y = temp;

console.log(x);
console.log(y);
```

Output:

```text id="qa13"
20
10
```

---

# 10. Store marks of 5 subjects and calculate total.

### Answer

```js id="qa14"
const telugu = 100;
const hindi = 80;
const english = 90;
const maths = 95;
const science = 85;

const totalMarks =
  telugu + hindi + english + maths + science;

console.log(totalMarks);
```

---

# 11. Identify valid and invalid variable names.

### Answer

✅ Valid

```js id="qa15"
let firstName;
let totalMarks;
```

❌ Invalid

```js id="qa16"
let 1name;
let user-name;
```

Explanation:

* Variable names cannot start with numbers.
* Hyphen (`-`) is not allowed in variable names.

---

# 12. Convert names into camelCase format.

### Answer

```js id="qa17"
let totalMarks;
let loginStatus;
let userScore;
```

---

# 13. Explain declaration, initialization, and assignment.

### Answer

## Declaration

Creating a variable name.

```js id="qa18"
let name;
```

---

## Initialization

Giving first value to variable.

```js id="qa19"
let name = "Sai";
```

---

## Assignment

Changing or setting value later.

```js id="qa20"
name = "Krishna";
```

---

# 14. Explain reassignment.

### Answer

Reassignment means changing the value of an existing variable.

```js id="qa21"
let age = 25;

age = 30;

console.log(age);
```

---

# 15. Predict the output.

### Code

```js id="qa22"
let a = 10;

a = 20;

console.log(a);
```

### Output

```text id="qa23"
20
```

---

# 16. Explain: variable → value in memory

### Answer

Variables are named references that point to values stored in memory.

Example:

```js id="qa24"
let age = 25;
```

Memory representation:

```text id="qa25"
age → 25
```

---

# 17. What happens internally when JavaScript sees `let age = 22`?

### Answer

JavaScript executes code in two phases:

## 1. Memory Creation Phase

The variable is stored in memory.

```text id="qa26"
age → uninitialized
```

---

## 2. Execution Phase

The value is assigned.

```text id="qa27"
age → 22
```

Explanation:
`let` variables are hoisted but remain in the Temporal Dead Zone until initialization.

---

# 18. Difference between `var`, `let`, and `const`.

### Answer

| Feature      | `var`    | `let` | `const` |
| ------------ | -------- | ----- | ------- |
| Scope        | Function | Block | Block   |
| Reassign     | ✅        | ✅     | ❌       |
| Redeclare    | ✅        | ❌     | ❌       |
| Hoisted      | ✅        | ✅     | ✅       |
| TDZ          | ❌        | ✅     | ✅       |
| Modern Usage | ❌        | ✅     | ✅       |

---

# 19. When should you use `let` and `const`?

### Answer

Use:

* `const` when value should not change
* `let` when value needs reassignment

Example:

```js id="qa28"
const API_URL = "/users";

let loading = true;
```

---

# 20. Why is `var` avoided in modern JavaScript?

### Answer

`var` is avoided because:

* it ignores block scope
* allows redeclaration
* creates hoisting confusion
* can introduce bugs in large applications

---

# 21. Predict the output.

### Code

```js id="qa29"
{
  let a = 10;
}

console.log(a);
```

### Output

```text id="qa30"
ReferenceError
```

Explanation:
`let` is block scoped.

---

# 22. Predict the output.

### Code

```js id="qa31"
{
  var a = 10;
}

console.log(a);
```

### Output

```text id="qa32"
10
```

Explanation:
`var` ignores block scope.

---

# 23. Explain block scope.

### Answer

Block scope means variables declared using `let` and `const` can only be accessed inside the block `{}` where they are declared.

Example:

```js id="qa33"
{
  let num = 10;
  console.log(num);
}
```

---

# 24. Explain function scope.

### Answer

Function scope means variables declared inside a function are accessible only within that function.

Example:

```js id="qa34"
function test() {
  var a = 10;
  console.log(a);
}
```

---

# 25. Explain global scope.

### Answer

Global scope means variables declared outside functions and blocks can be accessed from anywhere in the program.

Example:

```js id="qa35"
let name = "Sai";

function test() {
  console.log(name);
}
```

---

# 26. Predict the output.

### Code

```js id="qa36"
let a = 100;

{
  let a = 200;
  console.log(a);
}

console.log(a);
```

### Output

```text id="qa37"
200
100
```

Explanation:
Both variables exist in different block scopes.

---

# 27. Predict the output.

### Code

```js id="qa38"
var a = 100;

{
  var a = 200;
}

console.log(a);
```

### Output

```text id="qa39"
200
```

Explanation:
`var` ignores block scope.

---

# 28. Which variables are block scoped?

### Answer

`let` and `const` are block scoped.

---

# 29. Difference between block scope and function scope.

### Answer

## Block Scope

Variables exist only inside `{}` blocks.

```js id="qa40"
{
  let a = 10;
}
```

---

## Function Scope

Variables exist only inside functions.

```js id="qa41"
function test() {
  var a = 10;
}
```

---

# 30. Why is scope important in large applications?

### Answer

Scope is important because it:

* prevents variable conflicts
* improves security
* avoids accidental modifications
* makes debugging easier
* improves maintainability of large applications

---

# JavaScript Variables — Intermediate to Advanced Questions & Answers (31–60)

---

# 31. Predict the output.

### Code

```js id="q31a"
console.log(a);

var a = 10;
```

### Output

```text id="q31b"
undefined
```

### Explanation

`var` variables are hoisted and initialized with `undefined` during the memory creation phase.

---

# 32. Predict the output.

### Code

```js id="q32a"
console.log(a);

let a = 10;
```

### Output

```text id="q32b"
ReferenceError
```

### Explanation

`let` variables are hoisted but remain in the Temporal Dead Zone until initialization.

---

# 33. Predict the output.

### Code

```js id="q33a"
console.log(a);

const a = 10;
```

### Output

```text id="q33b"
ReferenceError
```

### Explanation

`const` variables are hoisted but inaccessible before initialization.

---

# 34. What is hoisting?

### Answer

Hoisting is JavaScript’s behavior of moving variable and function declarations into memory before code execution starts.

Example:

```js id="q34a"
console.log(a);

var a = 10;
```

Internally:

```js id="q34b"
var a;

console.log(a);

a = 10;
```

---

# 35. What is Temporal Dead Zone (TDZ)?

### Answer

Temporal Dead Zone is the time between variable hoisting and variable initialization where `let` and `const` cannot be accessed.

Example:

```js id="q35a"
console.log(a);

let a = 10;
```

Output:

```text id="q35b"
ReferenceError
```

---

# 36. Why does `var` print `undefined`?

### Answer

Because:

* `var` variables are hoisted
* initialized with `undefined`
* assignment happens later during execution phase

Example:

```js id="q36a"
console.log(a);

var a = 10;
```

Output:

```text id="q36b"
undefined
```

---

# 37. Explain memory creation phase.

### Answer

During memory creation phase:

* variables are stored in memory
* function declarations are fully stored
* `var` is initialized with `undefined`
* `let` and `const` remain uninitialized

Example:

```js id="q37a"
var a = 10;

function greet() {}
```

Memory:

```text id="q37b"
a → undefined
greet → full function
```

---

# 38. Explain execution phase.

### Answer

During execution phase:

* JavaScript executes code line by line
* values get assigned
* functions execute when called

Example:

```js id="q38a"
var a = 10;
```

Memory updates:

```text id="q38b"
a → 10
```

---

# 39. Difference between `undefined` and `not defined`.

### Answer

## `undefined`

Variable exists but has no value assigned.

```js id="q39a"
let a;

console.log(a);
```

Output:

```text id="q39b"
undefined
```

---

## `not defined`

Variable was never declared.

```js id="q39c"
console.log(a);
```

Output:

```text id="q39d"
ReferenceError: a is not defined
```

---

# 40. Explain: `let` and `const` are hoisted but inaccessible before initialization.

### Answer

`let` and `const` are hoisted into memory but remain in the Temporal Dead Zone until initialization.

Example:

```js id="q40a"
console.log(a);

let a = 10;
```

Output:

```text id="q40b"
ReferenceError
```

---

# 41. Difference between redeclaration and reassignment.

### Answer

## Redeclaration

Creating same variable again.

```js id="q41a"
var a = 10;
var a = 20;
```

---

## Reassignment

Changing existing variable value.

```js id="q41b"
let name = "Sai";

name = "Krishna";
```

---

# 42. Predict the output.

### Code

```js id="q42a"
var a = 10;
var a = 20;

console.log(a);
```

### Output

```text id="q42b"
20
```

### Explanation

`var` allows redeclaration.

---

# 43. Predict the output.

### Code

```js id="q43a"
let a = 10;
let a = 20;
```

### Output

```text id="q43b"
SyntaxError
```

### Explanation

`let` does not allow redeclaration.

---

# 44. Why is this invalid?

### Code

```js id="q44a"
const a;
```

### Answer

`const` variables must be initialized during declaration.

Correct:

```js id="q44b"
const a = 10;
```

---

# 45. Predict the output.

### Code

```js id="q45a"
let a;

console.log(a);
```

### Output

```text id="q45b"
undefined
```

### Explanation

Variable exists but has no assigned value.

---

# 46. Predict the output.

### Code

```js id="q46a"
console.log(a);
```

### Output

```text id="q46b"
ReferenceError: a is not defined
```

### Explanation

Variable was never declared.

---

# 47. Explain declaration, initialization, and assignment.

### Answer

## Declaration

Creating variable name.

```js id="q47a"
let name;
```

---

## Initialization

Giving first value.

```js id="q47b"
let name = "Sai";
```

---

## Assignment

Changing value later.

```js id="q47c"
name = "Krishna";
```

---

# 48. Why do React developers prefer `const`?

### Answer

React developers prefer `const` because:

* prevents accidental reassignment
* improves predictability
* reduces bugs
* improves code maintainability

Example:

```js id="q48a"
const API_URL = "/users";
```

---

# 49. Explain primitive storage and reference storage.

### Answer

## Primitive Storage

Primitive values store actual values directly.

Examples:

* number
* string
* boolean
* undefined
* null

```js id="q49a"
let a = 10;
let b = a;
```

`b` gets copied value.

---

## Reference Storage

Objects and arrays store memory references.

```js id="q49b"
let user1 = { name: "Sai" };

let user2 = user1;
```

Both variables point to same object in memory.

---

# 50. How are variables stored internally in memory?

### Answer

During memory creation phase:

* `var` is initialized with `undefined`
* `let` and `const` remain uninitialized
* functions are fully stored

During execution phase:

* values get assigned
* memory updates accordingly

Example:

```js id="q50a"
var a = 10;
```

Memory phase:

```text id="q50b"
a → undefined
```

Execution phase:

```text id="q50c"
a → 10
```

---

# 51. Predict the output.

### Code

```js id="q51a"
for(var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

### Output

```text id="q51b"
3
3
3
```

### Explanation

`var` is function scoped.
All callbacks share same variable reference.
Loop finishes first, making `i = 3`.

---

# 52. Fix previous question using `let`.

### Answer

```js id="q52a"
for(let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

### Output

```text id="q52b"
0
1
2
```

### Explanation

`let` creates new block-scoped variable for each iteration.

---

# 53. Why does `let` fix closure problems in loops?

### Answer

`let` creates a new block-scoped variable for every loop iteration, so each callback gets its own separate value.

---

# 54. Explain lexical environment.

### Answer

A lexical environment consists of:

* local variables
* reference to parent scope

It helps JavaScript resolve variable access using scope chain.

---

# 55. Explain execution context.

### Answer

Execution context is the environment where JavaScript code executes.

It contains:

* memory component
* code component

---

# 56. Difference between stack memory and heap memory.

### Answer

## Stack Memory

Stores:

* primitive values
* function calls
* execution contexts

Fast and organized.

---

## Heap Memory

Stores:

* objects
* arrays
* functions

Dynamic and larger memory area.

---

# 57. Explain variable lookup mechanism.

### Answer

JavaScript searches variables in this order:

1. current scope
2. parent scope
3. global scope

This process is called scope chain lookup.

---

# 58. What happens internally when variable is accessed?

### Answer

JavaScript searches for variable using lexical scope chain until variable is found.

Example:

```js id="q58a"
let a = 10;

function test() {
  console.log(a);
}
```

JavaScript searches:

* local scope
* then parent scope

and finds `a`.

---

# 59. Why are block-scoped variables safer?

### Answer

Block-scoped variables are safer because they:

* prevent accidental access
* reduce bugs
* avoid variable conflicts
* improve maintainability

---

# 60. Explain variable shadowing.

### Answer

Variable shadowing happens when inner variable uses same name as outer variable.

Example:

```js id="q60a"
let a = 10;

{
  let a = 20;
  console.log(a);
}

console.log(a);
```

### Output

```text id="q60b"
20
10
```

### Explanation

Inner variable shadows outer variable inside block scope.

---

# 61. Explain Hoisting Internally Step-by-Step

## Definition

Hoisting is JavaScript’s behavior where variable and function declarations are moved into memory before code execution starts.

---

# Example

```js id="h61a"
console.log(a);

var a = 10;
```

---

# What Happens Internally

JavaScript runs code in two phases:

---

# Phase 1 — Memory Creation Phase

Before executing code, JavaScript scans the entire program.

It creates memory for variables and functions.

Internally:

```text id="h61b"
a → undefined
```

So memory becomes:

| Variable | Value     |
| -------- | --------- |
| a        | undefined |

---

# Phase 2 — Execution Phase

Now JavaScript executes code line-by-line.

---

## Step 1

```js id="h61c"
console.log(a);
```

Current value:

```text id="h61d"
undefined
```

So output becomes:

```text id="h61e"
undefined
```

---

## Step 2

```js id="h61f"
var a = 10;
```

Now memory updates:

```text id="h61g"
a → 10
```

---

# Important Understanding

Hoisting does NOT move code physically.

JavaScript internally prepares memory before execution starts.

---

# Interview Summary

> Hoisting is JavaScript’s default behavior where variable and function declarations are stored in memory during the memory creation phase before execution begins.

---

# 62. Explain How the JavaScript Engine Stores Variables

JavaScript stores variables differently depending on their type.

---

# Primitive Values

Primitive values store actual values directly.

Examples:

* number
* string
* boolean
* null
* undefined

Example:

```js id="h62a"
let age = 25;
```

Memory:

```text id="h62b"
age → 25
```

---

# Reference Values

Objects, arrays, and functions store references.

Example:

```js id="h62c"
let user = {
  name: "Sai"
};
```

Memory:

```text id="h62d"
user → memory reference
```

Actual object stored elsewhere in heap memory.

---

# Internal Storage Areas

JavaScript mainly uses:

| Memory Type  | Stores                               |
| ------------ | ------------------------------------ |
| Stack Memory | Primitive values, execution contexts |
| Heap Memory  | Objects, arrays, functions           |

---

# Simple Understanding

## Primitive

Stores actual value.

---

## Object

Stores address/reference.

---

# 63. What Happens During the Compilation Phase?

Before JavaScript executes code, it performs compilation.

---

# During Compilation

JavaScript:

* scans code
* identifies variables
* identifies functions
* allocates memory
* creates scope information

---

# Example

```js id="h63a"
var a = 10;

function greet() {}
```

During compilation:

```text id="h63b"
a → undefined
greet → full function stored
```

---

# Important Tasks in Compilation

## 1. Lexical Analysis

Code broken into tokens.

---

## 2. Parsing

JavaScript checks syntax structure.

---

## 3. Memory Allocation

Variables/functions stored in memory.

---

## 4. Scope Creation

JavaScript decides variable accessibility.

---

# Beginner Understanding

Compilation means:

# “JavaScript prepares everything before running code.”

---

# 64. Difference Between Compilation Phase and Execution Phase

| Compilation Phase          | Execution Phase        |
| -------------------------- | ---------------------- |
| Memory preparation happens | Code runs line-by-line |
| Variables stored           | Values assigned        |
| Functions stored           | Functions executed     |
| Scope created              | Logic executed         |

---

# Example

```js id="h64a"
var a = 10;
```

---

# Compilation Phase

```text id="h64b"
a → undefined
```

---

# Execution Phase

```text id="h64c"
a → 10
```

---

# Simple Understanding

## Compilation

Preparation stage.

---

## Execution

Actual running stage.

---

# 65. What is Variable Environment?

A variable environment is the memory space where variables and functions are stored inside an execution context.

---

# Example

```js id="h65a"
let name = "Sai";

function greet() {}
```

Variable environment stores:

```text id="h65b"
name → "Sai"
greet → function
```

---

# Every Function Gets Its Own Variable Environment

Example:

```js id="h65c"
function test() {
  let age = 25;
}
```

`test()` creates separate variable environment.

---

# Simple Definition

> Variable environment is the internal memory area where JavaScript stores variables and functions.

---

# 66. What is Lexical Scope Chain?

Lexical scope chain is JavaScript’s mechanism for finding variables.

JavaScript searches:

1. current scope
2. parent scope
3. global scope

---

# Example

```js id="h66a"
let a = 10;

function outer() {

  let b = 20;

  function inner() {
    console.log(a);
    console.log(b);
  }

  inner();
}

outer();
```

---

# Variable Lookup

Inside `inner()`:

* first searches local scope
* then parent (`outer`)
* then global scope

---

# This Search Process Is Called

# Lexical Scope Chain

---

# Important Understanding

Functions remember where they were created.

NOT where they are called.

---

# 67. Why Was `let` Introduced in ES6?

Before ES6, JavaScript mainly used `var`.

`var` caused many problems:

* no block scope
* accidental redeclaration
* confusing hoisting behavior
* loop issues

---

# Example Problem with `var`

```js id="h67a"
for(var i = 0; i < 3; i++) {}

console.log(i);
```

Output:

```text id="h67b"
3
```

Because `var` is function scoped.

---

# ES6 Introduced `let`

To solve:

* scope problems
* accidental bugs
* variable conflicts

---

# Advantages of `let`

| Feature                 | let |
| ----------------------- | --- |
| Block scoped            | ✅   |
| Safer loops             | ✅   |
| No redeclaration        | ✅   |
| Cleaner memory behavior | ✅   |

---

# Simple Understanding

> `let` was introduced to make variable handling safer and more predictable.

---

# 68. Explain Temporal Dead Zone (TDZ) Deeply

TDZ is the time between:

* variable hoisting
  AND
* variable initialization

during which variable cannot be accessed.

---

# Example

```js id="h68a"
console.log(a);

let a = 10;
```

Output:

```text id="h68b"
ReferenceError
```

---

# Internally What Happens

During memory phase:

```text id="h68c"
a → uninitialized
```

NOT:

```text id="h68d"
a → undefined
```

---

# Important Difference

| var                          | let/const                      |
| ---------------------------- | ------------------------------ |
| initialized with undefined   | uninitialized                  |
| accessible before assignment | inaccessible before assignment |

---

# TDZ Timeline

```text id="h68e"
Memory creation starts
↓
Variable exists in memory
↓
Cannot access variable
↓
Initialization happens
↓
TDZ ends
```

---

# Why TDZ Exists

To prevent:

* accidental access
* unpredictable behavior
* hidden bugs

---

# Beginner Understanding

TDZ is:

# “Protected waiting area before variable gets initialized.”

---

# 69. Can `const` Objects Mutate Internally? Why?

YES ✅

`const` prevents reassignment.

It does NOT make objects fully immutable.

---

# Example

```js id="h69a"
const user = {
  name: "Sai"
};

user.name = "Krishna";

console.log(user);
```

Output:

```text id="h69b"
{ name: "Krishna" }
```

---

# Why?

Because:

`const` protects:

# variable reference

NOT:

# internal object values

---

# What Cannot Be Done

```js id="h69c"
const user = {};

user = {};
```

This causes error.

---

# Simple Understanding

## Allowed

Changing object properties.

---

## Not Allowed

Changing entire object reference.

---

# 70. Explain Memory Optimization Related to Variables

Memory optimization means:

# using memory efficiently.

---

# Why Important?

Bad memory usage can cause:

* slow applications
* crashes
* memory leaks

---

# Good Practices

---

# 1. Use `const` When Possible

Prevents unnecessary reassignment.

```js id="h70a"
const API_URL = "/users";
```

---

# 2. Avoid Unused Variables

Bad:

```js id="h70b"
let data = 100;
```

Never used.

Wastes memory.

---

# 3. Clear Large Objects When Not Needed

```js id="h70c"
largeData = null;
```

Helps garbage collector free memory.

---

# 4. Prefer Block Scope

`let` and `const` reduce accidental memory sharing.

---

# 5. Avoid Global Variables

Globals stay in memory longer.

---

# Garbage Collection

JavaScript automatically removes unused memory using:

# Garbage Collector

---

# Beginner Understanding

Memory optimization means:

# “Using only necessary memory and avoiding waste.”

