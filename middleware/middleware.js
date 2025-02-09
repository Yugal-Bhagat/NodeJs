const express = require('express')
const app = express()
const fs = require("fs")
const { userInfo } = require('os')
// const middleware =(req,res,next)=>{
//     if(req.url=='/'){
//         console.log("home page");  
//     }else if(req.url=='/data'){
//         console.log("data page ");
//     }
//     else if(req.url=='/about'){
//         console.log("About page");
//     }
//     else{
//         console.log("error : this is not correct route");
//         res.send({success:false,msg:"url not found"})
//     }
//     next()
//     console.log("good byy have a nice day");   
// }
// app.use(middleware)
let count = 1
const routeLogger = (req, res, next) => {
    const sTime = new Date().getTime()
    next()
    const eTime = new Date().getTime()
    console.log(`${count++} the route url is ${req.url} and route method ${req.method} so taken time is ${eTime - sTime}ms`);

    fs.appendFileSync("./logger.txt", `the route url is ${req.url} and route method ${req.method} so taken time is ${eTime - sTime}ms\n`)
}
app.use(routeLogger)


app.get('/', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))
    res.send(data)
})

app.get("/data", (req, res) => {
   const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))
    res.send(data[0])
})

app.get("/about", (req, res) => {
    res.send("About page")
})
app.listen(3009, () => {
    console.log("the server successfully run on the port number 3009");

})