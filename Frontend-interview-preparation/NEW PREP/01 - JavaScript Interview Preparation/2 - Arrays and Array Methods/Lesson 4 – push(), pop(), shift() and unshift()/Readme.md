Lesson 4 – push(), pop(), shift() and unshift()
First, remember this simple rule:
Array elements
Apple
Index 0

Banana
Index 1

Mango
Index 2

Orange
Index 3


Beginning
Index 0

End
Last index



1. push() – Add at the end
push() adds one or more elements to the end of an array.
let fruits = ["Apple", "Banana"];

fruits.push("Mango");

console.log(fruits);


Output:
["Apple", "Banana", "Mango"]


You can add multiple elements too:
fruits.push("Orange", "Grapes");


Remember: push() changes the original array and returns the new array length.
2. pop() – Remove from the end
pop() removes the last element from an array.
let fruits = ["Apple", "Banana", "Mango"];

fruits.pop();

console.log(fruits);


Output:
["Apple", "Banana"]


Remember: pop() changes the original array and returns the removed element.
3. unshift() – Add at the beginning
unshift() adds one or more elements at the beginning of an array.
let fruits = ["Apple", "Banana"];

fruits.unshift("Mango");

console.log(fruits);


Output:
["Mango", "Apple", "Banana"]


Remember: unshift() changes the original array and returns the new array length.
4. shift() – Remove from the beginning
shift() removes the first element from an array.
let fruits = ["Apple", "Banana", "Mango"];

fruits.shift();

console.log(fruits);


Output:
["Banana", "Mango"]


Remember: shift() changes the original array and returns the removed element.
5. Important interview comparison
Method	Operation	Returns
push()	Add at end	New length
pop()	Remove from end	Removed element
unshift()	Add at beginning	New length
shift()	Remove from beginning	Removed element

All four methods modify the original array.
6. Real-world example
Imagine an application where users join and leave a waiting list.
let waitingList = ["Rahul", "Priya"];

// New person joins at the end
waitingList.push("Amit");

// First person gets served
let served = waitingList.shift();

console.log(served);      // Rahul
console.log(waitingList); // ["Priya", "Amit"]


This is a simple example of how arrays can manage a queue.

7. Try this interactive example
You can click the buttons and see how the four methods work.
Try array operations
Current array
Length: 3

Apple
Index 0
Banana
Index 1
Mango
Index 2

push("Orange")
pop()
unshift("Grapes")
shift()

No operation yet
Reset array

8. Interview practice – 5 questions
Try predicting the outputs without running the code.
Array methods quiz
5/5 answered

1. What is the output?
let arr = [10, 20];
arr.push(30);
console.log(arr);


[10, 20]

[10, 20, 30]

[30, 10, 20]

Correct!push() adds 30 at the end.


2. What does pop() return?
let arr = [10, 20, 30];
let result = arr.pop();
console.log(result);


10

20

30

Correct!pop() removes and returns the last element.


3. What is the output?
let arr = [10, 20];
arr.unshift(5);
console.log(arr);


[10, 20, 5]

[5, 10, 20]

[10, 5, 20]

Correct!unshift() adds at the beginning.


4. What is the output?
let arr = [10, 20, 30];
let result = arr.shift();
console.log(result);


10

20

30

Correct!shift() removes and returns the first element.


5. What does push() return?
let arr = [10, 20];
let result = arr.push(30);
console.log(result);


30

2

3

Correct!push() returns the new array length, which is 3.

Check my answersScore: 5/5

Next lesson: slice() vs splice() — a very important interview comparison.











Convert to PDF






Remember: pop() changes the original array and returns the removed element.   return not removed element right















Yes, exactly! 😊 pop() returns the removed element, not the updated array.

Let's understand with an example:
let fruits = ["Apple", "Banana", "Mango"];

let result = fruits.pop();

console.log(result); // Mango
console.log(fruits); // ["Apple", "Banana"]


There are two things happening:
1. pop() removes "Mango" from the original array.
2. It returns the removed value "Mango" and stores it in result.
Remember these four methods:
Method	What it returns
push()	New array length
pop()	Removed element
unshift()	New array length
shift()	Removed element

Interview answer: "pop() removes the last element from the original array and returns the element that was removed."

So yes, your understanding is correct!