/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
var x=7;
console.log(x)
// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let a=7;
// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const b=4;
a=b;
console.log(a,b)
//once const is set to a variable it cannot be changed

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: var and let are pretty much the same, it just varies when it is used in a function for example.
// the immediate scope of a var is the function body, the scope of let is the enclosing block, const unables the variable to be overwritten

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here

a=1;
d=2;
c=a+d;
console.log(c)

x=1;
y=2;
z=x+y;
console.log(c===z)


// Checkpoint 1.2 What operators did you use?
// Answer: I used addition(+) and comparison operator(===)
// Your code here

a=1;
d=2;
c=a+d;
console.log(c)

x=1;
y=2;
z=x+y;
console.log(c===z)

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
let mystring="alpha";
mystring+="bet";
console.log(mystring)

// Checkpoint 1.3 What operators did you use?
// Answer: I used concatenation (+)

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
const o1 = true || true;
console.log(o1)
// Checkpoint 1.4 What operators did you use?
// Answer: i used logical or (||)


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
console.log(0 in trees)

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer:  it depends on the code but essentially the programmer is trying to give [] a truth-y value but must also consider that this could be transitive and can lead to confusion
// Your code here
mylist = []
mylist == false;
console.log([]==true)


