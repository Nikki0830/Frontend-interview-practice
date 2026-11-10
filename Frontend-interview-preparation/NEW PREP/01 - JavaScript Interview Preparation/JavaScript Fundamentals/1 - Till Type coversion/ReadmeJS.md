=====================================================
PHASE 1
=====================================================
1. What is Javascript?

Javascript is a programming language used to create websites interactive and dynamic like HTML provides structure of a webpage, CSS makes it look attractive, and javascript adds functionality.

For example, when we click a button, validate a form, fetch data from an API, or upadate the content without reloading the page, we use Javascript.

How JS upadate content without reloading the page?
=======================================================

JS uses AJAX (Asynchronous Javascript and XML) technique to update the content without reloading the page

AJAX allows js to send and receive data from the server in the background without interrupting the user's experience

Instead of reloading the entire page, JS only updates the specific parts of the page that need to be changed

This makes the website faster and more user friendly.

Without AJAX?
===================
jS can select and HTML element and change its content using DOM(Document Object Modle). The browser updates that part without loading the entire page agagin.

check example in index.html and script.js ----------#1 fundamentals and one imp info chatgpt -------Open Antigravity Chat


What happens?
======================
1. getElementByID() find the  button and heading in the DOm

2. addEventListener("click",...) waits for the user to click the button

3. message.textContent = "Welcome!" changes the heading text

4. The browser displays the upadated text without reloading the page.


What if we need new data from a server?
============================================

Suppose we are building an e-commmerce website and a user clicks View Product

JS can use fetch() to request product data from aan API, then update the product list in the DOM when the response arrives, The broser doesn't need to reload the entire page for that update either.

How to explain this in an interview?
==============================================

“JavaScript updates content without reloading the page by manipulating the DOM. For example, when a user clicks a button, I can handle the click event and use textContent to update an HTML element. If I need new data, I can fetch it from an API and update the relevant part of the page without a full reload.


2. What is ECMAScript?
This is a common JavaScript interview question.

JavaScript is a programming language, while ECMAScript is the standard that specifies how the language should behave.

ECMAScript is maintained through the ECMA-262 specification.

For example, ES2015 (commonly called ES6) introduced important features such as:
- let and const
- Arrow functions
- Classes
- Promises
- Destructuring
- Template literals
- Modules
Interview question
Q: What is the difference between JavaScript and ECMAScript?

Answer:

"ECMAScript is the standardized specification of JavaScript. JavaScript is an implementation of that specification, with additional APIs provided by environments such as browsers and Node.js."

3. How does JavaScript work internally?
This is especially important for developers with 2–3 years of experience.

When JavaScript runs, its engine processes and executes the code.
JavaScript engines
Browser/runtime	JavaScript engine
Google Chrome	V8
Microsoft Edge	V8
Mozilla Firefox	SpiderMonkey
Safari	JavaScriptCore
Node.js	V8


What happens when JavaScript executes?
A simplified view:
JavaScript Source Code
          |
          ▼
      JS Engine
          |
          ▼
   Parsing / Compilation
          |
          ▼
      Execution
          |
          ▼
        Output

Modern engines optimise frequently executed code using techniques such as JIT compilation.

You don't need to memorise the internal architecture of every engine for a frontend interview.

However, you should understand:
1. Execution context
2. Call stack
3. Memory allocation
4. Hoisting
5. Event loop
6. Callback queue
7. Microtask queue
We will study these individually in later lessons.

4. Where can JavaScript run?
JavaScript is not limited to browsers.
Browser environment
JavaScript can interact with webpages through browser APIs.
console.log("Hello JavaScript");

alert("Welcome!");

document.body.style.backgroundColor = "lightblue";

Node.js environment
Node.js allows JavaScript to run outside a web browser.

Example:
const name = "Nikita";

console.log(`Hello ${name}`);

Save the file as script.js.

Open the VS Code terminal:
node script.js

Expected output:
Hello Nikita

Important: document and alert are browser APIs. They are not available as standard globals in a typical Node.js environment.


4. What are variables in JavaScript?
“Variables in JavaScript are used to store data that we can use and manipulate in our programs. We can declare variables using three keywords: var, let, and const.

var is function-scoped, while let and const are block-scoped. We can reassign values declared with var and let, but we cannot reassign a const variable. In modern JavaScript, we generally prefer const by default and use let when reassignment is required.

let age = 25;
age = 26; // Allowed

const country = "India";
// country = "Germany"; // TypeError

var name = "Nikita";
name = "Rahul"; // Allowed

Important interview point: const prevents reassignment of the variable binding, but it does not make an object or array immutable.

const user = { name: "Nikita" };
user.name = "Rahul"; // Allowed


What is hoisting in JavaScript?
======================================
Interview answer:

“Hoisting is JavaScript's behavior where variable and function declarations are processed before the code executes. However, different variables behave differently depending on whether we declare them using var, let, or const.”



2. How does hoisting work with var, let, and const?
Case 1: var
console.log(a);
var a = 10;


Output:
undefined


Why?

JavaScript processes the var declaration before executing the code and initializes it with undefined. The assignment a = 10 happens later.

You can think of it approximately like this:
var a;             // Declaration
console.log(a);    // undefined
a = 10;            // Assignment


