# JavaScript Operators — Interview Questions & Answers

## Part 1 (Questions 1–20) — Answers Only

---

## 1. What is an operator in JavaScript?

An operator is a special symbol that performs operations on values or variables.

---

## 2. Why are operators important in programming?

Operators are used to perform calculations, comparisons, assignments, and logical decisions.

---

## 3. What are the major types of operators in JavaScript?

* Arithmetic Operators
* Assignment Operators
* Comparison Operators
* Logical Operators
* Increment/Decrement Operators
* Ternary Operator
* Nullish Coalescing Operator
* Optional Chaining Operator

---

## 4. What is an arithmetic operator?

An arithmetic operator performs mathematical calculations on values.

---

## 5. What does the `+` operator do?

Adds numbers or concatenates strings.

---

## 6. What does the `-` operator do?

Subtracts one value from another.

---

## 7. What does the `*` operator do?

Multiplies values.

---

## 8. What does the `/` operator do?

Divides one value by another.

---

## 9. What does the `%` operator do?

Returns the remainder after division.

---

## 10. What does the `**` operator do?

Raises a number to a power.

---

## 11. Predict Output

```js
console.log(10 + 20);
```

**Answer:**

```text
30
```

---

## 12. Predict Output

```js
console.log(50 - 10);
```

**Answer:**

```text
40
```

---

## 13. Predict Output

```js
console.log(5 * 6);
```

**Answer:**

```text
30
```

---

## 14. Predict Output

```js
console.log(20 / 4);
```

**Answer:**

```text
5
```

---

## 15. Predict Output

```js
console.log(10 % 3);
```

**Answer:**

```text
1
```

---

## 16. Predict Output

```js
console.log(15 % 5);
```

**Answer:**

```text
0
```

---

## 17. Predict Output

```js
console.log(2 ** 4);
```

**Answer:**

```text
16
```

---

## 18. Why is `%` important in programming?

It is used for even/odd checks, hashing, circular indexing, and many DSA algorithms.

---

## 19. How do you check if a number is even?

```js
num % 2 === 0
```

---

## 20. How do you check if a number is odd?

```js
num % 2 !== 0
```

---

# JavaScript Operators — Interview Questions & Answers

## Part 2 (Questions 21–50) — Answers Only

---

## 21. What is an assignment operator?

An assignment operator assigns a value to a variable.

---

## 22. Explain the `=` operator.

The `=` operator assigns a value to a variable.

```js
let age = 25;
```

---

## 23. Explain the `+=` operator.

Adds a value and assigns the result back to the variable.

```js
a += 5;
```

Equivalent to:

```js
a = a + 5;
```

---

## 24. Explain the `-=` operator.

Subtracts a value and assigns the result back to the variable.

```js
a -= 5;
```

Equivalent to:

```js
a = a - 5;
```

---

## 25. Explain the `*=` operator.

Multiplies a value and assigns the result back to the variable.

```js
a *= 2;
```

Equivalent to:

```js
a = a * 2;
```

---

## 26. Explain the `/=` operator.

Divides a value and assigns the result back to the variable.

```js
a /= 2;
```

Equivalent to:

```js
a = a / 2;
```

---

## 27. Explain the `%=` operator.

Applies modulus and assigns the result back to the variable.

```js
a %= 3;
```

Equivalent to:

```js
a = a % 3;
```

---

## 28. Predict Output

```js
let a = 10;
a += 5;
console.log(a);
```

**Answer**

```text
15
```

---

## 29. Predict Output

```js
let a = 20;
a -= 10;
console.log(a);
```

**Answer**

```text
10
```

---

## 30. Why are assignment operators commonly used in loops?

They efficiently update counters, sums, frequencies, and state variables.

---

# Comparison Operators

---

## 31. What is a comparison operator?

A comparison operator compares two values and returns a boolean (`true` or `false`).

---

## 32. What do comparison operators return?

```text
true
or
false
```

---

## 33. Predict Output

```js
console.log(10 > 5);
```

**Answer**

```text
true
```

---

## 34. Predict Output

```js
console.log(5 > 10);
```

**Answer**

```text
false
```

---

## 35. Predict Output

```js
console.log(10 < 20);
```

**Answer**

```text
true
```

---

## 36. Predict Output

```js
console.log(20 <= 20);
```

**Answer**

```text
true
```

---

## 37. Predict Output

```js
console.log(50 >= 100);
```

**Answer**

```text
false
```

---

## 38. Difference between `==` and `===`.

### `==`

Compares values only after type coercion.

### `===`

Compares both value and data type without type coercion.

---

## 39. Predict Output

```js
console.log(5 == "5");
```

**Answer**

```text
true
```

---

## 40. Predict Output

```js
console.log(5 === "5");
```

**Answer**

```text
false
```

---

# Logical Operators

---

## 41. What is a logical operator?

A logical operator combines or modifies boolean expressions.

---

## 42. Name the three logical operators in JavaScript.

* AND (`&&`)
* OR (`||`)
* NOT (`!`)

---

## 43. Explain AND (`&&`).

Returns `true` only if all conditions are true.

---

## 44. Explain OR (`||`).

Returns `true` if at least one condition is true.

---

## 45. Explain NOT (`!`).

Reverses a boolean value.

---

## 46. Predict Output

```js
console.log(true && true);
```

**Answer**

```text
true
```

---

## 47. Predict Output

```js
console.log(true && false);
```

**Answer**

```text
false
```

---

## 48. Predict Output

```js
console.log(false || true);
```

**Answer**

```text
true
```

---

## 49. Predict Output

```js
console.log(false || false);
```

**Answer**

