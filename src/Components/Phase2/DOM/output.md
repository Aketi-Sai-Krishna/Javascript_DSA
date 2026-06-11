For **Day 11: DOM Basics**, DSA-style questions are not really applicable because the DOM is about browser APIs, not data structures and algorithms. Instead, interviews focus on DOM concepts, coding tasks, and practical problem-solving.

# DOM Interview Questions & Answers (Beginner → Advanced)

## Beginner Level (1–20)

### 1. What is DOM?

**Answer:** DOM (Document Object Model) is a tree-like representation of an HTML document that JavaScript can access and modify.

---

### 2. Why do we need DOM?

**Answer:** To dynamically change webpage content, structure, and styles using JavaScript.

---

### 3. What object represents the webpage in JavaScript?

**Answer:**

```js
document
```

---

### 4. How do you select an element by ID?

```js
document.getElementById("title");
```

---

### 5. How do you select elements by class?

```js
document.getElementsByClassName("msg");
```

---

### 6. How do you select elements by tag name?

```js
document.getElementsByTagName("p");
```

---

### 7. What does `querySelector()` return?

**Answer:** The first matching element.

---

### 8. What does `querySelectorAll()` return?

**Answer:** A NodeList containing all matching elements.

---

### 9. Difference between `getElementById()` and `querySelector()`?

**Answer:**

* `getElementById()` selects by ID only.
* `querySelector()` accepts any CSS selector.

---

### 10. How do you change text?

```js
element.textContent = "Hello";
```

---

### 11. How do you insert HTML?

```js
element.innerHTML = "<h1>Hello</h1>";
```

---

### 12. Difference between `textContent` and `innerHTML`?

**Answer:**

```js
textContent
```

Treats content as plain text.

```js
innerHTML
```

Parses content as HTML.

---

### 13. What happens if an ID doesn't exist?

```js
document.getElementById("abc");
```

**Answer:** Returns `null`.

---

### 14. How do you read existing text?

```js
element.textContent;
```

---

### 15. How do you change an image source?

```js
img.src = "logo.png";
```

---

### 16. What is an HTMLCollection?

**Answer:** A collection of DOM elements returned by methods like `getElementsByClassName()`.

---

### 17. What is a NodeList?

**Answer:** A collection returned by `querySelectorAll()`.

---

### 18. Which is preferred in modern JavaScript?

```js
querySelector()
querySelectorAll()
```

because they support CSS selectors.

---

### 19. What is DOM manipulation?

**Answer:** Modifying HTML elements dynamically using JavaScript.

---

### 20. Can JavaScript create new elements?

**Answer:** Yes.

```js
document.createElement("p");
```

---

# Intermediate Level (21–40)

### 21. How do you create a new paragraph?

```js
const p = document.createElement("p");
```

---

### 22. How do you add text to a created element?

```js
p.textContent = "Hello";
```

---

### 23. How do you append an element?

```js
parent.appendChild(p);
```

---

### 24. How do you remove an element?

```js
element.remove();
```

---

### 25. How do you access a parent element?

```js
element.parentElement;
```

---

### 26. How do you access child elements?

```js
element.children;
```

---

### 27. First child?

```js
element.firstElementChild;
```

---

### 28. Last child?

```js
element.lastElementChild;
```

---

### 29. Next sibling?

```js
element.nextElementSibling;
```

---

### 30. Previous sibling?

```js
element.previousElementSibling;
```

---

### 31. How do you add a CSS class?

```js
element.classList.add("active");
```

---

### 32. Remove a CSS class?

```js
element.classList.remove("active");
```

---

### 33. Toggle a class?

```js
element.classList.toggle("active");
```

---

### 34. Check whether a class exists?

```js
element.classList.contains("active");
```

---

### 35. How do you get an attribute?

```js
element.getAttribute("src");
```

---

### 36. How do you set an attribute?

```js
element.setAttribute("src", "img.png");
```

---

