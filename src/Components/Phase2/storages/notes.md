# DAY 14

# Session Storage & Local Storage (Beginner → Advanced → React)

These are browser storage mechanisms used to store data on the user's device.

They allow your application to remember information even when components re-render.

---

# Why Do We Need Storage?

Without storage:

```js
let username = "Sai";
```

After page refresh:

```js
username // gone
```

Memory is cleared.

Storage lets us persist data.

Examples:

* Remember dark mode
* Keep user logged in
* Save cart items
* Store form drafts
* Save application settings

---

# Browser Storage Types

| Storage         | Size    | Expiry                 |
| --------------- | ------- | ---------------------- |
| Cookies         | ~4KB    | Configurable           |
| Session Storage | ~5MB    | Until tab closes       |
| Local Storage   | ~5-10MB | Until manually removed |

For frontend interviews:

Focus on:

* localStorage
* sessionStorage

---

# What is Local Storage?

Stores data permanently in browser.

Data remains:

✅ Refresh

✅ Browser restart

✅ System restart

Until:

* User clears browser data
* Application removes it

---

## Example

```js
localStorage.setItem("name", "Sai");
```

Store data.

---

Retrieve:

```js
const name = localStorage.getItem("name");

console.log(name);
```

Output:

```js
Sai
```

---

Remove:

```js
localStorage.removeItem("name");
```

---

Clear everything:

```js
localStorage.clear();
```

---

# What is Session Storage?

Same API as localStorage.

Difference:

Data survives refresh.

But disappears when tab closes.

---

## Example

```js
sessionStorage.setItem("token", "abc123");
```

Retrieve:

```js
sessionStorage.getItem("token");
```

Remove:

```js
sessionStorage.removeItem("token");
```

---

# Local Storage vs Session Storage

| Feature                  | Local | Session |
| ------------------------ | ----- | ------- |
| Refresh survives         | ✅     | ✅       |
| Browser restart survives | ✅     | ❌       |
| Tab close survives       | ✅     | ❌       |
| API same                 | ✅     | ✅       |

---

# Important Rule

Storage only stores strings.

---

## Wrong

```js
localStorage.setItem("user", {
  name: "Sai"
});
```

Result:

```js
[object Object]
```

---

## Correct

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

---

Retrieve:

```js
const user = JSON.parse(
  localStorage.getItem("user")
);

console.log(user.name);
```

Output:

```js
Sai
```

---

# Storing Arrays

```js
const skills = [
  "JS",
  "React",
  "TypeScript"
];

localStorage.setItem(
  "skills",
  JSON.stringify(skills)
);
```

Retrieve:

```js
const skills = JSON.parse(
  localStorage.getItem("skills")
);
```

---

# Common Methods

## setItem()

Store value.

```js
localStorage.setItem("theme", "dark");
```

---

## getItem()

Read value.

```js
localStorage.getItem("theme");
```

---

## removeItem()

Delete one value.

```js
localStorage.removeItem("theme");
```

---

## clear()

Delete everything.

```js
localStorage.clear();
```

---

## key()

Get key by index.

```js
localStorage.key(0);
```

---

## length

Count stored items.

```js
localStorage.length;
```

---

# Real Project Example

## Dark Mode

Save:

```js
localStorage.setItem(
  "theme",
  "dark"
);
```

Read on page load:

```js
const theme =
  localStorage.getItem("theme");

document.body.className = theme;
```

---

# Real Project Example

## Shopping Cart

```js
const cart = [
  { id: 1, name: "Phone" },
  { id: 2, name: "Laptop" }
];

localStorage.setItem(
  "cart",
  JSON.stringify(cart)
);
```

Restore:

```js
const cartData =
  JSON.parse(
    localStorage.getItem("cart")
  );
```

---

# Real Project Example

## Remember Form Inputs

Save while typing:

```js
input.addEventListener(
  "input",
  (e) => {
    localStorage.setItem(
      "draft",
      e.target.value
    );
  }
);
```

Load later:

```js
input.value =
  localStorage.getItem("draft");
```

---

# How React Uses Local Storage

React state disappears after refresh.

Example:

```jsx
const [theme, setTheme] =
  useState("light");
```

Refresh:

```jsx
theme -> reset
```

---

Solution:

Store in localStorage.

---

## Save State

```jsx
useEffect(() => {
  localStorage.setItem(
    "theme",
    theme
  );
}, [theme]);
```

---

## Restore State

```jsx
const [theme, setTheme] =
  useState(
    localStorage.getItem("theme")
    || "light"
  );
```

---

# Better React Pattern

Lazy Initialization

```jsx
const [theme, setTheme] =
  useState(() => {
    return (
      localStorage.getItem("theme")
      || "light"
    );
  });
```

Why?

Because localStorage is read only once.

Performance improvement.

---

# Custom Hook Example

```jsx
import { useState } from "react";

function useLocalStorage(
  key,
  initialValue
) {
  const [value, setValue] =
    useState(() => {
      const stored =
        localStorage.getItem(key);

      return stored
        ? JSON.parse(stored)
        : initialValue;
    });

  const saveValue = (newValue) => {
    setValue(newValue);

    localStorage.setItem(
      key,
      JSON.stringify(newValue)
    );
  };

  return [value, saveValue];
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

---

# Advanced: Storage Event

When another tab updates storage.

```js
window.addEventListener(
  "storage",
  (event) => {
    console.log(event.key);
    console.log(event.newValue);
  }
);
```

Used for:

* Multi-tab sync
* Logout from all tabs
* Theme sync

---

# Security Warning

❌ Never store:

* Passwords
* Bank details
* Secret keys

Because anyone can open:

```js
localStorage.getItem("token")
```

in DevTools.

---

# Where Is Data Stored?

Chrome:

```
F12
→ Application
→ Local Storage
→ Session Storage
```

You can view, edit, delete values.

---
