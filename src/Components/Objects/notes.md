# DAY 9 — JavaScript Objects (Beginner → Pro → Interview → DSA Foundation)

Objects are one of the most important concepts in JavaScript.

React, APIs, JSON, Redux, Zustand, Node.js, Databases, and most frontend applications heavily use objects.

---

# What is an Object?

An object is a collection of related data stored as **key-value pairs**.

```js
const student = {
  name: "Sai",
  age: 25,
  isStudent: true
};
```

---

# Real World Example

Without Object:

```js
let name = "Sai";
let age = 25;
let city = "Hyderabad";
```

Problem:

```text
Data is scattered
Hard to manage
```

With Object:

```js
const person = {
  name: "Sai",
  age: 25,
  city: "Hyderabad"
};
```

Everything belongs together.

---

# Object Structure

```js
const student = {
  name: "Sai",
  age: 25
};
```

```text
student
│
├── name → "Sai"
└── age  → 25
```

---

# Terminology

```js
const student = {
  name: "Sai",
  age: 25
};
```

### Object

```js
student
```

### Property (Key)

```js
name
age
```

### Value

```js
"Sai"
25
```

### Key-Value Pair

```js
name: "Sai"
```

---

# Creating Objects

## Empty Object

```js
const obj = {};
```

---

## Single Property

```js
const person = {
  name: "Sai"
};
```

---

## Multiple Properties

```js
const person = {
  name: "Sai",
  age: 25,
  city: "Hyderabad"
};
```

---

# Accessing Object Values

## Dot Notation

```js
const student = {
  name: "Sai"
};

console.log(student.name);
```

Output:

```text
Sai
```

---

## Bracket Notation

```js
const student = {
  name: "Sai"
};

console.log(student["name"]);
```

Output:

```text
Sai
```

---

# Dot vs Bracket

### Dot Notation

```js
student.name
```

### Bracket Notation

```js
student["name"]
```

---

# When to Use Bracket Notation?

Dynamic property names.

```js
const student = {
  name: "Sai"
};

let key = "name";

console.log(student[key]);
```

Output:

```text
Sai
```

---

# Updating Object Properties

```js
const student = {
  name: "Sai"
};

student.name = "Krishna";

console.log(student);
```

Output:

```text
{
  name: "Krishna"
}
```

---

# Adding New Properties

```js
const student = {
  name: "Sai"
};

student.age = 25;
```

Result:

```js
{
  name: "Sai",
  age: 25
}
```

---

# Deleting Properties

```js
const student = {
  name: "Sai",
  age: 25
};

delete student.age;
```

Output:

```js
{
  name: "Sai"
}
```

---

# Objects are Mutable

Objects can be changed after creation.

```js
const person = {
  name: "Sai"
};

person.name = "Krishna";
```

---

# typeof Object

```js
typeof {}
```

Output:

```text
"object"
```

---

# Object Memory Model

```js
const user = {
  name: "Sai"
};
```

```text
user
 │
 ▼

{
 name: "Sai"
}
```

Objects are stored in:

```text
Heap Memory
```

Variables store references.

---

# Copying Objects

```js
const user1 = {
  name: "Sai"
};

const user2 = user1;
```

Memory:

```text
user1 ─┐
        │
user2 ──┘
        ▼
   {name:"Sai"}
```

Both point to the same object.

---

# Object Reference Example

```js
const user1 = {
  name: "Sai"
};

const user2 = user1;

user2.name = "Krishna";

console.log(user1.name);
```

Output:

```text
Krishna
```

---

# Shallow Copy

Creates a new object.

```js
const user = {
  name: "Sai"
};

const copy = { ...user };
```

---

# Why Use Shallow Copy?

Avoid modifying original data.

Very important in React.

---

# Object.keys()

Returns all keys.

```js
const student = {
  name: "Sai",
  age: 25
};

console.log(Object.keys(student));
```

Output:

```js
["name", "age"]
```

---

# Object.values()

Returns all values.

```js
console.log(Object.values(student));
```

Output:

```js
["Sai", 25]
```

---

# Object.entries()

Returns key-value pairs.

```js
console.log(Object.entries(student));
```

Output:

```js
[
 ["name","Sai"],
 ["age",25]
]
```

---

# Looping Objects

## for...in Loop

```js
const student = {
  name: "Sai",
  age: 25
};

for(let key in student){
  console.log(key);
}
```

Output:

```text
name
age
```

---

# Print Values

```js
for(let key in student){
  console.log(student[key]);
}
```

Output:

```text
Sai
25
```

---

# Print Keys and Values

```js
for(let key in student){
  console.log(key, student[key]);
}
```

Output:

```text
name Sai
age 25
```

---

# Nested Objects

Object inside object.

```js
const student = {
  name: "Sai",

  address: {
    city: "Hyderabad",
    state: "Telangana"
  }
};
```

---

# Access Nested Objects

```js
console.log(student.address.city);
```

Output:

```text
Hyderabad
```

---

# Real Student Data Example

```js
const student = {
  id: 1,
  name: "Sai",
  age: 25,

  marks: {
    math: 90,
    science: 95,
    english: 85
  },

  address: {
    city: "Hyderabad",
    state: "Telangana"
  }
};
```

---

# Object Containing Array

```js
const student = {
  name: "Sai",

  skills: [
    "HTML",
    "CSS",
    "JavaScript"
  ]
};
```

---

# Access Array Inside Object

```js
console.log(student.skills[0]);
```

Output:

```text
HTML
```

---

# Array of Objects

Very Important

```js
const students = [
  {
    name: "Sai",
    age: 25
  },
  {
    name: "Krishna",
    age: 26
  }
];
```

---

# Access Array of Objects

```js
console.log(students[0].name);
```

Output:

```text
Sai
```

---

# Why Objects Are Important?

```text
React Props
React State
API Responses
JSON Data
Redux
Zustand
MongoDB
Node.js
```

All heavily rely on objects.

---

# Object vs Array

| Object         | Array           |
| -------------- | --------------- |
| Key-Value      | Indexed         |
| Unordered Keys | Ordered         |
| Use Names      | Use Indexes     |
| Flexible       | Sequential Data |

---

# Object Time Complexity

| Operation | Complexity |
| --------- | ---------- |
| Access    | O(1)       |
| Update    | O(1)       |
| Insert    | O(1)       |
| Delete    | O(1)       |

---

# DSA Perspective

Objects are used as:

```text
Hash Maps
Dictionaries
Lookup Tables
Caching
Frequency Counters
```

Example:

```js
const frequency = {
  apple: 3,
  mango: 2,
  banana: 5
};
```

---

# Industry-Level Summary

```text
Object
│
├── Key-Value Pair
├── Mutable
├── Reference Type
├── Heap Memory
├── O(1) Lookup
├── Supports Nesting
├── Supports Arrays
├── Supports Methods
├── Used in APIs
└── Foundation of Modern JavaScript
```

---

# Mastery Checklist

```text
✓ What is Object
✓ Keys and Values
✓ Dot Notation
✓ Bracket Notation
✓ Add Property
✓ Update Property
✓ Delete Property
✓ Mutable Objects
✓ Heap Memory
✓ References
✓ Shallow Copy
✓ Object.keys()
✓ Object.values()
✓ Object.entries()
✓ for...in
✓ Nested Objects
✓ Object + Array
✓ Array of Objects
✓ Time Complexity
✓ DSA Applications
```
---
