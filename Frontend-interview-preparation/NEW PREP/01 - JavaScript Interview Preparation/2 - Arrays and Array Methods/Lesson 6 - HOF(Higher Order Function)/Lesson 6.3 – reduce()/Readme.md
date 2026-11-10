Lesson 8 – reduce()
1. What is reduce()?
reduce() is used to combine all array elements into one single value.

In simple words: It takes array elements one by one, performs an operation and gives us one final result.
Example 1 – Calculate the sum of numbers
let numbers = [10, 20, 30, 40];

let total = numbers.reduce((sum, num) => {
  return sum + num;
}, 0);

console.log(total);


Output:
100


Let's understand how it works.
Step	sum (previous result)	num (current value)	New sum
1	0	10	10
2	10	20	30
3	30	30	60
4	60	40	100

How reduce() combines values
Start: 0
+ 10

+ 20


30
+ 30

60


100
Final result
2. Understand the syntax
array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, initialValue);


There are three important things:
Term	Meaning
accumulator	Stores the previous result
currentValue	Current element being processed
initialValue	Starting value of the accumulator

In our example:
numbers.reduce((sum, num) => sum + num, 0);


- sum = accumulator
- num = current number
- 0 = initial value
Easy trick: The accumulator keeps collecting the result.
3. Example – Find the product of numbers
let numbers = [2, 3, 4];

let result = numbers.reduce((total, num) => {
  return total * num;
}, 1);

console.log(result);


Output:
24


Calculation:
- Start with 1.
- 1 × 2 = 2.
- 2 × 3 = 6.
- 6 × 4 = 24.
We use 1 as the initial value because multiplying by 1 doesn't change the number.
4. Example – Calculate total product price
This is a real-world frontend example.
let cart = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2000 }
];

let totalPrice = cart.reduce((total, product) => {
  return total + product.price;
}, 0);

console.log(totalPrice);


Output:
53000


Here, reduce() calculates the total price of all products in the shopping cart.
5. Example – Count occurrences
Imagine you want to count how many times each fruit appears.
let fruits = ["Apple", "Banana", "Apple", "Mango", "Banana"];

let result = fruits.reduce((count, fruit) => {
  count[fruit] = (count[fruit] || 0) + 1;
  return count;
}, {});

console.log(result);


Output:
{
  Apple: 2,
  Banana: 2,
  Mango: 1
}


Here, the accumulator is an object instead of a number.
6. Important things to remember
- reduce() returns one final accumulated result.
- That result can be a number, string, object, array or another value.
- It does not change the original array by itself.
- The initial value is optional, but usually recommended.
- Without an initial value, the first array element becomes the initial accumulator.
7. map() vs filter() vs reduce()
Method	Purpose	Example
map()	Transform elements	Double all numbers
filter()	Select elements	Get even numbers
reduce()	Combine elements	Calculate total

Interview answer:

"reduce() is an array method that processes each element and combines the results into a single value. It is commonly used for calculating totals, counting items and grouping data."

8. Practice time – 5 questions
Try predicting the output without running the code.
reduce() interview quiz
5/5 answered

1. What is the output?
let nums = [1, 2, 3, 4];
let result = nums.reduce((sum, num) => sum + num, 0);
console.log(result);


9

10

24

Correct!1 + 2 + 3 + 4 = 10.


2. What is the output?
let nums = [2, 3, 4];
let result = nums.reduce((total, num) => total * num, 1);
console.log(result);


9

24

10

Correct!1 × 2 × 3 × 4 = 24.


3. What is the initial value?
let nums = [10, 20, 30];
let result = nums.reduce((sum, num) => sum + num, 100);


0

10

100

Correct!The second argument, 100, is the initial accumulator value.


4. What is the output?
let nums = [5, 10, 15];
let result = nums.reduce((sum, num) => sum + num, 0);
console.log(result);


25

30

15

Correct!5 + 10 + 15 = 30.


5. Which method would you use to calculate the total price of a shopping cart?
Choose one.


map()

filter()

reduce()

Correct!reduce() combines all product prices into one total.

Check my answersYour score: 5/5

Next lesson: 9. find() and findIndex()

We'll learn how to search for a particular element in an array, especially when working with API data and product lists.











Convert to PDF






let fruits = ["Apple", "Banana", "Apple", "Mango", "Banana"];

let result = fruits.reduce((count, fruit) => {
  count[fruit] = (count[fruit] || 0) + 1;
  return count;
}, {});

