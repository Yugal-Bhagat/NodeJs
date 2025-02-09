const express = require("express")
const studentRouter = express.Router();


studentRouter.get('/getStudentdata', (req, res) => {
    console.log("student home page ");
    res.send({ msg: "hello student how are you" })
})
studentRouter.post('/addstudent', (re1, res) => {
    console.log("student added data ");
    res.send({ msg: "the data of student added." })
})
module.exports = {studentRouter}