// const button = document.getElementById("addToCart")
// const btn = document.getElementById("btn")
// const msg = document.getElementById("msg")
// const sda = document.getElementById("sda")
// const sdabtn = document.getElementById("sdabtn")

// const name = "Nikita"
// console.log(`Hello ${name}`)

// button.addEventListener("click", function () {
//     document.getElementById("message").textContent = "Product added successfully"
// })

// btn.addEventListener("click", function () {
//     msg.textContent = "Welcome!"
// })

// sdabtn.addEventListener("click", function () {
//     sda.textContent = "Script, Defer, Async"
// })

// let age = 25
// var age = 23

// const age = 23
//TypeError: Assignment to constant variable.

// age = 26
// console.log(age)

// const user = { name: "Nikita" }
// user.name = "Rahul"

// console.log(user)

//Hoisting

// console.log(a);
// var a = 10;
//undefined

// let a = 10
//ReferenceError: Cannot access 'a' before initialization

// const a = 10;
//ReferenceError: Cannot access 'a' before initialization


//interview practice
// var x = 5;

// function test() {
//     console.log(x)
//     var x = 10;
// }

// test()
//undefined
//The var x inside test() creates a local variable for that function. It is initialized to undefined before the function's statements execute, so console.log(x) reads the local variable rather than the global x.

//TDZ(Tempral Dead zone)

// console.log(age)//ReferenceError
// let age = 25
// console.log(age)//25


// console.log(name)//undefined
// var name = "Nikita";

// let price = 100;
// let quantity = 2;

// console.log(price * quantity)//200

//Modern javascript vs Traditional javbascript

// var name = "Nikita"
// console.log("hello" + " " + name)Hello Nikita
//console.log(`Hello ${name}`)Hello Nikita

// const employee = {
//     name: "Nikita",
//     role: "Ftrontend Developer",
//     skills: ["HTML", "CSS", "JS", "Reactjs", "Figma"]
// }

// const { name, role, skills } = employee;

// console.log(`${name} is a ${role}`)

// const updatedskills = [...skills, "Nextjs", "Typescript"]

// console.log(updatedskills)
// //Nikita is a Ftrontend Developer
// [ 'HTML', 'CSS', 'JS', 'Reactjs', 'Figma', 'Nextjs', 'Typescript' ]

//Here, we're using three modern JavaScript concepts:
// - Destructuring to extract properties.
// - Template literals to create a string.
// - Spread syntax to create a new array without modifying the original.


// const employee = {
//     name: "Nikita",
//     Age: 28,
//     company: "Google",
//     salary: 300000,
//     CurrentEmployee: "Yes"
// }

// console.log(employee.name, employee.Age, employee.salary + 100000)//Nikita 28 400000

// var x = 10;
// var x = 20;//redeclarion and reassign,ent both are possible with var
// console.log(x)//20

// let a = 10;
// a = 30;//re declaration is not possible with let and const with let obly8 re assign,ent is possible
// console.log(a)//30

// const user = {
//     name: "Rahul"
// };

// user.name = "Amit"
// console.log(user.name)//Amit

// console.log(a)
// var a = 20;//undefined

// console.log(a)
// let a = 10;//ReferenceError: Cannot access 'a' before initialization

//DATA TYPES

let name = "Nikita"
console.log(typeof name)

let age = 28;
console.log(typeof 28)

let isLearning = true
console.log(typeof true)

console.log(Array.isArray([]));
console.log(typeof undefined);






