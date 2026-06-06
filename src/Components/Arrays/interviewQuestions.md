# DAY 8 — Arrays Interview Questions Roadmap

## Beginner → Intermediate → Industry → FAANG → DSA Level

---

# LEVEL 1 — Array Basics (1–20)

### Focus

* Creating Arrays
* Accessing Elements
* Updating Elements
* Length

---

## 1. What is an array?

---

## 2. Why do we use arrays?

---

## 3. How do you create an empty array?

---

## 4. Create an array of numbers.

---

## 5. Create an array of strings.

---

## 6. Can an array store different data types?

---

## 7. What is an index in an array?

---

## 8. At which index does an array start?

---

## 9. What is the output?

```js
const arr = [10, 20, 30];
console.log(arr[0]);
```

---

## 10. What is the output?

```js
const arr = [10, 20, 30];
console.log(arr[2]);
```

---

## 11. How do you access the second element?

---

## 12. How do you access the last element?

---

## 13. What is `.length`?

---

## 14. Find the length:

```js
const fruits = ["Apple", "Mango", "Banana"];
```

---

## 15. How do you update an element in an array?

---

## 16. What is the output?

```js
const arr = [10,20,30];

arr[1] = 100;

console.log(arr);
```

---

## 17. Are arrays mutable or immutable?

---

## 18. Why are arrays considered mutable?

---

## 19. Can arrays contain other arrays?

---

## 20. What is a nested array?

---

# LEVEL 2 — Push, Pop, Shift, Unshift (21–35)

### Focus

* Adding Elements
* Removing Elements

---

## 21. What does `push()` do?

---

## 22. Add `"Banana"` to:

```js
["Apple", "Mango"]
```

using `push()`.

---

## 23. What does `push()` return?

---

## 24. What does `pop()` do?

---

## 25. What does `pop()` return?

---

## 26. What is the output?

```js
const arr = [10,20,30];

arr.pop();

console.log(arr);
```

---

## 27. Difference between `push()` and `pop()`.

---

## 28. What does `shift()` do?

---

## 29. What does `unshift()` do?

---

## 30. Difference between `shift()` and `pop()`.

---

## 31. Difference between `push()` and `unshift()`.

---

## 32. What is the output?

```js
const arr = [20,30];

arr.unshift(10);

console.log(arr);
```

---

## 33. What is the output?

```js
const arr = [10,20,30];

arr.shift();

console.log(arr);
```

---

## 34. Which is faster: `push()` or `unshift()`?

---

## 35. Why is `shift()` slower than `pop()`?

---

# LEVEL 3 — Looping Arrays (36–50)

### Focus

* Traversal
* Iteration

---

## 36. How do you loop through an array using `for`?

---

## 37. How do you loop through an array using `while`?

---

## 38. Print all elements of:

```js
[10,20,30,40]
```

---

## 39. Why do we use `arr.length` in loops?

---

## 40. What happens if you use:

```js
i <= arr.length
```

instead of:

```js
i < arr.length
```

?

---

## 41. Print all elements in reverse order.

---

## 42. Count total elements in an array.

---

## 43. Find the first element.

---

## 44. Find the last element.

---

## 45. Print only even numbers from an array.

---

## 46. Print only odd numbers from an array.

---

## 47. Count even numbers in an array.

---

## 48. Count odd numbers in an array.

---

## 49. Print index and value together.

---

## 50. Explain array traversal.

---

# LEVEL 4 — Sum, Max, Min (51–65)

### Focus

* DSA Foundation

---

## 51. Find the sum of all elements.

---

## 52. Find the average of an array.

---

## 53. Find the largest element.

---

## 54. Find the smallest element.

---

## 55. Count positive numbers.

---

## 56. Count negative numbers.

---

## 57. Count zeros.

---

## 58. Find the product of all elements.

---

## 59. Find the difference between max and min.

---

## 60. Find the second largest number.

---

