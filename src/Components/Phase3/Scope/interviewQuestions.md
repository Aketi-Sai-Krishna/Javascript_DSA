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
