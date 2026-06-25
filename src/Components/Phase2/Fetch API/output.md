# Day 19 – Fetch API Interview Questions & Answers

---

## 1. What is an API?

### Answer

An API (Application Programming Interface) is a medium that allows different software applications to communicate and exchange data with each other.

Example:

```text
Frontend
   ↓
API
   ↓
Backend
```

---

## 2. Why do APIs exist?

### Answer

APIs exist to enable communication between the frontend and backend systems without exposing the internal implementation of the backend.

They allow applications to:

* Retrieve data
* Create data
* Update data
* Delete data

---

## 3. What is Fetch API?

### Answer

Fetch API is a built-in JavaScript interface used to make HTTP requests and communicate with servers.

It is promise-based and is commonly used to fetch or send data in web applications.

Example:

```js
fetch(url);
```

---

## 4. What does fetch() return?

### Answer

`fetch()` returns a Promise.

Example:

```js
const result = fetch(url);

console.log(result);
```

Output:

```text
Promise
```

The Promise resolves when the server responds.

---

## 5. Why is fetch asynchronous?

### Answer

Fetching data from a server takes time because the request travels through the network.

JavaScript does not wait for the response and continues executing other code, making fetch asynchronous.

---

## 6. Difference between GET and POST?

### GET

Used to retrieve data.

Example:

```text
Get users
Get products
Get applicants
```

### POST

Used to create new data.

Example:

```text
Create user
Create applicant
```

---

## 7. Difference between PUT and PATCH?

### PUT

Updates or replaces the entire resource.

Example:

```text
Replace complete profile information
```

### PATCH

Updates only specific fields.

Example:

```text
Update email only
```

---

## 8. What is JSON?

### Answer

JSON stands for:

```text
JavaScript Object Notation
```

It is a lightweight format used to exchange data between frontend and backend systems.

Example:

```json
{
  "name": "Sai",
  "age": 25
}
```

---

## 9. Why do we use response.json()?

### Answer

The server sends data in JSON format.

`response.json()` converts the JSON response into a JavaScript object or array that JavaScript can work with.

Example:

```js
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));
```

---

## 10. What happens if the API fails?

### Answer

If the API fails due to:

* Network issues
* Invalid URL
* Server errors

the Promise is rejected.

We handle this using:

```js
.catch(error => {
  console.error(error);
});
```

or

```js
try {
} catch(error) {
}
```

---

# React-Level Questions

---

## 11. How do you call APIs in React?

### Answer

Usually inside `useEffect()` when the component loads.

Example:

```js
useEffect(() => {
  fetchData();
}, []);
```

---

## 12. Why do we use useEffect for APIs?

### Answer

Because API calls are side effects.

`useEffect()` allows us to perform operations such as:

* Fetching data
* Calling APIs
* Updating external systems

after the component renders.

---

## 13. How do you show a loading state?

### Answer

Create a loading state.

Example:

```js
const [loading, setLoading] = useState(true);
```

Before API completes:

```text
Loading...
```

After API completes:

```js
setLoading(false);
```

---

## 14. How do you handle API errors in React?

### Answer

Using:

```js
try {
   ...
}
catch(error) {
   ...
}
```

or

```js
.catch(error => {
   ...
});
```

Store the error in state and display a user-friendly message.

---

## 15. How would you fetch applicants when a component loads?

### Answer

```js
useEffect(() => {
  fetch("/api/applicants")
    .then(response => response.json())
    .then(data => {
      setApplicants(data);
    });
}, []);
```

The empty dependency array (`[]`) ensures the API is called only once when the component mounts.

---

# Frequently Asked Interview Questions

---

## 16. Difference between map() and forEach() when working with API data?

### Answer

### map()

Returns a new array.

```js
const names = users.map(
  user => user.name
);
```

### forEach()

Does not return a new array.

```js
users.forEach(user => {
  console.log(user.name);
});
```

---

## 17. When would you use find() instead of filter()?

### Answer

Use `find()` when you need only one item.

```js
users.find(user => user.id === 5);
```

Use `filter()` when multiple results are possible.

```js
users.filter(user => user.age > 20);
```

---

## 18. Why is error handling important in API calls?

### Answer

Without error handling:

* Application may crash
* User may see a blank screen
* API failures become difficult to debug

Error handling improves reliability and user experience.

---

## 19. What kind of data does an API usually return?

### Answer

Most APIs return:

```js
Object
```

or

```js
Array of Objects
```

Example:

```js
[
  {
    id: 1,
    name: "Sai"
  }
]
```

---

## 20. Why are APIs important in React applications?

### Answer

React is primarily responsible for displaying UI.

APIs provide the data required by the UI.

Without APIs, React applications would not be able to display dynamic content such as:

* Users
* Applicants
* Products
* Jobs
* Posts
* Weather information

---
