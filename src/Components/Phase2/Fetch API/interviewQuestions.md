Here is your complete **Day 19 – Fetch API Practice Sheet** that you can save and revisit before React interviews.

# Practice APIs

### Users API

[JSONPlaceholder Users API](https://jsonplaceholder.typicode.com/users?utm_source=chatgpt.com)

---

### Posts API

[JSONPlaceholder Posts API](https://jsonplaceholder.typicode.com/posts?utm_source=chatgpt.com)

---

### Products API

[Fake Store API](https://fakestoreapi.com/products?utm_source=chatgpt.com)

---

### Countries API

[REST Countries API](https://restcountries.com/v3.1/all?utm_source=chatgpt.com)

---

# Round 1 — Beginner

Use:

```js
https://jsonplaceholder.typicode.com/users
```

### 1.

Fetch users and print all names.

---

### 2.

Fetch users and print all emails.

---

### 3.

Fetch users and print all usernames.

---

### 4.

Fetch users and print all phone numbers.

---

### 5.

Fetch users and print all website names.

---

### 6.

Count total users.

---

### 7.

Print all cities.

Hint:

```js
user.address.city
```

---

### 8.

Print all company names.

Hint:

```js
user.company.name
```

---

### 9.

Print:

```text
Leanne Graham lives in Gwenborough
```

for every user.

---

### 10.

Print:

```text
Leanne Graham works at Romaguera-Crona
```

for every user.

---

# Round 2 — map()

### 11.

Create array of user names.

Expected:

```js
[
  "Leanne Graham",
  "Ervin Howell"
]
```

---

### 12.

Create array of emails.

---

### 13.

Create array of usernames.

---

### 14.

Create array of cities.

---

### 15.

Create array of company names.

---

### 16.

Create array:

```js
[
  {
    id: 1,
    name: "Leanne Graham"
  }
]
```

---

### 17.

Create array:

```js
[
  {
    name: "Leanne Graham",
    city: "Gwenborough"
  }
]
```

---

### 18.

Create array:

```js
[
  {
    name: "Leanne Graham",
    company: "Romaguera-Crona"
  }
]
```

---

### 19.

Create dropdown data:

```js
[
  {
    value: 1,
    label: "Leanne Graham"
  }
]
```

---

### 20.

Create table data:

```js
[
  {
    id: 1,
    name: "...",
    email: "..."
  }
]
```

---

# Round 3 — filter()

### 21.

Filter users whose name starts with:

```text
C
```

---

### 22.

Filter users whose city contains:

```text
South
```

---

### 23.

Filter users whose company contains:

```text
Group
```

---

### 24.

Filter users whose id is greater than 5.

---

### 25.

Filter users whose username contains:

```text
a
```

---

### 26.

Filter users whose email ends with:

```text
.biz
```

---

### 27.

Filter users living in:

```text
South Christy
```

---

### 28.

Filter users whose website contains:

```text
.org
```

---

### 29.

Filter users whose phone number contains:

```text
x
```

---

### 30.

Return only names after filtering.

---

# Round 4 — find()

### 31.

Find user with id = 1.

---

### 32.

Find user with id = 5.

---

### 33.

Find user with username:

```text
Bret
```

---

### 34.

Find user with company:

```text
Romaguera-Crona
```

---

### 35.

Find first user whose city contains:

```text
South
```

---

### 36.

Find first user whose name starts with:

```text
L
```

---

### 37.

Find first user whose website contains:

```text
.net
```

---

### 38.

Find first user whose email contains:

```text
.biz
```

---

### 39.

Find first user whose phone contains:

```text
x
```

---

### 40.

Find first user whose company contains:

```text
Group
```

---

# Round 5 — reduce()

### 41.

Count total users.

---

### 42.

Count users whose city contains:

```text
South
```

---

### 43.

Count users whose company contains:

```text
Group
```

---

### 44.

Create:

```js
{
  totalUsers: 10
}
```

using reduce.

---

### 45.

Create array of names using reduce only.

---

### 46.

Create array of emails using reduce only.

---

### 47.

Create array of cities using reduce only.

---

### 48.

Count users whose name starts with:

```text
C
```

---

### 49.

Count users whose website contains:

```text
.org
```

---

### 50.

Create object:

```js
{
  names: [...],
  count: 10
}
```

using reduce.

---

# Round 6 — React Style Problems

### 51.

Search users by name.

Input:

```text
Le
```

Output:

```js
["Leanne Graham"]
```

---

### 52.

Search users by city.

---

### 53.

Search users by company.

---

### 54.

Sort users A → Z.

---

### 55.

Sort users Z → A.

---

### 56.

Sort users by city.

---

### 57.

Sort users by company.

---

### 58.

Paginate users.

Show:

```text
5 users per page
```

---

### 59.

Create selectable dropdown options.

---

### 60.

Build a searchable user directory.

Features:

* Fetch users
* Search by name
* Sort by name
* Display city
* Display company

---

# Bonus — Curately AI Style Problems

Use:

```js
const applicants = [
  {
    id: 1,
    applicantName: "Sai",
    score: 85
  },
  {
    id: 2,
    applicantName: "Krishna",
    score: 92
  },
  {
    id: 3,
    applicantName: "Ravi",
    score: 75
  }
];
```

### 61.

Print all applicant names.

---

### 62.

Find applicant with id = 2.

---

### 63.

Filter applicants with score > 80.

---

### 64.

Sort applicants by score descending.

---

### 65.

Calculate average score.

---

### 66.

Find highest score.

---

### 67.

Find lowest score.

---

### 68.

Create dropdown data.

---

### 69.

Search applicant by name.

---

### 70.

Create table rows.

---

