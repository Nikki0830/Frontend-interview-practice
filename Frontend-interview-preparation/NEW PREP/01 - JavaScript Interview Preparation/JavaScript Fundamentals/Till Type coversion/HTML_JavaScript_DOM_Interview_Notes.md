# HTML, JavaScript DOM & Script Loading --- Interview Notes

> **Goal:** Revise the concepts in the shared HTML and JavaScript
> practice code, understand how browser JavaScript interacts with a
> webpage, and practise independently for frontend interviews.

------------------------------------------------------------------------

## 1. HTML page structure

HTML provides the structure of a webpage. JavaScript can select elements
in that structure and change them.

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopping Cart</title>
    <script src="script.js" defer></script>
</head>
<body>
    <h1>Shopping cart</h1>
    <h2 id="msg">Hello!</h2>

    <button id="addToCart">Add to cart</button>
    <button id="btn">Click Me</button>

    <p id="message"></p>
</body>
</html>
```

### Important HTML parts

  -----------------------------------------------------------------------
  Code                                Purpose
  ----------------------------------- -----------------------------------
  `<!DOCTYPE html>`                   Tells the browser to use modern
                                      HTML standards mode.

  `<html lang="en">`                  Root element; declares the page
                                      language.

  `<meta charset="UTF-8">`            Sets the character encoding.

  `<meta name="viewport" ...>`        Helps the page display correctly on
                                      mobile screens.

  `<title>`                           Sets the browser tab title.

  `<script src="script.js">`          Loads an external JavaScript file.

  `id="msg"`                          Gives an element a unique
                                      identifier that JavaScript can
                                      select.
  -----------------------------------------------------------------------

**Remember:** An `id` should be unique within a page.

------------------------------------------------------------------------

## 2. Connecting an external JavaScript file

Use the `src` attribute to connect a JavaScript file:

``` html
<script src="script.js" defer></script>
```

-   `src` tells the browser which JavaScript file to load.
-   `defer` tells the browser to download the external script while HTML
    is being parsed, then execute it after HTML parsing is complete.
-   Deferred scripts execute before the `DOMContentLoaded` event and
    preserve their order relative to other deferred scripts.

### Is `defer` compulsory?

No.

-   A classic external script placed at the end of `<body>` can usually
    access the elements above it because they have already been parsed.
-   A classic external script in `<head>` can use `defer` so it does not
    run before the HTML elements are available.
-   `defer` is for external classic scripts; it does not defer an
    ordinary inline script.

### `defer` vs `async`

  -----------------------------------------------------------------------
  `defer`                             `async`
  ----------------------------------- -----------------------------------
  Downloads while HTML is parsed.     Downloads while HTML is parsed.

  Executes after HTML parsing         Executes as soon as the file is
  finishes.                           ready.

  Deferred scripts preserve document  Execution order is not guaranteed.
  order.                              

  Useful when a script needs the      Useful for independent scripts that
  parsed DOM and order matters.       do not rely on execution order.
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 3. What is the DOM?

**DOM** stands for **Document Object Model**.

The browser converts an HTML document into a tree-like structure of
objects. JavaScript can use the DOM to find elements, read or change
their content, update attributes and respond to user actions.

For example, this HTML:

``` html
<h2 id="msg">Hello!</h2>
```

can be selected and updated using JavaScript:

``` js
const msg = document.getElementById("msg");
msg.textContent = "Welcome!";
```

The browser displays the updated heading without reloading the entire
page.

### Interview answer

"The DOM is a programming representation of an HTML document. JavaScript
can use DOM APIs to select elements, change content or attributes,
update styles, and respond to events."

------------------------------------------------------------------------

## 4. Selecting HTML elements with `getElementById()`

`document.getElementById()` finds an element by its `id`.

``` html
<h2 id="msg">Hello!</h2>
```

``` js
const msg = document.getElementById("msg");
```

-   `document` represents the current webpage.
-   `getElementById()` searches for the element with the matching ID.
-   The returned value is the element if it exists; otherwise, it is
    `null`.

### IDs must match

``` js
const button = document.getElementById("addToCart");
```

This requires an HTML element with exactly `id="addToCart"`.

**Common mistake:** Selecting an ID that does not exist.

``` js
const button = document.getElementById("missingButton");
console.log(button); // null
```

Trying to call a method on `null` causes an error:

``` js
button.addEventListener("click", function () {
    console.log("Clicked");
});
// TypeError: Cannot read properties of null ...
```

**How to avoid it:** 1. Check that the HTML ID and JavaScript ID match.
2. Make sure the element exists. 3. Make sure the script runs after the
HTML has been parsed, for example by using `defer`.

------------------------------------------------------------------------

## 5. Handling clicks with `addEventListener()`

`addEventListener()` attaches an event listener to an element.

``` js
const btn = document.getElementById("btn");
const msg = document.getElementById("msg");

