# JavaScript Arrays — Questions & Answers (1–30)

---

## 1. What is an array?

An array is a special data structure used to store multiple values in a single variable.

```js id="z5ejq6"
const fruits = ["Apple", "Mango", "Banana"];
```

---

## 2. Why do we use arrays?

Arrays help us store, manage, and access multiple values efficiently using a single variable.

---

## 3. How do you create an empty array?

```js id="8jchz8"
const arr = [];
```

---

## 4. Create an array of numbers.

```js id="ih7v95"
const numbers = [10, 20, 30, 40];
```

---

## 5. Create an array of strings.

```js id="i5ruxo"
const fruits = ["Apple", "Mango", "Banana"];
```

---

## 6. Can an array store different data types?

Yes.

```js id="hhx2vx"
const data = ["Sai", 25, true, null];
```

---

## 7. What is an index in an array?

An index is the position of an element in an array.

---

## 8. At which index does an array start?

Arrays start at index **0**.

---

## 9. What is the output?

```js id="eg2phq"
const arr = [10, 20, 30];
console.log(arr[0]);
```

Output:

```text id="owes80"
10
```

---

## 10. What is the output?

```js id="6vytfe"
const arr = [10, 20, 30];
console.log(arr[2]);
```

Output:

```text id="ckcg8j"
30
```

---

## 11. How do you access the second element?

```js id="r8f6co"
arr[1]
```

---

## 12. How do you access the last element?

```js id="dxszmn"
arr[arr.length - 1]
```

---

## 13. What is `.length`?

`.length` returns the total number of elements in an array.

---

## 14. Find the length.

```js id="7dgh7o"
const fruits = ["Apple", "Mango", "Banana"];
```

Answer:

```js id="b8jr5o"
fruits.length
```

Output:

```text id="nlulc4"
3
```

---

## 15. How do you update an element in an array?

```js id="7vk3lx"
arr[index] = newValue;
```

Example:

```js id="34a0x0"
fruits[1] = "Orange";
```

---

## 16. What is the output?

```js id="vlm4vj"
const arr = [10,20,30];

arr[1] = 100;

console.log(arr);
```

Output:

```text id="5ub5e1"
[10, 100, 30]
```

---

## 17. Are arrays mutable or immutable?

Arrays are **mutable**.

---

## 18. Why are arrays considered mutable?

Because their elements can be changed after creation.

---

## 19. Can arrays contain other arrays?

Yes.

```js id="6ejw6d"
const arr = [
  [1,2],
  [3,4]
];
```

---

## 20. What is a nested array?

An array inside another array.

```js id="lx2jhz"
const matrix = [
  [1,2],
  [3,4]
];
```

---

# Push, Pop, Shift, Unshift

---

## 21. What does `push()` do?

Adds one or more elements to the end of an array.

---

## 22. Add `"Banana"` using `push()`.

```js id="86l8j4"
const fruits = ["Apple", "Mango"];

fruits.push("Banana");
```

Result:

```text id="ewi1s7"
["Apple", "Mango", "Banana"]
```

---

## 23. What does `push()` return?

It returns the new length of the array.

Example:

```js id="g7j3j4"
const arr = [10,20];

const result = arr.push(30);

console.log(result);
```

Output:

```text id="k7ms3p"
3
```

---

## 24. What does `pop()` do?

Removes the last element from an array.

---

## 25. What does `pop()` return?

It returns the removed element.

Example:

```js id="m7chkt"
const arr = [10,20,30];

console.log(arr.pop());
```

Output:

```text id="g0kk6j"
30
```

---

## 26. What is the output?

```js id="wwhrsq"
const arr = [10,20,30];

arr.pop();

console.log(arr);
```

Output:

```text id="5ldp6x"
[10,20]
```

---

## 27. Difference between `push()` and `pop()`.

| push()         | pop()                   |
| -------------- | ----------------------- |
| Adds element   | Removes element         |
| End of array   | End of array            |
| Returns length | Returns removed element |

---

## 28. What does `shift()` do?

Removes the first element from an array.

---

## 29. What does `unshift()` do?

