# JavaScript DOM (Document Object Model) Notes

## Beginner → Advanced

---

# 1. What is DOM?

DOM stands for:

```text
Document Object Model
```

The browser converts HTML into a JavaScript object structure called the DOM.

HTML:

```html
<html>
  <body>
    <h1>Hello</h1>
    <button>Click</button>
  </body>
</html>
```

Browser creates:

```text
Document
│
└── html
     │
     └── body
           │
           ├── h1
           │
           └── button
```

JavaScript can access and manipulate these elements.

---

# Why DOM Exists?

Without DOM:

```js
console.log("Hello");
```

Output:

```text
Hello
```

Only prints in console.

With DOM:

```js
document.getElementById("title").textContent = "Welcome";
```

Changes the webpage itself.

---

# 2. The document Object

The browser provides:

```js
document
```

Everything in DOM starts here.

Examples:

```js
document.getElementById()
document.querySelector()
document.createElement()
```

Think:

```text
document
│
└── Entry Point To Entire Web Page
```

---

# 3. Selecting Elements

---

## getElementById()

Selects one element.

HTML:

```html
<h1 id="title">Hello</h1>
```

JavaScript:

```js
const heading =
document.getElementById("title");
```

---

## getElementsByClassName()

Selects multiple elements.

HTML:

```html
<p class="msg">One</p>
<p class="msg">Two</p>
```

JavaScript:

```js
const msgs =
document.getElementsByClassName("msg");
```

Returns:

```text
HTMLCollection
```

---

## getElementsByTagName()

HTML:

```html
<p>One</p>
<p>Two</p>
```

JavaScript:

```js
const tags =
document.getElementsByTagName("p");
```

---

## querySelector()

Returns first matching element.

HTML:

```html
<p class="msg">One</p>
<p class="msg">Two</p>
```

JavaScript:

```js
const msg =
document.querySelector(".msg");
```

Returns:

```text
First Match Only
```

---

## querySelectorAll()

Returns all matches.

```js
const msgs =
document.querySelectorAll(".msg");
```

Returns:

```text
NodeList
```

---

# Interview Question

Difference?

```js
querySelector()
```

vs

```js
querySelectorAll()
```

Answer:

```text
querySelector()
→ first matching element

querySelectorAll()
→ all matching elements
```

---

# 4. Reading Content

HTML:

```html
<h1 id="title">Hello</h1>
```

JavaScript:

```js
const title =
document.getElementById("title");

console.log(title.textContent);
```

Output:

```text
Hello
```

---

# 5. Changing Content

HTML:

```html
<h1 id="title">Hello</h1>
```

JavaScript:

```js
title.textContent = "Welcome";
```

Result:

```text
Welcome
```

---

# 6. textContent vs innerHTML

---

## textContent

```js
element.textContent =
"<h1>Hello</h1>";
```

Output:

```text
<h1>Hello</h1>
```

Shows plain text.

---

## innerHTML

```js
element.innerHTML =
"<h1>Hello</h1>";
```

Output:

```html
<h1>Hello</h1>
```

Creates actual HTML.

---

# Rule

Use:

```js
textContent
```

when inserting text.

Use:

```js
innerHTML
```

when inserting HTML.

---

# 7. Changing Attributes

HTML:

```html
<img id="logo">
```

JavaScript:

```js
const logo =
document.getElementById("logo");

logo.src = "image.png";
```

---

## getAttribute()

```js
logo.getAttribute("src");
```

---

## setAttribute()

```js
logo.setAttribute(
 "src",
 "image.png"
);
```

---

# 8. Changing Styles

HTML:

```html
<h1 id="title">Hello</h1>
```

JavaScript:

```js
title.style.color = "red";
```

---

More examples:

```js
title.style.fontSize = "40px";

title.style.backgroundColor =
"yellow";
```

---

# 9. Class Manipulation

HTML:

```html
<h1 class="title">
Hello
</h1>
```

---

## Add Class

```js
element.classList.add("active");
```

---

## Remove Class

```js
element.classList.remove("active");
```

---

## Toggle Class

```js
element.classList.toggle("active");
```

---

## Check Class

```js
element.classList.contains(
 "active"
);
```

Returns:

```text
true / false
```

---

# 10. Creating Elements

JavaScript:

```js
const p =
document.createElement("p");
```

Creates:

```html
<p></p>
```

---

Add text:

```js
p.textContent = "Hello";
```

---

# 11. Appending Elements

HTML:

```html
<div id="box"></div>
```

JavaScript:

```js
const box =
document.getElementById("box");

box.appendChild(p);
```

Result:

```html
<div id="box">
   <p>Hello</p>
</div>
```

---

# 12. Removing Elements

```js
element.remove();
```

Example:

```js
document.getElementById("title")
.remove();
```

---

# 13. Parent, Child, Sibling

HTML:

```html
<div id="parent">
   <p>One</p>
   <p>Two</p>
</div>
```

---

Parent:

```js
element.parentElement
```

---

Children:

```js
element.children
```

---

First Child:

```js
element.firstElementChild
```

---

Last Child:

```js
element.lastElementChild
```

---

Next Sibling:

```js
element.nextElementSibling
```

---

Previous Sibling:

```js
element.previousElementSibling
```

---

# 14. DOM Traversal

Move through DOM tree.

```text
Parent
↑
Current
↓
Child
```

Used heavily in:

```text
Forms
Tables
Dropdowns
Dynamic UI
```

---

# 15. Event Listeners (Preview)

HTML:

```html
<button id="btn">
Click
</button>
```

JavaScript:

```js
const btn =
document.getElementById("btn");

btn.addEventListener(
 "click",
 function(){
    console.log("Clicked");
 }
);
```

This is the bridge between:

```text
DOM
↓
User Interaction
↓
React Events
```

---

# 16. DOM Collections

---

## HTMLCollection

Returned by:

```js
getElementsByClassName()
```

---

## NodeList

Returned by:

```js
querySelectorAll()
```

---

Difference:

```text
HTMLCollection
→ Live Collection

NodeList
→ Static Collection
```

Advanced interview topic.

---

# 17. Reflow & Repaint (Advanced)

When DOM changes:

```js
element.textContent = "Hello";
```

Browser may:

```text
Recalculate Layout
↓
Repaint Screen
```

Too many DOM updates:

```text
Slower Performance
```

Reason React uses Virtual DOM.

---

# 18. DOM and React

Vanilla JS:

```js
document.getElementById("title")
.textContent = "Welcome";
```

React:

```jsx
const [title,setTitle] =
useState("Hello");

<h1>{title}</h1>
```

React handles DOM updates automatically.

---

# DOM Topics Most Important For React Developers

Master these:

```text
✓ document
✓ getElementById
✓ querySelector
✓ querySelectorAll
✓ textContent
✓ innerHTML
✓ classList
✓ createElement
✓ appendChild
✓ remove
✓ Event Listeners
✓ DOM Traversal Basics
```

---

