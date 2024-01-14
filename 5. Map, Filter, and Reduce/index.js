/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 4.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
const squared = numbers.map(item=>item*item)

// TODO 4.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
const even = numbers.map(item=>item%2===0)

// TODO 4.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
const sum = numbers.reduce(function(result,item){
    sum=result+=item;
    return sum
},0)

// TODO 4.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here
const upper = words.map(item=>item.toUpperCase())

// TODO 4.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
const fourLet = words.filter(item=>item.length>4)
// TODO 4.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
const mix=words.reduce(function(word1,word2){
    mix=word1+word2;
    return mix
})

// Checkpoint 4.1 Summarize what map, filter, and reduce do
// Answer: map is used for transforming each element of an array by applying a provided function. filter is used for transforming each element of an array by applying a provided function. reduce is used for transforming each element of an array by applying a provided function.