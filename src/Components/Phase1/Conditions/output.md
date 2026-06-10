# JavaScript Conditional Statements — Questions & Answers

## Part 1 (Questions 1–20)

---

## 1. What is a conditional statement in JavaScript?

A conditional statement allows a program to make decisions and execute different blocks of code based on whether a condition evaluates to `true` or `false`.

Example:

```js
let age = 20;

if (age >= 18) {
  console.log("Adult");
}
```

---

## 2. Why do we need conditional statements?

Conditional statements help programs respond differently to different situations instead of executing the same code every time.

Example:

```js
if (isLoggedIn) {
  console.log("Welcome");
}
```

---

## 3. What is a condition?

A condition is an expression that evaluates to either:

```text
true
false
```

Example:

```js
10 > 5
```

Output:

```text
true
```

---

## 4. What are the possible outputs of a condition?

A condition can only return:

```text
true
false
```

Example:

```js
5 === 5 // true
5 > 10  // false
```

---

## 5. Write a program that prints "Adult" if age is greater than or equal to 18.

```js
let age = 20;

if (age >= 18) {
  console.log("Adult");
}
```

---

## 6. Write a program that checks whether a number is positive.

```js
let num = 10;

if (num > 0) {
  console.log("Positive");
}
```

---

## 7. Write a program that checks whether a number is even.

```js
let num = 8;

if (num % 2 === 0) {
  console.log("Even");
}
```

---

## 8. What is the syntax of an `if` statement?

```js
if (condition) {
  // code block
}
```

The code block executes only when the condition is `true`.

---

## 9. Predict the output

```js
if (true) {
  console.log("Hello");
}
```

### Output

```text
Hello
```

---

## 10. Predict the output

```js
if (false) {
  console.log("Hello");
}
```

### Output

```text
No Output
```

---

## 11. What is an `if...else` statement?

An `if...else` statement executes one block when the condition is true and another block when the condition is false.

Example:

```js
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

---

## 12. Write a program that checks whether a number is positive or negative.

```js
let num = -5;

if (num > 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}
```

---

## 13. Write a program that checks whether a person can vote.

```js
let age = 20;

if (age >= 18) {
  console.log("Eligible to Vote");
} else {
  console.log("Not Eligible");
}
```

---

## 14. Predict the output

```js
let age = 16;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

### Output

```text
Minor
```

---

## 15. What happens when the condition is false?

The `if` block is skipped.

If an `else` block exists, it executes.

Example:

```js
if (false) {
  console.log("A");
} else {
  console.log("B");
}
```

Output:

```text
B
```

---

## 16. Can both `if` and `else` execute together?

No.

Only one block executes.

Example:

```js
if (true) {
  console.log("A");
} else {
  console.log("B");
}
```

Output:

```text
A
```

---

## 17. Write a program that checks whether a number is divisible by 5.

```js
let num = 25;

if (num % 5 === 0) {
  console.log("Divisible by 5");
}
```

---

## 18. Write a program that checks whether a student passed or failed.

```js
let marks = 40;

if (marks >= 35) {
  console.log("Pass");
} else {
  console.log("Fail");
}
```

---

## 19. What is the difference between `if` and `if...else`?

| if                                        | if...else                         |
| ----------------------------------------- | --------------------------------- |
| Executes code only when condition is true | Handles both true and false cases |
| May execute nothing                       | Always executes one block         |
| Used for single decision                  | Used for two-way decision         |

---

## 20. When should you use `if...else`?

Use `if...else` when your program needs to choose between two possible outcomes.

Example:

```js
if (isLoggedIn) {
  console.log("Dashboard");
} else {
  console.log("Login Page");
}
```

---
# JavaScript Conditional Statements
---

## 21. What are truthy values?

Truthy values are values that JavaScript converts to `true` when used in a condition.

Examples:

```js id="cs21"
"Hello"
100
[]
{}
true
```

---

## 22. What are falsy values?

Falsy values are values that JavaScript converts to `false` when used in a condition.

---

## 23. List all falsy values in JavaScript.

```js id="cs23"
false
0
-0
0n
""
null
undefined
NaN
```

---

## 24. Predict the output

```js id="cs24"
if(0){
  console.log("Hello");
}
```

### Output

```text id="cs24o"
No Output
```

---

## 25. Predict the output

```js id="cs25"
if(100){
  console.log("Hello");
}
```

### Output

```text id="cs25o"
Hello
```

---

## 26. Predict the output

