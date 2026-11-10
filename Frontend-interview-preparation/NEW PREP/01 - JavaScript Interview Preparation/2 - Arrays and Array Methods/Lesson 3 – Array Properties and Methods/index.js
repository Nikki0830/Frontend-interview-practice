//Array properties

//length
let fruits = ["apple", "mango", "banana"]
console.log(fruits.length)//3

//construcor
//It tells us which constructor created the array.
console.log(fruits.constructor)//[Function: Array]
console.log(fruits.constructor === Array)//true

// 3. prototype
// Array.prototype contains methods shared by arrays, 
// such as map(), filter(), push() and pop().

console.log(Array.prototype)//Object(0) []
//It is not a normal instance property like length.


// Important interview point
// JavaScript arrays are special objects. 
// They inherit many methods from Array.prototype, 
// and they also have the length property.

// Remember: For everyday frontend development, 
// focus mainly on length, array indexes and array methods. 
// You don't need to memorise every inherited object property.

//practice
let numbers = [10, 20, 30, 40]

console.log(numbers.constructor === Array)//true
// console.log(numbers.constructor === array)//
// ReferenceError: array is not defined

//map()//It does not modify the original array."

let numbers2 = [1, 2, 3, 4, 5]

let result = numbers2.map((num) => {
    return num * 2
})
console.log(numbers2)//[ 1, 2, 3, 4, 5 ]
console.log(result)//[ 2, 4, 6, 8, 10 ]

//convert name to uppercase

let names = ["nikita", "rahul", "priya"];

let result2 = names.map((name) => {
    return (
        name.toUpperCase()
    )
})

console.log(result2)//[ 'NIKITA', 'RAHUL', 'PRIYA' ]


//convert name to uppercase in one line

let result3 = names.map((name) => name.toLocaleLowerCase())

console.log(result3)//[ 'nikita', 'rahul', 'priya' ]

// Example 3: Real-world React example
// Imagine you have a list of product

let products = [
    {name:"Laptop", price:50000},
    {name:"Mobile", price:20000}
]

// let productNames = products.map((product) => product.name, product.price)//ReferenceError: product is not defined

let productNames = products.map((product) => `${product.name} ${product.price}`)//[ 'Laptop 50000', 'Mobile 20000' ]
console.log(productNames)//[ 'Laptop', 'Mobile' ]

//We transformed an array of product objects into an array of product names.

let numbers4 = [2, 4, 6];

let result4 = numbers4.map((num) => num + 10);

console.log(result4);//[ 12, 14, 16 ]