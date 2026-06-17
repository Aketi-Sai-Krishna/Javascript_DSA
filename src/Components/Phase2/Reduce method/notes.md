Excellent. Day 15 is one of the most important days for React developers because **map, filter, and reduce** are used almost every day in React applications.

---

# DAY 15

## Learn

* map()
* filter()
* reduce()

## Why These Matter

Most frontend applications receive data from APIs:

```js
const users = [
  { id: 1, name: "Sai", age: 25 },
  { id: 2, name: "Krishna", age: 30 },
  { id: 3, name: "John", age: 20 }
];
```

You rarely use loops manually.

Instead:

* map → transform data
* filter → select data
* reduce → aggregate data

These are called **array iteration methods**.

---

# 1. map()

## Purpose

Creates a new array by transforming every element.

---

### Syntax

```js
array.map((item) => {
  return transformedItem;
});
```

---

### Example

```js
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);

console.log(doubled);
```

Output:

```js
[2, 4, 6, 8]
```

---

## How It Works

```js
1 → 2
2 → 4
3 → 6
4 → 8
```

Returns:

```js
[2,4,6,8]
```

Original array remains unchanged.

---

### Convert Names

```js
const names = ["sai", "krishna", "john"];

const upper = names.map(name => name.toUpperCase());

console.log(upper);
```

Output:

```js
["SAI","KRISHNA","JOHN"]
```

---

### Extract Property

```js
const users = [
  { name: "Sai", age: 25 },
  { name: "John", age: 30 }
];

const names = users.map(user => user.name);

console.log(names);
```

Output:

```js
["Sai", "John"]
```

---

# map() in React

Very important.

```jsx
const users = [
  { id: 1, name: "Sai" },
  { id: 2, name: "Krishna" }
];

return (
  <ul>
    {users.map(user => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);
```

React uses map constantly for rendering lists.

---

# 2. filter()

## Purpose

Returns only items that match a condition.

---

### Syntax

```js
array.filter(item => condition);
```

---

### Example

```js
const numbers = [1,2,3,4,5];

const even = numbers.filter(num => num % 2 === 0);

console.log(even);
```

Output:

```js
[2,4]
```

---

## How It Works

```js
1 → false
2 → true
3 → false
4 → true
5 → false
```

Only true values remain.

---

### Filter Adults

```js
const users = [
  { name: "Sai", age: 25 },
  { name: "John", age: 17 },
  { name: "Krishna", age: 30 }
];

const adults = users.filter(user => user.age >= 18);

console.log(adults);
```

Output:

```js
[
  { name: "Sai", age: 25 },
  { name: "Krishna", age: 30 }
]
```

---

### Search Example

```js
const products = [
  "Laptop",
  "Phone",
  "Tablet"
];

const result = products.filter(
  item => item.includes("Phone")
);

console.log(result);
```

Output:

```js
["Phone"]
```

---

# filter() in React

```jsx
const activeUsers = users.filter(
  user => user.active
);

return (
  <>
    {activeUsers.map(user => (
      <p key={user.id}>{user.name}</p>
    ))}
  </>
);
```

Very common.

---

# 3. reduce()

Most interview candidates struggle here.

---

## Purpose

Reduce many values into one value.

Examples:

* Sum
* Average
* Count
* Grouping
* Object creation

---

### Syntax

```js
array.reduce(
  (accumulator, currentValue) => {
    return updatedAccumulator;
  },
  initialValue
);
```

---

# Sum Example

```js
const numbers = [1,2,3,4];

const total = numbers.reduce(
  (acc, curr) => acc + curr,
  0
);

console.log(total);
```

Output:

```js
10
```

---

## How It Works

Start:

```js
acc = 0
```

Step 1

```js
0 + 1 = 1
```

Step 2

```js
1 + 2 = 3
```

Step 3

```js
3 + 3 = 6
```

Step 4

```js
6 + 4 = 10
```

Final:

```js
10
```

---

# Find Total Price

```js
const cart = [
  { name: "Phone", price: 1000 },
  { name: "Laptop", price: 2000 }
];

const total = cart.reduce(
  (acc, item) => acc + item.price,
  0
);

console.log(total);
```

Output:

```js
3000
```

---

# Count Occurrences

```js
const fruits = [
  "apple",
  "banana",
  "apple",
  "orange",
  "apple"
];

const count = fruits.reduce((acc, fruit) => {

  if (acc[fruit]) {
    acc[fruit]++;
  } else {
    acc[fruit] = 1;
  }

  return acc;

}, {});

console.log(count);
```

Output:

```js
{
  apple: 3,
  banana: 1,
  orange: 1
}
```

---

# Most Common React Usage

### Total Price

```js
cart.reduce(
  (sum, item) => sum + item.price,
  0
);
```

### Total Quantity

```js
cart.reduce(
  (sum, item) => sum + item.quantity,
  0
);
```

---

# map vs filter vs reduce

| Method | Returns   | Purpose        |
| ------ | --------- | -------------- |
| map    | Array     | Transform data |
| filter | Array     | Select data    |
| reduce | Any value | Aggregate data |

Example:

```js
const numbers = [1,2,3,4,5];
```

map:

```js
numbers.map(n => n * 2);

[2,4,6,8,10]
```

filter:

```js
numbers.filter(n => n > 3);

[4,5]
```

reduce:

```js
numbers.reduce(
  (acc,n) => acc + n,
  0
);

15
```

---

# Real React Example

Imagine API response:

```js
const products = [
  { id: 1, name: "Laptop", price: 1000, stock: true },
  { id: 2, name: "Phone", price: 500, stock: false },
  { id: 3, name: "Tablet", price: 800, stock: true }
];
```

Filter available products:

```js
const available = products.filter(
  p => p.stock
);
```

Transform names:

```js
const names = available.map(
  p => p.name
);
```

Calculate total price:

```js
const total = available.reduce(
  (sum,p) => sum + p.price,
  0
);
```

Result:

```js
names = ["Laptop","Tablet"]

total = 1800
```

---

# Interview Questions

### Beginner

1. What is map()?
2. What is filter()?
3. What is reduce()?
4. Difference between map and forEach?
5. Does map modify the original array?
6. What does filter return?
7. Why is reduce called reduce?

---

### Intermediate

8. Difference between map and filter?
9. When should you use reduce instead of map?
10. Can map return objects?
11. What happens if filter returns false?
12. Explain accumulator in reduce.
13. What is the initial value in reduce?

---

### Advanced

14. Implement map() manually.
15. Implement filter() manually.
16. Implement reduce() manually.
17. Group objects by category using reduce.
18. Calculate average using reduce.
19. Chain map, filter, and reduce together.
20. Why are these methods preferred over loops in React?

---

# Practice (Product Filtering)

### Problem 1

```js
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Tablet", price: 30000 }
];
```

Get all product names.

Expected:

```js
["Laptop","Phone","Tablet"]
```

---

### Problem 2

Filter products whose price is greater than 25000.

Expected:

```js
[
 { id:1, name:"Laptop", price:50000 },
 { id:3, name:"Tablet", price:30000 }
]
```

---

### Problem 3

Find total price of all products.

Expected:

```js
100000
```

---

### Problem 4

Get names of products whose price is greater than 25000.

Expected:

```js
["Laptop","Tablet"]
```

---

### Problem 5 (Interview Level)

```js
const orders = [
  { category: "Electronics", amount: 1000 },
  { category: "Books", amount: 500 },
  { category: "Electronics", amount: 2000 }
];
```

Output:

```js
{
  Electronics: 3000,
  Books: 500
}
```

Use `reduce()`.

---