Adds one or more elements to the beginning of an array.

---

## 30. Difference between `shift()` and `pop()`.

| shift()               | pop()                 |
| --------------------- | --------------------- |
| Removes first element | Removes last element  |
| Re-indexes elements   | No re-indexing needed |
| O(n)                  | O(1)                  |

---
# JavaScript Arrays — Questions & Answers (31–60)

---

# Looping Arrays (31–50)

---

## 31. Difference between `push()` and `unshift()`.

| push()               | unshift()                     |
| -------------------- | ----------------------------- |
| Adds at the end      | Adds at the beginning         |
| O(1)                 | O(n)                          |
| No shifting required | Existing elements shift right |

---

## 32. What is the output?

```js id="a32"
const arr = [20,30];

arr.unshift(10);

console.log(arr);
```

Output:

```text id="a32o"
[10,20,30]
```

---

## 33. What is the output?

```js id="a33"
const arr = [10,20,30];

arr.shift();

console.log(arr);
```

Output:

```text id="a33o"
[20,30]
```

---

## 34. Which is faster: `push()` or `unshift()`?

```text id="a34o"
push()
```

Because it adds directly at the end without moving existing elements.

---

## 35. Why is `shift()` slower than `pop()`?

Because after removing the first element, JavaScript must re-index all remaining elements.

---

## 36. How do you loop through an array using `for`?

```js id="a36"
const arr = [10,20,30];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
```

---

## 37. How do you loop through an array using `while`?

```js id="a37"
const arr = [10,20,30];

let i = 0;

while(i < arr.length){
    console.log(arr[i]);
    i++;
}
```

---

## 38. Print all elements of `[10,20,30,40]`.

```js id="a38"
const arr = [10,20,30,40];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
```

Output:

```text id="a38o"
10
20
30
40
```

---

## 39. Why do we use `arr.length` in loops?

To ensure the loop runs exactly up to the last element.

---

## 40. What happens if you use:

```js id="a40"
i <= arr.length
```

instead of:

```js id="a40b"
i < arr.length
```

?

The loop runs one extra time and accesses an invalid index.

Example:

```js id="a40c"
arr[arr.length]
```

returns:

```text id="a40o"
undefined
```

---

## 41. Print all elements in reverse order.

```js id="a41"
const arr = [10,20,30,40];

for(let i = arr.length - 1; i >= 0; i--){
    console.log(arr[i]);
}
```

Output:

```text id="a41o"
40
30
20
10
```

---

## 42. Count total elements in an array.

```js id="a42"
const arr = [10,20,30,40];

console.log(arr.length);
```

Output:

```text id="a42o"
4
```

---

## 43. Find the first element.

```js id="a43"
arr[0]
```

---

## 44. Find the last element.

```js id="a44"
arr[arr.length - 1]
```

---

## 45. Print only even numbers from an array.

```js id="a45"
const arr = [1,2,3,4,5,6];

for(let i=0; i<arr.length; i++){

    if(arr[i] % 2 === 0){
        console.log(arr[i]);
    }

}
```

---

## 46. Print only odd numbers from an array.

```js id="a46"
const arr = [1,2,3,4,5,6];

for(let i=0; i<arr.length; i++){

    if(arr[i] % 2 !== 0){
        console.log(arr[i]);
    }

}
```

---

## 47. Count even numbers in an array.

```js id="a47"
const arr = [1,2,3,4,5,6];

let count = 0;

for(let i=0; i<arr.length; i++){

    if(arr[i] % 2 === 0){
        count++;
    }

}

console.log(count);
```

Output:

```text id="a47o"
3
```

---

## 48. Count odd numbers in an array.

```js id="a48"
const arr = [1,2,3,4,5,6];

let count = 0;

for(let i=0; i<arr.length; i++){

    if(arr[i] % 2 !== 0){
        count++;
    }

}

console.log(count);
```

Output:

```text id="a48o"
3
```

---

## 49. Print index and value together.

```js id="a49"
const arr = [10,20,30];

for(let i=0; i<arr.length; i++){
    console.log(i, arr[i]);
}
```

