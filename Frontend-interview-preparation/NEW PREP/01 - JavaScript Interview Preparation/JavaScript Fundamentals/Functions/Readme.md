Topic 5 – Functions
1. What is a function?
A function is a block of code that performs a particular task. We can write it once and use it whenever needed.

Example:
function greet() {
  console.log("Hello Nikita!");
}

greet();
greet();


Output:
Hello Nikita!
Hello Nikita!


Here:
- function – keyword to create a function.
- greet – function name.
- {} – contains the code.
- greet() – calls or executes the function.
Real-world example: Imagine a login button. When someone clicks it, a function can check the username and password.

Interview answer:

"A function is a reusable block of code that performs a specific task. We can call it whenever we need, which helps avoid repeating the same code."
2. Function declaration
This is the basic way to create a function.
function add() {
  console.log(10 + 20);
}

add();


Output: 30

We can also pass values into it.
3. Parameters and arguments
These two terms are commonly asked in interviews.
function greet(name) {
  console.log("Hello " + name);
}

greet("Nikita");


Output: Hello Nikita
- Parameter: name – the variable written when defining the function.
- Argument: "Nikita" – the actual value passed when calling the function.
Another example:
function add(a, b) {
  console.log(a + b);
}

add(10, 20);


Output: 30

Here, a and b are parameters, while 10 and 20 are arguments.
4. Return statement
return sends a value back from the function.
function add(a, b) {
  return a + b;
}

let result = add(10, 20);

console.log(result);


Output: 30

Important difference:

console.log() displays something in the console.

return gives a value back so that we can use it somewhere else.

Example:
function multiply(a, b) {
  return a * b;
}

let result = multiply(5, 4);

console.log(result + 10); // 30


Without return, the function would not give the calculated value back.
5. Function expression
We can also store a function inside a variable.
const greet = function() {
  console.log("Hello!");
};

greet();


Here:
- greet is a variable.
- function() is an anonymous function (it has no function name).
- We call it using greet().
Interview difference:
Function declaration	Function expression
Defined using a function name	Stored in a variable
Can be called before its definition due to hoisting	Cannot be called before initialization of a const or let variable

6. Arrow functions
Arrow functions provide a shorter way to write functions.

Normal function:
function add(a, b) {
  return a + b;
}


Arrow function:
const add = (a, b) => {
  return a + b;
};

console.log(add(10, 20));


Output: 30

For a single expression, we can write it even shorter:
const add = (a, b) => a + b;

console.log(add(10, 20)); // 30


Remember: When we use {} in an arrow function, we need return to send a value back. Without {}, a single expression is returned automatically.

Interview answer:

"An arrow function is a shorter way to write a function in JavaScript. It makes the code cleaner and is commonly used in callbacks and React components."

Let's check your understanding – Practice 1
Try these 5 questions before we move to scope and callbacks.
Functions – Mini quiz
5/5

1. What is the output?
function greet() {
  console.log("Hello");
}
greet();


Hello

undefined

Error

Correct!Calling greet() executes its code.


2. In this example, what is the parameter?
function add(a, b) {
  return a + b;
}
add(10, 20);


10 and 20

a and b

add

Correct!Parameters are the variables in the function definition.


3. What is the output?
function add(a, b) {
  return a + b;
}
console.log(add(5, 3));


53

8

undefined

Correct!The function returns 5 + 3.


4. Which is a valid arrow function?
Choose one.


const add = (a, b) => a + b;

const add => (a, b) a + b;

arrow add(a, b)

Correct!This is valid arrow-function syntax.


5. What happens if a function has no return statement?
function greet() {
  console.log("Hi");
}
console.log(greet());


Hi

Hi then undefined

undefined only

Correct answer: Hi then undefinedThe function prints Hi, then its call evaluates to undefined.

Check my answersYour score: 4/5

What's coming next?
After this quiz, we'll learn:
- Function scope: local, global and block scope.
- Hoisting in functions.
- Callback functions.
- Higher-order functions.
- Practical JavaScript examples used in React.
We will not move to Arrays until we finish these fundamentals.











Convert to PDF






5. What happens if a function has no return statement?
function greet() {
  console.log("Hi");
}
console.log(greet());


Hi

Hi then undefined

undefined only

Correct answer: Hi then undefinedThe function prints Hi, then its call evaluates to undefined. how













Good question! Let's understand this step by step. 😊

Look at this code:
function greet() {
  console.log("Hi");
}

console.log(greet());


There are two console.log statements here.
Step 1: JavaScript calls the function
greet()


It enters the function and executes:
console.log("Hi");


So the first output is:
Hi


Step 2: What does the function return?
Look at the function:
function greet() {
  console.log("Hi");
}


There is no return statement.

So JavaScript automatically returns undefined.
Step 3: Outer console.log executes
console.log(greet());


The function returns undefined, so the outer console.log prints it.

Final output:
Hi
undefined


Remember this important difference
- console.log() → Displays something in the console.
- return → Sends a value back from the function.
- No return statement → Function returns undefined automatically.
One more example
function add() {
  console.log(10 + 20);
}

let result = add();

console.log(result);


Output:
30
undefined


Why?
- First, 30 is printed inside the function.
- The function doesn't return anything.
- So result becomes undefined.

Quick test for you
What will be the output?
function test() {
  return "Hello";
}

console.log(test());



undefined

Hello

Hello undefined

Check answerCorrect! 🎉

The function returns "Hello", and the outer console.log prints it.



---------------------------------------------------------------------------------------------
JavaScript Fundamentals

Variables, data types, type conversion, operators, conditions, loops and functions.
Partially covered



Arrays and Array Methods

map, filter, reduce, find, some, every, sort, flat and more.



Objects and Object Methods

Destructuring, spread, rest, Object methods, cloning.



Scope, Hoisting and Execution Context

Call stack, lexical scope, TDZ and variable environments.



Functions – Advanced

Closures, callbacks, higher-order functions, IIFE, currying.



The this Keyword

Global context, objects, arrow functions, call, apply, bind.



Asynchronous JavaScript

Callbacks, promises, async/await, event loop, microtasks.



DOM and Browser APIs

DOM manipulation, events, bubbling, capturing, delegation, storage.



Modern JavaScript (ES6+)

Modules, optional chaining, nullish coalescing, template literals.



Advanced JavaScript

Prototypes, inheritance, classes, iterators, generators, memory management.



Coding Interview Practice

Arrays, strings, objects, recursion, sorting, searching and problem-solving.



Real-world JavaScript

API integration, error handling, debouncing, throttling and performance.