btn.addEventListener("click", function () {
    msg.textContent = "Welcome!";
});
```

### Understand the code

1.  `getElementById("btn")` selects the button.
2.  `addEventListener("click", ...)` registers a click handler.
3.  The function runs when the user clicks the button.
4.  `msg.textContent = "Welcome!"` changes the heading text.

### General syntax

``` js
element.addEventListener("eventName", function () {
    // Code to run when the event occurs
});
```

Other common events include `input`, `change`, `submit`, `keydown`, and
`mouseover`.

### Shopping cart example

HTML:

``` html
<button id="addToCart">Add to cart</button>
<p id="message"></p>
```

JavaScript:

``` js
const button = document.getElementById("addToCart");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "Product added successfully";
});
```

**Real-world use:** Add-to-cart feedback, opening a menu, toggling a
password field, submitting a form, and showing or hiding content.

------------------------------------------------------------------------

## 6. Updating content with `textContent`

`textContent` gets or sets the text content of an element.

``` js
const msg = document.getElementById("msg");

msg.textContent = "Welcome!";
```

It replaces the element's existing text with the new text.

### `textContent` vs `innerHTML`

  -----------------------------------------------------------------------
  `textContent`                       `innerHTML`
  ----------------------------------- -----------------------------------
  Reads or sets text.                 Reads or sets HTML markup.

  Treats supplied content as text.    Parses supplied content as HTML.

  Safer for displaying user-provided  Can create security risks if
  text.                               untrusted input is inserted.
  -----------------------------------------------------------------------

Example:

``` js
element.textContent = "<strong>Hello</strong>";
// Displays the angle-bracket text literally.

element.innerHTML = "<strong>Hello</strong>";
// Creates bold HTML text.
```

**Practical rule:** Prefer `textContent` when you only need to display
text. Do not insert untrusted user input with `innerHTML`.

------------------------------------------------------------------------

## 7. Inline `onclick` in HTML

An event can also be written directly in an HTML attribute:

``` html
<button onclick="alert('Hello')">Click Me</button>
```

When the button is clicked, the browser runs the JavaScript expression
in the attribute.

### Why do the quotes matter?

In this example:

``` html
<button onclick="alert('Hello')">Click Me</button>
```

-   Double quotes mark the HTML attribute value.
-   Single quotes mark the JavaScript string.

This version is also valid:

``` html
<button onclick='alert("Hello")'>Click Me</button>
```

This version is invalid because the inner double quote closes the HTML
attribute too early:

``` html
<!-- Incorrect -->
<button onclick="alert("Hello")">Click Me</button>
```

### Inline `onclick` vs `addEventListener()`

  -----------------------------------------------------------------------
  Inline `onclick`                    `addEventListener()`
  ----------------------------------- -----------------------------------
  Written in HTML.                    Written in JavaScript.

  Can mix behaviour into markup.      Keeps behaviour in the JavaScript
                                      file.

  A simple event-handler property.    Can attach multiple listeners for
                                      the same event.

  Less suitable for larger            Commonly preferred for maintainable
  applications.                       frontend code.
  -----------------------------------------------------------------------

**Interview takeaway:** For maintainable applications, prefer
`addEventListener()` or framework event handling rather than putting
JavaScript directly in HTML attributes.

------------------------------------------------------------------------

## 8. Understanding the complete example

### `index.html`

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopping Cart</title>
    <script src="script.js" defer></script>
</head>
<body>
    <h1>Shopping cart</h1>
    <h2 id="msg">Hello!</h2>
    <h1 id="sda">Script, defer, async</h1>

    <button id="addToCart">Add to cart</button>
    <button id="btn">Click Me</button>
    <button onclick="alert('Hello')">Click Me</button>
    <button id="sdabtn">Sda</button>

    <p id="message"></p>
</body>
</html>
```

