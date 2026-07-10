# 📘 JavaScript Notes — Chapter 2 (Part 1)

# `call()` and `apply()`

---

# Table of Contents

1. Introduction
2. Explain Like a 10-Year-Old
3. Why Do We Need `call()` and `apply()`?
4. What is Explicit Binding?
5. `call()`
6. `apply()`
7. `call()` vs `apply()`
8. JavaScript Engine Flow
9. Real-Life Examples
10. Common Mistakes
11. Summary

---

# 1. Introduction

In JavaScript, every **regular function** has three built-in methods:

* `call()`
* `apply()`
* `bind()`

These methods allow us to **manually decide the value of `this`** when invoking a function.

This process is called **Explicit Binding**.

---

# 2. Explain Like a 10-Year-Old

Imagine a teacher has one whiteboard marker.

Today:

```text
Teacher → Classroom A
```

Tomorrow:

```text
Teacher → Classroom B
```

The marker is the same.

Only the classroom changes.

Similarly,

A function is like the marker.

Different objects can use the same function.

Instead of creating multiple functions, JavaScript lets us reuse one function with different objects.

That's exactly what `call()` and `apply()` do.

---

# 3. Why Do We Need `call()` and `apply()`?

Without `call()`:

```javascript
const person1 = {
    name: "Sai",

    greet() {
        console.log(this.name);
    }
};

const person2 = {
    name: "Krishna",

    greet() {
        console.log(this.name);
    }
};
```

The same function is written twice.

