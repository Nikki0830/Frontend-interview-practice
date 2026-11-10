//map()

// Example 1 – Multiply numbers by 2//

let numbers = [1, 2, 3, 4];

let result = numbers.map((num) => num * 2)

console.log(result)//[ 2, 4, 6, 8 ] new arr
console.log(numbers)//[ 1, 2, 3, 4 ] org arr

// JavaScript takes one number at a time, multiplies it by 2 and stores the result in a new array.

let result2 = numbers.map((num) => {
    // return num  + 5//[ 6, 7, 8, 9 ]In JavaScript, a return statement returns only one value
    // return (
    //     num * 5, num * 5//[ 5, 10, 15, 20 ] give priority to second value
    //     //When you use commas, JavaScript's comma operator evaluates each expression and returns only the last one.
    // )

    // If you want to return both values
    return [
        num * 2,
        num * 3
        //[ [ 2, 3 ], [ 4, 6 ], [ 6, 9 ], [ 8, 12 ] 
    ]
})

console.log(result2)

//Interview note: The comma operator evaluates multiple expressions from 
// left to right and returns the value of the last expression.

// 3. Curly braces {} – Return an object

function calculate(num) {
    return {
        double: num * 2,
        triple: num * 3
    }
}


console.log(calculate(5))//{ double: 10, triple: 15 }2. Square brackets [] – Return an array

// 2. Square brackets [] – Return an array

function calculate2(num) {
    return [
        num * 2,
        num * 3
    ];
}

console.log(calculate2(5)); // [10, 15]

let result4 = calculate2(3);

console.log(result4[0])//6
console.log(result4[1])//9

// My recommendation: Remember these three rules:
// - () → Group expressions.
// - [ ] → Return a collection of values (array).
// - {} → Return structured key-value data (object).

// 3. Convert names into uppercase

let names = ["nikita", "rahul", "priya"];

let result5 = names.map((name) => name.toUpperCase())
console.log(result5)//[ 'NIKITA', 'RAHUL', 'PRIYA' ]


// 4. map() with objects
// This is especially useful in frontend development.

// Imagine you receive employee data from an API.

let employees = [//array of object
    { id: 1, name: "Rahul", salary: 30000 },
    { id: 2, name: "Priya", salary: 40000 },
    { id: 3, name: "Amit", salary: 35000 }
];

let employeeNames = employees.map((employee) => employee.name)

console.log(employeeNames)//[ 'Rahul', 'Priya', 'Amit' ]//array of emp names.

// We transformed an array of employee objects into an array of employee names.

// 5. map() in React
// This is one of the most common uses of map().

// Imagine you want to display a list of employees on a webpage.

// function employeeList() {
//     const employees2 = ["Nikita", "Rahul", "Priya"];

//     return (
//         <div>
//             {/* {employees2.map((employee, index) => (

//                 <p key={index}>{employee}</p>
//             ))} */}


//             {/* {employees2.map((employee, index) => {
//                 console.log(employee, index);//Nikita 0, Rahul 1, Priya 2
//                 return(
//                     <p key = {index}>{employee}</p>
//                 )
//             })} */}
//         </div>
//     )
// }
// employeeList()

// 4. Can we use something other than index as a key?
// Yes! A unique ID is usually better.

// function EmployeeList() {
//     const employees = [
//         { id: 101, name: "Rahul" },
//         { id: 102, name: "Priya" },
//         { id: 103, name: "Amit" }
//     ];

//     return (
//         <div>
//             {employees.map((employee, index) => (
//                 <p key={employee.id}>
//                     {employee.name}
//                 </p>
//             ))}
//         </div>
//     );
// }

// Interview tip: Avoid using array indexes as keys when 
// list items can be reordered, 
// inserted, or deleted. Prefer stable, unique IDs.

// Syntax	Purpose
// => (...)	Implicitly returns one expression
// => { ... }	Function body; use return explicitly

// Interview tip: When you need multiple statements inside .map(), 
// use curly braces {} and explicitly write return.

// 1. What is index?
// index is the position number of an element in an array.
// JavaScript array indexes start from 0, not 1

// 2. What is key in React?
// key is a special React prop used to uniquely identify elements in a rendered list.
{/* <p key={index}>{employee}</p>


Here:
- key = React's special prop.
- index = the value assigned to that key. */}


// One important point: if you don't return anything from the callback, 
// the resulting array will contain undefined for those elements.

let numbers5 = [1, 2, 3];

// let result6 = numbers5.map((num) => num * 2)//[ 2, 4, 6 ]
let result6 = numbers5.map((num) => { num * 2 })//[ undefined, undefined, undefined ]

console.log(result6)

// "map() is an array method that executes a function for every element
// and returns a new array with the results.
// It is commonly used to transform data and display lists in React."