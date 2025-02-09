// const { stdin, stdout } = require("process")
// const readline = require('readline')
// const rl = readline.createInterface({
//     input: stdin,
//     output: stdout
// })
// const todos = []
// const todofun = () => {
//     console.log("\n----- welcome to todoList -----");
//     console.log("1. Add new statement.");
//     console.log("2. view the list.");
//     console.log("3. remove the statement.");
//     console.log("4. exit");
//     rl.question("choose option : ", (opt) => {
//         if (opt == 1) {
//             rl.question('enter the task : ', (task) => {
//                 todos.push(task)
//                 console.log(`the added task is : ${task}`);
//                 todofun()
//             })
//         }
//        else if (opt == 2) {
//             console.log("your todo list ");
//             todos.forEach((ele, ind) => {
//                 console.log(`${ind+1}. ${ele}`);
//             })
//             todofun()
//         }
//         else if(opt==="3"){
//             rl.question("enter the elememt number you will remove : ",(num)=>{
//                 if(num>0 && num<=todos.length){
//                     const data =  todos.splice(num-1,1)
//                     console.log(`remove data is : ${data}`);       
//                 }
//                 else{
//                     console.log("invalid number please try againe ");                    
//                 }
//                 todofun()
//             })
//         }
//         else if(opt==="4"){
//             console.log("have a nice day !");          
//             rl.close()
//         }
//         else{
//             console.log("you will enter invalid number please enter correct number ");
//             todofun()
//         }
//     })
// }

// todofun()

const express = require("express")
const app = express();
const todos = []
app.use(express.json())
app.get('/', (req, res) => {
    res.status(200).send({ status: true, message: "wellcome to home page" })
})

app.get('/todo', (req, res) => {
    res.status(200).send({todos})
})

app.post('/todo', (req, res) => {
    todos.push(req.body)
    // console.log(`added data is : ${req.body.message}`);
    res.status(200).send(`data will added successfuly : ${req.body.message}`)
})

app.delete("/todo/:id", (req, res) => {
    const id = parseInt(req.params.id)
    if (isNaN(id) || id < 1 || id > todos.length) {
        return res.status(404).json({ error: "invalide ids take correct this" })
    }
    const data = todos.splice(id - 1, 1)
    res.status(200).send({ msg: "the data successfuly removed", data })
})

app.listen(3006, (err) => {
    if (err) console.log(err);
    console.log('the port 3006 successfuly run on the server !');
})
