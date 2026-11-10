// . What is filter()?
// filter() is used to select only the elements that match a 
// particular condition.

// In simple words: filter() checks every element and keeps only 
// the elements that satisfy the condition.


let numbers = [5, 10, 15, 20, 25];

let result = numbers.filter((num) => {
    return num > 10
})

console.log(result)//[ 15, 20, 25 ]


// 2. How does filter() work?
let ages = [15, 18, 22, 12, 30];

let adults = ages.filter((age) => {
    return age >= 18
})

console.log(adults)//[ 18, 22, 30 ]

// filter() checks every element.
// age represents the current element.
// age >= 18 is the condition.
// If the condition is true, that element is included.
// If false, that element is skipped.

// 3. Filter strings

let names = ["Amit", "Rahul", "Anita", "Priya"];

const result3 = names.filter((name) => name.startsWith("A"))

console.log(result3)//[ 'Amit', 'Anita' ]

// 4. filter() with objects
// This is especially important for frontend developers.
// Imagine an employee management dashboard.


let employees = [
    { id: 1, name: "Rahul", active: true },
    { id: 2, name: "Priya", active: false },
    { id: 3, name: "Amit", active: true }
];

let activeEmployees = employees.filter((emp) => {
    return emp.active === true
})

console.log(activeEmployees)
// [
//   { id: 1, name: 'Rahul', active: true },
//   { id: 3, name: 'Amit', active: true }
// ]


// 5. filter() in React
//Imagine you have a product list and want to display 
// only products costing less than ₹1,000.

function productList() {
    const products = [
        { id: 1, name: "Watch", price: 800 },
        { id: 2, name: "Laptop", price: 50000 },
        { id: 3, name: "Bag", price: 600 }
    ];

    const filterProducts = products.filter((product) => product.price < 1000)

    return (
        <div>
            {

                //curly braces {}
                // filterProducts.map((products) => {
                //     <p key={products.id}>
                //         {products.name} - Rupee{products.price}
                //     </p>
                // })

                // JSX will not render
                // Why?

                // When you use { } after =>, JavaScript creates a function body.
                // You must explicitly write return to return the JSX.


                // {
                //     filteredProducts.map((product) => {
                //         return (
                //             <p key={product.id}>
                //                 {product.name} - ₹{product.price}
                //             </p>
                //         );
                //     })
                // }
                //Now React receives the JSX elements and displays them.
                //-----------------------------------------------------------------

                //parentheses ()
                // {
                //     filteredProducts.map((product) => (
                //         <p key={product.id}>
                //             {product.name} - ₹{product.price}
                //         </p>
                //     ))


                
                // }2. Your second code — Parentheses ()
                //                 {
                //                     filteredProducts.map((product) => (
                //                         <p key={product.id}>
                //                             {product.name} - ₹{product.price}
                //                         </p>
                //                     ))
                //                 }


                // Correct — JSX renders
                //             Why?

                // When you use () after =>, the arrow function implicitly returns the expression inside.

                //             You don't need to write return.


                //-------------------------------------------------------------
            }
        </div>

    )


}
