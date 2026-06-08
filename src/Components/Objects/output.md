# JavaScript Objects — Questions & Answers (1–30)

---

## 1. What is an object in JavaScript?

An object is a collection of related data stored as key-value pairs.

```js
const user = {
  name: "Sai",
  age: 25
};
```

---

## 2. Why do we use objects?

Objects help organize related data into a single structure, making it easier to manage and access.

---

## 3. How do you create an empty object?

```js
const obj = {};
```

---

## 4. Create an object with name and age properties.

```js
const person = {
  name: "Sai",
  age: 25
};
```

---

## 5. What is a key in an object?

A key is the property name used to access a value.

```js
const user = {
  name: "Sai"
};
```

Key:

```text
name
```

---

## 6. What is a value in an object?

A value is the data associated with a key.

```js
const user = {
  name: "Sai"
};
```

Value:

```text
"Sai"
```

---

## 7. What is a key-value pair?

A property consisting of a key and its value.

```js
name: "Sai"
```

---

## 8. How do you access a property using dot notation?

```js
user.name
```

---

## 9. How do you access a property using bracket notation?

```js
user["name"]
```

---

## 10. What is the output?

```js
const user = {
  name: "Sai"
};

console.log(user.name);
```

Output:

```text
Sai
```

---

## 11. What is the output?

```js
const user = {
  name: "Sai"
};

console.log(user["name"]);
```

Output:

```text
Sai
```

---

## 12. When should you use bracket notation?

When property names are dynamic or contain spaces.

```js
const user = {
  "first name": "Sai"
};

console.log(user["first name"]);
```

---

## 13. What happens if a property does not exist?

JavaScript returns:

```text
undefined
```

Example:

```js
console.log(user.city);
```

---

## 14. What is the output?

```js
const obj = {};

console.log(typeof obj);
```

Output:

```text
object
```

---

## 15. Can object keys contain spaces?

Yes.

```js
const user = {
  "first name": "Sai"
};
```

---

## 16. How do you access a key with spaces?

Using bracket notation.

```js
user["first name"]
```

---

## 17. Can object values have different data types?

Yes.

```js
const user = {
  name: "Sai",
  age: 25,
  isLoggedIn: true,
  city: null
};
```

---

## 18. Can objects store arrays?

Yes.

```js
const user = {
  skills: ["HTML", "CSS", "JavaScript"]
};
```

---

## 19. Can objects store other objects?

Yes.

```js
const user = {
  address: {
    city: "Hyderabad"
  }
};
```

---

## 20. Why are objects important in JavaScript?

They are used in:

```text
APIs
React State
Props
JSON
Redux
Zustand
Node.js
Databases
```

---

# Adding, Updating, Deleting Properties

---

## 21. How do you add a new property to an object?

```js
const user = {
  name: "Sai"
};

user.age = 25;
```

---

## 22. How do you update an existing property?

```js
user.age = 26;
```

---

## 23. How do you delete a property?

```js
delete user.age;
```

---

## 24. What is the output?

```js
const user = {
  name: "Sai"
};

user.age = 25;

console.log(user);
```

Output:

```js
{
  name: "Sai",
  age: 25
}
```

---

## 25. What is the output?

```js
const user = {
  name: "Sai",
  age: 25
};

delete user.age;

console.log(user);
```

Output:

```js
{
  name: "Sai"
}
```

---

## 26. Are objects mutable or immutable?

```text
Mutable
```

---

## 27. Why are objects mutable?

Because their properties can be added, updated, or deleted after creation.

---

## 28. What is the output?

```js
const user = {
  name: "Sai"
};

user.name = "Krishna";

console.log(user.name);
```

Output:

```text
Krishna
```

---

## 29. Can you modify an object declared with `const`?

Yes.

```js
const user = {
  name: "Sai"
};

user.name = "Krishna";
```

---

## 30. Why is this allowed?

```js
const user = {
  name: "Sai"
};

user.name = "Krishna";
```

Because `const` prevents reassignment of the variable, not modification of the object's properties.

```js
// Allowed
user.name = "Krishna";

// Not Allowed
user = {};
```

---

# JavaScript Objects — Questions & Answers (31–60)

---

# References, Memory & Copying Objects

---

## 31. What cannot be done with a const object?

A const object variable cannot be reassigned to a new object.

```js
const user = {
  name: "Sai"
};

// ❌ Error
user = {};
```

