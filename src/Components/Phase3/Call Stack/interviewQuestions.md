
Below are the **most frequently asked interview questions** on the **Call Stack**.

---

# Part 1 — Theory Questions (15)

## Beginner

### 1. What is the Call Stack in JavaScript?

---

### 2. Why does JavaScript need a Call Stack?

---

### 3. What data structure is used to implement the Call Stack?

---

### 4. Why is the Call Stack called a LIFO data structure?

---

### 5. What gets stored inside the Call Stack?

*(Trick: functions or execution contexts?)*

---

## Intermediate

### 6. What happens inside the Call Stack when one function calls another function?

---

### 7. What is the relationship between the Call Stack and the Execution Context?

---

### 8. Is there only one Call Stack in JavaScript? Why?

---

### 9. What happens to the Call Stack after a function returns?

---

### 10. Explain the difference between the Call Stack and the Memory Heap.

---

## Advanced

### 11. What causes the "Maximum Call Stack Size Exceeded" error?

---

### 12. How does recursion affect the Call Stack?

---

### 13. How does JavaScript know where to continue execution after a function call finishes?

---

### 14. Why can't two JavaScript functions execute simultaneously on the same thread?

---

### 15. How is the Call Stack involved in asynchronous JavaScript and the Event Loop?

---

# Part 2 — Practical/Code Tracing Questions (15)

---

## Question 1

Predict the output.

```javascript
function one() {
    console.log("One");
}

one();

console.log("Done");
```

**Interview Focus**

* Stack push/pop
* Execution order

---

## Question 2

Predict the output.

```javascript
function one() {
    two();
    console.log("One");
}

function two() {
    console.log("Two");
}

one();
```

---

## Question 3

Trace the Call Stack.

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

Draw the Call Stack at every step.

---

## Question 4

Predict the output.

```javascript
function greet(name) {
    return "Hello " + name;
}

function start() {
    console.log(greet("Sai"));
}

start();
```

Explain what is pushed and popped.

---

## Question 5

Predict the output.

```javascript
function a() {
    console.log("A");
}

function b() {
    a();
    console.log("B");
}

function c() {
    b();
    console.log("C");
}

c();
```

Draw the stack after every function call.

---

## Question 6

What is the final Call Stack before the error occurs?

```javascript
function hello() {
    hello();
}

hello();
```

---

## Question 7

Predict the output.

```javascript
function test() {
    console.log("Start");

    return;

    console.log("End");
}

test();
```

Explain the stack changes.

---

## Question 8

Predict the output.

```javascript
console.log("Start");

function one() {
    console.log("Inside");
}

one();

console.log("End");
```

---

## Question 9

Trace execution.

```javascript
function outer() {

    function inner() {
        console.log("Inner");
    }

    inner();

    console.log("Outer");
}

outer();
```

Which execution contexts are on the stack?

---

## Question 10

Predict the output.

```javascript
function one() {

    console.log("1");

    two();

    console.log("2");
}

function two() {

    console.log("3");
}

one();
```

Draw the stack after each statement.

---

## Question 11

Predict the output.

```javascript
function a() {

    console.log("A1");

    b();

    console.log("A2");
}

function b() {

    console.log("B1");

    c();

    console.log("B2");
}

function c() {

    console.log("C");
}

a();
```

Interviewers usually ask you to **draw the Call Stack**.

---

## Question 12

Predict the output.

```javascript
function sum(n) {

    if (n === 0)
        return 0;

    return n + sum(n - 1);
}

console.log(sum(3));
```

Questions:

* Draw the Call Stack.
* Explain the return phase.
* When does each frame get popped?

---

## Question 13

Find the bug.

```javascript
function login() {

    validate();
}

function validate() {

    login();
}

login();
```

* Why does this crash?
* How would you fix it?

---

## Question 14

Trace the stack.

```javascript
function x() {

    y();
}

function y() {

    z();
}

function z() {

    console.log("Done");
}

console.log("Start");

x();

console.log("Finish");
```

Explain every push and pop.

---

## Question 15 (Most Asked)

Predict the output.

```javascript
console.log("Start");

function first() {

    console.log("First");

    second();

    console.log("After Second");
}

function second() {

    console.log("Second");
}

first();

console.log("End");
```

Draw:

* Stack after every function call
* Push sequence
* Pop sequence
* Final output

---

# ⭐ Bonus: Senior-Level Conceptual Questions (Frequently Asked in Product Companies)

These questions are common in companies like **Amazon**, **Adobe**, **Microsoft**, **Atlassian**, **Salesforce**, **Swiggy**, **PhonePe**, **Razorpay**, and similar product-based organizations.

1. Can you explain the Call Stack using the concept of Execution Contexts?
2. Is the Global Execution Context ever removed from the Call Stack? If yes, when?
3. What is stored in each stack frame?
4. Does every function call create a new Execution Context? Are there any exceptions?
5. Why does recursion consume more memory than a loop?
6. Can a function remain in memory after it has been popped from the Call Stack? (Hint: Closures)
7. What happens if a synchronous function blocks the Call Stack for 10 seconds?
8. Can JavaScript execute asynchronous callbacks while the Call Stack is busy?
9. Why is understanding the Call Stack essential for debugging?
10. How does the browser's stack trace help identify runtime errors?

---
