const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (ekspresi) => {
  let IXX = await promiseTheaterIXX();
  let VGC = await promiseTheaterVGC();
  return [...Object.values(IXX), ...Object.values(VGC)].filter(
    (a) => a.hasil === ekspresi
  ).length;
};

module.exports = {
  promiseOutput,
};
