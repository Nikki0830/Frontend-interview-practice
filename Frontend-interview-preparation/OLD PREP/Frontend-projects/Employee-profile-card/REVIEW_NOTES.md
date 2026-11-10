# Employee Profile Card — Code Review, Step-by-Step Solutions & Study Notes

## 1. Mistakes Identified & Step-by-Step Solutions

### Solution 1: Selecting and Updating the `#salary` Element ✅ *(Fixed in `script.js`)*
- **Original Code:**
  ```js
  btn.addEventListener("click", function () {
      btn.textContent = salary + 5000;
  });
  ```
- **What happened:** Clicking **"Give Salary Increment"** replaced the button's label with `40000`, while `<span id="salary">35000</span>` never changed.
- **Why it occurred:** `btn` referenced `#updateButton`, not `#salary`.
- **Solution:**
  ```js
  const sal = document.getElementById("salary");

  btn.addEventListener("click", function () {
    salary = salary + 5000;
    sal.textContent = salary;
  });
  ```
- **Explanation:** In `index.html`, the salary number is inside `<span id="salary">35000</span>`. Selecting `#salary` into a variable (`sal`) and updating `sal.textContent` changes the salary text on the page without overwriting the button's label.

---

### Solution 2: Reassigning `salary` So Multiple Clicks Keep Adding `5000` ✅ *(Fixed in `script.js`)*
- **What happened originally:** Every click resulted in `40000` instead of `45000`, `50000`, etc.
- **Why it occurred:** `salary + 5000` only *evaluates* an expression (`35000 + 5000 = 40000`); it does not save the new value back into the `salary` variable in memory.
- **Solution:**
  ```js
  salary = salary + 5000; // or shorthand: salary += 5000;
  ```
- **Explanation:** The assignment operator (`=` or `+=`) takes the result of `salary + 5000` and updates `salary` in memory:
  - **Click 1:** `salary` becomes `40000` -> DOM displays `40000`
  - **Click 2:** `salary` becomes `45000` -> DOM displays `45000`

---

### Solution 3: Fixing the Global `var status` Collision in `script.js`
- **Current Code (`script.js`):**
  ```js
  const employee = "Nikita";
  let salary = 35000;
  var status = "Active";
  ```
- **What happens:** Many editors/linters show a strike-through or deprecation warning on `status`, and any value assigned to it gets converted into a string.
- **Why it occurs:** When `var` is declared at the top level (global scope) in a browser script, JavaScript creates a property on the global `window` object (`window.status`). Because `window.status` is a built-in (and deprecated) browser property, `var status` collides with it.
- **Solution:** Rename `status` to `employeeStatus` (and `employee` to `employeeName` for consistency), or use `let`/`const`:
  ```js
  const employeeName = "Nikita";
  let salary = 35000;
  var employeeStatus = "Active";
  ```

---

### Solution 4: Connecting JS State Variables & Removing Magic Numbers in `script.js`
- **Problem:** `employee` and `status` are declared in `script.js` but never used, and `5000` is a "magic number" hardcoded inside the click listener.
- **Refactored Solution:**
  ```js
  const employeeName = "Nikita";
  let salary = 35000;
  var employeeStatus = "Active";
  const INCREMENT_AMOUNT = 5000;

  // Select DOM elements (using 'El' or 'Btn' suffix to distinguish DOM nodes from data variables)
  const nameEl = document.getElementById("employeeName");
  const salaryEl = document.getElementById("salary");
  const statusEl = document.getElementById("status");
  const updateBtn = document.getElementById("updateButton");

  // Initialize DOM with our JS state
  nameEl.textContent = employeeName;
  salaryEl.textContent = salary;
  statusEl.textContent = employeeStatus;

  // Handle click event
  updateBtn.addEventListener("click", function () {
    salary += INCREMENT_AMOUNT;
    salaryEl.textContent = salary;
  });
  ```