### 37. Difference between property and attribute?

**Answer:**

```html
<input value="Sai">
```

Attribute:

```js
getAttribute("value")
```

Property:

```js
input.value
```

---

### 38. How do you change CSS using JavaScript?

```js
element.style.color = "red";
```

---

### 39. Why is excessive DOM manipulation slow?

**Answer:** Every DOM update may trigger layout calculations and repainting.

---

### 40. What is DOM Traversal?

**Answer:** Moving between parent, child, and sibling elements.

---

# Advanced Level (41–60)

### 41. What is a DOM Tree?

**Answer:** Hierarchical representation of HTML elements.

---

### 42. What is a DOM Node?

**Answer:** Every element, text, comment, and document is a node.

---

### 43. Difference between Element and Node?

**Answer:**

```text
All Elements are Nodes
Not all Nodes are Elements
```

---

### 44. What is a Text Node?

**Answer:** Text content inside an element.

---

### 45. What is Event Delegation?

**Answer:** Attaching one event listener to a parent instead of multiple children.

---

### 46. Why use Event Delegation?

**Answer:**

* Better performance
* Less memory usage
* Handles dynamically added elements

---

### 47. What is Reflow?

**Answer:** Browser recalculates layout after DOM changes.

---

### 48. What is Repaint?

**Answer:** Browser redraws visual changes.

---

### 49. Which is more expensive?

```text
Reflow > Repaint
```

---

### 50. Why is Virtual DOM faster?

**Answer:** React compares changes in memory before updating the real DOM.

---

### 51. Difference between HTMLCollection and NodeList?

**Answer:**

```text
HTMLCollection → Live
NodeList → Usually Static
```

---

### 52. What does "Live Collection" mean?

**Answer:** Updates automatically when DOM changes.

---

### 53. Why use `querySelector` in modern code?

**Answer:** Flexible CSS-selector support.

---

### 54. What is DOMContentLoaded?

**Answer:** Fires when HTML is fully loaded and parsed.

---

### 55. Why place scripts at the end of body?

**Answer:** Ensures elements exist before JavaScript runs.

---

### 56. What happens if JS runs before HTML loads?

**Answer:** Element selection may return `null`.

---

### 57. What is the difference between `innerText` and `textContent`?

**Answer:**

```text
innerText → visible text only
textContent → all text content
```

---

### 58. What is `document.body`?

**Answer:** Reference to the body element.

---

### 59. What is `document.head`?

**Answer:** Reference to the head element.

---

### 60. What is the root node of the DOM?

**Answer:**

```js
document
```

---

# React-Oriented DOM Questions (61–70)

### 61. Does React use the DOM?

**Answer:** Yes, through the Virtual DOM.

### 62. What is Virtual DOM?

**Answer:** An in-memory representation of the real DOM.

### 63. Why did React introduce Virtual DOM?

**Answer:** To minimize expensive real DOM updates.

### 64. Does React use `getElementById()` often?

**Answer:** No.

### 65. What replaces DOM updates in React?

**Answer:** State updates.

### 66. What triggers re-rendering in React?

**Answer:** State or props changes.

### 67. Why learn DOM before React?

**Answer:** React is built on DOM concepts.

### 68. What does React eventually update?

**Answer:** The real browser DOM.

### 69. What is Declarative UI?

**Answer:** Describe the UI; React updates the DOM.

### 70. What is Imperative UI?

**Answer:** Manually updating DOM elements.

---

# Must-Know Interview Topics Before Moving On

You should confidently explain:

```text
✓ What DOM is
✓ document object
✓ DOM Tree
✓ getElementById
✓ querySelector
✓ querySelectorAll
✓ textContent
✓ innerHTML
✓ createElement
✓ appendChild
✓ remove
✓ classList
✓ Parent/Child/Sibling
✓ DOM Traversal
✓ HTMLCollection
✓ NodeList
✓ Reflow
✓ Repaint
✓ Virtual DOM
```
