const express= require("express") 
const app = express()
const cors = require("cors")
const PORT = require("../../env.js")
const {studentRouter} = require("../routs/student.route.js")
const {teacherRouter} = require("../routs/teacher.route.js")
app.use(cors())
app.use("/student",studentRouter)
app.use("/teacher",teacherRouter)
app.get("/",(req,res)=>{
res.send("welcome to Home Page")
})
app.listen(PORT,()=>{
    console.log(`the server is runnig on the ${PORT}`);
    
})