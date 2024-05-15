const sleep_st = (t) => new Promise((r) => setTimeout(r, t));
const sleep_lm = () => new Promise((r) => setImmediate(r));

(async () => {
  setImmediate(() => console.log(1));
  console.log(2);
})();