Case 2: let
console.log(a);
let a = 10;


Output: ReferenceError

Why?

The let declaration is processed when the scope is set up, but the variable cannot be accessed before its declaration is reached during execution. This period is called the Temporal Dead Zone (TDZ).
Case 3: const
console.log(a);
const a = 10;


Output: ReferenceError

Why?

Like let, const is inaccessible before its declaration executes. It must also be initialized when declared.

Remember: Hoisting does not mean that JavaScript physically moves your code. It describes how declarations are handled during execution-context setup.


4. 🎤 Interview practice
What will the following code print?
var x = 5;

function test() {
  console.log(x);
  var x = 10;
}

test();



A. 5


B. 10


C. undefined


D. ReferenceError


Check answerNot quite — the answer is C.
The var x inside test() creates a local variable for that function. It is initialized to undefined before the function's statements execute, so console.log(x) reads the local variable rather than the global x.

What is the Temporal Dead Zone (TDZ) in JavaScript?
=======================================================
Interview answer:

“The Temporal Dead Zone is the period between entering a scope and the point where a let or const variable is declared and initialized. During this period, we cannot access that variable. If we try to access it, JavaScript throws a ReferenceError.”
1. Simple example
console.log(age); // ReferenceError

let age = 25;

console.log(age); // 25


Why does this happen?
- JavaScript knows about age when it sets up the scope.
- But age cannot be accessed before its declaration is reached.
- Once let age = 25 executes, the TDZ ends and the variable can be accessed.
Visualise the TDZ
Scope begins

Temporal Dead Zone

Accessing age causes ReferenceError

let age = 25;

Variable is initialized; TDZ ends



2. Does TDZ apply to var?
No. var behaves differently.
console.log(name); // undefined

var name = "Nikita";


With var, the variable is initialized to undefined during scope setup, so accessing it before the assignment does not cause a TDZ error.

However, let and const remain inaccessible until their declarations execute.
3. Why does JavaScript have a TDZ?
It helps prevent you from accidentally using a variable before it has been properly initialized.

For example:
let price = 100;
let quantity = 2;

console.log(price * quantity); // 200


This makes it easier to avoid mistakes caused by using variables too early.

Remember: let and const are hoisted, but they are not accessible during the TDZ.

🎤 Your turn: predict the output
{
  console.log(city);
  let city = "Bangalore";
}



A. undefined


B. "Bangalore"


C. ReferenceError


D. SyntaxError


Check answerCorrect!
city is in its Temporal Dead Zone when console.log(city) executes. The code throws a ReferenceError before the declaration is reached.

5. Interview answer
If the interviewer asks, “Why does var return undefined, while let and const throw a ReferenceError before declaration?”, you can say:

“During execution-context setup, var declarations are automatically initialised to undefined. In contrast, let and const bindings are created but remain uninitialised until execution reaches their declarations. Accessing an uninitialised binding during the Temporal Dead Zone throws a ReferenceError. This is how JavaScript defines the behaviour of these declaration keywords.”

Check your understanding
Suppose JavaScript creates the binding for let count before executing the code. Why doesn't it assign undefined automatically, as it does with var?

A. JavaScript doesn't know that count exists.


B. The language specifies that let remains uninitialised until its declaration executes.


C. let variables don't exist in memory before declaration.


D. The browser cannot handle let before declaration.


Check answerCorrect!
JavaScript knows the binding exists, but the language rules prevent it from being accessed until initialisation. This is the key difference between var and let/const.


What is Modern JavaScript?
========================================
Interview answer:

“Modern JavaScript refers to the newer features and syntax introduced into JavaScript over the years, especially through ES6 (ECMAScript 2015) and later ECMAScript versions. These features help us write code that is cleaner, shorter, more readable, and easier to maintain.

For example, modern JavaScript introduced let and const, arrow functions, template literals, destructuring, spread and rest operators, promises, async/await, and modules. These features are widely used in modern frontend development, including React.”
1. Traditional JavaScript vs Modern JavaScript
Let's compare the same task in two ways.
Traditional style
var name = "Nikita";

console.log("Hello " + name);




Modern style
const name = "Nikita";

console.log(`Hello ${name}`);



Both examples work. The modern version uses const and a template literal, which make the intent clearer and the string easier to maintain.

2. Important Modern JavaScript features
Feature	Example	Why we use it
let and const	const age = 25	Manage variable bindings clearly
Arrow functions	const add = (a, b) => a + b	Concise function syntax
Template literals	`Hello ${name}`	Embed values in strings
Destructuring	const {name} = user	Extract values from objects
Spread operator	{...user}	Copy or combine enumerable properties
Rest parameters	(...args) => args.length	Accept multiple arguments
Array methods	items.map(...)	Transform and process arrays
Promises	fetchData().then(...)	Handle asynchronous results
async/await	const data = await response.json()	Write asynchronous code clearly
Modules	import / export	Organise code into reusable files
Optional chaining	user?.address?.city	Safely access nested properties
Nullish coalescing	value ?? "Default"	Provide a fallback for null or undefined

3. A practical example
Imagine you receive employee data from an API.
const employee = {
  name: "Nikita",
  role: "Frontend Developer",
  skills: ["HTML", "CSS", "JavaScript"]
};

