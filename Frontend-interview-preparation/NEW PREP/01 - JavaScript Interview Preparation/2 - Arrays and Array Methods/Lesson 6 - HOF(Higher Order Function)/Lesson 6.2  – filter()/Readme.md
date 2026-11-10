Lesson 7 – filter()
1. What is filter()?
filter() is used to select only the elements that match a particular condition.

In simple words: filter() checks every element and keeps only the elements that satisfy the condition.
Example 1 – Get numbers greater than 10
let numbers = [5, 10, 15, 20, 25];

let result = numbers.filter((num) => {
  return num > 10;
});

console.log(result);


Output:
[15, 20, 25]


Let's understand:
Number	Condition (num > 10)	Result
5	false	Removed
10	false	Removed
15	true	Kept
20	true	Kept
25	true	Kept

Only the numbers greater than 10 are returned.
2. How does filter() work?
let ages = [15, 18, 22, 12, 30];

let adults = ages.filter((age) => {
  return age >= 18;
});

console.log(adults);


Output:
[18, 22, 30]


- filter() checks every element.
- age represents the current element.
- age >= 18 is the condition.
- If the condition is true, that element is included.
- If false, that element is skipped.
3. Filter strings
Imagine you want to select names starting with the letter A.
let names = ["Amit", "Rahul", "Anita", "Priya"];

let result = names.filter((name) => {
  return name.startsWith("A");
});

console.log(result);


Output:
["Amit", "Anita"]


4. filter() with objects
This is especially important for frontend developers.

Imagine an employee management dashboard.
let employees = [
  { id: 1, name: "Rahul", active: true },
  { id: 2, name: "Priya", active: false },
  { id: 3, name: "Amit", active: true }
];

let activeEmployees = employees.filter((employee) => {
  return employee.active === true;
});

console.log(activeEmployees);


Output:
[
  { id: 1, name: "Rahul", active: true },
  { id: 3, name: "Amit", active: true }
]


We selected only active employees.
5. filter() in React
Imagine you have a product list and want to display only products costing less than ₹1,000.
function ProductList() {
  const products = [
    { id: 1, name: "Watch", price: 800 },
    { id: 2, name: "Laptop", price: 50000 },
    { id: 3, name: "Bag", price: 600 }
  ];

  const filteredProducts = products.filter(
    (product) => product.price < 1000
  );

  return (
    <div>
      {filteredProducts.map((product) => (
        <p key={product.id}>
          {product.name} - ₹{product.price}
        </p>
      ))}
    </div>
  );
}


Here:
- filter() selects products below ₹1,000.
- map() displays the selected products.
This combination is commonly used in React applications.
6. Important things to remember
Feature	filter()
Purpose	Select matching elements
Returns	New array
Changes original array?	No, not by itself
Callback executes	For every element
Condition result	Truthy or falsy
No matches	Empty array []

Important: filter() always returns an array, even if only one element matches or nothing matches.
7. map() vs filter()
This is a common interview question.
map()	filter()
Transforms elements	Selects elements
Usually returns same number of elements	May return fewer elements
Can change the shape or value of data	Keeps matching original elements
Example: Double all numbers	Example: Select even numbers

Interview answer:

"map() is used to transform every element and return a new array, whereas filter() is used to select elements based on a condition and return a new array containing only matching elements."

8. Practice – 5 interview questions
Try predicting the output without running the code.
filter() interview quiz
5/5 answered

1. What is the output?
let nums = [5, 10, 15, 20];
let result = nums.filter((n) => n > 10);
console.log(result);


[5, 10]

[15, 20]

[10, 15, 20]

Correct!Only 15 and 20 satisfy n > 10.


2. What does filter() return?
let nums = [1, 2, 3];
let result = nums.filter((n) => n > 5);


undefined

null

[]

Correct!No elements match, so filter returns an empty array.


3. What is the output?
let names = ["Amit", "Rahul", "Anita"];
let result = names.filter((name) => name.startsWith("A"));
console.log(result);


["Amit", "Anita"]

["Rahul"]

["Amit", "Rahul", "Anita"]

Correct!Amit and Anita start with A.


4. Does filter() change the original array?
let nums = [10, 20, 30];
let result = nums.filter((n) => n > 10);


Yes

No

Correct!filter() creates a new array and leaves the original array unchanged.


5. Which method would you use to select only active employees?
Choose the correct method.


map()

filter()

push()

Correct!filter() selects employees that match the active condition.

Check my answersYour score: 5/5

Next lesson: 8. reduce() – How to calculate a total or combine all array elements into one value.

Remember:
- map() → Transform.
- filter() → Select.
- reduce() → Combine.

---------------------------------------------------------------------------------------

The main difference between your two codes is curly braces {} vs parentheses () inside the .map() arrow function.

Both use .map() to display products in React, but the first code is missing return.
1. Your first code — Curly braces {}
{filteredProducts.map((product) => {
    <p key={product.id}>
        {product.name} - ₹{product.price}
    </p>
})}


JSX will not render
Why?

When you use {} after =>, JavaScript creates a function body. You must explicitly write return to return the JSX.

Your callback currently returns undefined for every product.
Correct version
{filteredProducts.map((product) => {
    return (
        <p key={product.id}>
            {product.name} - ₹{product.price}
        </p>
    );
})}


