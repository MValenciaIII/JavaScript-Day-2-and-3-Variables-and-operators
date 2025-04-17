//? Variable Declarations
//! Legacy variable keyword
var age = 24;
//! "Blocked scoped" variable declaration
let name = "Margarito Valencia"
//! Constant declaration for variable that should not be updated
const isStudent = false;


//? Primitive Data Types
let temperature = 79.6; //* Number
let greeting = "Hello!"; //* String
let isLoggedIn = false; //* Boolean
let emptyValue = null; //* null
let notDefined; //*undefined

//? Basic setup for sending data to HTML console.
console.log("Hey Trey!");

console.log(isLoggedIn);

//? Arithmetic Operators
let numOne = 10;
let numTwo = 3;

let sum = numOne + numTwo;
console.log(sum); //13
let difference = numOne - numTwo;
console.log(difference) //7
let product = numOne * numTwo;
console.log(product) //30
let quotient = numOne / numTwo;
console.log(quotient); //3.3333335
let remainder = numOne % numTwo;
console.log(remainder); //1

//? Increment and Decrement
//* numOne = numOne + 1
numOne++; //11
console.log(numOne);
numOne--; //10
console.log(numOne);

//?Assignment Operators
let numThree = 5;

//? numThree = numThree + 2;
numThree += 2;
console.log(numThree);
numThree *= 3;
console.log(numThree);



//? Day 4: Combining Variables, data types, and Operators

//* Calcuating Total Price with Discounts

let originalPrice = 10;
let discountRate = 0.2;
let isMember = true;

//console.log(originalPrice)

let discountAmount = originalPrice * discountRate; //20
let discountedPrice = originalPrice - discountAmount //80
// console.log(discountedPrice)

//* Additional Discount for Members
if (isMember) {
    discountedPrice -= 10;
}


console.log("Discounted Price:", discountedPrice)

