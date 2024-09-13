/*
    let

    let is a block-scoped variable
    let is not hoisted
    let can be reassigned
    let can be redeclared
*/
// let a = 5;
// let b = 10;

// if (a < b) {
//     let a = 10;
//     let b = 5;
//     console.log("inner: ", a);
//     console.log("inner: ", b);
// }

// console.log("outer: ", a);
// console.log("outer: ", b);


/*
    var

    var is a function-scoped variable
    it is hoisted
    it can be reassigned
    it can be redeclared
*/
// var a = 5;
// var b = 10;

// if (a < b) {
//     var a = 10;
//     var b = 5;
//     console.log("inner: ", a);
//     console.log("inner: ", b);
// }

// console.log("outer: ", a);
// console.log("outer: ", b);

/* 
    const

    it is a block-scoped variable
    const is not hoisted
    it cannot be reassigned
    it cannot be redeclared
    it is immutable
*/
// const a = 5;

// if (a < 10) {
//     const a = 10;
//     console.log("inner: ", a);
// }

// console.log("outer: ", a);

/* 
    for

    for loop is used to iterate over an array, object or string
    we can use break to stop the loop
    we can use continue to skip the current iteration
    we can use nested for loop
    we need to provide the condition to stop the loop
    we need to provide the increment or decrement value
*/
// let a = [1,2,3,4,5]

// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }

/*
    forin

    for in loop is used to iterate over an object, array or string
    we can use break to stop the loop
    we can use continue to skip the current iteration
    we can use nested for in loop
    it returns the index of the object
    it operates on an object for each element
*/
// let a = [1,2,3,4,5]

// for (const i in a) {
//     console.log(i);
// }

/*
    forof 

    for of loop is used to iterate over an array, object or string
    we can use break to stop the loop
    we can use continue to skip the current iteration
    we can use nested for of loop
    it returns the value of the object
    it operates on an object for each element
*/
// let a = [1,2,3,4,5]

// for (const value of a) {
//     console.log(value);
// }

/*
    foreach

    it is used to iterate over an array
    it is a higher order function
    it is a method of an array
    it takes a callback function
    it returns undefined
    break and continue cannot be used
*/
// let a = [1,2,3,4,5]

// a.forEach((value, index) => {
//     a[index] = value * 2;
// })

// console.log(a);

/*
    while

    while loop is used to iterate over an array, object or string
    we can use break to stop the loop
    we can use continue to skip the current iteration
    we need to provide the condition to stop the loop
    while loop is used when we don't know the number of iterations
    while loop is used when we know the condition to stop the loop
*/
// let a = [1,2,3,4,5]

// while (a.length > 0) {
//     console.log(a.pop());
// }

/*
    do while

    do while loop is used to iterate over an array, object or string
    we can use break to stop the loop
    we can use continue to skip the current iteration
    we need to provide the condition to stop the loop
    to be executed when we don't know the number of iterations
    it is used when we know the condition to stop the loop
    execute the code at least once
*/
// let a = [1,2,3,4,5]

// do {
//     console.log(a.pop());
// } while (a.length > 0);

/*
    map

    it is used to iterate over an array
    it is a higher order function
    it is a method of an array
    it takes a callback function
    map returns a new array
    break and continue cannot be used
*/
// let a = [1,2,3,4,5]

// let b = a.map((value, index) => {
//     return value * 2;
// })

// console.log("a: ", a);
// console.log("b: ", b);

/*
    filter

    it is used to iterate over an array
    filter is a higher order function
    it is a method of an array
    it takes a callback function
    filter returns a new array
    break and continue cannot be used
    filter returns the elements that satisfy the condition
*/
// let a = [1,2,3,4,5]

// let b = a.filter((value, index) => {
//     return value > 3;
// })

// console.log("a: ", a);
// console.log("b: ", b);

/*
    reduce

    reduce is used to iterate over an array
    it is a higher order function
    reduce is a method of an array
    it takes a callback function
    reduce returns a single value
    break and continue cannot be used
    it returns the accumulated value
*/
// let a = [1,2,3,4,5]

// let b = a.reduce((prev, curr) => {
//     return prev + curr;
// })

// console.log("a: ", a);
// console.log("b: ", b);

/*
    find

    find is used to iterate over an array
    find is a higher order function
    it is a method of an array
    it takes a callback function
    it returns a single value
    break and continue cannot be used
    find returns the first element that satisfy the condition
*/
// let a = [1,2,3,4,5]

// let b = a.find((value, index) => {
//     return value > 3;
// })

// console.log("a: ", a);
// console.log(" b: ", b);

/*
    findIndex

    it is used to iterate over an array
    it is a higher order function
    it is a method of an array
    it takes a callback function
    it returns a single value
    break and continue cannot be used
    findIndex returns the index of the first element that satisfy the condition
*/
// let a = [1,2,3,4,5]

// let b = a.findIndex((value, index) => {
//     return value == 3;
// })

// console.log("a: ", a);
// console.log("b: ", b);

/*
    sort

    it is used to iterate over an array
    sort is a higher order function
    it is a method of an array
    it takes a callback function
    it returns a new array
    break and continue cannot be used
    it returns the sorted array
    it can be used to sort the array in ascending or descending order
*/
// let a = [5,2,3,4,1]

// let b = a.sort((a, b) => {
//     return a - b;
// })

// console.log("a: ", a);
// console.log("b: ", b);

/*
    slice

    it is used to iterate over an array
    it is a method of an array
    it takes two arguments
    it returns a new array
    break and continue cannot be used
    slice returns the sliced array
    difference between slice and splice is that slice does not modify the original array and splice modifies the original array
*/
// let a = [5,2,3,4,1]

// let b = a.slice(1, 3);

// console.log("a: ", a);
// console.log("b: ", b);

/*
    splice

    it is used to iterate over an array
    it is a method of an array
    it takes two arguments
    it returns a new array
    difference between slice and splice is that slice does not modify the original array and splice modifies the original array
    it can be used to add or remove elements from the array
    it modifies the original array
    it returns the removed elements
    first argument is the index
    second argument is the number of elements to remove
    third onwards arguments are the elements to add in place of arg 1
*/
// let a = [1,2,3,4,5]

// let b = a.splice(2, 1, 6,7);

// console.log("a: ", a);
// console.log("b: ", b);

/*
    concat

    concat is used to iterate over an array
    it is a method of an array
    it takes an array as an argument
    it returns a new array
    it returns the concatenated array
    it does not modify the original array
*/
// let a = [1,2,3,4,5]

// let b = a.concat([6,7,8]);

// console.log("a: ", a);
// console.log("b: ", b);

/*
    reverse

    reverse is used to iterate over an array
    it is a method of an array
    it takes no argument
    it returns a new array
    it returns the reversed array
    it modifies the original array
*/
// let a = [1,2,3,4,5]

// let b = a.reverse();

// console.log("a: ", a);
// console.log("b: ", b);

/*
    split

    split is used to iterate over a string
    it is a method of a string
    it takes a string as an argument
    it returns a new array
    it returns the splitted array
    it does not modify the original string
*/
let a = "hello world";

let b = a.split(" ");

console.log("b: ", b);