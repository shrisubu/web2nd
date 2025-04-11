/* functions in javaScript

// function declaration

function greet(){
    console.log("Hello JS");
}
greet(); // function calling 

// function with parameters
(
function calculation(a = 7, b = 8){
    var c = a*b;
    console.log(c);
} 
)();
(
// function with default parameter
function calculation(a=4, b=8){
    var c=a*b;
    console.log(c);
}
)();

// calling a function
function cal(a,b){
    return{
        add:()=> console.log(a+b),
        mul:()=>console.log(a*b)
    };
};
let res=cal(5,7);
res.add();
res.mul();

// Average using functions

function onePlusAvg(a,b,c){
    return Math.round(1 + (a+b+c)/3)
}

let a = 1;
let b = 2;
let c = 3;

console.log("One plus Average of a, b and c is: ", onePlusAvg(a,b,c))

// Sum

const sum = (p, q)=>{
    return p+q
}
console.log(sum(9, 7))

// Anonymous functions
// Basic or normal function

function demo(){

}
demo();

// Another way to declare the function

// let demo = function(){

//}
//demo();

// Another way using arrow function

let demo = ()=>{

}
demo();

// Arrow function - single line statement

let demo = ()=>{
    console.log("Hllo JS");
}
demo();

// Arrow function - multiline statement with parameters

let demo=(a,b)=>{
    let c=a+b;
    console.log('Addition of two number is ${c}');
}
demo(3,5);  

// Callback functions:- 

let display = function(){
    console.log("Hello JavaScript");
}

setTimeout(display, 2000);  

// WAP to get the result of the addition of prime numbers from 1 to 100 and display after 3 seconds.

// Function to check if a number is prime

function isPrime(num) {
    if (num <= 1) return false;   // Numbers less than or equal to 1 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;    // If divisible by any number other than 1 and itself, it's not prime
    }
    return true;
}   

// Function to calculate the sum of prime numbers from 0 to 100

function sumOfPrimes() {
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}  
    
// Set a 3-second delay to display the result

setTimeout(() => {
    const result = sumOfPrimes();
    console.log(The sum of prime numbers from 0 to 100 is: ${result});
}, 3000);   // 3000 milliseconds = 3 seconds    */

// INNER FUNCTIONS 

function add(a,b){
    var c=a+b;
    console.log("Addition of a and b is " + c);

    return function(d){
        var e =c * d;
        console.log("Multiplication of c and d is " + e);
    }
}
var multiply = add(3,5); // add() runs and returns the inner function
multiply(10);  // now we use the closure