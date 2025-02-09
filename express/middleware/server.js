const express = require("express")
// const cors = require("cors")
const { studentRouter } = require("./routs/student.route.js")
const { teacherRouter } = require("./routs/teacher.route.js")
const path = require("path")
const app = express()
const PORT = require("../env.js")
// app.use(cors())

// conect frantend in backend file 
// app.use(express.static("frantendBackend"))  // name of folder in which contain your only frantend code 
const frantFolder = path.join(__dirname,"frantendBackend")
app.use(express.static(frantFolder))  // name of folder in which contain your only frantend code 
app.use("/student", studentRouter)
app.use("/teacher", teacherRouter)

const file = path.join(__dirname,"frantendBackend/index.html")
app.get('/', (req, res) => {
    console.log("home page");
    res.send(file)
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})