# JavaScript & React Forms — Complete Notes

---

# 1. What is a Form?

A form is a collection of fields used to collect data from users.

Examples:

* Login Form
* Registration Form
* Contact Form
* Search Form
* Job Application Form
* Settings Form

Example:

```html
<form>
  <input type="text" />
  <button>Submit</button>
</form>
```

Purpose:

```text
User Input
↓
Validation
↓
Submit Data
↓
API/Server
```

---

# 2. Common Form Elements

## Text Input

```html
<input type="text" />
```

Used for:

* Name
* Username
* City

---

## Email Input

```html
<input type="email" />
```

Used for:

* Email addresses

---

## Password Input

```html
<input type="password" />
```

Used for:

* Passwords

---

## Number Input

```html
<input type="number" />
```

Used for:

* Age
* Salary
* Quantity

---

## Checkbox

```html
<input type="checkbox" />
```

Used for:

```text
☑ Accept Terms
☑ Subscribe Newsletter
```

---

## Radio Buttons

```html
<input type="radio" />
```

Used when selecting one option.

Example:

```text
Male
Female
Other
```

---

## Select Dropdown

```html
<select>
  <option>India</option>
  <option>USA</option>
</select>
```

---

## Textarea

```html
<textarea></textarea>
```

Used for:

* Feedback
* Comments
* About Yourself

---

## File Upload

```html
<input type="file" />
```

Used for:

* Resume Upload
* Profile Image

---

# 3. Forms and Events

Forms work entirely through events.

| User Action    | Event        |
| -------------- | ------------ |
| Typing         | input/change |
| Click input    | focus        |
| Leave input    | blur         |
| Check checkbox | change       |
| Submit form    | submit       |

---

# 4. Important Form Events

## Input Event

Runs whenever user types.

```javascript
input.addEventListener("input", (event) => {
  console.log(event.target.value);
});
```

Example:

```text
User Types: Sai

Output:
S
Sa
Sai
```

---

## Change Event

Runs after value changes.

```javascript
input.addEventListener("change", (event) => {
  console.log(event.target.value);
});
```

---

## Focus Event

Runs when field receives focus.

```javascript
input.addEventListener("focus", () => {
  console.log("Focused");
});
```

---

## Blur Event

Runs when field loses focus.

```javascript
input.addEventListener("blur", () => {
  console.log("Left field");
});
```

Commonly used for validation.

---

## Submit Event

Runs when form is submitted.

```javascript
form.addEventListener("submit", (event) => {
  console.log("Submitted");
});
```

---

# 5. event.target

Most important concept in forms.

```javascript
input.addEventListener("input", (event) => {
  console.log(event.target.value);
});
```

If user types:

```text
Krishna
```

Then:

```javascript
event.target.value
```

returns:

```text
Krishna
```

---

# 6. event.currentTarget

Element where event handler is attached.

```javascript
form.addEventListener("submit", (event) => {
  console.log(event.currentTarget);
});
```

---

# 7. preventDefault()

Default form behavior:

```text
Submit
↓
Page Refresh
```

Prevent it:

```javascript
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
```

Result:

```text
Submit
↓
No Refresh
↓
Custom Logic Executes
```

---

# 8. Reading Form Values

```html
<input id="name" />
```

```javascript
const name =
  document.getElementById("name").value;

console.log(name);
```

---

# 9. Form Validation

Validation means checking whether data is correct before submission.

Example:

```javascript
if(name === ""){
  console.log("Name Required");
}
```

---

# 10. Validation Types

## Required Field

```javascript
if(!name){
  console.log("Required");
}
```

---

## Email Validation

```javascript
if(!email.includes("@")){
  console.log("Invalid Email");
}
```

---

## Password Length

```javascript
if(password.length < 8){
  console.log("Too Short");
}
```

---

## Confirm Password

```javascript
if(password !== confirmPassword){
  console.log("Passwords Don't Match");
}
```

---

## Regex Validation

```javascript
const emailRegex =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

---

# 11. Complete Vanilla JS Form Example

```html
<form id="form">
  <input id="name" />
  <input id="email" />
  <button>Submit</button>
</form>
```

```javascript
const form =
  document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name =
    document.getElementById("name").value;

  const email =
    document.getElementById("email").value;

  if(name === ""){
    alert("Name Required");
    return;
  }

  if(!email.includes("@")){
    alert("Invalid Email");
    return;
  }

  console.log("Success");
});
```

---

# React Forms

---

# 12. Controlled Components

React controls the input value through state.

```jsx
const [name, setName] = useState("");
```

```jsx
<input
  value={name}
  onChange={(e) =>
    setName(e.target.value)
  }