### `script.js`

``` js
const button = document.getElementById("addToCart");
const btn = document.getElementById("btn");
const msg = document.getElementById("msg");
const sda = document.getElementById("sda");
const sdabtn = document.getElementById("sdabtn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "Product added successfully";
});

btn.addEventListener("click", function () {
    msg.textContent = "Welcome!";
});

sdabtn.addEventListener("click", function () {
    sda.textContent = "Script, Defer, Async";
});
```

### What happens when the user clicks?

  -----------------------------------------------------------------------
  User action                         Result
  ----------------------------------- -----------------------------------
  Click **Add to cart**               The paragraph displays "Product
                                      added successfully".

  Click the first **Click Me** button The `msg` heading changes to
                                      "Welcome!".

  Click **Sda**                       The `sda` heading is updated.

  Click the inline `onclick` button   A browser alert displays "Hello".
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 9. Common errors and mistakes

1.  **Wrong ID:** `getElementById()` returns `null` if no matching
    element exists.
2.  **Script runs too early:** The JavaScript may run before the target
    HTML element exists. Use `defer` or place the script after the
    relevant HTML.
3.  **Calling a method on `null`:** Check the selector and script timing
    before using `addEventListener()`.
4.  **Mismatched quotes:** Incorrectly nested quotes can break an inline
    HTML event attribute.
5.  **Confusing `textContent` and `innerHTML`:** Use `textContent` for
    plain text.
6.  **Mixing responsibilities:** Keep page structure in HTML and most
    event-handling logic in JavaScript.
7.  **Duplicate IDs:** Use unique IDs so element selection is
    predictable.

------------------------------------------------------------------------

## 10. Frequently asked interview questions

### Q1. What is the DOM?

The DOM is a tree-like programming representation of an HTML document.
JavaScript uses DOM APIs to access and update webpage elements.

### Q2. What does `getElementById()` do?

It selects the HTML element whose `id` matches the supplied string. It
returns `null` if no matching element is found.

### Q3. What is an event listener?

An event listener is a function registered to run when a particular
event, such as a click, occurs on an element.

### Q4. What is `addEventListener()`?

It is a DOM method used to register an event handler on an element.

### Q5. What is the purpose of `defer`?

It allows an external classic script to download while HTML parsing
continues and execute after HTML parsing is complete.

### Q6. What is the difference between `async` and `defer`?

Both download scripts without blocking HTML parsing. `defer` executes
after parsing and preserves order among deferred scripts. `async`
executes as soon as the script is ready, so order is not guaranteed.

### Q7. What is the difference between `textContent` and `innerHTML`?

`textContent` reads or sets text. `innerHTML` reads or sets HTML markup
and parses the supplied markup.

### Q8. What happens if `getElementById()` cannot find an element?

It returns `null`. Calling an element method such as
`addEventListener()` on that `null` value causes a runtime error.

### Q9. What is the difference between inline `onclick` and `addEventListener()`?

Inline `onclick` puts event code in the HTML attribute.
`addEventListener()` registers the handler from JavaScript and supports
multiple listeners for an event.

### Q10. Can JavaScript update a webpage without reloading it?

Yes. JavaScript can update the DOM directly. When fresh server data is
needed, it can request data using `fetch()` and update the relevant DOM
elements after the response arrives.

------------------------------------------------------------------------

## 11. Output and debugging practice

Try each question before checking it in your browser.

### Question 1 --- DOM selection

``` html
<h2 id="title">Hello</h2>
```

``` js
const heading = document.getElementById("title");
console.log(heading.textContent);
```

What is printed?

### Question 2 --- Missing element

``` js
const button = document.getElementById("notFound");
console.log(button);
```

What is printed?

### Question 3 --- Click event

