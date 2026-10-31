const employeeName = "Nikita"
let salary = 35000;
var employeestatus = "Active";
const INCREMENT_AMOUNT = 5000

// const btn = document.getElementById("updateButton");

// const sal = document.getElementById("salary")
// btn.addEventListener("click", function () {
//     btn.textContent = salary + 5000
// })

// btn.addEventListener("click", function () {
//     salary = salary + INCREMENT_AMOUNT//slary += INCREMENT_AMOUNT
//     sal.textContent = salary
// })

// Select DOM elements (using 'El' or 'Btn' suffix to distinguish DOM nodes from data variables)
const nameEl = document.getElementById("employeeName");
const salaryEl = document.getElementById("salary");
const statusEl = document.getElementById("status");
const upadateBtn = document.getElementById("updateButton");

// Initialize DOM with our JS state
nameEl.textContent = employeeName;
salaryEl.textContent = salary;
statusEl.textContent = status;

// Handle click event
upadateBtn.addEventListener("click", function () {
    salary += INCREMENT_AMOUNT;
    salaryEl.textContent = salary
})




// 1. Why did we use const for employeeName but let for salary?
// Interview answer:

// “We use const for employeeName because we don't need to reassign the variable to a different name. We use let for salary because its value changes when the employee receives a salary increment.”


//2. What happens if we declare salary using const and then try to increase it?
// Interview answer:

// “If I declare salary using const and then try to assign it a new value, JavaScript throws a TypeError because a const variable cannot be reassigned.”
//TypeError: Assignment to constant variable.

//3. What is the difference between var and let?
// Interview answer:

// “The main differences between var and let are their scope, redeclaration rules and initialization behaviour. var is function-scoped and allows redeclaration in the same scope. let is block-scoped and doesn't allow redeclaration in the same scope. Both allow reassignment, but let remains in the Temporal Dead Zone until its declaration executes.”
//What is the difference between var and let?
// Interview answer:

// “var and let are both used to declare variables, and both allow reassignment. The main difference is their scope. var is function-scoped, whereas let is block-scoped. Also, var allows redeclaration within the same scope, but let does not. Both are hoisted, but let cannot be accessed before its declaration because of the Temporal Dead Zone.”