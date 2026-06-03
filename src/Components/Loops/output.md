# JavaScript `for` Loop & `while` Loop — Questions & Answers

## Part 1 (Questions 1–20)

---

## 1. What is a loop in JavaScript?

A loop is a programming construct that repeatedly executes a block of code until a specified condition becomes false.

---

## 2. Why do we use loops?

Loops help avoid repetitive code and automate repeated tasks efficiently.

---

## 3. What is iteration?

An iteration is one complete execution of a loop's code block.

---

## 4. What is the syntax of a `for` loop?

```js
for(initialization; condition; update){
  // code
}
```

---

## 5. What are the three parts of a `for` loop?

1. Initialization
2. Condition
3. Update

---

## 6. What is initialization in a `for` loop?

Initialization creates and sets the starting value of the loop variable.

Example:

```js
let i = 1;
```

---

## 7. What is the condition in a loop?

The condition determines whether the loop should continue running.

Example:

```js
i <= 5
```

---

## 8. What is the update expression in a loop?

The update expression changes the loop variable after each iteration.

Example:

```js
i++
```

---

## 9. What is the syntax of a `while` loop?

```js
while(condition){
  // code
}
```

---

## 10. What is the difference between `for` and `while`?

| for                                            | while                            |
| ---------------------------------------------- | -------------------------------- |
| Used when iterations are known                 | Used when iterations are unknown |
| Initialization, condition, update are together | Written separately               |
| Cleaner syntax                                 | More flexible                    |

---

## 11. Predict the output

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

---

## 12. Predict the output

```js
for(let i = 3; i >= 1; i--){
  console.log(i);
}
```

Output:

```text
3
2
1
```

---

## 13. Predict the output

```js
let i = 1;

while(i <= 3){
  console.log(i);
  i++;
}
```

Output:

```text
1
2
3
```

---

## 14. How many times will this loop run?

```js
for(let i = 1; i <= 5; i++){}
```

Answer:

```text
5 times
```

---

## 15. How many times will this loop run?

```js
for(let i = 0; i < 10; i++){}
```

Answer:

```text
10 times
```

---

## 16. What is the final value of `i`?

```js
for(let i = 1; i <= 5; i++){}
```

Answer:

```text
6
```

The loop stops when `i` becomes 6.

---

## 17. What is the final value of `i`?

```js
let i = 1;

while(i <= 5){
  i++;
}
```

Answer:

```text
6
```

---

## 18. Can a loop execute zero times?

Yes.

If the condition is false initially, the loop executes zero times.

---

## 19. Give an example where a loop executes zero times.

```js
for(let i = 10; i < 5; i++){
  console.log(i);
}
```

Output:

```text
Nothing
```

---

## 20. Why must the update step be written carefully?

Because an incorrect update can cause:

* Infinite loops
* Incorrect results
* Performance issues

Example:

```js
while(i <= 5){
  console.log(i);
}
```

Missing:

```js
i++;
```

causes an infinite loop.

---

# JavaScript `for` Loop & `while` Loop — Questions & Answers

## Part 2 (Questions 21–50)

---

## 21. Write a loop to print numbers from 1 to 10.

```js
for(let i = 1; i <= 10; i++){
  console.log(i);
}
```

---

## 22. Write a loop to print numbers from 10 to 1.

```js
for(let i = 10; i >= 1; i--){
  console.log(i);
}
```

---

## 23. Print all even numbers between 1 and 20.

```js
for(let i = 2; i <= 20; i += 2){
  console.log(i);
}
```

Output:

```text
2 4 6 8 10 12 14 16 18 20
```

---

## 24. Print all odd numbers between 1 and 20.

```js
for(let i = 1; i <= 20; i += 2){
  console.log(i);
}
```

Output:

```text
1 3 5 7 9 11 13 15 17 19
```

---

## 25. Print multiples of 5 from 1 to 50.

```js
for(let i = 5; i <= 50; i += 5){
  console.log(i);
}
```

---

## 26. Find the sum of numbers from 1 to 10.

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

## 27. Find the sum of even numbers from 1 to 20.

```js
let sum = 0;

for(let i = 2; i <= 20; i += 2){
  sum += i;
}

console.log(sum);
```

Output:

```text
110
```

---

## 28. Print the multiplication table of 7.

```js
let num = 7;

for(let i = 1; i <= 10; i++){
  console.log(`${num} × ${i} = ${num * i}`);
}
```

---

## 29. Print squares of numbers from 1 to 10.

```js
for(let i = 1; i <= 10; i++){
  console.log(i * i);
}
```

Output:

```text
1 4 9 16 25 36 49 64 81 100
```

---

## 30. Print cubes of numbers from 1 to 10.

```js
for(let i = 1; i <= 10; i++){
  console.log(i * i * i);
}
```

Output:

```text
1 8 27 64 125 216 343 512 729 1000
```

