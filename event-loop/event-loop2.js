const sleep_st = (t) => new Promise((r) => setTimeout(r, t));
const sleep_lm = () => new Promise((r) => setImmediate(r));

(async () => {
  setImmediate(() => console.log(1));
  console.log(2);
  await sleep_st(0);
  setImmediate(() => console.log(3));
  console.log(4)
})();
