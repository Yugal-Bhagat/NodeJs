const http = require("http")
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.setHeader("Content-type", "text/plain")
        res.write("hello bassicly this is the home page !")
        res.end();
    }
    else if (req.url == '/source') {
        res.setHeader("Content-type", "text/html")
        res.write("<h1>Radhe Radhe Kanha ji well come to my home</h1>")
        res.end();
    }

    else if (req.url == '/contact') {
        res.writeHead(200, { "content-type": "application/json" })
        res.end(JSON.stringify({
            name: "yugal",
            age: "20",
            work: "krishna bhakt"
        }));
    }

})
server.listen(2020, (err) => {
    if (err) throw err
    else console.log("port number 2020 is listen on time !");

})