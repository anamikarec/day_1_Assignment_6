const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on("sendMessage",()=>{
    console.log("you are trying to send some information")
})

emitter.emit("sendMessage");

let c = 0;
setInterval(()=>{
c++;
emitter.emit("sendMessage");
if(c===10){
    console.log("\n existing application......");
    process.exit();
}
},1000);

// process.on('SIGINT',function(){
   
// })