const { name, role, skills } = employee;

console.log(`${name} is a ${role}`);

const updatedSkills = [...skills, "React"];

console.log(updatedSkills);


Output:
Nikita is a Frontend Developer
["HTML", "CSS", "JavaScript", "React"]


Here, we're using three modern JavaScript concepts:
- Destructuring to extract properties.
- Template literals to create a string.
- Spread syntax to create a new array without modifying the original.
These concepts are especially useful when working with React components, API responses, and state updates.


DAY 1 INTERVIEW PRACTICE
======================================
1. What is JavaScript?
Interview answer:

“JavaScript is a programming language used to make websites interactive and dynamic. HTML provides the structure, CSS handles the styling, and JavaScript adds functionality, such as button clicks, form validation, and fetching data from APIs.”

Example: When we click an Add to Cart button, JavaScript can update the cart without reloading the entire page.
2. Is JavaScript interpreted or compiled?
Interview answer:

“JavaScript is commonly described as an interpreted language, but modern JavaScript engines use both interpretation and Just-In-Time compilation to execute and optimise code.”

For example, Chrome's V8 engine uses interpretation and JIT compilation techniques to execute JavaScript efficiently.

Remember: Saying “JavaScript is only interpreted” is an oversimplification.
3. What is ECMAScript?
Interview answer:

“ECMAScript is the standard specification that defines the core features and behaviour of JavaScript. JavaScript implementations follow this standard. ES6, also called ES2015, introduced features such as let, const, arrow functions, and promises.”
4. What is a JavaScript engine?
Interview answer:

“A JavaScript engine is a program that processes and executes JavaScript code. It parses the code and uses execution and optimisation techniques to run it.”

Examples:
- Chrome — V8
- Firefox — SpiderMonkey
- Safari — JavaScriptCore
5. What is the difference between JavaScript and Node.js?
Interview answer:

“JavaScript is a programming language, whereas Node.js is a runtime environment that allows JavaScript to run outside the browser. In browsers, JavaScript can interact with the DOM. In Node.js, JavaScript can work with files, servers, and other system resources through Node.js APIs.”

Example:
console.log("Hello World");


This can run in both a browser's developer console and Node.js.

However, document.getElementById() is a browser API and is not available by default in Node.js.
6. What is the difference between var, let, and const?
Interview answer:

“var, let, and const are used to declare variables in JavaScript. var is function-scoped, while let and const are block-scoped. var allows redeclaration in the same scope, but let and const do not. Both var and let allow reassignment, whereas const does not allow reassignment of its binding. In modern JavaScript, I generally use const by default and let when reassignment is required.”

Example:
var name = "Nikita";
var name = "Rahul"; // Allowed

let salary = 35000;
salary = 40000;     // Allowed

const country = "India";
// country = "Germany"; // TypeError


7. What is block scope?
Interview answer:

“Block scope means a variable is accessible only inside the block in which it is declared. Variables declared with let and const are block-scoped.”

Example:
if (true) {
  let age = 25;
  const city = "Bangalore";
}

console.log(age);  // ReferenceError
console.log(city); // ReferenceError


Both variables are accessible only inside the if block.
8. What is hoisting?
Interview answer:

“Hoisting describes how JavaScript handles declarations during execution-context setup before executing the code. var variables are initialised to undefined, while let and const remain uninitialised until their declarations execute. Accessing let or const before that point causes a ReferenceError because they are in the Temporal Dead Zone.”

Example:
console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError
let b = 20;


9. Can we modify an object declared using const?
Interview answer:

“Yes. const prevents reassignment of the variable binding, but it doesn't make the object itself immutable. We can modify its properties, but we cannot assign a completely different object to the same variable.”

Example:
const user = {
  name: "Nikita"
};

user.name = "Rahul"; // Allowed

console.log(user.name); // Rahul


But this fails:
user = { name: "Amit" }; // TypeError


10. What is the difference between Git and GitHub?
Interview answer:

“Git is a version control system that tracks code changes and allows us to manage different versions of a project. GitHub is a cloud-based platform that hosts Git repositories and provides collaboration features such as pull requests, code reviews, and issue tracking.”

Example:
- Git: git add, git commit, git branch
- GitHub: Remote repositories, pull requests, team collaboration and GitHub Actions.


1. What are data types in JavaScript?
A data type tells JavaScript what kind of value a variable stores.

Example:
let name = "Nikita";
let age = 25;
let isLearning = true;


- "Nikita" → String
- 25 → Number
- true → Boolean
Interview answer:

A data type defines the type of value stored in a variable. JavaScript supports primitive and non-primitive data types.
2. JavaScript is dynamically typed
JavaScript is a dynamically typed language. It means we don't need to explicitly specify the data type when declaring a variable. JavaScript determines the type at runtime.

Example:
let value = 100;

console.log(typeof value); // number

value = "Hello";

console.log(typeof value); // string


The same variable can hold values of different types.

Interview question: What is dynamically typed language?

