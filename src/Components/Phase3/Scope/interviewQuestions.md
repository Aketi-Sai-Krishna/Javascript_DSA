Perfect. For **Frontend (React/JavaScript) interviews**, these four topics are among the most frequently tested because they directly relate to **Closures, Event Loop, Async JavaScript, React Hooks, and Memory Management**.

Below is a curated list of interview questions from **Beginner → Intermediate → Advanced → Expert**, similar to what you may encounter in companies ranging from startups to product-based companies.

---

# JavaScript Scope, Lexical Scope, Lexical Environment & Scope Chain

# Interview Questions (Beginner → Expert)

---

# 🟢 Beginner Level (Theory)

### Scope

1. What is scope in JavaScript?
2. Why do we need scope?
3. What are the different types of scope in JavaScript?
4. What is Global Scope?
5. What is Function Scope?
6. What is Block Scope?
7. Which variables are block-scoped?
8. Is `var` block-scoped?
9. Why is `let` preferred over `var`?
10. Can a global variable be accessed inside a function?
11. Can a local variable be accessed outside a function?
12. What happens if you try to access a variable outside its scope?
13. What is the difference between Global Scope and Local Scope?
14. Does every pair of `{}` create a new scope?
15. What is the scope of variables declared inside an `if` block?

---

# 🟢 Beginner Level (Code Output)

### Q1

```javascript
let a = 10;

function test() {
    console.log(a);
}

test();
```

---

### Q2

```javascript
function test() {
    let x = 20;
}

console.log(x);
```

---

### Q3

```javascript
if (true) {
    let age = 22;
}

console.log(age);
```

---

### Q4

```javascript
if (true) {
    var age = 22;
}

console.log(age);
```

---

### Q5

```javascript
const city = "Hyderabad";

function show() {
    console.log(city);
}

show();
```

---

# 🟡 Intermediate Level (Theory)

## Lexical Scope

16. What is Lexical Scope?
17. Why is it called Lexical Scope?
18. Does JavaScript use Dynamic Scope or Lexical Scope?
19. What determines the scope of a function?
20. Is scope determined by where a function is defined or where it is called?
21. Explain Lexical Scope with an example.
22. What is meant by "functions remember their surrounding environment"?
23. Can changing the calling location change a function's scope?
24. Why is Lexical Scope important for Closures?
25. What is the difference between Scope and Lexical Scope?

---

# 🟡 Intermediate Level (Code Output)

### Q6

```javascript
let name = "Sai";

function first() {
    console.log(name);
}

function second() {
    first();
}

second();
```

---

### Q7

```javascript
let a = 100;

function outer() {

    let b = 200;

    function inner() {
        console.log(a);
        console.log(b);
    }

    inner();
}

outer();
```

---

### Q8

```javascript
let a = 10;

function one() {

    let a = 20;

    console.log(a);

}

one();

console.log(a);
```

---

### Q9

```javascript
let x = 1;

function A() {

    let y = 2;

    function B() {

        let z = 3;

        console.log(x);
        console.log(y);
        console.log(z);

    }

    B();

}

A();
```

---

### Q10

```javascript
function outer() {

    let x = 10;

    return function () {
        console.log(x);
    };

}

const fn = outer();

fn();
```

---

# 🟠 Advanced Level (Theory)

## Lexical Environment

26. What is a Lexical Environment?
27. When is a Lexical Environment created?
28. What are the two components of a Lexical Environment?
29. What is an Environment Record?
30. What is an Outer Environment Reference?
31. Does every Execution Context have its own Lexical Environment?
32. How is the Lexical Environment related to Execution Context?
33. What happens to the Lexical Environment after function execution?
34. Can a Lexical Environment remain in memory after a function finishes?
35. Which JavaScript feature depends heavily on Lexical Environment?

---

# 🟠 Advanced Level (Theory)

## Scope Chain

