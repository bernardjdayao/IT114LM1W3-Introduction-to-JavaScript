/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
console.log(numbers[0], numbers[4], numbers[numbers.length-1])

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
numbersCopy = [...numbers]
numbersCopy.sort()
for(let i = 0; i < numbersCopy.length; i++)
{
    let sum=0;
    sum+=numbersCopy[i];
    ave=sum/numbersCopy.length
}

console.log(numbersCopy[0],numbersCopy[numbersCopy.length-1],ave)

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: lists are mutable while arrays are not. the values inside a list are heterogenous while an arrays' have homogenous values

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here 
const IT114L = {
    courseCode: 1,
    name: "Joe",
    units: 3,
    numOfStuds: 40
}


// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
IT114L.prof="Job"
console.log(IT114L.prof)

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here
const IT114 = {
    courseCode: 1,
    name: "Joe",
    units: 3,
    numOfStuds: 40
}

array1=[IT114L,IT114]

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here

for(let units in array1){
    let x = units[array1[units]+=array1[units]]
    console.log(x);
}

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: objects in python are similar to dictionaries wherein a key is assigned in a value

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here 
numbersCopy=[...numbers]
numbersCopy.push(15)

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
console.log(...IT114L)
