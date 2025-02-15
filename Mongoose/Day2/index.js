const express = require("express")
const { connection, userModel } = require("./db")
const app = express()
app.use(express.json())
app.get("/", (req, res) => {
    res.send({ mas: "welcome to homwe page" });
})
app.post("/register", async (req, res) => {
    try {
        const data = req.body
        const user = new userModel(data)
        await user.save()
        res.send({ msg: "data will added" })
    } catch (error) {
        res.send({ msg: error.message })
    }

})
app.patch("/update/:id",async(req,res)=>{
    const ID = req.params.id
    const payload = req.body
    console.log(ID,payload);
    
    try {
     await   userModel.findByIdAndUpdate({_id:ID},payload)
     res.send({msg:"updated data"})
    } catch (error) {
        res.send({msg:error.message})
    }
})
app.delete("/delete/:id",async(req,res)=>{
    const ID = req.params.id
    // const payload = req.body
    try {
     await userModel.findByIdAndDelete({_id:ID})
     res.send({msg:"deleted data "})
    } catch (error) {
        res.send({msg:error.message})
    }
})
app.get("/read", async (req, res) => {
    try {
        const data = await userModel.find();
        res.send({ data })
    } catch (error) {
        res.send({ msg: error.message })
    }
})
app.listen(3011, async () => {
    try {
        await connection
        console.log("connect to DB");
    } catch (error) {
        console.log(`con not connect to DB: ${error.message}`);
    }
    console.log("server is listening ");
})