36. What is the Scope Chain?
37. How does JavaScript search for variables?
38. What happens if JavaScript cannot find a variable?
39. Does JavaScript search from Global Scope downward or from the current scope upward?
40. What is variable lookup?
41. Explain the Scope Chain using nested functions.
42. Can a child function access parent variables?
43. Can a parent function access child variables?
44. What is the difference between Scope and Scope Chain?
45. How is the Scope Chain implemented internally?

---

# 🟠 Advanced Level (Code Output)

### Q11

```javascript
let a = 1;

function one() {

    let b = 2;

    function two() {

        let c = 3;

        console.log(a);
        console.log(b);
        console.log(c);

    }

    two();

}

one();
```

---

### Q12

```javascript
let x = 100;

function A() {

    let y = 200;

    function B() {

        let z = 300;

        console.log(y);

    }

    B();

}

A();
```

---

### Q13

```javascript
let x = 5;

function one() {

    function two() {

        function three() {

            console.log(x);

        }

        three();

    }

    two();

}

one();
```

---

### Q14

```javascript
function test() {

    console.log(value);

}

test();
```

---

### Q15

```javascript
let num = 10;

function A() {

    let num = 20;

    function B() {

        console.log(num);

    }

    B();

}

A();
```

---

# 🔴 Expert Level (Theory)

46. Explain Scope, Lexical Scope, Lexical Environment, and Scope Chain together.
47. How does the JavaScript engine resolve variables internally?
48. How does the JavaScript engine know which parent scope to search?
49. Why does JavaScript use Lexical Scope instead of Dynamic Scope?
50. Explain the relationship between Execution Context and Lexical Environment.
51. What is the difference between an Environment Record and the Variable Object?
52. Is the Global Lexical Environment different from Function Lexical Environments?
53. Can two functions share the same Lexical Environment?
54. What role does the Scope Chain play in Closures?
55. Why are Closures impossible without Lexical Scope?

---

# 🔴 Expert Level (Output-Based)

### Q16

```javascript
let x = 1;

function A() {

    let y = 2;

    function B() {

        let z = 3;

        function C() {

            console.log(x);
            console.log(y);
            console.log(z);

        }

        C();

    }

    B();

}

A();
```

---

### Q17

```javascript
let a = 10;

function test() {

    console.log(a);

    let a = 20;

}

test();
```

---

### Q18

```javascript
let a = 100;

function one() {

    function two() {

        console.log(a);

    }

    return two;

}

const fn = one();

fn();
```

---

### Q19

```javascript
let name = "Global";

function outer() {

    let name = "Outer";

    function inner() {

        console.log(name);

    }

    return inner;

}

const fn = outer();

fn();
```

---

### Q20

```javascript
let x = 10;

function A() {

    let y = 20;

    function B() {

        let z = 30;

        return function C() {

            console.log(x);
            console.log(y);
            console.log(z);

        };

    }

    return B();

}

const fn = A();

fn();
```

Excellent. Since your goal is **24 LPA+ Frontend/Product-Based companies**, these questions are designed in the style of interviews at companies like **Google, Microsoft, Amazon, Atlassian, Adobe, Salesforce, Walmart Global Tech, ServiceNow, and startups**.

> **Rules**
>
> * ❌ Don't run the code immediately.
> * ✅ Predict the output first.
> * ✅ Explain **why**.
> * ✅ Draw the **Execution Context**.
> * ✅ Draw the **Lexical Environment**.
> * ✅ Explain the **Scope Chain**.
> * ✅ Mention which **scope** each variable belongs to.

---

# Practice Questions (Basic → Pro)

---

# 🟢 Question 1 — Global Scope

```javascript
let a = 10;

function greet() {
  console.log(a);
}

greet();
```

### Answer These

1. What is the output?
2. Where is `a` stored?
3. Which Execution Contexts are created?
4. How many Lexical Environments are created?
5. Is the Scope Chain used?

---

# 🟢 Question 2 — Function Scope

```javascript
function test() {
  let x = 20;
}

console.log(x);
```

### Answer

1. Output?
2. Why?
3. Where is `x` stored?
4. Which Lexical Environment contains `x`?

