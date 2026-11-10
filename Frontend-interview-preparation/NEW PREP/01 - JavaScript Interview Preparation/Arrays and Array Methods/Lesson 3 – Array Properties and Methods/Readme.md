 1. What is an array property?
A property gives us information about an array.

The most commonly used array property is length.
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.length);


Output:
3


It tells us how many elements are in the array.

Other examples:
let numbers = [10, 20, 30];

console.log(numbers.length); // 3
console.log(numbers[0]);     // 10


2. What is an array method?
A method is a function that performs an operation on an array.

For example:
let fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);


Output:
["Apple", "Banana", "Mango"]


Here, push() adds an element to the array.
3. Important array methods
Let's look at the methods we'll learn throughout this topic.
Method	Purpose
push()	Adds an element at the end
pop()	Removes the last element
shift()	Removes the first element
unshift()	Adds an element at the beginning
slice()	Extracts a portion of an array
splice()	Adds, removes or replaces elements
map()	Creates a new array by transforming elements
filter()	Creates a new array with matching elements
reduce()	Combines elements into one result
find()	Returns the first matching element
some()	Checks whether at least one element matches
every()	Checks whether all elements match
sort()	Sorts array elements
reverse()	Reverses the array
flat()	Flattens nested arrays
forEach()	Runs a function for each element

Don't worry about memorising all of them now. We'll learn each method separately with examples and exercises.
4. Important difference: Original array vs new array
This is a popular interview question.

Some methods modify the original array, while others return a new array without changing the original.

Methods that modify the original array:
- push()
- pop()
- shift()
- unshift()
- splice()
- sort()
- reverse()
Methods that return a new array:
- map()
- filter()
- slice()
- flat()
Some methods return a value instead of an array, such as find(), some() and every().
5. How to explain in an interview
"An array property provides information about an array, such as its length. Array methods are functions that help us perform operations like adding, removing, searching, sorting and transforming elements."

Practice – Check your understanding
Array properties and methods quiz
5/5

1. Which one is an array property?

push()

length

map()

Correct!length tells us the number of elements in an array.


2. Which method adds an element at the end?

pop()

push()

shift()

Correct!push() adds one or more elements at the end.


3. Which method creates a new array by transforming elements?

map()

pop()

shift()

Correct!map() transforms each element and returns a new array.


4. Which method removes the first element?

pop()

shift()

unshift()

Correct!shift() removes the first element.


5. Which method modifies the original array?

filter()

map()

sort()

Correct!sort() sorts the original array in place.

Check answersYour score: 5/5

Next: Lesson 4 – push(), pop(), shift() and unshift().

We'll understand each method with simple examples, return values, original array changes and interview questions.











Convert to PDF






such as its length do we have only one property in array,













Good question! No, JavaScript arrays have more than one property, but length is the most commonly used array property.

Let's understand the important ones.
Common array properties
Property	Meaning	Example
length	Number of elements	arr.length
constructor	Function that created the array	arr.constructor
prototype	Available on Array constructor, not normally accessed through an array instance	Array.prototype

1. length
let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits.length); // 3


2. constructor
It tells us which constructor created the array.
let fruits = ["Apple", "Mango"];

console.log(fruits.constructor);


Output: A function named Array.

You can also check:
console.log(fruits.constructor === Array); // true


3. prototype
Array.prototype contains methods shared by arrays, such as map(), filter(), push() and pop().
console.log(Array.prototype);


It is not a normal instance property like length.
Important interview point
JavaScript arrays are special objects. They inherit many methods from Array.prototype, and they also have the length property.

Remember: For everyday frontend development, focus mainly on length, array indexes and array methods. You don't need to memorise every inherited object property.

Quick question
What will this return?
let numbers = [10, 20, 30, 40];

console.log(numbers.constructor === Array);


A. true

B. false

C. undefined

What do you think? 😊











Convert to PDF






ay by transforming elements what does traforming meanin in map













Good question! 😊

Transforming means changing something into another form.

In JavaScript, map() takes each element from an array, changes it according to our requirement, and returns a new array.
Example 1: Multiply every number by 2
let numbers = [1, 2, 3, 4];

let result = numbers.map((num) => {
  return num * 2;
});

console.log(result);


Output:
[2, 4, 6, 8]


Let's understand:
Original value	Transformation	New value
1	1 × 2	2
2	2 × 2	4
3	3 × 2	6
4	4 × 2	8

We changed every number by multiplying it by 2.
Example 2: Convert names to uppercase
let names = ["nikita", "rahul", "priya"];

let result = names.map((name) => name.toUpperCase());

console.log(result);


Output:
["NIKITA", "RAHUL", "PRIYA"]


Here, we transformed lowercase names into uppercase names.
Example 3: Real-world React example
Imagine you have a list of products:
let products = [
  { name: "Laptop", price: 50000 },
  { name: "Mobile", price: 20000 }
];

let productNames = products.map((product) => product.name);

console.log(productNames);


Output:
["Laptop", "Mobile"]


We transformed an array of product objects into an array of product names.
Remember this interview answer
"map() is an array method that takes each element, performs an operation on it and returns a new array. It does not modify the original array."

One small question for you:

What will be the output?
let numbers = [2, 4, 6];

let result = numbers.map((num) => num + 10);

console.log(result);


Try answering without running the code! 😊