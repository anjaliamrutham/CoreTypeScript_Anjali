// Oops concepts - Encapsulation, Inheritance, Polymorphism, Abstraction
// Encapsulation : Wrapping data and code in a single unit and maintain data privacy 

// Encapsulation - Automation Usage - I can use it in POM to maintain locator privacy, 

// class Employee {

//     private salary: number;

//     constructor(salary: number){
//         this.salary = salary;
//     }

//     getSalary(): number{

//         return this.salary;
//     }

// }

// const empt = new Employee(10000);
// console.log(empt.getSalary());

// const emp = new Employee(50000);
// console.log(emp.getSalary());

// // Inheritance - One class reuses properties and methods ftom another class use extends keyword
// // Inheritance - Automation - We can create a base page containing common actions and reuse them in other page classes


// class Animal{

//     eat(): void {
//         console.log("All Animal Eating")

//     }

// }

// class Dog extends Animal{
//     bark(): void{
//         console.log("Dog is Barking")
//     }

// }

// const dog = new Dog()
// dog.eat();
// dog.bark();

// Polymorphism - The same method can behave differently in dofferent classes
// Topic to know - Method Overloading, Method Overridding, What is compile time polymorphism, What is run time polymorphism,

class Animale{

    sound(): void {
        console.log("Animals makes sound")
    }
}

class Doge extends Animale{
    sound(): void{
        console.log("Hey i am from Doge's class")
    }

}

class cat extends Animale{
    override sound(): void{
        console.log("Hey i am from catee's class")

    }

}

const Anima  = new cat()

console.log(Anima.sound())