## 61. Find the second smallest number.

---

## 62. Check whether an array is empty.

---

## 63. Find the sum of only even numbers.

---

## 64. Find the sum of only odd numbers.

---

## 65. Find the total number of elements greater than 50.

---

# LEVEL 5 — slice() and splice() (66–75)

### Focus

* Array Manipulation

---

## 66. What does `slice()` do?

---

## 67. Does `slice()` modify the original array?

---

## 68. What is the output?

```js
const arr = [10,20,30,40,50];

console.log(arr.slice(1,4));
```

---

## 69. What does `splice()` do?

---

## 70. Does `splice()` modify the original array?

---

## 71. Remove two elements using `splice()`.

---

## 72. Add elements using `splice()`.

---

## 73. Replace elements using `splice()`.

---

## 74. Difference between `slice()` and `splice()`.

---

## 75. Which method is safer when you don't want to modify data?

---

# LEVEL 6 — includes(), indexOf(), join(), reverse(), concat() (76–85)

### Focus

* Common Interview Methods

---

## 76. What does `includes()` do?

---

## 77. What is the output?

```js
const fruits = ["Apple","Mango"];

console.log(fruits.includes("Mango"));
```

---

## 78. What does `indexOf()` do?

---

## 79. What is returned if an element is not found?

---

## 80. Difference between `includes()` and `indexOf()`.

---

## 81. What does `join()` do?

---

## 82. Convert an array into a string using `join()`.

---

## 83. What does `reverse()` do?

---

## 84. What does `concat()` do?

---

## 85. Merge two arrays using `concat()`.

---

# LEVEL 7 — Industry Level (86–95)

### Focus

* Internal Working
* Memory

---

## 86. How are arrays stored internally in JavaScript?

---

## 87. Why are arrays considered objects in JavaScript?

---

## 88. Why does array indexing start from 0?

---

## 89. Explain mutable vs immutable arrays.

---

## 90. What is the time complexity of `push()`?

---

## 91. What is the time complexity of `pop()`?

---

## 92. What is the time complexity of `shift()`?

---

## 93. What is the time complexity of `unshift()`?

---

## 94. Why are `push()` and `pop()` preferred in DSA?

---

## 95. Why are arrays the foundation of most DSA problems?

---

# LEVEL 8 — FAANG + DSA Thinking (96–110)

### Focus

* Problem Solving
* Algorithm Thinking

---

## 96. Reverse an array without using `reverse()`.

---

## 97. Find duplicate elements in an array.

---

## 98. Remove duplicates from an array.

---

## 99. Find the frequency of each element.

---

## 100. Check if an element exists without using `includes()`.

---

## 101. Find the largest and smallest element in one traversal.

---

## 102. Move all zeros to the end.

---

## 103. Move all negative numbers to the beginning.

---

## 104. Find the missing number from:

```js
[1,2,3,5]
```

---

## 105. Rotate an array by one position.

---

## 106. Rotate an array by k positions.

---

## 107. Find the intersection of two arrays.

---

## 108. Find the union of two arrays.

---

## 109. Explain how arrays are used in:

* Stacks
* Queues

---

## 110. Explain why arrays are the starting point for:

* Searching
* Sorting
* Sliding Window
* Two Pointers
* Dynamic Programming

---

# Skills Covered

```text
✓ Array Basics
✓ Indexing
✓ Length
✓ Updating Values
✓ push()
✓ pop()
✓ shift()
✓ unshift()
✓ slice()
✓ splice()
✓ includes()
✓ indexOf()
✓ join()
✓ reverse()
✓ concat()
✓ Looping Arrays
✓ Sum Arrays
✓ Max/Min
✓ Time Complexity
✓ Memory Concepts
✓ DSA Foundations
✓ FAANG-Level Array Thinking
```

This roadmap takes you from **absolute beginner array questions** all the way to the **array concepts typically tested in frontend, React, JavaScript, and DSA interviews**.
