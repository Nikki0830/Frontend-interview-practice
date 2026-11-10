Topic 4 – Loops in JavaScript
1. What is a loop?
A loop is used to execute the same block of code multiple times without writing it again and again.

For example, suppose you want to print numbers from 1 to 5.

Without a loop, you would write console.log() five times.

With a loop, you can do it much more easily.
2. for loop
A for loop is commonly used when you know how many times you want to repeat something.

Syntax:
for (initialization; condition; increment) {
  // code to execute
}


Example:
for (let i = 1; i <= 5; i++) {
  console.log(i);
}


Output:
1
2
3
4
5


Let's understand the three parts:
Part	Meaning
let i = 1	Starting value
i <= 5	Condition to check
i++	Increase i by 1

How it works:
1. Start with i = 1.
2. Check whether i <= 5.
3. If true, execute the code.
4. Increase i by 1.
5. Repeat until the condition becomes false.
3. while loop
A while loop runs as long as the condition is true.

Example:
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}


Output:
1
2
3
4
5


Important: Remember to update the variable. Otherwise, you may create an infinite loop.
4. do...while loop
A do...while loop executes the code at least once, even if the condition is false.

Example:
let i = 10;

do {
  console.log(i);
  i++;
} while (i <= 5);


Output:
10


Why? Because the code executes once before JavaScript checks the condition.
5. Difference between loops
Loop	When to use
for	When you know the number of repetitions
while	When repetition depends on a condition
do...while	When code must execute at least once

6. break and continue
These are important interview concepts.

break: Stops the loop completely.
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}


Output: 1 2

continue: Skips the current iteration and moves to the next one.
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}


Output: 1 2 4 5
How to explain in an interview
"Loops are used to execute a block of code repeatedly. JavaScript provides for, while and do...while loops. We use for when we know the number of iterations, while when a condition controls the repetition, and do...while when we want the code to execute at least once."

Practice time – 5 questions
Try predicting the outputs.
Loops quiz
5/5 answered

1. What is the output?
for (let i = 1; i <= 3; i++) {
  console.log(i);
}


1 2 3

0 1 2

1 2 3 4

Correct!Starts at 1 and stops after 3.


2. What is the output?
let i = 1;
while (i < 4) {
  console.log(i);
  i++;
}


1 2 3

1 2 3 4

2 3 4

Correct!The loop runs while i is less than 4.


3. What is the output?
let i = 5;
do {
  console.log(i);
} while (i < 3);


Nothing

5

3

Correct!do...while executes once before checking the condition.


4. What is the output?
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}


1 2

1 2 3

1 2 4 5

Correct!break stops the entire loop when i becomes 3.


5. What is the output?
for (let i = 1; i <= 4; i++) {
  if (i === 2) continue;
  console.log(i);
}


1 2 3 4

1 3 4

1 2

Correct!continue skips only the iteration where i is 2.

Check my answersYour score: 5/5

After this, we'll move to Topic 5 – Functions, including declarations, expressions, arrow functions, parameters, return, scope and callbacks.











Convert to PDF






braek and contuiniue what is use













Good question! 😊 Both break and continue are used inside loops, but they do different things.
1. break – Stop the loop
break completely stops the loop when a particular condition is met.

Example: Stop printing numbers when the number reaches 3.
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }

  console.log(i);
}


Output:
1
2


Why? When i becomes 3, JavaScript stops the entire loop. Numbers 4 and 5 are never printed.
2. continue – Skip one iteration
continue skips the current iteration and moves to the next one.

Example: Skip number 3 but print the remaining numbers.
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}


Output:
1
2
4
5


Why? When i becomes 3, JavaScript skips that iteration but continues the loop.
Difference between break and continue
break	continue
Stops the entire loop	Skips only the current iteration
No further iterations	Next iteration continues
Used to exit a loop	Used to skip something

Real-world examples
- break: A user finds the product they are searching for in a list, so there is no need to continue searching.
- continue: You are displaying a list of employees but want to skip employees who are inactive.
Interview answer
"break stops the loop completely, whereas continue skips the current iteration and moves to the next iteration."

Quick practice
What will be the output of this code?
for (let i = 1; i <= 5; i++) {
  if (i === 4) {
    continue;
  }

  console.log(i);
}



1 2 3

1 2 3 5

1 2 3 4 5

4 5

Check answerCorrect! 🎉

When i becomes 4, continue skips that iteration. The loop then prints 5.