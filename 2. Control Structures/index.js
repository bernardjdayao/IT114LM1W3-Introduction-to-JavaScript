/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here
{
    if(randomNumber>=50){
        console.log("More than fifty")
    }
    else {
        console.log("Less than 50")
    }
}

// TODO 2.2 Display whether the random number is odd or even
// Your code here

{
    if(randomNumber % 2 === 0) {
        console.log("Even")
    }
    else {
        console.log("Odd")
    }
}

// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here

{
    if(randomNumber % 3 === 0) {
        console.log("fizz")
    }
    else if(randomNumber % 5 === 0) {
        console.log("buzz")
    }
    else if(randomNumber % 3 === 0 && randomNumber % 5 === 0) {
        console.log("fizzbuzz")
    }
    else {
        console.log(randomNumber)
    }
}

let toDisplay = ""
// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here
console.log(randomNumber % 2 === 0 ? "Even" : "Odd");

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: Switch statements is almost the same as the if-else statements but in the switch statements you are comparing the labels. 

// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10
// Your code here

for (let i = 0; i < n; i++) {
    console.log(i+1)
}

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here
let index = 0;
while (index < list.length) {
    console.log(list[index])
    index++;
}

// Checkpoint 2.3 How would you simulate a do-while loop in JavaScript
// Answer: 

let index2 = 0;
do {
    console.log(list[index2])
    index2++;
} while (index2 < 5)

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here

for (const element of list) {
    console.log(element);
  }

// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here

for (const fruit in list) {
    console.log(list[fruit])
}

// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here

list.forEach((element) => console.log(element));

// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: The for each loops is ideal for iterating arrays. for in iterates over object properties it is not suitable for iterating through arrays or iterable objects
//for of Tailored for iterating through iterable objects ensures a clean and straightforward syntax does not work with object properties.

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing


const quotient = numerator / denominator;

try {
    let n = 5;
    let d = 0;
    let q = n/d;
    if(d == 0){
        throw Error
    }
} catch(error){
    console.log("Error")
}
