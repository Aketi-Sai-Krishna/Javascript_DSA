
---

# 📘 JavaScript Execution Context Interview Questions (Beginner → Pro)

---

# 🟢 Level 1 — Basic Theory (Must Know)

### 1. What is an Execution Context?

---

### 2. Why does JavaScript need an Execution Context?

---

### 3. What information is stored inside an Execution Context?

---

### 4. What are the types of Execution Context?

---

### 5. How many Global Execution Contexts exist in a JavaScript program?

---

### 6. When is the Global Execution Context created?

---

### 7. When is a Function Execution Context created?

---

### 8. Can multiple Function Execution Contexts exist simultaneously?

---

### 9. What happens to a Function Execution Context after the function returns?

---

### 10. Explain the lifecycle of an Execution Context.

---

### 11. What are the two phases of an Execution Context?

---

### 12. What happens during the Creation Phase?

---

### 13. What happens during the Execution Phase?

---

### 14. What is memory allocation?

---

### 15. What is variable initialization?

---

# 🟢 Level 2 — Hoisting & Execution Context

---

### 16. Predict the output.

```javascript
console.log(a);

var a = 10;
```

---

### 17. Predict the output.

```javascript
console.log(a);

let a = 10;
```

---

### 18. Predict the output.

```javascript
console.log(a);

const a = 10;
```

---

### 19. Predict the output.

```javascript
hello();

function hello() {
    console.log("Hello");
}
```

---

### 20. Predict the output.

```javascript
hello();

var hello = function () {
    console.log("Hello");
};
```

---

### 21. Predict the output.

```javascript
hello();

const hello = () => {
    console.log("Hello");
};
```

---

### 22. Why does `var` become `undefined`?

---

### 23. Why do `let` and `const` throw a `ReferenceError`?

---

### 24. Why are function declarations callable before they are defined?

---

### 25. Why aren't function expressions callable before assignment?

---

# 🟡 Level 3 — Function Execution Context

---

### 26. Predict the output.

```javascript
var a = 5;

function test() {
    console.log(a);
}

test();
```

---

### 27. Predict the output.

```javascript
var a = 5;

function test() {
    var a = 20;
    console.log(a);
}

test();

console.log(a);
```

---

### 28. Predict the output.

```javascript
function test() {

    console.log(a);

    var a = 5;
}

test();
```

---

### 29. Predict the output.

```javascript
function test() {

    console.log(a);

    let a = 5;
}

test();
```

---

### 30. Explain how many Execution Contexts are created.

```javascript
function one(){}

function two(){}

one();
two();
```

---

### 31. How many Execution Contexts exist here?

```javascript
function a(){
    b();
}

function b(){
    c();
}

function c(){}

a();
```

---

# 🟡 Level 4 — Scope + Execution Context

---

### 32. Predict the output.

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

---

### 33. Predict the output.

```javascript
var a = 10;

function one(){

    function two(){
        console.log(a);
    }

    var a = 20;

    two();
}

one();
```

---

### 34. Predict the output.

```javascript
var a = 10;

function one(){

    function two(){
        console.log(a);
    }

    two();

    var a = 20;
}

one();
```

---

### 35. Predict the output.

```javascript
var a = 10;

function one(){

    console.log(a);

    var a = 20;
}

one();
```

---

### 36. Predict the output.

```javascript
var a = 1;

function first(){

    var b = 2;

    function second(){

        var c = 3;

        console.log(a,b,c);
    }

    second();
}

first();
```

---

### 37. Explain the Scope Chain used in the above example.

---

# 🟠 Level 5 — Call Stack + Execution Context

---

### 38. Draw the Call Stack.

```javascript
function one(){

    two();

    console.log("one");
}

function two(){

    three();

    console.log("two");
}

function three(){

    console.log("three");
}

one();
```

---

### 39. Predict the output.

```javascript
function a(){

    console.log("A");

    b();
}

function b(){

    console.log("B");
}

a();
```

---

### 40. Predict the output.

```javascript
function a(){

    b();

    console.log("A");
}

function b(){

    c();

    console.log("B");
}

function c(){

    console.log("C");
}

a();
```

---

### 41. Explain what is pushed and popped from the Call Stack.

---

### 42. Explain LIFO using Execution Context.

---

# 🟠 Level 6 — Tricky Hoisting

---

### 43. Predict the output.

```javascript
var x = 1;

function foo(){

    console.log(x);

    var x = 2;

    console.log(x);
}

foo();
```

---

### 44. Predict the output.

```javascript
var x = 10;

function foo(){

    console.log(x);

    function x(){}

    var x = 20;

    console.log(x);
}

foo();
```

---

### 45. Predict the output.

```javascript
function foo(){

    console.log(bar);

    function bar(){}

    var bar = 100;

    console.log(bar);
}

foo();
```

