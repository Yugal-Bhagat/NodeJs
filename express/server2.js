const express = require("express")
const app = express()
const fs = require('fs')

app.get("/", (req, res) => {
    res.send("welcome to home page ")
})
app.use(express.json())
app.get("/data", (req, res) => {
    const data = fs.readFileSync("./data.json", "utf-8")
    res.send(data)
})
app.get("/getstudentdata", (req, res) => {
    const data = fs.readFileSync("./data.json", "utf-8")
    const parsedata = JSON.parse(data)
    console.log(parsedata.student);

    res.send("got the data ")
})
app.get("/getteacherdata", (req, res) => {
    const data = fs.readFileSync("./data.json", "utf-8")
    const parsedata = JSON.parse(data)
    console.log(parsedata.teacher);
    res.send("got the data ")
})
app.post("/getdata", (req, res) => {
    const data = fs.readFileSync("./data.json", "utf-8")
    const parsedata = JSON.parse(data)
    const st = parsedata.student
    console.log(st.push(req.body));
    console.log(st);
    console.log(parsedata);
    fs.writeFileSync("./data.json", JSON.stringify(parsedata))
    res.send("the data will added successfully")
})
app.delete("/deletedata", (req, res) => {
    const ip = req.body
    const data = fs.readFileSync("./data.json", "utf-8")
    const parsedata = JSON.parse(data)
    const result = parsedata.student.filter((ele) => ele.name != ip.name)
    parsedata.student = result
    console.log(result);
    // console.log(st);
    // console.log(parsedata);
    fs.writeFileSync("./data.json", JSON.stringify(parsedata))
    res.send("the data will added successfully")
})
app.listen(3002, (err) => {
    console.log("succesfully run the port number 3002");

})