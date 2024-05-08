const { workerData, parentPort } = require("worker_threads");

// you can do intensive sychronous stuff here
function theCPUIntensiveTask(name) {
  return `Hello World ${name}`;
}

const intensiveResult = theCPUIntensiveTask(workerData.name);

parentPort.postMessage({ intensiveResult });
