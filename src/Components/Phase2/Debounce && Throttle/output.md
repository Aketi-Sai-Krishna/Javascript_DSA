Excellent. Since you're learning for **React interviews**, I'll give concise interview-style answers rather than huge paragraphs.

# Round 1 — Beginner

## 1. What is Debouncing?

> Debouncing delays a function execution until a specified time has passed since the last event occurred.

---

## 2. What is Throttling?

> Throttling limits a function to execute only once within a specified time interval.

---

## 3. What problem does Debouncing solve?

> It prevents excessive function executions and unnecessary API calls.

---

## 4. What problem does Throttling solve?

> It prevents performance issues caused by high-frequency events such as scrolling and resizing.

---

## 5. Difference between Debouncing and Throttling?

| Debouncing             | Throttling                  |
| ---------------------- | --------------------------- |
| Waits for user to stop | Executes at fixed intervals |
| Usually executes once  | Executes repeatedly         |
| Search bars            | Scroll events               |

---

## 6. Which one would you use for a Search Bar?

> Debouncing, because it reduces unnecessary API calls while the user is typing.

---

## 7. Which one would you use for Infinite Scrolling?

> Throttling, because scroll events occur continuously and need controlled execution.

---

## 8. Real-life example of Debouncing?

> Google Search suggestions.

---

## 9. Real-life example of Throttling?

> Infinite scrolling in Instagram or LinkedIn.

---

## 10. Which is suitable for API search requests?

> Debouncing.

---

# Round 2 — Scenario Based

## 11. Google Search Scenario

> Too many API calls occur while typing. Use debouncing to wait until the user stops typing.

---

## 12. LinkedIn Infinite Scroll

> Use throttling to limit how often the scroll handler executes.

---

## 13. Search Suggestions While Typing

> Use debouncing.

---

## 14. Map Dragging API Requests

> Use throttling because updates should happen periodically while dragging.

---

## 15. Window Resize Handler

> Usually debouncing because we often care about the final window size after resizing stops.

---

# Round 3 — React Questions

## 16. How would you implement search optimization in React?

> Use `useEffect`, `setTimeout`, and `clearTimeout` to debounce API requests.

---

## 17. Why is debouncing useful in React?

> It reduces unnecessary API calls and improves performance.

---

## 18. Why is throttling useful in React?

> It limits expensive operations during continuous events such as scrolling and resizing.

---

## 19. Have you used debounce in a project?

> Yes. I used it for search functionality to reduce API calls while users typed.

---

## 20. Have you used throttle in a project?

> Yes. I used it for infinite scrolling and scroll event optimization.

---

## 21. How would you debounce an API call in React?

> Use `useEffect` with `setTimeout` and `clearTimeout`. Clear the previous timer whenever the search value changes.

---

## 22. How would you optimize an infinite scroll component?

> Use throttling on the scroll handler and load more data at controlled intervals.

---

## 23. How would you reduce API calls from a search input?

> Debounce the search request.

---

## 24. What React Hook is commonly used while implementing debounce?

> `useEffect` (usually with `useState`).

---

## 25. What happens if you don't debounce search requests?

> Too many API calls, increased server load, poor performance, and bad user experience.

---

# Round 4 — Coding Questions

## 26. Write your own debounce function.

```js id="mkv2ly"
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
```

---

## 27. Write your own throttle function.

```js id="3hkr7f"
function throttle(fn, delay) {
  let allow = true;

  return function (...args) {
    if (!allow) return;

    fn(...args);

    allow = false;

    setTimeout(() => {
      allow = true;
    }, delay);
  };
}
```

---

## 28. Debounced Search Input

```js id="msys9j"
const searchUsers = debounce((value) => {
  fetchApplicants(value);
}, 500);
```

---

## 29. Button Click Once Every 2 Seconds

```js id="qqb0mf"
const handleClick = throttle(() => {
  console.log("Clicked");
}, 2000);
```

---

## 30. Scroll Listener

```js id="0o4xyo"
window.addEventListener(
  "scroll",
  throttle(() => {
    console.log("Scrolling");
  }, 1000)
);
```

---

# Round 5 — Senior Level

## 31. Explain debounce internally.

> It creates a timer. Every new event clears the previous timer and starts a new one. The function executes only when the timer completes.

---

## 32. Why does debounce use `clearTimeout()`?

> To cancel the previous timer and prevent unwanted executions.

---

## 33. Why does debounce use closures?

> To remember the timer variable between function calls.

---

## 34. Explain throttle internally.

> It allows one execution, blocks subsequent executions for a specified interval, and then allows execution again.

---

## 35. Why does throttle need state between executions?

> It must remember whether execution is currently allowed or blocked.

---

## 36. What happens if `clearTimeout()` is removed?

> Every timer executes, breaking debounce behavior.

---

## 37. What happens if debounce delay is 0ms?

> The function executes almost immediately, making debouncing ineffective.

---

## 38. What happens if debounce delay is 10 seconds?

> Users experience noticeable delays before seeing results.

---

## 39. What happens if throttle interval is too small?

> Too many executions occur and optimization benefits are reduced.

---

## 40. What happens if throttle interval is too large?

> Updates feel slow and unresponsive.

---

# Real React Project Questions

## 41. Applicant Search Page Optimization

> Debounce API requests so the server receives only one request after the user stops typing.

---

## 42. Job Search Used by 500 Recruiters

> Debouncing reduces the number of requests reaching the backend, lowering server load.

---

## 43. Dashboard Chart Recalculates on Resize

> Use throttling or debouncing depending on requirements. Usually debouncing is preferred.

---

## 44. Drag-and-Drop Feature

> Use throttling because mouse move events fire continuously.

---

## 45. Notification Bell Clicked 20 Times

> Use throttling or disable the button temporarily to prevent duplicate requests.

---
