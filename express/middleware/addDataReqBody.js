const express = require("express")
const app = express()
const port = require("../env.js")
app.use(express.json());
app.use((req, res, next) => {
    // req.body.stamp = "Radhe Radhe Radhe"
    req.body.obj = {
        id: 1,
        name: "yugal",
        age: 20,
        city: "Bhopal"
    }
    next()
})
app.get("/", (req, res) => {
    console.log("home page");
    res.send("home page ")

})
app.post("/addData", (req, res) => {
    console.log(req.body);
    console.log("hello");
    res.send("add data ")
})
app.listen(port, () => {
    console.log(`the port is running on ${port}`);

})