# JavaScript Arrays — Complete Notes

## Beginner → Intermediate → Industry → FAANG → DSA Foundation

---

# What is an Array?

An array is a special data structure used to store multiple values in a single variable.

Without Arrays:

```js
let mark1 = 80;
let mark2 = 90;
let mark3 = 75;
let mark4 = 95;
```

With Arrays:

```js
let marks = [80, 90, 75, 95];
```

---

# Why Arrays?

Arrays help us:

```text
Store multiple values
Access values easily
Loop through data
Perform calculations
Build DSA solutions
```

---

# Real-Life Example

Imagine a classroom:

```text
Students
│
├── Sai
├── Krishna
├── Ram
├── Ravi
└── Kiran
```

Instead of:

```js
let student1 = "Sai";
let student2 = "Krishna";
let student3 = "Ram";
```

Use:

```js
let students = ["Sai", "Krishna", "Ram"];
```

---

# Creating Arrays

## Empty Array

```js
let arr = [];
```

---

## Number Array

```js
let numbers = [10, 20, 30];
```

---

## String Array

```js
let fruits = ["Apple", "Mango", "Banana"];
```

---

## Boolean Array

```js
let status = [true, false, true];
```

---

## Mixed Array

```js
let data = ["Sai", 25, true];
```

---

# Array Index

Each element has a position called an index.

```js
let fruits = ["Apple", "Mango", "Banana"];
```

```text
Index

0 → Apple
1 → Mango
2 → Banana
```

---

# Why Does Index Start from 0?

JavaScript arrays use zero-based indexing.

```text
Memory Address

Start + 0
Start + 1
Start + 2
```

First element is always index 0.

---

# Accessing Elements

```js
let fruits = ["Apple", "Mango", "Banana"];
```

First Element:

```js
console.log(fruits[0]);
```

Output:

```text
Apple
```

---

Second Element:

```js
console.log(fruits[1]);
```

Output:

```text
Mango
```

---

Third Element:

```js
console.log(fruits[2]);
```

Output:

```text
Banana
```

---

# Accessing Last Element

```js
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[fruits.length - 1]);
```

Output:

```text
Banana
```

---

# Array Length

Length tells the total number of elements.

```js
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.length);
```

Output:

```text
3
```

---

# Updating Elements

Arrays are mutable.

```js
let fruits = ["Apple", "Mango", "Banana"];

fruits[1] = "Orange";

console.log(fruits);
```

Output:

```text
["Apple", "Orange", "Banana"]
```

---

# Arrays are Mutable

Meaning:

```text
Values can be changed after creation
```

Example:

```js
let numbers = [10,20,30];

numbers[0] = 100;
```

Output:

```text
[100,20,30]
```

---

# Array Memory Visualization

```js
let fruits = ["Apple", "Mango", "Banana"];
```

```text
fruits
   │
   ▼

┌─────────┐
│ Apple   │ ← index 0
├─────────┤
│ Mango   │ ← index 1
├─────────┤
│ Banana  │ ← index 2
└─────────┘
```

---

# push()

Adds an element to the end.

```js
let fruits = ["Apple", "Mango"];

fruits.push("Banana");

console.log(fruits);
```

Output:

```text
["Apple", "Mango", "Banana"]
```

---

# What Does push() Return?

Returns new length.

```js
let arr = [10,20];

let result = arr.push(30);

console.log(result);
```

Output:

```text
3
```

---

# pop()

Removes last element.

```js
let fruits = ["Apple", "Mango", "Banana"];

fruits.pop();

console.log(fruits);
```

Output:

```text
["Apple", "Mango"]
```

---

# What Does pop() Return?

Returns removed element.

```js
let arr = [10,20,30];

let removed = arr.pop();

console.log(removed);
```

Output:

```text
30
```

---

# shift()

Removes first element.

```js
let fruits = ["Apple", "Mango", "Banana"];

fruits.shift();
```

Output:

```text
["Mango","Banana"]
```

---

# unshift()

Adds element at beginning.

```js
let fruits = ["Mango","Banana"];

fruits.unshift("Apple");
```

Output:

```text
["Apple","Mango","Banana"]
```

---

# push vs pop

```text
push()  → Add at End
pop()   → Remove from End
```

---

# shift vs unshift

```text
shift()    → Remove from Start
unshift()  → Add at Start
```

---

# Looping Arrays

Array traversal means visiting every element.

---

# Using for Loop

```js
let numbers = [10,20,30,40];

for(let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}
```

Output:

```text
10
20
30
40
```

---

# Internal Working

```text
i = 0 → numbers[0]
i = 1 → numbers[1]
i = 2 → numbers[2]
i = 3 → numbers[3]
```

---

# Using while Loop

