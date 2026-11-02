const numbers = [10, 20, 30]

console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])

console.log()//blank line
console.log("\n")

//Arrray Traversal
const numbersTwo = [10, 20, 30, 40, 50]

for (let i = 0; i < numbersTwo.length; i++) {
    console.log(numbersTwo[i])
}


//Find the maximum number
const Num = [10, 45, 23, 89, 12]

// Approach:
// 1. Assume the first element is the maximum.
// 2. Traverse the array.
// 3. Compare every element with the current maximum.
// 4. Update the maximum when you find a larger value.

let maxNum = Num[0]
for (let i = 1; i < Num.length; i++) {
    if (Num[i] > maxNum) {
        maxNum = Num[i]
    }
}
console.log(maxNum);


//Find the minimum number
const NumTwo = [10, 12, 34, 65, 89]

let minNum = NumTwo[0]

for (let i = 1; i < NumTwo.length; i++) {
    if (NumTwo[i] < minNum) {
        minNum = NumTwo(i)
    }
}

console.log(minNum)

//"My maximum element algorithm has O(n) time complexity 
// because it traverses the array once, and O(1) auxiliary 
// space complexity because it uses only a constant amount of extra memory."

//Find sum and average 
const avgNum = [10, 20, 30, 40, 50]

let sum = 0;

for (let i = 0; i < avgNum.length; i++) {
    sum += avgNum[i]

}

let avg = sum / avgNum.length

console.log(`${sum} ${avg}`)
// Final complexity
// O(n)
// Time complexity – one loop through the array.

// O(1)
// Auxiliary space complexity – only sum and avg are extra variables.

//Reverse an array(basic approach)
const revNum = [1, 2, 3, 4, 5];
let newRevNum = [];

for (let i = revNum.length - 1; i >= 0; i--) {
    newRevNum.push(revNum[i])
}

console.log(newRevNum.join(' '))

//Complexity:
// - Time: O(n)
// - Auxiliary space: O(n), because you're creating a new array containing all elements.

//to print inline js methods
const printInline = [2, 5, 6, 8, 8]

for (let i = printInline.length - 1; i >= 0; i--) {
    process.stdout.write(printInline[i] + " ")//from node js, canot run in browser
}
//Remember: Use console.log() for normal output and process.stdout.write() when you want inline terminal output without automatic line breaks.

//using reverse()

const revMethod = [2, 4, 6, 8, 10]

revMethod.reverse();

console.log(revMethod);
//reverse() modifies the orinal array 

const revModOrgAr = [2, 6, 7, 8, 8]

const result = revModOrgAr.reverse();

console.log(result)//[ 8, 8, 7, 6, 2 ]
console.log(revModOrgAr)//[ 8, 8, 7, 6, 2 ]

//4. How to reverse without modifying the original array?
// Use toReversed():

const revtoRevarr = [1, 2, 4, 5, 7]

const reversed = revtoRevarr.toReversed()

console.log(reversed)//[ 7, 5, 4, 2, 1 ]
console.log(revtoRevarr)//[ 1, 2, 4, 5, 7 ]

//or use spread operator
const reversedSO = [...revtoRevarr].reverse();

console.log(reversedSO)

// 6. Time and space complexity
// For an array of n elements:
// Method	              Time	Auxiliary space
// reverse()	          O(n)	O(1)
// toReversed()	          O(n)	O(n)
// [...arr].reverse()	  O(n)	O(n)

//1. Best approach: Two pointers (in-place reversal)without using anu built-in method and without creating another array
//======================================================================================================================

const twoPointerRev = [4, 5, 6, 7, 8]

let left = 0
let right = twoPointerRev.length - 1

while (left < right) {
    let temp = twoPointerRev[left];
    twoPointerRev[left] = twoPointerRev[right]
    twoPointerRev[right] = temp;

    left++;
    right--;
}

console.log(twoPointerRev)

// Complexity
// Complexity	Result	Reason
// Time	O(n)	Approximately half as many swaps as elements
// Auxiliary space	O(1)	Only three extra variables








