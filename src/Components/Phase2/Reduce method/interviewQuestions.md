`Reduce`

# Level 1: Beginner (Understand How reduce Works)

## Problem 1

Find the sum of all numbers.

```js
const numbers = [1, 2, 3, 4, 5];
```

Expected:

```js
15
```

---

## Problem 2

Find the product of all numbers.

```js
const numbers = [1, 2, 3, 4];
```

Expected:

```js
24
```

---

## Problem 3

Count total elements.

```js
const fruits = ["apple", "banana", "orange"];
```

Expected:

```js
3
```

---

## Problem 4

Find the largest number.

```js
const numbers = [10, 5, 90, 2, 45];
```

Expected:

```js
90
```

---

## Problem 5

Find the smallest number.

```js
const numbers = [10, 5, 90, 2, 45];
```

Expected:

```js
2
```

---

# Level 2: Beginner+ (Objects)

## Problem 6

Calculate total cart price.

```js
const cart = [
  { name: "Phone", price: 20000 },
  { name: "Laptop", price: 50000 },
  { name: "Tablet", price: 30000 }
];
```

Expected:

```js
100000
```

---

## Problem 7

Calculate total quantity.

```js
const cart = [
  { name: "Phone", quantity: 2 },
  { name: "Laptop", quantity: 1 },
  { name: "Tablet", quantity: 3 }
];
```

Expected:

```js
6
```

---

## Problem 8

Find the most expensive product.

```js
const products = [
  { name: "Phone", price: 20000 },
  { name: "Laptop", price: 50000 },
  { name: "Tablet", price: 30000 }
];
```

Expected:

```js
{
  name: "Laptop",
  price: 50000
}
```

---

## Problem 9

Find average age.

```js
const users = [
  { age: 20 },
  { age: 30 },
  { age: 40 }
];
```

Expected:

```js
30
```

---

## Problem 10

Count how many users are adults.

```js
const users = [
  { age: 17 },
  { age: 20 },
  { age: 16 },
  { age: 25 }
];
```

Expected:

```js
2
```

---

# Level 3: Intermediate (Building Objects)

## Problem 11

Count occurrences.

```js
const fruits = [
  "apple",
  "banana",
  "apple",
  "orange",
  "apple"
];
```

Expected:

```js
{
  apple: 3,
  banana: 1,
  orange: 1
}
```

---

## Problem 12

Count letters.

```js
const letters = [
  "a",
  "b",
  "a",
  "c",
  "b",
  "a"
];
```

Expected:

```js
{
  a: 3,
  b: 2,
  c: 1
}
```

---

## Problem 13

Group students by grade.

```js
const students = [
  { name: "Sai", grade: "A" },
  { name: "John", grade: "B" },
  { name: "Krishna", grade: "A" }
];
```

Expected:

```js
{
  A: [
    { name: "Sai", grade: "A" },
    { name: "Krishna", grade: "A" }
  ],
  B: [
    { name: "John", grade: "B" }
  ]
}
```

---

## Problem 14

Create object by ID.

```js
const users = [
  { id: 1, name: "Sai" },
  { id: 2, name: "John" }
];
```

Expected:

```js
{
  1: { id: 1, name: "Sai" },
  2: { id: 2, name: "John" }
}
```

---

## Problem 15

Count product categories.

```js
const products = [
  { category: "Electronics" },
  { category: "Books" },
  { category: "Electronics" }
];
```

Expected:

```js
{
  Electronics: 2,
  Books: 1
}
```

---

# Level 4: Intermediate+ (Real Frontend Problems)

## Problem 16

Calculate total order amount.

```js
const orders = [
  { amount: 1000 },
  { amount: 500 },
  { amount: 2000 }
];
```

Expected:

```js
3500
```

---

## Problem 17

Calculate total salary.

```js
const employees = [
  { salary: 30000 },
  { salary: 40000 },
  { salary: 50000 }
];
```

Expected:

```js
120000
```

---

## Problem 18

Get all names into one string.

