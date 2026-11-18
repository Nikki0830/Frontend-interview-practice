//Difference

// var city = "Bangalore";
// city = "pune"
// console.log(city)//pune Reassignment possible

// let city2 = "Bangalore";
// city2 = "pune"
// console.log(city2)//pune reassignment is possible

// const city3 = "Bangalore"
// city3 = "pune"
// console.log(city3)//TypeError: Assignment to constant variable. 

//-------------------------------------------------------------

//Block scope

// if (true) {
//     var a = 10;
//     let b = 20;
//     const c = 30
// }

// console.log(a)//10
// console.log(b)//ReferenceError: b is not defined
// console.log(c)//ReferenceError: c is not defined

//-------------------------------------------------------

//imp const with array and object

// const fruits = ["apple", "banana"]

// fruits.push("Mango")

// console.log(fruits)//[ 'apple', 'banana', 'Mango' ]

//however

// const fruits2 = ["apple", "mango"]

// fruits2 = ["orange"]

// console.log(fruits2)//TypeError: Assignment to constant variable.

//coading excercise
//1
// const name = "Nikita";
// let age = 28;
// var city = "Bangalore"
// console.log(`${name} ${age} ${city}`)//Nikita 28 Bangalore

//2
// let name2 = "Niki"
// name2 = "Nikki"
// name2 = "Nikki Nikki"
// console.log(name2)//Nikki Nikki

//3
// let name3 = "Nikita";
// let name3 = "Nikki nikki nikki"
// console.log(name3)//SyntaxError: Identifier 'name3' has already been declared

//4
// const student = {
//     name:"Nikita Patel",
//     course:"Full stack"
// }

// student.course = "Full stack developer"
// console.log(student)//{ name: 'Nikita Patel', course: 'Full stack developer' }

// // student = "how can i reassign a object"//TypeError: Assignment to constant variable.
// // student = {
// //     name:"Nikki"
// // }//TypeError: Assignment to constant variable.


//BUT with let
// let student = {
//     name:"Nikita Patel",
//     course:"Full stack"
// }

// // student.name = "Niki"
// // console.log(student)//{ name: 'Niki', course: 'Full stack'}

// student = {
//     course:"Full stack developer"
// } 
// console.log(student)//{ course: 'Full stack developer' }


// var student = {
//     name: "Nikita Patel",
//     course: "Full stack"
// }

// student.name = "Niki"
// console.log(student)//{ name: 'Niki', course: 'Full stack' }

// student = {
//     course:"Full stack developer"
// }
// console.log(student)//{ course: 'Full stack developer' }