console.log(result);
Output:
{
  Apple: 2,
  Banana: 2,
  Mango: 1
} explain this















Of course! This is a very useful reduce() example. It is used to count how many times each element appears in an array.

Let's understand it slowly, line by line.
1. Our original array
let fruits = ["Apple", "Banana", "Apple", "Mango", "Banana"];


We have:
- Apple appears 2 times.
- Banana appears 2 times.
- Mango appears 1 time.
We want JavaScript to count these automatically.
2. Understand the reduce() code
let result = fruits.reduce((count, fruit) => {
  count[fruit] = (count[fruit] || 0) + 1;
  return count;
}, {});


Let's understand each part.

First: count

count is our accumulator. It stores the counting result.

We start with an empty object:
{}


Second: fruit

fruit represents the current element of the array.

Third: This is the most important line
count[fruit] = (count[fruit] || 0) + 1;


It means:
1. Check whether this fruit already exists in the count object.
2. If it exists, take its current count.
3. If it doesn't exist, start from 0.
4. Add 1 to the count.
For example:
count["Apple"] = (count["Apple"] || 0) + 1;


Initially, Apple doesn't exist, so:
count["Apple"] = (0) + 1;


Result:
{ Apple: 1 }


3. Let's see each iteration
This is how reduce() processes our array.
Step-by-step execution
Step 1
Current fruit: Apple

Apple doesn't exist yet. Start at 0 and add 1.
{ Apple: 1 }



Step 2
Current fruit: Banana

Banana doesn't exist yet. Start at 0 and add 1.
{ Apple: 1, Banana: 1 }



Step 3
Current fruit: Apple

Apple already has a count of 1. Add 1.
{ Apple: 2, Banana: 1 }



Step 4
Current fruit: Mango

Mango doesn't exist yet. Start at 0 and add 1.
{ Apple: 2, Banana: 1, Mango: 1 }



Step 5
Current fruit: Banana

Banana already has a count of 1. Add 1.
{ Apple: 2, Banana: 2, Mango: 1 }



Final result
{
  Apple: 2,
  Banana: 2,
  Mango: 1
}



4. What does count[fruit] mean?
This is important to understand.

When fruit = "Apple":
count[fruit]


is the same as:
count["Apple"]


It accesses the Apple property in the object.

We use square brackets because the fruit name is stored inside a variable.
5. What is (count[fruit] || 0)?
This uses the OR (||) operator.
- If the fruit already has a count, use that count.
- If it doesn't have a count (undefined), use 0.
Then we add 1.
6. Interview answer
Interviewer: How can you count duplicate elements in an array using reduce()?

You can say:

"We can use reduce() with an empty object as the initial value. For each element, we check whether it already exists in the object. If it exists, we increase its count by one; otherwise, we start its count at one."

Your turn – Small practice
Try this example:
let colors = ["Red", "Blue", "Red", "Green", "Red"];

let result = colors.reduce((count, color) => {
  count[color] = (count[color] || 0) + 1;
  return count;
}, {});

console.log(result);


What will be the final output?

Red: 2, Blue: 1, Green: 2

Red: 3, Blue: 1, Green: 1

Red: 1, Blue: 2, Green: 2

Check answer
Take your time. Understanding this pattern will help you solve many JavaScript coding interview questions.











Convert to PDF






  count[fruit] = (count[fruit] || 0) + 1; how to write this in a simpler way















You can write it in a simpler way using an if...else condition.
Original code
count[fruit] = (count[fruit] || 0) + 1;


Simpler version
if (count[fruit]) {
  count[fruit] = count[fruit] + 1;
} else {
  count[fruit] = 1;
}


How does it work?
Suppose fruit = "Apple".

First time Apple appears:
- count["Apple"] doesn't exist.
- So the else block runs.
- count["Apple"] = 1.
Second time Apple appears:
- count["Apple"] is already 1.
- So the if block runs.
- count["Apple"] = 1 + 1, which is 2.
Full code
let fruits = ["Apple", "Banana", "Apple", "Mango", "Banana"];

let result = fruits.reduce((count, fruit) => {
  if (count[fruit]) {
    count[fruit] = count[fruit] + 1;
  } else {
    count[fruit] = 1;
  }

  return count;
}, {});

console.log(result);


Output:
{
  Apple: 2,
  Banana: 2,
  Mango: 1
}


Interview tip: First understand this if...else version. Once you're comfortable, the shorter || 0 version will make much more sense.