Lesson 3: Short-circuit evaluation (&& and ||)
Remember, we briefly studied this in operators. Now let's understand it properly.
1. AND (&&)
JavaScript stops when it finds the first falsy value.
console.log(10 && 20);    // 20
console.log(0 && 50);     // 0
console.log(10 && 0);     // 0


Remember:
- If all values are truthy, it returns the last value.
- If it finds a falsy value, it returns that value and stops.
2. OR (||)
JavaScript stops when it finds the first truthy value.
console.log(10 || 20);   // 10
console.log(0 || 50);    // 50
console.log("" || "Hi"); // "Hi"


Remember:
- If it finds a truthy value, it returns that value and stops.
- If all values are falsy, it returns the last value.
3. Real-world example
Imagine a user hasn't entered a name.
let username = "";

let displayName = username || "Guest";

console.log(displayName); // Guest


If the username is empty, JavaScript uses "Guest" as the default.
4. Interview answer
"Short-circuit evaluation means JavaScript stops checking an expression when the result is already decided. AND stops at the first falsy value, while OR stops at the first truthy value."

Your practice – 5 questions
Short-circuit quiz
5/5

Question 1
console.log(true && 100);


true

100

false

Correct!Both are truthy, so && returns the last value.


Question 2
console.log(0 && 25);


0

25

true

Correct!0 is falsy, so && stops and returns 0.


Question 3
console.log("Hello" || "World");


Hello

World

true

Correct!Hello is truthy, so || stops there.


Question 4
console.log("" || "Guest");




Guest

undefined

Correct answer: GuestEmpty string is falsy, so || returns Guest.


Question 5
console.log(false || 0 || 50);


false

0

50

Correct answer: 50The first two values are falsy. 50 is the first truthy value.

Check answersScore: 3/5