Output:

```text id="a49o"
0 10
1 20
2 30
```

---

## 50. Explain array traversal.

Array traversal means visiting every element of an array one by one.

---

# Sum, Average, Max, Min (51–60)

---

## 51. Find the sum of all elements.

```js id="a51"
const arr = [10,20,30,40];

let sum = 0;

for(let i=0; i<arr.length; i++){
    sum += arr[i];
}

console.log(sum);
```

Output:

```text id="a51o"
100
```

---

## 52. Find the average of an array.

```js id="a52"
const arr = [10,20,30,40];

let sum = 0;

for(let i=0; i<arr.length; i++){
    sum += arr[i];
}

let avg = sum / arr.length;

console.log(avg);
```

Output:

```text id="a52o"
25
```

---

## 53. Find the largest element.

```js id="a53"
const arr = [5,8,2,20,1];

let max = arr[0];

for(let i=1; i<arr.length; i++){

    if(arr[i] > max){
        max = arr[i];
    }

}

console.log(max);
```

Output:

```text id="a53o"
20
```

---

## 54. Find the smallest element.

```js id="a54"
const arr = [5,8,2,20,1];

let min = arr[0];

for(let i=1; i<arr.length; i++){

    if(arr[i] < min){
        min = arr[i];
    }

}

console.log(min);
```

Output:

```text id="a54o"
1
```

---

## 55. Count positive numbers.

```js id="a55"
const arr = [-2,4,0,7,-1];

let count = 0;

for(let i=0; i<arr.length; i++){

    if(arr[i] > 0){
        count++;
    }

}

console.log(count);
```

Output:

```text id="a55o"
2
```

---

## 56. Count negative numbers.

```js id="a56"
const arr = [-2,4,0,7,-1];

let count = 0;

for(let i=0; i<arr.length; i++){

    if(arr[i] < 0){
        count++;
    }

}

console.log(count);
```

Output:

```text id="a56o"
2
```

---

## 57. Count zeros.

```js id="a57"
const arr = [-2,4,0,7,-1,0];

let count = 0;

for(let i=0; i<arr.length; i++){

    if(arr[i] === 0){
        count++;
    }

}

console.log(count);
```

Output:

```text id="a57o"
2
```

---

## 58. Find the product of all elements.

```js id="a58"
const arr = [2,3,4];

let product = 1;

for(let i=0; i<arr.length; i++){
    product *= arr[i];
}

console.log(product);
```

Output:

```text id="a58o"
24
```

---

## 59. Find the difference between max and min.

```js id="a59"
const arr = [5,8,2,20,1];

let max = Math.max(...arr);
let min = Math.min(...arr);

console.log(max - min);
```

Output:

```text id="a59o"
19
```

---

## 60. Find the second largest number.

```js id="a60"
const arr = [10,20,30,40,50];

const sorted = [...arr].sort((a,b) => b-a);

console.log(sorted[1]);
```

Output:

```text id="a60o"
40
```

---

# JavaScript Arrays — Questions & Answers (61–110)

---

# Part 3 — Arrays Methods & Industry Concepts (61–95)

---

## 61. Find the second smallest number.

```js
const arr = [10,20,30,40,50];

const sorted = [...arr].sort((a,b) => a-b);

console.log(sorted[1]);
```

Output:

```text
20
```

---

## 62. Check whether an array is empty.

```js
const arr = [];

console.log(arr.length === 0);
```

Output:

```text
true
```

---

## 63. Find the sum of only even numbers.

```js
const arr = [1,2,3,4,5,6];

let sum = 0;

for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 === 0){
        sum += arr[i];
    }
}

console.log(sum);
```

Output:

```text
12
```

---

## 64. Find the sum of only odd numbers.

```js
const arr = [1,2,3,4,5,6];

let sum = 0;

for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 !== 0){
        sum += arr[i];
    }
}

console.log(sum);
```

Output:

```text
9
```

---

## 65. Find the total number of elements greater than 50.

```js
const arr = [20,60,70,10,90];

let count = 0;

for(let num of arr){
    if(num > 50){
        count++;
    }
}

console.log(count);
```