A dynamically typed language determines the data type of a variable at runtime rather than requiring us to declare it explicitly.
3. Types of data in JavaScript
JavaScript has:
- 7 primitive data types
- 1 main non-primitive category: Object
A. Primitive data types
Primitive values represent individual values.
Data type	Example	Description
String	"Hello"	Stores text
Number	100, 10.5	Stores numbers
Boolean	true, false	Stores true or false
Undefined	undefined	Value not assigned
Null	null	Intentional absence of value
BigInt	123456789n	Represents large integers
Symbol	Symbol("id")	Creates unique identifiers

Examples:
let username = "Nikita";
let salary = 35000;
let isAvailable = true;
let city;
let selectedItem = null;
let bigNumber = 123456789n;
let uniqueId = Symbol("id");


Important points:
- JavaScript uses number for both integers and decimal numbers.
- BigInt is used for integers beyond the safe integer range of Number.
- Every call to Symbol() creates a unique symbol.
B. Non-primitive data types
The main non-primitive category is Object.

It includes objects, arrays and functions.

Object:
const employee = {
  name: "Nikita",
  role: "Frontend Developer",
  salary: 35000
};


Array:
const skills = ["HTML", "CSS", "JavaScript"];


Function:
function greet() {
  console.log("Hello Nikita");
}


Important: Arrays and functions are objects in JavaScript. Functions are special because they can be invoked.
4. Primitive vs Non-primitive
Primitive	Non-primitive
Stores individual values	Can represent collections or structured data
Immutable values	Objects can be mutated
Copied by value	Variables hold references to objects
Examples: String, Number, Boolean	Examples: Object, Array, Function

Example:
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20


For primitive values, assigning one variable to another copies the value.

We'll explore object references and copying in detail in Topic 3.
5. typeof operator
The typeof operator checks the data type of a value.
console.log(typeof "Hello");    // string
console.log(typeof 100);       // number
console.log(typeof true);      // boolean
console.log(typeof undefined); // undefined
console.log(typeof 123n);      // bigint
console.log(typeof Symbol());  // symbol


Important interview outputs:
console.log(typeof null); // object
console.log(typeof []);   // object
console.log(typeof {});   // object


Why does typeof null return object?

This is a historical JavaScript behaviour retained for backward compatibility. null is still a primitive data type.

How do you check whether a value is an array?
console.log(Array.isArray([])); // true


Use Array.isArray() instead of typeof when checking arrays.
6. Difference between null and undefined
let firstName;

console.log(firstName); // undefined

let selectedUser = null;

console.log(selectedUser); // null


Undefined	Null
A value has not been assigned	Intentional absence of a value
Commonly occurs with uninitialised variables	Explicitly assigned by the developer
typeof returns "undefined"	typeof returns "object"

Interview answer:

Undefined means a variable has not been assigned a value, whereas null represents an intentional absence of a value.
7. Important JavaScript examples
console.log(typeof 42);          // number
console.log(typeof "42");        // string
console.log(typeof false);       // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object
console.log(typeof []);          // object
console.log(typeof {});          // object
console.log(Array.isArray([]));  // true


Remember that the value 42 is a number, but "42" is a string because it is enclosed in quotes.

8. Common interview questions and answers
Q1. How many primitive data types are there in JavaScript?

There are seven primitive data types: String, Number, Boolean, Undefined, Null, BigInt and Symbol.

Q2. Is JavaScript dynamically typed or statically typed?

JavaScript is dynamically typed because variable types are determined at runtime.

Q3. Is null a primitive or non-primitive data type?

Null is a primitive data type, even though typeof null returns "object".

Q4. What is the difference between typeof and Array.isArray()?

typeof returns the general type of a value. Array.isArray() specifically checks whether a value is an array.

Q5. Are arrays objects in JavaScript?

Yes. Arrays are special types of objects that store ordered collections of values.

Q6. Are functions objects in JavaScript?

Yes. Functions are callable objects and can be assigned to variables, passed as arguments and returned from other functions.

Q7. Can a JavaScript variable change its data type?

Yes. JavaScript is dynamically typed, so a variable can hold values of different types during execution.

Q8. What is Symbol used for?

Symbol creates unique primitive values, often used as unique property keys in objects.

Q9. What is BigInt?

BigInt represents integers larger than the safe integer limit of the Number type.

Q10. What is the difference between 10 and "10"?

10 is a number, while "10" is a string.
9. Output-based interview practice
Try predicting the output before checking.
console.log(typeof NaN);
console.log(typeof Infinity);
console.log(typeof []);
console.log(typeof function(){});
console.log(typeof null);
console.log(typeof 10n);
console.log(typeof Symbol("id"));


Answers for revision
Reveal answers
10. Quick revision sheet
Concept	Remember
Primitive types	         7
Non-primitive category	Object
JavaScript typing	      Dynamically typed
Type checking	          typeof
Array checking	        Array.isArray()
typeof null	            "object"
typeof []	              "object"
typeof NaN	            "number"
typeof function(){}	    "function"
Undefined	               Value not assigned
Null	                   Intentionally empty

JavaScript Notes: console.log() and New Lines
1. What is console.log()?
console.log() is used to display output in the browser console or runtime console.
console.log("Hello");
console.log("World");


Output:
Hello
World


Each console.log() automatically moves the output to the next line.
2. What is \n?
\n is a newline escape character in JavaScript.

