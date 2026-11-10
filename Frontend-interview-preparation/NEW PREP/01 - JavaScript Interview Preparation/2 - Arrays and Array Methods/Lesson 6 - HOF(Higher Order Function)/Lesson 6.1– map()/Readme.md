Lesson 6 – map()
1. What is map()?
map() is used to take each element from an array, perform an operation on it, and create a new array with the results.

In simple words: map() changes each element according to our requirement.
Example 1 – Multiply numbers by 2
let numbers = [1, 2, 3, 4];

let result = numbers.map((num) => {
  return num * 2;
});

console.log(result);


Output:
[2, 4, 6, 8]


Let's understand how it works:
Original number	Operation	New number
1	1 × 2	2
2	2 × 2	4
3	3 × 2	6
4	4 × 2	8

JavaScript takes one number at a time, multiplies it by 2 and stores the result in a new array.
2. How does map() work?
Let's understand this code:
let numbers = [10, 20, 30];

let result = numbers.map((num) => {
  return num + 5;
});


There are three important things:
- map() – method that processes every element.
- num – represents the current element.
- return – sends the transformed value into the new array.
The callback runs once for every element.
3. Convert names into uppercase
let names = ["nikita", "rahul", "priya"];

let result = names.map((name) => {
  return name.toUpperCase();
});

console.log(result);


Output:
["NIKITA", "RAHUL", "PRIYA"]


Here, we converted lowercase names into uppercase.
4. map() with objects
This is especially useful in frontend development.

Imagine you receive employee data from an API.
let employees = [
  { id: 1, name: "Rahul", salary: 30000 },
  { id: 2, name: "Priya", salary: 40000 },
  { id: 3, name: "Amit", salary: 35000 }
];

let employeeNames = employees.map((employee) => {
  return employee.name;
});

console.log(employeeNames);


Output:
["Rahul", "Priya", "Amit"]


We transformed an array of employee objects into an array of employee names.
5. map() in React
This is one of the most common uses of map().

Imagine you want to display a list of employees on a webpage.
function EmployeeList() {
  const employees = ["Rahul", "Priya", "Amit"];

  return (
    <div>
      {employees.map((employee, index) => (
        <p key={index}>{employee}</p>
      ))}
    </div>
  );
}


React uses map() to create a list of elements from the array.

Interview point: In real React applications, use a unique ID as the key whenever possible instead of the array index.
6. Important things to remember
Feature	map()
Purpose	Transform elements
Returns	New array
Changes original array?	No, not by itself
Executes callback	For every element
Common use	Formatting data, React lists

One important point: if you don't return anything from the callback, the resulting array will contain undefined for those elements.
let numbers = [1, 2, 3];

let result = numbers.map((num) => {
  num * 2;
});

console.log(result);


Output:
[undefined, undefined, undefined]


Why? Because we didn't use return.

7. Interview answer
Interviewer: What is map() in JavaScript?

You can say:

"map() is an array method that executes a function for every element and returns a new array with the results. It is commonly used to transform data and display lists in React."

That's enough for a clear interview answer!

8. Practice questions
Try these five questions without running the code.
map() interview quiz
5/5 answered

1. What is the output?
let nums = [1, 2, 3];
let result = nums.map((n) => n * 3);
console.log(result);


[1, 2, 3]

[3, 6, 9]

[2, 3, 4]

Correct!Each number is multiplied by 3.


2. What does map() return?
let nums = [10, 20];
let result = nums.map((n) => n + 5);


Original array

New array

Single number

Correct!map() returns a new array containing transformed values.


3. What is the output?
let names = ["nikita", "rahul"];
let result = names.map((name) => name.toUpperCase());
console.log(result);


["nikita", "rahul"]

["NIKITA", "RAHUL"]

["Nikita", "Rahul"]

Correct!toUpperCase() converts each name to uppercase.


4. What is the output?
let nums = [1, 2, 3];
let result = nums.map((n) => {
  n * 2;
});
console.log(result);


[2, 4, 6]

[undefined, undefined, undefined]

[1, 2, 3]

Correct!The callback uses braces but has no return statement.


5. Which method is commonly used to display array data in React?
Choose one.


map()

pop()

splice()

Correct!React commonly uses map() to create a list of elements from array data.

Check my answersYour score: 5/5

Next lesson: filter() – How to select only the elements that match a condition.

Remember the difference:
- map() → Transform elements.
- filter() → Select elements.

------------------------------------------------------------------------------------------------------------------------
The issue is that you're using commas to return multiple values.