Output:

```text
3
```

---

## 66. What does `slice()` do?

Creates a shallow copy of a portion of an array without modifying the original array.

---

## 67. Does `slice()` modify the original array?

```text
No
```

---

## 68. What is the output?

```js
const arr = [10,20,30,40,50];

console.log(arr.slice(1,4));
```

Output:

```text
[20,30,40]
```

---

## 69. What does `splice()` do?

Adds, removes, or replaces elements in an array.

---

## 70. Does `splice()` modify the original array?

```text
Yes
```

---

## 71. Remove two elements using `splice()`.

```js
const arr = [10,20,30,40,50];

arr.splice(1,2);

console.log(arr);
```

Output:

```text
[10,40,50]
```

---

## 72. Add elements using `splice()`.

```js
const arr = [10,40,50];

arr.splice(1,0,20,30);

console.log(arr);
```

Output:

```text
[10,20,30,40,50]
```

---

## 73. Replace elements using `splice()`.

```js
const arr = [10,20,30];

arr.splice(1,1,100);

console.log(arr);
```

Output:

```text
[10,100,30]
```

---

## 74. Difference between `slice()` and `splice()`.

| slice()           | splice()              |
| ----------------- | --------------------- |
| Creates copy      | Modifies original     |
| Non-destructive   | Destructive           |
| Returns new array | Adds/Removes/Replaces |

---

## 75. Which method is safer when you don't want to modify data?

```text
slice()
```

---

## 76. What does `includes()` do?

Checks whether an element exists in an array.

---

## 77. What is the output?

```js
const fruits = ["Apple","Mango"];

console.log(fruits.includes("Mango"));
```

Output:

```text
true
```

---

## 78. What does `indexOf()` do?

Returns the index of an element.

---

## 79. What is returned if an element is not found?

```text
-1
```

---

## 80. Difference between `includes()` and `indexOf()`.

```text
includes() → true/false

indexOf() → index position
```

---

## 81. What does `join()` do?

Converts an array into a string.

---

## 82. Convert an array into a string using `join()`.

```js
const fruits = ["Apple","Mango","Banana"];

console.log(fruits.join(", "));
```

Output:

```text
Apple, Mango, Banana
```

---

## 83. What does `reverse()` do?

Reverses the order of elements.

---

## 84. What does `concat()` do?

Combines two or more arrays.

---

## 85. Merge two arrays using `concat()`.

```js
const arr1 = [1,2];
const arr2 = [3,4];

const result = arr1.concat(arr2);

console.log(result);
```

Output:

```text
[1,2,3,4]
```

---

## 86. How are arrays stored internally in JavaScript?

Arrays are stored as special objects in heap memory.

---

## 87. Why are arrays considered objects in JavaScript?

Because arrays are specialized object types with indexed keys.

---

## 88. Why does array indexing start from 0?

Because memory offsets start at 0.

---

## 89. Explain mutable vs immutable arrays.

```text
Mutable → Original array can change.

Immutable → Original array cannot change.
```

JavaScript arrays are mutable.

---

## 90. What is the time complexity of `push()`?

```text
O(1)
```

---

## 91. What is the time complexity of `pop()`?

```text
O(1)
```

---

## 92. What is the time complexity of `shift()`?

```text
O(n)
```

---

## 93. What is the time complexity of `unshift()`?

```text
O(n)
```

---

## 94. Why are `push()` and `pop()` preferred in DSA?

Because they work in constant time O(1).

---

## 95. Why are arrays the foundation of most DSA problems?

Because most data structures are built using array concepts.

---

# Part 4 — FAANG & DSA Level (96–110)

---

## 96. Reverse an array without using `reverse()`.

```js
const arr = [1,2,3,4];

for(let i=arr.length-1; i>=0; i--){
    console.log(arr[i]);
}
```

---

## 97. Find duplicate elements in an array.

```js
const arr = [1,2,3,2,4,1];

const duplicates = [];

for(let i=0; i<arr.length; i++){
    if(arr.indexOf(arr[i]) !== i){
        duplicates.push(arr[i]);
    }
}

console.log(duplicates);
```

