/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here
function greet(name){
    console.log(`Hello, ${name}!`);
}

greet("Bernard")

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: function declarations are hoisted entirely much like a global variable. on the other hand, we assign a variable to a function which negates the whole hoisting process

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here
function calculateArea(length,width){
    return length*width;
}

console.log(calculateArea(1,2))

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: uses a function as a parameter or is passed as an argument in another function

//function greet(callback) {
    // Print a greeting message
  //  console.log("Hello, world!");
    // Call the callback function and pass a name as an argument
    //callback("Bing");
  //}
  

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here

function modifyArray(array,myFunc){
    return array.map(myFunc)
}

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
import {add,PI} from './mathUtils.js'
console.log(add(1,2),PI)

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
import isPalindrome from './isPalindrome.js'
console.log(isPalindrome("level"))

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: require function is used to import modules that are present inside node.js as a somewhat whole while in module.exports you get to filter out what is relevant
// it really depends on preference and what is more convenient for the programmer but also it depends on what the project requirement is