In JavaScript, a return statement returns only one value. When you use commas, JavaScript's comma operator evaluates each expression and returns only the last one.
Your code
return (
    num * 2,
    num * 3
);


For example, if num = 5:
- num * 2 → 10
- num * 3 → 15
- Returned value → 15
So, the output is 15, not [10, 15].
If you want to return both values
Use an array:
return [
    num * 2,
    num * 3
];


Output when num = 5:
[10, 15]


If you want to return only the second value
Your original code already does that:
return (
    num * 2,
    num * 3
);


Interview note: The comma operator evaluates multiple expressions from left to right and returns the value of the last expression.











Convert to PDF

Suggested based on your interests


Ad
Ad options



Learn more
















with return what is the use of (), [], {} and if any more













In JavaScript, (), [], and {} have different purposes when used with return.

Let's understand each one with examples.
1. Parentheses () – Group expressions
Parentheses group expressions together. They do not automatically create an array or object.
function calculate(num) {
    return (num * 2);
}

console.log(calculate(5)); // 10


You can also use them with the comma operator:
function calculate(num) {
    return (
        num * 2,
        num * 3
    );
}

console.log(calculate(5)); // 15


Remember: With the comma operator, only the last expression is returned.
2. Square brackets [] – Return an array
Use square brackets when you want to return multiple values inside an array.
function calculate(num) {
    return [
        num * 2,
        num * 3
    ];
}

console.log(calculate(5)); // [10, 15]


You can access individual values using indexes:
let result = calculate(5);

console.log(result[0]); // 10
console.log(result[1]); // 15


3. Curly braces {} – Return an object
Use curly braces to return an object containing key-value pairs.
function calculate(num) {
    return {
        double: num * 2,
        triple: num * 3
    };
}

console.log(calculate(5));


Output:
{
    double: 10,
    triple: 15
}


Access the values:
let result = calculate(5);

console.log(result.double); // 10
console.log(result.triple); // 15


Important: When returning an object directly, wrap it in parentheses if using an arrow function with an implicit return:
const calculate = (num) => ({
    double: num * 2,
    triple: num * 3
});


Otherwise, JavaScript interprets {} as the arrow function's body.
4. Other useful return values
A function can also return:
Value	Example	Returned value
Number	return 100;	100
String	return "Hello";	"Hello"
Boolean	return true;	true
Array	return [10, 20];	[10, 20]
Object	return {name: "Nikita"};	Object
Function	return function() {};	Function
Null	return null;	null
Undefined	return;	undefined

5. Important difference for interview preparation
Syntax	Purpose
()	Groups expressions or controls function calls
[]	Creates an array
{}	Creates an object or a function/block body, depending on context
<>	Not a JavaScript grouping or return syntax; used in comparisons and other contexts

6. Test your understanding
Predict the output of these three examples.

Question 1 – Parentheses
function test() {
    return (10 + 20);
}

console.log(test());


Question 2 – Array
function test() {
    return [10 + 20, 5 * 2];
}

console.log(test());


Question 3 – Object
function test() {
    return {
        first: 10 + 20,
        second: 5 * 2
    };
}

console.log(test());


Choose the correct output
Question 1

30

[30]

{30}

Correct!

Question 2

30

[30, 10]

{first: 30, second: 10}

Correct!

Question 3

[30, 10]

30

{first: 30, second: 10}

Correct!

Check answers
My recommendation: Remember these three rules:
- () → Group expressions.
- [ ] → Return a collection of values (array).
- {} → Return structured key-value data (object).
These are especially important when learning JavaScript map(), callbacks and arrow functions.











Convert to PDF






function employeeList() {
    const employees2 = ["Rahul", "Priya", "Amit"];

    return (
        <div>
            {employees2.map((employee, index) => (
                <p key={index}>{employee}</p>
            ))}
        </div>
    )
}
employeeList() how do i run it with index.js file













Your function uses JSX, which is React syntax. You cannot run it directly in a normal JavaScript index.js file using Node.js.

You have two ways to run it.
Option 1: Run it in a React project (recommended)
Since you are learning React, let's use a React project.

Step 1: Create a React component

Create a file named EmployeeList.jsx:
function EmployeeList() {
    const employees2 = ["Rahul", "Priya", "Amit"];

    return (
        <div>
            {employees2.map((employee, index) => (
                <p key={index}>{employee}</p>
            ))}
        </div>
    );
}

export default EmployeeList;


Step 2: Import it into App.jsx
import EmployeeList from "./EmployeeList";