Output:

```text
[2,1]
```

---

## 98. Remove duplicates from an array.

```js
const arr = [1,2,3,2,4,1];

const unique = [...new Set(arr)];

console.log(unique);
```

Output:

```text
[1,2,3,4]
```

---

## 99. Find the frequency of each element.

```js
const arr = [1,2,2,3,3,3];

const freq = {};

for(let num of arr){
    freq[num] = (freq[num] || 0) + 1;
}

console.log(freq);
```

Output:

```text
{
  1:1,
  2:2,
  3:3
}
```

---

## 100. Check if an element exists without using `includes()`.

```js
const arr = [10,20,30];

let found = false;

for(let num of arr){
    if(num === 20){
        found = true;
    }
}

console.log(found);
```

Output:

```text
true
```

---

## 101. Find the largest and smallest element in one traversal.

```js
const arr = [5,8,2,20,1];

let max = arr[0];
let min = arr[0];

for(let i=1; i<arr.length; i++){

    if(arr[i] > max){
        max = arr[i];
    }

    if(arr[i] < min){
        min = arr[i];
    }
}

console.log(max, min);
```

Output:

```text
20 1
```

---

## 102. Move all zeros to the end.

```js
const arr = [0,1,0,3,12];

const result = arr.filter(num => num !== 0);

const zeros = arr.filter(num => num === 0);

console.log([...result, ...zeros]);
```

Output:

```text
[1,3,12,0,0]
```

---

## 103. Move all negative numbers to the beginning.

```js
const arr = [1,-2,3,-4,5];

const negative = arr.filter(num => num < 0);

const positive = arr.filter(num => num >= 0);

console.log([...negative, ...positive]);
```

Output:

```text
[-2,-4,1,3,5]
```

---

## 104. Find the missing number from `[1,2,3,5]`.

```js
const arr = [1,2,3,5];

let n = 5;

let expected = (n * (n + 1)) / 2;

let actual = arr.reduce((a,b) => a+b,0);

console.log(expected - actual);
```

Output:

```text
4
```

---

## 105. Rotate an array by one position.

```js
const arr = [1,2,3,4];

arr.unshift(arr.pop());

console.log(arr);
```

Output:

```text
[4,1,2,3]
```

---

## 106. Rotate an array by k positions.

```js
const arr = [1,2,3,4,5];

let k = 2;

for(let i=0; i<k; i++){
    arr.unshift(arr.pop());
}

console.log(arr);
```

Output:

```text
[4,5,1,2,3]
```

---

## 107. Find the intersection of two arrays.

```js
const arr1 = [1,2,3,4];
const arr2 = [3,4,5,6];

const result = arr1.filter(num => arr2.includes(num));

console.log(result);
```

Output:

```text
[3,4]
```

---

## 108. Find the union of two arrays.

```js
const arr1 = [1,2,3];
const arr2 = [3,4,5];

const union = [...new Set([...arr1,...arr2])];

console.log(union);
```

Output:

```text
[1,2,3,4,5]
```

---

## 109. Explain how arrays are used in Stacks and Queues.

```text
Stack:
push() → Insert
pop() → Remove

Queue:
push() → Insert
shift() → Remove
```

---

## 110. Explain why arrays are the starting point for:

* Searching
* Sorting
* Sliding Window
* Two Pointers
* Dynamic Programming

Because these algorithms operate on collections of ordered data, and arrays are the most fundamental ordered data structure used to represent and manipulate that data efficiently.

---

# Arrays Mastery Completed

```text
✓ Array Basics
✓ Indexing
✓ Length
✓ push()
✓ pop()
✓ shift()
✓ unshift()
✓ Looping
✓ Sum
✓ Average
✓ Max/Min
✓ slice()
✓ splice()
✓ includes()
✓ indexOf()
✓ join()
✓ reverse()
✓ concat()
✓ Time Complexity
✓ Heap Memory
✓ DSA Foundations
✓ FAANG-Level Array Problems
```



