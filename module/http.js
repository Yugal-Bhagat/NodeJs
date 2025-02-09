const http = require("http")
const datas = require("./data.json")
console.log(datas);

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end(JSON.stringify({
            status: true,
            massage: "this the get to nature"
        }))
    }
    else if (req.url == "/product") {
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify(datas))
    }
    else {
        res.end(JSON.stringify({
            success: false,
            massafe: "this is not  good,"
        }))
    }
})
server.listen(2040, (err) => {
    if (err) throw err
    console.log("this port is lestion30400");

})