This violates the **DRY Principle (Don't Repeat Yourself).**

---

Instead,

```javascript
function greet() {
    console.log(this.name);
}
```

can be shared by multiple objects.

```javascript
const person1 = {
    name: "Sai"
};

const person2 = {
    name: "Krishna"
};

greet.call(person1);

greet.call(person2);
```

Output

```text
Sai
Krishna
```

One function.

Multiple objects.

---

# 4. What is Explicit Binding?

Normally,

JavaScript decides the value of `this`.

```javascript
person.greet();
```

Here,

```text
this = person
```

This is called **Implicit Binding**.

Sometimes,

we want to manually choose the value of `this`.

```javascript
greet.call(person);
```

Now,

JavaScript doesn't decide.

**We decide.**

This is called **Explicit Binding**.

---

# 5. `call()`

## Professional Definition

`call()` invokes a function immediately while explicitly setting the value of `this`.

---

## Syntax

```javascript
functionName.call(thisArg, arg1, arg2, arg3);
```

Where:

* `thisArg` → Object that should become `this`
* Remaining values → Function arguments

---

## Example 1

```javascript
function greet() {
    console.log(this.name);
}

const person = {
    name: "Sai"
};

greet.call(person);
```

Output

```text
Sai
```

---

## Explain Like a 10-Year-Old

Imagine:

```text
Function → Employee
```

Today,

the employee works in

```text
Company A
```

Tomorrow,

the same employee works in

```text
Company B
```

The employee didn't change.

Only the company changed.

Similarly,

```javascript
greet.call(person);
```

means

```text
Run greet()

using person as this.
```

---

# Engine Flow

```text
GEC
↓

Create greet Function Object
↓

Create person Object
↓

greet.call(person)
↓

Create Function Execution Context
↓

this = person
↓

Execute Function
↓

Output

Sai
```

---

## Example 2

```javascript
function introduce(age, city) {
    console.log(this.name, age, city);
}

const person = {
    name: "Sai"
};

introduce.call(person, 24, "Hyderabad");
```

Output

```text
Sai 24 Hyderabad
```

---

### Internal Working

```text
call()

↓

this = person

↓

age = 24

↓

city = Hyderabad

↓

Execute
```

---

# 6. `apply()`

## Professional Definition

`apply()` works exactly like `call()`, but the function arguments are passed as an **array**.

---

## Syntax

```javascript
functionName.apply(thisArg, [arg1, arg2, arg3]);
```

---

## Example

```javascript
function introduce(age, city) {
    console.log(this.name, age, city);
}

const person = {
    name: "Sai"
};

introduce.apply(person, [24, "Hyderabad"]);
```

Output

```text
Sai 24 Hyderabad
```

---

## Explain Like a 10-Year-Old

Imagine your teacher asks for books.

### `call()`

You hand over books one by one.

```text
Math

English

Science
```

---

### `apply()`

You put all books inside one bag.

```text
[
Math,
English,
Science
]
```

The teacher still receives the same books.

Only the delivery method changed.

---

# Engine Flow

```text
GEC
↓

Create introduce Function

↓

Create person Object

↓

apply(person,[24,"Hyderabad"])

↓

Create FEC

↓

this = person

↓

Spread array

↓

age = 24

↓

city = Hyderabad

↓

Execute
```

---

# 7. Difference Between `call()` and `apply()`

| `call()`                      | `apply()`                                       |
| ----------------------------- | ----------------------------------------------- |
| Invokes immediately           | Invokes immediately                             |
| Arguments passed individually | Arguments passed as an array                    |
| `call(obj, 10, 20)`           | `apply(obj, [10,20])`                           |
| Most commonly used            | Useful when arguments already exist in an array |

---

## Example

### `call()`

```javascript
add.call(obj, 10, 20);
```

---

### `apply()`

```javascript
add.apply(obj, [10, 20]);
```

Same output.

Different syntax.

---

# 8. Real-Life Example

Imagine a company.

```javascript
function printEmployee(department) {
    console.log(this.name, department);
}
```

Employee A

```javascript
const emp1 = {
    name: "Sai"
};
```

Employee B

```javascript
const emp2 = {
    name: "Krishna"
};
```

Using `call()`

```javascript
printEmployee.call(emp1, "Frontend");

printEmployee.call(emp2, "Backend");
```

Output

```text
Sai Frontend

Krishna Backend
```

No duplicate function needed.

---

# 9. Common Mistakes

## Mistake 1

Thinking `call()` permanently changes `this`.

❌ Wrong.

```javascript
show.call(obj);
```

Only that invocation uses

```text
this = obj
```

After execution,

the function returns to its normal behavior.

---

## Mistake 2

Thinking `apply()` is different from `call()`.

No.

The only difference is

```text
Arguments
```

---

## Mistake 3

Passing normal values to `apply()`

Wrong

```javascript
show.apply(obj, 10, 20);
```

Correct

```javascript
show.apply(obj, [10,20]);
```

---

## Mistake 4

Thinking `call()` or `apply()` create new functions.

They do **not**.

They immediately execute the existing function.

---

# Quick Comparison

```text
call()

↓

Immediately Execute

↓

Individual Arguments
```

---

```text
apply()

↓

Immediately Execute

↓

Arguments Array
```

---

# Visual Diagram

```text
                Regular Function

                       │
         ┌─────────────┴─────────────┐
         │                           │
      call()                     apply()
         │                           │
 Immediate Execution        Immediate Execution
         │                           │
 Arguments Individually      Arguments as Array
         │                           │
    this = object              this = object
```

---

# Summary

* `call()` and `apply()` are methods available on regular functions.
* Both are used for **Explicit Binding**.
* Both invoke the function immediately.
* `call()` accepts individual arguments.
* `apply()` accepts an array of arguments.
* Neither method creates a new function.
* Neither method permanently changes the value of `this`.
* They are useful for function reuse and help follow the **DRY Principle**.

---

# Chapter Revision (One-Minute Cheat Sheet)

```text
call()

✔ Explicit Binding

✔ Executes Immediately

✔ Individual Arguments

show.call(obj, 10, 20)
```

```text
apply()

✔ Explicit Binding

✔ Executes Immediately

✔ Array Arguments

show.apply(obj, [10,20])
```

```text
call()

↓

this = object

↓

Function Executes Immediately
```

```text
apply()

↓

this = object

↓

Spread Array

↓

Function Executes Immediately
```

---

# 📘 JavaScript Notes — Chapter 2 (Part 2)

# `bind()`, Method Borrowing, Hard Binding & Partial Application

---

# Table of Contents

1. What is `bind()`?
2. Explain Like a 10-Year-Old
3. Why Do We Need `bind()`?
4. `bind()`
5. How `bind()` Works
6. Method Borrowing
7. Hard Binding
8. Partial Application
9. `call()` vs `apply()` vs `bind()`
10. Common Mistakes
11. Summary

---

# 1. What is `bind()`?

Unlike `call()` and `apply()`, **`bind()` does not execute the function immediately.**

Instead, it creates and returns a **new function** whose `this` value is permanently (hard) bound to the specified object.

---

# 2. Explain Like a 10-Year-Old

Imagine your teacher says:

```text
Sai,

Tomorrow,

Clean the classroom.
```

She writes it on a piece of paper and gives it to you.

Nothing happens today.

Tomorrow,

you open the paper and clean the classroom.

That's exactly how `bind()` works.

```text
bind()

↓

Creates a new function

↓

Stores it

↓

Runs later
```

---

# 3. Why Do We Need `bind()`?

Sometimes we don't want to execute a function immediately.

Instead,

we want to save it and execute it later.

Examples:

* Event Listeners
* React Components
* Timers
* Callbacks

---

Example

```javascript
const button = {
    text: "Submit",

    click() {
        console.log(this.text);
    }
};

const fn = button.click.bind(button);

// Execute later

fn();
```

Output

```text
Submit
```

---

# 4. `bind()`

## Professional Definition

`bind()` creates and returns a new function with a permanently bound `this` value.

Unlike `call()` and `apply()`, it does not invoke the function immediately.

---

## Syntax

```javascript
functionName.bind(thisArg, arg1, arg2, ...);
```

Returns

```text
New Function
```

---

## Example

```javascript
function greet() {
    console.log(this.name);
}

const person = {
    name: "Sai"
};

const fn = greet.bind(person);

fn();
```

Output

```text
Sai
```

---

# Engine Flow

```text
GEC

↓

Create greet Function

↓

Create person Object

↓

bind(person)

↓

Create NEW Function

↓

Store in fn

↓

fn()

↓

Create FEC

↓

this = person

↓

Execute
```

---

# Internal Working

Think of `bind()` like this:

```javascript
const fn = function () {
    greet.call(person);
};
```

Notice

The new function remembers

* original function
* object (`this`)
* optional predefined arguments

---

# 5. Method Borrowing

## Explain Like a 10-Year-Old

Imagine:

Sai owns a cricket bat.

Krishna doesn't have one.

Sai says,

> "You can use my bat."

Krishna uses Sai's bat.

The bat wasn't copied.

It was borrowed.

JavaScript works the same way.

---

## Professional Definition

Method Borrowing is the technique of using one object's method with another object by explicitly changing the value of `this` using `call()`, `apply()`, or `bind()`.

---

## Example

```javascript
const person1 = {
    name: "Sai",

    greet() {
        console.log(this.name);
    }
};

const person2 = {
    name: "Krishna"
};

person1.greet.call(person2);
```

Output

```text
Krishna
```

---

### Why?

Normally

```javascript
person1.greet();
```

means

```text
this = person1
```

But

```javascript
person1.greet.call(person2);
```

changes

```text
this = person2
```

The same method is reused.

---

## Benefits

* Reuse existing methods.
* Avoid duplicate code.
* Follows the **DRY Principle**.
* Improves maintainability.

---

# 6. Hard Binding

## Explain Like a 10-Year-Old

Imagine your school gives you a locker.

The locker key is permanently assigned to you.

Even if your friend asks,

he cannot use your key.

It is permanently connected to you.

That's Hard Binding.

---

## Professional Definition

Hard Binding is the behavior of `bind()` where the returned function has its `this` value permanently fixed to a specific object.

Neither `call()` nor `apply()` can change it later.

---

## Example

```javascript
function show() {
    console.log(this.name);
}

const person1 = {
    name: "Sai"
};

const person2 = {
    name: "Krishna"
};

const fn = show.bind(person1);

fn.call(person2);
```

Output

```text
Sai
```

---

## Why?

```text
bind(person1)

↓

Create NEW Function

↓

this permanently = person1

↓

call(person2)

↓

Ignored

↓

Output

Sai
```

---

# Important Point

Hard Binding applies only to the **new function** returned by `bind()`.

The original function can still use `call()` or `apply()` with different objects.

Example

```javascript
show.call(person2);
```

Output

```text
Krishna
```

---

# 7. Partial Application

## Explain Like a 10-Year-Old

Imagine every morning your mother packs your lunch.

Rice is always the same.

Only the curry changes.

Instead of packing everything again,

the rice is already packed.

Only the curry is added later.

That's Partial Application.

---

## Professional Definition

Partial Application is a technique where some arguments of a function are fixed in advance, producing a new function that accepts the remaining arguments later.

In JavaScript, `bind()` can be used to implement partial application.

---

## Example

```javascript
function add(a, b) {
    return a + b;
}

const addFive = add.bind(null, 5);

console.log(addFive(10));
```

Output

```text
15
```

---

### What happened?

```text
bind(null, 5)

↓

Fix

a = 5

↓

Return New Function

↓

Later

↓

addFive(10)

↓

b = 10

↓

add(5,10)

↓

15
```

---

## Another Example

```javascript
function greet(greeting, name) {
    console.log(greeting, name);
}

const sayHello = greet.bind(null, "Hello");

sayHello("Sai");

sayHello("Krishna");
```

Output

```text
Hello Sai

Hello Krishna
```

---

## Example Using `this`

```javascript
const person = {
    name: "Sai"
};

function introduce(age, city) {
    console.log(this.name, age, city);
}

const intro = introduce.bind(person, 24);

intro("Hyderabad");
```

Output

```text
Sai 24 Hyderabad
```

---

### What is fixed?

```text
this = person

age = 24
```

Later

```text
city = Hyderabad
```

---

# 8. Difference Between Hard Binding and Partial Application

| Hard Binding                   | Partial Application                             |
| ------------------------------ | ----------------------------------------------- |
| Fixes only `this`              | Fixes `this` and one or more function arguments |
| Uses `bind()`                  | Uses `bind()`                                   |
| Creates a new function         | Creates a new function                          |
| Prevents changing `this` later | Pre-fills arguments for later execution         |

---

## Example

Hard Binding

```javascript
const fn = show.bind(person);
```

Only

```text
this
```

is fixed.

---

Partial Application

```javascript
const fn = show.bind(person, 24);
```

Now

```text
this

+

24
```

are both fixed.

---

# 9. Difference Between `call()`, `apply()`, and `bind()`

| Feature                      | `call()` | `apply()` | `bind()` |
| ---------------------------- | -------- | --------- | -------- |
| Changes `this`               | ✅        | ✅         | ✅        |
| Executes immediately         | ✅        | ✅         | ❌        |
| Returns new function         | ❌        | ❌         | ✅        |
| Individual arguments         | ✅        | ❌         | ✅        |
| Array arguments              | ❌        | ✅         | ❌        |
| Supports Partial Application | ❌        | ❌         | ✅        |
| Creates Hard Binding         | ❌        | ❌         | ✅        |

---

# Visual Diagram

```text
                Function

                    │

      ┌─────────────┼──────────────┐

      │             │              │

    call()       apply()        bind()

      │             │              │

 Execute        Execute       Create New Function

 Immediately   Immediately

      │             │              │

this = obj     this = obj     this = obj (Permanent)

      │             │              │

 Arguments     Array         Optional Pre-filled Arguments
```

---

# 10. Common Mistakes

## Mistake 1

Thinking

```javascript
bind()
```

executes the function.

❌ Wrong.

It returns a new function.

---

## Mistake 2

Thinking

```javascript
bind()
```

only changes `this`.

Wrong.

It can also pre-fill arguments.

---

## Mistake 3

Thinking

```javascript
call()
```

can override

```javascript
bind()
```

Wrong.

Hard Binding prevents that.

---

## Mistake 4

Writing

```javascript
add.bind(5, null);
```

Wrong.

The syntax is

```javascript
bind(thisArg, arg1, arg2)
```

Correct

```javascript
add.bind(null, 5);
```

---

## Mistake 5

Thinking Method Borrowing copies the function.

Wrong.

It only reuses the existing function with a different `this`.

---

# 11. Summary

* `bind()` creates a **new function** and does not execute immediately.
* The returned function has a permanently bound `this` (**Hard Binding**).
* `bind()` can also pre-fill function arguments (**Partial Application**).
* Method Borrowing lets one object reuse another object's method without copying it.
* `call()` and `apply()` cannot override the `this` value of a function returned by `bind()`.
* `bind()` is commonly used in callbacks, event handlers, timers, and React.

---

# One-Minute Revision Cheat Sheet

```text
call()

↓

Immediate Execution

↓

this = object

↓

Arguments Individually
```

```text
apply()

↓

Immediate Execution

↓

this = object

↓

Arguments as Array
```

```text
bind()

↓

Create New Function

↓

Hard Binding

↓

Execute Later

↓

Supports Partial Application
```

---

```text
Method Borrowing

↓

Reuse another object's method

↓

No Copying

↓

Uses call(), apply(), or bind()
```

---

```text
Hard Binding

↓

bind()

↓

Permanent this

↓

call() and apply()

Cannot Override
```

---

```text
Partial Application

↓

bind()

↓

Pre-fill Arguments

↓

Remaining Arguments

Passed Later
```

---

# 🎯 Interview-Level Takeaway

Remember these three core ideas:

* **`call()`** → Execute now with a specific `this`.
* **`apply()`** → Execute now with a specific `this`, but pass arguments as an array.
* **`bind()`** → Don't execute now. Create a new function with a permanently bound `this`, and optionally pre-fill some arguments for later execution.

Understanding these concepts clearly will make advanced topics like event handling, React callbacks, and JavaScript polyfills much easier to learn.

# 📘 JavaScript Notes — Chapter 2 (Part 3)

# Polyfills (`myCall()`, `myApply()`, `myBind()`)

---

# Table of Contents

1. What is a Polyfill?
2. Explain Like a 10-Year-Old
3. Why Do We Need Polyfills?
4. How `call()` Works Internally
5. Polyfill for `myCall()`
6. How `apply()` Works Internally
7. Polyfill for `myApply()`
8. How `bind()` Works Internally
9. Polyfill for `myBind()`
10. Internal Working of Polyfills
11. Common Mistakes
12. Summary

---

# 1. What is a Polyfill?

## Explain Like a 10-Year-Old

Imagine you buy an old calculator.

It has:

```text
+
-
×
÷
```

But it doesn't have

```text
√ (Square Root)
```

So you write your own button that calculates the square root.

Now your calculator behaves like a new calculator.

That extra button is like a **Polyfill**.

---

## Professional Definition

A **Polyfill** is a custom implementation of an existing JavaScript feature so that it behaves similarly to the built-in version.

It is commonly used:

* To understand JavaScript internals.
* To support older browsers.
* In JavaScript interviews.

---

# 2. Why Do We Need Polyfills?

A polyfill helps us understand **how JavaScript works behind the scenes**.

For example,

Instead of simply writing

```javascript
greet.call(person);
```

we ask:

> **How does JavaScript actually make `this = person`?**

That's what a polyfill teaches us.

---

# 3. How `call()` Works Internally

Consider:

```javascript
function greet() {
    console.log(this.name);
}

const person = {
    name: "Sai"
};

greet.call(person);
```

Output

```text
Sai
```

---

## Internal Idea

JavaScript behaves conceptually like this:

```javascript
person.temp = greet;

person.temp();

delete person.temp;
```

---

### Why does this work?

When we write:

```javascript
person.temp();
```

The function is called as a method of `person`.

JavaScript automatically applies **Implicit Binding**.

So,

```text
this = person
```

After execution,

JavaScript removes the temporary property.

```javascript
delete person.temp;
```

---

# Visual Diagram

```text
greet.call(person)

↓

person.temp = greet

↓

person.temp()

↓

Implicit Binding

↓

this = person

↓

Execute

↓

delete person.temp
```

---

# 4. Polyfill for `myCall()`

## Step 1

```javascript
Function.prototype.myCall = function (obj) {

};
```

---

### What is `this` here?

Suppose

```javascript
greet.myCall(person);
```

Inside

```javascript
myCall()
```

```text
this

↓

greet
```

Because `myCall()` is called as a method of the `greet` function object.

---

## Step 2

Attach the function.

```javascript
Function.prototype.myCall = function (obj) {

    obj.temp = this;

    obj.temp();

    delete obj.temp;

};
```

---

## Step 3

Support arguments.

```javascript
Function.prototype.myCall = function (obj, ...args) {

    obj.temp = this;

    const result = obj.temp(...args);

    delete obj.temp;

    return result;

};
```

---

## Example

```javascript
function greet(age) {
    console.log(this.name, age);
}

const person = {
    name: "Sai"
};

greet.myCall(person, 24);
```

Output

```text
Sai 24
```

---

# Engine Flow (`myCall()`)

```text
GEC

↓

Create greet Function

↓

Create person Object

↓

Call myCall()

↓

this = greet

↓

person.temp = greet

↓

person.temp(24)

↓

Implicit Binding

↓

this = person

↓

Execute

↓

Delete temp

↓

Return result
```

---

# 5. How `apply()` Works Internally

The idea is almost identical to `call()`.

The only difference:

Arguments arrive as an **array**.

Example

```javascript
greet.apply(person, [24, "Hyderabad"]);
```

Internally,

```javascript
person.temp = greet;

person.temp(24, "Hyderabad");

delete person.temp;
```

---

# 6. Polyfill for `myApply()`

```javascript
Function.prototype.myApply = function (obj, args) {

    obj.temp = this;

    const result = obj.temp(...args);

    delete obj.temp;

    return result;

};
```

---

## Example

```javascript
function greet(age, city) {

    console.log(this.name, age, city);

}

const person = {

    name: "Sai"

};

greet.myApply(person, [24, "Hyderabad"]);
```

Output

```text
Sai 24 Hyderabad
```

---

# Engine Flow (`myApply()`)

```text
GEC

↓

Create greet Function

↓

Create person Object

↓

Call myApply()

↓

this = greet

↓

person.temp = greet

↓

Spread Array

↓

person.temp(24, "Hyderabad")

↓

Implicit Binding

↓

this = person

↓

Execute

↓

Delete temp
```

---

# 7. How `bind()` Works Internally

Unlike `call()` and `apply()`,

`bind()` **does not execute immediately**.

Instead,

it creates a new function.

---

Example

```javascript
const fn = greet.bind(person);
```

Think of it as:

```javascript
const fn = function () {

    greet.call(person);

};
```

The returned function remembers:

* Original function
* `this`
* Optional predefined arguments

---

# 8. Polyfill for `myBind()`

```javascript
Function.prototype.myBind = function (obj, ...bindArgs) {

    const fn = this;

    return function (...callArgs) {

        return fn.call(obj, ...bindArgs, ...callArgs);

    };

};
```

---

## Example

```javascript
function greet(age, city) {

    console.log(this.name, age, city);

}

const person = {

    name: "Sai"

};

const fn = greet.myBind(person, 24);

fn("Hyderabad");
```

Output

```text
Sai 24 Hyderabad
```

---

# Engine Flow (`myBind()`)

```text
GEC

↓

Create greet Function

↓

Create person Object

↓

myBind()

↓

this = greet

↓

Store greet

↓

Store person

↓

Store bindArgs

↓

Return NEW Function

↓

Later

↓

fn("Hyderabad")

↓

call(person)

↓

Execute
```

---

# 9. Internal Working of All Polyfills

## `myCall()`

```text
Function

↓

Attach to Object

↓

Call Immediately

↓

Delete Temporary Property
```

---

## `myApply()`

```text
Function

↓

Attach to Object

↓

Spread Array

↓

Call Immediately

↓

Delete Temporary Property
```

---

## `myBind()`

```text
Function

↓

Remember Function

↓

Remember this

↓

Remember Arguments

↓

Return NEW Function

↓

Execute Later
```

---

# 10. Comparison

| Feature                      | `myCall()` | `myApply()` | `myBind()` |
| ---------------------------- | ---------- | ----------- | ---------- |
| Executes Immediately         | ✅          | ✅           | ❌          |
| Returns New Function         | ❌          | ❌           | ✅          |
| Uses Temporary Property      | ✅          | ✅           | ❌          |
| Uses Closure                 | ❌          | ❌           | ✅          |
| Supports Partial Application | ❌          | ❌           | ✅          |

---

# Visual Diagram

```text
                Function

                    │

      ┌─────────────┼─────────────┐

      │             │             │

   myCall()     myApply()     myBind()

      │             │             │

Attach Temp    Attach Temp    Create Closure

      │             │             │

Execute       Execute       Return Function

      │             │             │

Delete Temp   Delete Temp   Execute Later
```

---

# 11. Common Mistakes

## Mistake 1

Using

```javascript
obj.temp
```

without realizing

the object may already contain

```javascript
temp
```

The real JavaScript engine avoids this by using a unique key (commonly implemented with `Symbol()`).

---

## Mistake 2

Thinking

```javascript
this
```

inside

```javascript
myCall()
```

is the object.

Wrong.

```text
this

↓

Original Function
```

---

## Mistake 3

Thinking

`bind()`

executes the function.

It doesn't.

It only creates another function.

---

## Mistake 4

Thinking

Polyfills are exact copies of JavaScript.

No.

Our implementations are **simplified** to explain the concepts.

The real implementations handle:

* `null`
* `undefined`
* Primitive values
* Constructor behavior (`new`)
* Property collisions
* Specification edge cases

---

# 12. Summary

* A **Polyfill** is a custom implementation of a built-in JavaScript feature.
* `myCall()` works by temporarily attaching the function to an object, invoking it, and then deleting the temporary property.
* `myApply()` follows the same approach as `myCall()`, but accepts arguments as an array.
* `myBind()` uses a **closure** to remember the original function, the bound `this`, and any pre-filled arguments, returning a new function for later execution.
* The polyfills shown here are simplified for learning. The native implementations are more robust and handle many additional edge cases.

---

# One-Minute Revision Cheat Sheet

```text
Polyfill

↓

Custom Implementation

↓

Learn JavaScript Internals
```

---

```text
myCall()

↓

this = Original Function

↓

Attach to Object

↓

Execute

↓

Delete
```

---

```text
myApply()

↓

Same as myCall()

↓

Arguments as Array
```

---

```text
myBind()

↓

Store Function

↓

Store this

↓

Store Arguments

↓

Return New Function

↓

Closure

↓

Execute Later
```

---

# Final Concept Map

```text
                     Polyfills

                          │

        ┌─────────────────┼─────────────────┐

        │                 │                 │

     myCall()         myApply()        myBind()

        │                 │                 │

 Temp Property      Temp Property      Closure

        │                 │                 │

 Immediate          Immediate         Return Function

        │                 │                 │

 Delete Temp        Delete Temp      Execute Later

        │                 │                 │

 Explicit Binding   Explicit Binding  Hard Binding + Partial Application
```

---

## 🎯 Interview-Level Takeaway

The most important thing to remember is that **polyfills are not about memorizing code—they are about understanding the idea behind the built-in methods**:

* **`myCall()`** and **`myApply()`** rely on **temporarily attaching a function to an object** so that JavaScript's implicit binding sets `this` correctly.
* **`myBind()`** relies on a **closure** to remember the original function, the bound `this`, and any pre-filled arguments, returning a new function that can be executed later.

If you understand these core ideas, you'll be able to explain the internal behavior of `call()`, `apply()`, and `bind()` confidently in interviews.
