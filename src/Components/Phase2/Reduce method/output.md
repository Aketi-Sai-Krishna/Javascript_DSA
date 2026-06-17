These are exactly the kinds of questions a Frontend/React interviewer may ask. Let's answer them in a way that's suitable for interviews.

---

# Beginner

## 1. What is map()?

`map()` is an array method that creates a new array by transforming each element of the original array.

Example:

```js
const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);

console.log(doubled);
```

Output:

```js
[2, 4, 6]
```

**Interview Answer:**

> map() iterates over an array, applies a transformation to every element, and returns a new array of the same length.

---

## 2. What is filter()?

`filter()` creates a new array containing only the elements that satisfy a condition.

Example:

```js
const numbers = [1, 2, 3, 4];

const even = numbers.filter(num => num % 2 === 0);
```

Output:

```js
[2, 4]
```

**Interview Answer:**

> filter() returns a new array containing only the elements for which the callback returns true.

---

## 3. What is reduce()?

`reduce()` processes all elements of an array and combines them into a single value.

Example:

```js
const numbers = [1, 2, 3, 4];

const total = numbers.reduce(
  (acc, curr) => acc + curr,
  0
);
```

Output:

```js
10
```

**Interview Answer:**

> reduce() iterates through an array and accumulates values into a single result such as a sum, object, count, or grouped data.

---

## 4. Difference between map() and forEach()?

| map()                   | forEach()             |
| ----------------------- | --------------------- |
| Returns a new array     | Returns undefined     |
| Used for transformation | Used for side effects |
| Can be chained          | Usually not chained   |

Example:

```js
numbers.map(n => n * 2);
```

returns:

```js
[2,4,6]
```

while

```js
numbers.forEach(n => console.log(n));
```

returns:

```js
undefined
```

---

## 5. Does map() modify the original array?

No.

Example:

```js
const arr = [1, 2, 3];

const doubled = arr.map(n => n * 2);
```

Original:

```js
[1,2,3]
```

New:

```js
[2,4,6]
```

**Interview Answer:**

> No. map() is immutable and returns a new array without modifying the original array.

---

## 6. What does filter() return?

It returns a new array containing only elements that pass the condition.

Example:

```js
const result = [1,2,3,4]
.filter(n => n > 2);
```

Returns:

```js
[3,4]
```

---

## 7. Why is reduce() called reduce()?

Because it reduces multiple values into a single value.

Example:

```js
[1,2,3,4]
```

becomes:

```js
10
```

Many values:

```js
4
```

One value:

```js
1
```

---

# Intermediate

## 8. Difference between map() and filter()?

### map()

Transforms every element.

```js
[1,2,3].map(n => n * 2);
```

Output:

```js
[2,4,6]
```

### filter()

Keeps only matching elements.

```js
[1,2,3].filter(n => n > 1);
```

Output:

```js
[2,3]
```

**Interview Answer:**

> map transforms items while filter selects items.

---

## 9. When should you use reduce() instead of map()?

Use reduce when you need one final result.

Examples:

* Sum
* Average
* Count
* Grouping
* Object creation

Example:

```js
const total = prices.reduce(
  (sum, price) => sum + price,
  0
);
```

---

## 10. Can map() return objects?

Yes.

Example:

```js
const users = ["Sai", "John"];

const result = users.map(name => ({
  name
}));
```

Output:

```js
[
  { name: "Sai" },
  { name: "John" }
]
```

---

## 11. What happens if filter() returns false?

That element is excluded from the resulting array.

Example:

```js
[1,2,3].filter(n => n > 2);
```

Checks:

```js
1 -> false
2 -> false
3 -> true
```

Result:

```js
[3]
```

---

## 12. Explain accumulator in reduce().

Accumulator (`acc`) stores the running result during each iteration.

Example:

```js
[1,2,3].reduce(
  (acc, curr) => acc + curr,
  0
);
```

Steps:

```js
acc = 0

0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
```

Final:

```js
6
```

**Interview Answer:**

> The accumulator is a variable that stores the intermediate result across iterations and becomes the final result returned by reduce().

---

## 13. What is the initial value in reduce()?

The second argument passed to reduce().

Example:

```js
reduce(callback, 0)
```

Here:

```js
0
```

is the initial value.

Example:

```js
const total = [1,2,3]
.reduce((acc,curr)=>acc+curr,0);
```

---

# Advanced

## 14. Implement map() manually

```js
Array.prototype.myMap = function(callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(
      callback(this[i], i, this)
    );
  }

  return result;
};
```

---

## 15. Implement filter() manually

```js
Array.prototype.myFilter = function(callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};
```

---

## 16. Implement reduce() manually

```js
Array.prototype.myReduce = function(
  callback,
  initialValue
) {
  let acc = initialValue;

  for (let i = 0; i < this.length; i++) {
    acc = callback(
      acc,
      this[i],
      i,
      this
    );
  }

  return acc;
};
```

---

## 17. Group objects by category using reduce()

```js
const products = [
  { category: "Electronics", name: "Phone" },
  { category: "Books", name: "JS Book" },
  { category: "Electronics", name: "Laptop" }
];

const grouped = products.reduce(
  (acc, curr) => {

    if (!acc[curr.category]) {
      acc[curr.category] = [];
    }

    acc[curr.category].push(curr);

    return acc;
  },
  {}
);
```

---

## 18. Calculate average using reduce()

```js
const numbers = [10,20,30];

const avg =
  numbers.reduce(
    (sum,n)=>sum+n,
    0
  ) / numbers.length;

console.log(avg);
```

Output:

```js
20
```

---

## 19. Chain map(), filter(), and reduce()

```js
const numbers = [1,2,3,4,5];
```

Steps:

1. Keep even numbers
2. Double them
3. Sum them

```js
const result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 2)
  .reduce(
    (sum,n) => sum + n,
    0
  );
```

Output:

```js
12
```

Explanation:

```js
[1,2,3,4,5]

↓

[2,4]

↓

[4,8]

↓

12
```

---

## 20. Why are these methods preferred over loops in React?

### Readability

```js
users
  .filter(user => user.active)
  .map(user => user.name);
```

is easier to understand than a long loop.

---

### Immutability

React prefers creating new arrays instead of mutating existing ones.

```js
map()
filter()
reduce()
```

return new values.

---

### Declarative Style

React focuses on **what** to render instead of **how** to iterate.

Example:

```jsx
users.map(user => (
  <li key={user.id}>
    {user.name}
  </li>
));
```

---

### Easier Chaining

```js
users
  .filter(user => user.active)
  .map(user => user.name)
  .sort();
```

Cleaner than nested loops.

---

### Interview Summary

Remember these one-line definitions:

* **map()** → Transform every item and return a new array.
* **filter()** → Select matching items and return a new array.
* **reduce()** → Combine all items into a single value.
* **forEach()** → Execute a function for each item, returns nothing.
* **Accumulator** → Running result inside reduce().
* **React uses map heavily** for rendering lists and filter/reduce for derived state and calculations.