```js
const users = [
  { name: "Sai" },
  { name: "John" },
  { name: "Krishna" }
];
```

Expected:

```js
"Sai, John, Krishna"
```

---

## Problem 19

Find total likes.

```js
const posts = [
  { likes: 10 },
  { likes: 20 },
  { likes: 30 }
];
```

Expected:

```js
60
```

---

## Problem 20

Calculate average product price.

```js
const products = [
  { price: 100 },
  { price: 200 },
  { price: 300 }
];
```

Expected:

```js
200
```

---

# Level 5: Advanced

## Problem 21

Flatten array.

```js
const numbers = [
  [1, 2],
  [3, 4],
  [5, 6]
];
```

Expected:

```js
[1,2,3,4,5,6]
```

---

## Problem 22

Find unique values.

```js
const numbers = [
  1,
  2,
  2,
  3,
  4,
  4,
  5
];
```

Expected:

```js
[1,2,3,4,5]
```

---

## Problem 23

Group orders by category.

```js
const orders = [
  { category: "Electronics", amount: 1000 },
  { category: "Books", amount: 500 },
  { category: "Electronics", amount: 2000 }
];
```

Expected:

```js
{
  Electronics: [
    { category: "Electronics", amount: 1000 },
    { category: "Electronics", amount: 2000 }
  ],
  Books: [
    { category: "Books", amount: 500 }
  ]
}
```

---

## Problem 24

Calculate category totals.

```js
const orders = [
  { category: "Electronics", amount: 1000 },
  { category: "Books", amount: 500 },
  { category: "Electronics", amount: 2000 }
];
```

Expected:

```js
{
  Electronics: 3000,
  Books: 500
}
```

---

## Problem 25

Find the most frequent item.

```js
const fruits = [
  "apple",
  "banana",
  "apple",
  "apple",
  "orange"
];
```

Expected:

```js
"apple"
```

---

# Level 6: React Interview Level

## Problem 26

Calculate cart total.

```js
const cart = [
  {
    price: 100,
    quantity: 2
  },
  {
    price: 200,
    quantity: 1
  }
];
```

Expected:

```js
400
```

---

## Problem 27

Count completed tasks.

```js
const tasks = [
  { completed: true },
  { completed: false },
  { completed: true }
];
```

Expected:

```js
2
```

---

## Problem 28

Create lookup table.

```js
const products = [
  { id: 1, name: "Phone" },
  { id: 2, name: "Laptop" }
];
```

Expected:

```js
{
  1: {
    id: 1,
    name: "Phone"
  },
  2: {
    id: 2,
    name: "Laptop"
  }
}
```

---

## Problem 29

Get total revenue.

```js
const sales = [
  { revenue: 5000 },
  { revenue: 10000 },
  { revenue: 7000 }
];
```

Expected:

```js
22000
```

---

## Problem 30 (Most Asked)

Chain filter + map + reduce

```js
const employees = [
  { name: "Sai", salary: 30000, active: true },
  { name: "John", salary: 40000, active: false },
  { name: "Krishna", salary: 50000, active: true }
];
```

Tasks:

1. Get active employees
2. Extract salaries
3. Calculate total active salary

Expected:

```js
80000
```

---

### Master Challenge (Frontend Developer Level)

```js
const orders = [
  {
    id: 1,
    category: "Electronics",
    amount: 1000
  },
  {
    id: 2,
    category: "Books",
    amount: 500
  },
  {
    id: 3,
    category: "Electronics",
    amount: 2000
  },
  {
    id: 4,
    category: "Books",
    amount: 700
  }
];
```

Create:

```js
{
  Electronics: {
    count: 2,
    total: 3000
  },
  Books: {
    count: 2,
    total: 1200
  }
}
```

If you can comfortably solve Problems **1–20**, you understand `reduce()` well.

If you can solve **21–30**, you're at the level expected for most React/Frontend interviews.

If you can solve the **Master Challenge** without help, you've moved beyond beginner and are using `reduce()` the way experienced developers do.
