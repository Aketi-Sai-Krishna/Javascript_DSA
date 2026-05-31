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
That's a large set (90 questions with detailed answers). For your GitHub learning roadmap, the best approach is the same one we followed for Variables, Data Types, and the first Operators topics:

### Structure

* Part 1 → Questions 1–20 (Beginner)
* Part 2 → Questions 21–40 (Intermediate)
* Part 3 → Questions 41–60 (Advanced)
* Part 4 → Questions 61–80 (Industry / FAANG)
* Part 5 → Questions 81–90 (DSA-Oriented)

This keeps the README readable and easier to review before interviews.

# Part 1 (Questions 1–20) — Answers Only

---

## 1. What is the increment operator (`++`)?

The increment operator increases a variable's value by 1.

```js
let count = 5;
count++;
// count = 6
```

---

## 2. What is the decrement operator (`--`)?

The decrement operator decreases a variable's value by 1.

```js
let count = 5;
count--;
// count = 4
```

---

## 3. What does the following code output?

```js
let count = 5;

count++;

console.log(count);
```

### Answer

```text
6
```

---

## 4. What does the following code output?

```js
let count = 5;

count--;

console.log(count);
```

### Answer

```text
4
```

---

## 5. What is the difference between `count++` and `count--`?

| Operator  | Meaning       |
| --------- | ------------- |
| `count++` | Increase by 1 |
| `count--` | Decrease by 1 |

---

## 6. What is pre-increment (`++a`)?

The value is incremented first, then returned.

```js
let a = 5;

console.log(++a);
```

Output:

```text
6
```

---

## 7. What is post-increment (`a++`)?

The current value is returned first, then incremented.

```js
let a = 5;

console.log(a++);
```

Output:

```text
5
```

After execution:

```text
6
```

---

## 8. Predict the output

```js
let a = 5;

console.log(++a);
```

### Answer

```text
6
```

---

## 9. Predict the output

```js
let a = 5;

console.log(a++);
```

### Answer

```text
5
```

---

## 10. Predict the output

```js
let a = 5;

console.log(a++);
console.log(a);
```

### Answer

```text
5
6
```

---

## 11. What is pre-decrement (`--a`)?

The value is decreased first, then returned.

```js
let a = 5;

console.log(--a);
```

Output:

```text
4
```

---

## 12. What is post-decrement (`a--`)?

The current value is returned first, then decreased.

```js
let a = 5;

console.log(a--);
```

Output:

```text
5
```

After execution:

```text
4
```

---

## 13. Predict the output

```js
let a = 10;

console.log(--a);
```

### Answer

```text
9
```

---

## 14. Predict the output

```js
let a = 10;

console.log(a--);
```

### Answer

```text
10
```

---

## 15. Predict the output

```js
let a = 10;

console.log(a--);
console.log(a);
```

### Answer

```text
10
9
```

---

## 16. Predict the output

```js
let a = 10;

console.log(a++ + ++a);
```

### Answer

```text
22
```

Explanation:

```text
a++ returns 10
a becomes 11

++a becomes 12
returns 12

10 + 12 = 22
```

---

## 17. Predict the output

```js
let a = 5;

console.log(++a + ++a);
```

### Answer

```text
13
```

Explanation:

```text
++a → 6
++a → 7

6 + 7 = 13
```

---

## 18. Predict the output

```js
let a = 5;

console.log(a++ + a++);
```

### Answer

```text
11
```

Explanation:

```text
a++ → 5
a becomes 6

a++ → 6
a becomes 7

5 + 6 = 11
```

---

## 19. Why should complex increment expressions be avoided in production code?

Because they reduce readability, increase confusion, and make debugging difficult.

Prefer:

```js
a++;
total += a;
```

instead of:

```js
total += a++ + ++a;
```

---

## 20. Where are increment operators commonly used?

* Loops
* Counters
* Array traversal
* Frequency counting
* DSA algorithms
* Pagination
* Statistics calculations

```js
for(let i = 0; i < arr.length; i++)
{
    console.log(arr[i]);
}
```

---

# JavaScript Operators — Interview Questions & Answers

## Part 2 (Questions 21–50)

---

# Ternary Operator

## 21. What is a ternary operator?

A ternary operator is a shorthand version of an `if...else` statement.

### Syntax

```js id="op21"
condition ? valueIfTrue : valueIfFalse;
```

---

## 22. What is the syntax of a ternary operator?

```js id="op22"
condition ? trueResult : falseResult;
```

---

## 23. Convert this into a ternary operator

```js id="op23a"
if(age >= 18){
   console.log("Adult");
}else{
   console.log("Minor");
}
```

### Answer

```js id="op23b"
console.log(
  age >= 18
    ? "Adult"
    : "Minor"
);
```

---

## 24. Predict the output

```js id="op24"
let age = 20;

console.log(
  age >= 18
    ? "Adult"
    : "Minor"
);
```

