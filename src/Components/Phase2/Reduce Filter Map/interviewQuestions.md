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


===================================================================================================
``Filter``
===================================================================================================


# Filter Practice Roadmap

# Level 1 — Beginner

## Problem 1

Keep numbers greater than 5.

```js
const numbers = [1,3,5,7,9];
```

Expected:

```js
[7,9]
```

---

## Problem 2

Keep even numbers.

```js
const numbers = [1,2,3,4,5,6];
```

Expected:

```js
[2,4,6]
```

---

## Problem 3

Keep odd numbers.

```js
const numbers = [1,2,3,4,5,6];
```

Expected:

```js
[1,3,5]
```

---

## Problem 4

Keep strings longer than 4 characters.

```js
const fruits = [
  "apple",
  "kiwi",
  "banana",
  "fig"
];
```

Expected:

```js
["apple","banana"]
```

---

## Problem 5

Keep positive numbers.

```js
const numbers = [-5,-2,0,3,10];
```

Expected:

```js
[3,10]
```

---

# Level 2 — Objects

## Problem 6

Keep adults.

```js
const users = [
  { name: "Sai", age: 25 },
  { name: "John", age: 15 },
  { name: "Krishna", age: 30 }
];
```

Expected:

```js
[
  { name: "Sai", age: 25 },
  { name: "Krishna", age: 30 }
]
```

---

## Problem 7

Keep active users.

```js
const users = [
  { name: "Sai", active: true },
  { name: "John", active: false },
  { name: "Krishna", active: true }
];
```

Expected:

```js
[
  { name: "Sai", active: true },
  { name: "Krishna", active: true }
]
```

---

## Problem 8

Keep products above ₹30,000.

```js
const products = [
  { name: "Phone", price: 20000 },
  { name: "Laptop", price: 50000 },
  { name: "Tablet", price: 40000 }
];
```

Expected:

```js
[
  { name: "Laptop", price: 50000 },
  { name: "Tablet", price: 40000 }
]
```

---

## Problem 9

Keep employees whose salary is above 50,000.

```js
const employees = [
  { name: "A", salary: 30000 },
  { name: "B", salary: 60000 },
  { name: "C", salary: 70000 }
];
```

---

## Problem 10

Keep students with grade A.

```js
const students = [
  { name: "Sai", grade: "A" },
  { name: "John", grade: "B" },
  { name: "Krishna", grade: "A" }
];
```

---

# Level 3 — Intermediate

## Problem 11

Keep names starting with "S".

```js
const names = [
  "Sai",
  "John",
  "Sam",
  "Krishna"
];
```

Expected:

```js
["Sai","Sam"]
```

---

## Problem 12

Keep products in stock.

```js
const products = [
  { name: "Phone", stock: true },
  { name: "Laptop", stock: false },
  { name: "Tablet", stock: true }
];
```

---

## Problem 13

Keep orders above ₹1000.

```js
const orders = [
  { amount: 500 },
  { amount: 1500 },
  { amount: 3000 }
];
```

---

## Problem 14

Keep users whose age is between 18 and 30.

```js
const users = [
  { age: 15 },
  { age: 20 },
  { age: 35 },
  { age: 25 }
];
```

---

## Problem 15

Keep words containing letter "a".

```js
const words = [
  "apple",
  "kiwi",
  "banana",
  "orange"
];
```

---

# Level 4 — React Style Problems

## Problem 16

Search Products

```js
const products = [
  "Laptop",
  "Phone",
  "Tablet",
  "Camera"
];
```

Search:

```js
"ph"
```

Expected:

```js
["Phone"]
```

---

## Problem 17

Filter completed tasks.

```js
const tasks = [
  { title: "Task1", completed: true },
  { title: "Task2", completed: false },
  { title: "Task3", completed: true }
];
```

---

## Problem 18

Filter unread notifications.

```js
const notifications = [
  { read: true },
  { read: false },
  { read: false }
];
```

---

## Problem 19

Filter online users.

```js
const users = [
  { online: true },
  { online: false },
  { online: true }
];
```

---

## Problem 20

Filter selected rows.

```js
const rows = [
  { id: 1, selected: true },
  { id: 2, selected: false },
  { id: 3, selected: true }
];
```

This is very common in tables.

---

# Level 5 — Advanced

## Problem 21

Filter duplicate values.

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

## Problem 22

Filter users who have both:

```js
active === true
```

AND

```js
age > 18
```

---

## Problem 23

Filter products:

```js
price > 1000
```

AND

```js
stock === true
```

---

## Problem 24

Filter orders made in 2025.

```js
const orders = [
  { year: 2024 },
  { year: 2025 },
  { year: 2025 }
];
```

