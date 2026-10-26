// Type Inference and type annotations - These are the ways to handle the type of data a variable and functiona or Object uses

// 1. Type Inference- Its automatically determines the type based on value 

let Username = "Anjali";
let age = 23;


function add(Username:string, age:number){
    return Username
}

let fruits = ["apple", "mango", "Orange", "banana"]
fruits.push("Jackfruit")

// Type Annotations - Means Explicitly spesifying the type using a colon (:)

let Username1:string = "Anjali";
let age1:number = 23;

// Difference - Type Inference Vs Type Anotations

// Type Infrence - Automatically determines the type, No Explicit type required, Less code, When expected Obvious type of data
// Type Annotation - Opposite of above notes

