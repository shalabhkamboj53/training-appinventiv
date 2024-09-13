/*
    push

    push() method is used to add one or more elements to the end of an array.
*/
// let arr = [1, 2, 3, 4, 5];
// arr.push(6);
// console.log(arr);

/*
    pop

    pop() method is used to remove the last element from an array.
*/
// let arr = [1, 2, 3, 4, 5];
// let popElement = arr.pop();
// console.log("arr: ",arr);
// console.log("popElement: ",popElement);

/*
    shift

    shift() method is used to remove the first element from an array.
*/
// let arr = [1, 2, 3, 4, 5];
// let shiftElement = arr.shift();
// console.log("arr: ",arr);
// console.log("shiftElement: ",shiftElement);

/*
    unshift

    unshift() method is used to add one or more elements to the beginning of an array.
*/
// let arr = [1, 2, 3, 4, 5];
// arr.unshift(0);
// console.log(arr);

/*
    sort

    sort() method is used to sort the elements of an array in place and returns the sorted array.
    it also sorts the orignal array.
*/
// let arr = [3,2,4,5,1];
// let outputArr = arr.sort((a, b) => b-a);
// console.log("arr: ",arr);
// console.log("outputArr: ",outputArr);

/*
    reverse

    reverse() method is used to reverse the elements of an array.
    it also reverse the orignal array.
*/
// let arr = [1, 2, 3, 4, 5];
// let outputArr = arr.reverse();
// console.log("arr: ",arr);
// console.log("outputArr: ",outputArr);

/*
    indexOf

    it returns the first index at which a given element can be found in the array
    it returns -1 if element is not present.
*/
// let arr = [1, 2, 3, 4, 5];
// let index = arr.indexOf(3);
// console.log("index: ",index);

/*
    find

    it returns the first element in the array that satisfies the entered condition.
    it returns undefined if element is not present.
*/
// let arr = [1, 2, 3, 4, 5];
// let findElement = arr.find((element) => element === 3);
// console.log("findElement: ",findElement);

/*
    findIndex

    it returns the first index in the array that satisfies the given condition.
*/
// let arr = [1, 2, 3, 4, 5];
// let findIndex = arr.findIndex((element) => element === 3);
// console.log("findIndex: ",findIndex);

/*
    filter

    it returns an array of elements that satisfy the given condition.
    the new array is a subset of the original array.
*/
// let arr = [1, 2, 3, 4, 5];
// let filterArr = arr.filter((element) => element > 3);
// console.log("arr: ",arr);
// console.log("filterArr: ",filterArr);

/*
    map

    it returns a new array with the results of the function given on every element in the array.
    the new array has the same length as the original array.
*/
// let arr = [1, 2, 3, 4, 5];
// let mapArr = arr.map((element) => element * 2);
// console.log("arr: ",arr);
// console.log("mapArr: ",mapArr);

/*
    length

    it returns the length of the string.
*/
// let str = "hello";
// console.log(str.length);

/*
    charAt

    it returns the character at the specified index.
*/
// let str = "hello";
// console.log(str.charAt(1));

/*
    includes

    it returns true if the string contains the specified value, otherwise it returns false.
*/
// let str = "Hi there, I'm using JavaScript";
// console.log(str.includes("Hi"));

/*
    toUpperCase

    it returns the string in uppercase.
    the original string remains unchanged.
*/
// let str = "hello";
// console.log(str.toUpperCase());

/*
    toLowerCase

    it returns the string in lowercase.
    the original string remains unchanged.
*/
// let str = "YAMAHA FZS V3";
// console.log(str.toLowerCase());

/*
    substr

    it returns the part of the string between the start index and a number of characters after it.
    it do not accepts negative values.
*/
// let str = "appinventiv";
// let outputStr = str.substr(3, 6);
// console.log("str: ",str);
// console.log("outputStr: ",outputStr);


/*
    slice

    it returns the part of the string between the start index and a number of characters after it.
    it accepts negative values.
*/
// let str = "appinventiv";
// let outputStr = str.slice(3, -2);
// console.log("str: ",str);
// console.log("outputStr: ",outputStr);

/*
    replace

    it returns a new string with some or all matches of a pattern replaced by a replacement.
    the original string remains unchanged.
*/
// let str = "appinventiv";
// let outputStr = str.replace("app", "App");
// console.log("str: ",str);
// console.log("outputStr: ",outputStr);

/*
    split

    it splits a string into an array of substrings.
    it accepts a separator.
*/
// let str = "appinventiv is a eSolution company";
// let outputArr = str.split(" ");
// console.log("str: ",str);
// console.log("outputArr: ",outputArr);

/*
    join

    it joins all elements of an array into a string.
    it accepts a separator.
*/
// let arr = ["appinventiv", "is", "a", "eSolution", "company"];
// let outputStr = arr.join(" ");
// console.log("arr: ",arr);
// console.log("outputStr: ",outputStr);

/*
    concat

    it is used to join two or more strings.
    it returns a new string.
    the original strings remain unchanged.
*/
// let str1 = "appinventiv";
// let str2 = "is a eSolution company";
// let outputStr = str1.concat(" ", str2);
// console.log("str1: ",str1);
// console.log("str2: ",str2);
// console.log("outputStr: ",outputStr);

/*
    spread operator

    it is used to expand the elements of an array.
    it can be used to combine two or more arrays.
*/
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let outputArr = [...arr1, ...arr2];
// console.log("arr1: ",arr1);
// console.log("arr2: ",arr2);
// console.log("outputArr: ",outputArr);
