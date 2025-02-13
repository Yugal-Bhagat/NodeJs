const mongoose = require("mongoose")
const main=async()=>{
await mongoose.connect("mongodb://127.0.0.1:27017/techProfile")
console.log("database is connected");

 const st = new StModule({
    name:"yugal",
    age:25,
    city:"blp",
    // local:"tek"
    
 })
 await st.save();

 const data = await StModule.find()
 console.log(data);
//  await StModule.deleteMany()
//  console.log("daleted data");
 
await mongoose.disconnect()
console.log("data is disconnected");

}
main()
const stSchem = mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    city:{type:String,required:true}
})

const StModule = mongoose.model("teacher",stSchem)