/>
```

Flow:

```text
User Types
↓
onChange
↓
event.target.value
↓
setState
↓
Re-render
```

Most common React pattern.

---

# 13. Uncontrolled Components

Browser controls the value.

```jsx
const inputRef = useRef();
```

```jsx
<input ref={inputRef} />
```

```jsx
console.log(inputRef.current.value);
```

Used less often.

---

# 14. React Form Submission

```jsx
const handleSubmit = (e) => {
  e.preventDefault();

  console.log("Submitted");
};
```

```jsx
<form onSubmit={handleSubmit}>
```

---

# 15. React Input Handling

Single input:

```jsx
const [name, setName] = useState("");
```

```jsx
<input
  value={name}
  onChange={(e) =>
    setName(e.target.value)
  }
/>
```

---

# 16. Multiple Inputs

State:

```jsx
const [form, setForm] = useState({
  name: "",
  email: ""
});
```

Inputs:

```jsx
<input
  name="name"
  value={form.name}
  onChange={handleChange}
/>

<input
  name="email"
  value={form.email}
  onChange={handleChange}
/>
```

Handler:

```jsx
const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  });
};
```

Very common in interviews.

---

# 17. React Validation

```jsx
const handleSubmit = (e) => {
  e.preventDefault();

  if(!form.name.trim()){
    alert("Name Required");
    return;
  }

  if(!form.email.includes("@")){
    alert("Invalid Email");
    return;
  }

  console.log("Success");
};
```

---

# 18. Important React Form Events

## onChange

```jsx
<input onChange={handleChange} />
```

Runs when value changes.

---

## onFocus

```jsx
<input onFocus={handleFocus} />
```

Runs when input gets focus.

---

## onBlur

```jsx
<input onBlur={handleBlur} />
```

Runs when input loses focus.

---

## onSubmit

```jsx
<form onSubmit={handleSubmit}>
```

Runs on form submission.

---

# 19. Checkbox Handling

```jsx
const [checked, setChecked] =
  useState(false);
```

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

not

```javascript
e.target.value
```

---

# 20. Radio Button Handling

```jsx
<input
  type="radio"
  value="male"
  onChange={(e) =>
    setGender(e.target.value)
  }
/>
```

---

# 21. Select Dropdown Handling

```jsx
<select
  value={country}
  onChange={(e) =>
    setCountry(e.target.value)
  }
>
  <option>India</option>
  <option>USA</option>
</select>
```

---

# 22. Textarea Handling

```jsx
<textarea
  value={about}
  onChange={(e) =>
    setAbout(e.target.value)
  }
/>
```

---

# 23. File Upload Handling

```jsx
<input
  type="file"
  onChange={(e) =>
    console.log(e.target.files[0])
  }
/>
```

---

# 24. Popular React Form Libraries

### React Hook Form

Most popular today.

Benefits:

* Less re-renders
* Better performance
* Easy validation

---

### Formik

Older but still used.

---

### Zod

Validation schema library.

Example:

```javascript
email: z.string().email()
```

---

### Yup

Another validation library.

---

# Industry Form Flow

```text
User Opens Form
↓
Focus Input
↓
Type Data
↓
onChange
↓
State Update
↓
Validation
↓
Error Messages
↓
Submit
↓
preventDefault()
↓
API Call
↓
Success/Error Response
↓
UI Update
```

---

# Interview Revision Sheet

### Must Know

✅ Form

✅ Input

✅ event.target

✅ event.currentTarget

✅ preventDefault()

✅ input event

✅ change event

✅ focus event

✅ blur event

✅ submit event

✅ Controlled Components

✅ Uncontrolled Components

✅ React State + Forms

✅ Single Handler for Multiple Inputs

✅ Validation

✅ Checkbox Handling

✅ Radio Handling

✅ Select Handling

✅ Textarea Handling

✅ File Upload Handling

✅ React Hook Form basics

---

# One-Line Summary

```text
Forms are event-driven UI elements that collect user data,
validate it, manage state, and submit it to a server.
In React, forms are usually controlled components managed
through state and events such as onChange, onBlur, and onSubmit.
```

For your React developer journey, understanding everything in these notes is enough to confidently build **login forms, registration forms, search filters, settings pages, profile forms, and job application forms** used in real products like the ones you've worked on at Curately AI.
