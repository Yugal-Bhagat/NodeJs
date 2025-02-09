const { add, sub, mul, div } = require("./operation")
const process = require("process")
// console.log(process);

const { argv } = require("process")
// console.log(argv);
const op = argv[2]
const x = +argv[3]    // for string to number convert
const y = Number(argv[4])    // for string to number convert

if (op == "add") {
    add(x, y)
}
else if (op == "sub") {

    sub(x, y)
}
else if (op == "mul") {
    mul(x, y)
}
else if (op == "div") {
    div(x, y)
}
