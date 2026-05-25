
# JavaScript Variables Notes

---

# What is a Variable?

A variable is like a **box 📦** used to store data.

Example:

```js id="vnotes01"
let name = "Sai";
```

Here:

* `name` → variable name
* `"Sai"` → value stored inside variable

---

# Why Variables Are Important

Variables help store:

* Names
* Numbers
* User input
* API data
* Login info
* Scores
* Everything in programming

Without variables, programming is impossible.

---

# Ways to Create Variables in JavaScript

JavaScript provides 3 keywords:

```js id="vnotes02"
var
let
const
```

---

# 1. `var` (Old Way)

```js id="vnotes03"
var city = "Hyderabad";
```

`var` was used before ES6.

---

# Problems with `var`

* Function scoped
* Can be redeclared
* Causes bugs
* Confusing hoisting behavior

Modern developers mostly avoid it.

---

# Example

```js id="vnotes04"
var a = 10;

var a = 20;

console.log(a);
```

Output:

```text id="vnotes05"
20
```

Redeclaration is allowed.

---

# 2. `let` (Modern Variable)

Use `let` when value can change.

```js id="vnotes06"
let score = 10;

score = 20;

console.log(score);
```

Output:

```text id="vnotes07"
20
```

---

# Features of `let`

✅ Block scoped
✅ Reassignment allowed
❌ Redeclaration not allowed

---

# Example

```js id="vnotes08"
let age = 22;

age = 25;
```

---

# 3. `const` (Fixed Variable)

Use `const` when value should not change.

```js id="vnotes09"
const country = "India";
```

---

# Reassignment Not Allowed

```js id="vnotes10"
const country = "India";

country = "USA";
```

❌ Error

---

# Features of `const`

✅ Block scoped
❌ Reassignment not allowed
❌ Redeclaration not allowed

---

# Important `const` Interview Concept

## Objects can still change internally

```js id="vnotes11"
const user = {
  name: "Sai"
};

user.name = "Krishna";
```

✅ Works

Because object contents changed,
not the variable reference.

---

# Variable Naming Rules

---

# Valid Names

```js id="vnotes12"
let firstName
let age
let totalMarks
```

---

# Invalid Names

```js id="vnotes13"
let 1name
let user-name
let let
```

---

# Best Naming Style

Use:

# camelCase

```js id="vnotes14"
let firstName
let totalPrice
let isLoggedIn
```

---

# Data Types Stored in Variables

---

# String

```js id="vnotes15"
let name = "Sai";
```

---

# Number

```js id="vnotes16"
let age = 22;
```

---

# Boolean

```js id="vnotes17"
let isLoggedIn = true;
```

---

# Declaration, Initialization, Assignment

These are VERY important concepts.

---

# 1. Declaration

Creating variable name.

```js id="vnotes18"
let age;
```

Memory:

```text id="vnotes19"
age → empty
```

---

# 2. Initialization

Giving first value.

```js id="vnotes20"
let age = 22;
```

Memory:

```text id="vnotes21"
age → 22
```

---

# 3. Assignment

Changing or setting value.

```js id="vnotes22"
age = 25;
```

---

# Reassignment

Changing existing value again.

```js id="vnotes23"
let marks = 80;

marks = 90;
```

---

# Scope in JavaScript

Scope means:

> “Where can variable be accessed?”

---

# 1. Global Scope

Accessible everywhere.

```js id="vnotes24"
let name = "Sai";

function test() {
  console.log(name);
}
```

---

# 2. Function Scope

`var` is function scoped.

```js id="vnotes25"
function test() {
  var a = 10;
}
```

Outside function:
❌ Cannot access `a`

---

# 3. Block Scope

`let` and `const` are block scoped.

```js id="vnotes26"
{
  let a = 10;
}

console.log(a);
```

❌ Error

---

# `var` Ignores Block Scope

```js id="vnotes27"
{
  var a = 10;
}

console.log(a);
```

✅ Works

---

# Hoisting

Hoisting means:

> JavaScript stores declarations in memory before execution.

---

# Example with `var`

```js id="vnotes28"
console.log(a);

var a = 10;
```

Output:

```text id="vnotes29"
undefined
```

Internally:

```js id="vnotes30"
var a;

console.log(a);

a = 10;
```

---

# JavaScript Execution Phases

---

# Phase 1 — Memory Creation Phase

Variables/functions stored in memory.

Example:

```js id="vnotes31"
var a = 10;

function greet() {}
```

Memory:

```text id="vnotes32"
a → undefined
greet → full function
```

---

# Phase 2 — Execution Phase

Code runs line by line.

```js id="vnotes33"
a = 10;
```

Memory becomes:

```text id="vnotes34"
a → 10
```

---

# Hoisting with `let`

```js id="vnotes35"
console.log(a);

let a = 10;
```

❌ Error

---

# Hoisting with `const`

```js id="vnotes36"
console.log(a);

const a = 10;
```

❌ Error

---

# Temporal Dead Zone (TDZ)

TDZ means:

> Variable exists in memory but cannot be accessed before declaration.

Applies to:

* `let`
* `const`

---

# Easy Understanding

## `var`

Ready immediately

```text id="vnotes37"
a → undefined
```

---

## `let` / `const`

Locked until declaration

```text id="vnotes38"
a → uninitialized
```

---

# Redeclaration

---

# `var`

```js id="vnotes39"
var a = 10;
var a = 20;
```

✅ Allowed

---

# `let`

```js id="vnotes40"
let a = 10;
let a = 20;
```

❌ Error

---

# `const`

```js id="vnotes41"
const a = 10;
const a = 20;
```

❌ Error

---

# Difference Between `var`, `let`, and `const`

| Feature       | `var`    | `let` | `const` |
| ------------- | -------- | ----- | ------- |
| Scope         | Function | Block | Block   |
| Reassign      | ✅        | ✅     | ❌       |
| Hoisted       | ✅        | ✅     | ✅       |
| TDZ           | ❌        | ✅     | ✅       |
| Redeclaration | ✅        | ❌     | ❌       |
| Modern Usage  | ❌        | ✅     | ✅       |

---

# Best Modern Practice

Use:

* `const` by default
* `let` when value changes
* Avoid `var`

---

# Example

```js id="vnotes42"
const API_URL = "/users";

let loading = true;
```

---

# Most Important Interview Topics

Focus heavily on:

* Scope
* Hoisting
* TDZ
* Redeclaration
* Reassignment
* Memory creation phase

---

## `var`

* old
* function scoped
* avoid mostly

---

## `let`

* block scoped
* value can change

---

## `const`

* block scoped
* cannot reassign
* most preferred

---