---

## Problem 25

Filter employees from IT department whose salary exceeds ₹70,000.

---

# Level 6 — Interview Level

## Problem 26

Use:

```js
filter + map
```

Get names of active users.

---

## Problem 27

Use:

```js
filter + reduce
```

Calculate total salary of active employees.

---

## Problem 28

Use:

```js
filter + map + reduce
```

Calculate total price of products that are in stock.

---

## Problem 29

Find all users whose names contain `"sa"` (case insensitive).

```js
Sai
sandeep
John
krishna
```

Expected:

```js
["Sai","sandeep"]
```

---

## Problem 30 (Frontend Interview Favorite)

```js
const applicants = [
  {
    name: "Sai",
    status: "Joined",
    score: 90
  },
  {
    name: "John",
    status: "Pending",
    score: 75
  },
  {
    name: "Krishna",
    status: "Joined",
    score: 85
  }
];
```

Get names of applicants:

* status = Joined
* score > 80

Expected:

```js
["Sai", "Krishna"]
```

---

### Master Challenge

```js
const employees = [
  {
    name: "Sai",
    department: "IT",
    salary: 60000,
    active: true
  },
  {
    name: "John",
    department: "HR",
    salary: 40000,
    active: true
  },
  {
    name: "Krishna",
    department: "IT",
    salary: 80000,
    active: false
  },
  {
    name: "Ravi",
    department: "IT",
    salary: 90000,
    active: true
  }
];
```

Get names of employees who:

* belong to IT
* active
* salary > 70000

Expected:

```js
["Ravi"]
```

If you can solve Problems **1–20**, you're comfortable with `filter()`.

If you can solve **21–30**, you're at the level expected in most React and Frontend interviews.



===================================================================================================
``Map``
===================================================================================================

# MAP PRACTICE ROADMAP

# Level 1 — Beginner

## Problem 1

Double every number.

```js
const numbers = [1,2,3,4];
```

Expected:

```js
[2,4,6,8]
```

---

## Problem 2

Triple every number.

```js
const numbers = [1,2,3,4];
```

Expected:

```js
[3,6,9,12]
```

---

## Problem 3

Add 10 to every number.

```js
const numbers = [1,2,3,4];
```

Expected:

```js
[11,12,13,14]
```

---

## Problem 4

Convert all names to uppercase.

```js
const names = [
  "sai",
  "john",
  "krishna"
];
```

Expected:

```js
[
  "SAI",
  "JOHN",
  "KRISHNA"
]
```

---

## Problem 5

Get length of every word.

```js
const words = [
  "apple",
  "banana",
  "kiwi"
];
```

Expected:

```js
[5,6,4]
```

---

# Level 2 — Objects

## Problem 6

Extract all names.

```js
const users = [
  { name: "Sai" },
  { name: "John" },
  { name: "Krishna" }
];
```

Expected:

```js
[
  "Sai",
  "John",
  "Krishna"
]
```

---

## Problem 7

Extract all ages.

```js
const users = [
  { age: 25 },
  { age: 30 },
  { age: 35 }
];
```

Expected:

```js
[25,30,35]
```

---

## Problem 8

Extract all product prices.

```js
const products = [
  { price: 1000 },
  { price: 2000 },
  { price: 3000 }
];
```

Expected:

```js
[1000,2000,3000]
```

---

## Problem 9

Create a new object with name only.

```js
const users = [
  {
    name: "Sai",
    age: 25
  },
  {
    name: "John",
    age: 30
  }
];
```

Expected:

```js
[
  { name: "Sai" },
  { name: "John" }
]
```

---

## Problem 10

Create full names.

```js
const users = [
  {
    firstName: "Sai",
    lastName: "Krishna"
  },
  {
    firstName: "John",
    lastName: "Doe"
  }
];
```

Expected:

```js
[
  "Sai Krishna",
  "John Doe"
]
```

---

# Level 3 — Intermediate

## Problem 11

Convert prices into discounted prices.

```js
const prices = [
  100,
  200,
  300
];
```

10% discount.

Expected:

```js
[90,180,270]
```

---

## Problem 12

Convert ages into age groups.

```js
const ages = [
  10,
  25,
  60
];
```

Expected:

```js
[
  "Child",
  "Adult",
  "Senior"
]
```

---

## Problem 13

Convert users into JSX-like strings.

```js
const users = [
  { name: "Sai" },
  { name: "John" }
];
```

Expected:

```js
[
  "<li>Sai</li>",
  "<li>John</li>"
]
```

---

## Problem 14

Add `isAdult` property.