It moves the text following it to a new line within the same string.
console.log("Hello\nWorld");


Output:
Hello
World


3. Difference between console.log() and console.log("\n")
Example 1: Empty console.log()
console.log("Hello");
console.log();
console.log("World");


Output:
Hello

World


console.log() without an argument prints a blank line.

Example 2: console.log("\n")
console.log("Hello");
console.log("\n");
console.log("World");


Output:
Hello


World


\n adds a newline character, and console.log() adds its own line ending.
4. Using \n in one line
console.log("Name: Nikita\nAge: 28\nRole: Frontend Developer");


Output:
Name: Nikita
Age: 28
Role: Frontend Developer


5. Quick Revision
Syntax	Purpose
console.log("Hello")	Prints text and moves to the next line
console.log()	Prints a blank line
\n	Creates a new line inside a string
console.log("\n")	Prints a newline plus the automatic line ending

Interview takeaway: \n represents a newline character. It is useful for formatting multiline strings, while an empty console.log() is convenient for adding spacing between console outputs.

Remember: One console.log() can display multiple lines using \n.

1. What is process.stdout.write()?
It is used in Node.js to print output directly to the standard output (terminal).
process.stdout.write("Hello");
process.stdout.write("World");


Output:
HelloWorld


Notice that it does not automatically move to the next line.
2. Understanding your code
process.stdout.write(printInline[i] + " ");


- process → Node.js global object.
- stdout → Standard output stream (terminal).
- write() → Writes data to the output stream.
- printInline[i] → Accesses the current array element.
- " " → Adds a space after the element.
Example:
const printInline = [10, 20, 30, 40];

for (let i = 0; i < printInline.length; i++) {
    process.stdout.write(printInline[i] + " ");
}


Output:
10 20 30 40


3. Difference between console.log() and process.stdout.write()
console.log()	process.stdout.write()
Available in browsers and Node.js	Node.js
Automatically adds a newline	Does not automatically add a newline
Used for logging output	Used for writing directly to the output stream

Remember: Use console.log() for normal output and process.stdout.write() when you want inline terminal output without automatic line breaks.

# JavaScript Interview Notes – Topic 3: Primitive vs Reference Values

**Study session:** 9:00 PM – 10:15 PM  
**Level:** Beginner to Interview Ready

## 1. Primitive vs Reference Data Types

JavaScript values are broadly divided into two categories:

### A. Primitive Data Types

Primitive values represent individual, simple values.

JavaScript has 7 primitive data types:

| Data Type | Example |
|---|---|
| String | `"Nikita"` |
| Number | `25` |
| Boolean | `true` |
| Undefined | `undefined` |
| Null | `null` |
| BigInt | `123456789n` |
| Symbol | `Symbol("id")` |

**Important characteristics:**

- Primitive values are immutable.
- Primitive assignments copy the value.
- Changing the value assigned to one variable does not change another variable holding the copied value.

Example:

```javascript
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

**Explanation:**

1. `a` stores the value `10`.
2. `b = a` copies the value of `a`.
3. `b` gets its own independent value.
4. Changing `b` does not affect `a`.

### B. Reference Data Types

Objects, arrays and functions are reference values.

Examples:

**Object**

```javascript
const employee = {
    name: "Nikita",
    role: "Frontend Developer"
};
```

**Array**

```javascript
const skills = ["HTML", "CSS", "JavaScript"];
```

**Function**

```javascript
function greet() {
    console.log("Hello");
}
```

**Important characteristics:**

- Objects can be modified (mutated).
- Assigning an object to another variable copies the reference.
- Both variables can refer to the same object.
- Changes made through one reference can be visible through the other.

Note: JavaScript passes and assigns object references by value. We commonly describe this behaviour as copying a reference.

---

## 2. What Happens When We Assign One Object to Another Variable?

Example:

```javascript
const user1 = {
    name: "Nikita",
    age: 25
};

const user2 = user1;

user2.name = "Rahul";

console.log(user1.name); // Rahul
console.log(user2.name); // Rahul
```

### Why did both values change?

Because `user1` and `user2` refer to the same object.

When we write:

```javascript
const user2 = user1;
```

JavaScript copies the reference, not an independent copy of the object.

Both variables can access and modify the same object.

**Interview answer:**

"When we assign one object to another variable, JavaScript copies the reference. Both variables refer to the same object, so mutations made through either variable are visible through both."

---

## 3. Mutation vs Reassignment

These are two important JavaScript concepts.

### A. Mutation

Mutation means changing the contents or properties of an existing object or array.

Example:

```javascript
const user = {
    name: "Nikita"
};

user.name = "Rahul";

console.log(user); // { name: "Rahul" }
```

Here, we changed the existing object's property.

This is called mutation.

### B. Reassignment

Reassignment means assigning a different value or object reference to a variable.

Example:

```javascript
let user = {
    name: "Nikita"
};

user = {
    name: "Rahul"
};

