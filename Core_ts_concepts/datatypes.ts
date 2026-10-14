// Data types - Primitives and Non-Primitives

// 1. Primitive Data Types
let stu_name: string = "John Doe"; // storing string value - textual data
let stu_age: number = 30; // storing number value - numeric data (int, float, double)
let stu_isActive: boolean = true; // storing boolean value - true or false
let stu_address: null = null; // storing null value - represents absence of any value
let stu_phone: undefined = undefined; // storing undefined value - represents absence of any value
let stu_symbol: symbol = Symbol("unique"); // storing symbol value - unique identifier
let stu_bigInt: bigint = 123n; // storing bigint value - large integer values

// 2. Non-Primitive Data Types

// Array
let stu_hobbies: string[] = ["Reading", "Traveling", "Cooking"]; // storing array of strings   
let stu_scores: Array<number> = [85, 90, 78]; // storing array of numbers using generic array type
let stu_details: { name: string; age: number; isActive: boolean } = { name: "John Doe", age: 30, isActive: true }; // storing object with properties

// Object - Refernece type

let student_info = {
    name: "John Doe",
    age: 30,
    isActive: true,
    hobbies: ["Reading", "Traveling", "Cooking"],
}

// tuple - fixed length array with different data types 
let stu_tuple: [string, number, boolean] = ["John Doe", 30, true]; // storing tuple with string, number and boolean values

// Enum - collection of related values
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
// function to demonstrate usage of enum
function getColorName(color: Color): any {

    return color;
}

// class - blueprint for creating objects
interface Student {
    name: string;
    age: number;
    isActive: boolean;
}

class Student {

    constructor(public name: string, public age: number, public isActive: boolean) {

    }

}

// Dates
// Collections - Set, Map








