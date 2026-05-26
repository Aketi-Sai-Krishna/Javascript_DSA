# JavaScript Variables Questions Roadmap

## Beginner → Industry → FAANG → DSA Thinking Level

These questions are organized in progression order so your thinking improves step by step.

Goal:

* Strong JS fundamentals
* Interview preparation
* Problem-solving mindset
* Foundation for DSA
* GitHub progress tracking

---

# LEVEL 1 — Beginner Basics

Focus:

* Understanding variables
* Syntax
* Reassignment
* Printing values

---

## 1

Create a variable called `name` and store your name.

---

## 2

Create variables for:

* age
* city
* country

Print all values.

---

## 3

Store two numbers and print their sum.

---

## 4

Create:

```js id="varq01"
let score = 10;
```

Change it to `20`.

Print final value.

---

## 5

Create:

```js id="varq02"
const country = "India";
```

Try changing it.

What happens?

---

## 6

Store:

* firstName
* lastName

Combine into:

```text id="varq03"
fullName
```

---

## 7

Create variables for:

* boolean
* string
* number

---

## 8

Use `typeof` on different variables.

---

## 9

Swap two variable values.

---

## 10

Store marks of 5 subjects and calculate total.

---

# LEVEL 2 — Understanding Variable Behavior

Focus:

* Scope basics
* Naming
* Memory thinking

---

## 11

Which variable names are valid?

```js id="varq04"
let firstName
let 1name
let user-name
let totalMarks
```

---

## 12

Convert these into camelCase:

* total marks
* login status
* user score

---

## 13

Difference between:

* declaration
* initialization
* assignment

---

## 14

Explain reassignment.

---

## 15

Predict output:

```js id="varq05"
let a = 10;

a = 20;

console.log(a);
```

---

## 16

Explain:

```text id="varq06"
variable → value in memory
```

---

## 17

What happens internally when JS sees:

```js id="varq07"
let age = 22;
```

---

## 18

Difference between:

* `var`
* `let`
* `const`

---

## 19

When should you use:

* `let`
* `const`

---

## 20

Why is `var` avoided in modern JavaScript?

---

# LEVEL 3 — Scope Questions

Focus:

* Block scope
* Function scope
* Global scope

VERY important for interviews.

---

## 21

Predict output:

```js id="varq08"
{
  let a = 10;
}

console.log(a);
```

---

## 22

Predict output:

```js id="varq09"
{
  var a = 10;
}

console.log(a);
```

---

## 23

Explain block scope.

---

## 24

Explain function scope.

---

## 25

Explain global scope.

---

## 26

Predict output:

```js id="varq10"
let a = 100;

{
  let a = 200;
  console.log(a);
}

console.log(a);
```

---

## 27

Predict output:

```js id="varq11"
var a = 100;

{
  var a = 200;
}

console.log(a);
```

---

## 28

Which are block scoped?

* var
* let
* const

---

## 29

Difference between:

* block scope
* function scope

---

## 30

Why is scope important in large applications?

---

# LEVEL 4 — Hoisting & TDZ

Focus:

* Memory creation phase
* Execution phase
* TDZ

VERY heavily asked in interviews.

---

## 31

Predict output:

```js id="varq12"
console.log(a);

var a = 10;
```

---

## 32

Predict output:

```js id="varq13"
console.log(a);

let a = 10;
```

---

## 33

Predict output:

```js id="varq14"
console.log(a);

const a = 10;
```

---

## 34

What is hoisting?

---

## 35

What is TDZ?

---

## 36

Why does `var` print `undefined`?

---

## 37

Explain memory creation phase.

---

## 38

Explain execution phase.

---

## 39

Difference between:

```text id="varq15"
undefined
```

and

```text id="varq16"
not defined
```

---

## 40

Explain:

```text id="varq17"
let and const are hoisted but inaccessible before initialization
```

---

# LEVEL 5 — Interview-Level Questions

Focus:

* Deep JS understanding
* Internal engine behavior
* Real interview questions

---

## 41

Difference between:

* redeclaration
* reassignment

---

## 42

Predict output:

```js id="varq18"
var a = 10;
var a = 20;

console.log(a);
```

---

## 43

Predict output:

```js id="varq19"
let a = 10;
let a = 20;
```

---

## 44

Why is this invalid?

```js id="varq20"
const a;
```

---

## 45

Predict output:

```js id="varq21"
let a;

console.log(a);
```

---

## 46

Predict output:

```js id="varq22"
console.log(a);
```

---

## 47

Explain:

* declaration
* initialization
* assignment
  with examples.

---

## 48

Why do modern React developers prefer `const`?

---

## 49

Explain:

* primitive storage
* reference storage

---

## 50

How are variables stored internally in memory?

---

# LEVEL 6 — Industry-Level JavaScript Questions

Focus:

* Real engineering thinking
* Debugging
* Closures foundation
* Async understanding

---

## 51

Predict output:

```js id="varq23"
for(var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
```

---

## 52

Fix previous question using `let`.

---

## 53

Why does `let` fix closure problems in loops?

---

## 54

Explain lexical environment.

---

## 55

Explain execution context.

---

## 56

Difference between:

* stack memory
* heap memory

---

## 57

Explain variable lookup mechanism.

---

## 58

What happens internally when variable is accessed?

---

## 59

Why are block-scoped variables safer?

---

## 60

Explain shadowing with variables.

---

# LEVEL 7 — FAANG-Level Conceptual Questions

Focus:

* Deep internal understanding
* Advanced JS fundamentals
* Engine behavior

---

## 61

Explain hoisting internally step-by-step.

---

## 62

Explain how JS engine stores variables.

---

## 63

What happens during compilation phase?

---

## 64

Difference between:

* compile phase
* execution phase

---

## 65

What is variable environment?

---

## 66

What is lexical scope chain?

---

## 67

Why was `let` introduced in ES6?

---

## 68

Explain Temporal Dead Zone deeply.

---

## 69

Can `const` objects mutate internally? Why?

---

## 70

Explain memory optimization related to variables.

---

# LEVEL 8 — DSA-Oriented Variable Thinking

These are NOT pure DSA yet,
but they train the brain for DSA.

Focus:

* state tracking
* counters
* memory updates
* loop thinking

---

## 71

Use variable to count numbers from 1–10.

---

## 72

Find sum of numbers from 1–100.

---

## 73

Use variable as counter inside loop.

---

## 74

Track maximum number using variable.

---

## 75

Track minimum number using variable.

---

## 76

Swap two variables without third variable.

---

## 77

Use variable to reverse a number.

---

## 78

Use variable to count digits in number.

---

## 79

Track frequency count manually using variables.

---

## 80

Use variables to generate Fibonacci sequence.

---

# LEVEL 9 — Real DSA Foundation Thinking

These questions start building algorithmic thinking.

---

## 81

Use variables to track current maximum.

---

## 82

Use variables to track current minimum.

---

## 83

Use variables for running sum.

---

## 84

Use variables for two-pointer thinking basics.

---

## 85

Use temporary variables for swapping logic.

---

## 86

Track window sum using variables.

---

## 87

Store intermediate results using variables.

---

## 88

Update state variables inside loops.

---

## 89

Optimize repeated calculations using variables.

---

## 90

Explain why variable tracking is important in algorithms.

