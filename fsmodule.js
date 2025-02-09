// const fs = require("fs")
// const path = require("path")
// // fs.writeFileSync("demo.txt","contains Demo Data in which tou will ")

// const fileName ="test.txt"
// const filePath = path.join(__dirname,fileName)
// console.log(__dirname);
// fs.writeFileSync(filePath,"this is fa module data in this file ")

// const readData = fs.readFileSync(filePath,"utf-8")
// console.log(readData);
// // console.log(readData.toString());

//  // file are exist then append data and not exist create file then append data 
// const appenFile = fs.appendFileSync("demo.txt","this is another dta again \n") 

// const fileDelete = fs.unlinkSync(filePath)
// console.log(fileDelete);

// const newUpdate = "newFile.txt"
// const newfilePath = path.join(__dirname,newUpdate)
// fs.renameSync("demo.txt",newfilePath)


import fs from 'fs/promises'
const wite=async()=>{
try {
    await fs.writeFile("./test.txt","hello bhai sahab kaise ho ")  
} catch (error) {
    console.log(error); 
}
}
// wite()
const append=async()=>{
try {
   await fs.appendFile("./test.txt",'\nradhe radhe')  
  
} catch (error) {
    console.log(error); 
}
}
// append()
const read=async()=>{
try {
  const data=  await fs.readFile("./test.txt",'utf8')  
  console.log(data);
  
} catch (error) {
    console.log(error); 
}
}
// read()
const rename=async()=>{
try {
   await fs.rename("./test.txt",'./newdata.txt')  
  
} catch (error) {
    console.log(error); 
}
}
// rename()
const deletes=async()=>{
try {
   await fs.unlink('./newdatas')  
  
} catch (error) {
    console.log(error); 
}
}
// deletes()