console.log(user); // { name: "Rahul" }
```

Here, the variable `user` now refers to a different object.

This is called reassignment.

### Difference

| Mutation | Reassignment |
|---|---|
| Changes existing object data | Assigns a different value/reference |
| Existing object is modified | Variable points to a new value/reference |
| Example: `user.name = "Rahul"` | Example: `user = {}` |

---

## 4. Can We Modify an Object Declared with const?

**Yes!**

The `const` keyword prevents reassignment of the variable binding, but it does not make the object immutable.

Example:

```javascript
const user = {
    name: "Nikita",
    age: 25
};

// Allowed: modifying object property
user.name = "Rahul";

console.log(user.name); // Rahul
```

But this is not allowed:

```javascript
const user = {
    name: "Nikita"
};

user = {
    name: "Rahul"
};

// TypeError: Assignment to constant variable
```

### Remember

- Modifying an object property declared with `const` is allowed.
- Adding or deleting object properties is allowed.
- Reassigning the entire object is not allowed.

**Interview answer:**

"Yes, we can modify properties of an object declared with const because const prevents reassignment of the variable, not mutation of the object."

---

## 5. Shallow Copy

A shallow copy creates a new outer object, but nested objects are still shared by reference.

Common ways to create shallow copies:

1. Spread syntax
2. Object.assign()

### A. Using Spread Syntax

Example:

```javascript
const product1 = {
    name: "Laptop",
    details: {
        brand: "Dell"
    }
};

const product2 = { ...product1 };

product2.name = "Phone";

product2.details.brand = "HP";

console.log(product1);
console.log(product2);
```

Output:

```javascript
// product1
{
    name: "Laptop",
    details: {
        brand: "HP"
    }
}

// product2
{
    name: "Phone",
    details: {
        brand: "HP"
    }
}
```

### Why did product1.details.brand also change?

Because spread syntax creates a new outer object, but it does not independently copy nested objects.

Let's understand:

**Original object:**

```javascript
const product1 = {
    name: "Laptop",
    details: {
        brand: "Dell"
    }
};
```

**Shallow copy:**

```javascript
const product2 = { ...product1 };
```

What happens?

- `name` is a primitive value, so its value is copied.
- `details` is an object, so its reference is copied.

Therefore:

```javascript
product2.name = "Phone";
```

Only product2's name changes.

But:

```javascript
product2.details.brand = "HP";
```

Both product1 and product2 show `"HP"` because they share the same nested `details` object.

### Important takeaway

Shallow copy creates a new outer object, but nested objects are shared by reference.

### B. Using Object.assign()

Another way to create a shallow copy is:

```javascript
const product2 = Object.assign({}, product1);
```

It also creates a shallow copy, so nested objects remain shared.

---

## 6. Deep Copy

A deep copy creates a completely independent copy of an object, including its nested objects.

Changes to the copied object do not affect the original object.

### Using structuredClone()

Example:

```javascript
const product3 = {
    name: "Laptop",
    details: {
        brand: "Dell"
    }
};

const product4 = structuredClone(product3);

product4.name = "Phone";

product4.details.brand = "HP";

console.log(product3);
console.log(product4);
```

Output:

```javascript
// product3
{
    name: "Laptop",
    details: {
        brand: "Dell"
    }
}

// product4
{
    name: "Phone",
    details: {
        brand: "HP"
    }
}
```

### Why did product3 not change?

Because `structuredClone()` creates independent copies of the supported nested data too.

- `product3` keeps its original values.
- `product4` has its own copied values.
- Changing product4 does not affect product3.

**Important:** `structuredClone()` supports many built-in data types and circular references, but it cannot clone every JavaScript value. For example, functions cannot be cloned using it.

---

## 7. Difference Between Shallow Copy and Deep Copy

| Feature | Shallow Copy | Deep Copy |
|---|---|---|
| Creates new outer object | Yes | Yes |
| Copies primitive properties | Yes | Yes |
| Nested objects shared | Yes | No |
| Nested mutation affects original | Yes | No |
| Example | `{ ...obj }` | `structuredClone(obj)` |
| Nested data independent | No | Yes |

### Quick example

Shallow copy:

```javascript
const copy = { ...original };
```

Deep copy:

```javascript
const copy = structuredClone(original);
```

---

## 8. Why Does `${object}` Print [object Object]?

Example:

```javascript
const product = {
    name: "Laptop",
    brand: "Dell"
};

