Perfect. Since you've already completed **Call Stack**, **Execution Context**, and **Hoisting**, the next topic is **Scope**.

Scope is one of the **most important JavaScript concepts** because it is the foundation for:

* Closures
* Lexical Environment
* Variable Lookup
* `this`
* Modules
* Memory Management
* Interview Questions

---

# JavaScript Scope (Beginner → Pro)

---

# What is Scope?

### Definition

> **Scope is the area or region of a program where a variable can be accessed.**

In simple words,

> Scope decides **where a variable is visible** and **where it is not.**

Example:

```javascript
let name = "Sai";

console.log(name); // Accessible
```

Here,

`name` is accessible because we're inside its scope.

---

## Real Life Example

Think of a house.

```
House
│
├── Hall
├── Kitchen
├── Bedroom
```

Suppose

```
Wallet is in Bedroom.
```

Can you access it from Bedroom?

✅ Yes

Can someone standing outside the house access it?

❌ No

Variables behave exactly like this.

---

# Why do we need Scope?

Without scope...

Imagine:

```javascript
let name = "Sai";

let age = 22;

let salary = 50000;

let password = "12345";
```

Every variable would be accessible from everywhere.

That would cause

* Bugs
* Security issues
* Naming conflicts
* Memory waste

Scope solves all these problems.

---

# Types of Scope

JavaScript mainly has **4 scopes**:

```
Scope

├── Global Scope
├── Function Scope
├── Block Scope
└── Module Scope (ES6)
```

We'll learn one by one.

---

# 1. Global Scope

Variables declared outside every function or block belong to the global scope.

Example

```javascript
let company = "Google";

function show() {
    console.log(company);
}

show();

console.log(company);
```

Output

```
Google
Google
```

Why?

Because

```
company
```

belongs to the Global Scope.

Everyone can access it.

Visualization

```
Global Scope

company

↓

Function

↓

Block

↓

Everything can access company
```

---

# Another Example

```javascript
const country = "India";

if (true) {
    console.log(country);
}

function test() {
    console.log(country);
}

test();
```

Output

```
India
India
```

---

# Global Variables

```javascript
var a = 10;

let b = 20;

const c = 30;
```

All three are global if declared outside every function.

But...

There is one important difference.

We'll learn later:

```
Global Object (window)
```

---

# 2. Function Scope

Variables declared inside a function are accessible **only inside that function**.

Example

```javascript
function display() {

    let name = "Sai";

    console.log(name);

}

display();
```

Output

```
Sai
```

Outside?

```javascript
function display() {

    let name = "Sai";

}

console.log(name);
```

Output

```
ReferenceError
```

Because

```
name
```

belongs only to

```
display()
```

Visualization

```
Global

|

display()

|

name
```

Outside display()

```
❌ Can't access
```

---

# Another Example

```javascript
function add() {

    let x = 10;

    let y = 20;

    console.log(x + y);

}

add();
```

Output

```
30
```

Outside

```javascript
console.log(x);
```

```
ReferenceError
```

---

# Why Function Scope?

Suppose

```javascript
function login() {

    let password = "123";

}
```

Imagine if

```
password
```

were accessible everywhere.

Very dangerous.

Function scope protects data.

---

# 3. Block Scope

Anything inside

```
{
}
```

is called a block.

Example

```javascript
{

}
```

Blocks exist in

```
if

for

while

switch

try

catch
```

---

## let and const are Block Scoped

Example

```javascript
if (true) {

    let city = "Hyderabad";

    console.log(city);

}
```

Output

```
Hyderabad
```

Outside

```javascript
console.log(city);
```

Output

```
ReferenceError
```

---

Another example

```javascript
{
    const PI = 3.14;
}

console.log(PI);
```

Output

```
ReferenceError
```

---

Visualization

```
Global

↓

Block

↓

city
```

Outside Block

```
❌ No Access
```

---

# 4. var is NOT Block Scoped

This is one of the most asked interview questions.

Example

