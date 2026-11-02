# DSA Day 1 – Arrays and Time & Space Complexity

## 1. What is an Array?

An array is a linear data structure used to store multiple values in a single variable.

JavaScript example:

```javascript
const numbers = [10, 20, 30, 40, 50];
```

Each element in an array has an index.

| Element | 10 | 20 | 30 | 40 | 50 |
|---|---|---|---|---|---|
| Index | 0 | 1 | 2 | 3 | 4 |

### Important points

- Array indexing starts from 0.
- Arrays store multiple values.
- Arrays have a `length` property.
- Arrays are mutable in JavaScript.
- We can access elements using their index.

```javascript
const numbers = [10, 20, 30];

console.log(numbers[0]); // 10
console.log(numbers[1]); // 20
console.log(numbers.length); // 3
```

### Why does array indexing start at zero?

Array indexing starts at zero because the index represents the offset from the beginning of the array. The first element has an offset of zero.

---

## 2. What is Array Traversal?

Array traversal means visiting each element of an array one by one to perform an operation.

Example:

```javascript
const numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

Output:

```text
10
20
30
40
50
```

### Why do we use `i < numbers.length`?

Array indexing starts at zero.

For an array containing 5 elements:
- First index = 0
- Last index = 4
- Length = 5

Therefore, we use:

```javascript
i < numbers.length
```

Using `i <= numbers.length` would access one extra, invalid index.

---

## 3. Find the Maximum Number in an Array

Problem: Find the largest number without using `Math.max()`.

Input:

```javascript
const numbers = [10, 45, 23, 89, 12];
```

Solution:

```javascript
let maxNum = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
        maxNum = numbers[i];
    }
}

console.log(maxNum); // 89
```

### Approach

1. Assume the first element is the maximum.
2. Traverse the array.
3. Compare each element with the current maximum.
4. If an element is greater, update the maximum.
5. Print the final maximum.

### Complexity

- Time Complexity: O(n)
- Auxiliary Space Complexity: O(1)

Reason: We traverse the array once and use only a constant amount of extra memory.

---

## 4. Find the Minimum Number in an Array

Input:

```javascript
const numbers = [10, 45, 23, 89, 12];
```

Solution:

```javascript
let minNum = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minNum) {
        minNum = numbers[i];
    }
}

console.log(minNum); // 10
```

### Approach

1. Assume the first element is the minimum.
2. Traverse the array.
3. Compare every element with the current minimum.
4. Update the minimum if a smaller number is found.

### Complexity

- Time: O(n)
- Auxiliary Space: O(1)

---

## 5. Find the Sum of an Array

Input:

```javascript
const numbers = [10, 20, 30, 40, 50];
```

Solution:

```javascript
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum); // 150
```

### Approach

1. Initialise sum with zero.
2. Traverse the array.
3. Add each element to sum.
4. Print the final sum.

### Complexity

- Time: O(n)
- Auxiliary Space: O(1)

---

## 6. Find the Average of an Array

Formula:

Average = Total Sum / Number of Elements

Solution:

```javascript
const numbers = [10, 20, 30, 40, 50];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

let average = sum / numbers.length;

console.log("Sum:", sum);       // 150
console.log("Average:", average); // 30
```

### Important mistake to avoid

Incorrect:

```javascript
average = sum / numbers[i];
```

This divides the running sum by the current element.

Correct:

```javascript
average = sum / numbers.length;
```

Calculate the sum first, then calculate the average after the loop.

### Complexity

- Time: O(n)
- Auxiliary Space: O(1)

---

## 7. Reverse an Array

### Approach 1: Print an array in reverse order

```javascript
const numbers = [1, 2, 3, 4, 5];

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}
```

Output:

```text
5
4
3
2
1
```

To print inline in Node.js:

```javascript
process.stdout.write(numbers[i] + " ");
```

Complexity:
- Time: O(n)
- Auxiliary Space: O(1)

### Approach 2: Create a new reversed array

```javascript
const numbers = [1, 2, 3, 4, 5];

let newRevNum = [];

for (let i = numbers.length - 1; i >= 0; i--) {
    newRevNum.push(numbers[i]);
}

console.log(newRevNum.join(" "));
```

Output:

```text
5 4 3 2 1
```

Complexity:
- Time: O(n)
- Auxiliary Space: O(n)

Reason: A new array is created to store all the reversed elements.

### Approach 3: Using JavaScript reverse()

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.reverse();

console.log(numbers);
```

Output:

```text
[5, 4, 3, 2, 1]
```

Important: `reverse()` modifies the original array.

Complexity:
- Time: O(n)
- Auxiliary Space: O(1) in standard algorithmic analysis.

### Approach 4: Using toReversed()

```javascript
const numbers = [1, 2, 3, 4, 5];

const reversed = numbers.toReversed();

console.log(reversed); // [5, 4, 3, 2, 1]
console.log(numbers);  // [1, 2, 3, 4, 5]
```

Important: `toReversed()` creates a new array and leaves the original unchanged.

Complexity:
- Time: O(n)
- Auxiliary Space: O(n)

---

## 8. Two Pointers Technique