```js id="cs26"
if(""){
  console.log("Hello");
}
```

### Output

```text id="cs26o"
No Output
```

---

## 27. Predict the output

```js id="cs27"
if("Sai"){
  console.log("Hello");
}
```

### Output

```text id="cs27o"
Hello
```

---

## 28. Predict the output

```js id="cs28"
if([]){
  console.log("Hello");
}
```

### Output

```text id="cs28o"
Hello
```

---

## 29. Predict the output

```js id="cs29"
if({}){
  console.log("Hello");
}
```

### Output

```text id="cs29o"
Hello
```

---

## 30. Why are arrays and objects truthy?

Because arrays and objects are reference types, and every valid object reference is considered truthy by JavaScript.

---

## 31. What is an `else if` statement?

An `else if` statement is used to check multiple conditions in sequence.

Example:

```js id="cs31"
if(marks >= 90){
  console.log("A");
}
else if(marks >= 75){
  console.log("B");
}
```

---

## 32. Why do we use `else if`?

To handle multiple possible outcomes based on different conditions.

---

## 33. Write a grading system using `else if`.

```js id="cs33"
let marks = 85;

if(marks >= 90){
  console.log("A");
}
else if(marks >= 75){
  console.log("B");
}
else if(marks >= 50){
  console.log("C");
}
else{
  console.log("Fail");
}
```

---

## 34. Predict the output

```js id="cs34"
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

### Output

```text id="cs34o"
B
```

---

## 35. How does JavaScript evaluate `else if` conditions?

JavaScript evaluates conditions from top to bottom and executes the first condition that becomes `true`.

---

## 36. What happens after the first true condition is found?

JavaScript stops checking the remaining conditions and executes the matching block.

---

## 37. Predict the output

```js id="cs37"
let marks = 95;

if(marks >= 50){
  console.log("Pass");
}
else if(marks >= 90){
  console.log("A");
}
```

### Output

```text id="cs37o"
Pass
```

---

## 38. Why is Question 37 a common interview mistake?

Because the general condition (`marks >= 50`) appears before the specific condition (`marks >= 90`).

The first true condition wins.

---

## 39. Why should specific conditions come before general conditions?

To ensure more precise conditions are checked first and not skipped.

Correct:

```js id="cs39"
if(marks >= 90){
  console.log("A");
}
else if(marks >= 50){
  console.log("Pass");
}
```

---

## 40. When should you use `else if`?

When there are more than two possible outcomes.

---

## 41. What is a nested `if` statement?

A nested `if` is an `if` statement placed inside another `if` statement.

---

## 42. Write a program that checks:

* Age ≥ 18
* Has driving license

```js id="cs42"
let age = 20;
let hasLicense = true;

if(age >= 18){
  if(hasLicense){
    console.log("Can Drive");
  }
}
```

---

## 43. Predict the output

```js id="cs43"
let age = 20;
let hasLicense = true;

if(age >= 18){
  if(hasLicense){
    console.log("Can Drive");
  }
}
```

### Output

```text id="cs43o"
Can Drive
```

---

## 44. What are the disadvantages of deeply nested `if` statements?

* Harder to read
* Harder to debug
* Harder to maintain
* Increases code complexity

---

## 45. How can logical operators reduce nesting?

Instead of:

```js id="cs45a"
if(age >= 18){
  if(hasLicense){
    console.log("Can Drive");
  }
}
```

Use:

```js id="cs45b"
if(age >= 18 && hasLicense){
  console.log("Can Drive");
}
```

---

## 46. Convert a nested `if` into a single condition using `&&`.

```js id="cs46"
if(isLoggedIn && isAdmin){
  console.log("Admin Access");
}
```

---

## 47. When should nested `if` be used?

When the second condition should only be checked after the first condition is satisfied.

---

## 48. What is the readability problem with nested `if` statements?

Too many nested levels make code difficult to understand and maintain.

---

## 49. What is the "Arrow Code" problem?

Arrow Code refers to excessive nesting that creates a pyramid-shaped structure:

```js id="cs49"
if(a){
  if(b){
    if(c){
      if(d){
        // code
      }
    }
  }
}
```

This reduces readability.

---

## 50. How do professional developers avoid excessive nesting?

By using:

* Logical operators (`&&`, `||`)
* Early returns
* Helper functions
* Guard clauses
* Better code organization

Example:

```js id="cs50"
if(!isLoggedIn){
  return;
}

