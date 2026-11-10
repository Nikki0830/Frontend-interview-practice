Lesson 5 – slice() vs splice()
1. slice() – Get a portion of an array
slice() is used to copy a portion of an array into a new array.

It does not change the original array.

Example:
let fruits = ["Apple", "Banana", "Mango", "Orange"];

let result = fruits.slice(1, 3);

console.log(result);
console.log(fruits);


Output:
["Banana", "Mango"]

["Apple", "Banana", "Mango", "Orange"]


Let's understand:
fruits.slice(1, 3);


- 1 = Starting index (included).
- 3 = Ending index (excluded).
So it copies elements at index 1 and 2.
Visual example of slice(1, 3)
Apple

Index 0


Banana

Index 1


Mango

Index 2


Orange

Index 3



Green elements are copied into the new array.
2. splice() – Add, remove or replace elements
splice() is used to add, remove or replace elements in an array.

Unlike slice(), it changes the original array.
A. Remove elements
let fruits = ["Apple", "Banana", "Mango", "Orange"];

let result = fruits.splice(1, 2);

console.log(result);
console.log(fruits);


Output:
["Banana", "Mango"]

["Apple", "Orange"]


Understand the arguments:
fruits.splice(1, 2);


- 1 = Starting index.
- 2 = Number of elements to remove.
Important: splice() returns the removed elements as an array.
B. Add elements
let fruits = ["Apple", "Mango"];

fruits.splice(1, 0, "Banana");

console.log(fruits);


Output:
["Apple", "Banana", "Mango"]


Here:
- 1 = Starting index.
- 0 = Remove zero elements.
- "Banana" = Element to add.
C. Replace elements
let fruits = ["Apple", "Banana", "Mango"];

fruits.splice(1, 1, "Orange");

console.log(fruits);


Output:
["Apple", "Orange", "Mango"]


Here we removed "Banana" and inserted "Orange" at the same position.
3. Main difference between slice() and splice()
Feature	slice()	splice()
Purpose	Copies a portion	Adds, removes or replaces
Changes original array?	No	Yes
Returns	New array containing copied elements	Array of removed elements
End index	Excluded	Uses delete count
Common use	Extracting data	Modifying an array

4. Real-world example
Imagine an e-commerce application.

Using slice(): Show only the first three products on a page.
let products = ["Laptop", "Mobile", "Watch", "Tablet"];

let displayedProducts = products.slice(0, 3);

console.log(displayedProducts);


Output:
["Laptop", "Mobile", "Watch"]


The original products list remains unchanged.

Using splice(): Remove a product from a list.
let products = ["Laptop", "Mobile", "Watch"];

products.splice(1, 1);

console.log(products);


Output:
["Laptop", "Watch"]



5. Interview answer
Interviewer: What is the difference between slice() and splice()?

You can answer:

"slice() is used to get a portion of an array without changing the original array. splice() is used to add, remove or replace elements, and it changes the original array."

That's a good, simple interview answer!

6. Practice – 5 interview questions
Try predicting the outputs. Don't run the code yet.
slice() vs splice() quiz
5/5 answered

1. What is the output?
let arr = [10, 20, 30, 40];
let result = arr.slice(1, 3);
console.log(result);


[10, 20]

[20, 30]

[20, 30, 40]

Correct!slice() includes the start index but excludes the end index.


2. Does slice() change the original array?
let arr = [1, 2, 3];
let result = arr.slice(0, 2);


Yes

No

Correct!slice() returns a new array and leaves the original unchanged.


3. What is the output?
let arr = [10, 20, 30, 40];
let result = arr.splice(1, 2);
console.log(result);


[10, 20]

[20, 30]

[30, 40]

Correct!splice() returns the elements it removed.


4. What is the output?
let arr = [10, 20, 30];
arr.splice(1, 0, 15);
console.log(arr);


[10, 15, 20, 30]

[10, 20, 15, 30]

[10, 30]

Correct!It removes zero elements and inserts 15 at index 1.


5. Which method can add, remove and replace elements?
Choose the correct method.


slice()

splice()

Both

Correct!splice() supports all three operations and modifies the original array.

Check my answersYour score: 5/5

Next lesson: map() – Transforming array elements. We'll learn callback functions inside map(), how it returns a new array, and practical React examples.