const mongoose = require("mongoose")
const connection = mongoose.connect("mongodb://127.0.0.1:27017/DataStore")

const userSchma = mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    city:{type:String,required:true},
    language:{type:String,required:true},
    is_active:{type:String,required:true}
})

const userModel = mongoose.model("user",userSchma)
module.exports={connection,userModel}