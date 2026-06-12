# Forms & Input Handling — Interview Questions (Beginner → Advanced React)

---

# Beginner Level

### 1. What is a form?

**Answer:**
A form is a collection of input elements used to collect data from users and submit it to a server or process it in JavaScript.

Examples:

* Login Form
* Registration Form
* Contact Form

---

### 2. What is the purpose of a form?

**Answer:**

* Collect user input
* Validate data
* Submit data to backend APIs

---

### 3. What are common form elements?

**Answer:**

* Input
* Textarea
* Select
* Checkbox
* Radio Button
* File Upload
* Button

---

### 4. What event occurs when a user types inside an input field?

**Answer:**

```text
input event
```

In React:

```jsx
onChange
```

---

### 5. What is `event.target`?

**Answer:**

`event.target` refers to the element that triggered the event.

Example:

```jsx
<input onChange={(e) => console.log(e.target.value)} />
```

If user types:

```text
Sai
```

then:

```javascript
e.target.value
```

returns:

```text
Sai
```

---

### 6. What is the difference between `event.target` and `event.currentTarget`?

**Answer:**

```text
event.target
```

The element that triggered the event.

```text
event.currentTarget
```

The element where the event handler is attached.

---

### 7. What is form validation?

**Answer:**

Validation checks whether user input is correct before submission.

Examples:

* Required fields
* Email format
* Password length

---

### 8. Why do we use `preventDefault()`?

**Answer:**

By default, form submission refreshes the page.

```javascript
e.preventDefault();
```

prevents page refresh and allows custom handling.

---

# Intermediate Level

### 9. What is controlled input in React?

**Answer:**

An input controlled by React state.

Example:

```jsx
const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

React controls the value.

---

### 10. What is an uncontrolled component?

**Answer:**

An input managed by the browser instead of React state.

Example:

```jsx
const inputRef = useRef();

<input ref={inputRef} />
```

Access value using:

```javascript
inputRef.current.value
```

---

### 11. Difference between controlled and uncontrolled components?

| Controlled           | Uncontrolled           |
| -------------------- | ---------------------- |
| React controls value | Browser controls value |
| Uses state           | Uses ref               |
| More common          | Less common            |
| Easier validation    | Harder validation      |

---

### 12. Why are controlled components preferred?

**Answer:**

Because React always knows the latest value.

Benefits:

* Easy validation
* Easy error handling
* Predictable state management

---

### 13. How do you handle multiple form fields using a single handler?

```jsx
const [form, setForm] = useState({
  name: "",
  email: ""
});
```

```jsx
const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  });
};
```

---

### 14. What is computed property syntax in forms?

```javascript
[e.target.name]
```

It dynamically updates object properties.

Example:

```javascript
{
  name: "Sai",
  email: "abc@gmail.com"
}
```

---

### 15. Difference between `onChange` and `onBlur`?

**onChange**

Runs when value changes.

```jsx
<input onChange={handleChange} />
```

**onBlur**

Runs when user leaves the field.

```jsx
<input onBlur={handleBlur} />
```

---

### 16. Difference between `onChange` and `onInput`?

**React**

Usually uses:

```jsx
onChange
```

for live typing updates.

**Vanilla JS**

Uses:

```javascript
input
```

event.

---

### 17. How do you validate an email?

Simple:

```javascript
email.includes("@")
```

Professional:

```javascript
const regex =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

---

### 18. How do you validate password confirmation?

```javascript
if(password !== confirmPassword){
  // error
}
```

---

# Advanced React Questions

### 19. What happens when a user types in a controlled input?

Flow:

```text
User Types
↓
onChange Fires
↓
event.target.value
↓
setState()
↓
Component Re-renders
↓
New Value Displayed
```

---

### 20. Why can controlled forms cause more re-renders?

Because every keystroke updates state.

```text
Type
↓
State Update
↓
Re-render
```

---

### 21. How does React Hook Form improve performance?

**Answer:**

React Hook Form uses refs internally and reduces unnecessary re-renders.

Benefits:

* Faster forms
* Better performance
* Less boilerplate code

---

### 22. What is schema validation?

Validation rules defined in a separate schema.

Example:

```javascript
email: z.string().email()
```

Used with:

* Zod
* Yup

---

### 23. Why do companies use React Hook Form instead of plain useState?

Because:

* Better performance
* Less code
* Easier validation
* Easier error management

---

### 24. How do you handle checkbox values?

```jsx
<input
  type="checkbox"
  checked={checked}
  onChange={(e) =>
    setChecked(e.target.checked)
  }
/>
```

Notice:

```javascript
e.target.checked
```

instead of:

```javascript
e.target.value
```

---

### 25. How do you handle file uploads?

```jsx
<input
  type="file"
  onChange={(e) =>
    console.log(e.target.files[0])
  }
/>
```

---

### 26. Why is `key` not related to forms but important in dynamic forms?

When rendering dynamic fields:

```jsx
fields.map(field => (
  <input key={field.id} />
))
```

React uses keys to identify elements efficiently.

---

### 27. What is form submission flow in React?

```text
User Fills Form
↓
onChange Updates State
↓
Validation
↓
User Clicks Submit
↓
onSubmit Fires
↓
preventDefault()
↓
API Call
↓
Success/Error Handling
```

---

# Frequently Asked React Interview Question

### Explain controlled components in React.

**Sample Answer:**

> A controlled component is a form element whose value is controlled by React state. The input value is stored in state and updated using an onChange handler. This gives React full control over the form data, making validation, conditional rendering, and form submission easier.

Example:

```jsx
const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

---

# Questions You Must Be Able to Answer Without Thinking

1. What is a form?
2. What is form validation?
3. What is `event.target`?
4. What is `preventDefault()`?
5. Difference between `onChange` and `onBlur`?
6. What is a controlled component?
7. What is an uncontrolled component?
8. Difference between controlled and uncontrolled components?
9. How do you handle multiple inputs with one handler?
10. Why use React Hook Form?
11. How do you validate a form?
12. How do you handle checkboxes?
13. How do you handle file uploads?
14. What happens when a user types in a controlled input?
15. Explain the complete React form submission flow.

If you can answer these 15 questions confidently, you're already at the level expected from most React developers with 1–3 years of experience when it comes to forms and input handling.