```js
let numbers = [10,20,30,40];

let i = 0;

while(i < numbers.length){
    console.log(numbers[i]);
    i++;
}
```

---

# Sum of Array

```js
let numbers = [10,20,30,40];

let sum = 0;

for(let i=0; i<numbers.length; i++){
    sum += numbers[i];
}

console.log(sum);
```

Output:

```text
100
```

---

# Average of Array

```js
let numbers = [10,20,30,40];

let sum = 0;

for(let i=0; i<numbers.length; i++){
    sum += numbers[i];
}

let average = sum / numbers.length;

console.log(average);
```

Output:

```text
25
```

---

# Largest Element

```js
let numbers = [5,8,2,20,1];

let max = numbers[0];

for(let i=1; i<numbers.length; i++){

    if(numbers[i] > max){
        max = numbers[i];
    }

}

console.log(max);
```

Output:

```text
20
```

---

# Smallest Element

```js
let numbers = [5,8,2,20,1];

let min = numbers[0];

for(let i=1; i<numbers.length; i++){

    if(numbers[i] < min){
        min = numbers[i];
    }

}

console.log(min);
```

Output:

```text
1
```

---

# slice()

Creates a copy of a portion of an array.

Does NOT modify original array.

```js
let numbers = [10,20,30,40,50];

console.log(numbers.slice(1,4));
```

Output:

```text
[20,30,40]
```

---

# splice()

Adds, removes, or replaces elements.

Modifies original array.

Remove:

```js
let numbers = [10,20,30,40];

numbers.splice(1,2);

console.log(numbers);
```

Output:

```text
[10,40]
```

---

# slice vs splice

| slice()         | splice()           |
| --------------- | ------------------ |
| Copy            | Modify             |
| Safe            | Destructive        |
| Returns portion | Add/Remove/Replace |

---

# includes()

Checks whether a value exists.

```js
let fruits = ["Apple","Mango"];

console.log(fruits.includes("Mango"));
```

Output:

```text
true
```

---

# indexOf()

Returns index position.

```js
let fruits = ["Apple","Mango"];

console.log(fruits.indexOf("Mango"));
```

Output:

```text
1
```

Not found:

```text
-1
```

---

# includes vs indexOf

```text
includes() → true/false

indexOf() → position
```

---

# join()

Converts array into string.

```js
let fruits = ["Apple","Mango","Banana"];

console.log(fruits.join(", "));
```

Output:

```text
Apple, Mango, Banana
```

---

# reverse()

Reverses array.

```js
let numbers = [1,2,3];

numbers.reverse();

console.log(numbers);
```

Output:

```text
[3,2,1]
```

---

# concat()

Combines arrays.

```js
let arr1 = [1,2];
let arr2 = [3,4];

let result = arr1.concat(arr2);

console.log(result);
```

Output:

```text
[1,2,3,4]
```

---

# Arrays Are Objects

```js
typeof [1,2,3];
```

Output:

```text
"object"
```

Because arrays are special objects optimized for indexed data.

---

# Stack vs Heap

Primitive:

```text
Stored in Stack
```

Arrays:

```text
Stored in Heap
```

Variable stores reference.

```text
numbers
   │
   ▼
 [10,20,30]
```

---

# Time Complexity

| Method     | Complexity |
| ---------- | ---------- |
| push()     | O(1)       |
| pop()      | O(1)       |
| shift()    | O(n)       |
| unshift()  | O(n)       |
| indexOf()  | O(n)       |
| includes() | O(n)       |
| reverse()  | O(n)       |
| slice()    | O(n)       |
| splice()   | O(n)       |
| concat()   | O(n)       |

---

# Arrays in DSA

Arrays are the foundation of:

```text
Arrays
│
├── Searching
├── Sorting
├── Two Pointers
├── Sliding Window
├── Prefix Sum
├── Hash Maps
├── Stacks
├── Queues
├── Recursion
└── Dynamic Programming
```

---

# Industry-Level Understanding

```text
Array
│
├── Ordered Collection
├── Indexed Data Structure
├── Mutable
├── Stored in Heap
├── Reference Type
├── Dynamic Size
├── Fast Random Access
└── Foundation of DSA
```

---

# Array Mastery Checklist

```text
✓ Create Arrays
✓ Access Elements
✓ Update Elements
✓ Indexing
✓ Length
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
✓ Loop Arrays
✓ Sum Arrays
✓ Max/Min
✓ Heap Memory
✓ Time Complexity
✓ DSA Foundation
```

Once you're comfortable with these concepts, the next logical topic is:

```text
DAY 9

Array Higher-Order Methods
│
├── forEach()
├── map()
├── filter()
├── reduce()
├── find()
├── some()
├── every()
└── sort()
```

These are heavily used in React, frontend interviews, and real-world JavaScript development.
