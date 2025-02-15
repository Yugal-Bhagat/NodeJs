const express = require("express")
const app = express()
app.use(express.json())
const { connection, userModule } = require("./db")
app.get("/", (req, res) => {
    res.send({ msg: "welcome to home page !" })
})
app.post("/addData", async (req, res) => {
    const data = req.body
    console.log(data);
    try {
        // const user =  new userModule(data)
        // await user.save()
        await userModule.insertMany(data)
        res.send({ msg: "data will inserted successfuly" })
    } catch (error) {
        console.log(error.message);
        res.send({ msg: error.message })
    }
})
app.patch("/update/:id", async (req, res) => {
    const ID = req.params.id
    const payload = req.body
    try {
        await userModule.findByIdAndUpdate({ _id: ID }, payload)
        res.send({ msg: "updated value " })
    } catch (error) {
        res.send({ msg: error.message })
    }
})
app.put("/updateAll", async (req, res) => {
    const payload = req.body
    try {
        await userModule.updateMany({}, payload)
        res.send({ msg: "all data will updated" })
    } catch (error) {
        res.send(error.message)
    }
})
app.delete("/delete/:id", async (req, res) => {
    try {
        const ID = req.params.id
        await userModule.findByIdAndDelete({ _id: ID })
        res.send({ msg: "deleted successfuly" })
    } catch (error) {
        res.send(error.message)
    }
})
app.get("/readDB", async (req, res) => {
    try {
        const data = await userModule.find()
        res.send(data)

    } catch (error) {
        res.send({ msg: error.message })
    }
})
app.listen(3013, async () => {
    try {
        await connection
        console.log("connection success");

    } catch (error) {
        console.log(error.message);
    }
    console.log("server is running on port number 3013");
})