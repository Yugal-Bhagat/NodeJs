const express = require("express")
const app = express()
// app.use((req,res,next)=>{
//     console.log("1");
//     next()
//     console.log("2");
    
    
// })
// app.use((req,res,next)=>{
//     console.log("3");
//     next()
//     console.log("4");
    
    
// })
// app.use((req,res,next)=>{
//     console.log("5");
//     next()
//     console.log("6");  
    
// })

// middleware chain in other file
// type of middle ware := 1.core middle ware (in built middleware) 2. local middle ware (custom) 3. external(community) 
// CORS

const first = (req,res,next)=>{
    console.log("1");
    next()
    console.log("2");  
    
}
const second = (req,res,next)=>{
    console.log("3");
    next()
    console.log("4");  
    
}
const third = (req,res,next)=>{
    console.log("5");
    next()
    console.log("6");  
    
}
app.use(first,third,second)
app.get('/', (req, res) => {
 console.log("home page");
    res.send("home page")
})

app.listen(3008,()=>{
    console.log("port is succefuly");
    
})