const { error } = require('console')
const fs = require('fs')
// fs.writeFile('demos.txt', "this is my file that auto created!", (err) => {
//     if (err) console.error(err);
//     else console.log("this file casre fuly created");

// })


fs.appendFile('demos.txt', "\nthis is new massage for you and you will resived it!", (err) => {
    if (err) console.error(err);
    else console.log("this is new data to append in existing file");
})

fs.readFile("demos.txt","utf8",(err,data)=>{
    if(err) console.error(err);
    else console.log(data);
})

// fs.unlink('demos.txt', (err) => {
//     if (err) console.error(err);
//     else console.log("successfuly deleted file !");


// })