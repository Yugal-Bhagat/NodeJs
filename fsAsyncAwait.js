const fs = require("fs")

const readfolder = async () => {
    try {
        const res = await fs.promises.readdir(__dirname);
        console.log(res);
    }
    catch (err) {
        console.log(err);
    }
}
readfolder()

const wrtFL = async()=>{
    try{
      await  fs.promises.writeFile("demoPromises.txt","please write data first ")
    }
    catch(err){
        console.error("some thing is wrong in which file creation time please check it");
        
    }
}
// wrtFL()

const readfile = async()=>{
    try{
         const data = await fs.promises.readFile("demos.txt","utf8")
         console.log(data);
         
    }
    catch(err){
        console.log(err);
        
    }
}
readfile()

const appendFiles = async()=>{
    try{
       await fs.promises.appendFile('demoPromises.txt',"\nadd data in this perticular file")
    }
    catch(err){
    console.log(err);
    }
}
appendFiles()

const deletefile = async()=>{
    try{
       await fs.promises.unlink("demoPromises.txt")
    }
    catch(err){
        console.log(err);
        
    }
}
// deletefile()