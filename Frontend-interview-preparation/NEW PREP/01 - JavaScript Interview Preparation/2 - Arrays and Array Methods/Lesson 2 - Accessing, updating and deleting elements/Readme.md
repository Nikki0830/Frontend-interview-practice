1. Accessing array elements
We use the index number to access an element.

Remember: Array indexing starts from 0.
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Mango
console.log(fruits[3]); // Orange


Access the last element:
console.log(fruits[fruits.length - 1]);
// Orange


What if the index doesn't exist?
console.log(fruits[10]); // undefined


Because there is no element at index 10.
2. Updating array elements
We can update an element by accessing its index and assigning a new value.
let fruits = ["Apple", "Banana", "Mango"];

fruits[1] = "Orange";

console.log(fruits);


Output:
["Apple", "Orange", "Mango"]


Here, we replaced Banana with Orange.

Important: Arrays created with const can still have their elements updated.
const fruits = ["Apple", "Banana"];

fruits[0] = "Mango";

console.log(fruits); // ["Mango", "Banana"]


But you cannot reassign the entire array to a new array using const.
3. Deleting array elements
There are different ways to delete elements.

Method A: Using delete
let fruits = ["Apple", "Banana", "Mango"];

delete fruits[1];

console.log(fruits);
console.log(fruits.length);


Output:
["Apple", empty, "Mango"]
3


Notice something important: delete removes the value but does not reduce the array length. It leaves an empty slot.

Method B: Using splice()
let fruits = ["Apple", "Banana", "Mango"];

fruits.splice(1, 1);

console.log(fruits);


Output:
["Apple", "Mango"]


Here:
- 1 = index where deletion starts.
- 1 = number of elements to delete.
Unlike delete, splice() removes the element and shifts the remaining elements.

Interview tip: Prefer splice() when you want to remove an element by index and keep the array compact.
4. Quick comparison
Operation	Code	Result
Access	arr[0]	Gets first element
Update	arr[0] = "New"	Replaces first element
Delete	delete arr[0]	Leaves an empty slot
Remove	arr.splice(0, 1)	Removes first element

5. Real-world example
Imagine an employee management application:
let employees = ["Rahul", "Priya", "Amit"];

// Access employee
console.log(employees[0]);

// Update employee name
employees[1] = "Nikita";

// Remove employee at index 2
employees.splice(2, 1);

console.log(employees);


Output:
["Rahul", "Nikita"]



Practice time – 5 questions
Try to predict the outputs.
Array practice
5/5 answered

1. What is the output?
let arr = ["A", "B", "C"];
console.log(arr[1]);


A

B

C

Correct!Index 1 contains B.


2. What is the output?
let arr = [10, 20, 30];
arr[0] = 100;
console.log(arr);


[10, 20, 30]

[100, 20, 30]

[100, 20]

Correct!Index 0 is updated to 100.


3. What is the output?
let arr = [10, 20, 30];
delete arr[1];
console.log(arr.length);


2

3

1

Correct!delete leaves an empty slot and does not change length.


4. What is the output?
let arr = [10, 20, 30];
arr.splice(1, 1);
console.log(arr);


[10, 20, 30]

[10, 30]

[20, 30]

Correct!splice removes one element starting at index 1.


5. What is the output?
let arr = ["Apple", "Mango"];
console.log(arr[10]);


null

0

undefined

Correct!An array index that does not exist returns undefined.

Check answersYour score: 5/5

Next lesson: Array methods – push(), pop(), shift() and unshift(). These are very important for practical JavaScript and interviews.