---

## 32. Difference between modifying an object and reassigning an object.

### Modifying

```js
user.name = "Krishna";
```

Changes properties of the existing object.

### Reassigning

```js
user = {};
```

Makes the variable point to a completely new object.

---

## 33. What is the output?

```js
const user = {
  name: "Sai"
};

user = {};
```

Output:

```text
TypeError
```

---

## 34. Why does the above code throw an error?

Because `const` variables cannot be reassigned after declaration.

---

## 35. Explain object mutability with an example.

```js
const user = {
  name: "Sai"
};

user.name = "Krishna";
user.age = 25;

console.log(user);
```

Output:

```js
{
  name: "Krishna",
  age: 25
}
```

Objects are mutable because their properties can be changed.

---

## 36. Are objects stored by value or reference?

```text
Reference
```

---

## 37. Where are objects stored in memory?

```text
Heap Memory
```

---

## 38. What does a variable store when it points to an object?

The variable stores a reference (memory address) to the object.

---

## 39. What is the output?

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

## 40. Why does the above output occur?

Because both variables point to the same object in memory.

---

## 41. Explain object references.

An object reference is a value stored in a variable that points to an object's location in memory.

---

## 42. What is shared reference?

When two or more variables point to the same object.

```js
const user2 = user1;
```

---

## 43. What is the danger of shared references?

Changes made through one variable affect all variables referencing that object.

---

## 44. What is shallow copy?

A shallow copy creates a new object while copying the top-level properties.

---

## 45. How do you create a shallow copy?

Using the spread operator.

```js
const copy = { ...user };
```

---

## 46. What is the output?

```js
const user1 = {
  name: "Sai"
};

const user2 = { ...user1 };

user2.name = "Krishna";

console.log(user1.name);
```

Output:

```text
Sai
```

---

## 47. Difference between assignment and shallow copy.

### Assignment

```js
const user2 = user1;
```

Both variables share the same object.

### Shallow Copy

```js
const user2 = { ...user1 };
```

Creates a new object.

---

## 48. Why is shallow copying important in React?

React detects state changes using reference changes.

Creating a new object helps React re-render correctly.

---

## 49. What is garbage collection?

Garbage collection is JavaScript's automatic memory cleanup process.

Unused objects are removed from memory.

---

## 50. How does garbage collection work with objects?

If no variable references an object anymore, it becomes eligible for garbage collection.

---

# Object Methods

---

## 51. What does `Object.keys()` do?

Returns an array of all keys.

```js
const user = {
  name: "Sai",
  age: 25
};

console.log(Object.keys(user));
```

Output:

```js
["name", "age"]
```

---

## 52. What does `Object.values()` do?

Returns an array of all values.

```js
console.log(Object.values(user));
```

Output:

```js
["Sai", 25]
```

---

## 53. What does `Object.entries()` do?

Returns key-value pairs as nested arrays.

```js
console.log(Object.entries(user));
```

Output:

```js
[
  ["name", "Sai"],
  ["age", 25]
]
```

---

## 54. What is the output?

```js
const user = {
  name: "Sai",
  age: 25
};

console.log(Object.keys(user));
```

Output:

```js
["name", "age"]
```

---

## 55. What is the output?

```js
const user = {
  name: "Sai",
  age: 25
};

console.log(Object.values(user));
```

Output:

```js
["Sai", 25]
```

---

## 56. What is the output?

```js
const user = {
  name: "Sai",
  age: 25
};

console.log(Object.entries(user));
```

Output:

```js
[
  ["name", "Sai"],
  ["age", 25]
]
```

---

## 57. What data type does `Object.keys()` return?

```text
Array
```

---

## 58. Why is `Object.entries()` useful?

It allows easy iteration over both keys and values.

```js
for (const [key, value] of Object.entries(user)) {
  console.log(key, value);
}
```

---

## 59. How do you count object properties?

```js
const count = Object.keys(user).length;
```

---

## 60. How do you check whether a property exists?

Using the `in` operator.

```js
"name" in user
```

Output:

```text
true
```

Or:

```js
user.hasOwnProperty("name")
```

Output:

```text
true
```

---

# JavaScript Objects — Questions & Answers (61–90)

---

# Looping Objects

---

## 61. Difference between `obj.key` and `obj["key"]`.

### Dot Notation

```js
obj.name
```

Used when property name is known.

### Bracket Notation