---

## 31. What causes an infinite loop?

An infinite loop occurs when the loop condition never becomes false.

Example:

```js
while(true){
  console.log("Running...");
}
```

---

## 32. Predict the output.

```js
let i = 1;

while(i <= 5){
  console.log(i);
}
```

Output:

```text
1
1
1
1
...
```

(Infinite Loop)

Reason: `i++` is missing.

---

## 33. Why is the above loop dangerous?

Because it:

* Never stops
* Consumes CPU resources
* May freeze the browser or application

---

## 34. Predict the output.

```js
for(let i = 1; i <= 5; i += 2){
  console.log(i);
}
```

Output:

```text
1
3
5
```

---

## 35. Predict the output.

```js
for(let i = 10; i > 0; i -= 3){
  console.log(i);
}
```

Output:

```text
10
7
4
1
```

---

## 36. What happens if the condition is always true?

The loop runs forever, creating an infinite loop.

Example:

```js
while(true){}
```

---

## 37. What happens if the condition is always false?

The loop executes zero times.

Example:

```js
while(false){
  console.log("Hello");
}
```

Output:

```text
Nothing
```

---

## 38. Can a `for` loop be written without initialization?

Yes.

Example:

```js
let i = 1;

for(; i <= 5; i++){
  console.log(i);
}
```

---

## 39. Can a `for` loop be written without update?

Yes.

Example:

```js
for(let i = 1; i <= 5;){
  console.log(i);
  i++;
}
```

---

## 40. Can a `for` loop be written without condition?

Yes.

Example:

```js
for(;;){
  console.log("Infinite Loop");
}
```

This creates an infinite loop.

---

## 41. When should you use a `for` loop?

Use a `for` loop when the number of iterations is known beforehand.

Example:

```js
for(let i = 1; i <= 100; i++)
```

---

## 42. When should you use a `while` loop?

Use a `while` loop when the number of iterations is unknown and depends on a condition.

Example:

```js
while(password !== "admin123")
```

---

## 43. What does "known iterations" mean?

It means we already know how many times the loop should run.

Example:

```js
for(let i = 1; i <= 10; i++)
```

Runs exactly 10 times.

---

## 44. What does "unknown iterations" mean?

It means we do not know beforehand how many times the loop will run.

Example:

```js
while(userInput !== "exit")
```

The number of iterations depends on user input.

---

## 45. Why are `for` loops common in DSA?

Because many DSA problems involve:

* Traversing arrays
* Processing strings
* Counting elements
* Iterating a known number of times

---

## 46. Why are `while` loops common in searching algorithms?

Because the number of iterations often depends on a condition.

Example:

```js
while(left <= right)
```

Used in Binary Search.

---

## 47. Can every `for` loop be converted into a `while` loop?

Yes.

Example:

### for Loop

```js
for(let i = 1; i <= 5; i++){
  console.log(i);
}
```

### while Loop

```js
let i = 1;

while(i <= 5){
  console.log(i);
  i++;
}
```

---

## 48. Can every `while` loop be converted into a `for` loop?

Yes, although readability may decrease.

Example:

### while Loop

```js
let i = 1;

while(i <= 5){
  console.log(i);
  i++;
}
```

### for Loop

```js
for(let i = 1; i <= 5; i++){
  console.log(i);
}
```

---

## 49. Which loop is generally more readable?

The `for` loop is generally more readable when:

* Initialization
* Condition
* Update

can be written together.

---

## 50. Which loop gives more flexibility?

The `while` loop gives more flexibility because:

* Condition logic can be more dynamic
* Iteration count can be unknown
* Common in real-world scenarios such as searching and user input validation

---

# JavaScript `for` Loop & `while` Loop — Questions & Answers

## Part 3 (Questions 51–80)

---

## 51. What happens internally when a `for` loop starts?

1. Initialization executes once.
2. Condition is checked.
3. If condition is `true`, loop body executes.
4. Update expression runs.
5. Condition is checked again.
6. Process repeats until condition becomes `false`.

---

## 52. In what order are these executed?

```js
for(initialization; condition; update)
```

Answer:

```text
Initialization
↓
Condition
↓
Loop Body
↓
Update
↓
Condition
↓
Loop Body
↓
Update
...
```

---

## 53. How many times does initialization execute?

Only **once**.

Example:

```js
for(let i = 1; i <= 5; i++)
```

`let i = 1` runs only one time.

---

## 54. How many times is the condition checked?

The condition is checked:

```text
(Number of Iterations + 1)
```

Example:

```js
for(let i = 1; i <= 3; i++)
```

Condition checks:

```text
1 <= 3 ✓
2 <= 3 ✓
3 <= 3 ✓
4 <= 3 ✗
```

Total = 4 checks.

---

## 55. How many times is the update expression executed?

Equal to the number of successful iterations.

Example:

```js
for(let i = 1; i <= 3; i++)
```

