# JavaScript Variables — Questions & Answers

## 1. Create a variable called `name` and store your name.

### Answer

```js id="qa01"
let name = "Sai";
console.log(name);
```

---

# 2. Create variables for age, city, and country. Print all values.

### Answer

```js id="qa02"
const age = 25;
let city = "Hyderabad";
const country = "India";

console.log(age);
console.log(city);
console.log(country);
```

---

# 3. Store two numbers and print their sum.

### Answer

```js id="qa03"
let a = 10;
let b = 20;

let sum = a + b;

console.log(sum);
```

---

# 4. Change the value of a variable declared using `let`.

### Answer

```js id="qa04"
let score = 10;

score = 20;

console.log(score);
```

Output:

```text id="qa05"
20
```

---

# 5. Try changing a `const` variable.

### Answer

```js id="qa06"
const country = "India";

country = "USA";
```

Output:

```text id="qa07"
TypeError: Assignment to constant variable
```

Explanation:
`const` variables cannot be reassigned.

---

# 6. Combine first name and last name into full name.

### Answer

```js id="qa08"
const firstName = "John";
const lastName = "Doe";

const fullName = firstName + " " + lastName;

console.log(fullName);
```

---

# 7. Create variables for boolean, string, and number data types.

### Answer

```js id="qa09"
let isLoggedIn = true;
let userName = "Sai";
let age = 25;
```

---

# 8. Use `typeof` on different variables.

### Answer

```js id="qa10"
let isLoggedIn = true;
let userName = "Sai";
let age = 25;

console.log(typeof isLoggedIn);
console.log(typeof userName);
console.log(typeof age);
```

Output:

```text id="qa11"
boolean
string
number
```

---

# 9. Swap two variable values using a temporary variable.

### Answer

```js id="qa12"
let x = 10;
let y = 20;

let temp = x;

x = y;
y = temp;

console.log(x);
console.log(y);
```

Output:

```text id="qa13"
20
10
```

---

# 10. Store marks of 5 subjects and calculate total.

### Answer

```js id="qa14"
const telugu = 100;
const hindi = 80;
const english = 90;
const maths = 95;
const science = 85;

const totalMarks =
  telugu + hindi + english + maths + science;

console.log(totalMarks);
```

---

# 11. Identify valid and invalid variable names.

### Answer

✅ Valid

```js id="qa15"
let firstName;
let totalMarks;
```

❌ Invalid

```js id="qa16"
let 1name;
let user-name;
```

Explanation:

* Variable names cannot start with numbers.
* Hyphen (`-`) is not allowed in variable names.

---

# 12. Convert names into camelCase format.

### Answer

```js id="qa17"
let totalMarks;
let loginStatus;
let userScore;
```

---

# 13. Explain declaration, initialization, and assignment.

### Answer

## Declaration

Creating a variable name.

```js id="qa18"
let name;
```

---

## Initialization

Giving first value to variable.

```js id="qa19"
let name = "Sai";
```

---

## Assignment

Changing or setting value later.

```js id="qa20"
name = "Krishna";
```

---

# 14. Explain reassignment.

### Answer

Reassignment means changing the value of an existing variable.

```js id="qa21"
let age = 25;

age = 30;

console.log(age);
```

---

# 15. Predict the output.

### Code

```js id="qa22"
let a = 10;

a = 20;

console.log(a);
```

### Output

```text id="qa23"
20
```

---

# 16. Explain: variable → value in memory

### Answer

Variables are named references that point to values stored in memory.

Example:

```js id="qa24"
let age = 25;
```

Memory representation:

```text id="qa25"
age → 25
```

---

# 17. What happens internally when JavaScript sees `let age = 22`?

### Answer

JavaScript executes code in two phases:

## 1. Memory Creation Phase

The variable is stored in memory.

```text id="qa26"
age → uninitialized
```

---

## 2. Execution Phase

The value is assigned.

```text id="qa27"
age → 22
```

Explanation:
`let` variables are hoisted but remain in the Temporal Dead Zone until initialization.

---

# 18. Difference between `var`, `let`, and `const`.

### Answer

| Feature      | `var`    | `let` | `const` |
| ------------ | -------- | ----- | ------- |
| Scope        | Function | Block | Block   |
| Reassign     | ✅        | ✅     | ❌       |
| Redeclare    | ✅        | ❌     | ❌       |
| Hoisted      | ✅        | ✅     | ✅       |
| TDZ          | ❌        | ✅     | ✅       |
| Modern Usage | ❌        | ✅     | ✅       |

---

# 19. When should you use `let` and `const`?

### Answer

Use:

* `const` when value should not change
* `let` when value needs reassignment

Example:

```js id="qa28"
const API_URL = "/users";

let loading = true;
```

---

# 20. Why is `var` avoided in modern JavaScript?

### Answer

`var` is avoided because:

* it ignores block scope
* allows redeclaration
* creates hoisting confusion
* can introduce bugs in large applications

---

# 21. Predict the output.

### Code

```js id="qa29"
{
  let a = 10;
}

console.log(a);
```

### Output

```text id="qa30"
ReferenceError
```

Explanation:
`let` is block scoped.

---

# 22. Predict the output.

### Code

```js id="qa31"
{
  var a = 10;
}

console.log(a);
```

### Output

```text id="qa32"
10
```

Explanation:
`var` ignores block scope.

---

# 23. Explain block scope.

### Answer

Block scope means variables declared using `let` and `const` can only be accessed inside the block `{}` where they are declared.

Example:

```js id="qa33"
{
  let num = 10;
  console.log(num);
}
```

---

# 24. Explain function scope.

### Answer

Function scope means variables declared inside a function are accessible only within that function.

Example:

```js id="qa34"
function test() {
  var a = 10;
  console.log(a);
}
```

---

# 25. Explain global scope.

### Answer

Global scope means variables declared outside functions and blocks can be accessed from anywhere in the program.

Example:

```js id="qa35"
let name = "Sai";

function test() {
  console.log(name);
}
```

---

# 26. Predict the output.

### Code

```js id="qa36"
let a = 100;

{
  let a = 200;
  console.log(a);
}

console.log(a);
```

### Output

```text id="qa37"
200
100
```

Explanation:
Both variables exist in different block scopes.

---

# 27. Predict the output.

### Code

```js id="qa38"
var a = 100;

{
  var a = 200;
}

console.log(a);
```

### Output

```text id="qa39"
200
```

Explanation:
`var` ignores block scope.

---

# 28. Which variables are block scoped?

### Answer

`let` and `const` are block scoped.

---

# 29. Difference between block scope and function scope.

### Answer

## Block Scope

Variables exist only inside `{}` blocks.

```js id="qa40"
{
  let a = 10;
}
```

---

## Function Scope

Variables exist only inside functions.

```js id="qa41"
function test() {
  var a = 10;
}
```

---

# 30. Why is scope important in large applications?

### Answer

Scope is important because it:

* prevents variable conflicts
* improves security
* avoids accidental modifications
* makes debugging easier
* improves maintainability of large applications
