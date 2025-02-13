const mongoose = require("mongoose")

// connection 
const main =async()=>{
const conection =await mongoose.connect("mongodb://127.0.0.1:27017/stProject")
console.log("connected to mongo");
/* await StModel.insertMany({name:"yugal",age:12,city:"bpl"})
console.log("data inserted");

const st = new StModel({
    name:"aman",
    age:13,
    city:"ram"
})
await st.save()
*/
/* const data = await StModel.find()
console.log(data);
console.log("data is reading");
*/
/*await StModel.updateOne({name:"radhe"},{$set:{name:"aman"}})
const data = await StModel.find()
console.log(data);
console.log("data is update");
*/
/*
await StModel.deleteOne({name:"radhe"})
const data = await StModel.find()
console.log(data);
console.log("data is deleted");
*/
// const st = new StModel({
//     name:"syam",
//     age:19,
//     city:"multai",
//     location:"MP"
// })

const st = new StModel({
    name:"lilte",
    age:29
})
st.save()
const data =await StModel.find()
console.log(data);
console.log("data will added ");

 await mongoose.disconnect()
console.log("disconnected to mongo");
}
main()
const stSchema = mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    city:{type:String,required:true}
},{versionKey:false})
const StModel = mongoose.model("student",stSchema)