`i++` executes:

```text
3 times
```

---

## 56. Explain the execution flow of a `for` loop step-by-step.

Example:

```js
for(let i = 1; i <= 3; i++){
  console.log(i);
}
```

Flow:

```text
Initialize i = 1
Check condition → true
Print 1
Update i++

Check condition → true
Print 2
Update i++

Check condition → true
Print 3
Update i++

Check condition → false
Stop
```

---

## 57. Explain the execution flow of a `while` loop step-by-step.

Example:

```js
let i = 1;

while(i <= 3){
  console.log(i);
  i++;
}
```

Flow:

```text
Check condition
Print value
Update value
Check condition again
Repeat
Stop when false
```

---

## 58. What happens when the loop condition becomes false?

The loop immediately terminates and execution continues with the next statement after the loop.

---

## 59. What role does the execution context play in loops?

The execution context manages:

* Variable storage
* Memory allocation
* Code execution

Loop variables are stored and updated inside the execution context during each iteration.

---

## 60. Does a loop create a new execution context every iteration?

No.

A normal loop itself does not create a new execution context.

Only functions create new execution contexts.

Example:

```js
for(let i = 1; i <= 5; i++){
  console.log(i);
}
```

Uses the same execution context.

---

# FAANG-Level Concepts

---

## 61. Why are loops considered the foundation of programming?

Because most algorithms require repeating operations on data.

Examples:

* Arrays
* Strings
* Searching
* Sorting
* Trees
* Graphs

---

## 62. How do loops help solve large problems efficiently?

Instead of writing repetitive code manually, loops automate repeated operations and reduce code complexity.

---

## 63. Why is loop optimization important?

Optimized loops:

* Run faster
* Use less memory
* Improve application performance
* Scale better for large datasets

---

## 64. What is the relationship between loops and time complexity?

The number of loop iterations directly affects an algorithm's running time.

More iterations generally mean higher time complexity.

---

## 65. What is the time complexity of:

```js
for(let i = 0; i < n; i++){}
```

Answer:

```text
O(n)
```

Because the loop runs `n` times.

---

## 66. What is the time complexity of:

```js
while(i < n){}
```

Answer:

```text
O(n)
```

Assuming `i` increases by one each iteration.

---

## 67. Why should unnecessary iterations be avoided?

Because they:

* Waste CPU time
* Increase execution time
* Reduce performance
* Increase algorithm complexity

---

## 68. How can loops affect application performance?

Poorly designed loops can:

* Slow applications
* Cause browser freezes
* Consume excessive memory
* Increase server load

---

## 69. Why do interviewers ask so many loop-related questions?

Because loops test:

* Logic building
* Problem-solving
* Algorithmic thinking
* DSA readiness
* Debugging skills

---

## 70. Explain how loops are used in real-world software applications.

Loops are used for:

* Processing API data
* Rendering UI lists
* Database operations
* File processing
* Data analysis
* Search algorithms

---

# DSA Foundation Questions

---

## 71. How are loops used in array traversal?

Loops visit each element one by one.

Example:

```js
let arr = [10, 20, 30];

for(let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}
```

---

## 72. How are loops used in string traversal?

Loops process each character individually.

Example:

```js
let str = "Hello";

for(let i = 0; i < str.length; i++){
  console.log(str[i]);
}
```

---

## 73. How are loops used in linear search?

A loop checks elements one by one until the target is found.

---

## 74. How are loops used in finding maximum elements?

The loop compares current elements with the current maximum value and updates it when a larger value is found.

---

## 75. How are loops used in finding minimum elements?

The loop compares current elements with the current minimum value and updates it when a smaller value is found.

---

## 76. How are loops used in counting frequencies?

Loops count how many times each value appears in a dataset.

Example:

```js
let count = 0;

for(let i = 0; i < arr.length; i++){
  if(arr[i] === target){
    count++;
  }
}
```

---

## 77. How are loops used in sum accumulation problems?

Loops continuously add values to a running total.

Example:

```js
let sum = 0;

for(let i = 1; i <= 10; i++){
  sum += i;
}
```

---

## 78. How are loops used in pattern problems?

Nested loops generate rows and columns.

Example:

```js
for(let i = 1; i <= 3; i++){
  console.log("*".repeat(i));
}
```

Output:

```text
*
**
***
```

---

## 79. How are loops used in matrix traversal?

Nested loops traverse rows and columns.

Example:

```js
for(let row = 0; row < matrix.length; row++){
  for(let col = 0; col < matrix[row].length; col++){
    console.log(matrix[row][col]);
  }
}
```

---

## 80. Why are loops considered one of the most important concepts before learning DSA?

Because almost every DSA algorithm relies on:

* Iteration
* Traversal
* Searching
* Counting
* Accumulation
* Comparison
* Pattern generation

Without mastering loops, DSA becomes significantly harder.

---