console.log(`${product}`);
```

Output:

```text
[object Object]
```

### Why?

Template literals convert the expression inside `${}` into a string.

A normal JavaScript object has a default string representation of `[object Object]`.

### How to print an object?

**Method 1: console.log()**

```javascript
console.log(product);
```

**Method 2: JSON.stringify()**

```javascript
console.log(JSON.stringify(product));
```

**Method 3: Read individual properties**

```javascript
console.log(`${product.name} ${product.brand}`);
```

Output:

```text
Laptop Dell
```

For readable JSON output:

```javascript
console.log(JSON.stringify(product, null, 2));
```

---

# 9. Important JavaScript Concepts – Quick Revision

| Concept | Meaning |
|---|---|
| Primitive value | Simple individual value |
| Reference value | Object, array or function |
| Copy by value | Copies the primitive value |
| Object assignment | Copies the reference |
| Mutation | Changes existing object data |
| Reassignment | Assigns a different value/reference |
| Shallow copy | New outer object, nested references shared |
| Deep copy | Independent copy of supported nested data |
| Spread syntax | Creates a shallow copy |
| Object.assign() | Creates a shallow copy |
| structuredClone() | Creates a deep copy of supported values |

---

# 10. Interview Questions and Answers

### Q1. What is the difference between primitive and reference data types?

Primitive data types store simple individual values, and assignments copy their values.

Reference values include objects, arrays and functions. When we assign an object to another variable, the reference is copied, so both variables can access the same object.

### Q2. What happens when we assign one object to another variable?

JavaScript copies the object reference rather than creating an independent object. Both variables refer to the same object, so changes made through one variable can be seen through the other.

### Q3. What is the difference between mutation and reassignment?

Mutation means modifying the properties or contents of an existing object. Reassignment means assigning a different value or object reference to a variable.

### Q4. Can we modify an object declared with const?

Yes. Const prevents reassignment of the variable, but it does not prevent modification of the object's properties.

### Q5. What is shallow copy?

A shallow copy creates a new outer object, but nested objects are still shared by reference. Therefore, changes to nested objects can affect the original.

### Q6. What is deep copy?

A deep copy creates an independent copy of an object, including its nested objects. Changes to the copied object do not affect the original.

### Q7. What is the difference between spread syntax and structuredClone()?

Spread syntax creates a shallow copy, whereas structuredClone() creates a deep copy of supported data, including nested objects.

### Q8. Why does changing a nested property affect the original object after a shallow copy?

Because a shallow copy copies the nested object's reference instead of creating a separate nested object. Both the original and copied objects point to the same nested object.

---

# 11. Output-Based Interview Questions

Predict the output before running these examples.

### Question 1 – Primitive Copying

```javascript
let a = 10;
let b = a;

b = 50;

console.log(a);
console.log(b);
```

### Question 2 – Object Reference

```javascript
const user1 = {
    name: "Nikita"
};

const user2 = user1;

user2.name = "Rahul";

console.log(user1.name);
console.log(user2.name);
```

### Question 3 – Const Object

```javascript
const employee = {
    name: "Nikita"
};

employee.name = "Rahul";

console.log(employee.name);
```

### Question 4 – Shallow Copy

```javascript
const original = {
    name: "Laptop",
    details: {
        brand: "Dell"
    }
};

const copied = { ...original };

copied.name = "Phone";
copied.details.brand = "HP";

console.log(original.name);
console.log(original.details.brand);
```

### Question 5 – Deep Copy

```javascript
const original = {
    name: "Laptop",
    details: {
        brand: "Dell"
    }
};

const copied = structuredClone(original);

copied.name = "Phone";
copied.details.brand = "HP";

console.log(original.name);
console.log(original.details.brand);
```

---

# 12. Practical Coding Checklist

- [ ] Create and copy primitive values.
- [ ] Assign one object to another variable.
- [ ] Assign one array to another variable.
- [ ] Practise mutation and reassignment.
- [ ] Modify an object declared with const.
- [ ] Create a shallow copy using spread syntax.
- [ ] Create a shallow copy using Object.assign().
- [ ] Observe nested object changes after shallow copying.
- [ ] Create a deep copy using structuredClone().
- [ ] Compare the original and copied objects.
- [ ] Practise JSON.stringify() for object output.
- [ ] Solve all 5 output-based questions.
- [ ] Explain all 8 interview questions aloud.

---

# 13. Final Interview Revision – Remember These

1. JavaScript has 7 primitive data types.
2. Objects, arrays and functions are reference values.
3. Primitive assignments copy values.
4. Object assignments copy references.
5. Mutation changes existing data.
6. Reassignment assigns a different value/reference.
7. Const prevents reassignment, not object mutation.
8. Shallow copy creates a new outer object but shares nested objects.
9. Deep copy creates independent copies of supported nested data.
10. Spread syntax and Object.assign() create shallow copies.
11. structuredClone() creates a deep copy of supported values.
12. Template literals convert objects to strings, which normally produces `[object Object]`.

**Interview preparation rule:** For every concept, be ready to explain the definition, write a practical example, predict its output and explain why that output occurs.


//creating object reference mean
Good question! Let's understand what object reference means. This is one of the most important concepts in JavaScript.

1. First, create an object
const user1 = {
    name: "Nikita",
    age: 25
};

Here, JavaScript creates an object containing name and age.

Think of the object as a box stored somewhere in memory.

Variable: user1

user1

Reference
Object in memory
name: "Nikita"
age: 25

The variable user1 holds a reference that allows JavaScript to access that object.

Reference means a way to access an object in memory.

2. What happens when we create another variable?
const user1 = {
    name: "Nikita",
    age: 25
};

const user2 = user1;

Here, we are not creating another object.

We are copying the reference.

Both variables refer to the same object

user1

user2

One shared object
name: "Nikita"
age: 25

3. Let's test it
const user1 = {
    name: "Nikita"
};

const user2 = user1;

user2.name = "Rahul";

console.log(user1.name);
console.log(user2.name);

Output:

Rahul
Rahul
Why?

Because both variables access the same object. When you change the name through user2, you also see that change through user1.

4. What if I want a separate object?
You need to create a new object or make a copy.

const user1 = {
    name: "Nikita"
};

const user2 = { ...user1 };

user2.name = "Rahul";

console.log(user1.name); // Nikita
console.log(user2.name); // Rahul

Now they are separate outer objects.

5. Check your understanding
Consider:

const a = { city: "Bangalore" };
const b = a;

b.city = "Delhi";

console.log(a.city);

What will be printed?


Bangalore

Delhi

undefined
Correct!Both variables refer to the same object.

Remember this interview definition:

"An object reference is a way for a variable to access an object stored in memory. When we assign one object variable to another, the reference is copied, so both variables can point to the same object."

One important detail: JavaScript doesn't require you to manage or see the actual memory address. Think of a reference as a link to the object, not the object itself.

 
# JavaScript – Topic 4: Type Conversion

**Study Time:** 11:15 PM – 12:00 AM  
**Duration:** 45 minutes

## 1. What is Type Conversion?

Type conversion means changing a value from one data type to another.

Example:

```js
let age = "25"; // String
let result = Number(age); // Number