function App() {
    return (
        <div>
            <h1>Employee List</h1>
            <EmployeeList />
        </div>
    );
}

export default App;


Step 3: Run your React project

In the terminal:
npm run dev


Open the local URL shown in your terminal.
Expected browser output
Employee List

Rahul

Priya

Amit

Option 2: Run it in a normal JavaScript index.js file
If you are currently practising JavaScript array methods in your index.js, use normal JavaScript instead of JSX.
function employeeList() {
    const employees2 = ["Rahul", "Priya", "Amit"];

    return employees2.map((employee, index) => {
        return `${index + 1}. ${employee}`;
    });
}

console.log(employeeList());


Terminal output:
[
  '1. Rahul',
  '2. Priya',
  '3. Amit'
]


Important difference for interviews
Normal JavaScript	React
.map() transforms arrays	.map() commonly renders lists
Returns JavaScript values	Can return JSX elements
Uses console.log() to display output	Uses components to display UI
Runs in Node.js	JSX needs a React build environment

Remember: Your original code is a React component, not a regular JavaScript function that Node.js can execute directly.

For your current JavaScript array-method practice, use Option 2. When you start React projects, practise Option 1.











Convert to PDF






what is index and key in param













Let's understand index and key using your employee list example.
function EmployeeList() {
    const employees = ["Rahul", "Priya", "Amit"];

    return (
        <div>
            {employees.map((employee, index) => (
                <p key={index}>{employee}</p>
            ))}
        </div>
    );
}


1. What is index?
index is the position number of an element in an array.

JavaScript array indexes start from 0, not 1.

For example:
const employees = ["Rahul", "Priya", "Amit"];

employees.map((employee, index) => {
    console.log(employee, index);
});


Output:
Rahul 0
Priya 1
Amit 2


Employee	Index
Rahul	0
Priya	1
Amit	2

In .map((employee, index) => ...):
- employee = current element.
- index = current element's position.
2. What is key in React?
key is a special React prop used to uniquely identify elements in a rendered list.
<p key={index}>{employee}</p>


Here:
- key = React's special prop.
- index = the value assigned to that key.
React uses keys to identify which list items have been added, removed, or changed.
3. Are index and key the same?
No!
Index	Key
JavaScript concept	React concept
Represents array position	Identifies an element in a rendered list
Starts from 0	Should be unique among sibling elements
Available as a .map() callback parameter	Passed as a JSX attribute

4. Can we use something other than index as a key?
Yes! A unique ID is usually better.
function EmployeeList() {
    const employees = [
        { id: 101, name: "Rahul" },
        { id: 102, name: "Priya" },
        { id: 103, name: "Amit" }
    ];

    return (
        <div>
            {employees.map((employee, index) => (
                <p key={employee.id}>
                    {employee.name}
                </p>
            ))}
        </div>
    );
}


Here, employee.id is used as the key instead of index.

Interview tip: Avoid using array indexes as keys when list items can be reordered, inserted, or deleted. Prefer stable, unique IDs.

Quick practice
What will be the output?
const names = ["Nikita", "Rahul", "Priya"];

names.map((name, index) => {
    console.log(index, name);
});



0 Nikita, 1 Rahul, 2 Priya

1 Nikita, 2 Rahul, 3 Priya

Nikita 0, Rahul 1, Priya 2

Check answer











Convert to PDF






<div>
            {employees2.map((employee, index) => (
               
                <p key={index}>{employee}</p>
            )
               console.log(employee, index);
            )}
        </div> whats wrong













The problem is that you are trying to use console.log() outside the .map() callback function, but you haven't correctly closed the callback.

You have two ways to write this.
1. Using curly braces {} inside map
If you want to use both console.log() and return, use curly braces:
<div>
    {employees2.map((employee, index) => {
        console.log(employee, index);

        return (
            <p key={index}>{employee}</p>
        );
    })}
</div>


Here:
- {} → Allows multiple statements inside the callback.
- console.log() → Prints employee and index.
- return → Returns the JSX element.
- key={index} → Gives React a key for each element.
2. Using parentheses () inside map
If you only want to return JSX, use parentheses:
<div>
    {employees2.map((employee, index) => (
        <p key={index}>{employee}</p>
    ))}
</div>


But you cannot directly write another statement like console.log() inside these parentheses.
Understand the difference
Syntax	Purpose
=> (...)	Implicitly returns one expression
=> { ... }	Function body; use return explicitly

Interview tip: When you need multiple statements inside .map(), use curly braces {} and explicitly write return.
--------------------------------------------------------------------------------------------------------------------------------