```text
false
```

---

## 50. Predict Output

```js
console.log(!true);
```

**Answer**

```text
false
```

---

# JavaScript Operators — Interview Questions & Answers

## Part 3 (Questions 51–90) — Answers Only

---

# LEVEL 6 — Interview-Level Questions

## 51. What is type coercion?

Type coercion is JavaScript's automatic conversion of one data type into another during operations or comparisons.

---

## 52. Why does this return true?

```js id="x95slj"
5 == "5"
```

Because `==` performs type coercion and converts `"5"` into the number `5` before comparison.

---

## 53. Why does this return false?

```js id="vk27m7"
5 === "5"
```

Because `===` compares both value and data type, and `number !== string`.

---

## 54. Predict Output

```js id="l59ksr"
console.log(null == undefined);
```

**Answer**

```text id="ojlqv5"
true
```

---

## 55. Predict Output

```js id="rxts1n"
console.log(null === undefined);
```

**Answer**

```text id="0c5lzu"
false
```

---

## 56. Predict Output

```js id="nrzwim"
console.log(0 == false);
```

**Answer**

```text id="u7xq9n"
true
```

---

## 57. Predict Output

```js id="8a5tx8"
console.log(0 === false);
```

**Answer**

```text id="wdwjlwm"
false
```

---

## 58. Why should developers prefer `===`?

Because it avoids implicit type coercion and produces more predictable results.

---

## 59. What problems can `==` create?

Unexpected type conversions can lead to bugs and incorrect comparisons.

---

## 60. Explain implicit type conversion during comparisons.

JavaScript automatically converts values to compatible types before comparison when using `==`.

---

# LEVEL 7 — Industry-Level Questions

## 61. What is short-circuit evaluation?

JavaScript stops evaluating an expression as soon as the final result is determined.

---

## 62. Predict Output

```js id="wcy35f"
false && console.log("Hello");
```

**Answer**

No output.

---

## 63. Predict Output

```js id="t70bqa"
true || console.log("Hello");
```

**Answer**

No output.

---

## 64. Explain why AND stops at the first falsy value.

Because one falsy value makes the entire AND expression false.

---

## 65. Explain why OR stops at the first truthy value.

Because one truthy value makes the entire OR expression true.

---

## 66. How is `&&` used in React conditional rendering?

```js id="9g6iwz"
{isLoggedIn && <Dashboard />}
```

---

## 67. How is `||` used for default values?

```js id="w2ztsb"
const name = userName || "Guest";
```

---

## 68. Predict Output

```js id="e8obsp"
console.log("" || "Guest");
```

**Answer**

```text id="1xwm8q"
Guest
```

---

## 69. Predict Output

```js id="0zkafw"
console.log("Sai" && "Krishna");
```

**Answer**

```text id="rdy27q"
Krishna
```

---

## 70. Why are logical operators heavily used in authentication systems?

They help validate multiple conditions such as username, password, roles, permissions, and access control.

---

# LEVEL 8 — FAANG-Level Questions

## 71. What is operator precedence?

Operator precedence determines which operation executes first in an expression.

---

## 72. Predict Output

```js id="2wej8d"
console.log(2 + 3 * 4);
```

**Answer**

```text id="rjlwmr"
14
```

---

## 73. Why does multiplication execute before addition?

Because multiplication has higher precedence than addition.

---

## 74. What is associativity?

Associativity determines the order in which operators of the same precedence are evaluated.

---

## 75. Difference between operator precedence and associativity.

* Precedence decides which operator runs first.
* Associativity decides execution direction when operators have equal precedence.

---

## 76. Explain pre-increment (`++a`).

The variable is incremented first, then returned.

---

## 77. Explain post-increment (`a++`).

The current value is returned first, then incremented.

---

## 78. Predict Output

```js id="jlwmii"
let a = 5;
console.log(a++);
```

**Answer**

```text id="wv04gn"
5
```

---

## 79. Predict Output

```js id="6e4z8e"
let a = 5;
console.log(++a);
```

**Answer**

```text id="xbec9o"
6
```

---

## 80. Predict Output

```js id="d5d0z4"
let a = 10;
console.log(a++ + ++a);
```

**Answer**

```text id="vr6cnc"
22
```

---

# LEVEL 9 — DSA-Oriented Thinking

## 81. Use `+=` to calculate the sum of numbers from 1 to 100.

```js id="w0vjkn"
let sum = 0;

for(let i = 1; i <= 100; i++) {
  sum += i;
}
```

---

## 82. Use `%` to determine whether a number is even or odd.

```js id="sjf5t2"
num % 2 === 0
```

---

## 83. Use comparison operators to find the maximum value in an array.

```js id="nq3h7j"
if(arr[i] > max)
```

---

## 84. Use comparison operators to find the minimum value in an array.

```js id="9zjlwm"
if(arr[i] < min)
```

---

## 85. Use `+=` as a counter inside a loop.

```js id="cphn2j"
count += 1;
```

---

## 86. Use logical operators to validate user credentials.

```js id="xzrfvf"
if(username && password)
```

---

## 87. Explain how comparison operators are used in Binary Search.

Comparison operators determine whether the target is less than, greater than, or equal to the middle element.

---

## 88. Explain how logical operators are used in Two Pointer algorithms.

Logical operators combine multiple conditions while moving pointers.

---

## 89. Explain how assignment operators are used in Sliding Window problems.

Assignment operators update window sums, counts, and indices efficiently.

---

## 90. Why are operators considered the foundation of DSA and algorithm design?

Because every algorithm relies on calculations, comparisons, updates, and condition checking, all of which are performed using operators.

---
