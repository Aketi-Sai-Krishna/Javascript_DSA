# JavaScript Data Types — Interview Questions & Answers

## Beginner → Industry → FAANG Level

These questions and answers are structured progressively to build:

* JavaScript fundamentals
* Interview preparation
* Internal JavaScript understanding
* Memory concepts
* React-oriented thinking
* Problem-solving mindset

---

# LEVEL 1 — Beginner Basics

## 1. What are data types in JavaScript?

### Answer

Data types define the type of value stored in a variable.
They help JavaScript understand:

* how to store data
* how to process data
* how memory should be allocated

### Example

```js
let age = 25;
let name = "Sai";
let isLoggedIn = true;
```

Here:

* `25` → number
* `"Sai"` → string
* `true` → boolean

---

## 2. Why are data types important?

### Answer

Data types are important because they help JavaScript:

* perform correct operations
* allocate memory efficiently
* avoid unexpected bugs
* understand how values behave internally

### Example

```js
"5" + 1;
```

Output:

```text
51
```

Because JavaScript treats `"5"` as a string.

---

## 3. What are primitive data types?

### Answer

Primitive data types store actual values directly.
They are immutable.

### Primitive Types

* String
* Number
* Boolean
* Undefined
* Null
* BigInt
* Symbol

---

## 4. What are non-primitive data types?

### Answer

Non-primitive data types store references instead of actual values.
They are mutable.

### Non-Primitive Types

* Object
* Array
* Function

---

## 5. Create a number variable.

### Example

```js
let age = 25;
```

---

## 6. Create a string variable.

### Example

```js
let name = "Sai";
```

---

## 7. Create a boolean variable.

### Example

```js
let isLoggedIn = true;
```

---

## 8. Create an undefined variable.

### Example

```js
let score;
```

---

## 9. Create a null variable.

### Example

```js
let user = null;
```

---

## 10. Use `typeof` on different variables.

### Example

```js
let name = "Sai";
console.log(typeof name);

let age = 25;
console.log(typeof age);
```

### Output

```text
string
number
```

---

# LEVEL 2 — Primitive Data Types

## 11. Explain number data type.

### Answer

The number data type stores numeric values.
It supports:

* integers
* decimals
* negative values
* Infinity
* NaN

### Example

```js
let marks = 95;
let price = 99.99;
```

---

## 12. Explain string data type.

### Answer

String data type stores text values.
Strings are written inside:

* single quotes
* double quotes
* backticks

### Example

```js
let city = "Hyderabad";
```

---

## 13. Explain boolean data type.

### Answer

Boolean stores only:

* true
* false

Used heavily in:

* conditions
* authentication
* validations

### Example

```js
let isAdmin = false;
```

---

## 14. Explain undefined.

### Answer

`undefined` means:

# variable declared but value not assigned.

### Example

```js
let score;
console.log(score);
```

### Output

```text
undefined
```

---

## 15. Explain null.

### Answer

`null` represents an intentional absence of value.

### Example

```js
let user = null;
```

Meaning:

```text
No value currently exists
```

---

## 16. Difference between `undefined` and `null`.

| undefined                          | null                    |
| ---------------------------------- | ----------------------- |
| variable declared but not assigned | intentional empty value |
| automatic by JavaScript            | manually assigned       |

### Example

```js
let a;
let b = null;
```

---

## 17. Explain BigInt.

### Answer

BigInt is used for very large integers beyond normal number limits.

### Example

```js
const big = 12345678901234567890n;
```

The `n` at the end represents BigInt.

---

## 18. Explain Symbol.

### Answer

Symbol creates unique identifiers.
Even symbols with same description are different.

### Example

```js
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);
```

### Output

```text
false
```

---

## 19. Are primitive values mutable?

### Answer

No.
Primitive values are immutable.

This means their original values cannot be changed directly.

### Example

```js
let name = "Sai";
name = "Krishna";
```

A new value is created.

---

## 20. Where are primitive values stored?

### Answer

Primitive values are stored in:

# Stack Memory

They store actual values directly.

---

# LEVEL 3 — Non-Primitive Data Types

## 21. Explain object data type.

