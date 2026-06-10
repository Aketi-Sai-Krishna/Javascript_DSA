# JavaScript Data Types Notes

## Beginner → Pro Level

---

# 1. What Are Data Types?

Data types define:

* what kind of value a variable stores
* how JavaScript handles the value
* how memory is allocated internally

Example:

```js id="dtn1"
let age = 25;
let name = "Sai";
let isLoggedIn = true;
```

Here:

* `25` → number
* `"Sai"` → string
* `true` → boolean

---

# 2. Why Are Data Types Important?

Data types help JavaScript:

* store values correctly
* perform operations correctly
* optimize memory usage
* prevent unexpected behavior

Without data types:

* calculations become incorrect
* memory handling becomes confusing
* bugs increase

---

# 3. Categories of Data Types

JavaScript has:

* Primitive Data Types
* Non-Primitive Data Types

---

# Primitive Data Types

Primitive values:

* store actual values directly
* are immutable
* use stack memory

Types:

1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol

---

# Non-Primitive Data Types

Non-primitive values:

* store references
* are mutable
* use heap memory

Types:

1. Object
2. Array
3. Function

---

# 4. Number Data Type

Used for:

* integers
* decimals
* negative numbers

Example:

```js id="dtn2"
let age = 25;
let price = 99.99;
let temperature = -5;
```

---

# 5. String Data Type

Used for text values.

Example:

```js id="dtn3"
let name = "Sai";
let city = 'Hyderabad';
```

Strings can use:

* double quotes
* single quotes
* backticks

---

# 6. Boolean Data Type

Stores:

* `true`
* `false`

Example:

```js id="dtn4"
let isLoggedIn = true;
let hasPermission = false;
```

Used heavily in:

* conditions
* authentication
* validation
* logic building

---

# 7. Undefined Data Type

A variable declared but NOT assigned a value.

Example:

```js id="dtn5"
let score;

console.log(score);
```

Output:

```text id="dtn6"
undefined
```

---

# 8. Null Data Type

Represents:

# intentional empty value

Example:

```js id="dtn7"
let user = null;
```

Meaning:

# “currently no value exists”

---

# Difference Between Undefined and Null

| undefined          | null                |
| ------------------ | ------------------- |
| value not assigned | intentionally empty |
| automatic by JS    | manually assigned   |

---

# 9. BigInt

Used for very large numbers.

Example:

```js id="dtn8"
let bigNumber = 12345678901234567890n;
```

Normal numbers have limits.

BigInt helps store huge values safely.

---

# 10. Symbol

Used for:

# unique identifiers

Example:

```js id="dtn9"
let id = Symbol("id");
```

Every symbol is unique.

Used internally in advanced JavaScript.

---

# 11. Object Data Type

Objects store:

# key-value pairs

Example:

```js id="dtn10"
const user = {
  name: "Sai",
  age: 25
};
```

Objects are heavily used in:

* APIs
* React
* databases
* applications

---

# 12. Array Data Type

Arrays store:

# multiple values

Example:

```js id="dtn11"
const numbers = [1, 2, 3, 4];
```

Arrays are objects internally.

---

# 13. Function Data Type

Functions are also objects in JavaScript.

Example:

```js id="dtn12"
function greet() {
  console.log("Hello");
}
```

Functions:

* execute reusable code
* can be stored in variables
* can be passed as arguments

---

# 14. typeof Operator

Used to check data types.

Example:

```js id="dtn13"
typeof "Sai";
```

Output:

```text id="dtn14"
string
```

---

# Common typeof Outputs

| Value       | Output        |
| ----------- | ------------- |
| `"Sai"`     | `"string"`    |
| `25`        | `"number"`    |
| `true`      | `"boolean"`   |
| `undefined` | `"undefined"` |
| `{}`        | `"object"`    |

---

# Famous Interview Question

```js id="dtn15"
typeof null
```

Output:

```text id="dtn16"
object
```

This is a historical JavaScript bug.

---

# 15. Primitive vs Non-Primitive

| Primitive           | Non-Primitive    |
| ------------------- | ---------------- |
| stores actual value | stores reference |
| immutable           | mutable          |
| stack memory        | heap memory      |

---

# 16. Stack Memory

Stores:

* primitive values
* execution contexts
* function calls

Fast memory.

Example:

```js id="dtn17"
let age = 25;
```

Stored directly in stack.

---

# 17. Heap Memory

Stores:

* objects
* arrays
* functions

Example:

```js id="dtn18"
const user = {
  name: "Sai"
};
```

Actual object stored in heap memory.

Variable stores reference.

---

# 18. Primitive Copy Behavior

Primitive values copy actual value.

Example:

```js id="dtn19"
let a = 10;
let b = a;

b = 20;

console.log(a);
```

Output:

```text id="dtn20"
10
```

Because:

* separate copies created

---

# 19. Reference Copy Behavior

Objects share references.

Example:

```js id="dtn21"
const user1 = {
  name: "Sai"
};

const user2 = user1;

user2.name = "Krishna";

console.log(user1.name);
```

Output:

```text id="dtn22"
Krishna
```

Both variables point to same object.

---

# 20. Mutable vs Immutable

---

# Immutable

Cannot change original value.

Example:

```js id="dtn23"
let name = "Sai";
```

Strings are immutable.

---

# Mutable

Can modify internal values.

Example:

```js id="dtn24"
const user = {
  name: "Sai"
};

user.name = "Krishna";
```

Objects are mutable.

---

# 21. Type Coercion

JavaScript automatically converts data types.

Example:

```js id="dtn25"
"5" + 1
```

Output:

```text id="dtn26"
51
```

Because:

* number converts to string

---

# Another Example

```js id="dtn27"
"5" - 1
```

Output:

```text id="dtn28"
4
```

Because:

* string converts to number

---

# 22. Truthy and Falsy Values

---

# Falsy Values

These become `false` automatically:

```text id="dtn29"
false
0
""
null
undefined
NaN
```

Everything else is truthy.

---

# Example

```js id="dtn30"
if("Sai") {
  console.log("Truthy");
}
```

---

# 23. NaN

Means:

```text id="dtn31"
Not a Number
```

Example:

```js id="dtn32"
"hello" * 2
```

Output:

```text id="dtn33"
NaN
```

---

# 24. Pass By Value

Primitive values copy actual values.

Example:

```js id="dtn34"
let a = 10;
let b = a;

b = 20;
```

`a` remains unchanged.

---

# 25. Pass By Reference

Objects share memory reference.

Example:

```js id="dtn35"
const obj1 = {
  name: "Sai"
};

const obj2 = obj1;
```

Both point to same object.

---

# 26. Shallow Copy

Copies only first level.

Example:

```js id="dtn36"
const copy = { ...user };
```

Nested objects still share references.

---

# 27. Deep Copy

Creates fully independent copy.

No shared references.

Used in:

* React
* Redux
* state management

---

# 28. Garbage Collection

JavaScript automatically removes:

# unused memory

This process is called:

# Garbage Collection

---

# 29. Why Immutability Matters in React

React compares references.

Immutable updates help:

* performance
* re-render optimization
* predictable state updates

---