```js
const users = [
  {
    name: "Sai",
    age: 25
  },
  {
    name: "John",
    age: 15
  }
];
```

Expected:

```js
[
  {
    name: "Sai",
    age: 25,
    isAdult: true
  },
  {
    name: "John",
    age: 15,
    isAdult: false
  }
]
```

---

## Problem 15

Add index to each item.

```js
const fruits = [
  "apple",
  "banana",
  "orange"
];
```

Expected:

```js
[
  {
    id: 0,
    name: "apple"
  },
  {
    id: 1,
    name: "banana"
  },
  {
    id: 2,
    name: "orange"
  }
]
```

---

# Level 4 — React Style

## Problem 16

Create option objects.

```js
const cities = [
  "Hyderabad",
  "Bangalore",
  "Chennai"
];
```

Expected:

```js
[
  {
    label: "Hyderabad",
    value: "Hyderabad"
  },
  {
    label: "Bangalore",
    value: "Bangalore"
  },
  {
    label: "Chennai",
    value: "Chennai"
  }
]
```

---

## Problem 17

Convert API response to dropdown format.

```js
const jobs = [
  {
    id: 1,
    title: "Frontend"
  },
  {
    id: 2,
    title: "Backend"
  }
];
```

Expected:

```js
[
  {
    label: "Frontend",
    value: 1
  },
  {
    label: "Backend",
    value: 2
  }
]
```

---

## Problem 18

Create card data.

```js
const products = [
  {
    id: 1,
    name: "Phone"
  }
];
```

Expected:

```js
[
  {
    key: 1,
    title: "Phone"
  }
]
```

---

## Problem 19

Get all email addresses.

```js
const users = [
  {
    email: "a@test.com"
  },
  {
    email: "b@test.com"
  }
];
```

Expected:

```js
[
  "a@test.com",
  "b@test.com"
]
```

---

## Problem 20

Convert user objects into React keys.

```js
const users = [
  {
    id: 1,
    name: "Sai"
  },
  {
    id: 2,
    name: "John"
  }
];
```

Expected:

```js
[
  {
    key: 1,
    name: "Sai"
  },
  {
    key: 2,
    name: "John"
  }
]
```

---

# Level 5 — Advanced

## Problem 21

Convert array into HTML strings.

```js
const products = [
  "Phone",
  "Laptop"
];
```

Expected:

```js
[
  "<div>Phone</div>",
  "<div>Laptop</div>"
]
```

---

## Problem 22

Create usernames.

```js
const users = [
  "Sai Krishna",
  "John Doe"
];
```

Expected:

```js
[
  "saikrishna",
  "johndoe"
]
```

---

## Problem 23

Convert order amounts into tax-inclusive amounts.

```js
const amounts = [
  1000,
  2000,
  3000
];
```

Add 18% GST.

---

## Problem 24

Transform products.

```js
const products = [
  {
    name: "Phone",
    price: 1000
  }
];
```

Expected:

```js
[
  {
    name: "Phone",
    formattedPrice: "₹1000"
  }
]
```

---

## Problem 25

Create employee summary strings.

```js
const employees = [
  {
    name: "Sai",
    department: "IT"
  }
];
```

Expected:

```js
[
  "Sai works in IT"
]
```

---

# Level 6 — Interview Level

## Problem 26

Use:

```js
filter + map
```

Get names of active users.

---

## Problem 27

Use:

```js
map + reduce
```

Calculate total salary.

---

## Problem 28

Use:

```js
filter + map + reduce
```

Calculate total salary of active employees.

---

## Problem 29

Convert API response into table rows.

```js
const applicants = [
  {
    id: 1,
    name: "Sai",
    status: "Joined"
  }
];
```

Expected:

```js
[
  {
    key: 1,
    candidateName: "Sai",
    candidateStatus: "Joined"
  }
]
```

---

## Problem 30 (Frontend Interview Favorite)

```js
const applicants = [
  {
    name: "Sai",
    score: 90
  },
  {
    name: "John",
    score: 75
  }
];
```

Expected:

```js
[
  {
    name: "Sai",
    result: "Pass"
  },
  {
    name: "John",
    result: "Fail"
  }
]
```

---

# Master Challenge

```js
const employees = [
  {
    id: 1,
    name: "Sai",
    department: "IT",
    salary: 60000
  },
  {
    id: 2,
    name: "John",
    department: "HR",
    salary: 50000
  }
];
```

Transform into:

```js
[
  {
    employeeId: 1,
    employeeName: "Sai",
    department: "IT",
    yearlySalary: 720000
  },
  {
    employeeId: 2,
    employeeName: "John",
    department: "HR",
    yearlySalary: 600000
  }
]
```