---

# 🟢 Question 3 — Block Scope

```javascript
if (true) {
  let age = 22;
  const city = "Hyderabad";
}

console.log(age);
console.log(city);
```

### Answer

1. Output?
2. Which scope contains `age`?
3. Why isn't it accessible?

---

# 🟢 Question 4 — var vs let

```javascript
if (true) {
  var a = 10;
  let b = 20;
}

console.log(a);
console.log(b);
```

### Answer

1. Output?
2. Why is `a` accessible?
3. Why is `b` not?
4. Which Environment Record stores `a`?

---

# 🟡 Question 5 — Lexical Scope

```javascript
let language = "JavaScript";

function outer() {

  function inner() {
    console.log(language);
  }

  inner();
}

outer();
```

### Explain

1. Output?
2. Why can `inner()` access `language`?
3. Which Lexical Environment contains `language`?
4. Draw the Scope Chain.

---

# 🟡 Question 6 — Parent Variables

```javascript
function outer() {

  let x = 100;

  function inner() {
    console.log(x);
  }

  inner();
}

outer();
```

### Explain

1. Output?
2. Where is `x` stored?
3. How does `inner()` find `x`?
4. Explain the lookup process.

---

# 🟡 Question 7 — Child Variables

```javascript
function outer() {

  function inner() {
    let y = 50;
  }

  console.log(y);

}

outer();
```

### Explain

1. Output?
2. Why can't `outer()` access `y`?
3. Explain using Lexical Scope.

---

# 🟡 Question 8 — Nested Functions

```javascript
let a = 1;

function one() {

  let b = 2;

  function two() {

    let c = 3;

    console.log(a);
    console.log(b);
    console.log(c);

  }

  two();
}

one();
```

### Explain

1. Output?
2. Draw all Execution Contexts.
3. Draw all Lexical Environments.
4. Explain every variable lookup.

---

# 🟠 Question 9 — Shadowing

```javascript
let value = 10;

function show() {

  let value = 20;

  console.log(value);

}

show();

console.log(value);
```

### Explain

1. Output?
2. Which variable is used first?
3. Is the Scope Chain used?
4. Explain shadowing.

---

# 🟠 Question 10 — Scope Chain

```javascript
let country = "India";

function A() {

  let state = "AP";

  function B() {

    let city = "Nellore";

    console.log(country);

  }

  B();

}

A();
```

### Explain

1. Output?
2. Draw the complete Scope Chain.
3. How many Lexical Environments exist?
4. Which Environment Record stores `country`?

---

# 🔴 Question 11 — Deep Scope Chain

```javascript
let x = 1;

function A() {

  let y = 2;

  function B() {

    let z = 3;

    function C() {

      console.log(x);
      console.log(y);
      console.log(z);

    }

    C();

  }

  B();

}

A();
```

### Explain

1. Draw all Execution Contexts.
2. Draw all Lexical Environments.
3. Explain every lookup step.
4. Draw the Scope Chain.

---

# 🔴 Question 12 — Variable Lookup

```javascript
let name = "Global";

function first() {

  let name = "First";

  function second() {

    console.log(name);

  }

  second();

}

first();
```

### Explain

1. Output?
2. Why isn't the global variable used?
3. Explain the lookup process.

---

# 🔴 Question 13 — Lexical Scope

```javascript
let a = 10;

function one() {
  console.log(a);
}

function two() {

  let a = 20;

  one();

}

two();
```

### Explain

1. Output?
2. Why?
3. Which Lexical Environment does `one()` remember?
4. Does the calling location matter?

> **This is a very common interview question.**

---

# 🔴 Question 14 — Function Returned

```javascript
function outer() {

  let count = 0;

  return function inner() {

    console.log(count);

  };

}

const fn = outer();

fn();
```

### Explain

1. Output?
2. How does `inner()` still access `count`?
3. Which Lexical Environment does `inner()` use?
4. Why isn't `count` destroyed?

> **This question introduces Closures.**

---