console.log("Dashboard");
```

---

# JavaScript Conditional Statements — Questions & Answers

## Part 3 (Questions 51–90)

---

# switch Statement

## 51. What is a switch statement?

A `switch` statement is a control flow statement used to compare a single value against multiple possible values and execute the matching block of code.

Example:

```js id="cs51"
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

## 52. Why was switch introduced?

`switch` was introduced to simplify code when comparing one variable against many fixed values.

Instead of:

```js id="cs52a"
if(day === 1){
}
else if(day === 2){
}
else if(day === 3){
}
```

We can use:

```js id="cs52b"
switch(day){
}
```

which is cleaner and easier to read.

---

## 53. What is the syntax of a switch statement?

```js id="cs53"
switch(expression){

  case value1:
    // code
    break;

  case value2:
    // code
    break;

  default:
    // code
}
```

---

## 54. What does the expression inside switch represent?

The expression is the value that JavaScript compares against each `case`.

Example:

```js id="cs54"
let role = "admin";

switch(role){
}
```

Here, `role` is the expression.

---

## 55. What is a case?

A `case` represents one possible value that the expression can match.

Example:

```js id="cs55"
case "admin":
  console.log("Full Access");
```

---

## 56. What is the purpose of break?

`break` stops the execution of the switch statement after a matching case is executed.

Without `break`, JavaScript continues executing the next cases.

---

## 57. Predict the output

```js id="cs57"
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

### Output

```text id="cs57o"
Tuesday
```

---

## 58. What happens if break is omitted?

JavaScript continues executing the following cases until it finds a `break` or reaches the end of the switch block.

---

## 59. What is fall-through in switch?

Fall-through occurs when a matching case executes and, because there is no `break`, execution continues into subsequent cases.

Example:

```js id="cs59"
let day = 1;

switch(day){
  case 1:
    console.log("Monday");

  case 2:
    console.log("Tuesday");

  case 3:
    console.log("Wednesday");
}
```

Output:

```text id="cs59o"
Monday
Tuesday
Wednesday
```

---

## 60. What is the purpose of default?

The `default` case executes when no case matches the expression.

Example:

```js id="cs60"
switch(day){
  default:
    console.log("Invalid Day");
}
```

---

# Industry-Level Questions

## 61. When should you use switch instead of if...else?

Use `switch` when comparing a single value against multiple fixed values.

Example:

```js id="cs61"
role = "admin"
role = "user"
role = "guest"
```

---

## 62. When should you use if...else instead of switch?

Use `if...else` when working with:

* Ranges
* Comparisons
* Logical operators
* Complex conditions

Example:

```js id="cs62"
if(marks >= 90)
```

---

## 63. Can switch evaluate ranges?

No.

Wrong:

```js id="cs63a"
switch(marks){
  case marks >= 90:
}
```

Use `if...else` for ranges.

---

## 64. Why is switch unsuitable for complex conditions?

Because switch compares exact values and cannot naturally handle logical expressions or ranges.

---

## 65. How is switch used in role-based systems?

Example:

```js id="cs65"
switch(role){

  case "admin":
    console.log("Full Access");
    break;

  case "user":
    console.log("Limited Access");
    break;

  default:
    console.log("No Access");
}
```

---

## 66. How is switch used for API status codes?

```js id="cs66"
switch(status){

  case 200:
    console.log("Success");
    break;

  case 404:
    console.log("Not Found");
    break;

  case 500:
    console.log("Server Error");
    break;
}
```

---

## 67. How do React applications use conditional rendering?

React uses conditions to decide which UI elements should be displayed.

Example:

```jsx id="cs67"
{
  isLoggedIn
    ? <Dashboard />
    : <Login />
}
```

---

## 68. What is conditional rendering?

Conditional rendering is the process of displaying different UI elements based on conditions.

---

## 69. How would you show a loading spinner conditionally?

```jsx id="cs69"
if(isLoading){
  return <Spinner />;
}

return <Dashboard />;
```

---

## 70. How would you show different UI for Admin and User roles?

```jsx id="cs70"
if(role === "admin"){
  return <AdminPanel />;
}

