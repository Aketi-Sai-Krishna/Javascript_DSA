

//          let a = 10;

//         function greet() {
//         console.log(a);
//         }

//         greet();

//         //output: 10
//         //a is stored in the global scope
//         //Global execution context -> lexical environment -> variable object -> a global scope -> greet() global scope -> greet() function execution context -> lexical environment -> console.log(a) -> a is not found in the greet() function execution context -> look up in the outer lexical environment -> a is found in the global scope -> output: 10
//         // 2 lexical environments are created
//         //yes , scope chain was used to find the variable a in the global scope

//         Perfect. Since you're building **interview-ready JavaScript knowledge**, I'll answer these exactly as I'd expect from a candidate in a **Product-Based Company interview**.

// Each answer includes:

// * ✅ Output
// * ✅ Why?
// * ✅ Execution Contexts
// * ✅ Lexical Environments
// * ✅ Environment Records
// * ✅ Outer References
// * ✅ Scope Chain
// * ✅ Interview Explanation

// ---

// # PART 1 (Questions 1–5)

// ---

// # Question 1 — Global Scope

// ```javascript
// let a = 10;

// function greet() {
//   console.log(a);
// }

// greet();
// ```

// ---

// ## Output

// ```text
// 10
// ```

// ---

// ## Why?

// `a` is declared in the **Global Scope**.

// The `greet()` function doesn't have `a`, so JavaScript follows the Scope Chain and finds it in the Global Lexical Environment.

// ---

// ## Execution Contexts

// ```
// 1. Global Execution Context
// 2. greet() Execution Context
// ```

// ---

// ## Lexical Environments

// ### Global

// ```
// Environment Record

// a → 10
// greet → function

// Outer → null
// ```

// ### greet()

// ```
// Environment Record

// (no local variables)

// Outer

// ↓

// Global Lexical Environment
// ```

// ---

// ## Scope Chain

// ```
// greet()

// ↓

// Global

// ↓

// Found a
// ```

// ---

// ## Interview Explanation

// JavaScript first searches for `a` in the current Lexical Environment. Since it isn't found, it follows the Outer Reference to the Global Lexical Environment, where `a = 10` is found.

// ---

// # Question 2 — Function Scope

// ```javascript
// function test() {
//     let x = 20;
// }

// console.log(x);
// ```

// ---

// ## Output

// ```text
// ReferenceError: x is not defined
// ```

// ---

// ## Why?

// `x` belongs only to the function `test()`.

// Since `test()` is never executed and `x` is function-scoped, the Global Execution Context cannot access it.

// ---

// ## Execution Contexts

// ```
// Global Execution Context
// ```

// (No Function Execution Context because `test()` is never called.)

// ---

// ## Lexical Environment

// ```
// Global Environment

// test → function

// Outer → null
// ```

// No Lexical Environment for `test()` is created because the function isn't invoked.

// ---

// ## Scope Chain

// ```
// Global

// ↓

// No x

// ↓

// ReferenceError
// ```

// ---

// ## Interview Explanation

// A function's Lexical Environment is created only when the function is called. Since `test()` isn't invoked, `x` never exists.

// ---

// # Question 3 — Block Scope

// ```javascript
// if (true) {
//     let age = 22;
//     const city = "Hyderabad";
// }

// console.log(age);
// console.log(city);
// ```

// ---

// ## Output

// ```text
// ReferenceError
// ReferenceError
// ```

// ---

// ## Why?

// Both `let` and `const` are block-scoped.

// After the block finishes, those bindings are no longer accessible outside the block.

// ---

// ## Execution Contexts

// ```
// Global Execution Context
// ```

// No new Execution Context is created for an `if` block.

// ---

// ## Lexical Environment

// Conceptually, the block creates a block lexical environment:

// ```
// Block Lexical Environment

// age → 22

// city → Hyderabad

// Outer

// ↓

// Global
// ```

// ---

// ## Scope Chain

// ```
// Global

// ↓

// No age

// ↓

// ReferenceError
// ```

// ---

// ## Interview Explanation

// Blocks don't create a new Execution Context, but they do create a **Block Lexical Environment** for `let` and `const`.

// ---

// # Question 4 — var vs let

// ```javascript
// if (true) {

//     var a = 10;

//     let b = 20;

// }

// console.log(a);

// console.log(b);
// ```

// ---

// ## Output

