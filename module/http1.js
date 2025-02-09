const http = require("http")
const fs = require('fs')
const { parse } = require("path")
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end(JSON.stringify({
            status: true,
            massage: "this the get to nature"
        }))
    }
    else if (req.url == "/data" && req.method=="POST") {
        // // read heavy data together and go to load on server
        // fs.readFile("./data.json","utf8",(err,data)=>{
        //     if(err) throw err
        //     else {
        //        res.write(data)
        //        res.end()
        //     }
        // })

        // for read data in small chunks form 
        const data = fs.createReadStream("./data.json","utf8")
        data.pipe(res);

        let str="";
        req.on('data',(chunk)=>{
            str+=chunk;
        })
        req.on("end",()=>{
            console.log(str)   
        })
    }
    else {
        res.end(JSON.stringify({
            success: false,
            massafe: "this is not  good,"
        }))
    }
})
server.listen(2045, (err) => {
    if (err) throw err
    console.log("this port is lestion 2045");

})