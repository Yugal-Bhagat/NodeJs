const mongoose = require("mongoose")
const connection = mongoose.connect("mongodb://127.0.0.1:27017/Storage")
const userSchema = mongoose.Schema({
   id:{type:Number,required:true},
   name:{type:String,required:true},
   city:{type:String,required:true}
})
const userModule = mongoose.model("users",userSchema)
module.exports = {connection,userModule}