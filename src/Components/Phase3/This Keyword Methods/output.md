
---

# Topic 1 — `call()` Interview Questions & Answers

### 1. What is `call()` in JavaScript, and why is it used?

**Answer:**
`call()` is a built-in function method that invokes a function immediately while explicitly setting the value of `this`. It is used for explicit binding, method borrowing, and function reuse.

---

### 2. How does `call()` implement explicit binding?

**Answer:**
`call()` explicitly sets the value of `this` by taking the target object as its first argument before executing the function.

**Syntax:**

```javascript
functionName.call(thisArg, arg1, arg2);
```

---

### 3. What is the difference between implicit binding and explicit binding?

**Answer:**

* **Implicit Binding:** JavaScript automatically determines `this` based on the calling object.
* **Explicit Binding:** The developer manually sets `this` using `call()`, `apply()`, or `bind()`.

---

### 4. Does `call()` permanently change the value of `this`? Why or why not?

**Answer:**
No. `call()` changes `this` only for the current function invocation. After execution, the function returns to its normal behavior.

---

### 5. What happens if you write?

```javascript
function show() {
    console.log(this);
}

show.call(null);
```

Explain the output in both strict and non-strict mode.

**Answer:**

* **Non-Strict Mode:** `this` becomes the global object (`window` in browsers).
* **Strict Mode:** `this` remains `null`.

---

### 6. How does JavaScript internally implement `call()`?

**Answer:**
JavaScript conceptually:

1. Temporarily attaches the function to the target object.
2. Invokes it as the object's method.
3. Removes the temporary property.

This ensures `this` refers to the target object.

---

### 7. Why can a function be reused across multiple objects using `call()`? What JavaScript principle does this support?

