# DAY 19 — Fetch API & API Fundamentals Notes

These notes are designed for:

✅ Beginner Learning

✅ React Preparation

✅ Interview Preparation

✅ Real Project Usage

---

# 1. What is an API?

API stands for:

```text
Application Programming Interface
```

An API is a medium that allows two software applications to communicate and exchange data.

---

## Real-Life Example

Imagine a restaurant.

```text
You
 ↓
Waiter
 ↓
Kitchen
```

The waiter takes your request to the kitchen and brings back the result.

In web applications:

```text
Frontend
 ↓
API
 ↓
Backend
 ↓
Database
```

The API acts like the waiter.

---

# 2. Why Do We Need APIs?

Without APIs:

```text
Frontend cannot communicate with Backend.
```

APIs allow applications to:

* Get data
* Create data
* Update data
* Delete data

Examples:

```text
Login User
Fetch Applicants
Fetch Jobs
Create Profile
Delete Record
```

---

# 3. Frontend → Backend Flow

```text
User Clicks Button
       ↓
Frontend
       ↓
API Request
       ↓
Backend Server
       ↓
Database
       ↓
Response
       ↓
Frontend Updates UI
```

Example:

```text
Search Applicant
        ↓
API Call
        ↓
Server
        ↓
Applicant Data
        ↓
Display Results
```

---

# 4. What is Fetch API?

Fetch API is JavaScript's built-in mechanism for communicating with APIs.

It is used to:

```text
Send Requests
Receive Responses
Fetch Data
Send Data
```

Example:

```js
fetch(url);
```

Meaning:

```text
JavaScript:
"API, please give me data."
```

---

# 5. Why Was Fetch Introduced?

Before Fetch:

```js
XMLHttpRequest
```

was used.

Problems:

* Verbose
* Hard to read
* Callback-heavy

Fetch provides:

✅ Cleaner syntax

✅ Promise-based architecture

✅ Better readability

✅ Easier async handling

---

# 6. What Does fetch() Return?

Many beginners think:

```js
const users = fetch(url);
```

returns data.

Wrong.

It returns:

```text
Promise
```

because the server takes time to respond.

---

# 7. Basic Fetch Syntax

```js
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

Flow:

```text
Request
 ↓
Response
 ↓
JSON Conversion
 ↓
Data
```

---

# 8. Understanding response.json()

Server returns:

```text
JSON
```

Example:

```json
{
  "name": "Sai",
  "age": 25
}
```

To convert JSON into JavaScript objects:

```js
response.json()
```

is used.

---

# 9. What is JSON?

JSON stands for:

```text
JavaScript Object Notation
```

Used for data exchange between:

```text
Frontend ↔ Backend
```

Example:

```json
{
  "name": "Sai",
  "city": "Hyderabad"
}
```

---

# 10. HTTP Methods

## GET

Used to retrieve data.

Example:

```text
Get Users
Get Applicants
Get Products
```

---

## POST

Used to create data.

Example:

```text
Create Applicant
Create User
```

---

## PUT

Used to replace entire data.

Example:

```text
Update Complete Profile
```

---

## PATCH

Used to update part of the data.

Example:

```text
Update Email Only
```

---

## DELETE

Used to remove data.

Example:

```text
Delete Applicant
Delete Job
```

---

# 11. Common Fetch Pattern

```js
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
```

---

# 12. Why Use .catch()?

APIs may fail because of:

* Network issues
* Server errors
* Invalid URLs

Example:

```js
.catch(error => {
   console.error(error);
});
```

This prevents application crashes.

---

# 13. Working With API Data

Most API responses return:

```js
[
  {},
  {},
  {}
]
```

an array of objects.

---

## forEach()

Used to display data.

```js
data.forEach(user => {
   console.log(user.name);
});
```

---

## map()

Used to transform data.

```js
const names =
data.map(user => user.name);
```

Result:

```js
["Sai","Krishna"]
```

---

## filter()

Used to filter data.

```js
const result =
data.filter(user =>
user.name.startsWith("S")
);
```

---

## find()

Used to get a single item.

```js
const user =
data.find(user =>
user.id === 5
);
```

---

## reduce()

Used to calculate values.

```js
const count =
data.reduce(
(acc) => acc + 1,
0
);
```

---

# 14. Accessing Nested API Data

API data often contains nested objects.

Example:

```js
{
  name: "Sai",
  company: {
    name: "Curately"
  }
}
```

Access:

```js
user.company.name
```

---

Example:

```js
user.address.city
```

---

# 15. Real React Usage

When component loads:

```js
useEffect(() => {
   fetchData();
}, []);
```

React:

```text
Component Loads
       ↓
API Call
       ↓
Receive Data
       ↓
Update State
       ↓
Render UI
```

---

# 16. Real-World Use Cases

### Applicant Search

```text
Search Applicants
```

---

### Product Listings

```text
Amazon Products
```

---

### Job Portals

```text
Fetch Jobs
```

---

### Social Media

```text
Fetch Posts
Fetch Comments
```

---

### Weather Applications

```text
Get Weather Data
```

---

# 17. Common Interview Questions

### What is an API?

An API is a medium that allows software applications to communicate and exchange data.

---

### What is Fetch API?

Fetch API is a modern JavaScript interface used to make HTTP requests and communicate with servers.

---

### What does fetch() return?

```text
Promise
```

---

### Why use response.json()?

To convert JSON response data into JavaScript objects.

---

### Difference between GET and POST?

GET retrieves data.

POST creates data.

---

### Difference between map and forEach?

`map()` returns a new array.

`forEach()` returns nothing.

---

### Why is error handling important?

To prevent application crashes and gracefully handle API failures.

---

# What You Should Know After This

You should now understand:

✅ What APIs are

✅ Why APIs exist

✅ Frontend → Backend communication

✅ Fetch API

✅ JSON

✅ HTTP Methods

✅ GET requests

✅ Error handling

✅ Processing API responses

✅ map()

✅ filter()

✅ find()

✅ reduce()

✅ Nested API data

✅ Real React API flow

---