# 🔴 Question 15 — Interview-Level

```javascript
let a = 100;

function A() {

  let b = 200;

  function B() {

    let c = 300;

    return function C() {

      console.log(a);
      console.log(b);
      console.log(c);

    };

  }

  return B();

}

const fn = A();

fn();
```

### Explain Completely

1. Output?
2. Draw the Call Stack.
3. Draw all Execution Contexts.
4. Draw every Lexical Environment.
5. Explain every Outer Reference.
6. Draw the Scope Chain.
7. Which variables remain in memory after `A()` finishes?
8. Why?
9. Which concept allows this to work?
10. What happens if `a` doesn't exist?

---

# ⭐ Bonus Challenge (Senior Frontend Interview)

Without executing the code, analyze the following:

```javascript
let x = "Global";

function A() {
  let x = "A";

  function B() {
    let y = "B";

    function C() {
      console.log(x);
      console.log(y);
    }

    return C;
  }

  return B();
}

const fn = A();
fn();
```

Explain:

1. Output.
2. Execution Context creation order.
3. Call Stack push/pop order.
4. Lexical Environments created.
5. Environment Records.
6. Outer References.
7. Variable lookup sequence.
8. Scope Chain traversal.
9. Which variables stay alive after `A()` and `B()` return?
10. Why this code works.

---

# 🎯 How to Practice Like a Product-Based Company Candidate

For **every question**, answer in this order:

1. ✅ Predict the output.
2. ✅ Explain why.
3. ✅ List the Execution Contexts created.
4. ✅ Draw each Lexical Environment.
5. ✅ Show the Environment Record for each.
6. ✅ Show the Outer Reference for each.
7. ✅ Trace the Scope Chain step by step.
8. ✅ Explain the interview concept being tested (e.g., block scope, lexical scope, shadowing, closure).

If you can confidently solve all 15 questions this way, you'll have a strong grasp of **Scope, Lexical Scope, Lexical Environment, and Scope Chain**, which is exactly the foundation you need before moving on to **Closures**.

---

# ⭐ Scenario-Based Interview Questions

1. Why can an inner function access variables from its parent function?
2. Why can't a parent function access variables declared inside its child function?
3. Why does `let` create block scope but `var` doesn't?
4. How does JavaScript know where to search for a variable?
5. Explain variable lookup using the Scope Chain.
6. Explain how Lexical Scope works in React components.
7. How do closures depend on Lexical Scope?
8. What would happen if JavaScript used Dynamic Scope instead of Lexical Scope?
9. Explain the complete lifecycle of variable resolution from Execution Context creation to variable lookup.
10. How does the JavaScript engine connect nested functions with their parent scopes?

---

# ⭐ FAANG / Product-Based Interview Questions

1. Draw the Scope Chain for a program with three nested functions.
2. Explain how the JavaScript engine creates and links Lexical Environments.
3. What is stored inside a Lexical Environment?
4. How are nested Lexical Environments connected?
5. Explain the difference between Scope, Scope Chain, and Lexical Environment using a single example.
6. Can the Scope Chain ever change at runtime? Why or why not?
7. Explain how JavaScript resolves identifiers step by step.
8. How does the Scope Chain interact with Closures?
9. Why does returning an inner function allow it to access outer variables later?
10. Trace the complete variable lookup process for a nested function and explain every step.

---

## 📌 Recommended Order for Practice

Master these topics in the following sequence:

1. ✅ Scope (Theory)
2. ✅ Scope (Code Output)
3. ✅ Lexical Scope (Theory)
4. ✅ Lexical Scope (Code Output)
5. ✅ Lexical Environment (Theory)
6. ✅ Scope Chain (Theory)
7. ✅ Scope Chain (Code Output)
8. ✅ Scenario-Based Questions
9. ✅ Expert/FAANG Questions

By the time you can confidently answer and explain all of these—including tracing the scope chain and lexical environments for code snippets—you'll have the level of understanding expected in strong frontend interviews before moving on to **Closures**.
