Topic 3 – Conditional Statements
Conditional statements help JavaScript make decisions based on conditions.

For example:
- If a student scores 40 or more, they pass.
- If the user is logged in, show the dashboard.
- Otherwise, show the login page.
1. if statement
The if statement executes code when the condition is true.
let age = 22;

if (age >= 18) {
  console.log("Eligible to vote");
}


Output:
Eligible to vote


2. if...else statement
Use else when you want to execute another block if the condition is false.
let age = 16;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}


Output: Minor
3. if...else if...else
Use this when you have multiple conditions.
let marks = 75;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else if (marks >= 40) {
  console.log("Grade C");
} else {
  console.log("Fail");
}


Output: Grade B

JavaScript checks the conditions from top to bottom and executes the first matching block.
4. switch statement
Use switch when you want to compare one value against multiple possible values.
let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("Invalid day");
}


Output: Tuesday

Remember:
- case checks a possible value.
- break stops execution of the switch.
- default runs when no case matches.
How to explain in an interview
"Conditional statements are used to make decisions in JavaScript. We use if, else if and else for checking conditions. We can also use switch when we need to compare one value with multiple options."

Practice – 5 questions
Try these yourself. Don't run the code!
Conditional statements quiz
5/5 answered

1. What is the output?
let age = 20;
if (age >= 18) {
 console.log("Adult");
} else {
 console.log("Minor");
}


Adult

Minor

Error

Correct!


2. What is the output?
let marks = 35;
if (marks >= 90) {
 console.log("A");
} else if (marks >= 40) {
 console.log("B");
} else {
 console.log("Fail");
}


A

B

Fail

Correct!


3. What is the output?
let x = 10;
if (x > 5) {
 console.log("Yes");
} else if (x > 8) {
 console.log("Hello");
}


Yes

Hello

Both

Correct!


4. Which keyword stops a switch case from continuing into the next case?
Choose one.


stop

break

return

Correct!


5. Which statement runs when no switch case matches?
Choose one.


else

finally

default

Correct!

Submit answersYour score: 5/5