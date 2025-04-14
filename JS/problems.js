//!Day 2 

//! Problem 1 Variable Declarations
var age = 24;

let firstName = "Margarito"

const isStudent = false;

console.log(firstName, age, isStudent);

//! Problem 2 Exploring Data Types

let temperature = 78.8;
let greeting = "Hello World!"
let isLoggedIn = false;
let emptyValue = null;
let notDefined;
let uniqueId = Symbol("id");

console.log(typeof temperature);
console.log(typeof greeting);
console.log(typeof isLoggedIn);
console.log(typeof emptyValue);
console.log(typeof notDefined);
console.log(typeof uniqueId);

//! Problem 3 Variable Scope


function displayAge() {
    let localAge = 24;
    console.log("Local Age:", localAge)
}

displayAge();
console.log("Global Age:", age);


//!Day 3

//! Problem 1

let num1 = 4;
let num2 = 8;

// let sum = num1 + num2;

// console.log(sum);
console.log("Sum: ", num1 + num2);
console.log("Difference", num1 - num2);
console.log("Product", num1 * num2);
console.log("Quotient", num1 / num2);
console.log("Remainder", num1 % num2);
num1++
num2--
console.log("Increment", num1);
console.log("Decrement", num2);

//! Problem 2
let score = 50;

score += 25;
score *= 2;
score -= 30;

console.log("Final Score: ", score);

//! Problem 3 
let a = 16;
let b = '10';

console.log(a == b);
console.log(a === b);
console.log(a > 5 && a < 15);

