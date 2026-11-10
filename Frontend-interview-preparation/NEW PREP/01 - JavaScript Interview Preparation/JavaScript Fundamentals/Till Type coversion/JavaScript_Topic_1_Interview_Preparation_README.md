# JavaScript Interview Preparation — Topic 1

> **Purpose:** Revise JavaScript fundamentals, understand the examples, practise output questions, and prepare for frontend interviews targeting ₹12–16 LPA.
>
> **How to use this README:** Read one section, explain it in your own words, type the examples yourself, and attempt the exercises before checking any solution.

---

## 1. What is JavaScript?

JavaScript is a programming language used to make websites interactive and dynamic.

- **HTML** provides the structure of a webpage.
- **CSS** makes the webpage look attractive.
- **JavaScript** adds behaviour and functionality.

Examples of JavaScript in frontend development:
- Responding when a user clicks a button.
- Validating a form.
- Fetching data from an API.
- Updating part of a webpage without reloading the whole page.

### How can JavaScript update a page without reloading it?

JavaScript can select an HTML element through the **DOM (Document Object Model)** and change its content.

```html
<h2 id="message">Hello!</h2>
<button id="btn">Click me</button>
```

```js
const button = document.getElementById("btn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "Welcome!";
});
```

When the user clicks the button:
1. `getElementById()` selects the button and heading.
2. `addEventListener("click", ...)` waits for the click.
3. `textContent` changes the heading text.
4. The browser updates that part of the page without a full page reload.

### What if new data is needed from a server?

JavaScript can use `fetch()` to request data from an API and then update the relevant part of the DOM when the response arrives.

**AJAX** (Asynchronous JavaScript and XML) is a term for making asynchronous server requests and updating a page without a full reload. Despite the name, modern applications commonly exchange JSON rather than XML.

### Interview answer

“JavaScript makes webpages interactive. It can manipulate the DOM to update content in response to user actions. When new server data is required, JavaScript can request it using `fetch()` and update the relevant part of the page without reloading the entire page.”

---

## 2. What is ECMAScript?

JavaScript is the programming language. **ECMAScript** is the standard specification that defines the core behaviour and features of the language. The specification is published as ECMA-262.

ES2015, commonly called ES6, introduced widely used features such as:
- `let` and `const`
- Arrow functions
- Classes
- Promises
- Destructuring
- Template literals
- Modules

### JavaScript vs ECMAScript

| JavaScript | ECMAScript |
|---|---|
| The programming language used by developers. | The standard specification for the language's core features. |
| Includes the language plus environment APIs. | Defines core syntax and language behaviour. |
| Runs in environments such as browsers and Node.js. | Implemented by JavaScript engines. |

**Interview answer:** “ECMAScript is the standard specification of JavaScript. JavaScript implementations follow that standard and also provide environment-specific APIs, such as browser APIs or Node.js APIs.”

---

## 3. How does JavaScript work internally?

A **JavaScript engine** is software that processes and executes JavaScript code.

Examples:

| Environment | JavaScript engine |
|---|---|
| Google Chrome | V8 |
| Microsoft Edge | V8 |
| Mozilla Firefox | SpiderMonkey |
| Safari | JavaScriptCore |
| Node.js | V8 |

A simplified execution flow:

```text
JavaScript source code
        |
        v
JavaScript engine
        |
        v
Parsing / compilation
        |
        v
Execution and optimisation
        |
        v
Output
```

Modern JavaScript engines use interpretation and Just-In-Time (JIT) compilation techniques to execute and optimise code.

For frontend interviews, understand these concepts as you progress:
1. Execution context
2. Call stack
3. Memory allocation
4. Hoisting
5. Event loop
6. Callback queue
7. Microtask queue

These are separate concepts to study in more detail; this README only introduces them.

### Interview answer

“A JavaScript engine parses and executes JavaScript code. Modern engines also optimise frequently executed code using techniques such as JIT compilation. For example, Chrome uses the V8 engine.”

---

## 4. Where can JavaScript run?

JavaScript is not limited to browsers. It can run in browser environments and in runtimes such as Node.js.

### Browser environment

Browser JavaScript can use browser APIs such as `document` and `alert`.

```js
console.log("Hello JavaScript");

alert("Welcome!");

document.body.style.backgroundColor = "lightblue";
```

### Node.js environment

Node.js is a runtime that allows JavaScript to run outside a browser.

