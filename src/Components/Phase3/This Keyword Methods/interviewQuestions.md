
---

# 📘 Topic 1: `call()` (10 Interview Questions)

### Intermediate

### 1. What is `call()` in JavaScript, and why is it used?

---

### 2. How does `call()` implement explicit binding?

---

### 3. What is the difference between implicit binding and explicit binding?

---

### Advanced

### 4. Does `call()` permanently change the value of `this`? Why or why not?

---

### 5. What happens if you write?

```javascript
function show() {
    console.log(this);
}

show.call(null);
```

Explain the output in both strict and non-strict mode.

---

### 6. How does JavaScript internally implement `call()`?

Explain without writing code.

---

### Senior Frontend

### 7. Why can a function be reused across multiple objects using `call()`?

What JavaScript principle does this support?

---

### 8. Why doesn't `call()` create a new function while `bind()` does?

---

### FAANG

### 9. Explain the execution flow of

```javascript
show.call(user);
```

starting from the Global Execution Context until the function finishes.

---

### 10. Implement a simplified version of `myCall()` and explain every line.

---

# 📘 Topic 2: `apply()` (10 Interview Questions)

### Intermediate

### 1. What is `apply()`?

---

### 2. What is the only difference between `call()` and `apply()`?

---

### 3. When should you prefer `apply()` over `call()`?

---

### Advanced

### 4. Why does `apply()` accept an array instead of individual arguments?

---

### 5. Explain how JavaScript internally converts

```javascript
apply(obj, [10,20])
```

before execution.

---

### 6. Does `apply()` permanently bind `this`?

Explain.

---

### Senior Frontend

### 7. Explain how `myApply()` works internally.

---

### 8. Why do we write

```javascript
obj.temp(...args);
```

instead of

```javascript
obj.temp(args);
```

inside `myApply()`?

---

### FAANG

### 9. Explain the execution flow of

```javascript
show.apply(user,[24]);
```

using Execution Contexts.

---

### 10. Implement a simplified version of `myApply()`.

---

# 📘 Topic 3: `bind()` (10 Interview Questions)

### Intermediate

### 1. What is `bind()`?

---

### 2. What is the difference between `bind()` and `call()`?

---

### 3. Why does `bind()` return a new function?

---

### Advanced

### 4. Explain Hard Binding.

---

### 5. Why can't `call()` override a bound function?

---

### 6. Explain Partial Application using `bind()`.

---

### Senior Frontend

### 7. Explain how JavaScript internally implements `bind()`.

---

### 8. Why does `bind()` require closures?

---

### FAANG

### 9. Explain the execution flow of

```javascript
const fn = show.bind(user);

fn();
```

starting from GEC.

---

### 10. Implement a simplified version of `myBind()`.

---

# 📘 Topic 4: Method Borrowing (10 Interview Questions)

### Intermediate

### 1. What is Method Borrowing?

---

### 2. Why do developers use Method Borrowing?

---

### 3. Which methods can perform Method Borrowing?

---

### Advanced

### 4. Explain Method Borrowing using `call()`.

---

### 5. Explain Method Borrowing using `apply()`.

---

### 6. Explain Method Borrowing using `bind()`.

---

### Senior Frontend

### 7. What are the advantages of Method Borrowing over copying methods?

---

### 8. Does Method Borrowing violate encapsulation?

Explain.

---

### FAANG

### 9. Explain how Method Borrowing changes the value of `this`.

---

### 10. Explain the execution flow of a borrowed method.

---

# 📘 Topic 5: Hard Binding (10 Interview Questions)

### Intermediate

### 1. What is Hard Binding?

---

### 2. Which JavaScript method creates Hard Binding?

---

### 3. Does `call()` create Hard Binding?

Explain.

---

### Advanced

### 4. Why can't `apply()` override a bound function?

---

### 5. Why is Hard Binding called "Permanent Binding"?

---

### 6. Explain the relationship between `bind()` and Hard Binding.

---

### Senior Frontend

### 7. Explain how JavaScript stores the bound object internally.

---

### 8. Explain why

```javascript
fn.call(obj2);
```

doesn't change `this`.

---

### FAANG

### 9. Explain the complete execution flow of a Hard Bound function.

---

### 10. How is Hard Binding internally implemented?

---

# 📘 Topic 6: Partial Application (10 Interview Questions)

### Intermediate

### 1. What is Partial Application?

---

### 2. Why do developers use Partial Application?

---

### 3. How does `bind()` support Partial Application?

---

### Advanced

### 4. Explain the difference between Partial Application and Hard Binding.

---

### 5. Can Partial Application exist without `bind()`?

Explain.

---

### 6. Explain Partial Application using closures.

---

### Senior Frontend

### 7. Explain the execution flow of

```javascript
const addFive = add.bind(null,5);
```

---

### 8. Why does `bind()` remember arguments?

---

### FAANG

### 9. Explain how JavaScript stores predefined arguments internally.

---

### 10. Implement Partial Application without using `bind()`.

---

# 📘 Topic 7: Polyfills (10 Interview Questions)

### Intermediate

### 1. What is a Polyfill?

---

### 2. Why are Polyfills used?

---

### 3. What is the difference between a Polyfill and a built-in method?

---

### Advanced

### 4. Explain how `myCall()` works internally.

---

### 5. Explain how `myApply()` works internally.

---

### 6. Explain how `myBind()` works internally.

---

### Senior Frontend

### 7. Why do we temporarily attach a function to an object in `myCall()`?

---

### 8. Why does `myBind()` use closures while `myCall()` doesn't?

---

### FAANG

### 9. What limitations do our simplified polyfills have compared to the native implementations?

---

### 10. How would you improve `myCall()`, `myApply()`, and `myBind()` to make them closer to the ECMAScript specification?

---

# 🎯 Overall Interview Readiness

If you can confidently answer these **70 questions** without referring to notes, you'll be comfortable discussing:

* ✅ Explicit Binding
* ✅ `call()`
* ✅ `apply()`
* ✅ `bind()`
* ✅ Method Borrowing
* ✅ Hard Binding
* ✅ Partial Application
* ✅ Polyfills
* ✅ Execution Context Flow
* ✅ Internal JavaScript behavior

This is roughly the level expected in **frontend interviews at product-based companies**, including many senior frontend rounds. The most challenging questions here are the ones asking you to explain **internal working, execution flow, and simplified implementations**, as those test genuine understanding rather than API memorization.
