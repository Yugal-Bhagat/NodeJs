const expres = require("express")
const teacherRouter = expres.Router()

teacherRouter.get('/getTeacherdata', (req, res) => {
    console.log("teacher home page");
    res.send({ msg: "hello teacher how are you" })
})
teacherRouter.post('/addteacher', (re1, res) => {
    console.log('teacher added data');
    res.send({ msg: "the data of teacher added." })
})
module.exports = {teacherRouter}