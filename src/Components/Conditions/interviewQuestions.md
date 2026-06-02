# JavaScript Conditional Statements Interview Roadmap

## Beginner → Intermediate → Industry → FAANG → DSA Level

This follows the same learning structure as your Variables, Data Types, and Operators roadmaps.

---

# LEVEL 1 — Beginner Basics

### Focus

* Understanding conditions
* if statement
* if...else
* Boolean thinking

---

## 1

What is a conditional statement in JavaScript?

---

## 2

Why do we need conditional statements?

---

## 3

What is a condition?

---

## 4

What are the possible outputs of a condition?

---

## 5

Write a program that prints:

```text
Adult
```

if age is greater than or equal to 18.

---

## 6

Write a program that checks whether a number is positive.

---

## 7

Write a program that checks whether a number is even.

---

## 8

What is the syntax of an `if` statement?

---

## 9

Predict the output:

```js
if(true){
  console.log("Hello");
}
```

---

## 10

Predict the output:

```js
if(false){
  console.log("Hello");
}
```

---

# LEVEL 2 — if...else

### Focus

* Two-way decision making

---

## 11

What is an `if...else` statement?

---

## 12

Write a program that checks whether a number is positive or negative.

---

## 13

Write a program that checks whether a person can vote.

---

## 14

Predict the output:

```js
let age = 16;

if(age >= 18){
  console.log("Adult");
}
else{
  console.log("Minor");
}
```

---

## 15

What happens when the condition is false?

---

## 16

Can both `if` and `else` execute together?

---

## 17

Write a program that checks whether a number is divisible by 5.

---

## 18

Write a program that checks whether a student passed or failed.

---

## 19

What is the difference between `if` and `if...else`?

---

## 20

When should you use `if...else`?

---

# LEVEL 3 — Truthy & Falsy

### Focus

* JavaScript boolean conversion

---

## 21

What are truthy values?

---

## 22

What are falsy values?

---

## 23

List all falsy values in JavaScript.

---

## 24

Predict the output:

```js
if(0){
  console.log("Hello");
}
```

---

## 25

Predict the output:

```js
if(100){
  console.log("Hello");
}
```

---

## 26

Predict the output:

```js
if(""){
  console.log("Hello");
}
```

---

## 27

Predict the output:

```js
if("Sai"){
  console.log("Hello");
}
```

---

## 28

Predict the output:

```js
if([]){
  console.log("Hello");
}
```

---

## 29

Predict the output:

```js
if({}){
  console.log("Hello");
}
```

---

## 30

Why are arrays and objects truthy?

---

# LEVEL 4 — else if

### Focus

* Multiple conditions

---

## 31

What is an `else if` statement?

---

## 32

Why do we use `else if`?

---

## 33

Write a grading system using `else if`.

---

## 34

Predict the output:

```js
let marks = 85;

if(marks >= 90){
  console.log("A");
}
else if(marks >= 75){
  console.log("B");
}
else{
  console.log("C");
}
```

---

## 35

How does JavaScript evaluate `else if` conditions?

---

## 36

What happens after the first true condition is found?

---

## 37

Predict the output:

```js
let marks = 95;

if(marks >= 50){
  console.log("Pass");
}
else if(marks >= 90){
  console.log("A");
}
```

---

## 38

Why is question 37 a common interview mistake?

---

## 39

Why should specific conditions come before general conditions?

---

## 40

When should you use `else if`?

---

# LEVEL 5 — Nested if

### Focus

* Decision inside decision

---

## 41

What is a nested if statement?

---

## 42

Write a program that checks:

* Age ≥ 18
* Has driving license

---

## 43

Predict the output:

```js
let age = 20;
let hasLicense = true;

if(age >= 18){
  if(hasLicense){
    console.log("Can Drive");
  }
}
```

---

## 44

What are the disadvantages of deeply nested if statements?

---

## 45

How can logical operators reduce nesting?

---

## 46

Convert a nested if into a single condition using `&&`.

---

## 47

When should nested if be used?

---

## 48

What is the readability problem with nested if?

---

## 49

What is the "Arrow Code" problem?

---

## 50

How do professional developers avoid excessive nesting?

---

# LEVEL 6 — switch Statement

### Focus

* Multiple fixed-value comparisons

---

## 51

What is a switch statement?

---

## 52

Why was switch introduced?

---

## 53

What is the syntax of switch?

---

## 54

What does the expression inside switch represent?

---

## 55

What is a case?

---

## 56

What is the purpose of break?

---

## 57

Predict the output:

```js
let day = 2;

switch(day){
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;
}
```

---

## 58

What happens if break is omitted?

---

## 59

What is fall-through in switch?

---

## 60

What is the purpose of default?

---

# LEVEL 7 — Industry-Level Questions

### Focus

* Real-world programming

---

## 61

When should you use switch instead of if...else?

---

## 62

When should you use if...else instead of switch?

---

## 63

Can switch evaluate ranges?

---

## 64

Why is switch unsuitable for complex conditions?

---

## 65

How is switch used in role-based systems?

---

## 66

How is switch used for API status codes?

---

## 67

How do React applications use conditional rendering?

---

## 68

What is conditional rendering?

---

## 69

How would you show a loading spinner conditionally?

---

## 70

How would you show different UI for Admin and User roles?

---

# LEVEL 8 — FAANG-Level Conceptual Questions

### Focus

* Internal understanding
* Optimization
* Code quality

---

## 71

How does JavaScript internally evaluate an if statement?

---

## 72

How does JavaScript internally evaluate a switch statement?

---

## 73

What is short-circuit evaluation?

---

## 74

How do logical operators work inside conditions?

---

## 75

What is control flow?

---

## 76

Explain execution flow in:

```js
if
else if
else
```

---

## 77

Why is condition ordering important?

---

## 78

What is defensive programming using conditions?

---

## 79

How do conditions improve application security?

---

## 80

How do conditions help prevent runtime errors?

---

# LEVEL 9 — DSA-Oriented Questions

### Focus

* Algorithm thinking
* Decision making

---

## 81

How are conditions used in Binary Search?

---

## 82

How are conditions used while finding maximum element?

---

## 83

How are conditions used while finding minimum element?

---

## 84

How are conditions used in frequency counting?

---

## 85

How are conditions used in Two Pointer algorithms?

---

## 86

How are conditions used in Sliding Window algorithms?

---

## 87

How are conditions used in sorting algorithms?

---

## 88

How are conditions used in graph traversal algorithms?

---

## 89

Why is decision-making important in algorithms?

---

## 90

Explain why conditional statements are considered one of the most fundamental concepts in programming and DSA.

---

