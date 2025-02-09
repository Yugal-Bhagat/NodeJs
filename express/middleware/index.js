const express = require("express")
const app = express()
const PORT = require("../env.js")
const {first,second,third} = require('../middlewarechain/logger.middleware.js')

// app.use(first,second,third)
app.use(third,second,first)
app.get("/",(req,res,)=>{
    console.log("Home page");
    res.status(200).send("welcome to Home Page !")
})
app.listen(PORT,()=>{
    console.log(`server run on ${PORT}`);    
})