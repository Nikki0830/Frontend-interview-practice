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


//A. Primitive values – copied by value

// let a = 10;
// b = a;

// b = 20;
// console.log(a)//10
// console.log(b)//20

// B. Reference values – copying the reference

const user1 = {
    name: "Nikita",
    age: 28
}

const user2 = user1;
user2.name = "Reema"

console.log(user1.name)//Reema
console.log(user2.name)//Reema

// 2. Arrays behave the same way

const arr1 = [10, 20, 30]

const arr2 = arr1;

arr2.push(40)


console.log(arr1)//[ 10, 20, 30, 40 ]
console.log(arr2)//[ 10, 20, 30, 40 ]

// 3. Mutation vs reassignment
// Mutation: Changing the contents of an existing object or array.

const user = {
    name: "Nikita"
}

user.name = "Reema"//Mutation

// Reassignment: Making a variable refer to a different value.

// let user = {
//     name:"Nikita"
// }

// user = {
//     name:"Reema"
// }// Reassignment

//Important: const prevents reassignment of the 
// variable binding, but it does not prevent object mutation.

const user3 = { name: "Nikita" };
user3.name = "Reema"//allowed
//user = {} //Typeerror

// 4. Shallow copy
// A shallow copy creates a new outer object, but nested objects are still shared.

const original = {
    name: "Nikita",
    address: {
        city: "Bangalore"
    }
};

const copied = { ...original }

// console.log(copied)

copied.name = "Reema"
copied.address.city = "Pune"

console.log(original.name);//Nikita
console.log(original.address.city)//Pune

// 5. Deep copy
// A deep copy creates an independent copy of nested data too.
//For supported data types, we can use structuredClone().

const original2 = {
    name: "Nikita",
    address: {
        city: "Bangalore"
    }
};

const copied2 = structuredClone(original2)

copied2.address.city = "Pune"

console.log(original2.address.city)//Bangalore
console.log(copied2.address.city)//Pune


// 7. Practical coding exercise

// Task 1 – Primitive copying => Copies the value

let x = 100;
let y = x;

y = 200
console.log(`${x} ${y}`)

// Task 2 – Object reference => Copies the reference

const employee1 = {
    name: "Nikki",
    role: "Frontend developer"
}

const employee2 = employee1;

employee2.name = "Nikita"

console.log(employee1.name);//Nikita
console.log(employee2.name);//Nikita


// Mutation	Changes existing data
// Reassignment	Assigns a different value/reference
// Shallow copy	New outer object, nested references shared
// Deep copy	Independent nested data too

// Task 3 – Shallow copy

const product1 = {
    name: "laptop",
    details: {
        brand: "Dell"
    }
}


const product2 = { ...product1 }
product2.name = "Phone"
product2.details.brand = "HP"

console.log(product1);//{ name: 'laptop', details: { brand: 'HP' } }
console.log(product2);//{ name: 'Phone', details: { brand: 'HP' } }

// Task 4 – Deep copy

const product3 = {
    name: "laptop",
    details: {
        brand: "Dell"
    }
}

const product4 = structuredClone(product1)
product4.name = "Phone"
product4.details.brand = "HP"

console.log(product3);
console.log(product4);


const a1 = { city: "Bangalore" };
const b = a1;

b.city = "Delhi";

console.log(a1.city);


// const a3 = 30;
// const b1 = a3;

// b1 = 40;

// console.log(a1);//TypeError: Assignment to constant variable.

let a3 = 30;
let b1 = a3;

b1 = 40;

console.log(a3);//TypeError: Assignment to constant variable.

// 1. What is type conversion?
//Type conversion means changing a value from one data type to another.

let num = 100;

let str = String(num)

console.log(str)//100
console.log(typeof str)//string

let str2 = "10000000000000000000";

let num3 = Number(str2)
console.log(num3)//10000000000000000000
console.log(typeof num3)//number

// There are two types of conversion:
// Type conversion

// 1. Explicit conversion
// Developer manually converts the data type.
// Example: Number("100")

// 2. Implicit conversion (coercion)
// JavaScript automatically converts the data type.
// Example: "5" + 2 produces "52".

// 2. Explicit Type Conversion
// Explicit means we intentionally convert a value using JavaScript functions.

// A. String()
// Converts a value into a string.

console.log(String(100))//100->string
console.log(String(true))//true->string
console.log(String(null))//null->string
console.log(String(undefined))//undefined->string

