const express = require("express")
const app = express()
app.use(express.json()) // middleware
app.get("/",(req,res)=>{
    res.send("welcome to today class !")
})
app.post("/",(req,res)=>{
    console.log(req.body);
    res.send("welcome to data Post")
})
app.listen(2050,()=>{
    console.log("successfuly run port 2050");
})