```js
obj["name"]
```

Used for dynamic property names.

---

## 62. What is `hasOwnProperty()`?

Checks whether an object contains a specific property.

```js
const user = {
  name: "Sai"
};

console.log(user.hasOwnProperty("name"));
```

Output:

```text
true
```

---

## 63. Why is `Object.keys(obj).length` commonly used?

To count the number of properties.

```js
Object.keys(user).length
```

---

## 64. How do you get all keys of an object?

```js
Object.keys(user)
```

---

## 65. How do you get all values of an object?

```js
Object.values(user)
```

---

## 66. How do you loop through an object?

Using:

```js
for...in
```

---

## 67. What is `for...in`?

A loop used to iterate through object keys.

```js
for(let key in user){
   console.log(key);
}
```

---

## 68. Print all keys from an object.

```js
const user = {
  name: "Sai",
  age: 25
};

for(let key in user){
  console.log(key);
}
```

Output:

```text
name
age
```

---

## 69. Print all values from an object.

```js
for(let key in user){
  console.log(user[key]);
}
```

Output:

```text
Sai
25
```

---

## 70. Print both keys and values.

```js
for(let key in user){
  console.log(key, user[key]);
}
```

Output:

```text
name Sai
age 25
```

---

## 71. What is the output?

```js
const user = {
  name: "Sai",
  age: 25
};

for(let key in user){
  console.log(key);
}
```

Output:

```text
name
age
```

---

## 72. What is the output?

```js
for(let key in user){
  console.log(user[key]);
}
```

Output:

```text
Sai
25
```

---

## 73. Why do we use bracket notation inside `for...in`?

Because `key` is a variable.

```js
user[key]
```

Works.

```js
user.key
```

Looks for a literal property called `"key"`.

---

## 74. Can `for...of` directly iterate over objects?

```text
No
```

Objects are not iterable by default.

---

## 75. How can you use `for...of` with objects?

```js
for(const [key,value] of Object.entries(user)){
   console.log(key,value);
}
```

---

# Nested Objects

---

## 76. What is a nested object?

An object inside another object.

```js
const student = {
  address: {
    city: "Hyderabad"
  }
};
```

---

## 77. Create a nested object.

```js
const employee = {
  name: "Sai",

  company: {
    name: "Ova",
    city: "Bangalore"
  }
};
```

---

## 78. Access a nested property.

```js
employee.company.name
```

---

## 79. What is the output?

```js
const student = {
  address: {
    city: "Hyderabad"
  }
};

console.log(student.address.city);
```

Output:

```text
Hyderabad
```

---

## 80. Can nested objects contain arrays?

```text
Yes
```

Example:

```js
const user = {
  skills: ["HTML","CSS","JS"]
};
```

---

## 81. Can arrays contain objects?

```text
Yes
```

---

## 82. What is an array of objects?

Multiple objects stored inside an array.

```js
const students = [
  {
    name: "Sai"
  },
  {
    name: "Krishna"
  }
];
```

---

## 83. Why are nested objects common in APIs?

Because real-world data naturally contains relationships.

Example:

```js
{
  user: {
    profile: {
      address: {}
    }
  }
}
```

---

## 84. Explain a real-world nested object example.

```js
const student = {
  name: "Sai",

  address: {
    city: "Hyderabad",
    state: "Telangana"
  },

  marks: {
    math: 90,
    science: 95
  }
};
```

---

## 85. Difference between object nesting and array nesting.

### Object Nesting

```js
{
  address: {
    city: "Hyderabad"
  }
}
```

### Array Nesting

```js
[
  [1,2],
  [3,4]
]
```

---

# React & Industry Level

---

## 86. Why are objects heavily used in React?

Because props and state are usually objects.

---

## 87. How are props represented internally?

```js
<MyComp name="Sai" age={25} />
```

Becomes:

```js
props = {
  name: "Sai",
  age: 25
};
```

---

## 88. How is React state commonly stored?

```js
const [user,setUser] = useState({
  name: "Sai",
  age: 25
});
```

---

## 89. Why should React state updates be immutable?

React detects changes using references.

New references trigger re-renders.

---

## 90. What happens if object references are mutated directly in React?

React may not detect changes correctly, leading to UI update issues.

---

# JavaScript Objects — Questions & Answers (91–110)

---

# JSON & FAANG Level

---

## 91. Why do APIs return objects?

