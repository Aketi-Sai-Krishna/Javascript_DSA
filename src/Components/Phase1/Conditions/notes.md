# JavaScript Conditional Statements — Notes

# What Are Conditional Statements?

Conditional statements allow JavaScript to make decisions based on conditions.

Think of them like real life:

```text
If it is raining
    Take an umbrella
Else
    Go normally
```

Programming works the same way.

```js
let isRaining = true;

if(isRaining){
    console.log("Take Umbrella");
}
```

Output:

```text
Take Umbrella
```

---

# Why Do We Need Conditional Statements?

Without conditions:

```js
console.log("Access Granted");
```

The message always prints.

But what if the user is not logged in?

```js
let isLoggedIn = false;

if(isLoggedIn){
    console.log("Access Granted");
}
```

Now the program makes a decision.

---

# What Is a Condition?

A condition is an expression that evaluates to:

```text
true
or
false
```

Examples:

```js
10 > 5
```

Result:

```text
true
```

---

```js
10 < 5
```

Result:

```text
false
```

---

```js
5 === 5
```

Result:

```text
true
```

---

# Types of Conditional Statements

JavaScript provides:

```text
1. if

2. if...else

3. else if

4. Nested if

5. switch
```

---

# 1. if Statement

## Definition

Executes a block only when the condition is true.

---

## Syntax

```js
if(condition){
    // code
}
```

---

## Example

```js
let age = 20;

if(age >= 18){
    console.log("Adult");
}
```

Output:

```text
Adult
```

---

## Example

```js
let age = 15;

if(age >= 18){
    console.log("Adult");
}
```

Output:

```text
Nothing
```

---

# Internal Working

```text
Step 1:
Evaluate condition

Step 2:
If true → Execute block

Step 3:
If false → Skip block
```

---

# if Statement Flow

```text
Condition

    |
    |
 True?
 /    \
Yes    No
 |      |
Run   Skip
```

---

# Truthy and Falsy Values

JavaScript automatically converts values to boolean when used inside conditions.

---

# Falsy Values

Only these values are falsy:

```js
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

Example:

```js
if(0){
    console.log("Hello");
}
```

Output:

```text
Nothing
```

---

# Truthy Values

Everything else is truthy.

Examples:

```js
if("Sai"){
    console.log("Hello");
}
```

Output:

```text
Hello
```

---

```js
if(100){
    console.log("Hello");
}
```

Output:

```text
Hello
```

---

```js
if([]){
    console.log("Hello");
}
```

Output:

```text
Hello
```

---

```js
if({}){
    console.log("Hello");
}
```

Output:

```text
Hello
```

---

# 2. if...else Statement

## Definition

Executes one block if true and another block if false.

---

## Syntax

```js
if(condition){
    // true block
}
else{
    // false block
}
```

---

## Example

```js
let age = 16;

if(age >= 18){
    console.log("Adult");
}
else{
    console.log("Minor");
}
```

Output:

```text
Minor
```

---

## Flow

```text
Condition

    |
 True?
 /    \
Yes    No
 |      |
Run    Run
if     else
```

One block always executes.

---

# Real World Example

```js
let passwordCorrect = true;

if(passwordCorrect){
    console.log("Login Success");
}
else{
    console.log("Login Failed");
}
```

---

# 3. else if Statement

## Definition

Used when multiple conditions must be checked.

---

## Syntax

```js
if(condition1){

}
else if(condition2){

}
else if(condition3){

}
else{

}
```

---

## Example

```js
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

Output:

```text
B
```

---

# Internal Working

JavaScript checks conditions from top to bottom.

```text
Condition 1

If false

Condition 2

If false

Condition 3

If false

Else
```

The first true condition wins.

---

# Common Interview Mistake

Wrong:

```js
let marks = 95;

if(marks >= 50){
    console.log("Pass");
}
else if(marks >= 90){
    console.log("A");
}
```

Output:

```text
Pass
```

---

Correct:

```js
if(marks >= 90){
    console.log("A");
}
else if(marks >= 50){
    console.log("Pass");
}
```

Output:

```text
A
```

---

# Why?

Always place the most specific condition first.

---

# Nested if

## Definition

An if statement inside another if statement.

---

## Example

```js
let age = 20;
let hasLicense = true;

if(age >= 18){

    if(hasLicense){
        console.log("Can Drive");
    }

}
```

Output:

```text
Can Drive
```

---

# Nested if Flow

