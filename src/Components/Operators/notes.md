# JavaScript Operators, Comparison & Logical Operators

# What are Operators?

An operator is a special symbol that performs an operation on one or more values.

Think of operators as:

```text
Action Symbols
```

They tell JavaScript what action to perform.

### Example

```js
let a = 10;
let b = 20;

let sum = a + b;
```

Here:

```text
+
```

is an operator.

---

# Why Operators Matter

Operators are used everywhere in JavaScript.

Examples:

```text
Calculations
Conditions
Loops
Functions
React Components
DSA Problems
```

Without operators:

```text
No calculations
No comparisons
No decisions
```

---

# Types of Operators

JavaScript contains several categories of operators.

```text
1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Increment / Decrement Operators
6. Ternary Operator
7. Nullish Coalescing Operator
8. Optional Chaining
```

For this topic focus on:

```text
✓ Arithmetic Operators
✓ Assignment Operators
✓ Comparison Operators
✓ Logical Operators
```

---

# 1. Arithmetic Operators

Arithmetic operators perform mathematical calculations.

---

## Addition (+)

Adds two values.

```js
let a = 10;
let b = 20;

console.log(a + b);
```

Output:

```text
30
```

---

## Subtraction (-)

Subtracts values.

```js
console.log(20 - 5);
```

Output:

```text
15
```

---

## Multiplication (*)

Multiplies values.

```js
console.log(5 * 4);
```

Output:

```text
20
```

---

## Division (/)

Divides values.

```js
console.log(20 / 5);
```

Output:

```text
4
```

---

## Modulus (%)

Returns the remainder after division.

```js
console.log(10 % 3);
```

Output:

```text
1
```

Because:

```text
10 ÷ 3 = 3 remainder 1
```

---

### Why Modulus Is Important

Used heavily in DSA.

Examples:

```js
10 % 2 === 0
```

Checking even numbers.

---

```js
11 % 2 !== 0
```

Checking odd numbers.

---

## Exponentiation (**)

Raises a number to a power.

```js
console.log(2 ** 3);
```

Output:

```text
8
```

Because:

```text
2 × 2 × 2 = 8
```

---

# Arithmetic Operators Summary

| Operator | Meaning             |
| -------- | ------------------- |
| +        | Addition            |
| -        | Subtraction         |
| *        | Multiplication      |
| /        | Division            |
| %        | Modulus (Remainder) |
| **       | Power               |

---

# 2. Assignment Operators

Assignment operators assign values to variables.

---

## Basic Assignment (=)

```js
let age = 25;
```

Stores:

```text
age → 25
```

---

## Addition Assignment (+=)

```js
let score = 10;

score += 5;
```

Equivalent to:

```js
score = score + 5;
```

Output:

```text
15
```

---

## Subtraction Assignment (-=)

```js
let score = 20;

score -= 5;
```

Equivalent to:

```js
score = score - 5;
```

Output:

```text
15
```

---

## Multiplication Assignment (*=)

```js
let score = 10;

score *= 2;
```

Equivalent:

```js
score = score * 2;
```

Output:

```text
20
```

---

## Division Assignment (/=)

```js
let score = 20;

score /= 2;
```

Equivalent:

```js
score = score / 2;
```

Output:

```text
10
```

---

## Modulus Assignment (%=)

```js
let score = 10;

score %= 3;
```

Equivalent:

```js
score = score % 3;
```

Output:

```text
1
```

---

# Why Assignment Operators Matter

Used heavily in:

```text
Loops
Counters
DSA Problems
React State Updates
```

Example:

```js
count += 1;
```

---

```js
sum += arr[i];
```

---

```js
windowSum += arr[right];
```

Sliding Window DSA.

---

# Assignment Operators Summary

| Operator | Equivalent    |
| -------- | ------------- |
| =        | Assign        |
| +=       | a = a + value |
| -=       | a = a - value |
| *=       | a = a * value |
| /=       | a = a / value |
| %=       | a = a % value |

---

# 3. Comparison Operators

Comparison operators compare values.

They always return:

```text
true
or
false
```

(Boolean)

---

## Equal To (==)

Checks value only.

```js
console.log(5 == "5");
```

Output:

```text
true
```

Why?

JavaScript automatically converts:

```text
"5" → 5
```

This process is called:

```text
Type Coercion
```

---

