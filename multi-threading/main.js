const { Worker } = require("worker_threads");

function doSomethingCPUIntensive(name) {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./sub.js", { workerData: { name } });

    worker.on("message", resolve);
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0) {
        reject(new Error(`stopped with exit code ${code}`));
      }
    });
  });
}
(async () => {
  try {
    const result = await doSomethingCPUIntensive("Dineshwar");
    console.log("Parent: ", result);
  } catch (err) {
    console.log(err);
  }
})();
