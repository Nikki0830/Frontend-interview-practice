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





=====================================================
PHASE 1
=====================================================