console.log(result);        // 25
console.log(typeof result); // "number"
```

JavaScript supports two types of conversion:

1. Explicit Type Conversion
2. Implicit Type Conversion (Type Coercion)

---

## 2. Explicit Type Conversion

Explicit conversion happens when the developer manually converts a value using built-in functions.

### A. String()

Converts a value into a string.

```js
String(100);       // "100"
String(true);      // "true"
String(null);      // "null"
String(undefined); // "undefined"
String(25.5);      // "25.5"
```

### B. Number()

Converts a value into a number.

```js
Number("100");  // 100
Number("10.5"); // 10.5
Number(true);   // 1
Number(false);  // 0
Number(null);   // 0

Number("hello"); // NaN
```

Important examples:

```js
Number("");    // 0
Number(" ");   // 0
Number("   "); // 0
Number("25");  // 25
Number("25px");// NaN
```

**Important difference:**

- `""` – Empty string: contains zero characters.
- `" "` – Whitespace string: contains one space character.
- Both return `0` because whitespace is removed before numeric conversion. If nothing remains, the result is zero.

### C. Boolean()

Converts a value into a Boolean (`true` or `false`).

```js
Boolean(1);       // true
Boolean(0);       // false
Boolean("hello"); // true
Boolean("");      // false
Boolean(null);    // false
Boolean(undefined); // false
Boolean([]);      // true
Boolean({});      // true
```

**Important:** Non-empty strings, including `"false"` and `"0"`, are truthy.

```js
Boolean("false"); // true
Boolean("0");     // true
```

### Falsy Values

These values become `false` when converted to Boolean:

```js
false
0
-0
0n
""
null
undefined
NaN
```

Most other values are truthy, including empty arrays `[]` and empty objects `{}`.

---

## 3. Implicit Type Conversion (Type Coercion)

Implicit conversion happens automatically when JavaScript converts a value from one type to another during an operation.

### Example 1: String concatenation

```js
console.log("5" + 2); // "52"
```

The `+` operator converts the number into a string and joins both values.

### Example 2: Subtraction

```js
console.log("5" - 2); // 3
```

The `-` operator converts the string into a number before subtraction.

### Example 3: Multiplication and Division

```js
console.log("10" * 2); // 20
console.log("10" / 2); // 5
```

### Example 4: Boolean conversion during arithmetic

```js
console.log(5 + true);  // 6
console.log(5 + false); // 5
```

JavaScript converts:

- `true` into `1`
- `false` into `0`

**Interview note:** The `+` operator can perform both addition and string concatenation. Other arithmetic operators such as `-`, `*`, and `/` generally convert numeric strings into numbers.

---

## 4. parseInt() and parseFloat()

Both functions extract a numeric value from the beginning of a string.

### A. parseInt()

Converts the beginning of a string into an integer.

```js
parseInt("100px");  // 100
parseInt("25.89");  // 25
parseInt("45.89px"); // 45
parseInt("hello");  // NaN
```

### B. parseFloat()

Converts the beginning of a string into a floating-point number (decimal number).

```js
parseFloat("25.89");    // 25.89
parseFloat("45.89px");  // 45.89
parseFloat("100px");    // 100
parseFloat("hello");    // NaN
```

### Number() vs parseInt() vs parseFloat()

| Function | Example | Output |
|---|---|---:|
| Number() | `Number("25.89")` | 25.89 |
| parseInt() | `parseInt("25.89")` | 25 |
| parseFloat() | `parseFloat("25.89")` | 25.89 |
| Number() | `Number("100px")` | NaN |
| parseInt() | `parseInt("100px")` | 100 |
| parseFloat() | `parseFloat("100px")` | 100 |

**Remember:**
- `Number()` converts the entire trimmed string.
- `parseInt()` extracts an integer from the beginning.
- `parseFloat()` extracts a decimal number from the beginning.

---

## 5. What is NaN?

NaN stands for **Not-a-Number**.

It represents an invalid numeric result.

```js
console.log(Number("hello")); // NaN
console.log(10 / "hello");    // NaN
console.log
=====================================================
PHASE 1
=====================================================



=========================================================
PHASE 2
=========================================================










=========================================================
PHASE 2
=========================================================















========================================================
PHASE 3
========================================================
========================================================
PHASE 3
========================================================