Two pointers is a problem-solving technique where we use two variables to track positions in a data structure.

It is commonly used in:
- Reversing arrays
- Palindrome checking
- Pair-sum problems
- Sorted array problems

### Reverse an array using two pointers

```javascript
const numbers = [1, 2, 3, 4, 5];

let left = 0;
let right = numbers.length - 1;

while (left < right) {
    let temp = numbers[left];

    numbers[left] = numbers[right];
    numbers[right] = temp;

    left++;
    right--;
}

console.log(numbers);
```

Output:

```text
[5, 4, 3, 2, 1]
```

### How does it work?

1. `left` starts at the first index.
2. `right` starts at the last index.
3. Swap the elements at both positions.
4. Move `left` forward.
5. Move `right` backward.
6. Stop when both pointers meet or cross.

### Why do we use `left < right`?

When both pointers meet at the middle element, there is nothing left to swap. Using `<` avoids an unnecessary self-swap.

### Complexity

- Time: O(n)
- Auxiliary Space: O(1)

This is an efficient in-place reversal approach.

---

# 9. Time Complexity

Time complexity describes how the number of operations performed by an algorithm grows as the input size increases.

In simple words, it helps us understand how an algorithm performs when the input becomes larger.

For example:

- 5 array elements
- 100 array elements
- 1,000 array elements
- 100,000 array elements

We use Big O notation to describe the growth rate.

## Common Time Complexities

| Complexity | Name | Example |
|---|---|---|
| O(1) | Constant | Access an array element |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Single loop |
| O(n log n) | Linearithmic | Merge sort |
| O(n²) | Quadratic | Two nested loops |
| O(2ⁿ) | Exponential | Some recursive problems |

### O(1) – Constant Time

The number of operations does not grow with the input size.

```javascript
const numbers = [10, 20, 30, 40];

console.log(numbers[0]);
```

Time Complexity: O(1)

### O(n) – Linear Time

One loop traverses all elements.

```javascript
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

Time Complexity: O(n)

### O(n²) – Quadratic Time

Two nested loops each traverse n elements.

```javascript
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
        console.log(numbers[i], numbers[j]);
    }
}
```

Time Complexity: O(n²)

### O(log n) – Logarithmic Time

The search space is repeatedly divided, usually in half.

Example: Binary search on a sorted array.

### O(n log n) – Linearithmic Time

Common in efficient sorting algorithms such as Merge Sort.

---

# 10. Space Complexity

Space complexity describes how the memory required by an algorithm grows with the input size.

In interviews, we often discuss **auxiliary space**, which means the extra memory used by the algorithm, excluding the input itself.

### O(1) – Constant Auxiliary Space

```javascript
const numbers = [10, 20, 30, 40];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
```

We only use a constant number of extra variables, such as `sum` and `i`.

Auxiliary Space: O(1)

### O(n) – Linear Auxiliary Space

```javascript
const numbers = [10, 20, 30, 40];

const doubled = [];

