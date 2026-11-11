1. What is forEach()?
forEach() is used to go through an array and perform an action for each item.

In simple words: It visits every item in an array, one by one.
2. Simple example
let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit) => {
  console.log(fruit);
});


Output:
Apple
Banana
Mango


How does it work?
Iteration	fruit	Action
1	Apple	Prints Apple
2	Banana	Prints Banana
3	Mango	Prints Mango

forEach() takes each fruit and runs the code inside the callback.
3. Another example
let numbers = [10, 20, 30];

numbers.forEach((num) => {
  console.log(num * 2);
});


Output:
20
40
60


4. forEach() vs map()
This is important for interviews.
forEach()	map()
Performs an action on each item	Transforms each item
Returns undefined	Returns a new array
Does not create a new array of results	Creates a new array
Used for printing, logging, etc.	Used for transforming data

Example:
let numbers = [1, 2, 3];

let result1 = numbers.forEach(num => num * 2);
let result2 = numbers.map(num => num * 2);

console.log(result1); // undefined
console.log(result2); // [2, 4, 6]


Remember: forEach() does not return a new array. Even if you write return inside its callback, forEach() itself still returns undefined.
5. Interview answer
"forEach() is an array method that executes a callback function for every element in an array. It is mainly used when we want to perform an action on each element. It does not return a new array."
6. Practice quiz
Try these questions without running the code first.

Q1. What will be the output?
let numbers = [1, 2, 3];

numbers.forEach((num) => {
  console.log(num);
});


Q2. What does forEach() return?
- A. New array
- B. Original array
- C. undefined
Q3. What will be the output?
let numbers = [5, 10, 15];

numbers.forEach((num) => {
  console.log(num + 5);
});


Q4. Which method should you use to create a new array by doubling every number?
- A. forEach()
- B. map()
- C. pop()
Q5. Can we use break directly inside a forEach() callback to stop the loop?
- A. Yes
- B. No
Send me your answers (1–5). I'll check them, then we'll move to find() and findIndex().











Convert to PDF



Ad
Ad options



Learn more















B, 10 15 20, map(), 5 please explain













Good! Let's check your answers. 😊

You answered:
1. B
2. 10, 15, 20
3. map()
4. 5
It looks like you have answered Q2–Q5, but Q1 is missing.
Answer review
Question	Correct answer	Result
Q1	1, 2, 3	Not answered
Q2	C – undefined	Incorrect
Q3	10, 15, 20	Correct
Q4	B – map()	Correct
Q5	B – No	Let's explain

Q2. What does forEach() return?
let numbers = [1, 2, 3];

let result = numbers.forEach((num) => {
  console.log(num);
});

console.log(result);


Output:
1
2
3
undefined


Why?

forEach() performs an action for every item, but it does not return a new array or another result.

So its return value is always undefined.
Q5. Can we use break inside forEach()?
Answer: No.

This is not allowed:
numbers.forEach((num) => {
  if (num === 2) {
    break;
  }
});


It causes a syntax error.

If you want to stop a loop using break, use a normal for loop:
let numbers = [1, 2, 3, 4];

for (let num of numbers) {
  if (num === 3) {
    break;
  }

  console.log(num);
}


Output:
1
2


Remember:
- forEach() → performs an action on each item.
- map() → creates a new array.
- for...of → allows break and continue.
One quick question
What will this print?
let numbers = [10, 20, 30];

let result = numbers.forEach((num) => {
  return num * 2;
});

console.log(result);


A. [20, 40, 60]

B. undefined

C. [10, 20, 30]











Convert to PDF






so for loop also now allow break only for of allow break













Not exactly! 😊 Both for and for...of loops allow break.

In fact, these loops allow break:
Loop	Can use break?
for	Yes
while	Yes
do...while	Yes
for...of	Yes
for...in	Yes
forEach()	No

Example 1: Normal for loop
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }

  console.log(i);
}


Output:
1
2


Example 2: for...of loop
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  if (fruit === "Mango") {
    break;
  }

  console.log(fruit);
}


Output:
Apple
Banana


Remember this interview point
- break stops the entire loop.
- continue skips the current iteration.
- forEach() does not support break or continue directly.
Quick question: Which loop would you use if you want to stop when you find a particular product?

A. forEach()

B. for...of

C. Both A and B











Convert to PDF






for of and for in what iis difference













Good question! This is an important JavaScript interview topic. Let's understand for...of and for...in in simple English.
1. for...of loop
for...of is used to get the values from an iterable, such as an array or string.

Example:
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log(fruit);
}


Output:
Apple
Banana
Mango


Here:
- First iteration → Apple
- Second iteration → Banana
- Third iteration → Mango
It directly gives you the values.
2. for...in loop
for...in is used to get the keys or property names of an object.

Example:
let person = {
  name: "Nikita",
  age: 25,
  city: "Bangalore"
};

for (let key in person) {
  console.log(key);
}


Output:
name
age
city


Here, key gives you the property name.

To get the values, use:
for (let key in person) {
  console.log(person[key]);
}


Output:
Nikita
25
Bangalore


3. Main difference
for...of	for...in
Gives values	Gives keys
Used with arrays, strings, Maps, Sets, etc.	Used mainly with objects
Gets array elements directly	Gets object property names
break is allowed	break is allowed

4. Compare both with an array
let numbers = [10, 20, 30];

// for...of
for (let value of numbers) {
  console.log(value);
}

// for...in
for (let index in numbers) {
  console.log(index);
}


Output:
// for...of
10
20
30

// for...in
0
1
2


Notice the difference:
- for...of gives array values.
- for...in gives array indexes (as strings).
Interview tip
Remember this simple trick:
- of = values
- in = keys/indexes
For arrays, generally prefer for...of when you need the values. For objects, use for...in when you need the property names.
5. Quick interview quiz
Q1. What does for...of return when used with an array?


Indexes

Values

Property names




Q2. What does for...in return when used with an object?


Values

Property names

Array elements




Q3. What will this print?
let arr = ["A", "B", "C"];
for (let x in arr) {
  console.log(x);
}

A, B, C

0, 1, 2

1, 2, 3




Q4. Which loop is generally better for getting array values?


for...in

for...of

Both are identical



Submit answers
After this, we'll continue with find() and findIndex().