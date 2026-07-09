
---

# Complete Roadmap for `this` Keyword

We'll cover it from **Beginner → Advanced → React → Interview → FAANG Level**.

---

# Part 1

## Explain like a 10-year-old

---

Imagine there are many people in a classroom.

👦 Ram says

> "My name is Ram."

👧 Sita says

> "My name is Sita."

The sentence

> "My name is..."

means different things depending on **who is speaking**.

If Ram says it,

"My" = Ram

If Sita says it,

"My" = Sita

JavaScript's **this** works exactly like that.

It simply means

> **Who is talking right now?**

---

Example

```js
const person = {
    name: "Ram",

    speak() {
        console.log(this.name);
    }
};

person.speak();
```

Output

```
Ram
```

Here

```
this
```

means

```
person
```

because person is calling the function.

---

Another example

```js
const car = {
    brand: "BMW",

    show() {
        console.log(this.brand);
    }
};

car.show();
```

Output

```
BMW
```

Here

```
this
```

means

```
car
```

---

Think like this

```
Who called the function?

↓

That object becomes this.
```

---

Not

```
Where the function was written
```

Instead

```
Who called it
```

This single sentence explains 80% of `this`.

---

# Rule

```
this depends on HOW a function is called

NOT

where it is defined.
```

Except for arrow functions (we'll study those later).

---

# Real-life Example

Imagine two TVs.

TV1

```
Volume = 10
```

TV2

```
Volume = 40
```

Both have the same button

```
Increase Volume
```

When you press TV1's button

```
this = TV1
```

When you press TV2's button

```
this = TV2
```

Same function.

Different caller.

Different this.

---

# Part 2

# Professional Notes

---

## Definition

The `this` keyword is a special JavaScript keyword that refers to the object that is executing the current function.

Its value is determined **at runtime** based on **how the function is invoked**, not where it is defined (except arrow functions).

---

## Important Points

✅ this is created during execution.

✅ this is not fixed.

✅ this changes depending on the caller.

✅ Every regular function gets its own this.

Arrow functions do not.

---

## Global Context

Browser

```js
console.log(this);
```

Output

```
window
```

Node

```js
console.log(this);
```

Output

```
{}
```

---

## Object Method

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

```
Sai
```

---

## Function

```js
function hello() {
    console.log(this);
}

hello();
```

Browser

```
window
```

Strict Mode

```
undefined
```

---

## Constructor

```js
function User(name) {
    this.name = name;
}

const u = new User("Sai");
```

this becomes

```
u
```

---

## Class

```js
class User {

    constructor(name){
        this.name=name;
    }

    show(){
        console.log(this.name);
    }

}
```

this

=

current object.

---

## Event Listener

```js
button.addEventListener("click", function () {

    console.log(this);

});
```

this

=

button

Arrow Function

```
Not button
```

---

## Arrow Function

Arrow functions do NOT create their own this.

They inherit it from their surrounding lexical scope.

---

Example

```js
const user = {

    name: "Sai",

    greet() {

        const inside = () => {

            console.log(this.name);

        };

        inside();

    }

};

user.greet();
```

Output

```
Sai
```

---

# Summary Table

| Situation                         | this                     |
| --------------------------------- | ------------------------ |
| Global (Browser)                  | window                   |
| Global Strict Mode Function       | undefined                |
| Object Method                     | Calling Object           |
| Constructor                       | New Object               |
| Class Method                      | Current Object           |
| Event Listener (Regular Function) | Element                  |
| Arrow Function                    | Parent's this            |
| call()                            | Specified Object         |
| apply()                           | Specified Object         |
| bind()                            | Permanently Bound Object |

---

# Part 3

# 40–50 Interview Questions

## Beginner

1. What is `this` in JavaScript?
2. Is `this` a variable?
3. How is `this` determined?
4. Does `this` depend on where a function is defined?
5. What does `this` refer to in the global scope?
6. What is `this` inside an object method?
7. What happens to `this` inside a regular function?
8. What is `this` in strict mode?
9. What does `new` do with `this`?
10. What is `this` inside a constructor?

---

## Intermediate

11. Why does `this` change?
12. What is implicit binding?
13. What is explicit binding?
14. What is default binding?
15. What is constructor binding?
16. What is lexical `this`?
17. Why do arrow functions not have their own `this`?
18. Difference between regular and arrow functions regarding `this`?
19. How does `call()` change `this`?
20. How does `apply()` change `this`?
21. How does `bind()` work?
22. Difference between `call`, `apply`, and `bind`?
23. What happens if a method is stored in another variable?
24. Why is `this` lost?
25. How can you preserve `this`?

---

## Advanced

26. Explain all four binding rules.
27. What is hard binding?
28. Explain `this` with closures.
29. Explain `this` inside callbacks.
30. Explain `this` inside timers.
31. Explain `this` inside promises.
32. Explain `this` inside async functions.
33. Explain nested objects and `this`.
34. Explain method borrowing.
35. Explain `this` with prototypes.
36. Explain `this` with inheritance.
37. Explain `this` inside classes.
38. Explain `this` inside static methods.
39. Explain `this` with modules.
40. Explain `this` inside event listeners.

---

## FAANG Level

41. Predict the output of nested `this` examples.
42. Explain `this` in chained method calls.
43. Why was arrow function `this` introduced?
44. How does `this` behave after destructuring a method?
45. Can `bind()` be overridden?
46. What happens when a bound function is used with `new`?
47. Explain `this` in ES modules vs CommonJS.
48. Why does React often require correct `this` handling in class components?
49. How do closures and `this` interact?
50. Explain the complete `this` binding algorithm.

---

# Part 4

# 30+ Coding Problems

## Beginner

1. Print `this`.
2. Create an object with a method using `this`.
3. Print two object names using the same function.
4. Compare global `this` in browser and Node.
5. Create a constructor using `this`.

---

## Intermediate

6. Lose `this` by storing a method in a variable.
7. Fix lost `this` using `bind`.
8. Fix using an arrow function.
9. Use `call()`.
10. Use `apply()`.
11. Borrow a method from another object.
12. Use `bind()` to create a reusable function.
13. Predict outputs involving nested objects.
14. Use `this` inside `setTimeout`.
15. Compare regular vs arrow callback behavior.

---

## Advanced

16. Implement a custom `bind`.
17. Build a counter object with methods.
18. Implement method chaining with `this`.
19. Create a calculator object that returns `this` for chaining.
20. Predict outputs in strict mode.
21. Create a class using `this`.
22. Compare instance vs static methods.
23. Build an event emitter using `this`.
24. Explore `this` in async methods.
25. Explain `this` with promises.
26. Build a reusable logger with configurable context.
27. Implement method borrowing between prototypes.
28. Debug incorrect `this` in nested callbacks.
29. Refactor callback code to preserve `this`.
30. Write output-prediction questions combining closures and `this`.
31. Mix `call`, `apply`, and `bind` in one example.
32. Build a fluent API using chained methods and `this`.

---

# Part 5

# React Examples

Most modern React uses **function components**, so you rarely use `this`.

### Functional Component

```jsx
function Welcome() {
  const name = "Sai";

  function handleClick() {
    console.log(name);
  }

  return <button onClick={handleClick}>Click</button>;
}
```

No `this` is needed because functions and hooks manage state.

---

### Class Component

```jsx
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <button onClick={this.increment}>
        {this.state.count}
      </button>
    );
  }
}
```

Here:

* `this.state` refers to the current component instance.
* `this.setState()` updates that instance.
* Arrow functions are commonly used for event handlers so they keep the correct `this`.

---

### Why React Moved Away from `this`

Function components with Hooks:

* are simpler to read,
* avoid common `this` bugs,
* don't require `bind()` in constructors,
* are the recommended approach in modern React.

---

# Part 6

# Evaluation Checklist

After finishing this topic, you should be able to answer **yes** to all of these:

### Theory

* ☐ I can explain `this` in one sentence.
* ☐ I know why `this` changes.
* ☐ I know all four binding rules (default, implicit, explicit, constructor).
* ☐ I know why arrow functions behave differently.
* ☐ I understand `this` in strict mode.
* ☐ I can explain `call()`, `apply()`, and `bind()` conceptually.

### Practical

* ☐ I can predict the output of `this` questions.
* ☐ I can fix "lost `this`" bugs.
* ☐ I can use `call()`, `apply()`, and `bind()` correctly.
* ☐ I can explain `this` inside callbacks, timers, classes, and event listeners.

### React

* ☐ I know why function components usually don't use `this`.
* ☐ I understand `this.state` and `this.setState()` in class components.
* ☐ I know why arrow methods are common in React class components.

---

## Recommended learning order

1. Basics of `this`
2. Default, implicit, explicit, and constructor binding
3. Arrow functions and lexical `this`
4. Lost `this` and common pitfalls
5. `call()`, `apply()`, and `bind()`
6. `this` in classes
7. `this` in React class components
8. Output prediction and interview problems

With the JavaScript topics you've already mastered, this sequence will prepare you well for advanced JavaScript, React, and frontend interviews.
