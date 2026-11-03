// 1. String fundamentals
// A string is a sequence of characters.

const name = "Nikita";

console.log(name.length);
console.log(name[0])
console.log(name[1])
console.log(name[2])
console.log(name[5])
// 6
// N
// i
// k
// a

// Strings also use zero-based indexing.

// Important difference: JavaScript strings are immutable.
//  You cannot directly change an individual character in
//  an existing string

let word = "hello"

word[0] = "Y"

console.log(word)//Hello

// 2. String traversal
// Traversal means visiting each character one by one.

const name2 = "Reema";

for (let i = 0; i < name2.length; i++) {
    console.log(name2[i])
}

// R
// e
// e
// m
// a
// Time complexity: O(n)
// Auxiliary space: O(1)

//want to print inline//supporting node.js environment

const name3 = "Reetu";

for (let i = 0; i < name3.length; i++) {
    // process.stdout.write(name3[i] + "")//Reetu
    // process.stdout.write(name3[i] + " ")//R e e t u
    //  process.stdout.write(name3[i])//nothing
}
// Time complexity: O(n)
// Auxiliary space: O(1)


//Using split() and join()

const name4 = "nikki"


// console.log(name4.split(""))//[ 'n', 'i', 'k', 'k', 'i' ]
// console.log(name4.split(''))//[ 'n', 'i', 'k', 'k', 'i' ]
// console.log(name4.split(' '))//[ 'nikki' ]
// console.log(name4.split(" "))//[ 'nikki' ]
// console.log(name4.split())//[ 'nikki' ]

// console.log(name4.split("").join())//n,i,k,k,i
// console.log(name4.split("").join(""))//nikki
// console.log(name4.split(" ").join(" "))//nikki


console.log(name4.split("").join(" "))//n i k k i

// 1. Time Complexity: O(n)

// Step 1: split("")
// Visits the string characters.
// Creates an array containing each character.
// Takes O(n) time.

// Step 2: join(" ")
// Visits each array element.
// Combines them into one string with spaces.
// Takes O(n) time.

//Total:
// \[O(n) + O(n) = O(2n) = O(n)\]

// 2. Auxiliary Space Complexity: O(n)
// Why?
// - split("") creates a new array containing n characters.
// - join(" ") creates a new output string containing the characters and separators.

//Method 2: Using a loop and join();

const name5 = "Nikita Patel"
let result = []

for (let i = 0; i < name5.length; i++) {
    result.push(name5[i])
}

console.log(result)
// [
//   'N', 'i', 'k', 'i',
//   't', 'a', ' ', 'P',
//   'a', 't', 'e', 'l'
// ]

console.log(result.join())//N,i,k,i,t,a, ,P,a,t,e,l
console.log(result.join(''))//Nikita Patel
console.log(result.join(" "))//N i k i t a   P a t e l
console.log(result.join(","))//N,i,k,i,t,a, ,P,a,t,e,l
console.log(result.join(",  "))//N,  i,  k,  i,  t,  a,   ,  P,  a,  t,  e,  l
console.log(result.join("abc"))//Nabciabckabciabctabcaabc abcPabcaabctabceabcl

//TC : \[O(1)+O(n)+O(n)=O(n)\]
//Space Complexity: O(n)

// Browser approach (recommended)
// const name6 = "Nikki Patel"
// const output = document.getElementById("output")

// for (let i = 0; i < name6.length; i++) {
//     // output.textContent += name6[i] + " "//N i k k i P a t e l
//     // output.textContent += name6[i]//Nikki Patel
//     // output.textContent = name6[i]//l
// }

//Complexity
// - Time: O(n)
// - Auxiliary space: 
// O(1) for the loop logic, excluding the output stored in the DOM.


//One important distinction: if the interviewer requires both inline 
// output and O(1) auxiliary space, ask which output environment they
//  expect (Node.js or browser). The output mechanism and the 
// algorithm's space complexity are separate concerns.

//3. Reverse a string
const str = "Hello"

let newstr = ""

for (let i = str.length - 1; i >= 0; i--) {
    newstr += str[i]
}

console.log(newstr)//olleH

// 1. Time Complexity (TC): O(n)
// - str.length gives the string length.
// - The loop runs n times.
// - Each iteration adds one character to newstr.

// 2. Space Complexity (SC): O(n)
// - newstr stores the reversed string.
// - It grows with the input length.
// - i requires O(1) space.

// 1. Using built-in methods

const str2 = "NP"

const reversed = str2.split("").reverse().join("")

console.log(reversed)//PN

// 1. Time Complexity: O(n)
// Operation	Time complexity
// split("")	O(n)
// reverse()	O(n)
// join("")	O(n)
// Total	O(3n) = O(n)

