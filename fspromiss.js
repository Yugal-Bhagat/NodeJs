const { log } = require('console');
const fs = require('fs');
const path = require("path")
const fileName = "demos.txt"
const filePath = path.join(__dirname,"demoPromises.txt")

fs.promises
.readdir(__dirname,"utf-8")
.then((data) => console.log(data))
.catch((err) => console.error(err))

// fs.promises
// .writeFile(filePath,"this add new data from in the file !")
// .then(console.log("the file successfully created so on"))
// .catch((err)=> console.error(err))

fs.promises
.readFile("demos.txt","utf-8")
.then((data) => console.log(data))
.catch((err) => console.error(err))

fs.promises
.appendFile(filePath,"\nupdate new data and information in this perticular file .")
.then(console.log("successfully append file in which the perticular file !"))
.catch((err)=>console.error(err))

// fs.promises
// .unlink(filePath)
// .then(console.log("successfully delete the file in the file "))
// .catch((err)=>console.log(err))