for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
}
```

The new array grows with the input size.

Auxiliary Space: O(n)

### Difference between Time and Space Complexity

| Time Complexity | Space Complexity |
|---|---|
| Measures growth in running time/operations | Measures growth in memory usage |
| Analyses how much work is performed | Analyses how much extra memory is needed |
| Example: O(n) traversal | Example: O(n) new array |

---

# 11. Complexity Analysis – Day 1 Summary

| Problem | Time | Auxiliary Space |
|---|---|---|
| Array element access | O(1) | O(1) |
| Array traversal | O(n) | O(1) |
| Find maximum | O(n) | O(1) |
| Find minimum | O(n) | O(1) |
| Calculate sum | O(n) | O(1) |
| Calculate average | O(n) | O(1) |
| Print in reverse | O(n) | O(1) |
| Reverse into a new array | O(n) | O(n) |
| Reverse using two pointers | O(n) | O(1) |
| Built-in reverse() | O(n) | O(1) typical auxiliary-space analysis |

Note: Complexity describes growth as n increases. Built-in array method implementation details can vary by JavaScript engine.

---

# 12. Interview Questions and Answers

### Q1. What is an array?

An array is a linear data structure used to store multiple values in a single variable. Each element can be accessed using its index.

### Q2. What is array traversal?

Array traversal means visiting each element of an array one by one to perform an operation.

### Q3. Why does array indexing start at zero?

Because the index represents the offset from the beginning of the array. The first element has an offset of zero.

### Q4. How do you find the largest element without using Math.max()?

I initialise a variable with the first array element, traverse the array and compare each element with the current maximum. If I find a larger element, I update the maximum.

### Q5. What is time complexity?

Time complexity describes how the number of operations performed by an algorithm grows as the input size increases.

### Q6. What is space complexity?

Space complexity describes how memory usage grows as the input size increases. Auxiliary space refers to the extra memory used by the algorithm, excluding the input.

### Q7. What is the time complexity of traversing an array?

O(n), because we visit every element once.

### Q8. What is the space complexity of traversing an array?

O(1) auxiliary space if we only use a loop variable and do not create another data structure.

### Q9. What is the difference between O(n) and O(n²)?

O(n) represents linear growth, while O(n²) represents quadratic growth. A single loop is generally O(n), and two nested loops that each run n times are generally O(n²).

### Q10. What is the difference between reverse() and toReversed()?

`reverse()` modifies the original array, whereas `toReversed()` returns a new reversed array without modifying the original.

### Q11. What is the two-pointer technique?

It is a technique where two pointers track different positions in a data structure to solve a problem efficiently. It is useful for array reversal, palindrome checks and pair-sum problems.

### Q12. Why is two-pointer reversal efficient?

It reverses the array in place, takes O(n) time and uses O(1) auxiliary space.

---

# 13. Day 1 Practice Checklist

- [ ] Understand arrays and indexing.
- [ ] Practise array traversal.
- [ ] Find the maximum element.
- [ ] Find the minimum element.
- [ ] Calculate the sum of an array.
- [ ] Calculate the average of an array.
- [ ] Print an array in reverse.
- [ ] Reverse an array into a new array.
- [ ] Understand JavaScript reverse() and toReversed().
- [ ] Reverse an array using two pointers.
- [ ] Understand Big O notation.
- [ ] Explain time complexity.
- [ ] Explain space complexity.
- [ ] Solve the interview questions aloud.
- [ ] Push your DSA practice to GitHub.

---

# 14. Day 1 Key Takeaways

1. Arrays use zero-based indexing.
2. Array traversal means visiting every element.
3. A single full array traversal takes O(n) time.
4. Use a variable to track maximum and minimum values.
5. Calculate the average after calculating the total sum.
6. `reverse()` modifies the original array.
7. `toReversed()` creates a new reversed array.
8. Two pointers can reverse an array in place.
9. Time complexity measures growth in operations.
10. Auxiliary space complexity measures extra memory usage.

**Interview goal:** Be able to solve basic array problems independently, explain your approach and confidently state the time and auxiliary space complexity.



7. Interview Questions and Answers

Q1. What does offset mean?

Offset means the distance or position of an element from the beginning of a data structure. In a zero-based array, the first element has an offset of zero.

Q2. Why does JavaScript array indexing start at zero?

Because an array index represents the offset from the beginning of the array. The first element has an offset of zero.

Q3. What is time complexity?

Time complexity describes how the number of operations performed by an algorithm grows as the input size increases.

Q4. What is space complexity?

Space complexity describes how memory requirements grow as the input size increases.

Q5. What is auxiliary space?

Auxiliary space is the extra memory used by an algorithm, excluding the original input.

Q6. Does a new array count as auxiliary space?

Yes. A new array created by an algorithm requires additional memory, so it contributes to auxiliary space.

Q7. Why does an array traversal use O(1) auxiliary space?

Because we only use a constant number of extra variables, such as the loop variable, and do not create another data structure.

Q8. Why does reversing an array into a new array require O(n) auxiliary space?

Because we create another array that stores n elements, so the extra memory grows with the input size.

Q9. What is the difference between O(1) and O(n) auxiliary space?

O(1) means the extra memory stays constant regardless of input size. O(n) means the extra memory grows proportionally with input size.

8. Quick Revision

Index: Position of an element in an array.

Offset: Distance from the starting position.

Zero-based indexing: First element starts at index 0.

Last index: Array length - 1.

Time complexity: Growth in operations.

Space complexity: Growth in memory requirements.

Auxiliary space: Extra memory excluding input.

O(1): Constant extra memory.

O(n): Extra memory grows with input size.

Extra arrays and objects count as auxiliary space.


still i am not getting offset
No problem! Let's forget the technical definition for a moment. I'll explain offset using a simple real-life example.

Imagine you are standing in a queue
There are 5 people standing in a line.

People standing in a queue
A
Person 1

Offset 0
B
Person 2

Offset 1
C
Person 3

Offset 2
D
Person 4

Offset 3
E
Person 5

Offset 4
Imagine the starting point is just before person A.

Now, let's count how many positions you move from the starting point to reach each person.

To reach A → move 0 positions.

To reach B → move 1 position.

To reach C → move 2 positions.

To reach D → move 3 positions.

To reach E → move 4 positions.

That number of positions moved from the starting point is called the offset.

Now connect this to JavaScript arrays
const fruits = ["Apple", "Banana", "Mango", "Orange"];

Fruit

Index

Offset

Apple

0

0 positions

Banana

1

1 position

Mango

2

2 positions

Orange

3

3 positions

The index tells JavaScript how far the element is from the beginning of the array.

For example:

console.log(fruits[0]); // Apple
console.log(fruits[2]); // Mango

When you write fruits[2], you're asking JavaScript for the element located 2 positions after the starting position.

One more simple example
Imagine your house is the starting point.

Your house = 0 km

Shop = 1 km away

School = 2 km away

Park = 3 km away

The distance from your starting point is like an offset.

The same idea applies to array positions.

Check your understanding
Given this array:

const numbers = [10, 20, 30, 40, 50];

How many positions from the beginning is the number 40?


2 positions

3 positions

4 positions
Correct!40 is at index 3, meaning 3 positions after the starting position.

The one sentence to remember: Offset = how many positions away from the starting point.