const EventEmitter = require("events")
const fs = require("fs");
const { json } = require("stream/consumers");
const emitter = new EventEmitter();
let saveData;
try {
    saveData = require("./data.json")
}
catch (err) {
    saveData = {
        "user-login": 0,
        "user-update": 0,
        "user-purchase": 0,
        "user-logout": 0
    }
}

const saveFile = async () => {
    try {
        await fs.promises.writeFile("data.json", JSON.stringify(saveData))
    }
    catch (err) {
        console.log(err);

    }
}

emitter.on('user-login', (arg) => {
    console.log(`${arg} you are successfuly login !`);
    saveData["user-login"]++
    saveFile()
})

emitter.on('user-purchase', (arg1, arg2) => {
    console.log(`you are purchased product is ${arg1}  and ${arg2}`);
    saveData["user-purchase"]++
    saveFile()
})

emitter.on('user-update', (arg1, arg2) => {
    console.log(`${arg1} you are updated data is ${arg2}`);
    saveData["user-update"]++
    saveFile()
})

emitter.on('user-logout', (arg) => {
    console.log(`${arg} you are logout from the page !`);
    saveData["user-logout"]++
    saveFile()
})

emitter.on('summary', () => {
    console.log(saveData);

})
emitter.emit("user-login", 'yugal')
emitter.emit("user-purchase", 'laptop', 'watch')
emitter.emit("user-update",'yugal','email')
emitter.emit("user-logout","yugal")

emitter.emit("summary")