return <UserPanel />;
```

---

# FAANG-Level Questions

## 71. How does JavaScript internally evaluate an if statement?

Steps:

```text id="cs71"
1. Evaluate condition
2. Convert result to boolean
3. If true → execute block
4. If false → skip block
```

---

## 72. How does JavaScript internally evaluate a switch statement?

Steps:

```text id="cs72"
1. Evaluate expression
2. Compare with each case
3. Find first match
4. Execute matching case
5. Stop at break
```

---

## 73. What is short-circuit evaluation?

Short-circuit evaluation occurs when JavaScript stops evaluating an expression as soon as the result is known.

Example:

```js id="cs73"
true || anything
```

JavaScript immediately returns `true`.

---

## 74. How do logical operators work inside conditions?

### AND

```js id="cs74a"
true && true
```

returns:

```text id="cs74ao"
true
```

### OR

```js id="cs74b"
true || false
```

returns:

```text id="cs74bo"
true
```

### NOT

```js id="cs74c"
!true
```

returns:

```text id="cs74co"
false
```

---

## 75. What is control flow?

Control flow is the order in which JavaScript executes statements and decisions in a program.

---

## 76. Explain execution flow in if → else if → else.

JavaScript checks conditions from top to bottom.

The first true condition executes.

If none are true, the `else` block executes.

---

## 77. Why is condition ordering important?

Because JavaScript stops at the first true condition.

Specific conditions should appear before general conditions.

---

## 78. What is defensive programming using conditions?

Defensive programming uses conditions to validate inputs and prevent errors before they occur.

Example:

```js id="cs78"
if(user){
  console.log(user.name);
}
```

---

## 79. How do conditions improve application security?

Conditions can

---

# JavaScript Conditional Statements — Questions & Answers

## Part 4 (Questions 80–90)

---

## 80. How do conditions help prevent runtime errors?

Conditions allow developers to verify values before accessing or using them. This prevents common runtime errors such as accessing properties of `undefined` or `null`.

Example:

```js
if(user){
  console.log(user.name);
}
```

Without the condition, JavaScript may throw an error if `user` is `undefined`.

---

# DSA-Oriented Questions

## 81. How are conditions used in Binary Search?

Conditions determine whether to search the left half or the right half of the array.

Example:

```js
if(target < arr[mid]){
  right = mid - 1;
}
else{
  left = mid + 1;
}
```

Conditions are the core decision-making mechanism in Binary Search.

---

## 82. How are conditions used while finding the maximum element?

Conditions compare the current element with the current maximum value.

Example:

```js
if(arr[i] > max){
  max = arr[i];
}
```

This ensures that the largest element is tracked throughout the iteration.

---

## 83. How are conditions used while finding the minimum element?

Conditions compare the current element with the current minimum value.

Example:

```js
if(arr[i] < min){
  min = arr[i];
}
```

This updates the minimum value whenever a smaller element is found.

---

## 84. How are conditions used in frequency counting?

Conditions check whether an element already exists in the frequency object.

Example:

```js
if(freq[num]){
  freq[num]++;
}
else{
  freq[num] = 1;
}
```

This allows counting occurrences of elements efficiently.

---

## 85. How are conditions used in Two Pointer algorithms?

Conditions decide which pointer should move.

Example:

```js
if(sum > target){
  right--;
}
else{
  left++;
}
```

Pointer movement is entirely based on conditional decisions.

---

## 86. How are conditions used in Sliding Window algorithms?

Conditions determine when to expand or shrink the window.

Example:

```js
if(windowSum > target){
  left++;
}
```

This helps maintain the required window constraints.

---

## 87. How are conditions used in sorting algorithms?

Conditions compare elements to determine whether they should be swapped.

Example (Bubble Sort):

```js
if(arr[j] > arr[j + 1]){
  [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
}
```

Sorting algorithms rely heavily on comparisons and conditions.

---

## 88. How are conditions used in graph traversal algorithms?

Conditions check whether a node has already been visited.

Example:

```js
if(!visited[node]){
  dfs(node);
}
```

This prevents infinite loops and repeated processing.

---

## 89. Why is decision-making important in algorithms?

Algorithms solve problems by making decisions at every step.

Examples:

* Choosing the larger value
* Selecting the next node
* Updating a maximum value
* Moving pointers
* Comparing elements

Without conditions, algorithms cannot make intelligent choices.

---

## 90. Explain why conditional statements are considered one of the most fundamental concepts in programming and DSA.

Conditional statements are fundamental because they allow programs to make decisions.

They are used in:

* Searching algorithms
* Sorting algorithms
* Dynamic Programming
* Graph Algorithms
* Tree Traversals
* Binary Search
* Sliding Window
* Two Pointers
* Real-world applications
* Authentication systems
* Form validation
* API handling

Without conditional statements, programs would execute the same instructions every time and would not be able to adapt to different inputs or situations.

---