### Answer

```text id="op24a"
Adult
```

---

## 25. Predict the output

```js id="op25"
let marks = 30;

console.log(
  marks >= 35
    ? "Pass"
    : "Fail"
);
```

### Answer

```text id="op25a"
Fail
```

---

## 26. When should you use a ternary operator?

Use a ternary operator for simple conditional decisions that return one of two values.

Example:

```js id="op26"
const status =
  isLoggedIn
    ? "Welcome"
    : "Please Login";
```

---

## 27. When should you avoid a ternary operator?

Avoid ternary operators when:

* Logic becomes complex
* Multiple conditions are involved
* Readability decreases

Prefer:

```js id="op27"
if(condition){
   ...
}else{
   ...
}
```

---

## 28. What is a nested ternary operator?

A ternary operator placed inside another ternary operator.

Example:

```js id="op28"
let grade =
  marks >= 90 ? "A" :
  marks >= 75 ? "B" :
  marks >= 50 ? "C" :
  "Fail";
```

---

## 29. Predict the output

```js id="op29"
let marks = 85;

let grade =
  marks >= 90 ? "A" :
  marks >= 75 ? "B" :
  marks >= 50 ? "C" :
  "Fail";

console.log(grade);
```

### Answer

```text id="op29a"
B
```

---

## 30. Why is the ternary operator popular in React?

Because it allows concise conditional rendering.

Example:

```jsx id="op30"
{
  isLoggedIn
    ? <Dashboard />
    : <Login />
}
```

---

# Nullish Coalescing Operator (??)

## 31. What is the nullish coalescing operator?

The `??` operator provides a fallback value when the left side is:

* `null`
* `undefined`

---

## 32. What is the syntax of `??`?

```js id="op32"
value ?? fallbackValue
```

---

## 33. What values trigger the right side of `??`?

Only:

```text id="op33"
null
undefined
```

---

## 34. Predict the output

```js id="op34"
let username = null;

console.log(
  username ?? "Guest"
);
```

### Answer

```text id="op34a"
Guest
```

---

## 35. Predict the output

```js id="op35"
let username = undefined;

console.log(
  username ?? "Guest"
);
```

### Answer

```text id="op35a"
Guest
```

---

## 36. Predict the output

```js id="op36"
let username = "Sai";

console.log(
  username ?? "Guest"
);
```

### Answer

```text id="op36a"
Sai
```

---

## 37. Predict the output

```js id="op37"
console.log(
  0 ?? 100
);
```

### Answer

```text id="op37a"
0
```

---

## 38. Predict the output

```js id="op38"
console.log(
  false ?? true
);
```

### Answer

```text id="op38a"
false
```

---

## 39. Predict the output

```js id="op39"
console.log(
  "" ?? "Guest"
);
```

### Answer

```text id="op39a"
```

(Empty String)

---

## 40. Why was the nullish coalescing operator introduced?

To provide default values without treating valid values like:

```text id="op40"
0
false
""
```

as missing values.

---

# || vs ??

## 41. Difference between `||` and `??`

### `||`

Returns the right value when the left value is falsy.

Falsy values:

```text id="op41a"
false
0
""
null
undefined
NaN
```

### `??`

Returns the right value only when the left value is:

```text id="op41b"
null
undefined
```

---

## 42. Predict the output

```js id="op42"
console.log(
  0 || 100
);
```

### Answer

```text id="op42a"
100
```

---

## 43. Predict the output

```js id="op43"
console.log(
  0 ?? 100
);
```

### Answer

```text id="op43a"
0
```

---

## 44. Predict the output

```js id="op44"
console.log(
  false || true
);
```

### Answer

```text id="op44a"
true
```

---

## 45. Predict the output

```js id="op45"
console.log(
  false ?? true
);
```

### Answer

```text id="op45a"
false
```

---

## 46. Predict the output

```js id="op46"
console.log(
  "" || "Guest"
);
```

### Answer

```text id="op46a"
Guest
```

---

## 47. Predict the output

```js id="op47"
console.log(
  "" ?? "Guest"
);
```

### Answer

```text id="op47a"
```

(Empty String)

---

## 48. When should developers prefer `??` over `||`?

When values such as:

```text id="op48"
0
false
""
```

are valid and should not be replaced by fallback values.

---

## 49. Why is `??` heavily used in React applications?

Because API responses often contain:

```text id="op49"
null
undefined
```

and React components need safe default values.

Example:

```js id="op49a"
const username =
  response.name ?? "Guest";
```

---

## 50. Give a real-world example where `??` is useful.

```js id="op50"
const salary =
  employee.salary ?? 0;

console.log(salary);
```

If salary is:

```text id="op50a"
null
undefined
```

Output:

```text id="op50b"
0
```

Otherwise, the actual salary is returned.

---