``` html
<h2 id="message">Hello</h2>
<button id="btn">Click</button>
```

``` js
const message = document.getElementById("message");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    message.textContent = "Welcome";
});
```

What does the heading display after the button is clicked?

### Question 4 --- Missing element error

``` js
const btn = document.getElementById("wrongId");

btn.addEventListener("click", function () {
    console.log("Clicked");
});
```

What happens, and why?

### Question 5 --- Script loading

A classic external script is placed in the `<head>` without `defer`. It
immediately selects a button that appears later in the `<body>`. What
problem can occur?

### Question 6 --- Quote debugging

Why is this markup incorrect?

``` html
<button onclick="alert("Hello")">Click</button>
```

Rewrite it correctly in two ways.

------------------------------------------------------------------------

## 12. Independent coding exercises

**Do not look for solutions immediately.** Write the code yourself, run
it, and test it in the browser.

### Beginner

-   [ ] Create an HTML page with a heading and a button.
-   [ ] Select the heading using `getElementById()`.
-   [ ] Change the heading text when the button is clicked.
-   [ ] Create a button that displays an alert using inline `onclick`.
-   [ ] Add a paragraph and update it using `textContent`.

### Intermediate

-   [ ] Create an **Add to Cart** button. On click, display "Product
    added successfully".
-   [ ] Create two buttons that update two different headings.
-   [ ] Add a button that changes the text of a heading from "Script,
    defer, async" to "JavaScript is working".
-   [ ] Intentionally use an incorrect ID, inspect the result, and fix
    the error.
-   [ ] Move your script into an external `script.js` file and connect
    it using `defer`.

### Interview-level mini task

Build a small shopping-cart interaction:

-   [ ] Show a product name and price.
-   [ ] Add an **Add to Cart** button.
-   [ ] When clicked, update a cart message.
-   [ ] Prevent errors if a required element cannot be found.
-   [ ] Keep HTML structure and JavaScript behaviour in separate files.

------------------------------------------------------------------------

## 13. Quick revision sheet

  Concept                Remember
  ---------------------- ---------------------------------------------------------
  HTML                   Provides webpage structure.
  DOM                    Browser representation of the HTML document.
  `document`             Represents the current webpage.
  `getElementById()`     Selects an element by ID.
  Missing ID             Returns `null`.
  `addEventListener()`   Registers an event handler.
  `"click"`              Click event name.
  `textContent`          Reads or updates text.
  `innerHTML`            Reads or updates HTML markup.
  `onclick`              Inline HTML event-handler attribute.
  `defer`                Executes an external classic script after HTML parsing.
  `async`                Executes an external script as soon as it is ready.

### One-minute interview explanation

"When a webpage loads, the browser parses the HTML and builds the DOM.
JavaScript can select an element using methods such as
`getElementById()`. I can attach a click handler using
`addEventListener()` and update the page using `textContent`. For an
external script in the document head, I can use `defer` so the script
executes after HTML parsing. This lets me build interactive features
such as add-to-cart feedback without reloading the page."

------------------------------------------------------------------------

## 14. My practice progress

Use this checklist as you revise:

-   [ ] I understand the basic HTML document structure.
-   [ ] I can connect an external JavaScript file.
-   [ ] I understand `defer` and the basic difference between `async`
    and `defer`.
-   [ ] I can explain the DOM.
-   [ ] I can select elements using `getElementById()`.
-   [ ] I understand why a selector can return `null`.
-   [ ] I can handle clicks using `addEventListener()`.
-   [ ] I can update an element using `textContent`.
-   [ ] I understand inline `onclick` and quote usage.
-   [ ] I can debug a missing-element error.
-   [ ] I completed the beginner exercises.
-   [ ] I completed the intermediate exercises.
-   [ ] I built the shopping-cart mini task.
-   [ ] I can explain these concepts in an interview without reading the
    notes.

**Practice rule:** First revise the explanation, then write the example
from memory, then solve the exercises without copying. Ask for a code
review after attempting the tasks.

------------------------------------------------------------------------

*These notes are based on the HTML and JavaScript example shared for
this topic. The coding exercises are practice extensions of those
concepts.*
