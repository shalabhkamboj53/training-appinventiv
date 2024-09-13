/*
    Assign Function of objects
    this is used to assign the properties of one object to another object
    it can be used to merge two objects
*/
// let obj = {
//     fname: "shalabh",
//     lname: "kamboj"
// }

// let obj2 = {
//     age: 22,
//     city: "ynr"
// }


// let obj3 = Object.assign(obj, obj2);
// console.log(obj3);

/*
    create an object
    it is used to create an object with the specified prototype object and properties
    this function returns the new object
*/
// let obj = {
//     fname: "shalabh",
//     lname: "kamboj"
// }

// let obj2 = Object.create(obj2);
// obj2.age = 23;
// console.log(obj2);

/*
    define properties
    it is used to define new or modify the existing properties of an object
    it takes three arguments
    it returns the object
    it can be used to define the properties of an object
*/
// let obj = {
//     fname: "shalabh",
//     lname: "kamboj"
// }

// Object.defineProperty(obj, 'age', {
//     value: 23,
// });

// console.log(obj.age);

/*
    Freeze and isFrozen
    it is used to freeze an object
    it takes an object as an argument
    it returns the frozen object
    it can be used to freeze the object
    it returns a boolean value
    it can be used to check whether an object is frozen or not 
*/
// let obj = {
//     fname: "shalabh",
//     lname: "kamboj"
// }

// Object.freeze(obj);
// obj.age = 23;
// console.log(obj);

// console.log(Object.isFrozen(obj));

/*
    Seal and isSeal
    it is used to seal an object
    it takes an object as an argument
    it returns the sealed object
    it can be used to seal the object
    it returns a boolean value
    it can be used to check whether an object is sealed or not
*/

// let obj2 = {
//     fname: "shalabh",
//     lname: "kamboj"
// }

// Object.seal(obj2);
// obj2.age = 23;
// console.log(obj2);

// console.log(Object.isSealed(obj2));

/*
    value
    it is used to return the values of an object
    it takes an object as an argument
    it returns an array of values
    it can be used to get the values of an object
*/
// let obj = {
//     fname: "shalabh",
//     lname: "kamboj"
// }

// let obj2 = Object.values(obj);
// console.log(obj2);

/*
    valueof
    it is used to return the primitive value of an object
    it takes an object as an argument
    it returns the primitive value of an object
    it can be used to get the primitive value of an object
*/
// let obj = ["shalabh", "kamboj"]
// let obj2 = obj.valueOf();
// console.log(obj2);

/*
    constructor
    it is used to return the constructor of an object
    it takes an object as an argument
    it returns the constructor of an object
*/
// let obj = {
//     fname: "shalabh",
//     lname: "kamboj"
// }

// let obj2 = obj.constructor;
// console.log(obj2);

/*
    Prevent Extensions
    it is used to prevent the addition of new properties to an object
    it takes an object as an argument
    it returns the object
    it can be used to prevent the addition of new properties to an object
    it can be used to check whether an object can be extended or not
*/
// let obj = {
//     fname: "shalabh",
//     lname: "kamboj"
// }

// Object.preventExtensions(obj);
// obj.age = 23;
// console.log(obj);

// console.log(Object.isExtensible(obj));

/*
    Prototype
    it is used to return the prototype of an object
    it takes an object as an argument
    it returns the prototype of an object
    it can be used to get the prototype of an object
*/
// let fun1 = function() {
//     this.fname = "shalabh";
//     this.lname = "kamboj";
// }

// fun1.prototype.age = 23;

// let obj = new fun1();

// console.log(obj.age);
// console.log(obj.fname);

/*
    __proto__

    it is used to return the prototype of an object
    it can be used to set the prototype of an object
    this is a getter and setter
    it can be used to get the prototype of an object
*/
// let obj = {
//     fname: "shalabh",
//     lname: "kamboj"
// }

// let obj2 = {
//     age: 23
// }

// obj.__proto__ = obj2;

// console.log(obj.age);
// console.log(obj.fname);