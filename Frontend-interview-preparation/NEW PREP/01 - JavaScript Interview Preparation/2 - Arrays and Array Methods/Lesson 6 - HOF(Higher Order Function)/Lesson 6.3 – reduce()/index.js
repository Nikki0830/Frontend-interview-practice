// 1. What is reduce()?
// reduce() is used to combine all array elements 
// into one single value.

// In simple words: It takes array elements one by one, 
// performs an operation and gives us one final result.

// Example 1 – Calculate the sum of numbers

let numbers = [10, 20, 30, 40];

let total = numbers.reduce((sum, num) => {
    return sum + num
}, 0)//with initial value - 100

let total2 = numbers.reduce((sum, num) => {
    return sum + num
})
//without initial value - 100 => will take array first element as initial value

console.log(total)//100
console.log(total2)//100

// sum = accumulator
// num = current number
// 0 = initial value

// 2. Understand the syntax

// Array.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// }, initialValue);

// There are three important things:
// Term	Meaning
// accumulator	       Stores the previous result
// currentValue	       Current element being processed
// initialValue	       Starting value of the accumulator

// 3. Example – Find the product of numbers

let numbers2 = [2, 3, 4];

let result = numbers2.reduce((total, num) => {
    return total * num
}, 1);

console.log(result)//24

// Calculation:
// - Start with 1.
// - 1 × 2 = 2.
// - 2 × 3 = 6.
// - 6 × 4 = 24.

// We use 1 as the initial value because 
// multiplying by 1 doesn't change the number.

// 4. Example – Calculate total product price
//This is a real-world frontend example.

const cart = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];

const totalprice = cart.reduce((total, product) => total + product.price, 0)

console.log(totalprice)//53000

// 5. Example – Count occurrences

let fruits = ["Apple", "Banana", "Apple", "Mango", "Banana"];

let fruitResult = fruits.reduce((count, fruit) => {
    // count[fruit] = (count[fruit] || 0) + 1;
    // return count//{ Apple: 2, Banana: 2, Mango: 1 }

    // Check whether this fruit already exists in the count object.
    // If it exists, take its current count.
    // If it doesn't exist, start from 0.
    // Add 1 to the count.

    if (count[fruit]) {
        count[fruit] = count[fruit] + 1
    } else {
        count[fruit] = 1
    }
    return count//{ Apple: 2, Banana: 2, Mango: 1 }
}, {})

console.log(fruitResult)