```javascript
if (true) {

    var age = 22;

}

console.log(age);
```

Output

```
22
```

Why?

Because

```
var
```

ignores block scope.

It follows

```
Function Scope
```

---

Example

```javascript
for (var i = 0; i < 5; i++) {

}

console.log(i);
```

Output

```
5
```

Because

```
var
```

doesn't create a new block scope.

---

Using let

```javascript
for (let i = 0; i < 5; i++) {

}

console.log(i);
```

Output

```
ReferenceError
```

---

# Summary

| Keyword | Global Scope | Function Scope | Block Scope |
| ------- | ------------ | -------------- | ----------- |
| var     | ✅            | ✅              | ❌           |
| let     | ✅            | ✅              | ✅           |
| const   | ✅            | ✅              | ✅           |

---

# Nested Scope

Functions can exist inside functions.

Example

```javascript
function outer() {

    let a = 10;

    function inner() {

        console.log(a);

    }

    inner();

}

outer();
```

Output

```
10
```

Why?

Inner function can access Outer variables.

---

But reverse?

```javascript
function outer() {

    function inner() {

        let b = 20;

    }

    console.log(b);

}

outer();
```

Output

```
ReferenceError
```

Because

Outer cannot access Inner variables.

---

Visualization

```
Global

↓

Outer

↓

Inner
```

Direction of access

```
Inner → Outer ✅

Outer → Inner ❌
```

---

# Variable Lookup

When JavaScript needs a variable, it searches in this order:

```
Current Scope

↓

Parent Scope

↓

Global Scope

↓

Not Found

↓

ReferenceError
```

Example

```javascript
let a = 100;

function first() {

    function second() {

        console.log(a);

    }

    second();

}

first();
```

Search

```
second()

↓

first()

↓

Global

↓

Found
```

---

# Scope Chain

The path JavaScript follows to find a variable is called the **Scope Chain**.

Example

```javascript
let a = 1;

function one() {

    let b = 2;

    function two() {

        let c = 3;

        console.log(a);
        console.log(b);
        console.log(c);

    }

    two();

}

one();
```

Output

```
1
2
3
```

Lookup chain

```
two()

↓

one()

↓

Global
```

---

# Shadowing

A variable in an inner scope can have the same name as one in an outer scope.

```javascript
let name = "Sai";

function show() {

    let name = "Krishna";

    console.log(name);

}

show();

console.log(name);
```

Output

```
Krishna
Sai
```

The inner `name` **shadows** the outer one.

---

# Scope vs Hoisting

| Scope                                  | Hoisting                                                   |
| -------------------------------------- | ---------------------------------------------------------- |
| Decides where a variable is accessible | Decides when a variable is available during execution      |
| Happens because of lexical structure   | Happens during the creation phase of the execution context |
| Controls visibility                    | Controls initialization behavior                           |

---

# Common Interview Questions

1. What is scope in JavaScript?
2. What are the different types of scope?
3. What is the difference between function scope and block scope?
4. Is `var` block scoped?
5. Why are `let` and `const` block scoped?
6. What is the scope chain?
7. What is variable lookup?
8. What is shadowing?
9. Can an outer function access an inner function's variables?
10. Can an inner function access an outer function's variables?
11. What happens if a variable is not found in the scope chain?
12. Why is `var` considered unsafe compared to `let` and `const`?
13. Explain nested scopes with an example.
14. What is global scope?
15. How does scope improve code quality?

---

# What to Learn Next

Scope is only the beginning. The next topics build directly on it in this order:

1. ✅ Scope
2. **Lexical Scope**
3. **Lexical Environment**
4. **Scope Chain (Deep Dive)**
5. **Closures**
6. **Temporal Dead Zone (TDZ)**
7. **Variable Shadowing**
8. **Illegal Shadowing**
9. **Modules & Module Scope**
10. **Memory and Closures**
11. **Garbage Collection**

Mastering these topics will give you a strong understanding of how JavaScript manages variables and functions internally, which is essential for React and advanced JavaScript interviews.
