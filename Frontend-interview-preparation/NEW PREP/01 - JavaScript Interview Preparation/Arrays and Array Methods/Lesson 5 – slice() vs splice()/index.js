//slice() - get a portion of an array into a new array

let fruits = ["Apple", "Banana", "Mango", "Orange"];

let result = fruits.slice(1, 3)

console.log(result)//[ 'Banana', 'Mango' ]//new array
console.log(fruits)//[ 'Apple', 'Banana', 'Mango', 'Orange' ]

// 1 = Starting index (included).
// 3 = Ending index (excluded).

//splice() - Add, remove, or replace elements in an array

//Remove eleements

let fruits2 = ["Apple", "Banana", "Mango", "Orange", "kiwi"];
let result2 = fruits2.splice(1, 2)

console.log(result2)//[ 'Banana', 'Mango' ]
console.log(fruits2)//[ 'Apple', 'Orange', 'kiwi' ]//original arr modified

// 1 = Starting index.
// 2 = Number of elements to remove.

// Important: splice() returns the removed elements as an array.

// Add Element

let fruits3 = ["Apple", "Mango"];

fruits3.splice(1, 0, "Banana")
console.log(fruits3)//[ 'Apple', 'Banana', 'Mango' ]

// 1 = Starting index.
// 0 = Remove zero elements.
// "Banana" = Element to add.

fruits3.splice(0, "Kiwi")
//we have to give remove index as well to get the correct output
console.log(fruits3)//[ 'Apple', 'Banana', 'Mango' ] 

fruits3.splice(0, 0, "Kiwi")
console.log(fruits3)//[ 'Kiwi', 'Apple', 'Banana', 'Mango' ]

fruits3.splice(1, "Gwava")
console.log(fruits3)//[ 'Kiwi', 'Apple', 'Banana', 'Mango' ]

fruits3.splice(1, 1, "Gwava")
console.log(fruits3)//[ 'Kiwi', 'Gwava', 'Banana', 'Mango' ]

//Replace elements

let fruits4 = ["Apple", "Banana", "Mango"];
fruits4.splice(1, 1, "Orange")

console.log(fruits4)//[ 'Apple', 'Orange', 'Mango' ]
// Here we removed "Banana" and inserted "Orange" at the same position.

// 4. Real-world example
// Imagine an e-commerce application.
// Using slice(): Show only the first three products on a page.

let products = ["Laptop", "Mobile", "Watch", "Tablet"];

let productdisplay = products.slice(0, 3)

console.log(productdisplay)//[ 'Laptop', 'Mobile', 'Watch' ] new arr
console.log(products)//[ 'Laptop', 'Mobile', 'Watch', 'Tablet' ] org arr remain same


//using splice()

let products2 = ["Laptop", "Mobile", "Watch"];

products2.splice(1, 1)

console.log(products2)//[ 'Laptop', 'Watch' ]













