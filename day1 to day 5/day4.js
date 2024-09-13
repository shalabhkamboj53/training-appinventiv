/*
    Function keyword
    function keyword is used to define a function in JavaScript.
    It is a block of code that performs a specific task.
    function keyword is followed by the function name.
*/
// function add(a, b) {
//     return a + b;
// }
// console.log(add(2, 3));

/*
    Arrow function
    Arrow function is a shorter way to write a function in JavaScript.
    It is also known as fat arrow function.
    It uses => syntax.
*/
// const add = (a, b) => a + b;
// console.log(add(2, 3));

/*
    closure 
    A closure is a function that has access to the outer function's variables.
    A closure is created when an inner function is returned from the outer function.
*/
// function outer() {
//     let a = 10;
//     function inner() {
//         console.log(a);
//     }
//     return inner;
// }

// let innerFn = outer();
// innerFn();

/*
    Currying
    Currying is a technique of evaluating a function with multiple arguments into a sequence of functions with a single argument.
    It is a way of constructing functions that allows partial application of a function's arguments.
*/
// function multiply(a) {
//     return function(b) {
//         return a * b;
//     }
// }

// let multiplyBy2 = multiply(2);
// console.log(multiplyBy2(3));

/*
    Destructuring
    Destructuring is a way to unpack values from arrays, or properties from objects, into distinct variables.
    it is used to extract data from arrays and objects.
*/
// let arr = [1, 2, 3];
// let [a, b, c] = arr;
// console.log(a, b, c);

// let obj = {
//     name: 'John',
//     age: 25
// }

// let {name, age} = obj;
// console.log(name, age);

/*
    hoisting
    it is a mechanism where variables and function declarations are moved to the top of their scope before the code execution.
    JavaScript hoists the declaration of a variable but not the initialization.
    Hoisting applies to variable declarations and function declarations.
    let and const are hoisted but not initialized.
*/
// console.log(x);
// var x = 10;

// let y = 20;
// console.log(y);

// if (true) {
//     var z = 30;
// }
// console.log(z);

/*
    scope
    Scope determines the accessibility of variables in JavaScript.
    JavaScript has function scope.
    Variables defined inside a function are not accessible from outside the function.
    let and const have block scope.
*/
// function fun1() {
//     let message1 = 'Hello';
//     console.log(message1);
// }
// fun1();
// console.log(message1);

/*
    this keyword using function keyword
    it refers to the object it belongs to.
    it has different values depending on where it is used.
    it provides a way to access the object properties and methods.
*/
// function fun() {
//     console.log(this);
// }
// fun();

/*
    this keyword using arrow function
    Arrow functions do not have their own this.
    They inherit the this value from the enclosing scope.
    Arrow functions are not suitable for defining object methods.
*/
// let fun1 = () => {
//     console.log(this);
// }
// fun1();
