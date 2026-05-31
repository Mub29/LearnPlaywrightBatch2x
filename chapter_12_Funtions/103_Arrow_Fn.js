// Arrow Function (ES6)

// const greet = function (name1) {
//     return "Hi" + name1;
// }

// let r = greet("Pramod");
// console.log(r);

// const greet2 = (name1) => "Hi" + name1;
// let r2 = greet2("Pramod");
// console.log(r2);

// If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>
// 

const doubleIt = n => n * 2;
console.log(doubleIt(10));

const printIt = name => console.log(name);
printIt("Dutta");