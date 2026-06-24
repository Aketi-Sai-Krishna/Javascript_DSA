Excellent question.

Many developers learn:

```js
debounce()
throttle()
```

but fail interviews because they only know the definition and not **where and why to use them**.

Let's focus on **real interview style questions**.

---

# Round 1: Beginner Interview Questions

### Q1

What is Debouncing?

---

### Q2

What is Throttling?

---

### Q3

What problem does Debouncing solve?

---

### Q4

What problem does Throttling solve?

---

### Q5

What is the difference between Debouncing and Throttling?

---

### Q6

Which one would you use for a Search Bar?

Why?

---

### Q7

Which one would you use for Infinite Scrolling?

Why?

---

### Q8

Can you give a real-world example of Debouncing?

---

### Q9

Can you give a real-world example of Throttling?

---

### Q10

Which is more suitable for API search requests?

Why?

---

# Round 2: Scenario-Based Questions

These are very common in frontend interviews.

---

## Q11

You are building Google Search.

User types:

```text
s
sa
sai
sai k
sai kr
```

Every keypress triggers:

```js
fetchData()
```

What problem do you see?

How would you solve it?

---

## Q12

You are building LinkedIn.

When the user scrolls to the bottom:

```text
Load more jobs
```

User scrolls very fast.

What problem can occur?

Would you use:

```text
Debounce
or
Throttle
```

Why?

---

## Q13

You are building an e-commerce website.

Search suggestions appear while typing.

What optimization would you use?

Why?

---

## Q14

You are building a map application.

As the user drags the map:

```text
Latitude changes
Longitude changes
```

API requests are triggered.

Would you use debounce or throttle?

Why?

---

## Q15

You are building a window resize handler.

User continuously resizes the browser.

Would you use debounce or throttle?

Why?

---

# Round 3: React Interview Questions

These are extremely common.

---

## Q16

How would you implement search optimization in React?

---

## Q17

Why is debouncing useful in React applications?

---

## Q18

Why is throttling useful in React applications?

---

## Q19

Have you used debounce in any project?

Explain the use case.

---

## Q20

Have you used throttle in any project?

Explain the use case.

---

## Q21

How would you debounce an API call in React?

Explain the flow.

---

## Q22

How would you optimize an infinite scroll component?

---

## Q23

How would you reduce API calls from a search input?

---

## Q24

What React hook is commonly used while implementing debounce?

---

## Q25

What happens if you don't debounce search requests?

---

# Round 4: Coding Interview Questions

---

## Q26

Write your own debounce function.

---

## Q27

Write your own throttle function.

---

## Q28

Create a search input.

Requirements:

```text
User types
Wait 500ms
Call API
```

Implement it.

---

## Q29

Create a button.

Requirements:

```text
User clicks repeatedly
Allow execution only once every 2 seconds
```

Implement it.

---

## Q30

Create a scroll listener.

Requirements:

```text
Function executes once every second
```

Implement it.

---

# Round 5: Senior-Level Questions

These are asked in Product Companies.

---

## Q31

Explain how debounce works internally.

---

## Q32

Why does debounce use `clearTimeout()`?

---

## Q33

Why does debounce use closures?

---

## Q34

Explain how throttle works internally.

---

## Q35

Why does throttle need state between executions?

---

## Q36

What happens if you remove `clearTimeout()` from debounce?

---

## Q37

What happens if debounce delay is:

```text
0ms
```

---

## Q38

What happens if debounce delay is:

```text
10 seconds
```

---

## Q39

What happens if throttle interval is too small?

---

## Q40

What happens if throttle interval is too large?

---

# Real React Project Questions

These are closest to your React developer role.

---

## Q41

You have an Applicant Search page.

Every keystroke hits:

```js
/api/applicants
```

How would you optimize it?

---

## Q42

You have a Job Search page.

500 recruiters use it simultaneously.

How does debouncing help the backend?

---

## Q43

You have a dashboard chart.

Data recalculates on window resize.

What optimization would you use?

---

## Q44

You have a drag-and-drop feature.

Mouse moves hundreds of times per second.

What optimization would you use?

---

## Q45

You have a notification bell.

User clicks 20 times rapidly.

How would you prevent duplicate requests?

---

# Most Common Interview Question

If an interviewer asks only one thing:

> Explain Debouncing and Throttling with real-world examples and tell me where you used them in React.

A good answer is:

> Debouncing delays execution until the user stops performing an action. I would use it in search inputs to reduce unnecessary API calls. For example, in an applicant search page, instead of making a request on every keystroke, I would wait 500ms after the user stops typing and then make a single request.
>
> Throttling limits how often a function can execute within a time interval. I would use it for scroll events, resize events, drag-and-drop, or mouse movement tracking where events fire continuously. It improves performance by reducing the number of function executions.

If you can answer Questions **1–25 confidently**, you're already at a strong React interview level for this topic.
