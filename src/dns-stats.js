const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};
  let Domains = domains.map((e) => e.split(".").reverse());
  Domains.forEach((el) => {
    let x = "";
    for (let i = 0; i < el.length; i++) {
      x += "." + el[i];
      if (res[x] === undefined) {
        res[x] = 1;
      } else {
        res[x]++;
      }
    }
  });
  return res;
}

module.exports = {
  getDNSStats,
};
