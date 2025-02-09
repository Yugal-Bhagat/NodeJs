// const fs = require("fs")
// const { stdin, stdout } = require("process")
// const readline = require("readline")
// const rl = readline.createInterface({
//     input:stdin,
//     output:stdout
// })
// const createFile = ()=>{
//     rl.question("Enter the file name: ", (file)=>{
//         rl.question("Please Enter the content inside the file : ",(content)=>{
//             fs.writeFile(`${file}.txt`,content,(err)=>{
//                 if(err){
//                     console.error(`in which something is wrong : ${err.message}`);
//                 }
//                 else{
//                     console.log(`The file ${file}.txt created successfuly.`);
//                 }
//                 rl.close()
//             })
//         })
//     })
// }
// createFile()

const { argv } = require("process")
const fs = require("fs")
const arr = argv.splice(2);
const opr = arr[0]
const file = arr[1]
console.log(opr, file);
const readFile = (file) => {
    try {
        return fs.readFileSync(`${file}`, 'utf-8')
    }
    catch (err) {
        console.log(err);
    }
}

const createFile = (file) => {
    return fs.writeFileSync(`${file}`, '')
}

const deleteFile = (file) => {
    try {
        return fs.unlinkSync(`${file}`)
    }
    catch (err) {
        console.log(err);
    }
}

const appendData = (file, data) => {
    return fs.appendFileSync(`${file}`, `${data}\n`)
}

const renameFile = (file, otherfile) => {
    try {
        return fs.renameSync(`${file}`, `${otherfile}`)
    }
    catch (err) {
        console.log(err);
    }
}

const operation = {
    read: () => console.log(readFile(file)),
    create: () => createFile(file),
    delete: () => deleteFile(file),
    append: () => appendData(file, arr[2]),
    rename: () => renameFile(file, arr[2])
}

if (operation[opr]) {
    operation[opr]()
}
else {
    console.log("please choose correctly operation");
}