Objects represent structured real-world data.

---

## 92. What is JSON?

JSON stands for:

```text
JavaScript Object Notation
```

A text format used for data exchange.

---

## 93. Difference between JSON and JavaScript objects.

### JavaScript Object

```js
{
  name: "Sai"
}
```

### JSON

```json
{
  "name": "Sai"
}
```

JSON requires double quotes around keys and strings.

---

## 94. What is serialization?

Converting an object into JSON.

```js
JSON.stringify(user);
```

---

## 95. What is deserialization?

Converting JSON back into an object.

```js
JSON.parse(jsonData);
```

---

## 96. Why are objects often called hash maps?

Because they store data as key-value pairs for fast lookup.

---

## 97. What is O(1) lookup?

Accessing data in constant time.

```js
user.name
```

---

## 98. Why is object lookup faster than array searching?

Objects use keys directly.

Arrays often require iteration.

---

## 99. Build a frequency counter using objects.

```js
const str = "aabbc";

const freq = {};

for(let char of str){
   freq[char] = (freq[char] || 0) + 1;
}

console.log(freq);
```

Output:

```js
{
  a: 2,
  b: 2,
  c: 1
}
```

---

## 100. Count occurrences of characters in a string using an object.

```js
const text = "hello";

const count = {};

for(let char of text){
   count[char] = (count[char] || 0) + 1;
}

console.log(count);
```

Output:

```js
{
  h:1,
  e:1,
  l:2,
  o:1
}
```

---

## 101. Find duplicate elements using an object.

```js
const arr = [1,2,2,3,3,4];

const freq = {};

for(let num of arr){
   freq[num] = (freq[num] || 0) + 1;
}

for(let key in freq){
   if(freq[key] > 1){
      console.log(key);
   }
}
```

Output:

```text
2
3
```

---

## 102. Remove duplicates using an object.

```js
const arr = [1,2,2,3,3,4];

const seen = {};
const result = [];

for(let num of arr){
   if(!seen[num]){
      seen[num] = true;
      result.push(num);
   }
}

console.log(result);
```

Output:

```text
[1,2,3,4]
```

---

## 103. Find the most frequent element.

```js
const arr = [1,1,1,2,2,3];

const freq = {};
let maxCount = 0;
let result;

for(let num of arr){
   freq[num] = (freq[num] || 0) + 1;

   if(freq[num] > maxCount){
      maxCount = freq[num];
      result = num;
   }
}

console.log(result);
```

Output:

```text
1
```

---

## 104. Explain lookup tables.

Objects used for extremely fast searching.

```js
const countries = {
  IN: "India",
  US: "United States"
};

console.log(countries["IN"]);
```

Output:

```text
India
```

---

## 105. What is memoization?

A technique that stores previously computed results to avoid recomputation.

---

## 106. How are objects used in memoization?

Objects store cached results.

```js
cache[input] = result;
```

---

## 107. What is caching?

Temporarily storing data for faster future access.

---

## 108. Why are objects used in caching?

Because key-based lookup is very fast.

---

## 109. Difference between Object and Map.

| Object                           | Map                      |
| -------------------------------- | ------------------------ |
| Keys are usually strings/symbols | Any data type can be key |
| Older structure                  | Newer ES6 structure      |
| Simpler                          | More powerful            |
| Less flexible                    | More flexible            |

---

## 110. When would you use Map instead of Object?

Use `Map` when:

```text
Keys are dynamic
Need frequent insertions/deletions
Need non-string keys
Need guaranteed insertion order
```

---

# Object Mastery Completed

```text
✓ Object Basics
✓ Keys & Values
✓ Dot Notation
✓ Bracket Notation
✓ Mutability
✓ References
✓ Heap Memory
✓ Shallow Copy
✓ Garbage Collection
✓ Object.keys()
✓ Object.values()
✓ Object.entries()
✓ for...in
✓ Nested Objects
✓ Arrays of Objects
✓ React State Objects
✓ Props Objects
✓ JSON
✓ Serialization
✓ Deserialization
✓ Hash Maps
✓ Frequency Counters
✓ Memoization
✓ Caching
✓ Object vs Map
✓ FAANG-Level Object Problems
```

**Next Recommended Topic (Day 10):**

```text
Array of Objects
JSON
Destructuring
Spread Operator
Rest Operator
```

These are heavily used in React, APIs, Zustand, Redux, and frontend interviews.