// ```text
// 10

// ReferenceError
// ```

// ---

// ## Why?

// `var`

// * ignores block scope
// * belongs to the surrounding function (or Global if no function)

// `let`

// * belongs only to the block.

// ---

// ## Execution Context

// ```
// Global Execution Context
// ```

// ---

// ## Lexical Environments

// Global

// ```
// a → 10

// Outer → null
// ```

// Block

// ```
// b → 20

// Outer

// ↓

// Global
// ```

// ---

// ## Scope Chain

// For `a`

// ```
// Global

// ↓

// Found
// ```

// For `b`

// ```
// Global

// ↓

// Not Found

// ↓

// ReferenceError
// ```

// ---

// ## Interview Explanation

// `var` is function-scoped while `let` is block-scoped. Therefore `a` becomes part of the Global Environment Record (since there is no enclosing function), but `b` remains inside the block's Lexical Environment.

// ---

// # Question 5 — Lexical Scope

// ```javascript
// let language = "JavaScript";

// function outer() {

//     function inner() {

//         console.log(language);

//     }

//     inner();

// }

// outer();
// ```

// ---

// ## Output

// ```
// JavaScript
// ```

// ---

// ## Why?

// Because JavaScript uses **Lexical Scope**.

// `inner()` remembers where it was defined.

// It was written inside `outer()`, whose parent is the Global Scope.

// ---

// ## Execution Contexts

// ```
// Global

// ↓

// outer()

// ↓

// inner()
// ```

// ---

// ## Lexical Environments

// Global

// ```
// language → JavaScript

// outer → function
// ```

// ---

// outer()

// ```
// inner → function

// Outer

// ↓

// Global
// ```

// ---

// inner()

// ```
// (no local variables)

// Outer

// ↓

// outer()
// ```

// ---

// ## Scope Chain

// ```
// inner

// ↓

// outer

// ↓

// Global

// ↓

// Found language
// ```

// ---

// ## Interview Explanation

// A function's scope depends on **where it is defined**, not where it is called. This is called **Lexical Scope**.

// ---

// # PART 2 (Questions 6–10)

// ---

// # Question 6 — Parent Variables

// ```javascript
// function outer() {

//     let x = 100;

//     function inner() {

//         console.log(x);

//     }

//     inner();

// }

// outer();
// ```

// ---

// ## Output

// ```
// 100
// ```

// ---

// ## Why?

// `inner()` cannot find `x` in its own Environment Record.

// It follows its Outer Reference to `outer()`.

// There it finds

// ```
// x = 100
// ```

// ---

// ## Scope Chain

// ```
// inner

// ↓

// outer

// ↓

// Found
// ```

// ---

// ## Interview Point

// Child functions can access parent variables through the Scope Chain.

// ---

// # Question 7 — Child Variables

// ```javascript
// function outer() {

//     function inner() {

//         let y = 50;

//     }

//     console.log(y);

// }

// outer();
// ```

// ---

// ## Output

// ```
// ReferenceError
// ```

// ---

// ## Why?

// The parent cannot access variables declared inside the child function.

// Scope only flows outward, never inward.

// ---

// ## Scope Chain

// ```
// outer

// ↓

// Global

// ↓

// Not Found
// ```

// ---

// ## Interview Point

// Children inherit from parents.

// Parents never inherit from children.

// ---

// # Question 8 — Nested Functions

// ```javascript
// let a = 1;

// function one() {

//     let b = 2;

//     function two() {

//         let c = 3;

//         console.log(a);

//         console.log(b);

//         console.log(c);

//     }

//     two();

// }

// one();
// ```

// ---

// ## Output

// ```
// 1

// 2

// 3
// ```

// ---

// ## Scope Chain

// ```
// two

// ↓

// one

// ↓

// Global
// ```

// ---

// ## Execution Contexts

// ```
// Global

// ↓

// one

// ↓

// two
// ```

// ---

// ## Lexical Environments

// Global

// ```
// a

// one
// ```

// one

// ```
// b

// two
// ```

// two

// ```
// c
// ```

// ---

// ## Interview Point

// This demonstrates the complete Scope Chain.

// ---

// # Question 9 — Shadowing

// ```javascript
// let value = 10;

// function show() {

//     let value = 20;

//     console.log(value);

// }

// show();

// console.log(value);
// ```

// ---

// ## Output

// ```
// 20

