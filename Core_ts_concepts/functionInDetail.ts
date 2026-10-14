// function - A function is a block of code that performs a specific task. It can take inputs, called parameters, and can return an output. Functions help in organizing code, making it reusable, and improving readability.

// Function Declaration
function add(a: number, b: number): number {
    return a + b;
}

// Types of functions in TypeScript

// 1. Named Function
function greet(name: string): string {

    return `Hello, ${name}!`;
}

greet("John"); // Output: Hello, John!


// 2. Anonymous Function
const multiply = function (a: number, b: number): number {
    return a * b;
};
multiply(5, 3); // Output: 15

// 3. Arrow Function
const divide = (a: number, b: number): number => {
    return a / b;
};
divide(10, 2); // Output: 5

//4. Function with Optional Parameters

interface User {
    name: string;
    age?: number; // optional parameter
    email: string;
}


var user: User = {
    name: "Alice",
    age: 25,
    email: "alice@example.com"
};

var user: User ={
    name: "Bob",
    age: undefined,
    email: "bob@example.com"
}


function User(user: User): User {
    return user;
}
console.log(User(user)); // Output: { name: "Alice", age: 25, email: "alice@example.com" }

// function User(name: string, age?: number): User {

//     return {
//         name,
//         age,
//         email: "" // Provide a default value or handle the case where email is not provided
//     };
// }
// Advanced Function Concepts in TypeScript - Optional Parameters, Default Parameters, Rest Parameters, Function Overloading, Higher-Order Functions, Closures, and Recursion, callback, generator functions
// async ({})=>{
// }

