Excellent. You're now entering a topic that separates a beginner frontend developer from someone who understands **performance optimization**.

---

# DAY 18

## Debouncing

## Throttling

---

# First Understand The Problem

Imagine you have a search box.

```text
Search:
[____________]
```

User types:

```text
S
Sa
Sai
Sai K
Sai Kr
Sai Kris
```

Every key press calls:

```js
fetchData();
```

So:

```text
6 letters
=
6 API calls
```

Bad.

Why?

```text
More API calls
More server load
Slower app
Wasted internet
```

We need a solution.

---

# Debouncing (10 Year Old Version)

Imagine your mom tells you:

```text
Don't interrupt me.

Wait until I finish talking.
```

You keep asking:

```text
Mom...
Mom...
Mom...
Mom...
```

Mom ignores all of them.

When you finally stop talking:

```text
Mom: Okay, now tell me.
```

That's Debouncing.

---

# Definition

> Debouncing delays a function call until a certain amount of time has passed since the last event occurred.

---

# Search Box Example

User types:

```text
S
Sa
Sai
Sai K
Sai Kr
```

Every key press resets the timer.

When the user stops typing:

```text
Wait 500ms
```

Then:

```js
fetchData();
```

runs once.

---

# Visual

Without Debounce

```text
S      API
Sa     API
Sai    API
SaiK   API
SaiKr  API
```

5 API Calls

---

With Debounce

```text
S
Sa
Sai
SaiK
SaiKr

(wait)

API
```

1 API Call

---

# Debounce Code

```js
function debounce(fn, delay) {
  let timer;

  return function () {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}
```

---

# Real-Life Uses of Debounce

### Search Bar

```text
Google Search
Amazon Search
LinkedIn Search
```

---

### Username Validation

```text
Check username availability
```

---

### Email Validation

```text
Check email format
```

---

# Throttling (10 Year Old Version)

Imagine your teacher says:

```text
You may drink water

ONLY ONCE EVERY 10 MINUTES
```

Even if you ask:

```text
Water
Water
Water
Water
Water
```

Teacher allows:

```text
1 drink

wait

1 drink

wait

1 drink
```

That's Throttling.

---

# Definition

> Throttling limits how often a function can execute within a specific time interval.

---

# Scroll Example

User scrolls:

```text
scroll
scroll
scroll
scroll
scroll
scroll
```

Without throttle:

```text
1000 scroll events
1000 function calls
```

Bad.

---

With throttle:

```text
Execute every 500ms
```

Result:

```text
1000 events
10 function calls
```

---

# Visual

Without Throttle

```text
Scroll
Scroll
Scroll
Scroll
Scroll

Function
Function
Function
Function
Function
```

---

With Throttle

```text
Scroll
Scroll
Scroll
Scroll
Scroll

Function

(wait)

Function

(wait)

Function
```

---

# Throttle Code

```js
function throttle(fn, delay) {
  let allow = true;

  return function () {
    if (!allow) return;

    fn();

    allow = false;

    setTimeout(() => {
      allow = true;
    }, delay);
  };
}
```

---

# Real-Life Uses of Throttle

### Infinite Scroll

Instagram

Facebook

LinkedIn

---

### Window Resize

```text
resize
resize
resize
resize
```

Don't execute every time.

---

### Mouse Move

```text
Drawing apps
Games
```

---

# Easy Memory Trick

## Debounce

```text
WAIT
UNTIL USER STOPS
```

---

## Throttle

```text
ALLOW EXECUTION
AT FIXED INTERVALS
```

---

# Difference

| Debounce               | Throttle                    |
| ---------------------- | --------------------------- |
| Waits until user stops | Executes periodically       |
| Usually 1 execution    | Multiple limited executions |
| Search bars            | Scroll events               |
| API calls              | Mouse/Resize/Scroll         |

---
