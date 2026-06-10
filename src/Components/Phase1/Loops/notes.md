# JavaScript Loops Notes (for Loop & while Loop)

## Beginner → Interview → DSA Foundation

---

# What is a Loop?

A loop is a programming construct that allows us to execute a block of code repeatedly until a condition becomes false.

Without loops:

```js
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

With loops:

```js
for(let i = 1; i <= 5; i++){
  console.log(i);
}
```

Both produce:

```text
1
2
3
4
5
```

But loops are much more efficient.

---

# Why Do We Need Loops?

Loops help us:

* Avoid repetitive code
* Process arrays
* Process strings
* Generate patterns
* Solve DSA problems
* Automate repeated tasks

---

# What is Iteration?

Iteration means:

> One execution of a loop.

Example:

```js
for(let i = 1; i <= 3; i++){
  console.log(i);
}
```

Output:

```text
1
2
3
```

The loop runs **3 iterations**.

---

# for Loop

## Definition

A `for` loop is used when the number of iterations is known beforehand.

---

## Syntax

```js
for(initialization; condition; update){
   // code
}
```

---

## Example

```js
for(let i = 1; i <= 5; i++){
   console.log(i);
}
```

Output:

```text
1
2
3
4
5
```

---

# Understanding the 3 Parts

## 1. Initialization

```js
let i = 1;
```

Runs only once.

Creates the loop variable.

---

## 2. Condition

```js
i <= 5
```

Checked before every iteration.

If true → execute loop.

If false → stop loop.

---

## 3. Update

```js
i++
```

Runs after every iteration.

Updates the loop variable.

---

# Internal Execution

```js
for(let i = 1; i <= 3; i++){
   console.log(i);
}
```

Step-by-step:

```text
i = 1

1 <= 3 → true
Print 1

i++

i = 2

2 <= 3 → true
Print 2

i++

i = 3

3 <= 3 → true
Print 3

i++

i = 4

4 <= 3 → false

STOP
```

---

# Flow of a for Loop

```text
Initialization
      ↓
Condition
      ↓
True?
      ↓
Execute Code
      ↓
Update
      ↓
Condition Again
      ↓
False?
      ↓
STOP
```

---

# Common Examples

## Print 1 to 10

```js
for(let i = 1; i <= 10; i++){
   console.log(i);
}
```

---

## Print 10 to 1

```js
for(let i = 10; i >= 1; i--){
   console.log(i);
}
```

---

## Print Even Numbers

```js
for(let i = 2; i <= 10; i += 2){
   console.log(i);
}
```

Output:

```text
2
4
6
8
10
```

---

## Print Odd Numbers

```js
for(let i = 1; i <= 10; i += 2){
   console.log(i);
}
```

Output:

```text
1
3
5
7
9
```

---

# Sum of Numbers

```js
let sum = 0;

for(let i = 1; i <= 10; i++){
   sum += i;
}

console.log(sum);
```

Output:

```text
55
```

---

# Multiplication Table

```js
let num = 5;

for(let i = 1; i <= 10; i++){
   console.log(`${num} × ${i} = ${num * i}`);
}
```

---

# When Should We Use a for Loop?

Use a `for` loop when:

* Number of iterations is known
* Traversing arrays
* Pattern problems
* Counting problems

Example:

```js
for(let i = 1; i <= 100; i++)
```

We already know it runs 100 times.

---

# while Loop

## Definition

A `while` loop executes as long as a condition remains true.

---

## Syntax

```js
while(condition){
   // code
}
```

---

## Example

```js
let i = 1;

while(i <= 5){
   console.log(i);
   i++;
}
```

Output:

```text
1
2
3
4
5
```

---

# Internal Execution

```js
let i = 1;

while(i <= 3){
   console.log(i);
   i++;
}
```

Step-by-step:

```text
i = 1

1 <= 3 → true
Print 1

i++

i = 2

2 <= 3 → true
Print 2

i++

i = 3

3 <= 3 → true
Print 3

i++

i = 4

4 <= 3 → false

STOP
```

---

# Flow of a while Loop

```text
Condition
    ↓
True?
    ↓
Execute Code
    ↓
Update Variable
    ↓
Condition Again
    ↓
False?
    ↓
STOP
```

---

# Example: Print 1–10

```js
let i = 1;

while(i <= 10){
   console.log(i);
   i++;
}
```

---

# Example: Print 10–1

```js
let i = 10;

while(i >= 1){
   console.log(i);
   i--;
}
```

---

# Example: Sum 1–10

```js
let i = 1;
let sum = 0;

while(i <= 10){
   sum += i;
   i++;
}

console.log(sum);
```

Output:

```text
55
```

---

# Infinite Loops

## Example 1

```js
while(true){
   console.log("Hello");
}
```

Runs forever.

---

## Example 2

```js
let i = 1;

while(i <= 5){
   console.log(i);
}
```

Problem:

```js
i++;
```

is missing.

Result:

```text
Infinite Loop
```

---

# Difference Between for and while

| Feature        | for Loop         | while Loop         |
| -------------- | ---------------- | ------------------ |
| Initialization | Inside loop      | Outside loop       |
| Condition      | Inside loop      | Inside loop        |
| Update         | Inside loop      | Manual             |
| Best For       | Known iterations | Unknown iterations |
| Readability    | Cleaner          | Flexible           |

---

# Known vs Unknown Iterations

## Known Iterations → for

```js
for(let i = 1; i <= 100; i++)
```

We know:

```text
100 iterations
```

---

## Unknown Iterations → while

```js
while(password !== "admin123")
```

We don't know:

```text
How many attempts user needs
```

Could be:

```text
1 attempt
5 attempts
50 attempts
```

So `while` is better.

---

# DSA Thinking

Loops are used in:

* Arrays
* Strings
* Objects
* Searching
* Sorting
* Two Pointers
* Sliding Window
* Dynamic Programming
* Graphs
* Trees

Almost every DSA problem uses loops.

---