```js
const name = "Nikita";

console.log(`Hello ${name}`);
```

Save this in `script.js`, then run it in a terminal:

```bash
node script.js
```

Expected output:

```text
Hello Nikita
```

**Important:** `document` and `alert` are browser APIs. They are not available as standard globals in a typical Node.js environment. `console.log()` works in both.

### JavaScript vs Node.js

| JavaScript | Node.js |
|---|---|
| A programming language. | A JavaScript runtime environment. |
| Defines language syntax and behaviour. | Provides APIs to run JavaScript outside the browser. |
| In browsers, it can use browser APIs. | It provides APIs for tasks such as working with files and servers. |

---

## 5. Variables: `var`, `let`, and `const`

Variables store values that can be used and manipulated in a program.

```js
var name = "Nikita";
let age = 28;
const country = "India";
```

### Difference between `var`, `let`, and `const`

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| Function-scoped | Yes | No | No |
| Block-scoped | No | Yes | Yes |
| Can be reassigned | Yes | Yes | No |
| Can be redeclared in the same scope | Yes | No | No |
| Must be initialized at declaration | No | No | Yes |

Examples:

```js
var employee = "Nikita";
var employee = "Rahul"; // Redeclaration allowed
employee = "Amit";       // Reassignment allowed

let age = 25;
age = 26;                // Reassignment allowed
// let age = 27;         // SyntaxError in the same scope

const city = "Bangalore";
// city = "Pune";        // TypeError
```

### Which should we use?

- Prefer `const` by default.
- Use `let` when the variable needs to be reassigned.
- Avoid using `var` in modern code unless you have a specific reason.

### Important: `const` and objects

`const` prevents reassignment of the variable binding. It does not make an object or array immutable.

```js
const user = { name: "Nikita" };

user.name = "Rahul"; // Allowed
console.log(user.name); // Rahul

// user = {}; // TypeError: Assignment to constant variable
```

### Declaration, assignment, and initialization

```js
let age;       // Declaration
age = 28;      // Assignment

let salary = 35000; // Initialization: declaration + first value
```

### Block scope

A block is commonly represented by curly braces `{ }`.

```js
if (true) {
    let age = 25;
    const city = "Bangalore";
}

console.log(age);  // ReferenceError
console.log(city); // ReferenceError
```

`let` and `const` declared inside the `if` block are not accessible outside it.

---

## 6. Hoisting

Hoisting describes how JavaScript handles declarations during execution-context setup before executing the code.

It does **not** mean JavaScript physically moves source-code lines.

### `var` hoisting

```js
console.log(a);
var a = 10;
```

Output:

```text
undefined
```

The `var` declaration is initialised to `undefined` during setup. The assignment to `10` happens when execution reaches that line.

A simplified way to think about it:

```js
var a;
console.log(a); // undefined
a = 10;
```

### `let` and `const` hoisting

```js
console.log(age);
let age = 25;
```

This throws a `ReferenceError`.

The same applies to `const`:

```js
console.log(city);
const city = "Bangalore";
```

This also throws a `ReferenceError`.

`let` and `const` bindings are created during scope setup, but cannot be accessed before their declarations are evaluated.

### Hoisting comparison

| Declaration | Before declaration is reached |
|---|---|
| `var` | Accessible with value `undefined` |
| `let` | Access throws `ReferenceError` |
| `const` | Access throws `ReferenceError` |

### Function-local `var` example

```js
var x = 5;

function test() {
    console.log(x);
    var x = 10;
}

test();
```

Output:

```text
undefined
```

Why? The `var x` inside `test()` is a local function-scoped variable. It is initialised to `undefined` before the function's statements execute. The local variable is used instead of the global `x`.

---

## 7. Temporal Dead Zone (TDZ)

The **Temporal Dead Zone** is the period between entering a scope and the point where a `let` or `const` variable is declared and initialised. Accessing the variable during this period throws a `ReferenceError`.

```js
console.log(age); // ReferenceError

let age = 25;

console.log(age); // 25
```

Why?
1. JavaScript creates the binding for `age` during scope setup.
2. The binding cannot be accessed before its declaration is evaluated.
3. When `let age = 25` executes, the TDZ ends.

### Does TDZ apply to `var`?

No.

```js
console.log(name); // undefined

var name = "Nikita";
```

`var` is initialised to `undefined` during setup. `let` and `const` remain uninitialised until their declaration is reached.

