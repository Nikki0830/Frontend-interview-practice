Lesson 2: Type coercion
This is the next important concept.

Type coercion means JavaScript automatically or manually changes one data type into another.

There are two types:

1. Implicit conversion (automatic)

JavaScript converts the value automatically.
console.log("5" + 2); // "52"
console.log("5" - 2); // 3


Why?
- With +, JavaScript joins the string and number.
- With -, JavaScript converts the string "5" into number 5.
2. Explicit conversion (manual)

We convert the value ourselves.
console.log(Number("100")); // 100

console.log(String(100));   // "100"

console.log(Boolean(1));    // true


How to explain in an interview
"Type coercion means converting one data type into another. Implicit coercion happens automatically in JavaScript, while explicit conversion is done manually using methods like Number(), String() and Boolean()."