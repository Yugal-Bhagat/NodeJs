const express = require("express")
const app = express()
const fs = require("fs")
// app.use((req,res,next)=>{
//     console.log("welcome to middle ware");
//     next()
//     console.log("good byy middle ware"); 
// })
// app.use((req,res,next)=>{
//     if(req.url=='/data'){
//         res.send("data page")
//     }
//     else{
//         console.log("error");
//     }
// })

// const timeLogger = (req, res, next) => {
//     // console.log("welcome to middle ware");
//     const startTime = new Date().getTime()
//     next()
//     const endTime = new Date().getTime()
//     console.log(`Time taken by ${req.url} rout is ${endTime - startTime}ms`);
// }
// app.use(timeLogger)

const routLogger = (req, res, next) => {
    const startTime = new Date().getTime()
    next()
    const endTime = new Date().getTime()
    console.log(`Rout url ${req.url} and method ${req.method} and Time taken by  rout is ${endTime - startTime}ms`);
    fs.appendFileSync('./logger.txt', `Rout url ${req.url} and method ${req.method} and Time taken by  rout is ${endTime - startTime}ms\n`)
}
app.use(routLogger)
app.get("/", (req, res) => {
    console.log("Home page");
    res.send("Home page")
})
app.get("/about", (req, res) => {
    console.log("About page");
    res.send("About page")
})
app.get("/data", (req, res) => {
    console.log("Data page");
    const data = fs.readFileSync('./data.json', "utf-8")
    res.send(data)
})
app.get("/contact", (req, res) => {
    console.log("Contact page");
    const data = fs.readFileSync('./data.json', "utf-8")
    res.send(data)
})
app.listen(3008, () => {
    console.log("successfully run the server port number 3008");

})