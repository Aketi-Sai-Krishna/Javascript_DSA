# Shallow Copy & Deep Copy Notes (Beginner → Advanced)

---

# Why Do We Need To Learn This?

Imagine you have a notebook.

You give your friend:

* the **same notebook**
* or a **photocopy of the notebook**

These are very different.

JavaScript objects and arrays work the same way.

Understanding this concept is extremely important for:

* JavaScript
* React
* Zustand
* Redux
* Interviews
* DSA

---

# Step 1: Understanding References

## Primitive Values

```js
let a = 10;
let b = a;

b = 20;
```

Result:

```js
console.log(a); // 10
console.log(b); // 20
```

Why?

Because numbers are copied directly.

Memory:

```text
a → 10
b → 10
```

When:

```js
b = 20;
```

Memory:

```text
a → 10
b → 20
```

No connection exists.

---

# Objects Work Differently

```js
const user1 = {
  name: "Sai"
};

const user2 = user1;
```

Memory:

```text
user1
  │
  ▼
{name:"Sai"}

user2
  │
  ▼
{name:"Sai"}
```

Both variables point to the same object.

---

# Assignment

## Definition

Assignment means copying the reference, not the object.

Example:

```js
const user1 = {
  name: "Sai"
};

const user2 = user1;
```

Now:

```js
user2.name = "Krishna";
```

Output:

```js
console.log(user1.name);
```

```js
Krishna
```

Why?

Because both variables share the same object.

---

# Real Life Example

One house.

Two people have the same address.

```text
Sai ─────┐
         │
         ▼
      House

Krishna ─┘
```

If Krishna paints the house blue:

```text
Sai sees blue house
Krishna sees blue house
```

Because there is only one house.

---

# Why Is This A Problem?

Suppose:

```js
const user = {
  name: "Sai"
};
```

You want a copy.

But:

```js
const copy = user;
```

is NOT a copy.

It is just another reference.

---

# Shallow Copy

## Definition

A shallow copy creates a new object and copies only the first level of properties.

---

## Creating a Shallow Copy

```js
const user = {
  name: "Sai",
  age: 25
};

const copy = {
  ...user
};
```

---

Memory:

```text
user ─────► Object A

copy ─────► Object B
```

Different objects.

---

Now:

```js
copy.age = 30;
```

Result:

```js
console.log(user.age);
```

```js
25
```

Original remains unchanged.

---

# Why Spread Operator Exists

Spread operator:

```js
...
```

was introduced to:

* Copy arrays
* Copy objects
* Merge arrays
* Merge objects

Example:

```js
const copy = {
  ...user
};
```

---

# Important Rule

Spread copies only one level.

This is the most important sentence in this topic.

---

# Nested Object Problem

Example:

```js
const user = {
  name: "Sai",
  address: {
    city: "Vizag"
  }
};
```

Copy:

```js
const copy = {
  ...user
};
```

---

Memory:

```text
user
 │
 ▼
{
 name
 address ─────┐
              ▼
          {city:"Vizag"}
}

copy
 │
 ▼
{
 name
 address ─────┘
}
```

Notice:

```text
Top-level object → copied

Nested object → shared
```

---

# Problem

```js
copy.address.city = "Hyderabad";
```

Output:

```js
console.log(user.address.city);
```

```js
Hyderabad
```

Why?

Because both objects share the same nested reference.

---

# Shallow Copy Rule

```text
First level → New reference

Nested levels → Same reference
```

---

# Deep Copy

## Definition

A deep copy creates completely independent copies of every level of an object.

No references are shared.

---

# Deep Copy Memory

```text
Original
 │
 ▼
{
 address
   ▼
 {city:"Vizag"}
}
```

Deep Copy:

```text
Copy
 │
 ▼
{
 address
   ▼
 {city:"Vizag"}
}
```

Everything is recreated.

No sharing.

---

# Creating Deep Copy

## Method 1 (Modern)

```js
const copy = structuredClone(user);
```

Recommended.

---

## Method 2

```js
const copy =
JSON.parse(JSON.stringify(user));
```

Older method.

---

# Deep Copy Example

```js
const user = {
  address: {
    city: "Vizag"
  }
};

const copy =
structuredClone(user);

copy.address.city = "Hyderabad";
```

Output:

```js
console.log(user.address.city);
```

```js
Vizag
```

Original stays unchanged.

---

# Shallow vs Deep Copy

| Feature           | Shallow Copy | Deep Copy   |
| ----------------- | ------------ | ----------- |
| Top-level copied  | Yes          | Yes         |
| Nested copied     | No           | Yes         |
| Shared references | Yes          | No          |
| Faster            | Yes          | No          |
| Memory usage      | Less         | More        |
| React usage       | Very common  | Less common |

---

# React Connection

React loves immutability.

---

# What Is Immutability?

Immutability means:

```text
Don't change existing data.

Create new data.
```

Bad:

```js
user.age = 30;
```

Good:

```js
const updatedUser = {
  ...user,
  age: 30
};
```

---

# Why React Uses Shallow Copy

React checks:

```js
oldState === newState
```

If reference changes:

```text
React re-renders
```

If reference stays same:

```text
React may skip update
```

---

# React State Example

Bad:

```js
user.age = 30;

setUser(user);
```

Same reference.

---

Good:

```js
setUser({
  ...user,
  age: 30
});
```

New reference.

React detects change.

---

# Updating Nested State

State:

```js
const [user, setUser] = useState({
  name: "Sai",
  address: {
    city: "Vizag"
  }
});
```

Update city:

```js
setUser({
  ...user,
  address: {
    ...user.address,
    city: "Hyderabad"
  }
});
```

Very common React interview question.

---

# Reference Comparison

Objects:

```js
{} === {}
```

Output:

```js
false
```

Why?

Different references.

---

Arrays:

```js
[] === []
```

Output:

```js
false
```

Different references.

---

Shared Reference

```js
const arr1 = [1,2];
const arr2 = arr1;
```

```js
arr1 === arr2
```

Output:

```js
true
```

Same reference.

---

# Interview Definitions

## Reference

A reference is the memory address pointing to an object or array.

---

## Assignment

Assignment copies the reference, not the object.

---

## Shallow Copy

A shallow copy creates a new object and copies only the first level of properties. Nested objects still share references.

---

## Deep Copy

A deep copy creates completely independent copies of all nested levels, ensuring no shared references.

---

# One-Line Memory Trick

### Assignment

```text
Same house
```

### Shallow Copy

```text
New house
Same furniture
```

### Deep Copy

```text
New house
New furniture
Everything new
```

---

# React Interview Answer

> JavaScript objects are stored by reference. Assigning one object to another variable copies the reference, so both variables point to the same object. A shallow copy creates a new top-level object but still shares references for nested objects. A deep copy creates independent copies of all nested levels. React relies on immutable updates and reference changes, which is why shallow copies using the spread operator are commonly used when updating state.
