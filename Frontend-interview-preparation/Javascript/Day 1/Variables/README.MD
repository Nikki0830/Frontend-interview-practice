# JavaScript Interview Notes – var, let and const

## 1. What are var, let and const?

`var`, `let` and `const` are used to declare variables in JavaScript. A variable stores data that we can use throughout our program.

# JavaScript – Variables: `var`, `let` and `const`

## 1. What is a Variable?

A variable is a container used to store data in JavaScript.

```javascript
var name = "Nikita";
let age = 28;
const country = "India";
```

JavaScript provides three ways to declare variables:

- `var`
- `let`
- `const`

## 2. Difference Between var, let and const

### var
- Function-scoped.
- Can be redeclared.
- Can be reassigned.
- Hoisted and initialized with `undefined`.
- Avoid using it in modern JavaScript when possible.

```javascript
var name = "Nikita";
var name = "Rahul"; // Allowed

name = "John"; // Allowed

console.log(name); // John
```

### let
- Block-scoped.
- Cannot be redeclared in the same scope.
- Can be reassigned.
- Hoisted but remains in the Temporal Dead Zone (TDZ) until initialization.

```javascript
let age = 25;
age = 28; // Allowed

// let age = 30; // SyntaxError: Identifier already declared

console.log(age); // 28
```

### const
- Block-scoped.
- Cannot be redeclared in the same scope.
- Cannot be reassigned.
- Must be initialized when declared.
- Hoisted but remains in the TDZ until initialization.

```javascript
const country = "India";

// country = "USA"; // TypeError

console.log(country); // India
```

## 3. Scope

Scope determines where a variable can be accessed.

### Function Scope – var

A `var` variable is accessible throughout its function, not just inside an if or loop block.

```javascript
if (true) {
    var a = 10;
}

console.log(a); // 10
```

### Block Scope – let and const

A block is code inside curly braces `{}`.

Variables declared with `let` and `const` are accessible only inside their block.

```javascript
if (true) {
    let b = 20;
    const c = 30;
}

console.log(b); // ReferenceError
console.log(c); // ReferenceError
```

**Interview point:** `var` is function-scoped, whereas `let` and `const` are block-scoped.

## 4. Hoisting

Hoisting means JavaScript processes variable and function declarations before executing the code.

### var hoisting

```javascript
console.log(a); // undefined

var a = 10;
```

JavaScript behaves conceptually like this:

```javascript
var a;
console.log(a); // undefined
a = 10;
```

### let and const hoisting

```javascript
console.log(a); // ReferenceError

let a = 10;
```

`let` and `const` are also hoisted, but cannot be accessed before initialization because they are in the Temporal Dead Zone.

## 5. Temporal Dead Zone (TDZ)

TDZ is the period between entering a scope and initializing a `let` or `const` variable.

```javascript
console.log(name); // ReferenceError

let name = "Nikita";
```

**Remember:** Accessing a `let` or `const` variable before initialization causes a ReferenceError.

## 6. Re-declaration vs Re-assignment

### Re-declaration

Declaring the same variable again.

```javascript
var a = 10;
var a = 20; // Allowed
```

```javascript
let b = 10;
// let b = 20; // SyntaxError
```

### Re-assignment

Changing the existing variable's value.

```javascript
let age = 25;
age = 28; // Allowed
```

```javascript
const age = 25;
// age = 28; // TypeError
```

## 7. Important: const with Arrays and Objects

A common interview question:

**Can we modify an array or object declared using const?**

Yes. `const` prevents reassignment of the variable, not modification of its contents.

### Array example

```javascript
const fruits = ["Apple", "Mango"];

fruits.push("Banana");

console.log(fruits);
// ["Apple", "Mango", "Banana"]
```

But this is not allowed:

```javascript
const fruits = ["Apple", "Mango"];

fruits = ["Orange"]; // TypeError
```

### Object example

```javascript
const student = {
    name: "Nikita",
    course: "Full Stack"
};

student.course = "Frontend Developer";

console.log(student);
// { name: "Nikita", course: "Frontend Developer" }
```

But reassigning the complete object is not allowed:

```javascript
student = {
    name: "Rahul"
}; // TypeError
```

**Interview point:** Both `let` and `const` allow object property modification. Only `let` allows reassignment of the variable to a new object.

## 8. Common JavaScript Errors

- **SyntaxError:** Redeclaring a `let` or `const` variable in the same scope.
- **TypeError:** Reassigning a `const` variable.
- **ReferenceError:** Accessing a variable that is not available in the current scope or accessing a `let`/`const` variable before initialization.

## 9. Frequently Asked Interview Questions

**Q1. What is the difference between var, let and const?**

`var` is function-scoped and allows redeclaration and reassignment. `let` is block-scoped and allows reassignment but not redeclaration in the same scope. `const` is block-scoped and does not allow reassignment or redeclaration.

**Q2. Which one do you prefer in modern JavaScript?**

I prefer `const` by default because it prevents accidental reassignment. I use `let` when the variable's value needs to change. I generally avoid `var`.

**Q3. Can we reassign a const object?**

No. We cannot assign a new object to a `const` variable, but we can modify its existing properties.

**Q4. What is the difference between SyntaxError and TypeError in these examples?**

Redeclaring `let` in the same scope causes a SyntaxError. Reassigning a `const` variable causes a TypeError.

**Q5. Are let and const hoisted?**

Yes. They are hoisted but remain in the Temporal Dead Zone until initialization.

**Q6. What is block scope?**

A variable declared with `let` or `const` inside a block can only be accessed within that block.

**Q7. Can we declare a const variable without assigning a value?**

No. A `const` variable must be initialized during declaration.

## 10. Quick Revision

- `var` → Function scope, redeclaration allowed, reassignment allowed.
- `let` → Block scope, redeclaration not allowed in same scope, reassignment allowed.
- `const` → Block scope, redeclaration and reassignment not allowed.
- `var` before initialization → `undefined`.
- `let` and `const` before initialization → ReferenceError.
- Redeclaring `let` in the same scope → SyntaxError.
- Reassigning `const` → TypeError.
- `const` objects and arrays can have their contents modified.
- Prefer `const` by default and `let` when reassignment is required.

## 11. Best Interview Answer

"In modern JavaScript, we use `const` and `let` instead of `var`. The main difference is their scope and reassignment behaviour. `var` has function scope, while `let` and `const` have block scope. `let` allows reassignment, whereas `const` does not. However, when using `const` with arrays and objects, we can still modify their contents. I generally prefer `const` by default and use `let` whenever reassignment is needed."

---

**GitHub practice file:** `01-var-let-const.js`

**Commit message:**

```bash
git add .
git commit -m "practice var let and const"
git push
```
