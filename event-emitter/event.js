const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on("testEvent", (msg)=>{
  console.log(msg);
})

myEmitter.emit("testEvent", "Testing Event");
