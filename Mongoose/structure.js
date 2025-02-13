const mongoose = require("mongoose")
const main = async () => {
    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/techProfile")
    console.log("database is connected");
    // 1. Create the data
    // await SModule.insertMany([{ name: "Yugal", age: 23, email: "yug@123" }, { name: "ram", age: 20, email: "ram@123" }, { name: "ravan", age: 13, email: "rav@123" }])
    // console.log("data added");

    // await SModule.insertMany({ name: "yugal", age: 12, email: "molo@gmail.com" })
    // console.log("data inserted");

    // const stData = new SModule({
    //     name: "radha",
    //     age: 20,
    //     email: "radha124@gamil.com"
    // })
    // await stData.save()

    // const stData = await SModule.create({
    //     name: "Krish", age: 20, email: "kri@gmail.com"
    // })
    // console.log(stData);

    // 2. read the database 
    // const data =await SModule.find()
    // console.log(data);

    // const data =await SModule.findOne()
    // console.log(data);

    // const data =await SModule.findOne({name:"radha"})
    // console.log(data);

    // const data = await SModule.findById("67ad8ed5bc9609250446be48").exec()
    // console.log(data);

    // 3. update the database
    // await SModule.updateOne({},{$set:{name:"Mugal"}})
    // console.log("data will updated!");
    // const data =await SModule.find()
    // console.log(data);

    // await SModule.updateOne({name:"ravan"},{$set:{name:"Lakshaman"}})
    // console.log("data will updated!");
    // const data =await SModule.find()
    // console.log(data);

    // await SModule.updateMany({age:20},{$set:{age:25}})
    // console.log("data will updated!");
    // const data =await SModule.find()
    // console.log(data);

    // 4. delete the database 
    // await SModule.deleteOne()
    // console.log("data is deleted");
    // const data =await SModule.find()
    // console.log(data);

    // await SModule.deleteOne({name:"yugal"})
    // console.log("data is deleted");
    // const data =await SModule.find()
    // console.log(data);

    await SModule.deleteMany({age:25})
    console.log("data is deleted");
    const data =await SModule.find()
    console.log(data);
    
    await mongoose.disconnect()
    console.log("database is disconnect");


}
main()
const stSchem = mongoose.Schema({
    name: String,
    age: Number,
    email: String
}, { versionKey: false })
const SModule = mongoose.model("teacher", stSchem)