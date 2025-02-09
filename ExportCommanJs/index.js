console.log("hello");
let names = 'yugal'
console.warn(`Radhe Radhe ${names} 🌸✨!!`)
console.log(`Radhe Radhe ${names} 🌸✨!!`)
console.error(new Error("if you don't show radhe radhe god is panished you !!"));

// const app = require("./app.js"); // Use "./" to refer to the current directory
// // console.log(app(5,4));  // 1st way 
// console.log(app.sub(5,6));  // 2nd way

const {add,sub,multi,PI} = require("./app")    // 3rd way
console.log(add(4,5));
console.log(sub(5,4));
console.log(multi(4,5));
console.log(PI);




// console.log({add,sub,multi,PI} );
