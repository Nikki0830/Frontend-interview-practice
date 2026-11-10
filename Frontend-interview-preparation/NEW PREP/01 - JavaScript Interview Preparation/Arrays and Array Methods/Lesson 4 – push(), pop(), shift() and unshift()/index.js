//push()– Add at the end
//push() adds one or more elements to the end of an array.

let fruits = ["apple", "banana"]

fruits.push("mango")

console.log(fruits)//[ 'apple', 'banana', 'mango' ]
//we can use multiple values

fruits.push("Kiwi", "strawberry")

console.log(fruits)//[ 'apple', 'banana', 'mango', 'Kiwi', 'strawberry' ]

// Remember: push() changes the original array and returns the new array length.

//pop()– Remove from the end

fruits.pop()
console.log(fruits)//[ 'apple', 'banana', 'mango', 'Kiwi' ]

// Remember: pop() changes the original array and returns the removed element
// There are two things happening:
// 1. pop() removes "strawberry" from the original array.
// 2. It returns the removed value "strawberry" and stores it in fruits

//unshift - Adds at the beginning

fruits.unshift("Gwava")
console.log(fruits)//[ 'Gwava', 'apple', 'banana', 'mango', 'Kiwi' ]

// Remember: unshift() changes the original array and returns the new array length.

// 5. What does push() return?
// let arr = [10, 20];
// let result = arr.push(30);
// console.log(result);


// 30

// 2

// 3

// Correct answer: 3push() returns the new array length, which is 3.

//shift() - Remove from the beginning

// fruits.shift()
// console.log(fruits)//[ 'apple', 'banana', 'mango', 'Kiwi' ]
//here we are printing the new updated array

let fruits2 = fruits.shift()
console.log(fruits2)//Gwava because here return value we are storing in fruits2 variable

// Remember: shift() changes the original array and returns the removed element.

//Real world exmple
//Imagine an application where users join and leave a waiting list.
let waitinglist = ["Rahul", "priya"]

//new person willl join at the ned
waitinglist.push("amit")

//first person gets serverd
let served = waitinglist.shift()

console.log(served)//Rahul
console.log(waitinglist)//[ 'priya', 'amit' ]

// /7. Try this interactive example

const arr = ["Apple", "Banana", "Cherry"]

arr.push("Orange")
console.log(arr)//[ 'Apple', 'Banana', 'Cherry', 'Orange' ]

arr.pop()
console.log(arr)//[ 'Apple', 'Banana', 'Cherry' ]

arr.unshift("Custard Apple")
console.log(arr)//[ 'Custard Apple', 'Apple', 'Banana', 'Cherry' ]

arr.shift()
console.log(arr)//[ 'Apple', 'Banana', 'Cherry' ]
