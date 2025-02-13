const mongoose = require("mongoose")
const main = async () => {

    // this is the connected to the database
    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/")
    console.log("Database well connected !");
    // this is disconnect the database
    await mongoose.disconnect();
    console.log("database will disconnect");

}
main();