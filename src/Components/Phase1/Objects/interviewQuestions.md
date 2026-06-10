# JavaScript Objects — Interview Questions

## Beginner → Intermediate → Advanced → Industry → FAANG Level

---

# Level 1 — Object Basics (1–20)

### 1. What is an object in JavaScript?

### 2. Why do we use objects?

### 3. How do you create an empty object?

### 4. Create an object with name and age properties.

### 5. What is a key in an object?

### 6. What is a value in an object?

### 7. What is a key-value pair?

### 8. How do you access a property using dot notation?

### 9. How do you access a property using bracket notation?

### 10. What is the output?

```js
const user = {
  name: "Sai"
};

console.log(user.name);
```

### 11. What is the output?

```js
const user = {
  name: "Sai"
};

console.log(user["name"]);
```

### 12. When should you use bracket notation?

### 13. What happens if a property does not exist?

```js
console.log(user.city);
```

### 14. What is the output?

```js
const obj = {};

console.log(typeof obj);
```

### 15. Can object keys contain spaces?

### 16. How do you access a key with spaces?

### 17. Can object values have different data types?

### 18. Can objects store arrays?

### 19. Can objects store other objects?

### 20. Why are objects important in JavaScript?

---

# Level 2 — Adding, Updating, Deleting Properties (21–35)

### 21. How do you add a new property to an object?

### 22. How do you update an existing property?

### 23. How do you delete a property?

### 24. What is the output?

```js
const user = {
  name: "Sai"
};

user.age = 25;

console.log(user);
```

### 25. What is the output?

```js
const user = {
  name: "Sai",
  age: 25
};

delete user.age;

console.log(user);
```

### 26. Are objects mutable or immutable?

### 27. Why are objects mutable?

### 28. What is the output?

```js
const user = {
  name: "Sai"
};

user.name = "Krishna";

console.log(user.name);
```

### 29. Can you modify an object declared with `const`?

### 30. Why is this allowed?

```js
const user = {
  name: "Sai"
};

user.name = "Krishna";
```

### 31. What cannot be done with a const object?

### 32. Difference between modifying an object and reassigning an object.

### 33. What is the output?

```js
const user = {
  name: "Sai"
};

user = {};
```

### 34. Why does the above code throw an error?

### 35. Explain object mutability with an example.

---

# Level 3 — References & Memory (36–50)

### 36. Are objects stored by value or reference?

### 37. Where are objects stored in memory?

### 38. What does a variable store when it points to an object?

### 39. What is the output?

```js
const user1 = {
  name: "Sai"
};

const user2 = user1;

user2.name = "Krishna";

console.log(user1.name);
```

### 40. Why does the above output occur?

### 41. Explain object references.

### 42. What is shared reference?

### 43. What is the danger of shared references?

### 44. What is shallow copy?

### 45. How do you create a shallow copy?

### 46. What is the output?

```js
const user1 = {
  name: "Sai"
};

const user2 = {...user1};

user2.name = "Krishna";

console.log(user1.name);
```

### 47. Difference between assignment and shallow copy.

### 48. Why is shallow copying important in React?

### 49. What is garbage collection?

### 50. How does garbage collection work with objects?

---

# Level 4 — Object Methods (51–65)

### 51. What does `Object.keys()` do?

### 52. What does `Object.values()` do?

### 53. What does `Object.entries()` do?

### 54. What is the output?

```js
const user = {
  name: "Sai",
  age: 25
};

console.log(Object.keys(user));
```

### 55. What is the output?

```js
console.log(Object.values(user));
```

### 56. What is the output?

```js
console.log(Object.entries(user));
```

### 57. What data type does `Object.keys()` return?

### 58. Why is `Object.entries()` useful?

### 59. How do you count object properties?

### 60. How do you check whether a property exists?

### 61. Difference between:

```js
obj.key
```

and

```js
obj["key"]
```

### 62. What is `hasOwnProperty()`?

### 63. Why is `Object.keys(obj).length` commonly used?

### 64. How do you get all keys of an object?

### 65. How do you get all values of an object?

---

# Level 5 — Looping Objects (66–75)

### 66. How do you loop through an object?

### 67. What is `for...in`?

### 68. Print all keys from an object.

### 69. Print all values from an object.

### 70. Print both keys and values.

### 71. What is the output?

```js
const user = {
  name: "Sai",
  age: 25
};

for(let key in user){
  console.log(key);
}
```

### 72. What is the output?

```js
for(let key in user){
  console.log(user[key]);
}
```

### 73. Why do we use bracket notation inside `for...in`?

### 74. Can `for...of` directly iterate over objects?

### 75. How can you use `for...of` with objects?

---

# Level 6 — Nested Objects (76–85)

### 76. What is a nested object?

### 77. Create a nested object.

### 78. Access a nested property.

### 79. What is the output?

```js
const student = {
  address: {
    city: "Hyderabad"
  }
};

console.log(student.address.city);
```

### 80. Can nested objects contain arrays?

### 81. Can arrays contain objects?

### 82. What is an array of objects?

### 83. Why are nested objects common in APIs?

### 84. Explain a real-world nested object example.

### 85. Difference between object nesting and array nesting.

---

# Level 7 — Industry & React Level (86–95)

### 86. Why are objects heavily used in React?

### 87. How are props represented internally?

### 88. How is React state commonly stored?

### 89. Why should React state updates be immutable?

### 90. What happens if object references are mutated directly in React?

### 91. Why do APIs return objects?

### 92. What is JSON?

### 93. Difference between JSON and JavaScript objects.

### 94. What is serialization?

### 95. What is deserialization?

---

# Level 8 — FAANG / DSA Level (96–110)

### 96. Why are objects often called hash maps?

### 97. What is O(1) lookup?

### 98. Why is object lookup faster than array searching?

### 99. Build a frequency counter using objects.

### 100. Count occurrences of characters in a string using an object.

### 101. Find duplicate elements using an object.

### 102. Remove duplicates using an object.

### 103. Find the most frequent element.

### 104. Explain lookup tables.

### 105. What is memoization?

### 106. How are objects used in memoization?

### 107. What is caching?

### 108. Why are objects used in caching?

### 109. Difference between Object and Map.

### 110. When would you use Map instead of Object?

---
