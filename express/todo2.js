// const express = require("express")
// const fs = require("fs")
// const app = express()
// app.use(express.json())
// app.get("/todo", (req, res) => {
//     const todos = fs.existsSync("./demo.json") ? JSON.parse(fs.readFileSync("./demo.json", "utf8")) : []
//     res.status(200).send({ todos })
// })
// app.post("/todo", (req, res) => {
//     const data = fs.existsSync("./demo.json") ? JSON.parse(fs.readFileSync("./demo.json", "utf8")) : []
//     data.push(req.body)
//     fs.writeFileSync("./demo.json", JSON.stringify(data))
//     res.status(201).send(`the data will added successfuly ${req.body.message}`)
// })
// app.delete("/todo/:id", (req, res) => {
//     try {
//         const data = JSON.parse(fs.readFileSync("./demo.json", "utf8"))
//         console.log(data.length);
//         if (data.length != 0) {
//             const id = parseInt(req.params.id)
//             if (!isNaN(id) || id > 0 || id < todos.length) {
//                 const removedata = data.filter((todo) => todo.id != id)
//                 fs.writeFileSync("./demo.json", JSON.stringify(removedata))
//                 res.status(201).send(`the data will removed successfuly id : ${req.params.id}`)
//             }
//         }
//         else {
//             res.status(404).send({ success: false, message: "data not read !" })
//         }
//     } catch (err) {
//         console.log(`some error inn file resolve it : ${err}`);
//         res.status(404).send({ success: false, message: "data not read !" })
//     }
// })
// app.listen(3004, console.log("the port 3004 are successfuly run on server")) 

// const express = require("express")
// const fs = require("fs")
// const app = express()
// app.use(express.json())
// let parsedata;
// if (fs.existsSync("./demo.json")) {
//     fs.readFile("./demo.json", "utf-8", (err, data) => {
//         if (err) {
//             console.log("file con not read the file data please can you try this again.");
//         }
//         else {
//             parsedata = JSON.parse(data)
//         }
//     })
// }
// else {
//     parsedata = []
// }
// app.get("/", (req, res) => {
//     res.status(200).send({
//         success: true,
//         message: "Welcome to the home page !"
//     })
// })

// app.get("/tododata", (req, res) => {
//     res.status(200).send(parsedata)
// })

// app.post("/addlist", (req, res) => {
//     const ip = req.body
//     parsedata.push(ip)
//     fs.writeFile("./demo.json", JSON.stringify(parsedata), (err) => {
//         if (err) {
//             console.log("file not created something error in the file ");

//         } else {
//             console.log("file will successfuly created !");

//         }
//     })
//     res.status(200).send({
//         success: true,
//         message: "data will added successfuly in file",
//         data: ip
//     })
// })

// app.delete("/deletedata/:id", (req, res) => {
//     try {

//         const id = parent(req.params.id)
//         let remove
//         if (isNaN(id)) {
//             res.status(404).send({
//                 success: false,
//                 message: "the choose correct id for the data and try again"
//             })
//         }

//         const result = parsedata.filter((ele) => {
//             if (ele.id == id) {
//                 remove = ele
//             }
//             return ele.id != id
//         })
//         fs.writeFile("./demo.json", JSON.stringify(result), (err) => {
//             if (err) {
//                 console.log("file not created something error in the file ");

//             } else {
//                 console.log("file will successfuly created !");

//             }
//         })
//         if (!remove) {
//             res.status(404).send({
//                 success: false,
//                 message: "this id not persent in the data ",

//             })
//         }
//         res.status(200).send({
//             success: true,
//             message: "data will remove from list !",
//             deletedata: remove

//         })
//     }
//     catch (err) {
//         console.log(`the file in error : ${err.message}`);

//     }
// })

// app.put("/update/:id", (req, res) => {
//     const ip = req.params
//     const getdata = req.body
//     let newData = parsedata.map((ele) => {
//         if (ele.id == ip.id) {
//             return { ...getdata }
//         } else {
//             return ele
//         }
//     })
//     fs.writeFile("./demo.json", JSON.stringify(newData), (err) => {
//         if (err) {
//             console.log("file not created something error in the file ");

//         } else {
//             console.log("file will successfuly created !");

//         }
//     })
//     res.status(200).send({
//         success: true,
//         message: "data will updated!",

