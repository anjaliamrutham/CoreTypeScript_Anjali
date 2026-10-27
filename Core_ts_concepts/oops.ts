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

// Method Overriding - A child class provides its own implementation of a method inherited from the parent


class Browser {
    open(): void {
        console.log("Open the browser")
    }
}

class chrome extends Browser{
    open(): void{
        console.log("Opening chrome Browser")
    }
}

class firefox extends Browser {
    open(): void{
        console.log("Opening firefox Browser")
    }
}


const browsers: Browser[] = [ new chrome, new firefox];

for( const browser of browsers){

    const brow = browser
    console.log(brow)


}



//Method Overloading - TS method Overloading uses multiple declarations and one implementation 

class calc{
    add(a:number, b:number):number;
    add(a:string, b:string):string;
    add(a:any, b:any):any;

    add(a:number|string, b:number | String) :number | string {

        if(typeof a==="number" && typeof b==="number"){
            return a+b;

        } else if(typeof a==="string" && typeof b==="string"){
            return a+b;

        } else{
        
        throw new Error("Argument must have matching types")
        }
    }
}

const calculat = new calc();
console.log("This is the nubers Output : "+calculat.add(10,20))
console.log("This is the string's output : "+calculat.add("true",false))

// Abstraction : Abstraction hides the implementation details and expose only the essential behaviour


abstract class Browser1{

    abstract launchbrowser():void;

    close(): void{
        console.log("Browser closed")

    }
}

class Chromea extends Browser1 {

    launchbrowser(): void {
        console.log("Launching chrome")
    }
}


// class firefoxe extends Browser {


// }

const ch = new Chromea();
ch.launchbrowser();
ch.close();


// Use the optional chaining - we can achieve the interface and abstract class charecters to gether 
// if we mentioned any data types or any method types (interface) - that should implement in the child classes
// if we mentioned any data types or any method types (Abstract class) - that should implement in the child classes
// Abstract class is class that can be extended among other class too
// Interface not a class that canot be implemtnted , if interface desireded class should implement (Use optional chaining - If implementation is not a mandatory)



interface Runnable {
    run(): void;
}

abstract class Runnable{
    abstract Runnable?: void;

}


class BrowserTest implements Runnable {
    run(): void {
        console.log("Running browser test");
    }
}

class ApiTest implements Runnable {
    run(): void {
        console.log("Running API test");
    }
}

class ReportGenerator implements Runnable {
    run(): void {
        console.log("Generating test report");
    }
}

