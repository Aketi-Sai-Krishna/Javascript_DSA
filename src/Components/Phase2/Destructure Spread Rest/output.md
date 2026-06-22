# DAY 16 — Questions 1–45 (Answers)

---

# 1. Destructure `[10,20,30]` into `a`, `b`, `c`

```js
const [a, b, c] = [10, 20, 30];

console.log(a, b, c);
```

---

# 2. Print only the first element using destructuring

```js
const [first] = [10, 20, 30];

console.log(first);
```

---

# 3. Extract first and third values from an array

```js
const [first, , third] = [10, 20, 30];

console.log(first, third);
```

---

# 4. Use a default value in array destructuring

```js
const [a, b = 100] = [10];

console.log(a, b);
```

---

# 5. Destructure `{name:"Sai", age:25}`

```js
const user = {
  name: "Sai",
  age: 25
};

const { name, age } = user;

console.log(name, age);
```

---

# 6. Print only `name` from an object

```js
const user = {
  name: "Sai",
  age: 25
};

const { name } = user;

console.log(name);
```

---

# 7. Rename `name` to `userName`

```js
const user = {
  name: "Sai"
};

const { name: userName } = user;

console.log(userName);
```

---

# 8. Use a default value for `city`

```js
const user = {
  name: "Sai"
};

const { city = "Vizag" } = user;

console.log(city);
```

---

# 9. Copy an array using spread

```js
const arr = [1, 2, 3];

const copy = [...arr];

console.log(copy);
```

---

# 10. Copy an object using spread

```js
const user = {
  name: "Sai"
};

const copy = { ...user };

console.log(copy);
```

---

# 11. Merge two arrays

```js
const a = [1, 2];
const b = [3, 4];

const merged = [...a, ...b];

console.log(merged);
```

---

# 12. Merge two objects

```js
const obj1 = {
  name: "Sai"
};

const obj2 = {
  age: 25
};

const merged = {
  ...obj1,
  ...obj2
};

console.log(merged);
```

---

# 13. Add a new element to an array using spread

```js
const arr = [1, 2, 3];

const updated = [...arr, 4];

console.log(updated);
```

---

# 14. Update an object property using spread

```js
const user = {
  name: "Sai",
  age: 25
};

const updatedUser = {
  ...user,
  age: 30
};

console.log(updatedUser);
```

---

# 15. Use rest to collect remaining array values

```js
const [first, ...rest] = [1, 2, 3, 4, 5];

console.log(first);
console.log(rest);
```

---

# 16. Extract first two elements and store remaining elements using rest

```js
const [first, second, ...remaining] = [10,20,30,40,50];

console.log(first);
console.log(second);
console.log(remaining);
```

---

# 17. Destructure a nested object and extract city

```js
const student = {
  address: {
    city: "Vizag"
  }
};

const {
  address: { city }
} = student;

console.log(city);
```

---

# 18. Merge three arrays into one

```js
const merged = [...[1,2], ...[3,4], ...[5,6]];

console.log(merged);
```

---

# 19. Create a function that accepts unlimited numbers using rest

```js
function showNumbers(...numbers) {
  console.log(numbers);
}

showNumbers(1,2,3,4,5);
```

---

# 20. Return the sum of all numbers using rest parameters

```js
function sum(...numbers) {
  let total = 0;

  for (let num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(10,20,30));
```

---

# 21. Find the largest number from rest parameters

```js
function largest(...numbers) {
  return Math.max(...numbers);
}

console.log(largest(5,10,50,25));
```

---

# 22. Remove one property from an object using destructuring + rest

```js
const user = {
  name: "Sai",
  age: 25,
  city: "Vizag"
};

const { age, ...remaining } = user;

console.log(remaining);
```

---

# 23. Clone an object and update one property

```js
const user = {
  name: "Sai",
  age: 25
};

const updated = {
  ...user,
  age: 30
};

console.log(updated);
```

---

# 24. Clone an array and add multiple elements

```js
const arr = [1,2,3];

const updated = [
  ...arr,
  4,
  5,
  6
];

console.log(updated);
```

---

# 25. Merge two student objects

```js
const student1 = {
  name: "Sai"
};

const student2 = {
  age: 25
};

const merged = {
  ...student1,
  ...student2
};

console.log(merged);
```

---

# 26. Swap two variables using destructuring

```js
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a, b);
```

---

# 27. Extract only required properties from a user object

```js
const user = {
  name: "Sai",
  age: 25,
  city: "Vizag"
};

const { name, city } = user;

console.log(name, city);
```

---

# 28. Use rest with object destructuring

```js
const user = {
  name: "Sai",
  age: 25,
  city: "Vizag"
};

const { name, ...others } = user;

console.log(others);
```

---

# 29. Merge nested arrays using spread

```js
const arr1 = [1,2];
const arr2 = [3,4];
const arr3 = [5,6];

const merged = [
  ...arr1,
  ...arr2,
  ...arr3
];

console.log(merged);
```

---

# 30. Why does spread create only a shallow copy?

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

Output:

```js
Hyderabad
```

Because nested objects share the same reference.

---

# REACT LEVEL (31–45)

---

# 31. Destructure props inside a React component

```jsx
function User({ name, age }) {
  return <h1>{name}</h1>;
}
```

---

# 32. Destructure state variables

```jsx
const [count, setCount] = useState(0);
```

---

# 33. Update a user object using spread

```js
setUser({
  ...user,
  age: 30
});
```

---

# 34. Update an array state using spread

```js
setItems([
  ...items,
  "New Item"
]);
```

---

# 35. Add a new todo item using spread

```js
setTodos([
  ...todos,
  newTodo
]);
```

---

# 36. Remove a property using destructuring and rest

```js
const { password, ...safeUser } = user;
```

---

# 37. Create a reusable component using prop destructuring

```jsx
function Button({ text }) {
  return <button>{text}</button>;
}
```

---

# 38. Pass multiple arguments using rest parameters

```js
function display(...values) {
  console.log(values);
}
```

---

# 39. Why does React prefer immutable updates?

```text
React compares references.

New reference = State changed.

Same reference = No update detected.
```

---

# 40. Why is direct state mutation bad?

```js
user.age = 30;
```

Bad because React may not re-render.

Use:

```js
setUser({
  ...user,
  age: 30
});
```

---

# 41. Update a nested object using spread

```js
setUser({
  ...user,
  address: {
    ...user.address,
    city: "Hyderabad"
  }
});
```

---

# 42. Update an array of objects using spread

```js
const updated = users.map(user =>
  user.id === 1
    ? { ...user, age: 30 }
    : user
);
```

---

# 43. How does React detect state changes?

```text
React uses reference comparison.

Old Object !== New Object

Then React re-renders.
```

---

# 44. Why are shallow copies important in React?

```text
They create new references.

React detects changes and updates the UI.
```

---

# 45. Where is destructuring used daily in React?

```text
1. Props
2. useState
3. API responses
4. Context API
5. Zustand
6. Redux
7. Component parameters
8. Event objects
```

These 45 questions cover almost everything a React developer uses daily regarding **Destructuring, Spread, and Rest Operators**.