//     })
// })
// app.patch("/partialyupdate", (req, res) => {
//     const ip = req.query
//     const getdata = req.body
//     let newData = parsedata.map((ele) => {
//         if (ele.id == ip.id) {
//             return { ...ele,...getdata }
//         } else {
//             return ele
//         }
//     })
//     fs.writeFile("./demo.json", JSON.stringify(newData), (err) => {
//         if (err) {
//             console.log("file not created something error in the file ");

//         } else {
//             console.log("file will successfuly created !");

//         }
//     })
//     res.status(200).send({
//         success: true,
//         message: "data will partaily updated!",

//     })
// })
// app.listen(3004, (err) => {
//     if (err) {
//         console.log(`port not run something error : ${err}`);
//     }
//     else {
//         console.log("the port 3004 successfuly run on server !");
//     }
// })

const express = require('express')
const { readFileSync } = require('fs')
const fs = require('fs/promises')
const app = express()
app.use(express.json())
const readData = async () => {
    try {
        const data = await fs.readFile('./demo.json', 'utf-8')
        return JSON.parse(data);
    }
    catch (err) {
        console.log(`the file not read data : ${err}`);
        return [];
    }
}

const writeData = async (data) => {
    try {
        await fs.writeFile('./demo.json', JSON.stringify(data))
    }
    catch (err) {
        console.log(`the file can not write data : ${err}`);
    }
}

app.get("/", (req, res) => {
    res.status(200).send({
        success: true,
        message: "Welcome to the home page !"
    })
})

app.get("/todo", async (req, res) => {
    const data = await readData()
    res.status(200).send(data)
})

app.post('/addData', async (req, res) => {
    const data = await readData()
    const getBody = req.body
    data.push(getBody)
    await writeData(data)
    res.status(200).send({
        success: true,
        msg: "the data will be added successfully",
        addedData: getBody
    })
})

app.delete('/deleteData', async (req, res) => {
    const data = await readData()
    const getBody = req.body
    const result = data.filter((ele) => ele.id != getBody.id)
    await writeData(result)
    res.status(200).send({ success: true, msg: "data will remove successfully ", removeData: getBody })
})

app.delete('/deletebyidData/:id', async (req, res) => {
    const id = req.params.id;
    const data = await readData();
    const newData = data.filter((item) => String(item.id) !== String(id));
    if (newData.length === data.length) {
        return res.status(404).json({ success: false, msg: 'ID not found' });
    }
    await writeData(newData);
    res.status(200).json({ success: true, msg: 'Data removed successfully' });
});
app.put('/updateAll/:id', async (req, res) => {
    const data = await readData()
    const getBody = req.body
    const id = req.params.id

    const result = data.map((ele) => {
        if (ele.id == id) {
            return { ...getBody }
        }
        return ele
    });
    writeData(result)
    res.status(200).send({ success: true, msg: "the update all data successfully " })
})
app.patch('/updatepartialy', async(req, res) => {
    const data = await readData()
    const ip = req.query
    const getBody = req.body
    const result = data.map((ele) => {
        if (ele.name == ip.name) {
            return { ...ele, ...getBody }
        }
        return ele
    })
    await writeData(result)
    res.status(200).send({ success: true, msg: "the update partialy data successfully " })

})

// aditional 

app.get('/todo/completed',(req,res)=>{
    const data = JSON.parse(readFileSync('../middleware/data.json','utf-8'))
    const result = data.filter((ele)=>ele.title)
    // console.log(result);
    res.send(result)
})

app.get('/todo/category/:category',(req,res)=>{
    const data = JSON.parse(readFileSync('../middleware/data.json','utf-8'))
    const result = data.filter((ele)=>ele.category.toLowerCase()==req.params.category.toLowerCase())
    // console.log(result);
    res.send(result)
})

app.get('/todo/search',(req,res)=>{
    const data = JSON.parse(readFileSync('../middleware/data.json','utf-8'))
    const query = req.query.name.toLowerCase()
    const result = data.filter((ele)=>ele.title.toLowerCase().includes(query))
    // console.log(result);
    res.send(result)
})
// const port = process.env.PORT || 2000
const port = require("./env.js")
app.listen(port, (err) => {
    if (err) {
        console.log(`port not run something error : ${err}`);
    }
    else {
        console.log(`the port ${port} successfuly run on server !`);
    }
})