Now React receives the JSX elements and displays them.
2. Your second code — Parentheses ()
{filteredProducts.map((product) => (
    <p key={product.id}>
        {product.name} - ₹{product.price}
    </p>
))}


Correct — JSX renders
Why?

When you use () after =>, the arrow function implicitly returns the expression inside.

You don't need to write return.
3. Difference between both
Feature	=> {}	=> ()
Return type	Explicit return	Implicit return
Need return keyword?	Yes, to return JSX	No
Multiple statements?	Yes	No
Can use console.log()?	Yes	Not as a separate statement
Common use	More complex logic	Simple JSX rendering

4. When should you use {}?
When you want to perform additional operations before returning JSX.
{filteredProducts.map((product, index) => {
    console.log(product.name, index);

    const discountedPrice = product.price * 0.9;

    return (
        <p key={product.id}>
            {product.name} - ₹{discountedPrice}
        </p>
    );
})}


Here, curly braces are useful because you're performing multiple statements.
5. When should you use ()?
When you only need to return JSX.
{filteredProducts.map((product) => (
    <p key={product.id}>
        {product.name} - ₹{product.price}
    </p>
))}


This is shorter and commonly used in React.
6. Interview question
What will this code return?
const numbers = [1, 2, 3];

const result = numbers.map((num) => {
    num * 2;
});

console.log(result);



[2, 4, 6]

[undefined, undefined, undefined]

[1, 2, 3]

Error

Check answer
Remember for interviews:
- => (expression) → Implicit return.
- => { return expression; } → Explicit return.
- => { expression; } → Returns undefined unless another return is executed.
One more detail: Your first example uses filterProducts, while the second uses filteredProducts. Make sure you use the actual variable name consistently, because JavaScript treats them as different variables.











Convert to PDF






map vs filtger













JavaScript map() vs filter()
Both map() and filter() are Higher-Order Array Methods. Both accept a callback function and return a new array.

But their purposes are different.
- map() → Transforms every element.
- filter() → Selects elements based on a condition.
1. map() – Transform elements
map() executes a callback for every element and returns a new array containing the transformed values.

Example: Multiply every number by 2.
const numbers = [1, 2, 3, 4, 5];

const result = numbers.map((num) => {
    return num * 2;
});

console.log(result);


Output:
[2, 4, 6, 8, 10]


Explanation:
Original	Transformation	New value
1	1 × 2	2
2	2 × 2	4
3	3 × 2	6
4	4 × 2	8
5	5 × 2	10

Important: map() returns an array with the same number of elements as the original array.
2. filter() – Select elements
filter() checks every element against a condition and returns only the elements for which the condition is true.

Example: Get even numbers.
const numbers = [1, 2, 3, 4, 5];

const result = numbers.filter((num) => {
    return num % 2 === 0;
});

console.log(result);


Output:
[2, 4]


Explanation:
Number	Condition num % 2 === 0	Selected?
1	false	No
2	true	Yes
3	false	No
4	true	Yes
5	false	No

Important: filter() can return fewer elements than the original array, or even an empty array.
3. Main differences
Feature	map()	filter()
Purpose	Transform elements	Select elements
Callback result	Any value	Truthy or falsy condition
Returns	New array	New array
Array length	Same as original	Same or shorter
Modifies original?	No	No
Common use	Formatting data	Searching or filtering data

4. Practical React example
Imagine you have an employee list.
const employees = [
    { id: 1, name: "Rahul", salary: 30000 },
    { id: 2, name: "Priya", salary: 50000 },
    { id: 3, name: "Amit", salary: 25000 }
];


Using map() – Display employee names
const names = employees.map((employee) => employee.name);

console.log(names);


Output:
["Rahul", "Priya", "Amit"]


Using filter() – Find employees earning more than ₹30,000
const highSalary = employees.filter((employee) => {
    return employee.salary > 30000;
});

console.log(highSalary);


Output:
[
    { id: 2, name: "Priya", salary: 50000 }
]


5. Can we combine map() and filter()?
Yes! This is very common in React projects.
const employees = [
    { id: 1, name: "Rahul", salary: 30000 },
    { id: 2, name: "Priya", salary: 50000 },
    { id: 3, name: "Amit", salary: 25000 }
];

const result = employees
    .filter((employee) => employee.salary > 30000)
    .map((employee) => employee.name);

console.log(result);


Output:
["Priya"]


Here:
1. filter() selects employees earning more than ₹30,000.
2. map() extracts their names.
6. Interview questions
Q1. Does map() modify the original array?

No. It returns a new array.

Q2. Does filter() modify the original array?

No. It returns a new array containing selected elements.

Q3. What happens if map() doesn't have a return statement when using curly braces?

It returns undefined for each element.

Q4. Can filter() return an empty array?

Yes, when no elements satisfy the condition.

7. Practice test
Test your understanding
5 questions

1. You want to double every number. Which method?

map()

filter()



2. You want only numbers greater than 10. Which method?

map()

filter()



3. Which method maintains the original array length?

map()

filter()



4. You want to extract employee names from employee objects. Which method?

map()

filter()



5. You want employees whose salary is above ₹40,000. Which method?

map()

filter()



Submit answers
Final interview memory trick:
- map() = Change every element.
- filter() = Keep selected elements.
For React, remember: filter() is often used to decide which items to display, and map() is used to decide how to display them.