---

### 46. Explain why function declarations take precedence over `var` during hoisting.

---

# 🔴 Level 7 — Closures + Execution Context

---

### 47. Predict the output.

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

### 48. Why doesn't `a` disappear after `outer()` finishes?

---

### 49. Explain Execution Context with Closures.

---

### 50. What is preserved after an Execution Context is destroyed?

---

# 🔴 Level 8 — Advanced

---

### 51. Explain Variable Environment.

---

### 52. Explain Lexical Environment.

---

### 53. Explain the difference between Variable Environment and Lexical Environment.

---

### 54. Explain how `this` is stored inside an Execution Context.

---

### 55. What is the Outer Environment Reference?

---

### 56. What is the Environment Record?

---

### 57. Why do Closures work?

---

### 58. Why does JavaScript know where to search variables?

---

### 59. Explain Lexical Scoping using Execution Context.

---

### 60. Explain the relationship between Execution Context and Closures.

---

# 🔥 Real Interview Coding Questions

These are asked very frequently because they test your reasoning, not memorization.

---

## Problem 1 ⭐⭐⭐

```javascript
var a = 10;

function test(){

    console.log(a);

    var a = 20;
}

test();
```

---

## Problem 2 ⭐⭐⭐

```javascript
var a = 10;

function test(){

    console.log(a);

    function a(){}

    var a = 20;
}

test();
```

---

## Problem 3 ⭐⭐⭐⭐

```javascript
var a = 10;

function one(){

    console.log(a);

    function two(){

        console.log(a);
    }

    var a = 20;

    two();
}

one();
```

---

## Problem 4 ⭐⭐⭐⭐

```javascript
function outer(){

    let count = 0;

    return function(){

        count++;

        console.log(count);
    };
}

const counter = outer();

counter();

counter();

counter();
```

---

## Problem 5 ⭐⭐⭐⭐⭐

```javascript
var x = 10;

function foo(){

    console.log(x);

    if(true){

        var x = 20;

        console.log(x);
    }

    console.log(x);
}

foo();
```

---

## Problem 6 ⭐⭐⭐⭐⭐

```javascript
var x = 100;

function outer(){

    function inner(){

        console.log(x);
    }

    var x = 50;

    return inner;
}

const fn = outer();

fn();
```

---

## Problem 7 ⭐⭐⭐⭐⭐

```javascript
var x = 1;

function a(){

    console.log(x);

    function b(){

        console.log(x);

        var x = 5;
    }

    b();
}

a();
```

---

## Problem 8 ⭐⭐⭐⭐⭐

```javascript
var a = 10;

function one(){

    console.log(a);

    var a = 20;

    function two(){

        console.log(a);
    }

    two();
}

one();
```

---

## Problem 9 ⭐⭐⭐⭐⭐

```javascript
function one(){

    console.log("1");

    two();

    console.log("2");
}

function two(){

    console.log("3");

    three();

    console.log("4");
}

function three(){

    console.log("5");
}

one();
```

> **Interview Task:** Draw the complete **Call Stack** from start to finish.

---

## Problem 10 ⭐⭐⭐⭐⭐ (Favorite)

```javascript
var x = 1;

function foo(){

    console.log(x);

    var x = 2;

    function bar(){

        console.log(x);
    }

    return bar;
}

const fn = foo();

fn();
```

---

# ⭐ FAANG / Product Company Discussion Questions

These are open-ended questions where interviewers evaluate your depth of understanding:

1. Explain the JavaScript engine's execution process from loading the script to program completion.
2. Why are execution contexts needed?
3. Can two execution contexts run at exactly the same time in JavaScript?
4. What is the difference between execution context and scope?
5. What is the difference between execution context and lexical environment?
6. Explain the relationship between execution context, the call stack, and closures.
7. Why do nested functions remember variables after the outer function has finished?
8. Explain why JavaScript is called a single-threaded language using execution contexts.
9. How would you debug an execution-context-related bug in a large React application?
10. What common JavaScript bugs can be traced back to misunderstanding execution contexts?

---

# 💡 My Advice for Interviews

When you see any JavaScript output question:

1. **Identify the current execution context** (Global or Function).
2. **Draw the memory after the Creation Phase** (`var`, `let`, `const`, functions).
3. **Execute line by line**.
4. **Whenever you see a function call, create a new execution context mentally.**
5. **Use the lexical scope chain to resolve variables.**
6. **If multiple functions are called, visualize the call stack (LIFO).**

> **Never guess the output.** Interviewers are much more interested in *how* you arrive at the answer than whether you happen to guess it correctly. If you can explain the Creation Phase, Execution Phase, lexical scope, and the call stack clearly, you'll perform well even on tricky questions.
