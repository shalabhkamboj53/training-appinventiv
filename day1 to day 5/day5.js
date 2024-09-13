/*
    Understand and implement Exceptional handling

    it is a mechanism to handle runtime errors
    try: block of code that may throw an exception
    catch: block of code that will be executed if an exception is thrown
    finally: block of code that will be executed after try and catch blocks
*/
// const func = () => {
//     try {
//         throw new Error('Error Occured');
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log('Finally block');
//     }
// }

// func();

/*
    Understand and implement functions and callbacks

    function: block of code that can be called by name
    callback: function that is passed as an argument to another function
*/
// const func = (callback) => {
//     callback();
// }

// const callback = () => {
//     console.log('Callback function');
// }

// func(callback);

/*
    Understand and implement Promises

    Promise: object that represents the eventual completion or failure of an asynchronous operation
    resolve: function that is called when the promise is resolved
    reject: function that is called when the promise is rejected
*/
// const func = () => {
//     return new Promise((resolve, reject) => {
//         resolve('Promise Resolved');
//     });
// }

// func().then((data) => {
//     console.log(data);
// })

/*
    Understand and implement Async/Await using sample fetch API

    async: function that returns a promise
    await: function that waits for the promise to be resolved
    fetch: function that is used to make network requests
*/
// const func = async () => {
//     try {
//         const response = await fetch('https://dummy-json.mock.beeceptor.com/todos');
//         const data = await response.json();
//         console.log("data: ", data);
//     }
//     catch (error) {
//         console.log(error);
//     }
//     finally {
//         console.log('Finally block');
//     }
// }

// func();

/*
    promise.any: function that returns a promise that resolves as soon as one of the promises in the iterable resolves
    promise.all: function that returns a promise that resolves when all of the promises in the iterable argument have resolved
    promise.allSettled: function that returns a promise that resolves after all of the given promises have either resolved or rejected
*/
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'one');
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'two');
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'three');
// });

// Promise.any([promise1, promise2, promise3]).then((value) => {
//     console.log(value);
// });

// Promise.all([promise1, promise2, promise3]).then((value) => {
//     console.log(value);
// });

// Promise.allSettled([promise1, promise2, promise3]).then((value) => {
//     console.log(value);
// });

