Excellent. Since you're preparing for **Frontend/React interviews (10–24 LPA)**, below are **professional interview answers**. These are the kind of answers expected by interviewers.

---

# JavaScript `this` Keyword - Interview Questions & Answers

---

# 1. What is `this` in JavaScript?

### Answer

`this` is a special keyword in JavaScript that refers to the object executing the current function.

Its value is determined at **runtime** based on **how the function is called**, not where it is defined (except for arrow functions).

---

# 2. How is the value of `this` determined?

### Answer

The value of `this` is determined by the way a function is invoked.

JavaScript follows these binding rules:

* Default Binding
* Implicit Binding
* Explicit Binding (`call`, `apply`, `bind`)
* Constructor Binding (`new`)

Arrow functions are an exception because they inherit `this` from their surrounding lexical scope.

---

# 3. Does `this` depend on where a function is defined or how it is called?

### Answer

For **regular functions**, `this` depends on **how the function is called**.

For **arrow functions**, `this` depends on **where the function is created**, because arrow functions inherit `this` from their lexical scope.

---

# 4. What is the value of `this` in the global scope?

### Answer

It depends on the environment.

Browser (normal script)

```js
console.log(this);
```

Output

```js
window
```

ES Modules

```js
undefined
```

Node.js (CommonJS)

```js
module.exports
```

---

# 5. What is the difference between `this` inside a regular function and an object method?

### Answer

A regular function uses **default binding**.

An object method uses **implicit binding**.

Example

```js
function show() {
    console.log(this);
}

show();
```

↓

Default Binding

```js
const obj = {
    show() {
        console.log(this);
    }
};

obj.show();
```

↓

Implicit Binding

`this` becomes `obj`.

---

# 6. What is the value of `this` inside a regular function?

### Answer

Non-strict mode

```js
window
```

Strict mode

```js
undefined
```

Reason:

Regular function calls use the **default binding rule**.

---

# 7. What is the value of `this` inside an object method?

### Answer

`this` refers to the object that calls the method.

```js
const user = {
    name: "Sai",

    greet() {
        console.log(this.name);
    }
};

user.greet();
```

Output

```js
Sai
```

because

```js
this === user
```

---

# 8. What happens when a method is assigned to another variable?

### Answer

The method loses its object reference.

```js
const fn = user.greet;

fn();
```

Now it becomes a regular function call.

Therefore

Strict Mode

```js
this = undefined
```

Non-strict Browser

```js
this = window
```

This is known as **losing `this`**.

---

# 9. Difference between implicit binding and explicit binding?

### Answer

Implicit Binding

JavaScript automatically assigns `this`.

```js
obj.show();
```

↓

```js
this = obj
```

Explicit Binding

The developer manually assigns `this`.

Using

```js
call()
apply()
bind()
```

Example

```js
show.call(obj);
```

Now

```js
this = obj
```

---

# 10. Explain the four binding rules of `this`.

### Answer

1. Default Binding

```js
show();
```

↓

`this`

↓

Global object (non-strict)

or

`undefined` (strict mode)

---

2. Implicit Binding

```js
obj.show();
```

↓

`this = obj`

---

3. Explicit Binding

```js
show.call(obj);
```

↓

`this = obj`

---

4. Constructor Binding

```js
new User();
```

↓

`this = newly created object`

---

# 11. Why do arrow functions not have their own `this`?

### Answer

Arrow functions were introduced to solve problems caused by changing `this`.

Unlike regular functions, arrow functions do not create their own `this`.

Instead, they inherit `this` from their surrounding lexical scope at the time they are created.

---

# 12. What is lexical `this`?

### Answer

Lexical `this` means an arrow function inherits `this` from its surrounding execution context.

Example

```js
const obj = {

    name: "Sai",

    greet() {

        const inner = () => {

            console.log(this.name);

        };

        inner();

    }

};
```

`inner` inherits

```js
this = obj
```

---

# 13. Difference between regular functions and arrow functions regarding `this`.

### Answer

Regular Function

* Has its own `this`
* Determined when called

Arrow Function

* Doesn't create its own `this`
* Inherits `this` from lexical scope
* Determined when created

---

# 14. What are `call()`, `apply()`, and `bind()`?

### Answer

All three methods allow us to explicitly set the value of `this`.

`call()`

* Invokes immediately
* Arguments passed individually

`apply()`

* Invokes immediately
* Arguments passed as an array

`bind()`

* Doesn't invoke immediately
* Returns a new function with permanently bound `this`

---

# 15. What is "losing `this`"?

### Answer

Losing `this` happens when an object method is detached from its object and called as a regular function.

Example

```js
const fn = obj.show;

fn();
```

The object reference is lost.

Therefore

`this`

becomes

`undefined`

or

`window`

depending on the environment.

---

# 16. What happens to `this` inside callbacks?

### Answer

It depends on the callback type.

Regular callback

```js
setTimeout(function () {

    console.log(this);

},1000);
```

↓

Default binding.

Arrow callback

```js
setTimeout(() => {

    console.log(this);

},1000);
```

↓

Lexical `this`.

---

# 17. Explain `this` inside constructors and classes.

### Answer

When using

```js
new
```

JavaScript creates a new object.

Then

```js
this
```

points to that new object.

Example

```js
function User(name){

    this.name=name;

}
```

Similarly,

inside class constructors,

`this`

refers to the current instance.

---

# 18. What happens when `bind()` is used? Can `call()` or `apply()` override it?

### Answer

`bind()` creates a new function whose `this` is permanently bound to the specified object.

Example

```js
const bound = show.bind(obj);
```

Calling

```js
bound.call(otherObj);
```

does **not** change `this`.

The bound `this` remains `obj`.

---

# 19. How does `this` behave in React?

### Answer

### Function Components

Modern React function components do not use `this`.

They use Hooks like:

* `useState`
* `useEffect`
* `useRef`

### Class Components

`this` refers to the current component instance.

Examples:

* `this.state`
* `this.props`
* `this.setState()`

Arrow functions are commonly used for event handlers to preserve the correct `this`.

---

# 20. Explain the complete `this` binding algorithm.

### Answer

JavaScript determines `this` using the following priority order:

### 1. Constructor Binding (Highest)

```js
new User();
```

↓

`this`

↓

New Object

---

### 2. Explicit Binding

```js
call()

apply()

bind()
```

↓

Specified Object

---

### 3. Implicit Binding

```js
obj.show();
```

↓

Calling Object

---

### 4. Default Binding (Lowest)

```js
show();
```

↓

Global Object (non-strict)

or

`undefined` (strict mode)

---

# ⭐ Interview One-Line Answer

If an interviewer asks:

> **"How does JavaScript decide the value of `this`?"**

A strong answer is:

> **"JavaScript determines `this` at runtime based on how a function is invoked. It follows four binding rules: constructor binding, explicit binding, implicit binding, and default binding. Arrow functions are different because they don't create their own `this`; instead, they inherit it from their surrounding lexical scope."**

---

