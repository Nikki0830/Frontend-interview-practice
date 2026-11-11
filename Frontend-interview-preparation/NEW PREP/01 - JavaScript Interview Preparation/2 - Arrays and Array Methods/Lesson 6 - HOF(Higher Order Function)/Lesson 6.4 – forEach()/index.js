// 1. What is forEach()?
// forEach() is used to go through an array and perform an action for each item.

// In simple words: It visits every item in an array, one by one.

// 2. Simple example

let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit) => {
    console.log(fruit)
    // Apple
    // Banana
    // Mango
})

// forEach() takes each fruit and runs the code inside the callback.

// 3. Another example

let numbers = [10, 20, 30];

numbers.forEach((num) => {
    console.log(num * 2)
    // 20
    // 40
    // 60
})

// Map() vs forEach()

let numbers2 = [1, 2, 3];

let result1 = numbers2.forEach(num => num * 2)//undefined
let result2 = numbers2.forEach((num) => num * 2)//undefined

let result3 = numbers2.map(num => num * 2)//[ 2, 4, 6 ]
let result4 = numbers2.map((num) => num * 2)//[ 2, 4, 6 ]

console.log(result1)
console.log(result2)

console.log(result3)
console.log(result4)

// Remember: forEach() does not return a new array.
// Even if you write return inside its callback,
// forEach() itself still returns undefined.