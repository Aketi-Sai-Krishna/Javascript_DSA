# Session Storage & Local Storage — Interview Answers

---

## 1. Difference between localStorage and sessionStorage?

### Answer

Both are browser storage mechanisms used to store key-value pairs.

**localStorage**

* Data persists even after browser restart.
* Remains until manually deleted.
* Shared across tabs of the same origin.

**sessionStorage**

* Data exists only for the current browser tab/session.
* Removed when the tab is closed.
* Not shared across tabs.

```js
localStorage.setItem("theme", "dark");
sessionStorage.setItem("token", "abc");
```

---

## 2. Can localStorage store objects?

### Answer

No.

localStorage can store only strings.

If you store an object directly:

```js
localStorage.setItem("user", {
  name: "Sai"
});
```

It becomes:

```js
"[object Object]"
```

Use `JSON.stringify()` before storing.

```js
localStorage.setItem(
  "user",
  JSON.stringify({ name: "Sai" })
);
```

---

## 3. Why use JSON.stringify()?

### Answer

`JSON.stringify()` converts JavaScript objects or arrays into strings so they can be stored in localStorage or sessionStorage.

```js
const user = {
  name: "Sai",
  age: 25
};

localStorage.setItem(
  "user",
  JSON.stringify(user)
);
```

Without it, objects cannot be stored correctly.

---

## 4. Why use JSON.parse()?

### Answer

Data retrieved from localStorage is always returned as a string.

`JSON.parse()` converts that string back into a JavaScript object or array.

```js
const user = JSON.parse(
  localStorage.getItem("user")
);
```

Without parsing:

```js
console.log(typeof data);
// string
```

After parsing:

```js
console.log(typeof user);
// object
```

---

## 5. Does localStorage survive refresh?

### Answer

Yes.

Data stored in localStorage survives:

* Refresh
* Browser restart
* System restart

Example:

```js
localStorage.setItem("name", "Sai");
```

After refresh:

```js
localStorage.getItem("name");
// Sai
```

---

## 6. Does sessionStorage survive tab close?

### Answer

No.

sessionStorage survives refresh but gets removed when the browser tab is closed.

```js
sessionStorage.setItem("token", "123");
```

Refresh:

```js
token exists
```

Close tab and reopen:

```js
token removed
```

---

## 7. How do you persist React state after refresh?

### Answer

Store the state in localStorage and restore it when the component loads.

```jsx
const [theme, setTheme] = useState(
  localStorage.getItem("theme") || "light"
);
```

Save updates:

```jsx
useEffect(() => {
  localStorage.setItem("theme", theme);
}, [theme]);
```

Now the state survives refresh.

---

## 8. Why use lazy initialization with localStorage?

### Answer

Because reading localStorage on every render is unnecessary.

Bad:

```jsx
const [theme] = useState(
  localStorage.getItem("theme")
);
```

Good:

```jsx
const [theme] = useState(() => {
  return localStorage.getItem("theme");
});
```

The function runs only once during the initial render.

Benefits:

* Better performance
* Avoids repeated storage access

---

## 9. What is the storage event?

### Answer

The `storage` event is triggered when localStorage changes in another tab.

Example:

```js
window.addEventListener(
  "storage",
  (event) => {
    console.log(event.key);
    console.log(event.newValue);
  }
);
```

Use cases:

* Logout from all tabs
* Theme synchronization
* Real-time tab communication

---

## 10. Is localStorage secure for JWT tokens?

### Answer

Not completely.

localStorage can be accessed from JavaScript.

```js
localStorage.getItem("token");
```

If an XSS attack occurs, attackers may steal the token.

For highly secure applications, HttpOnly cookies are generally preferred because JavaScript cannot access them.

---

## 11. How would you implement a dark mode toggle using localStorage?

### Answer

Initialize state:

```jsx
const [theme, setTheme] = useState(
  () => localStorage.getItem("theme") || "light"
);
```

Save changes:

```jsx
useEffect(() => {
  localStorage.setItem("theme", theme);
}, [theme]);
```

Toggle:

```jsx
<button
  onClick={() =>
    setTheme(
      theme === "light"
        ? "dark"
        : "light"
    )
  }
>
  Toggle Theme
</button>
```

The selected theme remains after refresh.

---

## 12. How would you create a reusable useLocalStorage hook?

### Answer

```jsx
import { useState } from "react";

function useLocalStorage(
  key,
  initialValue
) {
  const [value, setValue] = useState(() => {
    const stored =
      localStorage.getItem(key);

    return stored
      ? JSON.parse(stored)
      : initialValue;
  });

  const setStoredValue = (
    newValue
  ) => {
    setValue(newValue);

    localStorage.setItem(
      key,
      JSON.stringify(newValue)
    );
  };

  return [value, setStoredValue];
}
```

Usage:

```jsx
const [user, setUser] =
  useLocalStorage(
    "user",
    {}
  );
```

This hook:

* Reads from localStorage
* Updates React state
* Saves changes automatically

---

# Frequently Asked Follow-Up Questions

### Q: What is the maximum size of localStorage?

**Answer:** Usually around **5–10 MB**, depending on the browser.

---

### Q: Is localStorage synchronous or asynchronous?

**Answer:** Synchronous.

```js
localStorage.setItem("a", "1");
console.log("Done");
```

The browser waits until the operation finishes.

---

### Q: Can localStorage store functions?

**Answer:** No.

Only strings can be stored.

---

### Q: Can localStorage be shared between tabs?

**Answer:** Yes, if the tabs belong to the same origin (same domain, protocol, and port).

---

### Q: When should you use sessionStorage instead of localStorage?

**Answer:**
When data should disappear after the tab closes.

Examples:

* Multi-step forms
* Temporary authentication flow
* OTP verification state
* Payment process state

---

# Most Important Interview Answer (Very Common)

**Question:** Why do we use JSON.stringify() and JSON.parse() with localStorage?

**Answer:**

> localStorage can store only strings. JSON.stringify() converts JavaScript objects or arrays into strings before storing them. JSON.parse() converts those strings back into JavaScript objects or arrays when retrieving the data.

If you can confidently answer this question, plus the difference between localStorage and sessionStorage and build a `useLocalStorage` hook, you'll handle around 80–90% of storage-related React interview questions.
