const fs = require("fs");

setImmediate(() => console.log(1));

Promise.resolve(() => console.log(2));

process.nextTick(() => console.log(3));

fs.readFile(__filename, () => {
  console.log(4);
  setTimeout(() => console.log(5));
  setImmediate(() => console.log(6));
  process.nextTick(() => console.log(7));
});