```text
Age >= 18 ?

        |
       Yes

Has License ?

       |
      Yes

Can Drive
```

---

# Real World Example

```js
let isLoggedIn = true;
let isAdmin = true;

if(isLoggedIn){

    if(isAdmin){
        console.log("Admin Panel");
    }

}
```

---

# Logical Operators Inside Conditions

---

## AND (&&)

Both conditions must be true.

```js
let age = 20;
let hasLicense = true;

if(age >= 18 && hasLicense){
    console.log("Can Drive");
}
```

Output:

```text
Can Drive
```

---

## OR (||)

At least one condition must be true.

```js
let isAdmin = false;
let isManager = true;

if(isAdmin || isManager){
    console.log("Access Granted");
}
```

Output:

```text
Access Granted
```

---

## NOT (!)

Reverses a boolean value.

```js
let isLoggedIn = false;

if(!isLoggedIn){
    console.log("Please Login");
}
```

Output:

```text
Please Login
```

---

# Ternary vs if...else

Normal:

```js
if(age >= 18){
    console.log("Adult");
}
else{
    console.log("Minor");
}
```

---

Ternary:

```js
console.log(
    age >= 18
        ? "Adult"
        : "Minor"
);
```

---

Use ternary for simple conditions.

Use if...else for complex logic.

---

# switch Statement

## Definition

Used when comparing one value against many fixed values.

---

## Why switch?

Without switch:

```js
if(day === 1){

}
else if(day === 2){

}
else if(day === 3){

}
```

Too much code.

---

## Syntax

```js
switch(expression){

    case value1:
        code;
        break;

    case value2:
        code;
        break;

    default:
        code;
}
```

---

# Example

```js
let day = 2;

switch(day){

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}
```

Output:

```text
Tuesday
```

---

# Internal Working

```text
Evaluate expression

Compare with case values

Match found?

Yes → Execute case

Break encountered?

Yes → Stop

No → Continue
```

---

# What Does break Do?

Stops execution.

---

Without break:

```js
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

```text
Monday
Tuesday
Wednesday
```

This is called:

```text
Fall Through
```

---

# With break

```js
case 1:
    console.log("Monday");
    break;
```

Output:

```text
Monday
```

---

# default Case

Runs when no case matches.

```js
switch(day){

    default:
        console.log("Invalid Day");
}
```

---

# Multiple Cases

```js
let fruit = "apple";

switch(fruit){

    case "apple":
    case "mango":
    case "banana":
        console.log("Fruit");
        break;

    default:
        console.log("Unknown");
}
```

Output:

```text
Fruit
```

---

# switch vs if...else

## Use if...else For

```text
Ranges
Comparisons
Logical operators
Complex conditions
```

Example:

```js
marks > 90
salary > 50000
age >= 18
```

---

## Use switch For

```text
Fixed values
Menus
Roles
Status codes
```

Example:

```js
role = "admin"
status = "pending"
day = 2
```

---

# Industry Examples

## User Roles

```js
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

## API Status Codes

```js
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

# DSA Foundation Thinking

Conditional statements are everywhere in algorithms.

---

## Maximum Element

```js
if(arr[i] > max){
    max = arr[i];
}
```

---

## Minimum Element

```js
if(arr[i] < min){
    min = arr[i];
}
```

---

## Binary Search

```js
if(target > arr[mid]){
    left = mid + 1;
}
else{
    right = mid - 1;
}
```

---

## Frequency Counting

```js
if(freq[num]){
    freq[num]++;
}
else{
    freq[num] = 1;
}
```

---

## Prime Number Check

```js
if(num % 2 === 0){
    console.log("Even");
}
```

---

# Interview Summary

| Statement | Purpose                                  |
| --------- | ---------------------------------------- |
| if        | Run code when condition is true          |
| if...else | Choose between two paths                 |
| else if   | Handle multiple conditions               |
| Nested if | Decision inside another decision         |
| switch    | Compare one value with many fixed values |

---

# Professional Rule

### Use `if...else`

When dealing with:

```text
Ranges
Comparisons
Multiple conditions
Complex business logic
```

### Use `switch`

When dealing with:

```text
Fixed values
Status codes
Roles
Menu systems
Enums
```

---

# What You Have Learned

✅ if

✅ if...else

✅ else if

✅ Nested if

✅ Truthy and Falsy Values

✅ Logical Operators in Conditions

✅ switch

✅ break

✅ default

✅ Fall Through

✅ Industry Examples

✅ DSA Applications

