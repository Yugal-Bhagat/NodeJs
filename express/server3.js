const express = require("express");
const { readFileSync, writeFileSync } = require("fs");
const port = 3003
const app = express()
// const { stdin, stdout, send } = require("process");
// const readline = require("readline")
// const rl = readline.createInterface({
//     input: stdin,
//     output: stdout
// })
const data = readFileSync('./data.json','utf-8')
const parsedata = JSON.parse(data)
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("welcome to home page")
})
app.get('/data',(req,res)=>{
    // res.json(parsedata)
    res.send(parsedata)
})
app.post('/addData',(req,res)=>{
    const tr = parsedata.teacher
    tr.push(req.body)
    // console.log(tr);
    // console.log(parsedata);
    writeFileSync("./data.json",JSON.stringify(parsedata))
    res.send(parsedata.teacher)
})
app.delete('/addData',(req,res)=>{
    const tr = parsedata.teacher
    tr.pop()
    writeFileSync("./data.json",JSON.stringify(parsedata))
    res.send(parsedata.teacher)
})


app.listen(port, (err) => {
    if (err) {
        console.log(`the error in program : ${err.message}`);
    }
    else {
        console.log(`the successfuly run the server on port : ${port}`);
    }
})


// rl.question("please enter the port number : ", (port) => {
//     app.listen(port, (err) => {
//         if (err) {
//             console.log(`the error in program : ${err.message}`);
//         }
//         else {
//             console.log(`the successfuly run the server on port : ${port}`);
//         }
//         rl.close()
//     })
// });