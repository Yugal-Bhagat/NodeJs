const express = require("express");
const port = require("../../env");
const multer = require('multer')
// const upload = multer({ dest: 'uploads/' })
const fs = require('fs')
const imageDb = []
const app = express()
app.use(express.static("view"))
app.use(express.static("uploads"))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })
  
app.get("/", (req, res) => {
    res.render("index")
})

app.post('/profile', upload.single('avatar'), function (req, res) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log(req.body);
    console.log(req.file.filename);
    
    fs.renameSync(`uploads/${req.file.filename}`,`uploads/${req.body.fullname}`)
    imageDb.push(req.body.fullname)
    res.send(`<image src='/${req.body.fullname}'></image>`)

})

app.get('/images', (req, res) => {
    let html = ""
    imageDb.forEach((img) => {
        html += `<image width="50%" src='/${img}'></image>`
    })
    res.send(html)
})

app.listen(port, () => {
    console.log(`the port ${port} successfuly run !`);
})