### Answer

Objects store data as key-value pairs.

### Example

```js
const user = {
  name: "Sai",
  age: 25
};
```

Objects are mutable.

---

## 22. Explain array data type.

### Answer

Arrays store multiple values in ordered form.

### Example

```js
const numbers = [1, 2, 3, 4];
```

Arrays are objects internally.

---

## 23. Explain function data type.

### Answer

Functions are reusable blocks of code.
Functions are also objects internally in JavaScript.

### Example

```js
function greet() {
  console.log("Hello");
}
```

---

## 24. Are arrays objects internally?

### Answer

Yes.
Arrays are specialized objects internally in JavaScript.

### Example

```js
typeof []
```

### Output

```text
object
```

---

## 25. Why are functions objects in JavaScript?

### Answer

Functions are objects because:

* they can be stored in variables
* passed as arguments
* returned from other functions
* can have properties and methods

### Example

```js
function test() {}

test.message = "Hello";
```

---

## 26. Are objects mutable?

### Answer

Yes.
Objects are mutable.

Their internal properties can be modified after creation.

### Example

```js
const user = {
  name: "Sai"
};

user.name = "Krishna";
```

---

## 27. Where are objects stored?

### Answer

Objects are stored in:

# Heap Memory

Variables store references pointing to heap memory.

---

## 28. What is reference storage?

### Answer

Reference storage means variables store memory references (addresses) instead of actual object values.

### Example

```js
const obj1 = {
  name: "Sai"
};

const obj2 = obj1;
```

Both variables point to same object.

---

## 29. Difference between primitive and reference types.

| Primitive Types     | Reference Types  |
| ------------------- | ---------------- |
| store actual values | store references |
| immutable           | mutable          |
| stack memory        | heap memory      |

---

## 30. Difference between mutable and immutable.

| Mutable           | Immutable                     |
| ----------------- | ----------------------------- |
| values can change | values cannot change directly |
| objects, arrays   | strings, numbers              |

---

# LEVEL 4 — typeof & Internal Behavior

## 31. What does `typeof` do?

### Answer

`typeof` checks the data type of a value.

### Example

```js
typeof "Sai";
```

### Output

```text
string
```

---

## 32. Predict output.

```js
typeof "Sai"
```

### Output

```text
string
```

---

## 33. Predict output.

```js
typeof 25
```

### Output

```text
number
```

---

## 34. Predict output.

```js
typeof true
```

### Output

```text
boolean
```

---

## 35. Predict output.

```js
typeof undefined
```

### Output

```text
undefined
```

---

## 36. Predict output.

```js
typeof null
```

### Output

```text
object
```

---

## 37. Why does `typeof null` return `"object"`?

### Answer

This is a historical JavaScript bug.
It remains in JavaScript for backward compatibility.

---

## 38. Predict output.

```js
typeof []
```

### Output

```text
object
```

Arrays are objects internally.

---

## 39. Predict output.

```js
typeof {}
```

### Output

```text
object
```

---

## 40. Predict output.

```js
typeof function(){}
```

### Output

```text
function
```

---

# LEVEL 5 — Interview-Level Questions

## 41. Explain pass by value.

### Answer

Primitive values are copied by value.

Changes in copied variable do not affect original.

### Example

```js
let a = 10;
let b = a;

b = 20;

console.log(a);
```

### Output

```text
10
```

---

## 42. Explain pass by reference.

### Answer

Objects share references.

Multiple variables can point to same object.

### Example

```js
const user1 = {
  name: "Sai"
};

const user2 = user1;
```

---

## 43. Predict output.

```js
let a = 10;
let b = a;

b = 20;

console.log(a);
```

### Output

```text
10
```

Because primitive values create separate copies.

---

## 44. Predict output.

```js
const user1 = {
  name: "Sai"
};

const user2 = user1;

user2.name = "Krishna";

console.log(user1.name);
```

### Output

```text
Krishna
```

Because both variables reference same object.

---

## 45. Explain shallow copy.

### Answer

Shallow copy copies only first level.
Nested objects still share references.

### Example

```js
const copy = { ...user };
```

---

## 46. Explain deep copy.

