# DAY 16 NOTES (Interview Definitions)

## 1. Destructuring

### Definition

**Destructuring is a JavaScript syntax that allows values from arrays or properties from objects to be extracted and assigned to variables in a concise and readable way.**

### Key Points

* Extracts values from arrays and objects
* Does not modify the original array or object
* Improves code readability
* Commonly used in React props and state handling

### Example

```js
const user = {
  name: "Sai",
  age: 25
};

const { name, age } = user;
```

---

## 2. Spread Operator (...)

### Definition

**The spread operator expands the elements of an array or the properties of an object into individual values. It is commonly used for copying, merging, and updating arrays or objects.**

### Key Points

* Expands values
* Creates shallow copies
* Merges arrays and objects
* Commonly used in React state updates

### Example

```js
const numbers = [1, 2, 3];

const copy = [...numbers];
```

---

## 3. Rest Operator (...)

### Definition

**The rest operator collects multiple values and stores them into a single array or object. It is commonly used in destructuring and function parameters.**

### Key Points

* Collects remaining values
* Used with arrays
* Used with objects
* Used in function parameters

### Example

```js
const [first, ...rest] = [1,2,3,4];

console.log(rest);
```

Output:

```js
[2,3,4]
```

---

# Spread vs Rest (Interview Question)

| Spread                  | Rest                      |
| ----------------------- | ------------------------- |
| Expands values          | Collects values           |
| Used while copying      | Used while gathering      |
| `const copy = [...arr]` | `const [a,...rest] = arr` |

---

# React Interview Definition

### Why are Destructuring, Spread, and Rest Important in React?

They help developers:

* Extract props easily
* Update state immutably
* Copy arrays and objects safely
* Pass dynamic arguments
* Write cleaner and more maintainable code

Example:

```js
function User({ name, age }) {
  return <h1>{name}</h1>;
}
```

```js
setUser({
  ...user,
  age: 30
});
```

---

