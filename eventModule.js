const EventEmitter = require('events')
const emitter = new EventEmitter();
// emitter.on("info",()=>{
//     console.log("Hari bol Hari bol ");
// })
// emitter.emit("info")

// emitter.on("info",(prem)=>{
//     console.log("Hari bol Hari bol ");
// console.log(`bolo ${prem}`);

// })
// emitter.emit("info","Radhe Radhe")

// emitter.on("info",(prem,sathi)=>{
//     console.log(`${prem} and ${sathi} ki hamesha salamat rahe !`);   
// })
// emitter.emit('info','radha','krishna')

emitter.on("info",(arg)=>{
    console.log(`${arg.prem} and ${arg.sathi} ki hamesha salamat rahe !`);   
})
emitter.emit('info',{prem:'radha',sathi:'krishna'})