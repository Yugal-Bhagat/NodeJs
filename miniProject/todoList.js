const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const todos = []
const showModule = () => {
    console.log("\n1. Add the task in todo");
    console.log("2. view the todo list");
    console.log("3. Exit");
    rl.question("choose the option: ", handleOption)

}
const handleOption = (opt) => {

    if (opt == 1) {
        rl.question("\n enter the task: ", (task) => {
            todos.push(task)
            console.log(`the Added task : ${task}`);
            showModule()
        })
    }
    else if (opt == 2) {
        console.log("\nyour todo list ");
        todos.forEach((task, ind) => {
            console.log(`${ind + 1}. ${task}`);
        })
        showModule()
    }
    else if (opt == 3) {
        console.log("\ngood byy !");
        rl.close()

    }
    else {
        console.log("invailid option choose,please choose correct option");
        showModule();
    }
}
showModule()