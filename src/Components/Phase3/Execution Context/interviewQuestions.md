Excellent choice. These are the **Top 20 Theory Questions** and **Top 20 Coding Problems** that are **most frequently asked** in JavaScript interviews regarding **Execution Context**. If you master these 40 questions, you'll be well prepared for interviews at product-based companies.

---

# 📘 Top 20 Execution Context Theory Questions

## Beginner Level

### 1. What is an Execution Context?

---

### 2. Why does JavaScript need an Execution Context?

---

### 3. What are the different types of Execution Context?

---

### 4. What is the Global Execution Context (GEC)?

---

### 5. What is a Function Execution Context (FEC)?

---

### 6. What are the two phases of an Execution Context?

---

### 7. What happens during the Creation Phase?

---

### 8. What happens during the Execution Phase?

---

### 9. What information is stored inside an Execution Context?

*(Variable Environment, Lexical Environment, `this` Binding)*

---

### 10. What happens to an Execution Context after a function finishes executing?

---

## Intermediate Level

### 11. What is the difference between Global Execution Context and Function Execution Context?

---

### 12. Why does every function call create a new Execution Context?

---

### 13. How is hoisting related to the Creation Phase of the Execution Context?

---

### 14. What is the relationship between Execution Context and the Call Stack?

---

### 15. What is the difference between Execution Context and Scope?

---

## Advanced Level

### 16. What is the Variable Environment?

---

### 17. What is the Lexical Environment, and why is it important?

---

### 18. How does JavaScript resolve variable lookup using the Lexical Environment?

---

### 19. How do Closures depend on the Execution Context?

---

### 20. Explain the complete lifecycle of an Execution Context with an example.

---

# 💻 Top 20 Execution Context Coding Questions

---

## 1. `var` Hoisting

```javascript
console.log(a);

var a = 10;
```

---

## 2. `let` Hoisting

```javascript
console.log(a);

let a = 10;
```

---

## 3. `const` Hoisting

```javascript
console.log(a);

const a = 10;
```

---

## 4. Function Declaration

```javascript
hello();

function hello() {
    console.log("Hello");
}
```

---

## 5. Function Expression

```javascript
hello();

var hello = function () {
    console.log("Hello");
};
```

---

## 6. Arrow Function

```javascript
hello();

const hello = () => {
    console.log("Hello");
};
```

---

## 7. Local vs Global Variable

```javascript
var a = 10;

function test() {
    var a = 20;
    console.log(a);
}

test();

console.log(a);
```

---

## 8. `var` Inside Function

```javascript
function test() {
    console.log(a);
    var a = 5;
}

test();
```

---

## 9. `let` Inside Function

```javascript
function test() {
    console.log(a);
    let a = 5;
}

test();
```

---

## 10. Nested Function

```javascript
var a = 10;

function one() {

    var a = 20;

    function two() {
        console.log(a);
    }

    two();
}

one();
```

---

## 11. Hoisting + Nested Function

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

---

## 12. Calling Before Assignment

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

## 13. Variable Shadowing

```javascript
var a = 10;

function test() {
    console.log(a);
    var a = 20;
}

test();
```

---

## 14. Multiple Execution Contexts

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

## 15. Recursive Execution Context

```javascript
function count(n) {

    if (n === 0) return;

    console.log(n);

    count(n - 1);
}

count(3);
```

---

## 16. Closure Preview

```javascript
function outer() {

    let a = 10;

    function inner() {
        console.log(a);
    }

    return inner;
}

const fn = outer();

fn();
```

---

## 17. Function Inside Function

```javascript
function outer() {

    let a = 10;

    function inner() {

        let b = 20;

        console.log(a, b);
    }

    inner();
}

outer();
```

---

## 18. Function Declaration vs Variable

```javascript
function test() {

    console.log(foo);

    function foo() {}

    var foo = 100;

    console.log(foo);
}

test();
```

---

## 19. Call Stack Order

```javascript
function a() {

    console.log("A");

    b();

    console.log("AA");
}

function b() {

    console.log("B");

    c();

    console.log("BB");
}

function c() {

    console.log("C");
}

a();
```

---

## 20. Most Asked Product Company Question ⭐⭐⭐⭐⭐

```javascript
var x = 10;

function outer() {

    console.log(x);

    function inner() {
        console.log(x);
    }

    var x = 20;

    inner();
}

outer();
```

---

# 🎯 The 5 Most Important Questions

If you have limited time, prioritize these:

### Theory

1. What is an Execution Context?
2. Explain the Creation Phase and Execution Phase.
3. Explain the relationship between Execution Context and Hoisting.
4. Explain the relationship between Execution Context and the Call Stack.
5. Explain the relationship between Execution Context and Closures.

### Coding

1. `console.log(a); var a = 10;`
2. Function declaration vs function expression.
3. Nested function with variable shadowing.
4. Call stack with nested function calls.
5. The `outer()`/`inner()` example (Question 20), which combines execution context, hoisting, scope, and lexical environments.

Mastering these questions will give you a solid foundation for almost any JavaScript interview that explores Execution Context.
