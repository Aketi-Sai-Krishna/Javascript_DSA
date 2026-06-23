Perfect. Here are the **10 Shallow Copy & Deep Copy Interview Questions with Answers**.

---

# 1. Predict the Output

```js
const user1 = {
  name: "Sai"
};

const user2 = user1;

user2.name = "Krishna";

console.log(user1.name);
```

## Answer

```js
Krishna
```

## Why?

```text
user1 and user2 point to the same object.

Assignment copies the reference, not the object.

Changing user2 changes the same object that user1 points to.
```

---

# 2. Predict the Output

```js
const arr1 = [1, 2, 3];

const arr2 = arr1;

arr2.push(4);

console.log(arr1);
```

## Answer

```js
[1, 2, 3, 4]
```

## Why?

```text
Arrays are objects.

arr1 and arr2 share the same reference.

Modifying arr2 modifies the same array.
```

---

# 3. Create a Shallow Copy

```js
const student = {
  name: "Sai",
  age: 25
};

const copy = {
  ...student
};

copy.age = 30;

console.log(student);
console.log(copy);
```

## Answer

```js
{ name: "Sai", age: 25 }

{ name: "Sai", age: 30 }
```

## Why?

```text
Spread operator creates a new top-level object.

The copy has its own reference.

Changing copy does not affect student.
```

---

# 4. Predict the Output

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

## Answer

```js
Hyderabad
```

## Why?

```text
Spread only copies the first level.

The nested address object is still shared.

Both objects point to the same address object.
```

---

# 5. Compare References

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

## Answer

```js
false
true
```

## Why?

### First

```js
user === copy
```

```text
false

Spread created a new top-level object.
```

### Second

```js
user.address === copy.address
```

```text
true

Nested object reference was copied.
```

---

# 6. Create a Deep Copy

```js
const student = {
  name: "Sai",
  marks: {
    math: 90
  }
};

const copy = structuredClone(student);

copy.marks.math = 100;

console.log(student);
console.log(copy);
```

## Answer

```js
{
  name: "Sai",
  marks: { math: 90 }
}
```

```js
{
  name: "Sai",
  marks: { math: 100 }
}
```

## Why?

```text
structuredClone creates new copies of every nested level.

No references are shared.
```

---

# 7. Fix the Bug

## Buggy Code

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

## Fixed Solution

```js
const copy = {
  ...user,
  address: {
    ...user.address
  }
};

copy.address.city = "Hyderabad";
```

## Result

```js
console.log(user.address.city);
```

```js
Vizag
```

## Why?

```text
Now address is also copied.

The nested object no longer shares a reference.
```

---

# 8. Assignment vs Shallow vs Deep

## A

```js
const copy = user;
```

### Answer

```text
Assignment
```

---

## B

```js
const copy = {
  ...user
};
```

### Answer

```text
Shallow Copy
```

---

## C

```js
const copy = structuredClone(user);
```

### Answer

```text
Deep Copy
```

---

# 9. React State Mutation

```jsx
const [user, setUser] = useState({
  name: "Sai",
  age: 25
});

user.age = 30;

setUser(user);
```

## Why Is This Bad?

```text
State is mutated directly.

The reference does not change.

React may not detect the update.
```

## Correct Way

```jsx
setUser({
  ...user,
  age: 30
});
```

## Why?

```text
Spread creates a new object reference.

React detects the change and re-renders.
```

---

# 10. Update Nested State

```jsx
const [user, setUser] = useState({
  name: "Sai",
  address: {
    city: "Vizag"
  }
});
```

Update city:

```jsx
setUser({
  ...user,
  address: {
    ...user.address,
    city: "Hyderabad"
  }
});
```

## Why?

```text
We create a new user object.

We also create a new address object.

No mutation occurs.
```

---

# Bonus Question

## True or False?

```text
Spread operator creates a deep copy.
```

## Answer

```text
False
```

### Example

```js
const user = {
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

Output:

```js
Hyderabad
```

### Why?

```text
Nested objects still share references.

Spread only creates a shallow copy.
```

---

# Most Important Interview Definitions

### Reference

A memory address that points to an object or array.

---

### Assignment

Copies the reference, not the object.

---

### Shallow Copy

Creates a new top-level object but shares nested references.

---

### Deep Copy

Creates completely independent copies of all nested levels.

---

### React Connection

```text
Assignment  → Avoid

Shallow Copy → Most Common

Deep Copy → When nested data must be completely independent
```
