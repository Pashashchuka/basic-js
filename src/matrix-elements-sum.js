const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let arr = [];
  let res = 0;
  matrix.forEach((a) => {
  a.forEach((b, c) => {
      if (b === 0) arr.push(c);
      if (!arr.includes(c)) res += b;
    });
  });
  return res;
}

module.exports = {
  getMatrixElementsSum,
};
