const express = require("express")
const port = require("../../env")
const multer  = require('multer')
const app = express()
app.use(express.static("view"))

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
  res.send("index");
});
// app.post("/profile", upload.array("photos", 12), (req, res) => {
//   console.log(req.files); // Array of uploaded files
//   res.send("Multiple files uploaded!");
// });

const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'photos', maxCount: 8 }])
app.post('/profile', cpUpload, function (req, res, next) {
  // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
  //
  // e.g.
  //  req.files['avatar'][0] -> File
  //  req.files['gallery'] -> Array
  //
  // req.body will contain the text fields, if there were any
  console.log(req.files['avatar'][0]);
  console.log(req.files['photos']);
  
  res.send("Multiple files uploaded!");
})
app.listen(port,()=>{
    console.log(`the server is running on the ${port}`);
    
})