## Strict Equal To (===)

Checks:

```text
Value
AND
Type
```

```js
console.log(5 === "5");
```

Output:

```text
false
```

Because:

```text
Number !== String
```

---

### Interview Rule

Always prefer:

```js
===
```

instead of:

```js
==
```

unless you specifically need coercion.

---

## Not Equal (!=)

Checks whether values are different.

```js
console.log(5 != 6);
```

Output:

```text
true
```

---

## Strict Not Equal (!==)

Checks both value and type.

```js
console.log(5 !== "5");
```

Output:

```text
true
```

---

## Greater Than (>)

```js
console.log(10 > 5);
```

Output:

```text
true
```

---

## Less Than (<)

```js
console.log(5 < 10);
```

Output:

```text
true
```

---

## Greater Than or Equal (>=)

```js
console.log(10 >= 10);
```

Output:

```text
true
```

---

## Less Than or Equal (<=)

```js
console.log(5 <= 5);
```

Output:

```text
true
```

---

# Comparison Operators Summary

| Operator | Meaning               |
| -------- | --------------------- |
| ==       | Loose Equality        |
| ===      | Strict Equality       |
| !=       | Loose Not Equal       |
| !==      | Strict Not Equal      |
| >        | Greater Than          |
| <        | Less Than             |
| >=       | Greater Than or Equal |
| <=       | Less Than or Equal    |

---

# Type Coercion (Important Interview Topic)

Type coercion means:

```text
JavaScript automatically converts one data type into another.
```

Example:

```js
console.log(5 == "5");
```

Output:

```text
true
```

Because:

```text
"5"
```

is converted into:

```text
5
```

before comparison.

---

### Another Example

```js
console.log(true == 1);
```

Output:

```text
true
```

Because:

```text
true → 1
```

---

# 4. Logical Operators

Logical operators combine multiple conditions.

Used heavily in:

```text
Authentication
Authorization
Form Validation
React Components
DSA Conditions
```

---

# AND Operator (&&)

Returns:

```text
true
```

ONLY if ALL conditions are true.

---

## Example

```js
let age = 25;
let citizen = true;

console.log(age > 18 && citizen);
```

Output:

```text
true
```

Because:

```text
Condition 1 → true
Condition 2 → true
```

---

## Truth Table

| A | B | A && B |
| - | - | ------ |
| T | T | T      |
| T | F | F      |
| F | T | F      |
| F | F | F      |

---

## Real Example

```js
if(age > 18 && citizen){
  console.log("Eligible");
}
```

Both conditions must be true.

---

# OR Operator (||)

Returns:

```text
true
```

if ANY condition is true.

---

## Example

```js
console.log(true || false);
```

Output:

```text
true
```

---

## Truth Table

| A | B | A || B |
| - | - | ------ |
| T | T | T      |
| T | F | T      |
| F | T | T      |
| F | F | F      |

---

## Real Example

```js
if(role === "admin" || role === "manager"){
  console.log("Access Granted");
}
```

Only one condition must be true.

---

# NOT Operator (!)

Reverses a boolean value.

---

## Example

```js
console.log(!true);
```

Output:

```text
false
```

---

```js
console.log(!false);
```

Output:

```text
true
```

---

## Real Example

```js
let isLoggedIn = false;

if(!isLoggedIn){
  console.log("Please Login");
}
```

---

# Logical Operators Summary

| Operator | Meaning |
| -------- | ------- |
| &&       | AND     |
| ||       | OR      |
| !        | NOT     |

---

# Interview Cheat Sheet

### Use `===` instead of `==`

```js
5 === "5"
```

Output:

```text
false
```

---

### AND requires all conditions

```js
true && true
```

Output:

```text
true
```

---

### OR requires one condition

```js
false || true
```

Output:

```text
true
```

---

### NOT reverses value

```js
!true
```

Output:

```text
false
```

---

# DSA Connection

These operators are used everywhere in algorithms.

### Even / Odd

```js
num % 2 === 0
```

---

### Maximum Number

```js
if(arr[i] > max)
```

---

### Minimum Number

```js
if(arr[i] < min)
```

---

### Binary Search

```js
if(mid === target)
```

---

### Sliding Window

```js
windowSum += arr[right];
```

---

### Frequency Counting

```js
count += 1;
```

---

### Two Pointers

```js
while(left < right)
```

---