- **Explanation:**
  1. `INCREMENT_AMOUNT` makes the increment value self-documenting and easy to change in one place.
  2. Naming DOM variables `salaryEl` and data variables `salary` clearly separates HTML elements from raw numbers/strings.
  3. Rendering initial values from JS makes your JavaScript state the **Single Source of Truth**.

---

### Solution 5: Fixing Flexbox Alignment in `style.css`
- **Current Code (`style.css`):**
  ```css
  .profile-card {
      /* text-align: center; */
      justify-content: center;
      align-items: center;
      border: 1px solid grey;
      border-radius: 4px;
      background-color: white;
      width: 250px;
      max-width: 300px;
      padding: 35px;
  }
  ```
- **Why it didn't work:** `justify-content` and `align-items` only work on a Flex (`display: flex`) or Grid (`display: grid`) container, and they align that container's **children**.
- **Solution:** Put the Flex container rules on `body` to center `.profile-card` on the screen:
  ```css
  body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
  }

  .profile-card {
      text-align: center;
      border: 1px solid grey;
      border-radius: 4px;
      background-color: white;
      width: 250px;
      max-width: 300px;
      padding: 35px;
  }
  ```

---

## 2. Key JavaScript Concepts for Interviews

1. **Expression Evaluation vs. Variable Reassignment**
   - `salary + 5000` computes a value temporarily without changing `salary`.
   - `salary = salary + 5000` (or `salary += 5000`) mutates the variable's stored value in memory.

2. **State vs. DOM (Single Source of Truth)**
   - JavaScript variables hold **application state** (`let salary = 35000`).
   - DOM manipulation (`sal.textContent = salary`) **renders** that state to the UI.
   - Always update state first, then sync the DOM with the new state.

3. **Global Object Pollution (`var` vs `let` / `const`)**
   - Top-level `var` attaches properties to `window` (e.g., `var status` -> `window.status`).
   - Top-level `let` and `const` are scoped to the global declarative environment and **do not** become properties on `window`.

---

## 3. Interview Practice Questions & Answers (Based on Your Code)

### Question 1: `const` with Objects
**Q:** If we refactor the separate variables into a single `const` object:
```js
const employee = { name: "Nikita", salary: 35000, status: "Active" };
```
Would `employee.salary += 5000` throw `TypeError: Assignment to constant variable`? Why or why not?

**Answer:**
> **No, it will not throw an error.** `const` prevents **reassigning the variable binding** (so `employee = {}` would throw a `TypeError`), but it does **not** make an object immutable. Mutating properties inside the object (`employee.salary += 5000`) is valid because the `employee` variable still points to the exact same object reference in memory.

---

### Question 2: Type Coercion & the DOM
**Q:** Suppose instead of `let salary = 35000;`, you read the initial salary from the DOM:
```js
let salary = sal.textContent;
salary = salary + 5000;
```
What would `salary` evaluate to, and how would you prevent that bug?

**Answer:**
> `sal.textContent` always returns a **string** (`"35000"`). In JavaScript, when either operand of the `+` operator is a string, `+` performs **string concatenation** instead of mathematical addition, resulting in `"350005000"`.
> To prevent this bug, convert the DOM text into a number first using `Number(sal.textContent)` or `parseInt(sal.textContent, 10)`.

---

### Question 3: Script Loading (`defer`)
**Q:** In `index.html`, you wrote:
```html
<script src="script.js" defer></script>
```
What happens to `document.getElementById("updateButton")` if you remove `defer` while keeping `<script>` inside `<head>`? Why?

**Answer:**
> Without `defer`, the browser pauses HTML parsing as soon as it encounters `<script src="script.js"></script>` inside `<head>` and executes `script.js` immediately—**before** the `<body>` and `<button id="updateButton">` elements have been parsed into the DOM.
> As a result, `document.getElementById("updateButton")` returns `null`, and calling `btn.addEventListener(...)` throws `Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')`. Adding `defer` downloads the script in parallel and delays execution until the HTML document has been completely parsed.