//B. Number()
// Converts a value into a number where possible.

console.log(Number("100"))//100-> number
console.log(Number("10.5"))//10.5 => number
console.log(Number(true))//1
console.log(Number(false))//0
console.log(Number(null))//0
console.log(Number("hello"))//NaN

//imp
console.log(Number(""))//0
console.log(Number(" "))//0
console.log(Number("123"))//123

// C. Boolean()

console.log(Boolean(1))//true
console.log(Boolean(false))//false
console.log(Boolean("hello"))//true
console.log(Boolean(""))//false
console.log(Boolean(" "))//true
console.log(Boolean(null))//false
console.log(Boolean([]))//true
// console.log(Boolean{})//SyntaxError: missing ) after argument list
console.log(Boolean({}))//true

// Remember the seven falsy values:
// - false
// - 0
// - -0
// - 0n
// - ""
// - null
// - undefined
// - NaN
// There are actually seven falsy values when 0 and -0 are 
// counted together and 0n is included.

// 3. Implicit Type Conversion (Coercion)
//JavaScript automatically converts values during certain operations.

// Example 1:

console.log("5" + 2) //52 -> string

// Why?
// The + operator performs string concatenation when one operand is a string, 
// so 2 is converted into "2".

// Example 2:
console.log(typeof "5" - 2)//NaN
console.log("5" - 2)//3Yes! The output 3 is a number (Number data type), not a string.
// The - operator requires numeric operands, so "5" is converted into 5.

// Example 3:
console.log("10" * 2)//20
console.log("10" / 2)//5

console.log(5 + true)//6
console.log(5 + false)//5

// Expression	Output	Reason
// "5" + 2	"52"	String concatenation
// "5" - 2	3	Numeric conversion
// "5" * 2	10	Numeric conversion
// "5" / 2	2.5	Numeric conversion
// 5 + true	6	true becomes 1
// 5 + false	5	false becomes 0

// 4. parseInt() and parseFloat()
// These functions extract numbers from the beginning of a string

// parseInt(): Parses an integer.

console.log(parseInt("100px"))//100
console.log(parseInt("25.89"))//25

// parseFloat(): Parses a floating-point number.

console.log(parseFloat("25.89px"))//25.89
console.log(parseFloat("10.5"))//10.5

// Difference between Number() and parseInt()
console.log(Number("100px"))//NaN
console.log(parseInt("100px"))//100

// Number() tries to convert the entire string into a number. 
// parseInt() reads an integer from the beginning and stops when it 
// encounters an invalid character.

// 5. NaN and Number.isNaN()

// NaN means Not-a-Number.
// It represents an invalid numeric result.

console.log(Number("hello"))//NaN
console.log(10 / "hello")//NaN

// To check whether a value is actually NaN:
console.log(Number.isNaN("Hello"))//false
console.log(Number.isNaN(NaN))//true
console.log(Number.isNaN(100))//false

// Important difference:

console.log(typeof NaN)//number

// NaN is technically a special numeric value in JavaScript.

console.log(Number(""))//0
console.log(Number(" "))//0

// They are two different things:
// console.log(Number(""));   // 0
// console.log(Number(" "));  // 0


// 1. "" — Empty string: Contains no characters.
// 2. " " — Whitespace string: Contains one space character.
// Why do both return 0?

// When Number() converts a string, it ignores leading and trailing whitespace. If nothing remains after trimming, it converts the result to 0.

// More examples:
// Number("")       // 0
// Number(" ")      // 0
// Number("   ")    // 0
// Number("  25  ") // 25
// Number("hello")  // NaN


// Interview note: An empty string has zero characters, whereas a whitespace string contains space characters. Both convert to 0 using Number().
console.log(Boolean("false"))//true
// A non-empty string is truthy, even when its text says false.
console.log(parseInt("12.9px"))//12 parseInt reads the integer at the beginning and stops at the decimal point.

// 7. Practical coding exercise

//Convert "250" into a number and add 50.
console.log(Number("250") + 50)//300

// Convert true into a number.
console.log(Number(true))//1

//Convert 0 into a Boolean.
console.log(Boolean(0))//false

// Extract 45 from "45.89px" using parseInt().
console.log(parseInt("45.89px"))//45

// Check whether Number("hello") is NaN.
console.log(Number.isNaN("Hello"))//false
console.log(isNaN("Hello"))//true 