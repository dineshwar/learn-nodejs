import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

myEmitter.on("testEvent", (msg) => {
  console.log(msg);
});

myEmitter.emit("testEvent", "Testing Event");

// This listener will not work due to
// At the time of publishing the event,
// there must be an EventEmitter listener existing to listen to the published event.
myEmitter.on("testEvent", (msg) => {
  console.log(msg + " 2");
});
// ------------------EventEmitter Instance Should Be Singleton-------------------
const event1 = new EventEmitter();
const event2 = new EventEmitter();

// The listeners won’t work if registered on a separate EventEmitter instance.
event2.on("myEvent", () => {
  console.log("Log from event 2");
});

event1.emit("myEvent");

// -----------------Event Emitter Synchronous-----------------------------
const eventEmitter = new EventEmitter();

eventEmitter.on("myEvent", (data) => {
  console.log(data);
});

console.log("Statement A");
eventEmitter.emit("myEvent", "Statement B");
console.log("Statement C");