// 10
// ```

// ---

// ## Why?

// The local variable shadows the global variable.

// JavaScript always checks the current Lexical Environment first.

// ---

// ## Scope Chain

// ```
// show()

// ↓

// Found local value

// ↓

// Global not checked
// ```

// ---

// ## Interview Point

// This is called **Variable Shadowing**.

// ---

// # Question 10 — Scope Chain

// ```javascript
// let country = "India";

// function A() {

//     let state = "AP";

//     function B() {

//         let city = "Nellore";

//         console.log(country);

//     }

//     B();

// }

// A();
// ```

// ---

// ## Output

// ```
// India
// ```

// ---

// ## Scope Chain

// ```
// B

// ↓

// A

// ↓

// Global

// ↓

// Found
// ```

// ---

// ## Lexical Environments

// Global

// ```
// country

// A
// ```

// ---

// A

// ```
// state

// B
// ```

// ---

// B

// ```
// city
// ```

// ---

// ## Interview Point

// JavaScript resolves identifiers by walking the Scope Chain through the linked Lexical Environments.

// ---

// # PART 3 (Questions 11–15)

// ---

// # Question 11 — Deep Scope Chain

// ```javascript
// let x = 1;

// function A() {

//     let y = 2;

//     function B() {

//         let z = 3;

//         function C() {

//             console.log(x);

//             console.log(y);

//             console.log(z);

//         }

//         C();

//     }

//     B();

// }

// A();
// ```

// ---

// ## Output

// ```
// 1

// 2

// 3
// ```

// ---

// ## Scope Chain

// ```
// C

// ↓

// B

// ↓

// A

// ↓

// Global
// ```

// ---

// ## Interview Point

// Each function has its own Lexical Environment linked to its parent's Lexical Environment.

// ---

// # Question 12 — Variable Lookup

// ```javascript
// let name = "Global";

// function first() {

//     let name = "First";

//     function second() {

//         console.log(name);

//     }

//     second();

// }

// first();
// ```

// ---

// ## Output

// ```
// First
// ```

// ---

// ## Why?

// JavaScript finds `name` in `first()`'s Lexical Environment before reaching the Global Environment.

// ---

// ## Interview Point

// JavaScript always uses the nearest matching identifier.

// ---

// # Question 13 — Lexical Scope

// ```javascript
// let a = 10;

// function one() {
//     console.log(a);
// }

// function two() {

//     let a = 20;

//     one();

// }

// two();
// ```

// ---

// ## Output

// ```
// 10
// ```

// ---

// ## Why?

// `one()` was defined in the Global Scope, so its Outer Reference points to the Global Lexical Environment—not to `two()`.

// ---

// ## Interview Point

// **Where a function is defined matters, not where it is called.**

// ---

// # Question 14 — Function Returned

// ```javascript
// function outer() {

//     let count = 0;

//     return function inner() {

//         console.log(count);

//     };

// }

// const fn = outer();

// fn();
// ```

// ---

// ## Output

// ```
// 0
// ```

// ---

// ## Why?

// The returned `inner()` function keeps a reference to `outer()`'s Lexical Environment, where `count` exists.

// ---

// ## Interview Point

// This is the foundation of **Closures**. The outer Lexical Environment is preserved because `inner()` still references it.

// ---

// # Question 15 — Interview-Level

// ```javascript
// let a = 100;

// function A() {

//     let b = 200;

//     function B() {

//         let c = 300;

//         return function C() {

//             console.log(a);

//             console.log(b);

//             console.log(c);

//         };

//     }

//     return B();

// }

// const fn = A();

// fn();
// ```

// ---

// ## Output

// ```
// 100

// 200

// 300
// ```

// ---

// ## Scope Chain

// ```
// C

// ↓

// B

// ↓

// A

// ↓

// Global
// ```

// ---

// ## Why?

// * `a` is found in the Global Lexical Environment.
// * `b` is found in `A()`'s Lexical Environment.
// * `c` is found in `B()`'s Lexical Environment.

// Even though `A()` and `B()` have finished executing, their Lexical Environments remain in memory because `C()` still has references to them.

// ---

// ## Interview Point

// This demonstrates **Lexical Scope**, **Lexical Environments**, **Scope Chain**, and **Closures** working together. It's a classic senior frontend interview question because it tests your understanding of how JavaScript preserves outer environments after function execution.