// Each method processes the characters of the string.
// 2. Space Complexity: O(n)
// Operation	Extra space
// split("")	O(n) – creates an array
// reverse()	O(1) auxiliary space – modifies that array in place
// join("")	O(n) – creates a new string

// TC: O(n)
//  SC: O(n)

// 3. Compare both approaches
// Approach	Time	Auxiliary space
// for loop + string concatenation	Commonly O(n), worst-case O(n²)	O(n)
// split().reverse().join()	O(n)	O(n)
// Two pointers + character array	O(n)	O(n)

// Interview answer:

// "My approach uses three built-in methods. The overall time complexity is O(n), and auxiliary space complexity is O(n), because split() creates an additional array and join() creates the resulting string."

// Remember: reverse() modifies the array returned by split(). It does not modify the original string.


// Best Approach: Two Pointers

//Two Pointers & Space Complexity: Two pointers reverse an existing 
// mutable array in place using only left, right, and temp, so reversal 
// takes O(1) auxiliary space and O(n) time. However, converting a JavaScript 
// string into a character array requires O(n) extra space because strings are immutable.

// 1. JavaScript strings are immutable//we cannot change

const str3 = "hello Nikki"
// You can read individual characters:
console.log(str3[0])
// But you cannot modify them:
str3[0] = "o"
console.log(str3);//hello Nikki not oello Nikki

// 2. Arrays are mutable // we can change
// Now convert the characters into an array manually:

const str4 = "hello";
const chars = [];

for (let i = 0; i < str4.length; i++) {
    chars[i] = str4[i]
}

console.log(chars)//[ 'h', 'e', 'l', 'l', 'o' ]new arrray created
//Why O(n)? Because if the input has 1,000 characters, you create 
// another array containing 1,000 characters.

// 3. Now apply two pointers
// left = 0
// right = 4

// [h] [e] [l] [l] [o]
//  ↑               ↑
// left            right

// Swap the two elements:
// [o] [e] [l] [l] [h]

// Move both pointers towards the centre:
// [o] [e] [l] [l] [h]
//      ↑       ↑
//     left   right

// [o] [l] [l] [e] [h]
// Now the pointers meet. Stop!
// The two-pointer reversal only uses:
// - left
// - right
// - temp
// These are three variables, regardless of whether the array has 5 or 5,000 elements.

// Therefore, reversal itself requires O(1) auxiliary space.

// 4. Where does O(n) come from?
// Let's separate the operations:
// Operation	Time	Auxiliary space
// Convert string to array	O(n)	O(n)
// Reverse array using two pointers	O(n)	O(1)
// Entire algorithm	O(n)	O(n)

// This is what I meant:

// Two pointers optimise the reversal operation because they swap elements in the existing array instead of creating another reversed array.

// However, converting the immutable JavaScript string into a mutable array still requires O(n) additional space.

// Approach: Two Pointers

const str5 = "Nikki Nikki"
const chars2 = [];

for (let i = 0; i < str5.length; i++) {
    chars2[i] = str5[i]
}

let left = 0;
let right = chars2.length - 1

while (left < right) {
    let temp = chars2[left]
    chars2[left] = chars2[right]
    chars2[right] = temp

    left++
    right--
}

let result2 = ""

for (let i = 0; i < chars2.length; i++) {
    result2 += chars2[i]
}

console.log(result2)//ikkiN ikkiN

//TC: O(n²) worst case due to string concatenation;
// SC: O(n) due to the extra character array and result string.

// Because JavaScript strings are immutable. Every time you write:
// result += chars[i];


// a new string may be created by copying the previous characters and adding the next one.

// For "hello":
// Iteration	Operation	Characters copied
// 1	"" + "o"	1
// 2	"o" + "l"	2
// 3	"ol" + "l"	3
// 4	"oll" + "e"	4
// 5	"olle" + "h"	5

// Total work:
// \[1+2+3+4+5 = \frac{n(n+1)}{2}\]

// Therefore, worst-case time complexity is O(n²).

// Interview note: Repeated string concatenation can be O(n²) in the worst case,
// although modern JavaScript engines may optimise it.


// Can we achieve O(1) auxiliary space?
// Yes, if the input is already a mutable character array.
// const chars = ["h", "e", "l", "l", "o"];

// let left = 0;
// let right = chars.length - 1;

// while (left < right) {
//     let temp = chars[left];
//     chars[left] = chars[right];
//     chars[right] = temp;

//     left++;
//     right--;
// }

// console.log(chars);


// Output:
// ["o", "l", "l", "e", "h"]


// - Time: O(n)
// - Auxiliary space: O(1)
// - The original array is modified.