### Interview answer

“During execution-context setup, `var` declarations are initialised to `undefined`. `let` and `const` bindings are created but remain uninitialised until execution reaches their declarations. Accessing them before that point causes a ReferenceError because they are in the Temporal Dead Zone.”

---

## 8. Modern JavaScript

Modern JavaScript refers to newer language features introduced through ES6 (ES2015) and later ECMAScript versions. These features help make code cleaner and easier to maintain.

| Feature | Example | Purpose |
|---|---|---|
| `let` and `const` | `const age = 25` | Manage variable bindings |
| Arrow functions | `const add = (a, b) => a + b` | Concise function syntax |
| Template literals | `` `Hello ${name}` `` | Embed values in strings |
| Destructuring | `const { name } = user` | Extract values |
| Spread syntax | `{ ...user }` | Copy/combine values |
| Rest parameters | `(...args) => args.length` | Accept multiple arguments |
| Array methods | `items.map(...)` | Process arrays |
| Promises | `fetchData().then(...)` | Handle asynchronous results |
| `async` / `await` | `await response.json()` | Write asynchronous code clearly |
| Modules | `import` / `export` | Organise reusable code |
| Optional chaining | `user?.address?.city` | Safely access nested properties |
| Nullish coalescing | `value ?? "Default"` | Fallback for `null` or `undefined` |

### Traditional vs modern style

```js
// Traditional style
var name = "Nikita";
console.log("Hello " + name);

// Modern style
const modernName = "Nikita";
console.log(`Hello ${modernName}`);
```

### Practical example

```js
const employee = {
    name: "Nikita",
    role: "Frontend Developer",
    skills: ["HTML", "CSS", "JavaScript"]
};

const { name, role, skills } = employee;

console.log(`${name} is a ${role}`);

const updatedSkills = [...skills, "React"];

console.log(updatedSkills);
```

Output:

```text
Nikita is a Frontend Developer
[ 'HTML', 'CSS', 'JavaScript', 'React' ]
```

Concepts used:
- Destructuring extracts object properties.
- Template literals insert values into a string.
- Spread syntax creates a new array with the existing items and the additional item.

---

## 9. JavaScript data types

A data type tells us what kind of value a variable holds.

JavaScript is **dynamically typed**. We do not have to declare a variable's type explicitly; its type is determined at runtime. A variable can hold values of different types during execution.

```js
let value = 100;
console.log(typeof value); // "number"

value = "Hello";
console.log(typeof value); // "string"
```

JavaScript has seven primitive data types and one main non-primitive category: `Object`.

### Seven primitive data types

| Type | Example | Description |
|---|---|---|
| String | `"Hello"` | Text |
| Number | `100`, `10.5` | Integers and decimal numbers |
| Boolean | `true`, `false` | Logical true/false |
| Undefined | `undefined` | Value has not been assigned |
| Null | `null` | Intentional absence of a value |
| BigInt | `123456789n` | Large integers |
| Symbol | `Symbol("id")` | Unique identifiers |

Examples:

```js
let username = "Nikita";
let salary = 35000;
let isAvailable = true;
let city;
let selectedUser = null;
let bigNumber = 123456789n;
let uniqueId = Symbol("id");
```

Important points:
- JavaScript uses `number` for both integer and decimal values.
- `BigInt` represents integers beyond the safe integer range of `Number`.
- Each call to `Symbol()` creates a unique symbol.

### Non-primitive category: Object

Objects represent structured data. Arrays and functions are also objects in JavaScript.

```js
// Object
const employee = {
    name: "Nikita",
    role: "Frontend Developer",
    salary: 35000
};

// Array
const skills = ["HTML", "CSS", "JavaScript"];

// Function
function greet() {
    console.log("Hello Nikita");
}
```

Functions are special because they can be invoked.

### Primitive vs non-primitive values

| Primitive | Non-primitive |
|---|---|
| Represents an individual value. | Can represent structured data or collections. |
| Primitive values are immutable. | Objects can be mutated. |
| Assignment copies the value. | Assignment copies the object reference. |
| Examples: string, number, boolean. | Examples: object, array, function. |

Primitive copying example:

