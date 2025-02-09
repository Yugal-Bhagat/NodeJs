// const { stdin, stdout } = require("process")
// const readline = require("readline")
// const rl = readline.createInterface({
//     input:stdin,
//     output:stdout
// })
// rl.question("Enter first number : ",(num1)=>{
// rl.question("Enter Second number : ",(num2)=>{
//     const sum = Number(num1)+Number(num2)
//     console.log(`the sum of ${num1} and ${num2} is ${sum}`);
//     rl.close()
// })
// })


// const {argv} = require("process")
// const opration = argv[2]
// const val1 = +argv[3]
// const val2 = +argv[4]
// const add = ()=>{
//     return val1+val2
// }
// const sub = ()=>{
//     return val1-val2
// }
// const mul = ()=>{
//     return val1*val2
// }
// const div = ()=>{
//     return val1/val2
// }

// if(opration=="add"){
//   console.log(add());

// }
// else if(opration=="sub"){
//    console.log(sub());

// }
// else if(opration=="mul"){
//    console.log(mul());
// }
// else if(opration=="div"){
//   console.log(div()); 
// }
// else{
//     console.log("you choose  wrong operation");
// }


// const readline = require("readline")
// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// const add = (val1, val2) => {
//     return val1 + val2
// }
// const sub = (val1, val2) => {
//     return val1 - val2
// }
// const mul = (val1, val2) => {
//     return val1 * val2
// }
// const div = (val1, val2) => {
//     return val1 / val2
// }
// const calculator = () => {
//     r1.question("Enter the operation : ", (opr) => {
//         r1.question("enter value 1 : ", (num1) => {
//             r1.question("enter the value 2 : ", (num2) => {
//                 if (opr == "add") {
//                     console.log(add(+num1, +num2));
//                     calculator()
//                 }
//                 else if (opr == "sub") {
//                     console.log(sub(+num1, +num2));
//                     calculator()
//                 }
//                 else if (opr == "mul") {
//                     console.log(mul(+num1, +num2));
//                     calculator()
//                 }
//                 else if (opr == "div") {
//                     console.log(div(+num1, +num2));
//                     calculator()
//                 }
//                 else if (opr == "exit") {
//                     r1.close()
//                 }
//                 else {
//                     console.log("you will choose wrong operation");
//                     calculator()
//                 }
//             })
//         })
//     })
// }
// calculator()


const readline = require("readline")
const crypto = require("crypto")
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const operation = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    mul: (a, b) => a * b,
    div: (a, b) => (b !== 0) ? a / b : "can not divide by zero",
}
const generateRandom = () => {
    const val = crypto.randomInt(0, 10)
    return val
}
const calculator = () => {
    r1.question("Enter the operation (eg. add,sub,mul,div,random,exit): ", (opr) => {
        if (opr == "exit") {
            console.log("exiting the calculator !");
            return r1.close()
        } else if (opr == "random") {
            console.log(generateRandom());
            calculator()
        }
        r1.question("enter value 1 : ", (num1) => {
            r1.question("enter the value 2 : ", (num2) => {
                num1 = parseFloat(num1)
                num2 = parseFloat(num2)
                if (isNaN(num1) || isNaN(num2)) {
                    console.log("invalid number you take correct input ");
                    calculator()
                }
                else if (operation[opr]) {
                    console.log(`${operation[opr](num1, num2)}`);
                    calculator()
                }
                else {
                    console.log("you will choose wrong operation");
                    calculator()
                }
            })
        })
    })
}
calculator()