// 4. Check whether a string is a palindrome

// Examples:
// - madam → Palindrome
// - level → Palindrome
// - hello → Not a palindrome
// - racecar → Palindrome

const str6 = "madam"
let rev2 = ""

for (let i = 0; i < str6.length; i++) {
    rev2 += str6[i]
}

if (str6 === rev2) {
    console.log("Palindrome")//Palindrome
} else {
    console.log("Not a palindrome")
}

// Time and Space Complexity
// - TC: O(n²) worst case because of repeated string concatenation.
// - SC: O(n) because rev2 stores the reversed string.
// Interview note: The comparison itself takes O(n) time. 
// The repeated string concatenation is what can make the 
// overall worst-case time O(n²)

//using build in method

const str7 = "Hello"

const rev3 = str7.split('').reverse().join('')
if (str6 === rev3) {
    console.log("Palindrome");
} else {
    console.log("Not a palindrome");
}

// Time and Space Complexity
// - TC: O(n) — split, reverse, join and comparison each take O(n).
// - SC: O(n) — the character array and reversed string require additional memory.
// Interview tip: Without built-in methods, use a loop to reverse the string. 
// With built-in methods, split().reverse().join() is a concise solution.

// 5. Frequency counting
// Problem: Count how many times each character appears.

const str8 = "Hello Nikita"
//{ H: 1, e: 1, l: 2, o: 1, ' ': 1, N: 1, i: 2, k: 1, t: 1, a: 1 }

let obj = {}

for (let i = 0; i < str8.length; i++) {
    const char = str8[i]

    if (obj[char]) {//If the character already exists in our object, 
        // increase its count by 1.
        obj[char]++
    } else {
        obj[char] = 1
    }
}

console.log(obj)

// //Complexity:
// - Time: O(n)
// - Auxiliary space: O(k), where k is the number of distinct characters.

//approach :using map()

// const str9  = "Nikki"//Map(3) { 'N' => 1, 'i' => 2, 'k' => 2 }
// const str9 = "NIKKI";//Map(3) { 'N' => 1, 'I' => 2, 'K' => 2 }
const str9 = "NnnIKKI";
const obj2 = new Map();//Map(4) { 'N' => 1, 'n' => 2, 'I' => 2, 'K' => 2 }

for (let i = 0; i < str9.length; i++) {
    const char = str9[i]

    if (obj2.has(char)) {
        obj2.set(char, obj2.get(char) + 1)
    } else {
        obj2.set(char, 1)
    }
}

console.log(obj2)//Map(3) { 'N' => 1, 'i' => 2, 'k' => 2 }

// 3. Why are we using const char = str9[i]?
// Your question is correct! We can directly use str9[i].
// So why create char?

// 4. Understand the Map methods
// Method	Meaning
// obj2.has(char)	Checks whether the key exists
// obj2.get(char)	Gets the value of that key
// obj2.set(char, value)	Adds or updates a key-value pair

// Because it makes the code:
// - Easier to read.
// - Easier to understand.
// - Less repetitive.
// - Easier to debug.
// char is just a temporary variable that stores the current character.

// 3. Complexity comparison
// Approach	Time	Space
// Object	O(n) average	O(k)
// Map	O(n) average	O(k)

// Distinct characters means the number of unique characters in a
// string (counting each character only once).

// Here:
// - n = total characters.
// - k = distinct characters.
// 4. Which should you use in interviews?
// - Object: Great for character frequency and simple counting.
// - Map: Useful for general key-value counting, especially when keys aren't just strings.
// - Array: Useful when the character set is fixed and small, such as lowercase English letters (26 characters).

// 1 November – Fundamentals – Part 2
// [ ] Operators and precedence
// [ ] Truthy and falsy values
// [ ] Conditions and switch
// [ ] Loops and iteration
// [ ] Functions and parameters
// [ ] Arrow functions
// [ ] Scope, hoisting and TDZ
// [ ] Execution context and call stack
// [ ] Strict mode and common errors


// 2 November – Core JavaScript – Part 3
// [ ] Arrays and array methods
// [ ] Objects and object methods
// [ ] Destructuring and spread/rest
// [ ] Strings and template literals
// [ ] Callbacks and higher-order functions
// [ ] Closures and lexical scope
// [ ] this, call, apply and bind
// [ ] Prototypes and inheritance
// [ ] DOM manipulation and events
// [ ] Event bubbling, capturing and delegation
// [ ] Promises and Promise methods
// [ ] Async/await and fetch/API
// [x] Event loop, microtasks and macrotasks
// [ ] LocalStorage, sessionStorage and JSON
// [ ] ES modules and error handling