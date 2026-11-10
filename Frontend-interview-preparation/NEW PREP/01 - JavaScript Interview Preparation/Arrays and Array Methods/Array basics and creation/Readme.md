Lesson 1 – What is an Array?
An array is used to store multiple values in a single variable.

For example, imagine you want to store five employee names.

Without an array:
let employee1 = "Rahul";
let employee2 = "Priya";
let employee3 = "Amit";


With an array:
let employees = ["Rahul", "Priya", "Amit"];


Much easier! We can store multiple values together.
1. How to create an array
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);


Output:
["Apple", "Banana", "Mango"]


Arrays can store different data types too:
let data = ["Nikita", 25, true, null];


2. Array indexing
Array indexing starts from 0, not 1.
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Mango


Visualise array indexing
Apple
Index 0


Banana
Index 1


Mango
Index 2




3. Updating an array element
We can change an element using its index.
let fruits = ["Apple", "Banana", "Mango"];

fruits[1] = "Orange";

console.log(fruits);


Output:
["Apple", "Orange", "Mango"]


4. Array length
The length property tells us how many elements are in an array.
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.length); // 3


5. Accessing the last element
We can use length - 1.
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[fruits.length - 1]);


Output: Mango
How to explain in an interview
"An array is a data structure in JavaScript used to store multiple values in a single variable. Each element has an index starting from zero. We can access, update and iterate through array elements using different methods."
Practice – Check your understanding
Try these five questions before we move to array methods.
Array basics quiz
5/5

1. What is the index of the first element?
let colors = ["Red", "Blue", "Green"];


0

1

-1

Correct!JavaScript arrays use zero-based indexing.


2. What is the output?
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[2]);


Apple

Banana

Mango

Correct!Mango is at index 2.


3. What is the output?
let numbers = [10, 20, 30, 40];
console.log(numbers.length);


3

4

5

Correct!There are four elements in the array.


4. What is the output?
let names = ["Rahul", "Priya", "Amit"];
names[0] = "Nikita";
console.log(names[0]);


Rahul

Nikita

Priya

Correct!We updated the element at index 0.


5. How do you access the last element of an array?
let numbers = [10, 20, 30, 40];


numbers[0]

numbers[numbers.length - 1]

numbers.length

Correct!The last index is always length minus one.

Check my answersYour score: 5/5

Next, we'll learn the important array methods: push, pop, shift, and unshift — including the difference between adding and removing elements from the beginning and end of an array.

Small note: We'll also cover callbacks before diving deeply into map, filter and reduce, because those methods use callback functions.


-------------------------------------------------------------
Starting now
1. Array basics and creation
2. Accessing, updating and deleting elements
3. Array properties and methods
4. push(), pop(), shift(), unshift()
5. slice() vs splice()
6. map()
7. filter()
8. reduce()
9. find() and findIndex()
10. some() and every()
11. sort() and reverse()
12. flat() and flatMap()
13. forEach() and other useful methods
14. Practical coding questions and interview mock test