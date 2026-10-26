// Conditional statements -- Make decision - if, if..else, if..else, if lese, Nested if , Logical operator, Ternery Operator,switch

const condition = true;

if(condition){
    console.log("")

} else if (condition) {
    console.log("");
}
else {
    console.log("")
}

//--> Optional chaining and nullish coalescing?

// Ternary Operators -- syntax - condition ? valueIfTrue : ValueIffalse

const mark = 10;
const result = mark >=35 ? "Pass" : "Fail";
console.log(result)


const profile : Profile = {

};

interface Profile {
    city?: "";
}

const city = profile.city ?? "Unknown";

console.log(city)

// ?. Safely access a property When its preceing value is nullish
// ?? Supplies a fallback only when a value is null or undefined
// Example - 2 - Optional chaining and nullish coalescing - ?., ??
// Where it can be used in Automation - Retry mechanism (Avoid - Automation - flakyness)

const user: {
    name: string;
    email: string;
    address: { city?: string };
} = {
    name: "john",
    email: "john@john.com",
    address: {
    
    }
}

console.log(user.name)
console.log(user.email)
console.log(user.address?.city)

//=========================================================================

const username = "john";
const finalusername = username ?? "Guest"
console.log(finalusername)
/// How these can be used in automation

const config = {

    browser:{

        // timeout: 10000,
        timeout: 3000

    },

    APIResponse:{
        API1: 5000,
        API2: 5000,
        API8: 5000, // + 3000
        API9: 5000
    }

};

const timeout = config.browser?.timeout ?? 5000
console.log(10000)




// API collections available - Run - 10 API - All the 9 API provide with in 5ks, 8th API taking extra time - Additional timing -3000