```js
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

Changing `b` does not change `a`, because the primitive value was copied.

---

## 10. The `typeof` operator

The `typeof` operator returns a string describing the type of a value.

```js
console.log(typeof "Hello");    // "string"
console.log(typeof 100);       // "number"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof 123n);      // "bigint"
console.log(typeof Symbol());  // "symbol"
```

### Important interview outputs

```js
console.log(typeof null); // "object"
console.log(typeof []);   // "object"
console.log(typeof {});   // "object"
console.log(typeof NaN);  // "number"
console.log(typeof function () {}); // "function"
```

- `typeof null` returning `"object"` is a historical JavaScript behaviour retained for backward compatibility. `null` is still a primitive type.
- Arrays are objects, so `typeof []` returns `"object"`.
- Use `Array.isArray()` to check whether a value is an array.

```js
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false
```

---

## 11. `null` vs `undefined`

```js
let firstName;
console.log(firstName); // undefined

let selectedUser = null;
console.log(selectedUser); // null
```

| `undefined` | `null` |
|---|---|
| Commonly means a value has not been assigned. | Represents an intentional absence of a value. |
| Often occurs with an uninitialised variable. | Usually assigned deliberately. |
| `typeof` returns `"undefined"`. | `typeof` returns `"object"`. |

**Interview answer:** “`undefined` commonly means a variable has not been assigned a value, whereas `null` represents an intentional absence of a value.”

---

## 12. `console.log()`, `\n`, and `process.stdout.write()`

### `console.log()`

`console.log()` displays output in the browser console or a runtime console. Each call ends its output with a newline.

```js
console.log("Hello");
console.log("World");
```

Output:

```text
Hello
World
```

Calling `console.log()` without an argument prints a blank line:

```js
console.log("Hello");
console.log();
console.log("World");
```

### The `\n` newline character

`\n` creates a new line inside a string.

```js
console.log("Hello\nWorld");
```

Output:

```text
Hello
World
```

Example:

```js
console.log("Name: Nikita\nAge: 28\nRole: Frontend Developer");
```

### `console.log()` vs `process.stdout.write()`

`process.stdout.write()` is a Node.js API that writes directly to the standard output stream. It does not automatically append a newline.

```js
process.stdout.write("Hello");
process.stdout.write("World");
```

Output:

```text
HelloWorld
```

Example with an array:

```js
const printInline = [10, 20, 30, 40];

for (let i = 0; i < printInline.length; i++) {
    process.stdout.write(printInline[i] + " ");
}
```

Output:

```text
10 20 30 40
```

| `console.log()` | `process.stdout.write()` |
|---|---|
| Available in browsers and Node.js. | Node.js API. |
| Adds a line ending. | Does not automatically add a line ending. |
| Useful for normal logging. | Useful for writing inline terminal output. |

**Remember:** `process.stdout.write()` is not a standard browser API.

---

## 13. Important interview questions

Try answering aloud before reading the answer.

### Q1. What is JavaScript?

JavaScript is a programming language used to make webpages interactive and dynamic. HTML provides structure, CSS provides styling, and JavaScript adds functionality such as click handling, form validation, and API requests.

### Q2. Is JavaScript interpreted or compiled?

JavaScript is often described as interpreted, but modern JavaScript engines use interpretation and Just-In-Time compilation techniques to execute and optimise code.

### Q3. What is ECMAScript?

ECMAScript is the standard specification that defines JavaScript's core language features and behaviour.

### Q4. What is a JavaScript engine?

A JavaScript engine is software that parses and executes JavaScript code. Examples include V8, SpiderMonkey, and JavaScriptCore.

### Q5. What is the difference between JavaScript and Node.js?

JavaScript is a programming language. Node.js is a runtime environment that allows JavaScript to run outside the browser and provides APIs for tasks such as working with files and servers.

### Q6. What is the difference between `var`, `let`, and `const`?

`var` is function-scoped, while `let` and `const` are block-scoped. `var` and `let` can be reassigned; `const` cannot be reassigned. `var` can be redeclared in the same scope, while `let` and `const` cannot.

### Q7. What is block scope?

Block scope means a variable is accessible only inside the block in which it is declared. `let` and `const` are block-scoped.

### Q8. What is hoisting?

Hoisting describes how JavaScript handles declarations during execution-context setup. `var` is initialised to `undefined`, while `let` and `const` remain inaccessible until their declarations execute.

### Q9. What is the Temporal Dead Zone?

The TDZ is the period before a `let` or `const` declaration is evaluated in which the variable cannot be accessed. Accessing it throws a `ReferenceError`.

### Q10. Can we modify an object declared with `const`?

Yes. `const` prevents reassignment of the variable binding, not modification of the object's properties.

### Q11. What are the data types in JavaScript?

There are seven primitive types: string, number, boolean, undefined, null, bigint, and symbol. The main non-primitive category is object, which includes objects, arrays, and functions.

### Q12. Is JavaScript dynamically typed?

Yes. A variable can hold values of different data types, and JavaScript determines the type at runtime.

### Q13. Why does `typeof null` return `"object"`?

It is a historical JavaScript behaviour retained for backward compatibility. `null` is still a primitive data type.

### Q14. What is the difference between `typeof` and `Array.isArray()`?

`typeof` returns a general type string. `Array.isArray()` specifically checks whether a value is an array.

### Q15. What is the difference between `null` and `undefined`?

`undefined` commonly means a value has not been assigned. `null` represents an intentional absence of a value.

### Q16. What is the difference between `console.log()` and `process.stdout.write()`?

`console.log()` is available in browsers and Node.js and adds a line ending. `process.stdout.write()` is a Node.js API that writes to standard output without automatically adding a line ending.

### Q17. What is the difference between Git and GitHub?

Git is a version control system that tracks code changes. GitHub is a cloud platform for hosting Git repositories and collaborating through features such as pull requests and code reviews.

---

## 14. Output-based interview practice

**Try to predict the output before running each snippet.** Some questions are designed to test the reason behind the result, not just memorisation.

### Question 1 — `var` hoisting

```js
console.log(a);
var a = 10;
```

What is printed, and why?

### Question 2 — `let` and TDZ

```js
console.log(a);
let a = 10;
```

What happens?

### Question 3 — Function-local `var`

```js
var x = 5;

