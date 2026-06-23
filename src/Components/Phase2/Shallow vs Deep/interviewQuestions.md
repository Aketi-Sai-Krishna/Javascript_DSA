Perfect. Since your goal is **React + Interview Preparation**, I'll give questions that gradually build your understanding of **references → shallow copy → deep copy → React state updates**.

---

# Level 1 — Beginner

## 1. Predict the Output

```js
const user1 = {
  name: "Sai"
};

const user2 = user1;

user2.name = "Krishna";

console.log(user1.name);
```

### Questions

* What is the output?
* Why?

---

## 2. Predict the Output

```js
const arr1 = [1, 2, 3];

const arr2 = arr1;

arr2.push(4);

console.log(arr1);
```

### Questions

* What is the output?
* Why?

---

## 3. Create a Shallow Copy

Create a copy of:

```js
const student = {
  name: "Sai",
  age: 25
};
```

Then:

```js
copy.age = 30;
```

Print both objects.

### Questions

* Did the original object change?
* Why?

---

# Level 2 — Intermediate

## 4. Predict the Output

```js
const user = {
  name: "Sai",
  address: {
    city: "Vizag"
  }
};

const copy = {
  ...user
};

copy.address.city = "Hyderabad";

console.log(user.address.city);
```

### Questions

* Output?
* Why?

---

## 5. Compare References

```js
const user = {
  name: "Sai",
  address: {
    city: "Vizag"
  }
};

const copy = {
  ...user
};

console.log(user === copy);
console.log(user.address === copy.address);
```

### Questions

* Output?
* Explain both comparisons.

---

## 6. Create a Deep Copy

Given:

```js
const student = {
  name: "Sai",
  marks: {
    math: 90
  }
};
```

Create a deep copy.

Update:

```js
copy.marks.math = 100;
```

Print both objects.

### Goal

Original should remain unchanged.

---

# Level 3 — Advanced

## 7. Fix the Bug

```js
const user = {
  name: "Sai",
  address: {
    city: "Vizag"
  }
};

const copy = {
  ...user
};

copy.address.city = "Hyderabad";
```

### Task

Modify the code so that:

```js
user.address.city
```

remains:

```js
"Vizag"
```

without using `structuredClone()`.

---

## 8. Shallow or Deep?

For each statement, write:

```text
Shallow Copy
Deep Copy
Assignment
```

### A

```js
const copy = user;
```

### B

```js
const copy = {
  ...user
};
```

### C

```js
const copy = structuredClone(user);
```

---

# Level 4 — React Interview Style

## 9. Why is this wrong?

```js
const [user, setUser] = useState({
  name: "Sai",
  age: 25
});

user.age = 30;

setUser(user);
```

### Questions

* Why is this bad?
* How would you fix it?

---

## 10. Update Nested State

Given:

```js
const [user, setUser] = useState({
  name: "Sai",
  address: {
    city: "Vizag"
  }
});
```

Update city to:

```js
"Hyderabad"
```

without mutating the original state.

---

# Bonus Interview Question (Very Common)

## 11.

True or False?

```text
Spread operator creates a deep copy.
```

Explain your answer with an example.

---

# Master Question

## 12.

Explain:

```text
Reference
Assignment
Shallow Copy
Deep Copy
```

using one real-life example.

---

