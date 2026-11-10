Topic 2 – Truthy, Falsy and Type Coercion
Let's start from the basics.
Lesson 1: Truthy and falsy values
In JavaScript, every value can behave like either true or false when used in a condition.

Falsy means: A value that behaves like false.

Truthy means: A value that behaves like true.
1. Falsy values
There are exactly 8 falsy values in JavaScript.
false
0
-0
0n
""
null
undefined
NaN


For example:
if (0) {
  console.log("Yes");
} else {
  console.log("No");
}

// Output: No


Why? Because 0 is falsy.
2. Truthy values
Some examples:
"Hello"
"0"
"false"
100
-10
[]
{}


Remember these two important points:
- Empty array [] is truthy.
- Empty object {} is truthy.
Example:
if ([]) {
  console.log("Hello");
}

// Output: Hello


Even though the array is empty, it is truthy!
3. Boolean conversion
We can use Boolean() to check whether a value is truthy or falsy.
console.log(Boolean(0));       // false
console.log(Boolean(10));      // true
console.log(Boolean(""));      // false
console.log(Boolean("Hello")); // true
console.log(Boolean([]));      // true


How to explain in an interview
"Truthy values behave like true, and falsy values behave like false in JavaScript conditions. For example, zero and an empty string are falsy, but an empty array and an empty object are truthy."