function test() {
    console.log(x);
    var x = 10;
}

test();
```

What is printed?

### Question 4 — Block scope

```js
{
    let city = "Bangalore";
}

console.log(city);
```

What happens?

### Question 5 — `const` object

```js
const user = { name: "Nikita" };
user.name = "Rahul";

console.log(user.name);
```

What is printed? Does this cause an error?

### Question 6 — Data types

```js
console.log(typeof NaN);
console.log(typeof Infinity);
console.log(typeof []);
console.log(typeof function () {});
console.log(typeof null);
console.log(typeof 10n);
console.log(typeof Symbol("id"));
```

Predict each line.

### Question 7 — `null` and `undefined`

```js
let firstName;
let selectedUser = null;

console.log(firstName);
console.log(selectedUser);
console.log(typeof firstName);
console.log(typeof selectedUser);
```

Predict all four lines.

### Question 8 — Dynamic typing

```js
let value = 100;
console.log(typeof value);

value = "Hello";
console.log(typeof value);
```

Predict the output.

### Question 9 — Template literal and destructuring

```js
const employee = {
    name: "Nikita",
    role: "Frontend Developer"
};

const { name, role } = employee;

console.log(`${name} is a ${role}`);
```

What is printed?

### Question 10 — Node.js output

```js
process.stdout.write("A");
process.stdout.write("B");
process.stdout.write("C");
```

How does the output appear in the terminal?

---

## 15. Coding exercises — attempt without solutions

### Beginner exercises

- [ ] Declare variables using `var`, `let`, and `const`.
- [ ] Create a variable for your name, age, and role, then print them.
- [ ] Check the data type of a string, number, boolean, and undefined value using `typeof`.
- [ ] Create an uninitialised variable and inspect its value.
- [ ] Create a variable with `null` and compare its value and type with `undefined`.
- [ ] Print three lines using one `console.log()` and `\n`.
- [ ] Print an array's values inline using `process.stdout.write()` in Node.js.

### Intermediate exercises

- [ ] Write examples that demonstrate the difference between `var`, `let`, and `const`.
- [ ] Create an `if` block and test the scope of `let` and `const`.
- [ ] Predict and test hoisting examples for `var`, `let`, and `const`.
- [ ] Create a function containing a local `var` with the same name as a global variable. Predict the output.
- [ ] Create an employee object and use destructuring to extract its properties.
- [ ] Use a template literal to print an employee's name and role.
- [ ] Add a new skill to an existing skills array using spread syntax without changing the original array.

### Interview-level exercises

- [ ] Explain JavaScript, ECMAScript, and a JavaScript engine in your own words.
- [ ] Explain how JavaScript can update webpage content without a full page reload.
- [ ] Explain the difference between browser JavaScript and Node.js.
- [ ] Explain hoisting and the TDZ using code examples.
- [ ] Write a short program that demonstrates dynamic typing.
- [ ] Explain why `typeof null` returns `"object"` and how to check for an array.
- [ ] Explain the output of every question in Section 14 without running the code first.

---

## 16. Common mistakes to avoid

1. **Saying JavaScript is only interpreted:** Modern engines also use JIT compilation and optimisation.
2. **Saying `let` and `const` are not hoisted:** Their bindings are created during scope setup, but cannot be accessed during the TDZ.
3. **Saying hoisting physically moves code:** Hoisting describes declaration handling, not literal source-code movement.
4. **Thinking `const` makes an object immutable:** It prevents reassignment of the binding, not mutation of object properties.
5. **Calling `null` an object:** `typeof null` returns `"object"`, but `null` is a primitive.
6. **Using `typeof` to check arrays:** Use `Array.isArray()`.
7. **Thinking `document` works in Node.js by default:** `document` is a browser API.
8. **Thinking `process.stdout.write()` is a browser method:** It is a Node.js API.
9. **Confusing `undefined` and `null`:** One commonly means not assigned; the other means intentionally empty.
10. **Assuming a variable has a fixed type:** JavaScript is dynamically typed.

---

## 17. Quick revision sheet

| Concept | Remember |
|---|---|
| JavaScript | Adds behaviour and interactivity to webpages. |
| ECMAScript | Standard specification for JavaScript's core language. |
| JavaScript engine | Parses and executes JavaScript. |
| V8 | Used by Chrome, Edge, and Node.js. |
| Node.js | Runs JavaScript outside the browser. |
| `var` | Function-scoped; can be redeclared and reassigned. |
| `let` | Block-scoped; can be reassigned, not redeclared in the same scope. |
| `const` | Block-scoped; cannot be reassigned and must be initialised. |
| Hoisting | Declaration handling during execution-context setup. |
| TDZ | `let` and `const` cannot be accessed before declaration evaluation. |
| Primitive types | 7: string, number, boolean, undefined, null, bigint, symbol. |
| Object category | Includes objects, arrays, and functions. |
| Dynamic typing | A variable can hold values of different types. |
| `typeof null` | `"object"` (historical behaviour). |
| `typeof []` | `"object"`. |
| Array check | `Array.isArray(value)`. |
| `null` | Intentional absence of a value. |
| `undefined` | Commonly a value not assigned. |
| `console.log()` | Prints output with a line ending. |
| `\n` | Newline character inside a string. |
| `process.stdout.write()` | Node.js output without automatic newline. |
| Template literal | Uses backticks and `${expression}`. |
| Destructuring | Extracts values from objects or arrays. |
| Spread syntax | Expands iterable values or object properties. |

---

## 18. My progress checklist

### Understanding
- [ ] I can explain what JavaScript is.
- [ ] I understand JavaScript vs ECMAScript.
- [ ] I can explain what a JavaScript engine does.
- [ ] I understand browser JavaScript vs Node.js.
- [ ] I can explain `var`, `let`, and `const`.
- [ ] I understand declaration, assignment, and initialisation.
- [ ] I can explain block scope.
- [ ] I understand hoisting and the TDZ.
- [ ] I can list all seven primitive data types.
- [ ] I understand dynamic typing.
- [ ] I can explain `typeof` and `Array.isArray()`.
- [ ] I understand `null` vs `undefined`.
- [ ] I understand `console.log()`, `\n`, and `process.stdout.write()`.
- [ ] I can explain template literals, destructuring, and spread syntax.

### Practice
- [ ] I typed the examples myself.
- [ ] I attempted all output-based questions before running them.
- [ ] I completed the beginner exercises.
- [ ] I completed the intermediate exercises.
- [ ] I attempted the interview-level exercises.
- [ ] I can explain the concepts aloud without reading the notes.

---

## 19. Final interview preparation rule

For every JavaScript concept, practise these four steps:

1. **Define it:** Explain the concept in simple, accurate language.
2. **Demonstrate it:** Write a small code example.
3. **Predict it:** Explain what the code outputs and why.
4. **Apply it:** Describe where it is useful in frontend development.

Do not memorise answers only. Make sure you can write and explain the code independently.