**Answer:**
Because `call()` lets us explicitly set `this` for different objects. This supports the **DRY (Don't Repeat Yourself)** principle by avoiding duplicate methods.

---

### 8. Why doesn't `call()` create a new function while `bind()` does?

**Answer:**
`call()` executes the function immediately, so no new function is needed. `bind()` delays execution, so it returns a new function with a bound `this`.

---

### 9. Explain the execution flow of:

```javascript
show.call(user);
```

**Answer:**

```text
GEC
↓
Create Function
↓
Create Object
↓
call()
↓
Create FEC
↓
this = user
↓
Execute Function
↓
Pop FEC
↓
Back to GEC
```

---

### 10. Implement a simplified version of `myCall()`.

**Answer:**

```javascript
Function.prototype.myCall = function (obj, ...args) {
    obj.temp = this;
    const result = obj.temp(...args);
    delete obj.temp;
    return result;
};
```

# 📘 Topic 2 — `apply()` Interview Questions & Answers

---

## 1. What is `apply()`?

**Answer:**
`apply()` is a built-in function method that invokes a function immediately while explicitly setting the value of `this`. It accepts function arguments as an array.

---

## 2. What is the only difference between `call()` and `apply()`?

**Answer:**

* `call()` accepts arguments individually.
* `apply()` accepts arguments as an array.

```javascript
fn.call(obj, 10, 20);

fn.apply(obj, [10, 20]);
```

---

## 3. When should you prefer `apply()` over `call()`?

**Answer:**
Use `apply()` when the function arguments are already available as an array.

---

## 4. Why does `apply()` accept an array instead of individual arguments?

**Answer:**
It allows JavaScript to easily pass an existing array of values as function arguments without manually extracting each value.

---

## 5. Explain how JavaScript internally converts

```javascript
apply(obj, [10,20]);
```

before execution.

**Answer:**
Internally JavaScript conceptually:

```text
Attach Function
↓

obj.temp = function

↓

Spread Array

↓

obj.temp(10,20)

↓

Delete temp
```

The array is expanded into individual arguments before the function executes.

---

## 6. Does `apply()` permanently bind `this`?

**Answer:**
No. `apply()` changes `this` only for the current function execution. It does not permanently modify the function.

---

## 7. Explain how `myApply()` works internally.

**Answer:**

1. Attach the function to the object.
2. Spread the array arguments.
3. Invoke the function.
4. Delete the temporary property.
5. Return the result.

---

## 8. Why do we write

```javascript
obj.temp(...args);
```

instead of

```javascript
obj.temp(args);
```

inside `myApply()`?

**Answer:**
Because the function expects individual arguments. The spread operator converts the array into separate arguments.

Example:

```javascript
[10,20]
```

becomes

```javascript
10,20
```

---

## 9. Explain the execution flow of

```javascript
show.apply(user,[24]);
```

using Execution Contexts.

**Answer:**

```text
GEC
↓

Create Function

↓

Create Object

↓

apply()

↓

Create FEC

↓

this = user

↓

Spread Array

↓

Execute Function

↓

Pop FEC

↓

Back to GEC
```

---

## 10. Implement a simplified version of `myApply()`.

**Answer:**

```javascript
Function.prototype.myApply = function (obj, args) {
    obj.temp = this;
    const result = obj.temp(...args);
    delete obj.temp;
    return result;
};
```

**Explanation:**

* Attach the function to the object.
* Invoke it using spread arguments.
* Delete the temporary property.
* Return the result.

---

## ⭐ Interview Revision

| Question                   | One-Line Answer                                                           |
| -------------------------- | ------------------------------------------------------------------------- |
| What is `apply()`?         | Executes a function immediately with explicit `this` and array arguments. |
| Difference from `call()`?  | Only argument passing differs.                                            |
| When to use?               | When arguments are already in an array.                                   |
| Permanent binding?         | No.                                                                       |
| Internal working?          | Attach → Spread Array → Execute → Delete.                                 |
| Polyfill idea?             | Temporary property + spread operator.                                     |
| Creates new function?      | No.                                                                       |
| Supports method borrowing? | Yes.                                                                      |
| Changes `this`?            | Yes, for one invocation only.                                             |
| Returns?                   | Returns the function's return value.                                      |

# 📘 Topic 3 — `bind()` Interview Questions & Answers

---

## 1. What is `bind()`?

**Answer:**
`bind()` is a built-in function method that returns a **new function** with a permanently bound `this` value. It does **not** execute the function immediately.

---

## 2. What is the difference between `bind()` and `call()`?

**Answer:**

* `call()` executes the function immediately.
* `bind()` returns a new function and executes it later.

---

## 3. Why does `bind()` return a new function?

**Answer:**
Because `bind()` is designed for deferred execution. It stores the bound `this` (and optional arguments) and returns a new function that can be invoked later.

---

## 4. Explain Hard Binding.

**Answer:**
Hard Binding is the behavior of `bind()` where the returned function permanently binds `this` to a specific object. The bound `this` cannot be changed using `call()` or `apply()`.

---

## 5. Why can't `call()` override a bound function?

**Answer:**
Because `bind()` creates a new function with a permanently fixed `this`. Calling `call()` or `apply()` on the bound function cannot change that bound value.

---

## 6. Explain Partial Application using `bind()`.

**Answer:**
Partial Application is the technique of pre-filling one or more function arguments using `bind()`, while providing the remaining arguments when the returned function is invoked.

**Example:**

```javascript
function add(a, b) {
    return a + b;
}

const addFive = add.bind(null, 5);

console.log(addFive(10)); // 15
```

---

## 7. Explain how JavaScript internally implements `bind()`.

**Answer:**
Internally, `bind()` stores:

* The original function
* The bound object (`this`)
* Any predefined arguments

It then returns a new function that invokes the original function with the stored `this` and arguments.

---

## 8. Why does `bind()` require closures?

**Answer:**
Because the returned function must remember the original function, the bound `this`, and any predefined arguments even after `bind()` has finished executing. Closures make this possible.

---

## 9. Explain the execution flow of

```javascript
const fn = show.bind(user);

fn();
```

starting from GEC.

**Answer:**

```text
GEC
↓

Create Function

↓

Create Object

↓

bind()

↓

Store this = user

↓

Return New Function

↓

fn()

↓

Create FEC

↓

Execute Function

↓

Pop FEC

↓

Back to GEC
```

---

## 10. Implement a simplified version of `myBind()`.

**Answer:**

```javascript
Function.prototype.myBind = function (obj, ...bindArgs) {
    const fn = this;

    return function (...callArgs) {
        return fn.call(obj, ...bindArgs, ...callArgs);
    };
};
```

**Explanation:**

* Store the original function.
* Store the bound object.
* Store predefined arguments.
* Return a new function.
* Execute the original function using `call()` with the stored `this` and combined arguments.

---

# ⭐ Interview Revision

| Question                      | One-Line Answer                                                          |
| ----------------------------- | ------------------------------------------------------------------------ |
| What is `bind()`?             | Returns a new function with permanently bound `this`.                    |
| Executes immediately?         | No.                                                                      |
| Returns new function?         | Yes.                                                                     |
| Creates Hard Binding?         | Yes.                                                                     |
| Supports Partial Application? | Yes.                                                                     |
| Uses Closure?                 | Yes.                                                                     |
| Can `call()` override it?     | No.                                                                      |
| Internal working?             | Stores function, `this`, and arguments, then returns a new function.     |
| Main use?                     | Callbacks, event handlers, React, deferred execution.                    |
| Polyfill idea?                | Return a closure that calls the original function with the bound `this`. |

# 📘 Topic 4 — Method Borrowing Interview Questions & Answers

---

## 1. What is Method Borrowing?

**Answer:**
Method Borrowing is the technique of using one object's method with another object by explicitly setting the value of `this` using `call()`, `apply()`, or `bind()`.

---

## 2. Why do developers use Method Borrowing?

**Answer:**
To reuse existing methods across multiple objects, avoid duplicate code, and follow the **DRY (Don't Repeat Yourself)** principle.

---

## 3. Which methods can perform Method Borrowing?

**Answer:**

* `call()`
* `apply()`
* `bind()`

---

## 4. Explain Method Borrowing using `call()`.

**Answer:**
`call()` invokes the borrowed method immediately while setting `this` to the borrowing object.

**Example:**

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

**Output**

```text
Krishna
```

---

## 5. Explain Method Borrowing using `apply()`.

**Answer:**
`apply()` works like `call()`, but function arguments are passed as an array.

**Example:**

```javascript
person1.greet.apply(person2);
```

---

## 6. Explain Method Borrowing using `bind()`.

**Answer:**
`bind()` creates a new function with the borrowed object's `this`, allowing the method to be executed later.

**Example:**

```javascript
const greet = person1.greet.bind(person2);

greet();
```

**Output**

```text
Krishna
```

---

## 7. What are the advantages of Method Borrowing over copying methods?

**Answer:**

* Reduces duplicate code.
* Follows the DRY principle.
* Improves code reusability.
* Easier to maintain.
* Changes in one method automatically apply everywhere it's borrowed.

---

## 8. Does Method Borrowing violate encapsulation?

**Answer:**
No. Method Borrowing simply changes the execution context (`this`) of a function. It doesn't copy or modify the original object.

---

## 9. Explain how Method Borrowing changes the value of `this`.

**Answer:**
`call()`, `apply()`, and `bind()` explicitly set `this` to the borrowing object, allowing the same method to operate on different objects.

---

## 10. Explain the execution flow of a borrowed method.

**Answer:**

```text
GEC
↓

Create Objects

↓

Create Method

↓

call()/apply()/bind()

↓

this = Borrowing Object

↓

Create FEC

↓

Execute Function

↓

Return Result

↓

Pop FEC

↓

Back to GEC
```

---

# ⭐ Interview Revision

| Question                  | One-Line Answer                                    |
| ------------------------- | -------------------------------------------------- |
| What is Method Borrowing? | Reusing one object's method in another object.     |
| Why use it?               | Code reusability and DRY principle.                |
| Which methods support it? | `call()`, `apply()`, `bind()`.                     |
| `call()`?                 | Executes immediately.                              |
| `apply()`?                | Executes immediately with array arguments.         |
| `bind()`?                 | Returns a new function for later execution.        |
| Copies the method?        | No, it only reuses it.                             |
| Changes `this`?           | Yes, explicitly.                                   |
| Main benefit?             | Reuse without duplication.                         |
| Interview keyword?        | **Function Reusability through Explicit Binding.** |

# 📘 Topic 5 — Hard Binding Interview Questions & Answers

---

## 1. What is Hard Binding?

**Answer:**
Hard Binding is the process of permanently binding the value of `this` to a function using `bind()`. Once bound, `this` cannot be changed using `call()` or `apply()`.

---

## 2. Which JavaScript method creates Hard Binding?

**Answer:**
Only the `bind()` method creates Hard Binding.

---

## 3. Does `call()` create Hard Binding? Explain.

**Answer:**
No. `call()` only changes `this` for the current function invocation. It does not permanently bind `this`.

---

## 4. Why can't `apply()` override a bound function?

**Answer:**
Because `bind()` creates a new function with a permanently bound `this`. `apply()` cannot override that binding.

---

## 5. Why is Hard Binding called "Permanent Binding"?

**Answer:**
Because the returned function always uses the same bound object as `this`, regardless of how or where it is invoked.

---

## 6. Explain the relationship between `bind()` and Hard Binding.

**Answer:**
`bind()` implements Hard Binding by returning a new function whose `this` is permanently fixed to the specified object.

---

## 7. Explain how JavaScript stores the bound object internally.

**Answer:**
Internally, JavaScript stores a reference to the bound object along with the original function and any pre-filled arguments inside the new bound function.

---

## 8. Explain why

```javascript
fn.call(obj2);
```

doesn't change `this`.

**Answer:**
Because `fn` is already a bound function. The bound `this` has higher priority than the `this` provided by `call()` or `apply()`.

---

## 9. Explain the complete execution flow of a Hard Bound function.

**Answer:**

```text
GEC
↓

Create Original Function

↓

bind(obj)

↓

Store this = obj

↓

Return New Function

↓

Invoke Bound Function

↓

Create FEC

↓

Use Stored this

↓

Execute Function

↓

Pop FEC

↓

Back to GEC
```

---

## 10. How is Hard Binding internally implemented?

**Answer:**
JavaScript creates a new function that remembers:

* The original function
* The bound object (`this`)
* Any predefined arguments

When invoked, the new function executes the original function using the stored `this`.

---

# ⭐ Interview Revision

| Question                           | One-Line Answer                                            |
| ---------------------------------- | ---------------------------------------------------------- |
| What is Hard Binding?              | Permanently fixing `this` using `bind()`.                  |
| Which method creates it?           | `bind()`.                                                  |
| Does `call()` create Hard Binding? | No.                                                        |
| Can `apply()` override it?         | No.                                                        |
| Why is it permanent?               | The returned function always uses the stored `this`.       |
| Uses Closure?                      | Yes.                                                       |
| Returns new function?              | Yes.                                                       |
| Stores what internally?            | Original function, bound `this`, and predefined arguments. |
| Main use?                          | Callbacks, event handlers, React class methods.            |
| Interview keyword?                 | **Permanent Explicit Binding of `this`.**                  |

# 📘 Topic 6 — Partial Application Interview Questions & Answers

---

## 1. What is Partial Application?

**Answer:**
Partial Application is the technique of pre-filling some function arguments and supplying the remaining arguments later.

---

## 2. Why do developers use Partial Application?

**Answer:**
To create reusable functions, reduce repetitive arguments, improve readability, and follow the DRY principle.

---

## 3. How does `bind()` support Partial Application?

**Answer:**
`bind()` allows us to predefine one or more arguments when creating a new function. The remaining arguments are passed when the bound function is invoked.

**Example:**

```javascript
function add(a, b) {
    return a + b;
}

const addFive = add.bind(null, 5);

console.log(addFive(10)); // 15
```

---

## 4. Explain the difference between Partial Application and Hard Binding.

**Answer:**

| Partial Application             | Hard Binding                           |
| ------------------------------- | -------------------------------------- |
| Pre-fills arguments.            | Permanently binds `this`.              |
| Focuses on function parameters. | Focuses on execution context (`this`). |
| Can exist with `bind()`.        | Created by `bind()`.                   |

---

## 5. Can Partial Application exist without `bind()`? Explain.

**Answer:**
Yes. It can also be implemented using **closures**, where an outer function remembers predefined arguments and returns an inner function.

---

## 6. Explain Partial Application using closures.

**Answer:**

```javascript
function add(a) {
    return function (b) {
        return a + b;
    };
}

const addFive = add(5);

console.log(addFive(10)); // 15
```

The inner function forms a closure and remembers the value of `a`.

---

## 7. Explain the execution flow of

```javascript
const addFive = add.bind(null, 5);

addFive(10);
```

**Answer:**

```text
GEC
↓

Create add Function

↓

bind(null, 5)

↓

Store 5

↓

Return New Function

↓

addFive(10)

↓

Create FEC

↓

Call add(5,10)

↓

Execute

↓

Return 15

↓

Pop FEC
```

---

## 8. Why does `bind()` remember arguments?

**Answer:**
Because the bound function stores the predefined arguments internally, allowing them to be combined with new arguments during execution.

---

## 9. Explain how JavaScript stores predefined arguments internally.

**Answer:**
JavaScript stores the predefined arguments inside the bound function (using an internal mechanism similar to a closure). When the function is invoked, these stored arguments are combined with the new arguments.

---

## 10. Implement Partial Application without using `bind()`.

**Answer:**

```javascript
function partial(fn, ...presetArgs) {
    return function (...newArgs) {
        return fn(...presetArgs, ...newArgs);
    };
}
```

**Example:**

```javascript
function add(a, b) {
    return a + b;
}

const addFive = partial(add, 5);

console.log(addFive(10)); // 15
```

---

# ⭐ Interview Revision

| Question                     | One-Line Answer                                          |
| ---------------------------- | -------------------------------------------------------- |
| What is Partial Application? | Pre-filling some function arguments for later execution. |
| Why use it?                  | Reusability, readability, and DRY principle.             |
| Which method supports it?    | `bind()`.                                                |
| Without `bind()`?            | Yes, using closures.                                     |
| Related to `this`?           | No, it's related to function arguments.                  |
| Uses Closure?                | Yes.                                                     |
| Returns new function?        | Yes.                                                     |
| Stores what?                 | Predefined arguments.                                    |
| Main benefit?                | Creates specialized reusable functions.                  |
| Interview keyword?           | **Pre-filling Function Arguments.**                      |

# 📘 Topic 7 — Polyfills Interview Questions & Answers

---

## 1. What is a Polyfill?

**Answer:**
A Polyfill is a custom implementation of a built-in JavaScript feature that provides similar functionality, especially for understanding internals or supporting older environments.

---

## 2. Why are Polyfills used?

**Answer:**

* To understand JavaScript internals.
* To support older browsers.
* To recreate built-in methods for learning and interviews.

---

## 3. What is the difference between a Polyfill and a built-in method?

**Answer:**

| Polyfill                            | Built-in Method                       |
| ----------------------------------- | ------------------------------------- |
| Custom implementation.              | Native JavaScript implementation.     |
| Written by developers.              | Implemented by the JavaScript engine. |
| Used for learning or compatibility. | Optimized and standardized.           |

---

## 4. Explain how `myCall()` works internally.

**Answer:**

1. Attach the function temporarily to the target object.
2. Invoke it as the object's method.
3. Delete the temporary property.
4. Return the result.

---

## 5. Explain how `myApply()` works internally.

**Answer:**

1. Attach the function temporarily to the target object.
2. Spread the array arguments.
3. Invoke the function.
4. Delete the temporary property.
5. Return the result.

---

## 6. Explain how `myBind()` works internally.

**Answer:**

1. Store the original function.
2. Store the bound object (`this`).
3. Store predefined arguments.
4. Return a new function (closure).
5. When invoked, execute the original function using the stored `this` and arguments.

---

## 7. Why do we temporarily attach a function to an object in `myCall()`?

**Answer:**
Because invoking a function as an object's method causes JavaScript to apply **implicit binding**, making `this` refer to that object.

---

## 8. Why does `myBind()` use closures while `myCall()` doesn't?

**Answer:**
Because `myBind()` returns a function that must remember the original function, bound `this`, and predefined arguments for future execution. `myCall()` executes immediately, so it doesn't need a closure.

---

## 9. What limitations do our simplified polyfills have compared to the native implementations?

**Answer:**
Our simplified polyfills do not handle:

* `null` or `undefined` edge cases.
* Primitive values (`number`, `string`, `boolean`) as `this`.
* Constructor behavior with `new`.
* Property name collisions.
* ECMAScript specification edge cases.

---

## 10. How would you improve `myCall()`, `myApply()`, and `myBind()` to make them closer to the ECMAScript specification?

**Answer:**

* Handle `null` and `undefined` correctly.
* Convert primitive values to wrapper objects.
* Use `Symbol()` instead of a temporary property name to avoid collisions.
* Support constructor behavior (`new`) in `bind()`.
* Handle all specification-defined edge cases.

---

# ⭐ Interview Revision

| Question                       | One-Line Answer                                           |
| ------------------------------ | --------------------------------------------------------- |
| What is a Polyfill?            | A custom implementation of a built-in JavaScript feature. |
| Why use Polyfills?             | Learning internals and browser compatibility.             |
| Polyfill vs Built-in?          | Custom vs native implementation.                          |
| `myCall()`?                    | Attach → Execute → Delete.                                |
| `myApply()`?                   | Attach → Spread → Execute → Delete.                       |
| `myBind()`?                    | Store → Return Closure → Execute Later.                   |
| Why attach temporarily?        | To leverage implicit binding for `this`.                  |
| Why use Closure in `myBind()`? | To remember `this` and arguments.                         |
| Limitations?                   | Doesn't handle all ECMAScript edge cases.                 |
| Interview keyword?             | **Custom implementation of native JavaScript methods.**   |

---