### Answer

Deep copy creates fully independent copy.
No shared references remain.

---

## 47. Explain object mutation.

### Answer

Object mutation means modifying object properties after creation.

### Example

```js
const user = {
  name: "Sai"
};

user.name = "Krishna";
```

---

## 48. Explain array mutation.

### Answer

Arrays are mutable.
Their elements can change after creation.

### Example

```js
const arr = [1,2,3];

arr.push(4);
```

---

## 49. Why are objects mutable?

### Answer

Objects are mutable because variables store references.
Their internal properties can be modified without changing reference.

---

## 50. Difference between copying primitives and copying objects.

| Primitive Copy                | Object Copy             |
| ----------------------------- | ----------------------- |
| copies actual value           | copies reference        |
| independent values            | shared object           |
| changes don't affect original | changes affect original |

---

# LEVEL 6 — Industry-Level Concepts

## 51. Explain stack memory.

### Answer

Stack memory stores:

* primitive values
* execution contexts
* function calls

It is fast and organized.

---

## 52. Explain heap memory.

### Answer

Heap memory stores:

* objects
* arrays
* functions

Heap memory is dynamic and larger.

---

## 53. How are primitive values stored internally?

### Answer

Primitive values are stored directly in stack memory.

### Example

```js
let age = 25;
```

Memory:

```text
age → 25
```

---

## 54. How are objects stored internally?

### Answer

Objects are stored in heap memory.
Variables store references pointing to heap locations.

---

## 55. Explain memory references.

### Answer

Reference variables store memory addresses instead of actual object values.

### Example

```js
const obj1 = {
  name: "Sai"
};

const obj2 = obj1;
```

Both point to same memory location.

---

## 56. What is garbage collection?

### Answer

Garbage collection is JavaScript’s automatic memory cleanup system.

Unused memory is removed automatically.

---

## 57. Why are global objects dangerous?

### Answer

Global objects:

* remain in memory longer
* can be modified anywhere
* make debugging difficult
* increase memory usage

---

## 58. Explain memory leaks.

### Answer

Memory leaks happen when unused memory is not released.

This increases memory consumption over time.

---

## 59. Explain immutable programming.

### Answer

Immutable programming means data is never modified directly.
Instead, new copies are created.

Used heavily in:

* React
* Redux
* state management

---

## 60. Why is immutability important in React?

### Answer

React uses reference comparison for detecting changes.

Immutability improves:

* performance
* rendering optimization
* debugging
* predictable state updates

---

# LEVEL 7 — Type Coercion & Conversion

## 61. What is type coercion?

### Answer

Type coercion means JavaScript automatically converts one data type into another.

### Example

```js
"5" + 1
```

### Output

```text
51
```

---

## 62. Difference between implicit and explicit conversion.

| Implicit Conversion     | Explicit Conversion        |
| ----------------------- | -------------------------- |
| automatic by JavaScript | manually done by developer |
| type coercion           | type casting               |

### Example

```js
Number("5")
```

---

## 63. Predict output.

```js
"5" + 1
```

### Output

```text
51
```

Because number converts into string.

---

## 64. Predict output.

```js
"5" - 1
```

### Output

```text
4
```

Because string converts into number.

---

## 65. Predict output.

```js
true + 1
```

### Output

```text
2
```

Because:

```text
true → 1
```

---

## 66. Predict output.

```js
false + 1
```

### Output

```text
1
```

Because:

```text
false → 0
```

---

## 67. Explain truthy values.

### Answer

Truthy values behave as `true` inside conditions.

### Examples

```text
"Hello"
1
[]
{}
```

---

## 68. Explain falsy values.

### Answer

Falsy values behave as `false` inside conditions.

### Falsy Values

```text
false
0
""
null
undefined
NaN
```

---

## 69. What is `NaN`?

### Answer

`NaN` means:

```text
Not a Number
```

It appears when invalid mathematical operations occur.

### Example

```js
"hello" * 2
```

---

## 70. Predict output.

```js
typeof NaN
```

### Output

```text
number
```

Even though it means “Not a Number”, JavaScript internally treats NaN as a special numeric value.
