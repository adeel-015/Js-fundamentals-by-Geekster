// HoF
// Passing a function as an argument

// function getCapture(capture){
//     capture();
// }

// getCapture(function () {
//     console.log("I'm captured!");
// })

// Returning a function as an argument

// function getFunction(){
//     return function() {
//         console.log("Hi there!");
//     }
// }

// let rf = getFunction();

// rf();

// function calculate(operation, initialNumber, numbers){
//     let total = initialNumber;
//     for (const num of numbers){
//         total = operation(total, num);
//     }
//     return total;
// }

// function add(n1, n2){
//     return n1 + n2;
// }

// function multiply(n1, n2){
//     return n1 * n2;
// }

// console.log(calculate(add, 0, [1,2,3])); 

// let sum = (a,b) => a+b;

// console.log(sum(10,20));

// --> IIFE (Immediately Invoke Function Expression)

// (function sum(){
//     console.log(10+40);
// }())

// --> IIFE (Immediately Invoke Function Expression) via arrow function

// (() => {
//     console.log(10+60);
// })()

var a = 10;

(function (a){
    a = 50;
    console.log(a);
}())

console.log(a);